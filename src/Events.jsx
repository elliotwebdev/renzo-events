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
      Divider,
      Drawer,
      DrawerBody,
      DrawerHeader,
      DrawerOverlay,
      DrawerContent,
      DrawerCloseButton,
      ButtonGroup,
      IconButton,
    } from '@chakra-ui/react'
import {academies} from './components/Academies'
import {specialEvents} from './components/SpecialEvents'
import {generateRecurringEvents} from './components/GenerateEvents'
import ToolbarButtonDisplay from './components/ToolbarButtonDisplay'
import getDarkColor from './components/getDarkColor';
import Footer from './components/Footer'
import logo from "./assets/BgLogo"
import {TfiInstagram} from 'react-icons/tfi'
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

      const linkVariant = (academy) => useBreakpointValue({
            base: "instagram://user?username=" + academy,
            lg: "https://www.instagram.com/" + academy
      });
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
                  case "HCU Campus":
                        return(
                              new Date(2023, 0, 1, 9, 0, 0)
                        )
                  default:
                        return (new Date(2023, 0, 1, 6, 0, 0))
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
                  case "HCU Campus":
                        return(
                              new Date(2023, 0, 1, 19, 0, 0)
                        )
                  default:
                        return (new Date(2023, 0, 1, 18, 0, 0))
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
                        dayLayoutAlgorithm={"no-overlap"}
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
      <Box position="relative">
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
                              <Flex height={["40em", "100%"]} gap={5}>
                                    <ButtonGroup size="md" colorScheme='messenger'>
                                    <Stack gap={[2, 3]} >
                                          
                                          <Button  onClick={() => handleShowEvents("Houston (HQ)")}>HOUSTON (HQ)</Button>
                                          <Button  onClick={() => handleShowEvents("The Grove")}>THE GROVE</Button>
                                          <Button  onClick={() => handleShowEvents("HCU Campus")}>HCU CAMPUS</Button>
                                          <Button  onClick={() => handleShowEvents("HTX (Downtown)")}>HTX (DOWNTOWN)</Button>
                                          <Button  onClick={() => handleShowEvents("Riverstone")}>RIVERSTONE</Button>
                                          <Button  isDisabled="true" onClick={() => handleShowEvents("Katy")}>KATY</Button>
                                          <Button  isDisabled="true" onClick={() => handleShowEvents("Missouri City")}>MISSOURI CITY</Button>
                                          <Button  isDisabled="true" onClick={() => handleShowEvents("Pearland")}>PEARLAND</Button>
                                          <Button  isDisabled="true" onClick={() => handleShowEvents("Pearland")}>HUFFMAN</Button>
                                          <Button  isDisabled="true" onClick={() => handleShowEvents("Pearland")}>ATASCOCITA</Button>
                                          <Button  isDisabled="true" onClick={() => handleShowEvents("Pearland")}>THE WOODLANDS</Button>
                                          <Button  isDisabled="true" onClick={() => handleShowEvents("Pearland")}>MONT BELVIEU</Button>
                                    </Stack>
                                    </ButtonGroup>

                                    <Divider orientation='vertical' />

                                    <ButtonGroup color="white" size="md">
                                    <Stack gap={[2, 3]} >    
                                          <IconButton as="a" bgGradient='linear(to-br, purple.500, red.600)' _hover={{ bg: "blackAlpha.400" }} 
                                          href={linkVariant("renzograciehouston")} icon={<TfiInstagram/>}/>

                                          <IconButton as="a" bgGradient='linear(to-bl, red.600, yellow.500)' _hover={{ bg: "blackAlpha.400" }}
                                          href={linkVariant("renzograciethegrove")} icon={<TfiInstagram/>}/>

                                          <IconButton as="a" bgGradient='linear(to-br, yellow.600, pink.500)' _hover={{ bg: "blackAlpha.400" }}
                                          href={linkVariant("renzograciehoustonhcucampus")} icon={<TfiInstagram/>}/>

                                          <IconButton as="a" bgGradient='linear(to-bl, pink.500, purple.500)' _hover={{ bg: "blackAlpha.400" }}
                                          href={linkVariant("renzogracie_htx")} icon={<TfiInstagram/>}/>

                                          <IconButton as="a" bgGradient='linear(to-br, purple.500, red.600)' _hover={{ bg: "blackAlpha.400" }}
                                          href={linkVariant("renzogracieriverstone")} icon={<TfiInstagram/>}/>
                                         
                                    </Stack>
                                    </ButtonGroup>
                              
                              </Flex>
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
            <Text color="gray.400" mt={1} mx={[null, null, null, 24, 24]} fontSize={["12px","16px"]}>Updated: 6.7.23</Text>
      <Footer />
      </Box>
      )
    }