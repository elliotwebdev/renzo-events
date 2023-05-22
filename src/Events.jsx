import React, {useState} from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import {format, parse, startOfWeek, getDay} from 'date-fns';
import enUS from 'date-fns/locale/en-US'
import {
      Flex,
      Heading,
      Icon,
      useBreakpointValue,
      useColorMode,
      Box,
      Text,
      Button,
      Stack,
      useDisclosure,
      Drawer,
      DrawerBody,
      DrawerHeader,
      DrawerOverlay,
      DrawerContent,
      DrawerCloseButton,
      Modal,
      ModalOverlay,
      ModalContent,
      ModalHeader,
      ModalFooter,
      ModalBody,
      ModalCloseButton
    } from '@chakra-ui/react'
import {academies} from './components/Academies'
import {generateRecurringEvents} from './components/GenerateEvents'
import Footer from './components/Footer'
import logo from "./assets/BgLogo"
import { FaMoon, FaSun, FaInfoCircle } from 'react-icons/fa'
import '/src/index.css';

const localizer = dateFnsLocalizer({
      format,
      parse,
      startOfWeek,
      getDay,
      locales: enUS
});

export default function Events() {
      const minTime = new Date(2023, 0, 1, 5, 0, 0)
      const maxTime = new Date(2023, 0, 1, 21, 0, 0)
      
      const { isOpen, onOpen, onClose } = useDisclosure()
      const btnRef = React.useRef()
      const [selectedLocation, setSelectedLocation] = useState()
      const [events, setEvents] = useState([])
      const { colorMode, toggleColorMode } = useColorMode()

      const handleShowEvents = (location) => {
            const generatedEvents = []

            Object.entries(academies[location]).forEach(([className, classInfo]) => {
                  const classEvents = Array.isArray(classInfo) ? classInfo : [classInfo]
                  classEvents.forEach((event) => {
                        
                        generatedEvents.push(...generateRecurringEvents([event],10).map((event) => ({
                              ...event,
                              title:`${className}`
                              }))
                        )
                  })
            })
            setEvents(generatedEvents)    
            setSelectedLocation(location)
            onClose();
      }

      function LocationTitle() {
            const variant = useBreakpointValue({
                  base: "xl",
                  lg: "3xl"
                });
            return(
                  <Heading  size={variant}>
                        {selectedLocation ? `Schedule for ${selectedLocation}` : "Go Roll Today!"}
                  </Heading>
            )
      }

      function ButtonDisplay() {
            const variant = useBreakpointValue({
                  base: {
                        width: "60%",
                        position: "fixed",
                        borderTopRadius: 0,
                        zIndex:2,
                        ml: 2,
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
                  
                  <Button  variant="solid" ref={btnRef} sx={variant} overflow='visible' colorScheme='messenger'  onClick={onOpen}>
                        <Heading size={isLg ? "2xl" : "lg"} className={isLg ? "rotateText" : ""}>SELECT SCHEDULE</Heading>
                  </Button>
        
            )
      }

      function ToolbarButtonDisplay() {
            const { isOpen, onOpen, onClose } = useDisclosure()
            const directionVariant = useBreakpointValue({
                  base: "row"
                  ,
                  lg: "column"
            });
            const styleVariant = useBreakpointValue({
                  base: {
                        right: 0,
                        justifyContent: "end",
                        gap: 2,
                        mr: 2,
                  }
                  ,
                  lg: {
                        
                        right: 0,
                        position: "fixed",
                        justifyContent: "center",
                        height: "60%",
                        mr: 8,
                        gap: 4,
                        mt:"20vh",
                  }
            });
                
            
            return (
                  <>
                  <Flex zIndex="2" flexDirection={directionVariant} sx={styleVariant}>
                        <Button onClick={toggleColorMode}>
                              {colorMode === 'light' ? <Icon as={FaMoon} /> : <Icon as={FaSun} />}
                        </Button>
                        
                        <Button  onClick={onOpen}>
                              <Icon as={FaInfoCircle} />
                        </Button>
                  </Flex>

                  <Modal isCentered motionPreset='slideInRight' isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay
                        backdropFilter='auto'
                        bg='blackAlpha.600'
                        backdropBlur='2px'/>
                        <ModalContent>
                              <ModalHeader as="b">Welcome to Renzo Events!</ModalHeader>
                              <ModalCloseButton />
                              <ModalBody>
                              <Text >
                              This application aims to serve all students who are looking to balance their time between Renzo Gracie affiliate gyms in the Greater Houston Area.
                              <br />
                              <br />
                              Use the <Text as="b">'Select Schedule'</Text> button to view an academy's class program.
                              <br />
                              <br />
                              This is an ongoing project with features and fixes to be added. Bookmark this page so you can access it at home, work, or on the go!
                              </Text>

                              </ModalBody>
                              <ModalFooter>
                                    <Button colorScheme='messenger' mr={3} onClick={onClose}>
                                    Close
                                    </Button>
                              </ModalFooter>
                        </ModalContent>
                  </Modal>
                  </>
            )
      }
      
      function calendarDisplay() {
            const variant = useBreakpointValue({
                  base: ['day'],
                  lg: ['day', 'week']
            })

            const customDayPropGetter = (date) => {
                  if (date.getDate() === new Date().getDate()) {
                        return {
                              style: {
                                    backgroundColor: colorMode === 'light' ? '#f5fffa' : '#11151d',
                              },
                        };
                  }
                  return {};
            }

                
            return (
                        <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        views={variant}
                        defaultView="day"
                        min={minTime}
                        max={maxTime}
                        dayPropGetter={customDayPropGetter}
                        
                        />
            )
      }
 
      function logoDisplay() {
            const variant = useBreakpointValue({
                  base: 'none',
                  lg: 'block'
                });
            return (
                  <Box display={variant} pos="absolute" mt={10}  >
                        <Icon as={logo} width="100%" height="100%" zIndex={-1} />
                  </Box>
                  
            )
      }

      //-------MAIN JSX-----------

      return (
      <Box position="relative" width="100%" height="100%">
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
                                    <Button size="lg" colorScheme='messenger' onClick={() => handleShowEvents("Houston (HQ)")}>Houston (HQ)</Button>
                                    <Button size="lg" colorScheme='messenger' onClick={() => handleShowEvents("The Grove")}>The Grove</Button>
                                    <Button size="lg" colorScheme='messenger' onClick={() => handleShowEvents("HTX (Downtown)")}>HTX (Downtown)</Button>
                                    {/* <Button size="lg" colorScheme='messenger' onClick={() => handleShowEvents("Missouri City")}>Missouri City</Button> */}
                                    <Button size="lg" colorScheme='messenger' onClick={() => handleShowEvents("Riverstone")}>Riverstone</Button>
                              </Stack>
                        </DrawerBody>
                  </DrawerContent>
            </Drawer>

            {ButtonDisplay()}
            {ToolbarButtonDisplay()}

            <Flex py={4} justifyContent="center" alignItems="center" >{LocationTitle()}</Flex>
            <Flex justifyContent="center" alignItems="center" mx={[null, null, null, 32, 32]} >
                  
                  {logoDisplay()}
                  <Box  width="100%">      
                        {calendarDisplay()}
                  </Box>
            
            </Flex>
      <Footer />
      </Box>
      )
    }