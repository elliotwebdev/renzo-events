import React, {useState} from 'react'
import {
      Button,
      Stack,
      useDisclosure,
      Drawer,
      DrawerBody,
      DrawerHeader,
      DrawerOverlay,
      DrawerContent,
      DrawerCloseButton,
    } from '@chakra-ui/react'
import {academies} from './Academies'
import {generateRecurringEvents} from './GenerateEvents'

export default function AcademyDrawer() {
      
      const { isOpen, onOpen, onClose } = useDisclosure()
      const btnRef = React.useRef()
      const [selectedLocation, setSelectedLocation] = useState()
      const [events, setEvents] = useState([])

      const handleShowEvents = (location) => {
            const generatedEvents = []

            Object.entries(academies[location]).forEach(([className, classInfo]) => {
                  const classEvents = Array.isArray(classInfo) ? classInfo : [classInfo]
                  classEvents.forEach((event) => {
                        
                        generatedEvents.push(...generateRecurringEvents([event],10).map((event) => ({
                              ...event,
                              title: `${className}`
                              }))
                        )
                  })
            })
            setEvents(generatedEvents)    
            setSelectedLocation(location)
            onClose();
      }
      
    
      return (
      <>
            
          <Button ref={btnRef} colorScheme='blue' onClick={onOpen}>
            Open
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
            
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Select an Academy</DrawerHeader>

              <DrawerBody>
                  <Stack>
                        <Button colorScheme='blue' onClick={() => handleShowEvents("Houston")}>Houston</Button>
                        <Button colorScheme='blue' onClick={() => handleShowEvents("The Grove")}>The Grove</Button>
                  </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
      </>
      )
    }
