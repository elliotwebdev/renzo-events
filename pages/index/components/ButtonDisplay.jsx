import React from 'react';
import {
      Heading,
      useBreakpointValue,
      Button,
      useDisclosure,
    } from '@chakra-ui/react'

    
    export default function ButtonDisplay() {
      const { onOpen } = useDisclosure()
      const btnRef = React.useRef()
      const variant = useBreakpointValue({
            base: {
                  width: "60%",
                  position: "fixed",
                  borderTopRadius: 0,
                  zIndex:2,
                  ml: 2,
                  border:'2px',
                  borderColor:'blackAlpha.500',
                  
            },
            lg: {
                  height: "60vh",
                  mt:"20vh",
                  position: "fixed",
                  borderLeftRadius: 0,
                  borderRightRadius: "50px",
                  className: "truncate",
                  maxW: 20,

            }
          });
      

      const isLg = useBreakpointValue({ base: false, lg: true });
      
      return (
            
            <Button  variant="solid" ref={btnRef} sx={variant} colorScheme='messenger' onClick={onOpen}>
                  <Heading size={isLg ? "2xl" : "lg"} className={isLg ? "rotateText" : ""}>SELECT SCHEDULE</Heading>
            </Button>
  
      )
}  