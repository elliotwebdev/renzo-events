import PropTypes from 'prop-types'
import {
  Flex,
  Heading,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react'

export { Page }

Page.propTypes = {
  is404: PropTypes.bool
}
function Page({ is404 }) {
  if (is404) {
    return (
      <>
        <Flex mt={20} justifyContent="center" textAlign="center">
          <Stack>
            <Heading>Error 404</Heading>
            <Text>This page could not be found.</Text>
            <Button colorScheme="messenger" as="a" href="https://renzo.events">Return to Renzo Events</Button>
          </Stack>
        </Flex>
      </>
    )
  } else {
    return (
      <>
        <Flex mt={20} justifyContent="center" textAlign="center">
          <Stack>
            <Heading>Internal Error 500</Heading>
            <Text>Something went wrong.</Text>
          </Stack>
        </Flex>
      </>
    )
  }
}
