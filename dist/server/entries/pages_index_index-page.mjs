import { j as jsx, a as jsxs, F as Fragment } from "../chunks/chunk-ac9dafa4.js";
import React, { useState } from "react";
import { dateFnsLocalizer, Calendar } from "react-big-calendar";
import { addWeeks, format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US/index.js";
import { Divider, Text, useColorMode, useDisclosure, useBreakpointValue, Flex, IconButton, Icon, Modal, ModalOverlay, ModalContent, ModalHeader, Heading, ModalCloseButton, ModalBody, Tabs, TabList, Tab, TabPanels, TabPanel, Box, FormControl, FormLabel, Textarea, FormErrorMessage, Button, ModalFooter, keyframes, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, ButtonGroup, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import "react/jsx-runtime";
const academies = {
  //default props
  minTime: new Date(2024, 0, 1, 8, 0, 0),
  maxTime: new Date(2024, 0, 1, 18, 0, 0),
  "Houston (HQ)": {
    minTime: new Date(2024, 0, 1, 6, 0, 0),
    maxTime: new Date(2024, 0, 1, 21, 0, 0),
    "BJJ": [
      {
        // Monday
        start: new Date(2024, 0, 1, 6, 30),
        end: new Date(2024, 0, 1, 7, 30)
      },
      {
        start: new Date(2024, 0, 1, 12, 0),
        end: new Date(2024, 0, 1, 13, 0)
      },
      {
        start: new Date(2024, 0, 1, 18, 30),
        end: new Date(2024, 0, 1, 19, 30)
      },
      {
        // Tues
        start: new Date(2024, 0, 2, 6, 30),
        end: new Date(2024, 0, 2, 7, 30)
      },
      {
        start: new Date(2024, 0, 2, 18, 30),
        end: new Date(2024, 0, 2, 19, 30)
      },
      {
        // Wednesday
        start: new Date(2024, 0, 3, 6, 30),
        end: new Date(2024, 0, 3, 7, 30)
      },
      {
        // Thurs
        start: new Date(2024, 0, 4, 6, 30),
        end: new Date(2024, 0, 4, 7, 30)
      },
      {
        start: new Date(2024, 0, 4, 12, 0),
        end: new Date(2024, 0, 4, 13, 0)
      },
      {
        start: new Date(2024, 0, 4, 18, 30),
        end: new Date(2024, 0, 4, 19, 30)
      }
    ],
    "No-Gi BJJ": [
      {
        //Tuesday
        start: new Date(2024, 0, 2, 12, 0),
        end: new Date(2024, 0, 2, 13, 0)
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 18, 30),
        end: new Date(2024, 0, 3, 19, 30)
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 6, 30),
        end: new Date(2024, 0, 5, 7, 30)
      },
      {
        start: new Date(2024, 0, 5, 12, 0),
        end: new Date(2024, 0, 5, 13, 0)
      },
      {
        start: new Date(2024, 0, 5, 18, 30),
        end: new Date(2024, 0, 5, 19, 30)
      }
    ],
    "Wrestling Adults & Junior 12+": [
      {
        //Monday
        start: new Date(2024, 0, 1, 11, 0),
        end: new Date(2024, 0, 1, 12, 0),
        color: "#6e23fb"
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 11, 0),
        end: new Date(2024, 0, 5, 12, 0),
        color: "#6e23fb"
      }
    ],
    "Adults Muay Thai": [
      {
        //Monday
        start: new Date(2024, 0, 1, 7, 30),
        end: new Date(2024, 0, 1, 8, 30),
        color: "#6e23fb"
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 7, 30),
        end: new Date(2024, 0, 3, 8, 30),
        color: "#6e23fb"
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 7, 30),
        end: new Date(2024, 0, 5, 8, 30),
        color: "#6e23fb"
      }
    ],
    "Kids Muay Thai": [
      {
        //Monday
        start: new Date(2024, 0, 1, 16, 45),
        end: new Date(2024, 0, 1, 17, 30),
        color: "#6e23fb"
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 16, 45),
        end: new Date(2024, 0, 2, 17, 30),
        color: "#6e23fb"
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 16, 45),
        end: new Date(2024, 0, 3, 17, 30),
        color: "#6e23fb"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 16, 45),
        end: new Date(2024, 0, 4, 17, 30),
        color: "#6e23fb"
      }
    ],
    "Live Training": [
      {
        //Monday
        start: new Date(2024, 0, 1, 13, 0),
        end: new Date(2024, 0, 1, 13, 30)
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 13, 0),
        end: new Date(2024, 0, 2, 13, 30)
      },
      {
        start: new Date(2024, 0, 2, 19, 30),
        end: new Date(2024, 0, 2, 20, 0)
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 19, 30),
        end: new Date(2024, 0, 3, 20, 0)
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 13, 0),
        end: new Date(2024, 0, 4, 13, 30)
      },
      {
        start: new Date(2024, 0, 4, 19, 30),
        end: new Date(2024, 0, 4, 20, 0)
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 13, 0),
        end: new Date(2024, 0, 5, 13, 30)
      }
    ],
    "All Levels Kids BJJ": [
      {
        //Monday
        start: new Date(2024, 0, 1, 10, 0),
        end: new Date(2024, 0, 1, 11, 0),
        color: "#F08600"
      },
      {
        //Wed
        start: new Date(2024, 0, 3, 10, 0),
        end: new Date(2024, 0, 3, 11, 0),
        color: "#F08600"
      }
    ],
    "All Levels No-Gi Kids BJJ": [
      {
        //Fri
        start: new Date(2024, 0, 5, 10, 0),
        end: new Date(2024, 0, 5, 11, 0),
        color: "#F08600"
      }
    ],
    "Kids BJJ (7-11 y.o)": [
      {
        //Monday
        start: new Date(2024, 0, 1, 17, 30),
        end: new Date(2024, 0, 1, 18, 30),
        color: "#F08600"
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 17, 30),
        end: new Date(2024, 0, 2, 18, 30),
        color: "#F08600"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 17, 30),
        end: new Date(2024, 0, 4, 18, 30),
        color: "#F08600"
      },
      {
        //Saturday
        start: new Date(2024, 0, 6, 9, 30),
        end: new Date(2024, 0, 6, 10, 30),
        color: "#F08600"
      }
    ],
    "Kids Fundamental BJJ (7-11 y.o) [MAT 2]": [
      {
        //Monday
        start: new Date(2024, 0, 1, 17, 30),
        end: new Date(2024, 0, 1, 18, 30),
        color: "#F08600"
      },
      {
        //thurs
        start: new Date(2024, 0, 4, 17, 30),
        end: new Date(2024, 0, 4, 18, 30),
        color: "#F08600"
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 17, 30),
        end: new Date(2024, 0, 3, 18, 30),
        color: "#F08600"
      }
    ],
    "No-Gi Kids BJJ (7-11 y.o)": [
      {
        //Wednesday
        start: new Date(2024, 0, 3, 17, 30),
        end: new Date(2024, 0, 3, 18, 30),
        color: "#F08600"
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 17, 30),
        end: new Date(2024, 0, 5, 18, 30),
        color: "#F08600"
      }
    ],
    "Kids BJJ (4-6 y.o)": [
      {
        //Monday
        start: new Date(2024, 0, 1, 17, 0),
        end: new Date(2024, 0, 1, 17, 30),
        color: "#F08600"
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 17, 0),
        end: new Date(2024, 0, 2, 17, 30),
        color: "#F08600"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 17, 0),
        end: new Date(2024, 0, 4, 17, 30),
        color: "#F08600"
      },
      {
        //Saturday
        start: new Date(2024, 0, 6, 9, 0),
        end: new Date(2024, 0, 6, 9, 30),
        color: "#F08600"
      }
    ],
    "MMA Class": [
      {
        start: new Date(2024, 0, 1, 18, 30),
        end: new Date(2024, 0, 1, 19, 30),
        color: "#6e23fb"
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 18, 30),
        end: new Date(2024, 0, 2, 19, 30),
        color: "#6e23fb",
        color: "#6e23fb"
      },
      {
        start: new Date(2024, 0, 3, 18, 30),
        end: new Date(2024, 0, 3, 19, 30),
        color: "#6e23fb"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 18, 30),
        end: new Date(2024, 0, 4, 19, 30),
        color: "#6e23fb"
      },
      {
        //Saturday
        start: new Date(2024, 0, 6, 6, 30),
        end: new Date(2024, 0, 6, 8, 0),
        color: "#6e23fb"
      }
    ],
    "No-Gi Kids BJJ (4-6 y.o)": {
      //Wednesday
      start: new Date(2024, 0, 3, 17, 0),
      end: new Date(2024, 0, 3, 17, 30),
      color: "#F08600"
    },
    "Warrior Wednesday (Live Training Only)": {
      //Wednesday
      start: new Date(2024, 0, 3, 12, 0),
      end: new Date(2024, 0, 3, 13, 30)
    },
    "Women's Only Class": {
      //Sunday
      start: new Date(2024, 0, 0, 9, 0),
      end: new Date(2024, 0, 0, 10, 0)
    },
    "Defending Pins & Escapes": {
      //Monday
      start: new Date(2024, 0, 1, 19, 30),
      end: new Date(2024, 0, 1, 20, 0)
    },
    "Judo Class": {
      //Tues
      start: new Date(2024, 0, 2, 17, 30),
      end: new Date(2024, 0, 2, 18, 30),
      color: "#6e23fb"
    },
    "OPEN MAT": [
      {
        //Saturday
        start: new Date(2024, 0, 6, 10, 30),
        end: new Date(2024, 0, 6, 12, 0)
      },
      {
        //Sunday
        start: new Date(2024, 0, 0, 10, 0),
        end: new Date(2024, 0, 0, 12, 0)
      }
    ]
  },
  "The Grove": {
    minTime: new Date(2024, 0, 1, 5, 0, 0),
    maxTime: new Date(2024, 0, 1, 21, 0, 0),
    "BJJ": [
      {
        // Monday
        start: new Date(2024, 0, 1, 5, 0),
        end: new Date(2024, 0, 1, 6, 0)
      },
      {
        start: new Date(2024, 0, 1, 19, 0),
        end: new Date(2024, 0, 1, 20, 0)
      },
      {
        // Tuesday
        start: new Date(2024, 0, 2, 5, 0),
        end: new Date(2024, 0, 2, 6, 0)
      },
      {
        start: new Date(2024, 0, 2, 19, 0),
        end: new Date(2024, 0, 2, 20, 0)
      },
      {
        // Wednesday
        start: new Date(2024, 0, 3, 5, 0),
        end: new Date(2024, 0, 3, 6, 0)
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 5, 0),
        end: new Date(2024, 0, 5, 6, 0)
      }
    ],
    "All Kids Competition BJJ": {
      //Saturday
      start: new Date(2024, 0, 6, 11, 0),
      end: new Date(2024, 0, 6, 12, 0),
      color: "#F08600"
    },
    "All Ages BJJ": {
      //Tuesday
      start: new Date(2024, 0, 2, 12, 0),
      end: new Date(2024, 0, 2, 13, 0)
    },
    "All Ages No-Gi BJJ": {
      //Thursday
      start: new Date(2024, 0, 4, 12, 0),
      end: new Date(2024, 0, 4, 13, 0)
    },
    "No-Gi Adults Competition BJJ": {
      //Saturday
      start: new Date(2024, 0, 6, 9, 0),
      end: new Date(2024, 0, 6, 10, 0)
    },
    "No-Gi BJJ": [
      {
        //Thursday
        start: new Date(2024, 0, 4, 5, 0),
        end: new Date(2024, 0, 4, 6, 0)
      },
      {
        start: new Date(2024, 0, 4, 19, 0),
        end: new Date(2024, 0, 4, 20, 0)
      }
    ],
    "CHAMPS (Kids 4'11 & Under)": [
      {
        //Monday
        start: new Date(2024, 0, 1, 17, 0),
        end: new Date(2024, 0, 1, 18, 0),
        color: "#F08600"
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 17, 0),
        end: new Date(2024, 0, 2, 18, 0),
        color: "#F08600"
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 17, 0),
        end: new Date(2024, 0, 3, 18, 0),
        color: "#F08600"
      }
    ],
    "LIONS (Kids 5' & Up)": [
      {
        //Monday
        start: new Date(2024, 0, 1, 18, 0),
        end: new Date(2024, 0, 1, 19, 0),
        color: "#F08600"
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 18, 0),
        end: new Date(2024, 0, 2, 19, 0),
        color: "#F08600"
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 18, 0),
        end: new Date(2024, 0, 3, 19, 0),
        color: "#F08600"
      }
    ],
    "Sanda Fundamentals": [
      {
        //tuesday
        start: new Date(2024, 0, 2, 11, 0),
        end: new Date(2024, 0, 2, 12, 0),
        color: "#6e23fb"
      },
      {
        //thursday
        start: new Date(2024, 0, 4, 11, 0),
        end: new Date(2024, 0, 4, 12, 0),
        color: "#6e23fb"
      },
      {
        //friday
        start: new Date(2024, 0, 5, 17, 30),
        end: new Date(2024, 0, 5, 18, 30),
        color: "#6e23fb"
      },
      {
        //saturday
        start: new Date(2024, 0, 6, 10, 0),
        end: new Date(2024, 0, 6, 11, 0),
        color: "#6e23fb"
      }
    ],
    "No-Gi CHAMPS (Kids 4'11 & Under)": {
      start: new Date(2024, 0, 4, 17, 0),
      end: new Date(2024, 0, 4, 18, 0),
      color: "#F08600"
    },
    "No-Gi LIONS (Kids 5' & Up)": {
      start: new Date(2024, 0, 4, 18, 0),
      end: new Date(2024, 0, 4, 19, 0),
      color: "#F08600"
    },
    "Judo": {
      start: new Date(2024, 0, 6, 12, 0),
      end: new Date(2024, 0, 6, 13, 0),
      color: "#6e23fb"
    },
    "Women's Competition BJJ": {
      start: new Date(2024, 0, 5, 18, 30),
      end: new Date(2024, 0, 5, 19, 30)
    },
    "Warrior Wednesday (Live Training Only)": {
      //Wednesday
      start: new Date(2024, 0, 3, 19, 0),
      end: new Date(2024, 0, 3, 21, 0)
    }
  },
  "HTX (Downtown)": {
    minTime: new Date(2024, 0, 1, 7, 0, 0),
    maxTime: new Date(2024, 0, 1, 20, 0, 0),
    "No-Gi BJJ": [
      {
        // Monday
        start: new Date(2024, 0, 1, 7, 0),
        end: new Date(2024, 0, 1, 8, 0)
      },
      {
        // Wednesday
        start: new Date(2024, 0, 3, 7, 0),
        end: new Date(2024, 0, 3, 8, 0)
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 7, 0),
        end: new Date(2024, 0, 5, 8, 0)
      },
      {
        // Tuesday
        start: new Date(2024, 0, 2, 9, 0),
        end: new Date(2024, 0, 2, 10, 0)
      },
      {
        start: new Date(2024, 0, 2, 17, 30),
        end: new Date(2024, 0, 2, 18, 30)
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 9, 0),
        end: new Date(2024, 0, 4, 10, 0)
      },
      {
        //Saturday
        start: new Date(2024, 0, 6, 11, 0),
        end: new Date(2024, 0, 6, 12, 0)
      }
    ],
    "BJJ": [
      {
        start: new Date(2024, 0, 1, 17, 30),
        end: new Date(2024, 0, 1, 18, 30)
      },
      {
        start: new Date(2024, 0, 3, 17, 30),
        end: new Date(2024, 0, 3, 18, 30)
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 17, 30),
        end: new Date(2024, 0, 4, 18, 30)
      }
    ],
    "Live Training": [
      {
        // Monday
        start: new Date(2024, 0, 1, 18, 30),
        end: new Date(2024, 0, 1, 19, 0)
      },
      {
        // Tuesday
        start: new Date(2024, 0, 2, 18, 30),
        end: new Date(2024, 0, 2, 19, 0)
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 18, 30),
        end: new Date(2024, 0, 3, 19, 0)
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 18, 30),
        end: new Date(2024, 0, 4, 19, 0)
      },
      {
        //Saturday
        start: new Date(2024, 0, 6, 12, 0),
        end: new Date(2024, 0, 6, 12, 30)
      }
    ],
    "OPEN MAT": {
      //Friday
      start: new Date(2024, 0, 5, 17, 30),
      end: new Date(2024, 0, 5, 19, 0)
    }
  },
  "Riverstone": {
    minTime: new Date(2024, 0, 1, 9, 0, 0),
    maxTime: new Date(2024, 0, 1, 21, 0, 0),
    "BJJ": [
      {
        // Monday
        start: new Date(2024, 0, 1, 11, 0),
        end: new Date(2024, 0, 1, 12, 0)
      },
      {
        start: new Date(2024, 0, 1, 19, 0),
        end: new Date(2024, 0, 1, 20, 0)
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 19, 0),
        end: new Date(2024, 0, 2, 20, 0)
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 19, 0),
        end: new Date(2024, 0, 3, 20, 0)
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 11, 0),
        end: new Date(2024, 0, 5, 12, 0)
      }
    ],
    "No-Gi BJJ": [
      {
        // Wednesday
        start: new Date(2024, 0, 3, 11, 0),
        end: new Date(2024, 0, 3, 12, 0)
      },
      {
        //Saturday
        start: new Date(2024, 0, 6, 9, 0),
        end: new Date(2024, 0, 6, 10, 0)
      },
      {
        // Thursday
        start: new Date(2024, 0, 4, 19, 0),
        end: new Date(2024, 0, 4, 20, 0)
      }
    ],
    "Kids BJJ (4-6 y.o)": [
      {
        // Monday
        start: new Date(2024, 0, 1, 17, 0),
        end: new Date(2024, 0, 1, 17, 30),
        color: "#F08600"
      },
      {
        // Tuesday
        start: new Date(2024, 0, 2, 17, 0),
        end: new Date(2024, 0, 2, 17, 30),
        color: "#F08600"
      },
      {
        // Wednesday
        start: new Date(2024, 0, 3, 17, 0),
        end: new Date(2024, 0, 3, 17, 30),
        color: "#F08600"
      },
      {
        // Saturday
        start: new Date(2024, 0, 6, 10, 0),
        end: new Date(2024, 0, 6, 10, 30),
        color: "#F08600"
      }
    ],
    "Kids BJJ (7-11 y.o) LVL 1": [
      {
        // Monday
        start: new Date(2024, 0, 1, 17, 30),
        end: new Date(2024, 0, 1, 18, 0),
        color: "#F08600"
      },
      {
        // Tuesday
        start: new Date(2024, 0, 2, 17, 30),
        end: new Date(2024, 0, 2, 18, 0),
        color: "#F08600"
      },
      {
        // Wednesday
        start: new Date(2024, 0, 3, 17, 30),
        end: new Date(2024, 0, 3, 18, 0),
        color: "#F08600"
      }
    ],
    "Kids BJJ (7-11 y.o) ALL LVLS": [
      {
        // Monday
        start: new Date(2024, 0, 1, 18, 0),
        end: new Date(2024, 0, 1, 19, 0),
        color: "#F08600"
      },
      {
        // Tuesday
        start: new Date(2024, 0, 2, 18, 0),
        end: new Date(2024, 0, 2, 19, 0),
        color: "#F08600"
      },
      {
        // Wednesday
        start: new Date(2024, 0, 3, 18, 0),
        end: new Date(2024, 0, 3, 19, 0),
        color: "#F08600"
      },
      {
        // Saturday
        start: new Date(2024, 0, 6, 10, 30),
        end: new Date(2024, 0, 6, 11, 30),
        color: "#F08600"
      }
    ],
    "No-Gi Kids BJJ (4-6 y.o)": {
      //Thursday
      start: new Date(2024, 0, 4, 17, 0),
      end: new Date(2024, 0, 4, 17, 30),
      color: "#F08600"
    },
    "No-Gi Kids BJJ (7-11 y.o) LVL 1": {
      //Thursday
      start: new Date(2024, 0, 4, 17, 30),
      end: new Date(2024, 0, 4, 18, 0),
      color: "#F08600"
    },
    "No-Gi Kids BJJ (7-11 y.o) ALL LVLS": {
      //Thursday
      start: new Date(2024, 0, 4, 18, 0),
      end: new Date(2024, 0, 4, 19, 0),
      color: "#F08600"
    },
    "Women's Only Class": {
      //Saturday
      start: new Date(2024, 0, 6, 11, 30),
      end: new Date(2024, 0, 6, 12, 30)
    }
  },
  "HCU Campus": {
    minTime: new Date(2024, 0, 1, 9, 0, 0),
    maxTime: new Date(2024, 0, 1, 19, 0, 0),
    "BJJ": [
      {
        //Monday
        start: new Date(2024, 0, 1, 18, 0),
        end: new Date(2024, 0, 1, 19, 0)
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 11, 0),
        end: new Date(2024, 0, 2, 12, 0)
      },
      {
        start: new Date(2024, 0, 2, 18, 0),
        end: new Date(2024, 0, 2, 19, 0)
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 18, 0),
        end: new Date(2024, 0, 3, 19, 0)
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 11, 0),
        end: new Date(2024, 0, 4, 12, 0)
      },
      {
        start: new Date(2024, 0, 4, 18, 0),
        end: new Date(2024, 0, 4, 19, 0)
      },
      {
        //Saturday
        start: new Date(2024, 0, 6, 11, 0),
        end: new Date(2024, 0, 6, 12, 0)
      }
    ],
    "Kids BJJ": [
      {
        //Monday
        start: new Date(2024, 0, 1, 17, 0),
        end: new Date(2024, 0, 1, 18, 0),
        color: "#F08600"
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 17, 0),
        end: new Date(2024, 0, 2, 18, 0),
        color: "#F08600"
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 17, 0),
        end: new Date(2024, 0, 3, 18, 0),
        color: "#F08600"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 17, 0),
        end: new Date(2024, 0, 4, 18, 0),
        color: "#F08600"
      },
      {
        //Saturday
        start: new Date(2024, 0, 6, 10, 0),
        end: new Date(2024, 0, 6, 11, 0),
        color: "#F08600"
      }
    ]
  },
  "Katy": {
    minTime: new Date(2024, 0, 1, 15, 0, 0),
    maxTime: new Date(2024, 0, 1, 23, 0, 0),
    "BJJ": [
      {
        //Monday
        start: new Date(2024, 0, 1, 19, 0),
        end: new Date(2024, 0, 1, 20, 0)
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 19, 0),
        end: new Date(2024, 0, 2, 20, 0)
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 19, 0),
        end: new Date(2024, 0, 3, 20, 0)
      }
    ],
    "No-Gi BJJ": [
      {
        //Thursday
        start: new Date(2024, 0, 4, 19, 0),
        end: new Date(2024, 0, 4, 20, 0)
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 19, 0),
        end: new Date(2024, 0, 5, 20, 0)
      }
    ],
    "Champions (Kids 7-14 y.o)": [
      {
        //Monday
        start: new Date(2024, 0, 1, 18, 0),
        end: new Date(2024, 0, 1, 19, 0),
        color: "#F08600"
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 18, 0),
        end: new Date(2024, 0, 2, 19, 0),
        color: "#F08600"
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 18, 0),
        end: new Date(2024, 0, 3, 19, 0),
        color: "#F08600"
      }
    ],
    "No-Gi Champions (Kids 7-14 y.o)": [
      {
        //Thursday
        start: new Date(2024, 0, 4, 18, 0),
        end: new Date(2024, 0, 4, 19, 0),
        color: "#F08600"
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 18, 0),
        end: new Date(2024, 0, 5, 19, 0),
        color: "#F08600"
      }
    ]
  },
  "Mont Belvieu": {
    minTime: new Date(2024, 0, 1, 10, 0, 0),
    maxTime: new Date(2024, 0, 1, 21, 0, 0),
    "BJJ": [
      {
        //Monday
        start: new Date(2024, 0, 1, 11, 0),
        end: new Date(2024, 0, 1, 12, 0)
      },
      {
        start: new Date(2024, 0, 1, 18, 30),
        end: new Date(2024, 0, 1, 19, 30)
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 18, 30),
        end: new Date(2024, 0, 2, 19, 30)
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 11, 0),
        end: new Date(2024, 0, 3, 12, 0)
      },
      {
        start: new Date(2024, 0, 3, 18, 30),
        end: new Date(2024, 0, 3, 19, 30)
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 11, 0),
        end: new Date(2024, 0, 4, 12, 0)
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 18, 30),
        end: new Date(2024, 0, 5, 19, 30)
      }
    ],
    "Advanced Adult BJJ": [
      {
        //Monday
        start: new Date(2024, 0, 1, 19, 30),
        end: new Date(2024, 0, 1, 20, 0)
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 19, 30),
        end: new Date(2024, 0, 2, 20, 0)
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 19, 30),
        end: new Date(2024, 0, 3, 20, 0)
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 19, 30),
        end: new Date(2024, 0, 4, 20, 0)
      }
    ],
    "No-Gi BJJ": [
      {
        //Tuesday
        start: new Date(2024, 0, 2, 11, 0),
        end: new Date(2024, 0, 2, 12, 0)
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 18, 30),
        end: new Date(2024, 0, 4, 19, 30)
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 11, 0),
        end: new Date(2024, 0, 5, 12, 0)
      }
    ],
    "OPEN MAT": {
      start: new Date(2024, 0, 6, 10, 0),
      end: new Date(2024, 0, 6, 12, 0)
    },
    "Kids BJJ (4-6 y.o)": [
      {
        //Monday
        start: new Date(2024, 0, 1, 17, 0),
        end: new Date(2024, 0, 1, 17, 30),
        color: "#F08600"
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 17, 0),
        end: new Date(2024, 0, 3, 17, 30),
        color: "#F08600"
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 17, 0),
        end: new Date(2024, 0, 5, 17, 30),
        color: "#F08600"
      }
    ],
    "Kids BJJ (7-12 y.o)": [
      {
        //Monday
        start: new Date(2024, 0, 1, 17, 30),
        end: new Date(2024, 0, 1, 18, 30),
        color: "#F08600"
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 17, 30),
        end: new Date(2024, 0, 3, 18, 30),
        color: "#F08600"
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 17, 30),
        end: new Date(2024, 0, 5, 18, 30),
        color: "#F08600"
      }
    ],
    "No-Gi Kids BJJ (7-12 y.o)": [
      {
        //Tuesday
        start: new Date(2024, 0, 2, 17, 30),
        end: new Date(2024, 0, 2, 18, 30),
        color: "#F08600"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 17, 30),
        end: new Date(2024, 0, 4, 18, 30),
        color: "#F08600"
      }
    ],
    "Adult Kickboxing": [
      {
        //Monday
        start: new Date(2024, 0, 1, 17, 30),
        end: new Date(2024, 0, 1, 18, 15),
        color: "#6e23fb"
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 17, 30),
        end: new Date(2024, 0, 3, 18, 15),
        color: "#6e23fb"
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 17, 30),
        end: new Date(2024, 0, 5, 18, 15),
        color: "#6e23fb"
      }
    ],
    "Kids Wrestling": [
      {
        //Monday
        start: new Date(2024, 0, 1, 18, 30),
        end: new Date(2024, 0, 1, 19, 30),
        color: "#6e23fb"
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 18, 30),
        end: new Date(2024, 0, 3, 19, 30),
        color: "#6e23fb"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 18, 30),
        end: new Date(2024, 0, 4, 19, 30),
        color: "#6e23fb"
      }
    ]
  },
  "Pearland": {
    minTime: new Date(2024, 0, 1, 6, 0, 0),
    maxTime: new Date(2024, 0, 1, 21, 0, 0),
    "BJJ": [
      {
        //Monday
        start: new Date(2024, 0, 1, 6, 0),
        end: new Date(2024, 0, 1, 7, 0)
      },
      {
        start: new Date(2024, 0, 1, 12, 0),
        end: new Date(2024, 0, 1, 13, 0)
      },
      {
        start: new Date(2024, 0, 1, 18, 30),
        end: new Date(2024, 0, 1, 19, 30)
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 6, 0),
        end: new Date(2024, 0, 3, 7, 0)
      },
      {
        start: new Date(2024, 0, 3, 18, 30),
        end: new Date(2024, 0, 3, 19, 30)
      },
      {
        //Saturday
        start: new Date(2024, 0, 6, 11, 30),
        end: new Date(2024, 0, 6, 12, 30)
      }
    ],
    "OPEN MAT": {
      //Friday
      start: new Date(2024, 0, 5, 10, 0),
      end: new Date(2024, 0, 5, 12, 0)
    },
    "No-Gi BJJ": [
      {
        start: new Date(2024, 0, 2, 18, 30),
        end: new Date(2024, 0, 2, 19, 30)
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 12, 0),
        end: new Date(2024, 0, 3, 13, 0)
      },
      {
        start: new Date(2024, 0, 4, 18, 30),
        end: new Date(2024, 0, 4, 19, 30)
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 6, 0),
        end: new Date(2024, 0, 5, 7, 0)
      }
    ],
    "Live Training": [
      {
        //Monday
        start: new Date(2024, 0, 1, 13, 0),
        end: new Date(2024, 0, 1, 13, 30)
      },
      {
        start: new Date(2024, 0, 1, 19, 30),
        end: new Date(2024, 0, 1, 20, 0)
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 19, 30),
        end: new Date(2024, 0, 2, 20, 0)
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 13, 0),
        end: new Date(2024, 0, 3, 13, 30)
      },
      {
        start: new Date(2024, 0, 3, 19, 30),
        end: new Date(2024, 0, 3, 20, 0)
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 19, 30),
        end: new Date(2024, 0, 4, 20, 0)
      }
    ],
    "BJJ Fundamentals / Q&A": [
      {
        start: new Date(2024, 0, 1, 19, 30),
        end: new Date(2024, 0, 1, 20, 0)
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 19, 30),
        end: new Date(2024, 0, 2, 20, 0)
      },
      {
        start: new Date(2024, 0, 3, 19, 30),
        end: new Date(2024, 0, 3, 20, 0)
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 19, 30),
        end: new Date(2024, 0, 4, 20, 0)
      }
    ],
    "Striking Class": [
      {
        //Tuesday
        start: new Date(2024, 0, 2, 12, 0),
        end: new Date(2024, 0, 2, 13, 0),
        color: "#6e23fb"
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 17, 30),
        end: new Date(2024, 0, 2, 18, 30),
        color: "#6e23fb"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 12, 0),
        end: new Date(2024, 0, 4, 13, 0),
        color: "#6e23fb"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 17, 30),
        end: new Date(2024, 0, 4, 18, 30),
        color: "#6e23fb"
      }
    ],
    "Kids BJJ (4-6 y.o)": [
      {
        //Monday
        start: new Date(2024, 0, 1, 17, 0),
        end: new Date(2024, 0, 1, 17, 30),
        color: "#F08600"
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 17, 0),
        end: new Date(2024, 0, 3, 17, 30),
        color: "#F08600"
      },
      {
        //Saturday
        start: new Date(2024, 0, 6, 10, 0),
        end: new Date(2024, 0, 6, 10, 30),
        color: "#F08600"
      }
    ],
    "Kids BJJ (7-11 y.o)": [
      {
        //Monday
        start: new Date(2024, 0, 1, 17, 30),
        end: new Date(2024, 0, 1, 18, 30),
        color: "#F08600"
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 17, 30),
        end: new Date(2024, 0, 3, 18, 30),
        color: "#F08600"
      },
      {
        //Saturday
        start: new Date(2024, 0, 6, 10, 30),
        end: new Date(2024, 0, 6, 11, 30),
        color: "#F08600"
      }
    ],
    "No-Gi Kids BJJ (4-6 y.o)": [
      {
        //Tuesday
        start: new Date(2024, 0, 2, 17, 0),
        end: new Date(2024, 0, 2, 17, 30),
        color: "#F08600"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 17, 0),
        end: new Date(2024, 0, 4, 17, 30),
        color: "#F08600"
      }
    ],
    "No-Gi Kids BJJ (7-11 y.o)": [
      {
        //Tuesday
        start: new Date(2024, 0, 2, 17, 30),
        end: new Date(2024, 0, 2, 18, 30),
        color: "#F08600"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 17, 30),
        end: new Date(2024, 0, 4, 18, 30),
        color: "#F08600"
      }
    ],
    "Adult Ground & Pound": [
      {
        //mon
        start: new Date(2024, 0, 1, 10, 0),
        end: new Date(2024, 0, 1, 11, 0),
        color: "#6e23fb"
      },
      {
        //wed
        start: new Date(2024, 0, 3, 10, 0),
        end: new Date(2024, 0, 3, 11, 0),
        color: "#6e23fb"
      }
    ],
    "Kids Competition Class (4-6 y.o)": [
      {
        //wed
        start: new Date(2024, 0, 3, 17, 30),
        end: new Date(2024, 0, 3, 18, 30),
        color: "#F08600"
      },
      {
        //sat
        start: new Date(2024, 0, 6, 10, 30),
        end: new Date(2024, 0, 6, 11, 30),
        color: "#F08600"
      }
    ],
    "Kids Competition Class (7-11 y.o)": [
      {
        //mon
        start: new Date(2024, 0, 1, 18, 30),
        end: new Date(2024, 0, 1, 19, 30),
        color: "#F08600"
      },
      {
        //wed
        start: new Date(2024, 0, 3, 18, 30),
        end: new Date(2024, 0, 3, 19, 30),
        color: "#F08600"
      },
      {
        //sat
        start: new Date(2024, 0, 6, 11, 30),
        end: new Date(2024, 0, 6, 12, 30),
        color: "#F08600"
      }
    ],
    "Women's Only BJJ Class": {
      //Monday
      start: new Date(2024, 0, 1, 17, 30),
      end: new Date(2024, 0, 1, 18, 30)
    }
  },
  "The Woodlands": {
    minTime: new Date(2024, 0, 1, 5, 0, 0),
    maxTime: new Date(2024, 0, 1, 20, 0, 0),
    "BJJ": [
      {
        //Monday
        start: new Date(2024, 0, 1, 11, 0),
        end: new Date(2024, 0, 1, 12, 0)
      },
      {
        start: new Date(2024, 0, 1, 18, 0),
        end: new Date(2024, 0, 1, 19, 0)
      },
      {
        //Wed
        start: new Date(2024, 0, 3, 5, 0),
        end: new Date(2024, 0, 3, 6, 0)
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 11, 0),
        end: new Date(2024, 0, 3, 12, 0)
      },
      {
        start: new Date(2024, 0, 3, 18, 0),
        end: new Date(2024, 0, 3, 19, 0)
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 11, 0),
        end: new Date(2024, 0, 4, 12, 0)
      },
      {
        //thurs
        start: new Date(2024, 0, 4, 19, 0),
        end: new Date(2024, 0, 4, 20, 0)
      }
    ],
    "No-Gi BJJ": [
      {
        //Monday
        start: new Date(2024, 0, 1, 5, 0),
        end: new Date(2024, 0, 1, 6, 0)
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 11, 0),
        end: new Date(2024, 0, 2, 12, 0)
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 19, 0),
        end: new Date(2024, 0, 2, 20, 0)
      }
    ],
    "OPEN MAT": {
      //Saturday
      start: new Date(2024, 0, 6, 8, 0),
      end: new Date(2024, 0, 6, 9, 30)
    },
    "BJJ (Open Rolls)": [
      {
        //Friday
        start: new Date(2024, 0, 5, 5, 0),
        end: new Date(2024, 0, 5, 6, 0)
      },
      {
        start: new Date(2024, 0, 5, 11, 0),
        end: new Date(2024, 0, 5, 12, 0)
      }
    ],
    "Muay Thai": [
      {
        //Monday
        start: new Date(2024, 0, 1, 6, 30),
        end: new Date(2024, 0, 1, 7, 30),
        color: "#6e23fb"
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 18, 0),
        end: new Date(2024, 0, 2, 19, 0),
        color: "#6e23fb"
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 6, 30),
        end: new Date(2024, 0, 3, 7, 30),
        color: "#6e23fb"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 18, 0),
        end: new Date(2024, 0, 4, 19, 0),
        color: "#6e23fb"
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 6, 30),
        end: new Date(2024, 0, 5, 7, 30),
        color: "#6e23fb"
      }
    ],
    "Co-Ed Muay Thai": [
      {
        //Monday
        start: new Date(2024, 0, 1, 8, 30),
        end: new Date(2024, 0, 1, 9, 30),
        color: "#6e23fb"
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 8, 30),
        end: new Date(2024, 0, 3, 9, 30),
        color: "#6e23fb"
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 8, 30),
        end: new Date(2024, 0, 5, 9, 30),
        color: "#6e23fb"
      }
    ],
    "MMA Class Yves Edwards": {
      //friday
      start: new Date(2024, 0, 5, 18, 0),
      end: new Date(2024, 0, 5, 19, 0),
      color: "#6e23fb"
    },
    "Kids BJJ (7+)": [
      {
        //Monday
        start: new Date(2024, 0, 1, 17, 0),
        end: new Date(2024, 0, 1, 18, 0),
        color: "#F08600"
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 17, 0),
        end: new Date(2024, 0, 2, 18, 0),
        color: "#F08600"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 17, 0),
        end: new Date(2024, 0, 4, 18, 0),
        color: "#F08600"
      }
    ],
    "Kids BJJ (No-Gi)(7+)": [
      {
        //Wednesday
        start: new Date(2024, 0, 3, 17, 0),
        end: new Date(2024, 0, 3, 18, 0),
        color: "#F08600"
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 17, 0),
        end: new Date(2024, 0, 5, 18, 0),
        color: "#F08600"
      }
    ],
    "Kids BJJ OPEN MAT": {
      //Saturday
      start: new Date(2024, 0, 6, 10, 0),
      end: new Date(2024, 0, 6, 11, 0),
      color: "#F08600"
    }
  },
  "Huffman": {
    minTime: new Date(2024, 0, 1, 11, 0, 0),
    maxTime: new Date(2024, 0, 1, 21, 0, 0),
    "BJJ": [
      {
        //Tuesday
        start: new Date(2024, 0, 2, 11, 0),
        end: new Date(2024, 0, 2, 12, 0)
      },
      {
        start: new Date(2024, 0, 2, 19, 0),
        end: new Date(2024, 0, 2, 20, 0)
      },
      {
        //Tuesday
        start: new Date(2024, 0, 4, 11, 0),
        end: new Date(2024, 0, 4, 12, 0)
      },
      {
        start: new Date(2024, 0, 4, 19, 0),
        end: new Date(2024, 0, 4, 20, 0)
      }
    ],
    "No-Gi BJJ": [
      {
        //Monday
        start: new Date(2024, 0, 1, 11, 0),
        end: new Date(2024, 0, 1, 12, 0)
      },
      {
        start: new Date(2024, 0, 1, 19, 0),
        end: new Date(2024, 0, 1, 20, 0)
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 11, 0),
        end: new Date(2024, 0, 3, 12, 0)
      },
      {
        start: new Date(2024, 0, 3, 19, 0),
        end: new Date(2024, 0, 3, 20, 0)
      }
    ],
    "OPEN MAT": [
      {
        //Friday
        start: new Date(2024, 0, 5, 19, 0),
        end: new Date(2024, 0, 5, 21, 0)
      }
    ],
    "Kids BJJ": [
      {
        //Tuesday
        start: new Date(2024, 0, 2, 18, 0),
        end: new Date(2024, 0, 2, 18, 45),
        color: "#F08600"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 18, 0),
        end: new Date(2024, 0, 4, 18, 45),
        color: "#F08600"
      }
    ],
    "No-Gi Kids BJJ": [
      {
        //Monday
        start: new Date(2024, 0, 1, 18, 0),
        end: new Date(2024, 0, 1, 18, 45),
        color: "#F08600"
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 18, 0),
        end: new Date(2024, 0, 3, 18, 45),
        color: "#F08600"
      }
    ]
  },
  "Lake Houston": {
    minTime: new Date(2024, 0, 1, 6, 0, 0),
    maxTime: new Date(2024, 0, 1, 21, 0, 0),
    "BJJ Fundamentals": [
      {
        //Monday
        start: new Date(2024, 0, 1, 6, 0),
        end: new Date(2024, 0, 1, 7, 0)
      },
      {
        //Monday
        start: new Date(2024, 0, 1, 12, 0),
        end: new Date(2024, 0, 1, 13, 0)
      },
      {
        start: new Date(2024, 0, 1, 18, 30),
        end: new Date(2024, 0, 1, 20, 30)
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 18, 30),
        end: new Date(2024, 0, 2, 19, 30)
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 6, 0),
        end: new Date(2024, 0, 3, 7, 0)
      },
      {
        //Wednesday
        start: new Date(2024, 0, 3, 12, 0),
        end: new Date(2024, 0, 3, 13, 0)
      },
      {
        start: new Date(2024, 0, 3, 18, 30),
        end: new Date(2024, 0, 3, 20, 30)
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 12, 0),
        end: new Date(2024, 0, 4, 13, 0)
      },
      {
        start: new Date(2024, 0, 4, 18, 30),
        end: new Date(2024, 0, 4, 19, 30)
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 6, 0),
        end: new Date(2024, 0, 5, 7, 0)
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 18, 30),
        end: new Date(2024, 0, 5, 19, 30)
      }
    ],
    "No-Gi BJJ": [
      {
        //Tuesday
        start: new Date(2024, 0, 2, 12, 0),
        end: new Date(2024, 0, 2, 13, 0)
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 12, 0),
        end: new Date(2024, 0, 5, 13, 0)
      }
    ],
    "Adult Wrestling": [
      {
        //Monday
        start: new Date(2024, 0, 1, 10, 30),
        end: new Date(2024, 0, 1, 12, 0),
        color: "#6e23fb"
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 10, 30),
        end: new Date(2024, 0, 5, 12, 0),
        color: "#6e23fb"
      }
    ],
    "Adult Kickboxing": [
      {
        //Tuesday
        start: new Date(2024, 0, 2, 19, 30),
        end: new Date(2024, 0, 2, 20, 30),
        color: "#6e23fb"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 10, 30),
        end: new Date(2024, 0, 4, 12, 0),
        color: "#6e23fb"
      },
      {
        start: new Date(2024, 0, 4, 19, 30),
        end: new Date(2024, 0, 4, 20, 30),
        color: "#6e23fb"
      }
    ],
    "Kids Kickboxing (7-12 y.o)": [
      {
        //Tuesday
        start: new Date(2024, 0, 2, 17, 0),
        end: new Date(2024, 0, 2, 17, 45),
        color: "#6e23fb"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 17, 0),
        end: new Date(2024, 0, 4, 17, 45),
        color: "#6e23fb"
      }
    ],
    "Kids BJJ (4-6 y.o)": [
      {
        //Monday
        start: new Date(2024, 0, 1, 17, 0),
        end: new Date(2024, 0, 1, 17, 30),
        color: "#F08600"
      },
      {
        //Tuesday
        start: new Date(2024, 0, 2, 16, 30),
        end: new Date(2024, 0, 2, 17, 0),
        color: "#F08600"
      },
      {
        //Wed
        start: new Date(2024, 0, 3, 17, 0),
        end: new Date(2024, 0, 3, 17, 30),
        color: "#F08600"
      },
      {
        //Thurs
        start: new Date(2024, 0, 4, 16, 30),
        end: new Date(2024, 0, 4, 17, 0),
        color: "#F08600"
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 17, 0),
        end: new Date(2024, 0, 5, 17, 30),
        color: "#F08600"
      }
    ],
    "Kids BJJ (7-12 y.o)": [
      {
        start: new Date(2024, 0, 1, 17, 30),
        end: new Date(2024, 0, 1, 18, 30),
        color: "#F08600"
      },
      {
        start: new Date(2024, 0, 3, 17, 30),
        end: new Date(2024, 0, 3, 18, 30),
        color: "#F08600"
      },
      {
        //Friday
        start: new Date(2024, 0, 5, 17, 30),
        end: new Date(2024, 0, 5, 18, 30),
        color: "#F08600"
      }
    ],
    "No-Gi Kids (7-12 y.o)": [
      {
        start: new Date(2024, 0, 2, 17, 45),
        end: new Date(2024, 0, 2, 18, 30),
        color: "#F08600"
      },
      {
        //Thursday
        start: new Date(2024, 0, 4, 17, 45),
        end: new Date(2024, 0, 4, 18, 30),
        color: "#F08600"
      }
    ]
  }
};
const specialEvents = {
  "Houston (HQ)": {},
  "The Grove": {},
  "HTX (Downtown)": {},
  "Riverstone": {},
  "HCU Campus": {},
  "Katy": {},
  "Mont Belvieu": {},
  "Pearland": {},
  "The Woodlands": {},
  "Huffman": {},
  "Lake Houston": {}
};
const generateRecurringEvents = (events, numWeeks) => {
  const generatedEvents = [];
  for (let i = 0; i < numWeeks; i++) {
    events.forEach((event) => {
      const start = addWeeks(event.start, i);
      const end = addWeeks(event.end, i);
      const eventStart = new Date(start);
      const eventEnd = new Date(end);
      generatedEvents.push({
        start: eventStart,
        end: eventEnd
      });
    });
  }
  return generatedEvents;
};
const SvgInfo = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
      }
    )
  }
);
const SvgMoon = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        d: "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
      }
    )
  }
);
const SvgSun = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        d: "M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
      }
    )
  }
);
function getDarkColor(eventColor) {
  switch (eventColor) {
    case "#0078ff":
      return "#a2cdff";
    case "#6e23fb":
      return "#bf8dfc";
    case "#F08600":
      return "#ffb64c";
    case "#E20000":
      return "#FF5D5D";
    default:
      return void 0;
  }
}
function UpdateLog() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Text, { as: "b", children: "Update 8.29.24" }),
    /* @__PURE__ */ jsx("br", {}),
    "+ Schedule updated for Houston (HQ)",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Text, { as: "b", children: "Update 8.26.24" }),
    /* @__PURE__ */ jsx("br", {}),
    "+ Schedule updated for Houston (HQ)",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Text, { as: "b", children: "Update 8.12.24" }),
    /* @__PURE__ */ jsx("br", {}),
    "+ Schedule updated for Houston (HQ)",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Text, { as: "b", children: "Update 6.7.24" }),
    /* @__PURE__ */ jsx("br", {}),
    "+ Schedule updated for Houston (HQ)",
    /* @__PURE__ */ jsx("br", {}),
    "+ Schedule updated for The Grove",
    /* @__PURE__ */ jsx("br", {}),
    "+ Schedule updated for Huffman",
    /* @__PURE__ */ jsx("br", {}),
    "+ Schedule updated for Pearland",
    /* @__PURE__ */ jsx("br", {}),
    "+ Schedule updated for The Woodlands",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Text, { as: "b", children: "Update 2.16.24" }),
    /* @__PURE__ */ jsx("br", {}),
    "+ Schedule updated for Pearland",
    /* @__PURE__ */ jsx("br", {}),
    "+ Schedule updated for The Grove",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Text, { as: "b", children: "Update 1.31.24" }),
    /* @__PURE__ */ jsx("br", {}),
    "+ Schedule updated for Riverstone",
    /* @__PURE__ */ jsx("br", {}),
    "+ Rayron Gracie Seminar at Houston (HQ) Feb.5",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Text, { as: "b", children: "Update 1.27.24" }),
    /* @__PURE__ */ jsx("br", {}),
    "+ Schedule updated for Houston (HQ)",
    /* @__PURE__ */ jsx("br", {}),
    "+ Schedule updated for HTX (Downtown)",
    /* @__PURE__ */ jsx("br", {}),
    "+ Schedule updated for Pearland",
    /* @__PURE__ */ jsx("br", {}),
    "+ Abraham Montagne Seminar changed to Feb.17 at HQ",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Text, { as: "b", children: "Update 12.12.23" }),
    /* @__PURE__ */ jsx("br", {}),
    "+ Schedule updated for Pearland",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Text, { as: "b", children: "Update 12.03.23" }),
    /* @__PURE__ */ jsx("br", {}),
    "+ Schedule updated for Houston (HQ)",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Text, { as: "b", children: "Update 11.17.23" }),
    /* @__PURE__ */ jsx("br", {}),
    "+ New Schedule for HTX (Downtown)",
    /* @__PURE__ */ jsx("br", {}),
    "+ Thanksgiving week schedule updated for Houston (HQ), Riverstone, The Grove, & Mont Belvieu",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Text, { as: "b", children: "Update 10.27.23" }),
    /* @__PURE__ */ jsx("br", {}),
    "+ New Schedule for HTX (Downtown)",
    /* @__PURE__ */ jsx("br", {}),
    "+ Fixed schedule for Riverstone",
    /* @__PURE__ */ jsx("br", {}),
    "+ Fixed date for Abraham the Mountain Seminars @ Houston (HQ) to Dec.2",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Text, { as: "b", children: "Update 10.13.23" }),
    /* @__PURE__ */ jsx("br", {}),
    "+ Fixes to Houston(HQ) Schedule",
    /* @__PURE__ */ jsx("br", {}),
    "+ Kemail Verhoeven from Renzo Gracie Holland Seminar @ Houston(HQ) | Oct.16",
    /* @__PURE__ */ jsx("br", {}),
    "+ Buddy Day [Bring a friend to class] @ Houston(HQ) | Oct.18",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Text, { as: "b", children: "Update 10.3.23" }),
    /* @__PURE__ */ jsx("br", {}),
    "+ New Schedule for Huffman",
    /* @__PURE__ */ jsx("br", {}),
    "+ Halloween Costume Parties @ Riverstone & Houston(HQ) | Oct.31 [During normal class hours]",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Text, { as: "b", children: "Update 9.25.23" }),
    /* @__PURE__ */ jsx("br", {}),
    "+ New Schedule for Pearland",
    /* @__PURE__ */ jsx("br", {}),
    "+ Women's Self Defense Seminar @ Houston (HQ) | Oct.14",
    /* @__PURE__ */ jsx("br", {}),
    "+ Popup Open Mat @ HTX (Downtown) | Sept.27",
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Text, { as: "b", children: "Update 9.20.23" }),
    /* @__PURE__ */ jsx("br", {}),
    "+ New Schedule for The Woodlands",
    /* @__PURE__ */ jsx("br", {}),
    "+ Abraham the Mountain Seminars @ Houston (HQ) | Oct.7 & Dec.4",
    /* @__PURE__ */ jsx("br", {}),
    "+ 4 YR Anniversary @ The Grove | Sept.30"
  ] });
}
function ToolbarButtonDisplay() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const directionVariant = useBreakpointValue({
    base: "row",
    lg: "column"
  });
  const {
    register,
    formState: { errors, isSubmitting }
  } = useForm();
  const styleVariant = useBreakpointValue({
    base: {
      right: 0,
      justifyContent: "end",
      gap: 2,
      mr: 4
    },
    lg: {
      right: 0,
      position: "fixed",
      justifyContent: "center",
      height: "60%",
      mr: 4,
      gap: 4,
      mt: "20vh"
    }
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Flex, { zIndex: "2", flexDirection: directionVariant, sx: styleVariant, children: [
      /* @__PURE__ */ jsx(IconButton, { "aria-label": "Color Mode Switch", size: ["md", "lg"], onClick: toggleColorMode, icon: /* @__PURE__ */ jsx(Icon, { as: colorMode === "light" ? SvgMoon : SvgSun }) }),
      /* @__PURE__ */ jsx(
        IconButton,
        {
          "aria-label": "Info Button",
          size: ["md", "lg"],
          onClick: onOpen,
          icon: /* @__PURE__ */ jsx(Icon, { as: SvgInfo })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Modal, { motionPreset: "slideInRight", scrollBehavior: "outside", size: "xl", isOpen, onClose, children: [
      /* @__PURE__ */ jsx(
        ModalOverlay,
        {
          backdropFilter: "auto",
          bg: "blackAlpha.600",
          backdropBlur: "2px"
        }
      ),
      /* @__PURE__ */ jsxs(ModalContent, { children: [
        /* @__PURE__ */ jsx(ModalHeader, { children: /* @__PURE__ */ jsx(Heading, { children: "Welcome to Renzo Events!" }) }),
        /* @__PURE__ */ jsx(ModalCloseButton, {}),
        /* @__PURE__ */ jsx(ModalBody, { children: /* @__PURE__ */ jsxs(Tabs, { isFitted: true, variant: "enclosed", children: [
          /* @__PURE__ */ jsxs(TabList, { mb: "1em", children: [
            /* @__PURE__ */ jsx(
              Tab,
              {
                "aria-label": "About Panel",
                fontSize: "md",
                children: "ABOUT"
              }
            ),
            /* @__PURE__ */ jsx(Tab, { "aria-label": "Class Info Panel", fontSize: "md", children: "CLASS INFO" }),
            /* @__PURE__ */ jsx(Tab, { "aria-label": "Feedback Panel", fontSize: "md", children: "FEEDBACK" })
          ] }),
          /* @__PURE__ */ jsxs(TabPanels, { children: [
            /* @__PURE__ */ jsxs(TabPanel, { children: [
              /* @__PURE__ */ jsxs(Text, { children: [
                "This application aims to serve all students & staff who are looking to balance their time between Renzo Gracie affiliate gyms in the Greater Houston Area.",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "Use the ",
                /* @__PURE__ */ jsx(Text, { textColor: colorMode === "light" ? "#0078ff" : getDarkColor("#0078ff"), as: "b", children: "'Select Schedule'" }),
                " button to view an academy's class program. Visit this website on your computer or laptop for a extensive weekly view.",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "This is an ongoing project with features and fixes to be added. Bookmark this page so you can access it at home, work, or on the go.",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {})
              ] }),
              /* @__PURE__ */ jsx(UpdateLog, {})
            ] }),
            /* @__PURE__ */ jsxs(TabPanel, { children: [
              /* @__PURE__ */ jsx(Text, { as: "b", children: "Brazilian Jiu Jitsu" }),
              /* @__PURE__ */ jsx(Box, { span: "true", w: "200px", h: "10px", borderRadius: "3xl", backgroundColor: colorMode === "light" ? "#0078ff" : getDarkColor("#0078ff") }),
              /* @__PURE__ */ jsx(Text, { children: "BJJ classes encompass a range of levels, from fundamental techniques to live training sessions. Additionally, there are classes available specifically for No-Gi training, which do not require the use of a traditional uniform." }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx(Text, { as: "b", children: "Auxiliary Classes" }),
              /* @__PURE__ */ jsx(Box, { span: "true", w: "200px", h: "10px", borderRadius: "3xl", backgroundColor: colorMode === "light" ? "#6e23fb" : getDarkColor("#6e23fb") }),
              /* @__PURE__ */ jsx(Text, { children: "Auxiliary classes serve as valuable supplements to one's growth in Brazilian Jiu-Jitsu. These classes offer additional training opportunities that complement and enhance the skills and physical conditioning required for BJJ. These will range from other martial arts to fitness sessions. Check with your academy for more information." }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx(Text, { as: "b", children: "Kids Classes" }),
              /* @__PURE__ */ jsx(Box, { span: "true", w: "200px", h: "10px", borderRadius: "3xl", backgroundColor: colorMode === "light" ? "#F08600" : getDarkColor("#F08600") }),
              /* @__PURE__ */ jsx(Text, { children: "These classes are exclusively dedicated to kids' BJJ and may have specific divisions based on age and height established by each academy. Check with your academy for more information." }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx(Text, { as: "b", children: "Special Events" }),
              /* @__PURE__ */ jsx(Box, { span: "true", w: "200px", h: "10px", borderRadius: "3xl", backgroundColor: colorMode === "light" ? "#E20000" : getDarkColor("#E20000") }),
              /* @__PURE__ */ jsx(Text, { children: "These events are either organized by the Houston BJJ community or by Houston Team Renzo Gracie and typically coincide with class cancellations at the academy. For more details about these events, please refer to the academy's social media pages." })
            ] }),
            /* @__PURE__ */ jsxs(TabPanel, { children: [
              /* @__PURE__ */ jsxs(Text, { mb: 6, children: [
                "Are you enjoying what the site provides? Have any suggestions that would improve your experience?",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "Leave a message and share words of encouragment or ways the calendar could enhance your visit!",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx(Text, { textColor: colorMode === "light" ? "#0078ff" : getDarkColor("#0078ff"), as: "b", children: "For Academy Owners / Directors" }),
                /* @__PURE__ */ jsx("br", {}),
                "If you would like to update your academy's schedule or share information about an upcoming event, please provide the location and details below."
              ] }),
              /* @__PURE__ */ jsxs("form", { method: "POST", action: "https://formsubmit.co/92cb9ddf59f1e62ddc366d8322abea72", children: [
                /* @__PURE__ */ jsxs(FormControl, { mb: 6, isInvalid: errors.message, children: [
                  /* @__PURE__ */ jsx(FormLabel, { htmlFor: "message" }),
                  /* @__PURE__ */ jsx(
                    Textarea,
                    {
                      id: "message",
                      placeholder: "Message",
                      style: { fontSize: "1.2em" },
                      ...register("message", {
                        required: "This is required",
                        minLength: { value: 4, message: "Minimum length should be 10" }
                      })
                    }
                  ),
                  /* @__PURE__ */ jsx(FormErrorMessage, { children: errors.message && errors.message.message })
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    mt: 2,
                    colorScheme: "messenger",
                    isLoading: isSubmitting,
                    type: "submit",
                    children: "Submit"
                  }
                )
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(ModalFooter, { children: /* @__PURE__ */ jsx(Button, { colorScheme: "messenger", mr: 3, onClick: onClose, children: "Close" }) })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx(Box, { mt: 2, pos: "relative", bottom: "0", py: 4, color: "blackAlpha", children: /* @__PURE__ */ jsx(Flex, { justifyContent: "center", children: /* @__PURE__ */ jsx(Text, { fontSize: ["12px", "16px"], as: "a", href: "https://elliotweb.dev", children: "Renzo Events © 2023-2024" }) }) });
}
const SvgLogo = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 400 387",
    ...props,
    children: [
      /* @__PURE__ */ jsx("ellipse", { cx: 200, cy: 193.5, fill: "#fff", rx: 200, ry: 193.5 }),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#0032A1",
          d: "M122.667 30.4c-10.267 6.133-21.2 15.067-22.134 18-.666 2 0 3.467 2.267 5.333 2.933 2.267 4.8 2.534 17.867 1.867 15.333-.667 22.666-2.4 21.733-5.2-.533-1.6-3.2-2.533-11.867-4.267-5.6-1.2-5.733-4.533-.533-12.4 4.533-6.8 4.533-7.066 1.733-7.066-1.733 0-5.733 1.733-9.066 3.733ZM266.667 27.733c0 .667 1.866 3.734 4.133 6.8 5.733 8 4.933 11.067-3.467 12.8-7.066 1.467-10 2.8-10 4.667 0 2.667 21.734 5.733 32.4 4.533 16.934-1.866 14-8.8-10.266-24.666-7.467-4.934-12.8-6.534-12.8-4.134Z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#0032A1",
          d: "M149.333 32.667c-3.333 1.066-7.733 3.466-10 5.2-5.866 4.8-3.066 6.8 9.067 6.533 14.533-.267 32.667-7.867 28.533-11.867-1.866-2-21.6-1.866-27.6.134ZM229.733 31.867c-7.466 1.333-8.4 2.533-4.533 5.6 5.2 4.266 20 8 29.6 7.6 7.467-.4 8.533-.667 8.533-3.067 0-1.867-2.133-3.733-7.333-6.267-8-4-17.6-5.333-26.267-3.866ZM86.933 47.6c-8.666 9.067-19.066 25.733-18.666 29.6.4 3.333.666 3.467 10 3.333 8.666 0 10.8-.666 21.333-6 7.067-3.466 11.867-6.8 12.133-8.266.4-2-.8-2.267-9.733-2.267-12 0-12.4-.533-9.467-11.467 2.667-10.4 1.067-11.866-5.6-4.933ZM306.667 45.6c0 .933.8 4.8 1.866 8.533 2.667 9.867 1.2 11.734-8 10.534-7.466-.934-12.533 0-12.533 2.133 0 4 27.867 15.867 37.333 15.867 4 0 8-2.934 8-6 0-2.134-11.6-19.467-18.133-27.2-4.667-5.334-8.533-7.067-8.533-3.867ZM180 54.667c-57.333 8-103.867 48.8-118.133 103.333-3.067 11.333-3.6 16.267-3.734 32.667C58 224.8 67.067 251.733 87.867 277.6c29.2 36.533 79.6 57.333 125.466 51.867C274.267 322.133 320.4 283.2 336.267 225.6c2.4-8.667 2.933-14 2.933-33.6.133-20.533-.267-24.667-3.067-34.667C319.467 97.467 266.8 56.267 204 54c-8.4-.267-19.2 0-24 .667Zm18.667 12c0 7.733-.4 10.666-1.734 10.666-6.133 0-25.733 3.2-33.6 5.6-32 9.334-60.533 34.4-73.066 64.4-7.2 17.334-8.267 22.667-8.134 44 0 18.134.4 21.067 3.734 31.334 4.4 13.333 7.2 19.2 14.533 30 19.067 28.133 52.533 47.733 86.933 50.8l10.134.933-.4 11.333-.4 11.467-8-.267c-10.667-.4-33.067-6.133-46.134-11.6-28.933-12.133-56.666-39.066-70-67.866C60.4 220.933 57.467 191.867 64 162.4c12.533-56.667 62.533-99.733 122-105.067 5.867-.533 11.067-1.066 11.733-1.2.534 0 .934 4.667.934 10.534Zm38 17.6c19.733 6.4 40.933 21.2 54 37.466 8.533 10.667 17.866 29.334 21.466 42.934 3.867 14.8 3.867 37.2 0 52-10.8 40.933-42.533 72.533-83.466 83.2-5.734 1.6-14.934 3.2-20.534 3.6-11.2.933-14.133-.4-20.266-9.067l-2.934-4 6.534.8c7.733 1.067 14.4-.667 18.8-4.8s3.866-5.067-2.534-5.067c-7.733 0-23.466-3.466-27.2-6-4.533-2.933-8.533-11.6-8.533-18.4 0-5.866 4.933-17.866 8.8-21.066 1.067-.8 6.267-1.867 11.6-2.134 8.4-.533 10.133-.266 14.267 2.534 4.266 2.8 9.733 9.6 11.066 13.466.8 2.667 15.467-7.2 27.2-18.4C251.067 225.467 256 220 256 219.2c0-2.533-4-3.333-7.067-1.333-4.933 3.2-17.866 6.266-24.533 5.866-5.2-.266-6.667-1.066-8.267-3.866-4.666-8.4 4.4-21.867 21.867-32 10.933-6.4 13.867-7.067 19.067-3.867l4.266 2.667v12.666c0 12.4.134 12.667 3.067 12.667 8.8 0 28.933-15.333 28.933-21.867 0-2.4.534-3.2 2-2.666 1.6.666 2-.267 2-4.267 0-3.6-1.333-6.667-5.066-11.733-2.667-3.734-6.667-9.334-8.534-12.4-8.666-13.2-30.533-33.467-51.733-47.6-12.4-8.4-14.4-10.534-12-13.6 2-2.267 7.333-2.4 13.2-.4 5.2 1.866 6.4.933 4.4-3.467-1.333-2.8-5.333-6.267-14.4-12.267-2.267-1.466-2-1.6 1.467-.933 2.266.533 7.6 2 12 3.467Zm19.2 57.733c6.533 4 14.933 12.667 14 14.133-.4.667-4.8-.933-10-3.466-8.934-4.534-13.2-9.467-11.067-12.8.933-1.734 1.333-1.6 7.067 2.133Z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#0032A1",
          d: "M54 72.8c-3.733 3.733-9.6 16.933-13.2 29.2-5.333 18.267-4.533 22 4.533 22 5.734 0 25.734-12.4 36.267-22.667 10.133-9.733 7.6-13.066-6.4-8.266-14.8 5.2-16.533 3.866-16.533-12.267 0-10.4-.8-11.733-4.667-8ZM342.267 72.933c-.534.4-.934 5.6-.934 11.334 0 9.866-.266 10.533-3.333 12-2.667 1.2-4.4.933-9.867-1.467-8.133-3.467-14.8-3.733-14.8-.533S323.2 106.4 337.2 115.733c13.2 8.8 16.933 10.4 22.133 9.067 5.2-1.333 5.334-5.867.8-21.6-6.533-22.133-13.866-34.4-17.866-30.267Z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#0032A1",
          d: "M21.333 123.333c-3.466 9.2.534 44.8 5.6 49.067 5.2 4.4 10.4.933 19.467-13.067 10.8-16.8 16.8-32.666 12.4-32.666-.8 0-4.933 2.933-9.333 6.666-8 6.667-13.2 8.267-15.867 4.934-.667-.8-2.8-5.2-4.667-9.6-3.733-9.067-5.733-10.4-7.6-5.334ZM372.933 126.8c-1.733 4-3.6 8.267-4 9.6-.533 1.2-2.4 2.933-4.133 3.867-3.733 1.6-3.6 1.733-15.467-8-11.6-9.334-12.4-5.067-2.666 14 14.266 27.866 25.333 35.866 30.133 21.6 2.667-7.867 4.8-33.334 3.333-39.734-2-9.333-3.6-9.6-7.2-1.333Z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#0032A1",
          d: "M42.267 174.933c-1.867 2.4-4.534 6.934-6 9.867-4.8 9.6-8.8 9.067-18.267-2.133-8.667-10.4-10.533-10.4-9.6-.4.8 9.733 12.133 38.4 17.067 43.333 6.666 6.8 12.533 2 17.733-14.533 9.733-31.067 9.2-49.6-.933-36.134ZM348.933 172.933c-2 2-.666 13.867 3.067 28.4 4.8 18.267 7.467 24 12.267 26.534 6.133 3.466 9.333.4 16.133-15.734 9.333-21.866 12.4-34.666 8.933-36.8-1.2-.8-12.533 10.4-15.066 14.8-.534 1.067-2.8 1.867-4.934 1.867-3.333 0-4.4-.933-6.8-5.733-5.6-11.2-10.8-16.267-13.6-13.334Z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#0032A1",
          d: "M46.933 223.2c-.8 1.733-2.133 6.933-3.066 11.6-2.667 14.133-4.534 14.8-18.8 5.867C14 233.867 12 233.333 12 237.867c0 4.133 9.467 16.8 22.8 30.8 11.733 12.133 16.133 14.4 20.267 10.133 3.6-3.467 4.266-12 2.4-31.867-2-22.533-6.534-32.533-10.534-23.733ZM344.667 223.867c-3.734 7.333-7.067 42.666-4.667 50.666 3.6 12.534 11.733 8.667 32.133-15.333 18.267-21.467 18.534-29.333.667-18.133-4.533 2.8-9.2 5.466-10.4 6-4 1.466-7.333-3.2-9.067-12.267-1.6-9.067-3.733-14.8-5.466-14.8-.667 0-2 1.733-3.2 3.867Z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#0032A1",
          d: "M63.6 265.6c-.667 2 1.2 19.2 2.4 21.067.4.533.267 2-.133 3.2-1.6 4.266-5.067 4.666-17.2 2C42 290.4 36.4 289.733 35.733 290.4c-3.466 3.467 6.267 11.067 30.134 23.733 11.2 5.867 15.066 7.334 19.066 6.934 4.934-.4 5.067-.534 5.467-5.867.8-11.2-18.533-51.2-24.8-51.2-.8 0-1.6.8-2 1.6ZM328 268c-7.467 7.867-21.333 38.667-21.333 47.067 0 9.466 5.866 9.866 22.133 1.466 20.933-10.933 33.867-20.133 33.867-24.133 0-2.267-2.534-2.267-15.734.533-10 2.134-11.066 2.134-13.066.134-1.867-1.867-2-3.467-.534-13.467 1.067-7.733 1.2-12.133.267-13.733-1.2-2.134-1.733-2-5.6 2.133Z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#0032A1",
          d: "M94.667 302.667c0 1.466 1.466 6.533 3.333 11.466 4.133 10.8 4.133 10.534 0 14.534C95.2 331.6 93.6 332 85.067 332c-18 0-16.534 4.533 4 12 19.733 7.2 32.533 10 38.4 8.667 4.933-1.2 5.2-1.6 5.6-6.934.533-6.666-2.534-13.2-10.4-22.133C116 316.133 97.867 300 96 300c-.8 0-1.333 1.2-1.333 2.667ZM291.067 307.867c-18.534 15.466-28.267 28.8-28.4 38.4 0 5.866 3.6 7.6 13.866 6.666 8.267-.666 33.2-8.4 42.4-13.066 9.467-4.8 5.867-7.867-9.733-7.867-6.8 0-9.333-.533-10.933-2.4-3.067-3.333-2.8-5.867 1.066-17.333 1.867-5.467 3.334-10.134 3.334-10.4 0-2.134-5.067.533-11.6 6Z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#0032A1",
          d: "M136 327.333c0 3.6 3.467 9.067 9.2 14.667 3.067 2.8 5.467 5.867 5.467 6.667 0 2.8-4.534 5.6-15.067 9.333-7.733 2.8-10.267 4.267-10 5.867.8 4.266 9.867 5.6 33.2 5.2 19.733-.4 22.533-.667 25.067-2.934 8.266-7.466-2.8-20.133-30-34.266-13.067-6.8-17.867-8-17.867-4.534ZM245.6 331.333c-21.733 10.534-33.467 20-35.467 28.667-1.733 7.067 3.6 9.467 23.067 10.267 8.533.4 19.867.133 25.2-.667 16.4-2.4 17.2-6 2.4-10.933-10-3.334-14.133-6-14.133-9.334 0-1.333 3.066-5.466 6.666-9.333 4.934-5.067 6.667-8 6.667-10.8 0-2.133-.533-3.867-1.067-3.867-.666 0-6.666 2.667-13.333 6ZM192 357.333v20h12v-40h-12v20Z"
        }
      )
    ]
  }
);
const SvgSocial = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        d: "M448.5 112c0-26.233-21.267-47.5-47.5-47.5H112c-26.233 0-47.5 21.267-47.5 47.5v289c0 26.233 21.267 47.5 47.5 47.5h289c26.233 0 47.5-21.267 47.5-47.5V112zM257 175.833c44.182 0 80 35.816 80 80s-35.818 80-80 80-80-35.816-80-80 35.818-80 80-80zM416.5 160.5c0 8.836-7.163 16-16 16h-48c-8.837 0-16-7.164-16-16v-48c0-8.836 7.163-16 16-16h48c8.837 0 16 7.164 16 16v48zm-15 256h-288c-8.822 0-17-8.178-17-17v-175h53.072c-3.008 10-4.572 20.647-4.572 31.583C145 286 156.65 314 177.805 335.154s49.279 32.741 79.195 32.741 58.041-11.681 79.195-32.835S369 286.016 369 256.099c0-10.936-1.563-21.599-4.572-31.599H416.5v175c0 8.822-6.178 17-15 17z"
      }
    )
  }
);
const index_page = "";
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => {
    return startOfWeek(/* @__PURE__ */ new Date(), { weekStartsOn: 1 });
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
      }`;
function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode } = useColorMode();
  const [selectedLocation, setSelectedLocation] = useState();
  const [events, setEvents] = useState([]);
  const generatedEvents = [];
  const bgGradients = ["linear(to-br, purple.500, red.600)", "linear(to-bl, red.600, yellow.500)", "linear(to-br, yellow.600, pink.500)", "linear(to-bl, pink.500, purple.500)"];
  const handleShowEvents = (location) => {
    Object.entries(academies[location]).forEach(([className, classInfo]) => {
      const classEvents = Array.isArray(classInfo) ? classInfo : [classInfo];
      classEvents.forEach((event) => {
        const eventColor = event.color;
        generatedEvents.push(
          ...generateRecurringEvents([event], 52).map((event2) => ({
            ...event2,
            title: className,
            color: eventColor
          }))
        );
      });
    });
    Object.entries(specialEvents[location]).forEach(([className, classInfo]) => {
      const classEvents = Array.isArray(classInfo) ? classInfo : [classInfo];
      classEvents.forEach((event) => {
        const eventColor = event.color;
        generatedEvents.push(
          ...generateRecurringEvents([event], 1).map((event2) => ({
            ...event2,
            title: className,
            color: eventColor
          }))
        );
      });
    });
    setEvents(generatedEvents);
    setSelectedLocation(location);
    onClose();
  };
  function ButtonDisplay() {
    const variant = useBreakpointValue({
      base: {
        width: "60%",
        position: "fixed",
        borderTopRadius: 0,
        zIndex: 2,
        ml: 2,
        border: "2px",
        borderColor: "blackAlpha.500"
      },
      lg: {
        height: "60vh",
        mt: "20vh",
        position: "fixed",
        borderLeftRadius: 0,
        borderRightRadius: "50px",
        className: "truncate",
        maxW: 20
      }
    });
    const isLg = useBreakpointValue({ base: false, lg: true });
    return /* @__PURE__ */ jsx(Button, { variant: "solid", ref: btnRef, sx: variant, colorScheme: "messenger", onClick: onOpen, animation: `${pulse} 2s infinite`, children: /* @__PURE__ */ jsx(Heading, { size: isLg ? "2xl" : "lg", className: isLg ? "rotateText" : "", children: "SELECT SCHEDULE" }) });
  }
  function calendarDisplay() {
    const viewsVariant = useBreakpointValue({
      base: ["day"],
      lg: ["day", "week"]
    });
    const customDayPropGetter = (date) => {
      if (date.getDate() === (/* @__PURE__ */ new Date()).getDate()) {
        return {
          style: {
            backgroundColor: colorMode === "light" ? "#E5FFF0" : "#3C3B43"
          }
        };
      }
      return {};
    };
    return /* @__PURE__ */ jsx(
      Calendar,
      {
        localizer,
        events,
        startAccessor: "start",
        endAccessor: "end",
        views: viewsVariant,
        defaultView: "day",
        formats: { timeGutterFormat: "h aa" },
        dayPropGetter: customDayPropGetter,
        dayLayoutAlgorithm: "no-overlap",
        min: selectedLocation ? academies[selectedLocation].minTime : academies.minTime,
        max: selectedLocation ? academies[selectedLocation].maxTime : academies.maxTime,
        eventPropGetter: (event) => ({
          style: {
            backgroundColor: colorMode === "light" ? event.color : getDarkColor(event.color)
          }
        })
      }
    );
  }
  function linkAcademy(academy) {
    return "https://www.instagram.com/" + academy;
  }
  return /* @__PURE__ */ jsxs(Box, { position: "relative", children: [
    /* @__PURE__ */ jsxs(
      Drawer,
      {
        isOpen,
        placement: "left",
        onClose,
        finalFocusRef: btnRef,
        size: ["xs", "sm"],
        children: [
          /* @__PURE__ */ jsx(DrawerOverlay, {}),
          /* @__PURE__ */ jsxs(DrawerContent, { children: [
            /* @__PURE__ */ jsx(DrawerCloseButton, { size: "lg" }),
            /* @__PURE__ */ jsx(DrawerHeader, { children: /* @__PURE__ */ jsx(Heading, { size: ["lg", "xl"], children: "Choose an Academy" }) }),
            /* @__PURE__ */ jsx(DrawerBody, { children: /* @__PURE__ */ jsxs(Flex, { height: ["40em", "100%"], mx: [0, 4], gap: [4, 6], children: [
              /* @__PURE__ */ jsx(ButtonGroup, { size: ["md", "lg"], children: /* @__PURE__ */ jsxs(Stack, { gap: [2, 3], children: [
                /* @__PURE__ */ jsx(
                  IconButton,
                  {
                    as: "a",
                    color: "white",
                    bgGradient: bgGradients[0],
                    _hover: { bg: "blackAlpha.600" },
                    href: linkAcademy("renzograciehouston"),
                    icon: /* @__PURE__ */ jsx(SvgSocial, {})
                  }
                ),
                /* @__PURE__ */ jsx(
                  IconButton,
                  {
                    as: "a",
                    color: "white",
                    bgGradient: bgGradients[1],
                    _hover: { bg: "blackAlpha.600" },
                    href: linkAcademy("renzograciethegrove"),
                    icon: /* @__PURE__ */ jsx(SvgSocial, {})
                  }
                ),
                /* @__PURE__ */ jsx(
                  IconButton,
                  {
                    as: "a",
                    color: "white",
                    bgGradient: bgGradients[2],
                    _hover: { bg: "blackAlpha.600" },
                    href: linkAcademy("renzograciehoustonhcucampus"),
                    icon: /* @__PURE__ */ jsx(SvgSocial, {})
                  }
                ),
                /* @__PURE__ */ jsx(
                  IconButton,
                  {
                    as: "a",
                    color: "white",
                    bgGradient: bgGradients[3],
                    _hover: { bg: "blackAlpha.600" },
                    href: linkAcademy("renzogracie_htx"),
                    icon: /* @__PURE__ */ jsx(SvgSocial, {})
                  }
                ),
                /* @__PURE__ */ jsx(
                  IconButton,
                  {
                    as: "a",
                    color: "white",
                    bgGradient: bgGradients[0],
                    _hover: { bg: "blackAlpha.600" },
                    href: linkAcademy("renzograciehuffman"),
                    icon: /* @__PURE__ */ jsx(SvgSocial, {})
                  }
                ),
                /* @__PURE__ */ jsx(
                  IconButton,
                  {
                    as: "a",
                    color: "white",
                    bgGradient: bgGradients[1],
                    _hover: { bg: "blackAlpha.600" },
                    href: linkAcademy("renzograciekaty"),
                    icon: /* @__PURE__ */ jsx(SvgSocial, {})
                  }
                ),
                /* @__PURE__ */ jsx(
                  IconButton,
                  {
                    as: "a",
                    color: "white",
                    bgGradient: bgGradients[2],
                    _hover: { bg: "blackAlpha.600" },
                    href: linkAcademy("renzogracielakehouston"),
                    icon: /* @__PURE__ */ jsx(SvgSocial, {})
                  }
                ),
                /* @__PURE__ */ jsx(
                  IconButton,
                  {
                    as: "a",
                    color: "white",
                    bgGradient: bgGradients[3],
                    _hover: { bg: "blackAlpha.600" },
                    href: linkAcademy("renzograciembv"),
                    icon: /* @__PURE__ */ jsx(SvgSocial, {})
                  }
                ),
                /* @__PURE__ */ jsx(
                  IconButton,
                  {
                    as: "a",
                    color: "white",
                    bgGradient: bgGradients[0],
                    _hover: { bg: "blackAlpha.600" },
                    href: linkAcademy("renzograciepearland"),
                    icon: /* @__PURE__ */ jsx(SvgSocial, {})
                  }
                ),
                /* @__PURE__ */ jsx(
                  IconButton,
                  {
                    as: "a",
                    color: "white",
                    bgGradient: bgGradients[1],
                    _hover: { bg: "blackAlpha.600" },
                    href: linkAcademy("renzogracieriverstone"),
                    icon: /* @__PURE__ */ jsx(SvgSocial, {})
                  }
                ),
                /* @__PURE__ */ jsx(
                  IconButton,
                  {
                    as: "a",
                    color: "white",
                    bgGradient: bgGradients[2],
                    _hover: { bg: "blackAlpha.600" },
                    href: linkAcademy("renzo_gracie_the_woodlands"),
                    icon: /* @__PURE__ */ jsx(SvgSocial, {})
                  }
                ),
                /* @__PURE__ */ jsx(IconButton, { isDisabled: true, bgGradient: bgGradients[3], _hover: { bg: "blackAlpha.400" }, icon: /* @__PURE__ */ jsx(SvgSocial, {}) })
              ] }) }),
              /* @__PURE__ */ jsx(Divider, { orientation: "vertical" }),
              /* @__PURE__ */ jsx(ButtonGroup, { size: ["md", "lg"], colorScheme: "messenger", children: /* @__PURE__ */ jsxs(Stack, { gap: [2, 3], children: [
                /* @__PURE__ */ jsx(Button, { onClick: () => handleShowEvents("Houston (HQ)"), children: "HOUSTON (HQ)" }),
                /* @__PURE__ */ jsx(Button, { onClick: () => handleShowEvents("The Grove"), children: "THE GROVE" }),
                /* @__PURE__ */ jsx(Button, { onClick: () => handleShowEvents("HCU Campus"), children: "HCU CAMPUS" }),
                /* @__PURE__ */ jsx(Button, { onClick: () => handleShowEvents("HTX (Downtown)"), children: "HTX (DOWNTOWN)" }),
                /* @__PURE__ */ jsx(Button, { onClick: () => handleShowEvents("Huffman"), children: "HUFFMAN" }),
                /* @__PURE__ */ jsx(Button, { onClick: () => handleShowEvents("Katy"), children: "KATY" }),
                /* @__PURE__ */ jsx(Button, { onClick: () => handleShowEvents("Lake Houston"), children: "LAKE HOUSTON" }),
                /* @__PURE__ */ jsx(Button, { onClick: () => handleShowEvents("Mont Belvieu"), children: "MONT BELVIEU" }),
                /* @__PURE__ */ jsx(Button, { onClick: () => handleShowEvents("Pearland"), children: "PEARLAND" }),
                /* @__PURE__ */ jsx(Button, { onClick: () => handleShowEvents("Riverstone"), children: "RIVERSTONE" }),
                /* @__PURE__ */ jsx(Button, { onClick: () => handleShowEvents("The Woodlands"), children: "THE WOODLANDS" }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    isDisabled: true,
                    onClick: () => handleShowEvents("Missouri City"),
                    _after: {
                      position: "absolute",
                      top: "-8px",
                      right: "-4px",
                      width: "auto",
                      height: "18px",
                      borderRadius: "5px",
                      backgroundColor: "#FF8700",
                      color: "black",
                      fontSize: "12px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      content: '"COMING SOON"'
                    },
                    children: "MISSOURI CITY"
                  }
                )
              ] }) })
            ] }) })
          ] })
        ]
      }
    ),
    ButtonDisplay(),
    /* @__PURE__ */ jsx(ToolbarButtonDisplay, {}),
    /* @__PURE__ */ jsx(Flex, { py: 4, justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ jsx(Heading, { size: ["xl", "3xl"], children: selectedLocation ? `Schedule for ${selectedLocation}` : "Go Roll Today!" }) }),
    /* @__PURE__ */ jsxs(Flex, { justifyContent: "center", alignItems: "center", mx: [null, null, null, 24, 24], children: [
      /* @__PURE__ */ jsx(Box, { pos: "absolute", mt: 2, children: /* @__PURE__ */ jsx(Icon, { as: SvgLogo, width: ["250px", "500px"], height: ["250px", "500px"], zIndex: -1 }) }),
      /* @__PURE__ */ jsxs(Box, { width: "100%", children: [
        calendarDisplay(),
        /* @__PURE__ */ jsx(Text, { color: "blackAlpha", mt: 1, fontSize: ["12px", "16px"], children: "Last Updated 8.29.24" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Page
};
