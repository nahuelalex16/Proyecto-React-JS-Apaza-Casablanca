import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Badge, WrapItem } from '@chakra-ui/react'

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
                        maxH='20rem'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{nombre}</Heading>
                            <Text color='blue.600' fontSize='2xl'>
                                ${precio}
                            </Text>
                        </Stack>
                        <Badge>Categoria: {categoria}</Badge>
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