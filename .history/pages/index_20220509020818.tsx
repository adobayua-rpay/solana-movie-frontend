
// import { Center, Box, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { AppBar } from '../components/AppBar'
import { MovieList } from '../components/MovieList'
import { Form } from '../components/Form'
// import styles from '../styles/Home.module.css'
import { Tabs, Divider, SimpleGrid,  Heading,  TabList, TabPanels, Tab, TabPanel, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Badge, Box } from '@chakra-ui/react'

  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    status: 'Active',
    transactions: 2,
    title: ' Create automatic and recurring payments on the solana network ',
    formattedPrice: 'Min Sol',
    reviewCount: 34,
    rating: 4,
  }

const Home: NextPage = () => {
  return (
    <div className= 'row'>

      <Head>
        <title>Delay Pay</title>
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
   

    
    <Tab> Home </Tab>
    <Tab> Active Payment Systems </Tab>
    <Tab> Wallet Transactions </Tab>
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
       <Heading>Inbuilt Models</Heading>
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


        {/* <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box>
        </Box> */}
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
  </TabPanels>
</Tabs>
</div>

    </div>

  )
}

export default Home
