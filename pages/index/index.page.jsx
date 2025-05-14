import React, {useState} from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import {format, parse, startOfWeek, getDay} from 'date-fns';
import enUS from 'date-fns/locale/en-US/index'
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
      keyframes
    } from '@chakra-ui/react'
import {academies} from './components/Academies'
import {specialEvents} from './components/SpecialEvents'
import {generateRecurringEvents} from './components/GenerateEvents'
import ToolbarButtonDisplay from './assets/ToolbarButtonDisplay'
import getDarkColor from './assets/getDarkColor';
import Footer from './components/Footer'
import SvgLogo from "./assets/BgLogo"
import SvgSocial from "./assets/SocialIcon"
import './index.page.css';
// import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = dateFnsLocalizer({
      format,
      parse,
      startOfWeek: () => {
            return startOfWeek(new Date(), { weekStartsOn: 1 });
      },
      getDay,
      locales: enUS
});

const pulse = keyframes`
      0% {
      box-shadow: 0 0 10px #7851A9, 0 0 20px #7851A9, 0 0 30px #7851A9;
      }
      50% {
      box-shadow: 0 0 20px #7851A9, 0 0 30px #7851A9, 0 0 40px #7851A9;
      }
      100% {
      box-shadow: 0 0 10px #7851A9, 0 0 20px #7851A9, 0 0 30px #7851A9;
      }`
  ;

function Page() {

      const { isOpen, onOpen, onClose } = useDisclosure()
      const btnRef = React.useRef()
      const { colorMode } = useColorMode()
      const [selectedLocation, setSelectedLocation] = useState()
      const [isOverlayVisible, setIsOverlayVisible] = useState(true);
      const [events, setEvents] = useState([])
      const generatedEvents = []
      const bgGradients = ['linear(to-br, purple.500, red.600)','linear(to-bl, red.600, yellow.500)','linear(to-br, yellow.600, pink.500)','linear(to-bl, pink.500, purple.500)']
      const hideOverlay = () => {
            setIsOverlayVisible(false);
            onOpen(); // Open the drawer directly after hiding the overlay
          };
      const overlayStyles = {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 9999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      };

      const handleShowEvents = (location) => {
            
            Object.entries(academies[location]).forEach(([className, classInfo]) => {
                  const classEvents = Array.isArray(classInfo) ? classInfo : [classInfo]
                  classEvents.forEach((event) => {
                        const eventColor = event.color
                        generatedEvents.push(...generateRecurringEvents([event],52).map((event) => ({
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
                  
                  <Button  variant="solid" ref={btnRef} sx={variant} colorScheme='messenger' onClick={onOpen} animation={`${pulse} 2s infinite`}>
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
                        formats={{timeGutterFormat: 'h aa'}}
                        dayPropGetter={customDayPropGetter}
                        dayLayoutAlgorithm={"no-overlap"}
                        min={selectedLocation ? academies[selectedLocation].minTime : academies.minTime  }
                        max={selectedLocation ? academies[selectedLocation].maxTime : academies.maxTime  }
                        eventPropGetter={(event) => ({
                              style: {
                                    backgroundColor: colorMode === 'light' ? event.color : getDarkColor(event.color),
                                    },
                              })}                    
                        />
                   )
            }
      function linkAcademy(academy) {
            return("https://www.instagram.com/" + academy)
      }
  //-------MAIN JSX-----------
  
  return (
  <Box position="relative">

      {/* Overlay */}
      {isOverlayVisible && (
        <Box flex flexDirection="column" style={overlayStyles}>

            <Text as="b" color="white"> Welcome to Renzo Rolls!</Text>
            <Text as="b" color="white"> Select a schedule to see classes today.</Text>
            <Button
                  margin={10}
                  ref={btnRef}
                  colorScheme="messenger"
                  size="lg"
                  padding="xl"
                  onClick={hideOverlay}
                  animation={`${pulse} 2s infinite`}
            >
                  SELECT SCHEDULE
            </Button>
        </Box>
      )}

      <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      finalFocusRef={btnRef}
      size={["xs", "sm"]}
      >
            <DrawerOverlay />
            <DrawerContent>
                  <DrawerCloseButton size="lg"/>
                  <DrawerHeader><Heading size="xl">Choose an Academy</Heading></DrawerHeader>
                  
                  <DrawerBody>
                        <Flex height="100%" mx={[0,4]} gap={[4, 6]}>
                        <ButtonGroup variant="outline" size={["md", "lg"]}>
                              <Stack gap={[10, 12]} >    
                                    <IconButton as="a" color="white" bgGradient={bgGradients[0]} _hover={{ bg: "blackAlpha.600" }}
                                    href={linkAcademy("renzograciehouston")} icon={<SvgSocial/>}/>

                                    <IconButton as="a" color="white" bgGradient={bgGradients[1]} _hover={{ bg: "blackAlpha.600" }}
                                    href={linkAcademy("renzograciethegrove")} icon={<SvgSocial/>}/>

                                    <IconButton as="a" color="white" bgGradient={bgGradients[2]} _hover={{ bg: "blackAlpha.600" }}
                                    href={linkAcademy("renzograciehoustonhcucampus")} icon={<SvgSocial/>}/>

                                    <IconButton as="a" color="white" bgGradient={bgGradients[3]} _hover={{ bg: "blackAlpha.600" }}
                                    href={linkAcademy("renzograciehuffman")} icon={<SvgSocial/>}/>

                                    <IconButton as="a" color="white" bgGradient={bgGradients[0]} _hover={{ bg: "blackAlpha.600" }}
                                    href={linkAcademy("renzograciemissouricity")} icon={<SvgSocial/>}/>

                                    <IconButton color="white" bgGradient={bgGradients[1]} _hover={{ bg: "blackAlpha.600" }}
                                    href={linkAcademy("renzogracieriverstone")} icon={<SvgSocial/>}/>
                                    
                              </Stack>
                              </ButtonGroup>

                              <Divider orientation='vertical' />
                              <ButtonGroup variant="outline" size={["md", "lg"]} colorScheme='messenger'>
                              <Stack gap={[10, 12]} >
                                    
                                    <Button  onClick={() => handleShowEvents("Houston | HQ")}>HOUSTON | HQ</Button>
                                    <Button  onClick={() => handleShowEvents("The Grove")}>THE GROVE</Button>
                                    <Button  onClick={() => handleShowEvents("HCU Campus")}>HCU CAMPUS</Button>
                                    <Button  onClick={() => handleShowEvents("Huffman")}>HUFFMAN</Button>
                                    <Button  onClick={() => handleShowEvents("Missouri City")}
                                           _after={{ position: "absolute",
                                                top: "-8px",
                                                right: "-4px",
                                                width: "auto",
                                                padding:"1px",
                                                height: "18px",
                                                borderRadius: "2px",
                                                backgroundColor: "#FF8700",
                                                color: "black",
                                                fontSize: "12px",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                content: '"NOW OPEN!"'}}
                                                >MISSOURI CITY</Button>
                                    <Button  onClick={() => handleShowEvents("Riverstone")}>RIVERSTONE</Button>
                              </Stack>           
                              </ButtonGroup>
                        </Flex>
                  </DrawerBody>
            </DrawerContent>
      </Drawer>

      {ButtonDisplay()}
      <ToolbarButtonDisplay />

      <Flex py={4} justifyContent="center" alignItems="center" >
            <Heading  size={["xl", "3xl"]} >
                  {selectedLocation ? `Schedule for ${selectedLocation}` : "Go Roll Today!"}
            </Heading>
      </Flex>
      
      <Flex justifyContent="center" alignItems="center" mx={[null, null, null, 24, 24]} >
           
            <Box pos="absolute" mt={2}  >
                  <Icon as={SvgLogo} width={["250px", "500px"]} height={["250px", "500px"]} zIndex={-1} />
            </Box>

            <Box  width="100%">      
                  {calendarDisplay()}
                  <Text color="blackAlpha" mt={1} fontSize={["12px","16px"]}>Last Updated 5.14.25</Text>
            </Box>

      </Flex>
      
      <Footer />
 
  </Box>
  )
}


export { Page }