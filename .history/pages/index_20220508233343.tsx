
// import { Center, Box, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { AppBar } from '../components/AppBar'
import { MovieList } from '../components/MovieList'
import { Form } from '../components/Form'
import styles from '../styles/Home.module.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'


const Home: NextPage = () => {
  return (
    <div className= 'row'>
       <div className='col-md-12'>
         &nbsp;
       </div>
      <Head>
        <title>Delay Pay</title>
      </Head>
      <AppBar />
      <div className='col-md-12'>
         &nbsp;
       </div>
      <div className='row'>
      <Tabs variant='soft-rounded' colorScheme='green'>
  
  <TabList>
   

    
    <Tab> Hackathon Demo </Tab>
    <Tab> Roadmap </Tab>
    <Tab> Wallet Transactions </Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <div className='row'>
        <div className='col-md-12'>
        <Form />

        </div>
      </div>
    </TabPanel>
    <TabPanel>
     
     
    <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption> Green Indicates Future Transactions </TableCaption>
    <Thead>
      <Tr>
        <Th> To convert  </Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
     
    </TabPanel>
  </TabPanels>
</Tabs>
</div>

    </div>

  )
}

export default Home
