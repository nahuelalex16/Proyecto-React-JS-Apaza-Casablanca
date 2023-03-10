import React from 'react'
import { Heading } from '@chakra-ui/react'
import ItemList from "./ItemList"
import { useState, useEffect } from 'react'

const ItemListContainer = () => {

  const getProductos = async () =>{
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    return data
  };

  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProductos().then((productos) => setProductos(productos))
  }, []);

  return (
    <div>
      {/* <Heading as='h1' size='2xl' noOfLines={1} textAlign='center' marginTop='8rem'>
        Holi
      </Heading> */}
      <ItemList productos={productos}/>
    </div>

    
  )
}

export default ItemListContainer