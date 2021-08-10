
import styled ,{ ThemeProvider} from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useState} from "react";

import lightTheme from "./themes/light.json";
import darkTheme from "./themes/dark.json";

import Header from 'components/Header';
import Footer from "../Footer";


export default function ({children}){
    const[isLight, setIsLight]= useState(true);

    function handleToggleTheme(){
        setIsLight(!isLight);
    }
        return (
        <ThemeProvider theme={isLight? lightTheme : darkTheme}>
            <Wrapper>
                    <GlobalStyle/>
                <Header isLight={isLight} handleToggleTheme={handleToggleTheme}/>
                <Main>
                    {children}
                </Main>
                <Footer />
            </Wrapper>
        </ThemeProvider>
        );

}
const Wrapper = styled.div`
`;
const Main = styled.div`
min-height: calc(100vh - 192px);
width:96%;
max-width:1240px;
margin:auto;
margin-top:32px;


`;