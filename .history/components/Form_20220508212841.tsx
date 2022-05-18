import { FC } from 'react'
import { Movie } from '../models/Movie'
import { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea, useDisclosure } from '@chakra-ui/react'
import * as web3 from '@solana/web3.js'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { Modal, ButtonToolbar } from 'rsuite';

const MOVIE_REVIEW_PROGRAM_ID = 'CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN'

export const Form: FC = () => {
    // const [title, setTitle] = useState('')
    // const [rating, setRating] = useState(0)
    // const [description, setDescription] = useState('')

    const { isOpen, onOpen, onClose } = useDisclosure()


    const [amount, setAmount] = useState(0)
    const [time, setTime] = useState('')
    const [receivingAddress, setReceivingAddress] = useState('')

    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const movie = new Movie(amount, time, receivingAddress)
        handleTransactionSubmit(movie)
    }

    const handleTransactionSubmit = async (movie: Movie) => {
        if (!publicKey) {
            alert('Please connect your wallet!')
            return
        }

        const buffer = movie.serialize()
        const transaction = new web3.Transaction()
        const newBugger = ['Hi', 'No']

        const [pda] = await web3.PublicKey.findProgramAddress(
            [publicKey.toBuffer(), Buffer.from(movie.receivingaddress)],// new TextEncoder().encode(movie.title)],
            new web3.PublicKey(MOVIE_REVIEW_PROGRAM_ID)
        )

        const instruction = new web3.TransactionInstruction({
            keys: [
                {
                    pubkey: publicKey,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: pda,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: web3.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false
                }
            ],
            data: buffer,
            programId: new web3.PublicKey(MOVIE_REVIEW_PROGRAM_ID)
        })

        transaction.add(instruction)

        try {
            let txid = await sendTransaction(transaction, connection)
            alert(`Transaction submitted: https://explorer.solana.com/tx/${txid}?cluster=devnet`)
            console.log(`Transaction submitted: https://explorer.solana.com/tx/${txid}?cluster=devnet`)
        } catch (e) {
            console.log(JSON.stringify(e))
            alert(JSON.stringify(e))
        }
    }

    return (
        <div className='row'>

<div className='col-md-12'>
&nbsp;
</div>
<div className='col-md-12'>
&nbsp;
</div>
<div className='col-md-12'>
&nbsp;
</div>
<div className='col-md-12'>
&nbsp;
</div>
<div className='col-md-12'>
&nbsp;
</div>
<div className='col-md-12'>
&nbsp;
</div>

            <div className='col-md-6'>

                    <ButtonToolbar>
                 <Button onClick={onOpen}> Create a future Transaction </Button>
                 </ButtonToolbar>

                
                </div>
                <Modal open={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                </div>


        
    );
}