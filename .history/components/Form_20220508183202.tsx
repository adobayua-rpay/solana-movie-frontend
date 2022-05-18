import { FC } from 'react'
import { Movie } from '../models/Movie'
import { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea } from '@chakra-ui/react'
import * as web3 from '@solana/web3.js'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { Calendar, Badge } from 'rsuite';
import {Promise} from 'es6-promise'
import 'rsuite/dist/rsuite.min.css';

const MOVIE_REVIEW_PROGRAM_ID = 'CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN'

export const Form: FC = () => {
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(0)
    const [description, setDescription] = useState('')

    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const movie = new Movie(title, rating, description)
        handleTransactionSubmit(movie)
    }

    const handleTransactionSubmit = async (movie: Movie) => {
        if (!publicKey) {
            alert('Please connect your wallet!')
            return
        }

        const buffer = movie.serialize()
        const transaction = new web3.Transaction()

//         const [pda] = await web3.PublicKey.findProgramAddress(
//             [publicKey.toBuffer(), Buffer.from(movie.title)],// new TextEncoder().encode(movie.title)],
//             new web3.PublicKey(MOVIE_REVIEW_PROGRAM_ID)
//         )


//         const from = web3.Keypair.generate();
//   const airdropSignature = await connection.requestAirdrop(
//     from.publicKey,
//     web3.LAMPORTS_PER_SOL, // 10000000 Lamports in 1 SOL
//   );
//   await connection.confirmTransaction(airdropSignature);

        const to = new web3.PublicKey("zjpVRVHMzg3qmHq5tHvxiUKVeiLJ9oHD4ia5obZf1c6");

        transaction.add(web3.SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: to,
            lamports: 1000000,
        }));

        console.log(to.toString())

        const instruction = new web3.TransactionInstruction({
            keys: [
                {
                    pubkey: publicKey,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: to,
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

    // function getTodoList(date: any) {
    //     const day = dateFns.getDate(date);
      
    //     switch (day) {
    //       case 10:
    //         return [
    //           { time: '10:30 am', title: 'Meeting' },
    //           { time: '12:00 pm', title: 'Lunch' }
    //         ];
    //       case 15:
    //         return [
    //           { time: '09:30 pm', title: 'Products Introduction Meeting' },
    //           { time: '12:30 pm', title: 'Client entertaining' },
    //           { time: '02:00 pm', title: 'Product design discussion' },
    //           { time: '05:00 pm', title: 'Product test and acceptance' },
    //           { time: '06:30 pm', title: 'Reporting' },
    //           { time: '10:00 pm', title: 'Going home to walk the dog' }
    //         ];
    //       default:
    //         return [];
    //     }
    //   }

    // function renderCell(date: any) {
    //     const list = getTodoList(date);
      
    //     if (list.length) {
    //       return <Badge className="calendar-todo-item-badge" />;
    //     }
      
    //     return null;
    //   }

    return (
        <Box
            p={4}
            display={{ md: "flex" }}
            maxWidth="32rem"
            borderWidth={1}
            margin={2}
            justifyContent="center"
        >
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <FormLabel color='gray.200'>
                        Amount
                    </FormLabel>
                    <Input
                        id='title'
                        color='gray.400'
                        onChange={event => setTitle(event.currentTarget.value)}
                    />
                </FormControl>
                <FormControl isRequired>
                    {/* <FormLabel color='gray.200'>
                       Select Date
                    </FormLabel> */}
                    {/* <div style={{ width: 280 }}>
    <Calendar compact bordered />{' '}
  </div> */}
                    {/* <Textarea
                        id='review'
                        color='gray.400'
                        onChange={event => setDescription(event.currentTarget.value)}
                    /> */}
                </FormControl>
                {/* <FormControl isRequired>
                    <FormLabel color='gray.200'>
                        Rating
                    </FormLabel>
                    <NumberInput
                        max={5}
                        min={1}
                        onChange={(valueString) => setRating(parseInt(valueString))}
                    >
                        <NumberInputField id='amount' color='gray.400' />
                        <NumberInputStepper color='gray.400'>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl> */}
                <Button width="full" mt={4} type="submit">
                   Send
                </Button>
            </form>
        </Box>
    );
}