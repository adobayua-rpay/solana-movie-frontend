
// import { Center, Box, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { AppBar } from '../components/AppBar'
import { MovieList } from '../components/MovieList'
import { Form } from '../components/Form'
// import styles from '../styles/Home.module.css'
import { Tabs, Divider, Icon, SimpleGrid,  Heading,  TabList, TabPanels, Tab, TabPanel, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Badge, Box, Button } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, CheckCircleIcon } from '@chakra-ui/icons'

  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    status: '',
    transactions: '',
    title: ' Create automatic and recurring payments on the solana network ',
    formattedPrice: 'Min Sol',
    reviewCount: 34,
    rating: 4,
  }

const Home: NextPage = () => {
  return (
    <div className= 'row'>

      <Head>
        <title>DelreyIO</title>
      </Head>
      <AppBar />
      <div className='col-md-12'>
         &nbsp;
       </div>
       <div className='col-md-12'>
         &nbsp;
       </div>
      <div className='row'>
      <Tabs variant='soft-rounded' colorScheme='green'>
  
  <TabList>
   

    &nbsp; &nbsp; &nbsp;
    <Tab> Monitoring </Tab>
    <Tab> Home </Tab>
    <Tab> Active Apps </Tab>
    <Tab> Active Nodes </Tab>
    <Tab> Wallet Transactions </Tab>
    <Tab> Analytics </Tab>
    <Tab> Explorer </Tab>
    <Tab> Enhanced API </Tab>
  </TabList>
  <TabPanels>
  <TabPanel>
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
  <div className='col-md-12'>
  <SimpleGrid columns={3} spacing={3}>
       <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xl'
            textTransform='uppercase'
            ml='2'
          >
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h1'
          lineHeight='tight'
          isTruncated
        >
                 <Heading> Active Nodes    </Heading>

     <p>
       99.7% SLA
     </p>
</Box>

<p>
  &nbsp;
</p>
<p>
  &nbsp;
</p>
        <Box>
          <Box as='span' color='red.300' fontSize='lg'>
            7
          </Box>
          <p>
            &nbsp;
          </p>
          <p>
         System Check <CheckCircleIcon w={8} h={8} color="green.500" />
          </p>
        </Box>

      </Box>
    </Box>

    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xl'
            textTransform='uppercase'
            ml='2'
          >
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h1'
          lineHeight='tight'
          isTruncated
        >
                 <Heading> Disabled Nodes    </Heading>
                 <p>
     - SLA
     </p>
     
</Box>

<p>
  &nbsp;
</p>
<p>
  &nbsp;
</p>
        <Box>
          <Box as='span' color='red.300' fontSize='lg'>
            1
          </Box>
          <p>
            &nbsp;
          </p>
        </Box>

      </Box>
    </Box>

    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xl'
            textTransform='uppercase'
            ml='2'
          >
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h1'
          lineHeight='tight'
          isTruncated
        >
                 <Heading> Active Apps    </Heading>

     
</Box>

<p>
  &nbsp;
</p>
<p>
  &nbsp;
</p>
        <Box>
          <Box as='span' color='red.300' fontSize='lg'>
            28
          </Box>
          <p>
            &nbsp;
          </p>
        </Box>

      </Box>
    </Box>

    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xl'
            textTransform='uppercase'
            ml='2'
          >
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h1'
          lineHeight='tight'
          isTruncated
        >
                 <Heading> Disabled Apps    </Heading>

     
</Box>

<p>
  &nbsp;
</p>
<p>
  &nbsp;
</p>
        <Box>
          <Box as='span' color='red.300' fontSize='lg'>
            19
          </Box>
          <p>
            &nbsp;
          </p>
        </Box>

      </Box>
    </Box>


    </SimpleGrid>
       </div>
  </TabPanel>

    <TabPanel>

    <div className='col-md-12'>
         &nbsp;
       </div>
       <div className='col-md-12'>
         &nbsp;
       </div>
       <div className='col-md-12'>
       <Heading> Payment Nodes </Heading>
       </div>
       <div className='col-md-12'>
         &nbsp;
       </div>
       <SimpleGrid columns={3} spacing={3}>
       <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            Custom Payments
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.status} status &bull; {property.transactions} transactions
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
         Create Custom Money Movement Workflows On The Solana Network
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
          <p>
            &nbsp;
          </p>
          <p>
          <Button colorScheme='teal' variant='link'>
    Go
  </Button>
          </p>
        </Box>

      </Box>
    </Box>


       <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            Recurring Payments
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.status} status &bull; {property.transactions} transactions
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>

      </Box>
    </Box>

    <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            Margin Call / Liquidity Protection
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.status} status &bull; {property.transactions} transactions
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
         Protect against liquidation on the Solana network
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>

      </Box>
    </Box>

</SimpleGrid>
<p>
  &nbsp;
</p>
<SimpleGrid>
<Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            Streaming Payments
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.status} status &bull; {property.transactions} transactions
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
         Continuous Settlement Protocol
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>

      </Box>
    </Box>
</SimpleGrid>
<div className='col-md-12'>
         &nbsp;
       </div>
       <div className='col-md-12'>
         &nbsp;
       </div>
<Divider />

<div className='col-md-12'>
         &nbsp;
       </div>
       <div className='col-md-12'>
         &nbsp;
       </div>
       <div className='col-md-12'>
       <Heading> Analytics </Heading>
       <p>
         Your engine to build your analytics solution on the solana transaction network
       </p>
       </div>

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
        <Th> Type  </Th>
        <Th> Amount </Th>
        <Th> Frequency </Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td> Recurring </Td>
        <Td> 6.89 SOL </Td>
        <Td isNumeric> Weekly </Td>
      </Tr>
      <Tr>
        <Td> One Time </Td>
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

    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
  </TabPanels>
  
</Tabs>
</div>

    </div>

  )
}

export default Home
