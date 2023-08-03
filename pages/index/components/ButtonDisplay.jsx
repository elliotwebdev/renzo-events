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

      const isLg = useBreakpointValue({ base: false, lg: true });
      
      return (
            
            <Button  variant="solid" ref={btnRef}  colorScheme='messenger' onClick={onOpen}>
                  <Heading size={isLg ? "2xl" : "lg"} className={isLg ? "rotateText" : ""}>SELECT SCHEDULE</Heading>
            </Button>
  
      )
}  