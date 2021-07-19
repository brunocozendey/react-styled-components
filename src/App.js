import React, {useState} from "react";
import { ThemeProvider } from 'styled-components';

import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

import { BotaoTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

import {GlobalStyle} from './Components/GlobalStyle'


function App() {
  const [thema, setThema] = useState(true);

  const toggleThema = () => {
    setThema((thema)=> !thema)
  };

  return (
    <ThemeProvider theme={thema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BotaoTema onClick={toggleThema}>
        <SwitcherTema thema={thema}/>
      </BotaoTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
