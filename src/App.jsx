import * as React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'
import ItemCount from './components/ItemCount'


const App = () => {
  return (
    <>
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer/>
    </ChakraProvider>
    </>
  )
}

export default App
