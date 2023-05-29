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
      Tabs, 
      TabList, 
      TabPanels, 
      Tab, 
      TabPanel, 
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
      startOfWeek: () => {
            return startOfWeek(new Date(), { weekStartsOn: 1 });
      },
      getDay,
      locales: enUS
});

export default function Events() {

      const { isOpen, onOpen, onClose } = useDisclosure()
      const btnRef = React.useRef()
      const { colorMode, toggleColorMode } = useColorMode()
      
      const [selectedLocation, setSelectedLocation] = useState()
      const [events, setEvents] = useState([])

      const handleShowEvents = (location) => {
            const generatedEvents = []

            Object.entries(academies[location]).forEach(([className, classInfo]) => {
                  const classEvents = Array.isArray(classInfo) ? classInfo : [classInfo]
                  classEvents.forEach((event) => {
                        const eventColor = event.color
                        generatedEvents.push(...generateRecurringEvents([event],32).map((event) => ({
                              ...event,
                              title: className,
                              description: event.description ,
                              color: eventColor 
                              }))
                        )
                  })
            })
            setEvents(generatedEvents)    
            setSelectedLocation(location)
            onClose();
      }
      function getMinTime(location){
            switch (location) {            
                  case "Houston (HQ)":
                        return(
                              new Date(2023, 0, 1, 6, 0, 0)
                        )
                  case "The Grove":
                        return(
                              new Date(2023, 0, 1, 5, 0, 0)
                        )
                  case "HTX (Downtown)":
                        return(
                              new Date(2023, 0, 1, 7, 0, 0)
                        )
                  case "Riverstone":
                        return(
                              new Date(2023, 0, 1, 6, 0, 0)
                        )
                  default:
                        return (new Date(2023, 0, 1, 7, 0, 0))
                }
      }
      function getMaxTime(location){
            switch (location) {            
                  case "Houston (HQ)":
                        return(
                              new Date(2023, 0, 1, 20, 30, 0)
                        )
                  case "The Grove":
                        return(
                              new Date(2023, 0, 1, 21, 0, 0)
                        )
                  case "HTX (Downtown)":
                        return(
                              new Date(2023, 0, 1, 19, 0, 0)
                        )
                  case "Riverstone":
                        return(
                              new Date(2023, 0, 1, 20, 0, 0)
                        )
                  default:
                        return (new Date(2023, 0, 1, 17, 0, 0))
                }
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
                              <Tabs isFitted variant='enclosed'>
                                    <TabList mb='1em'>
                                    <Tab>ABOUT</Tab>
                                    <Tab>CLASS INFO</Tab>
                                    </TabList>
                                    <TabPanels>
                                    <TabPanel>
                                    <Text >
                                          This application aims to serve all students who are looking to balance their time between Renzo Gracie affiliate gyms in the Greater Houston Area.
                                          <br />
                                          <br />
                                          Use the <Text as="b">'Select Schedule'</Text> button to view an academy's class program.
                                          <br />
                                          <br />
                                          This is an ongoing project with features and fixes to be added. Bookmark this page so you can access it at home, work, or on the go!
                                    </Text>
                                    </TabPanel>
                                    <TabPanel>
                                          <Text>Coming Soon!</Text>
                                    </TabPanel>
                                    </TabPanels>
                              </Tabs>

                              </ModalBody>
                              <ModalFooter >
                                    <Button colorScheme='messenger' mr={3} onClick={onClose}>
                                    Close
                                    </Button>
                              </ModalFooter>
                        </ModalContent>
                  </Modal>
                  </>
            )
      }
      function getDarkColor(eventColor){
            switch (eventColor) {
                  //Purple (Aux Classes)
                  case '#6e23fb':
                        return(
                              '#bf8dfc'
                        )
                  //Orange (Kids)
                  case '#E57300 ':
                        return(
                              '#ffb64c '
                        ) 
                  default:
                       return undefined
                }
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
                                    backgroundColor: colorMode === 'light' ? '#E5FFF0' : '#161918',
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
                        min={getMinTime(selectedLocation)}
                        max={getMaxTime(selectedLocation)}
                        dayPropGetter={customDayPropGetter}
                        eventPropGetter={(event) => ({
                              style: {
                                    backgroundColor: colorMode === 'light' ? event.color : getDarkColor(event.color),
                              },
                            })}                    
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
                              <Stack gap={2}>
                                    <Button size="lg" colorScheme='messenger' onClick={() => handleShowEvents("Houston (HQ)")}>HOUSTON (HQ)</Button>
                                    <Button size="lg" colorScheme='messenger' onClick={() => handleShowEvents("The Grove")}>THE GROVE</Button>
                                    <Button size="lg" colorScheme='messenger' onClick={() => handleShowEvents("HTX (Downtown)")}>HTX (DOWNTOWN)</Button>
                                    {/* <Button size="lg" colorScheme='messenger' onClick={() => handleShowEvents("Missouri City")}>Missouri City</Button> */}
                                    <Button size="lg" colorScheme='messenger' onClick={() => handleShowEvents("Riverstone")}>RIVERSTONE</Button>
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
            <Text color="gray.400" mt={1} mx={[null, null, null, 32, 32]}>Updated:5.25.23</Text>
      <Footer />
      </Box>
      )
    }