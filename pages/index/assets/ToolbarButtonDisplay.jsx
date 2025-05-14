import { 
      Modal,
      ModalOverlay,
      ModalContent,
      ModalHeader,
      ModalFooter,
      ModalBody,
      ModalCloseButton,
      Tabs, 
      TabList, 
      TabPanels, 
      Tab, 
      TabPanel, 
      Flex,
      Button,
      Text,
      Heading,
      useDisclosure,
      useBreakpointValue,
      useColorMode,
      Icon,
      IconButton,
      Box,
      FormErrorMessage, 
      FormLabel, 
      FormControl, 
      Textarea,
      Divider
      } from '@chakra-ui/react'
import SvgInfo from "./InfoIcon"
import SvgMoon from "./MoonIcon"
import SvgSun from "./SunIcon"
import getDarkColor from './getDarkColor';
import { useForm } from 'react-hook-form'
import UpdateLog from '../components/UpdateLog';

export default function ToolbarButtonDisplay() {
      const { colorMode, toggleColorMode } = useColorMode()
      const { isOpen, onOpen, onClose } = useDisclosure()
      const directionVariant = useBreakpointValue({
            base: "row"
            ,
            lg: "column"
      })
      const {
            register,
            formState: { errors, isSubmitting },
          } = useForm()

      const styleVariant = useBreakpointValue({
            base: {
                  right: 0,
                  justifyContent: "end",
                  gap: 2,
                  mr: 4,
            }
            ,
            lg: {
                  
                  right: 0,
                  position: "fixed",
                  justifyContent: "center",
                  height: "60%",
                  mr: 4,
                  gap: 4,
                  mt:"20vh",
            }
      })

      return (
            <>
            <Flex zIndex="2" flexDirection={directionVariant} sx={styleVariant}>
                  <IconButton aria-label='Color Mode Switch' size={["md", "lg"]} onClick={toggleColorMode} icon={<Icon as={colorMode === 'light' ? SvgMoon : SvgSun} />} />
                  <IconButton 
                  // _after={{ position: "absolute",
                  //       bottom: "-2px",
                  //       right: "-2px",
                  //       width: "20px",
                  //       height: "16px",
                  //       borderRadius: "5px",
                  //       backgroundColor: "#FF8700",
                  //       color: "black",
                  //       fontSize: "12px",
                  //       display: "flex",
                  //       justifyContent: "center",
                  //       alignItems: "center",
                  //       content: '"!"'}}
                        aria-label='Info Button' 
                        size={["md", "lg"]} onClick={onOpen} icon={<Icon as={SvgInfo} />} />             
            </Flex>

            <Modal motionPreset='slideInRight' scrollBehavior="outside" size="xl" isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay
                  backdropFilter='auto'
                  bg='blackAlpha.600'
                  backdropBlur='2px'/>
                  <ModalContent>

                        <ModalHeader><Heading>Welcome to Renzo Rolls!</Heading></ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                        <Tabs isFitted variant='enclosed'>
                              <TabList mb='1em'>
                                    <Tab 
                                    // _before={{ position: "absolute",
                                    //       top: "5rem",
                                    //       left: "1rem",
                                    //       width: "32px",
                                    //       height: "24px",
                                    //       borderRadius: "5px",
                                    //       backgroundColor: "#FF8700",
                                    //       color: "black",
                                    //       fontSize: "12px",
                                    //       display: "flex",
                                    //       justifyContent: "center",
                                    //       alignItems: "center",
                                    //       content: '"!"'}} 
                                    aria-label='About Panel' 
                                    fontSize='md'>ABOUT</Tab>
                                    <Tab aria-label='Class Info Panel' fontSize='md'>CLASS INFO</Tab>
                                    <Tab aria-label='Feedback Panel' fontSize='md'>FEEDBACK</Tab>
                              </TabList>
                              <TabPanels>
                                    <TabPanel>
                                          <Text>
                                                This application aims to serve all students & staff who are looking to balance their time between Renzo Gracie affiliate gyms in the Greater Houston Area.
                                                <br />
                                                <br />
                                                Use the <Text textColor={colorMode === 'light' ? '#0078ff' : getDarkColor('#0078ff')} as="b">'Select Schedule'</Text> button to view an academy's class program. Visit this 
                                                website on your computer or laptop for a extensive weekly view.
                                                <br />
                                                <br />
                                                This is an ongoing project with features and fixes to be added. Bookmark this page so you can access it at home, work, or on the go.
                                                <br/>
                                                <br/>
                                          </Text>
                                          <UpdateLog />
                                    </TabPanel>

                                    <TabPanel>
                                    <Text as='b'>Brazilian Jiu Jitsu</Text>
                                    <Box span="true" w="200px" h="10px" borderRadius="3xl" backgroundColor={colorMode === 'light' ? '#0078ff' : getDarkColor('#0078ff')}></Box>

                                    <Text>
                                    BJJ classes encompass a range of levels, from fundamental techniques to live training sessions. Additionally, there are classes available specifically for No-Gi training, 
                                    which do not require the use of a traditional uniform.
                                    </Text>
                                    <br />

                                    <Text as='b'>Auxiliary Classes</Text>
                                    <Box span="true" w="200px" h="10px" borderRadius="3xl" backgroundColor={colorMode === 'light' ? '#6e23fb' : getDarkColor('#6e23fb')}></Box>

                                    <Text >
                                    Auxiliary classes serve as valuable supplements to one's growth in Brazilian Jiu-Jitsu. These classes offer additional training opportunities that complement and 
                                    enhance the skills and physical conditioning required for BJJ. These will range from other martial arts to fitness sessions. Check with your academy for more information.
                                    </Text>
                                    <br />

                                    <Text as='b'>Kids Classes</Text>
                                    <Box span="true" w="200px" h="10px" borderRadius="3xl" backgroundColor={colorMode === 'light' ? '#F08600' : getDarkColor('#F08600')}></Box>

                                    <Text >
                                    These classes are exclusively dedicated to kids' BJJ and may have specific divisions based on 
                                    age and height established by each academy. Check with your academy for more information.
                                    </Text>
                                    {/* <br /> */}
                                    
                                    {/* <Text as='b'>Special Events</Text>
                                    <Box span="true" w="200px" h="10px" borderRadius="3xl" backgroundColor={colorMode === 'light' ? '#E20000' : getDarkColor('#E20000')}></Box>

                                    <Text >
                                    These events are either organized by the Houston BJJ community or by Houston Team Renzo Gracie and typically coincide with class cancellations at the academy. 
                                    For more details about these events, please refer to the academy's social media pages.
                                    </Text> */}
         
                                    </TabPanel>
                                    <TabPanel>
                                          <Text mb={6}>
                                          Are you enjoying what the site provides? Have any suggestions that would improve your experience?
                                          <br />
                                          <br />
                                          Leave a message and share words of encouragment or ways the calendar could enhance your visit!
                                          <br />
                                          </Text>
             
                                          <form method="POST" action="https://formsubmit.co/92cb9ddf59f1e62ddc366d8322abea72" >
                                          <FormControl mb={6}  isInvalid={errors.message}>
                                                <FormLabel htmlFor='message'></FormLabel>
                                                <Textarea
                                                id='message'
                                                placeholder='Message'
                                                style={{ fontSize: "1.2em", }}
                                                {...register('message', {
                                                required: 'This is required',
                                                minLength: { value: 4, message: 'Minimum length should be 10' },
                                                })}
                                                />
                                                <FormErrorMessage>
                                                {errors.message && errors.message.message}
                                                </FormErrorMessage>
                                          </FormControl>
                                          <Button mt={2} colorScheme='messenger'
                                                isLoading={isSubmitting} type='submit'>
                                                Submit
                                          </Button>
                                          </form>
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
