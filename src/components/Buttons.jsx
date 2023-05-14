import {Box} from '@chakra-ui/react'
import {useState} from 'react'
import {academies} from './Academies'
import {generateRecurringEvents} from './GenerateEvents'



const Buttons = () => {

      return (
            <Box>
                  <button onClick={() => handleShowEvents("Houston")}>
                  Show Houston Events
                  </button>
                  <button onClick={() => handleShowEvents("Grove")}>
                  Show Grove Events
                  </button>
            </Box>
      )
}

export default Buttons