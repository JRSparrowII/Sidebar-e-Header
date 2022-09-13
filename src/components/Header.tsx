import {Flex, Text, Input, Icon, HStack, Box, Avatar} from '@chakra-ui/react'
import {RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Header(){
    return (
        <Flex 
            as="header" 
            w="100%" 
            maxWidth={1480} 
            h="20" 
            align="center"
            marginX="auto"
            mt="4"
            px="6"
        >
            <Text
                fontSize="3xl"
                fontWeight="bold"
                letterSpacing="tight"
                width="64"
            >
                Dashboard
                <Text as="span" ml="1" color="pink.500">.</Text>
            </Text>

            <Flex
                as="label"
                flex="1"
                py="4" //pading Horizontal
                px="8" //pading Vertical
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"
            >
                <Input //BARRA DE PESQUISA
                    color="gray.50"
                    variant="unstyled" //sem bordas
                    placeholder='Digite o que procura'
                    _placeholder={{color: 'gray.400'}}
                    px="4" //pading Horizontal
                    mr="4"
                />
                <Icon as={RiSearchLine} fontSize={20}/>
            </Flex>

            <Flex
                align="center"
                ml="auto"
            >  

            <HStack 
                spacing="8"
                mx="8"
                pr="8"
                py="1"
                color="gray.300"
                borderRightWidth={1}
                borderColor="gray.700"
            >
                <Icon as={RiNotificationLine} fontSize={20}/>
                <Icon as={RiUserAddLine} fontSize={20}/>
            </HStack>   

            {/* //NOME E EMAIL */}
            <Flex align="center"> 
                <Box mr="4" textAlign="right">
                    <Text>Carlos Henrique</Text>
                    <Text color="gray.300" fontSize="small">
                        henrique@gmail.com
                    </Text>
                </Box>

                <Avatar     //IMAGEM DO USUARIO
                    size="md" 
                    name='Carlos Henrique' 
                    src="https://github.com/carloshenriquepvh@hotmail.com.png">
                </Avatar>
            </Flex>

            </Flex>
        </Flex>
    );
}