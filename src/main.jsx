import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Events from './Events'
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider theme={theme}>

      <Events />

    </ChakraProvider>
)
