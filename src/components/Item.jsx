import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Badge, WrapItem, Tag } from '@chakra-ui/react'

const Item = ({id, nombre, img, precio, categoria}) => {
  return (
    <div>
        <WrapItem>
            <div key={id}>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                        src={img}
                        alt={nombre}
                        borderRadius='md'
                        maxH='30vh'
                        minW='15rem'
                        />
                        <Stack mt='6' spacing='1'>
                            <Heading size='md'>{nombre}</Heading>
                            <Text color='blue.600' fontSize='2xl'>
                                ${precio}
                            </Text>

                        </Stack>
                        <Tag>Categoria: {categoria}</Tag>
                    </CardBody>

                    <Divider />

                    <CardFooter>
                        <ButtonGroup spacing='2'>

                            <Button variant='solid' colorScheme='blue'>
                                Detalles
                            </Button>

                            <Button variant='ghost' colorScheme='blue'>
                                Agregar al carrito
                            </Button>

                        </ButtonGroup>
                    </CardFooter>

                </Card>
            </div>
        </WrapItem>
    </div>
  )
}

export default Item