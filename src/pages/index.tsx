import {Flex, Input, Button, Stack} from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center"  
      justify="center">
        <Flex 
          as="form" 
          w="100%" 
          maxWidth={360}
          bg="gray.800"
          // SE QUISER SABER EM PX multiplique por 4, se for em rem divide por 4
          p="8"
          borderRadius={8}
          flexDir="column"
        >
          <Stack spacing="4">          
            <Input 
              name='email' 
              type="email"
              placeholder="Your email"
              focusBorderColor='pink.500'
              bg="gray.900"
              variant="filled"
              _hover={{
                bg: 'gray.900'
              }}
              size="lg"
            />
            <Input 
              name='password' 
              type="password"
              placeholder="Your email"
              focusBorderColor='pink.500'
              bg="gray.900"
              variant="filled" 
              _hover={{
                bg: 'gray.900'
              }} 
              size="lg"   
            />            
        </Stack>
        <Button type='submit' mt="6" colorScheme="pink">Entrar</Button>
        </Flex>
    </Flex>
  )
}
