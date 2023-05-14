import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import Schedule from './Schedule'
import Events from './Events'
// import Test from './Test'
import theme from './theme';
// import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider theme={theme}>
      {/* <Schedule /> */}
      <Events />
      {/* <Test /> */}
    </ChakraProvider>
)
