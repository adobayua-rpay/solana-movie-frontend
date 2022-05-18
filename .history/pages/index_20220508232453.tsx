
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
    <div className={styles.App}>
      
      <Head>
        <title>Delay Pay</title>
      </Head>
      <AppBar />
      <div className='row'>
      <Tabs variant='soft-rounded' colorScheme='green'>
  
  <TabList>
   

    
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
    <Form />
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
