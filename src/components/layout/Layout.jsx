import React from 'react';
import Header from './header/Header';
import styled from 'styled-components';
import Title from '../common/Tilte';
import History from '../common/History';
import { Box } from '@chakra-ui/react';

const Layout = ({ pagename, children }) => {
    // const { pagename, children } = props;
    return (
        <Wrap>
            <Header />
            <main id="main">
                <Box pl="10px">
                    <History pagename={pagename} />
                    <Title pagename={pagename} />
                </Box>
                {children}
            </main>
        </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-left: 290px;
    background: var(--secondary-grey-300, #f4f7fe);
    #main {
        flex: 1;
        padding: 50px 20px;
    }
`;

export default Layout;
