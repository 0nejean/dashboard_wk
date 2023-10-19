import { extendTheme } from '@chakra-ui/react';
import { textTheme } from './components/Text';
// import { containerTheme } from './components/container';

const theme = extendTheme({
    components: {
        // Container: containerTheme,
        Text: textTheme,
    },
    styles: {
        global: {
            html: {
                width: '100%',
                height: '100%',
            },
            body: {
                bg: 'white',
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: '400',
                color: '#2B3674',
            },
            // styles for the `a`
            a: {
                color: '#2B3674',
                _hover: {
                    textDecoration: 'none !important',
                },
            },
            li: {
                listStyle: 'none',
            },
        },
    },
    space: {
        4: '25px',
    },
    colors: {
        secondary_grey_700: 'red',
    },
});

export default theme;
