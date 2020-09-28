import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Boton = styled.button`
    background: -webkit-linear-gradient(top left , #007d35 0%, #007d35 40%, #0f574e 100%);
    background-size:300px;
    font-size: 2rem;
    color:white;
    margin-top: 3rem;
    padding : 1rem 3rem;
    border:2px solid black;
`
const Contenedor = styled.div`
  display:flex;
  
  align-items:center;
  flex-direction:column;
`

function App() {
  //state 
  const [frase,guardarFrase] = useState({});

  //useEffect  cargar una frase
  useEffect(()=>{
    consultarApi();
  },[])

  const consultarApi = async () =>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes'); 
    const resApi = await  api.json();
    guardarFrase(resApi[0]);
  }


  return (
    <Contenedor>
      <Boton onClick={consultarApi} type="submit">Obtener Frase</Boton>
      <Frase  frase={frase} />
    </Contenedor>
    
  );
}

export default App;
