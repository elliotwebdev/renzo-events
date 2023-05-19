import React, {useState} from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import {format, parse, startOfWeek, getDay} from 'date-fns';
import enUS from 'date-fns/locale/en-US'
import {
      Flex,
      Heading,
      Icon,
      Text,
      useBreakpointValue,
      useColorMode,
      Box,
      Button,
      Stack,
      useDisclosure,
      Drawer,
      DrawerBody,
      DrawerHeader,
      DrawerOverlay,
      DrawerContent,
      DrawerCloseButton,
      background,
    } from '@chakra-ui/react'
import {academies} from './components/Academies'
import {generateRecurringEvents} from './components/GenerateEvents'
import Footer from './components/Footer'
import logo from "./assets/logo"
import '/src/index.css';

const localizer = dateFnsLocalizer({
      format,
      parse,
      startOfWeek,
      getDay,
      locales: enUS
});

export default function Events() {
      const minTime = new Date(2023, 0, 1, 6, 0, 0)
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
                              title: `${className}`
                              }))
                        )
                  })
            })
            setEvents(generatedEvents)    
            setSelectedLocation(location)
            onClose();
      }
      function LocationTitle() {
            return(
                  <Heading>
                        {selectedLocation ? `Schedule for ${selectedLocation}` : "Welcome to Renzo Events"}
                  </Heading>
            )
      }
      function ButtonDisplay() {
            const variant = useBreakpointValue({
                  base: {
                    width: "60%",
                    height: 12,
                    position: "fixed",
                    borderTopRadius: 0,
                    borderBottomRadius: "30px",
                    zIndex:2,
                  },
                  lg: {
                    height: "100vh",
                    position: "fixed",
                    borderLeftRadius: 0,
                    borderRightRadius: "50px",
                    className: "truncate",
                    maxW: 20
                  }
                });
            const isLg = useBreakpointValue({ base: false, lg: true });
            
            return (
                  <Button  ref={btnRef} sx={variant} overflow='visible' colorScheme="blue" onClick={onOpen}>
                        <Heading size={isLg ? "xl" : "md"} className={isLg ? "rotateText" : ""}>SELECT SCHEDULE</Heading>
                  </Button>

            )
      }
      function calendarDisplay() {
            const variant = useBreakpointValue({
                  base: ['day'],
                  lg: ['day', 'week']
                });
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
                                    <Button colorScheme='blue' onClick={() => handleShowEvents("Houston")}>Houston</Button>
                                    <Button colorScheme='blue' onClick={() => handleShowEvents("The Grove")}>The Grove</Button>
                              </Stack>
                        </DrawerBody>
                  </DrawerContent>
            </Drawer>

            <Box>{ButtonDisplay()}</Box> 

            <Button onClick={toggleColorMode}>
                  Toggle Light
            </Button>

            <Flex pt={16} pb={6}  height="50px" justifyContent="center" alignItems="center">{LocationTitle()}</Flex>
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