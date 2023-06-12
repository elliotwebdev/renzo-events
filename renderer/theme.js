
import { extendTheme } from "@chakra-ui/react";
// import { mode } from "@chakra-ui/theme-tools";

const config = {
      initialColorMode: 'light',
      useSystemColorMode: false,
    }

const theme = extendTheme({
      config,
      fonts: {
            heading: `'Teko', sans-serif`,
            body: `'Montserrat Variable', sans-serif`
            },
})

export default theme;
