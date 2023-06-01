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
    } from '@chakra-ui/react'
import {academies} from './components/Academies'
import {specialEvents} from './components/SpecialEvents'
import {generateRecurringEvents} from './components/GenerateEvents'
import ToolbarButtonDisplay from './components/ToolbarButtonDisplay'
import getDarkColor from './components/getDarkColor';
import Footer from './components/Footer'
import logo from "./assets/BgLogo"
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
      const { colorMode } = useColorMode()
      const [selectedLocation, setSelectedLocation] = useState()
      const [events, setEvents] = useState([])
      const generatedEvents = []

      const handleShowEvents = (location) => {
            
            Object.entries(academies[location]).forEach(([className, classInfo]) => {
                  const classEvents = Array.isArray(classInfo) ? classInfo : [classInfo]
                  classEvents.forEach((event) => {
                        const eventColor = event.color
                        generatedEvents.push(...generateRecurringEvents([event],32).map((event) => ({
                              ...event,
                              title: className,
                              color: eventColor 
                              }))
                        )
                  })
            })

            Object.entries(specialEvents[location]).forEach(([className, classInfo]) => {
                  const classEvents = Array.isArray(classInfo) ? classInfo : [classInfo]
                  classEvents.forEach((event) => {
                        const eventColor = event.color
                        generatedEvents.push(...generateRecurringEvents([event],1).map((event) => ({
                              ...event,
                              title: className,
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
                              new Date(2023, 0, 1, 21, 0, 0)
                        )
                  case "The Grove":
                        return(
                              new Date(2023, 0, 1, 21, 0, 0)
                        )
                  case "HTX (Downtown)":
                        return(
                              new Date(2023, 0, 1, 20, 0, 0)
                        )
                  case "Riverstone":
                        return(
                              new Date(2023, 0, 1, 21, 0, 0)
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
      function calendarDisplay() {
            const viewsVariant = useBreakpointValue({
                  base: ['day'],
                  lg: ['day', 'week']
            })

            const customDayPropGetter = (date) => {
                  if (date.getDate() === new Date().getDate()) {
                        return {
                              style: {
                                    backgroundColor: colorMode === 'light' ? '#E5FFF0' : '#3C3B43',
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
                        views={viewsVariant}
                        defaultView='day'
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
                              <Stack gap={2} >
                                    <Button size="lg" colorScheme='messenger' onClick={() => handleShowEvents("Houston (HQ)")}>HOUSTON (HQ)</Button>
                                    <Button size="lg" colorScheme='messenger' onClick={() => handleShowEvents("The Grove")}>THE GROVE</Button>
                                    <Button size="lg" colorScheme='messenger' onClick={() => handleShowEvents("HTX (Downtown)")}>HTX (DOWNTOWN)</Button>
                                    <Button size="lg" colorScheme='messenger' onClick={() => handleShowEvents("Riverstone")}>RIVERSTONE</Button>
                                    <Button size="lg" colorScheme='messenger' isDisabled="true" onClick={() => handleShowEvents("HCU")}>HCU</Button>
                                    <Button size="lg" colorScheme='messenger' isDisabled="true" onClick={() => handleShowEvents("Katy")}>KATY</Button>
                                    <Button size="lg" colorScheme='messenger' isDisabled="true" onClick={() => handleShowEvents("Missouri City")}>MISSOURI CITY</Button>
                                    <Button size="lg" colorScheme='messenger' isDisabled="true" onClick={() => handleShowEvents("Pearland")}>PEARLAND</Button>
                              </Stack>
                        </DrawerBody>
                  </DrawerContent>
            </Drawer>

            {ButtonDisplay()}
            {ToolbarButtonDisplay()}

            <Flex py={4} justifyContent="center" alignItems="center" >{LocationTitle()}</Flex>
            <Flex justifyContent="center" alignItems="center" mx={[null, null, null, 24, 24]} >
                  {logoDisplay()}
                  <Box  width="100%">      
                        {calendarDisplay()}
                  </Box>
            </Flex>
            <Text color="gray.400" mt={1} mx={[null, null, null, 24, 24]}>Updated:6.1.23</Text>
      <Footer />
      </Box>
      )
    }