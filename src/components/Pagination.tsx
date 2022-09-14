import {Flex, Button, Stack, Box, Text, Link, Icon } from '@chakra-ui/react'

export function Pagination(){
    return (
        // O STACK E VERTICAL POR PADRAO
        <Stack direction="row" spacing="6" mt="8" justify="space-between" align="center">
            
            <Box>
                <strong>1</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>

            <Stack direction="row" spacing="2">
                <Button 
                    size="sm" 
                    fontSize="xl" 
                    width="4"
                    colorScheme="pink"
                    disabled
                    _disabled={{
                        bg: "pink.500",
                        cursor: "default",
                    }}
                >
                    1
                </Button>
                <Button 
                    size="sm" 
                    fontSize="xl" 
                    width="4"
                    colorScheme="gray.700"   
                    _hover={{
                        bg: "gray.500",
                    }}             
                >
                    2
                </Button>
                <Button 
                    size="sm" 
                    fontSize="xl" 
                    width="4"
                    colorScheme="gray.700" 
                    _hover={{
                        bg: "gray.500",
                    }}              
                >
                    3
                </Button>
                <Button 
                    size="sm" 
                    fontSize="xl" 
                    width="4"
                    colorScheme="gray.700"  
                    _hover={{
                        bg: "gray.500",
                    }}              
                >
                    4
                </Button>
            </Stack>
            
        </Stack>
    );
}