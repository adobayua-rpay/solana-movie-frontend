
// import { Center, Box, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { AppBar } from '../components/AppBar'
import { MovieList } from '../components/MovieList'
import { Form } from '../components/Form'
import styles from '../styles/Home.module.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


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
      <p>one!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
</div>
      {/* <Center>
          <Form />
          <Heading as="h1" size="l" color="white" ml={4} mt={8}>          
          </Heading>
      </Center> */}
    </div>

  )
}

export default Home
