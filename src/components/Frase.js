import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding:3rem;
    border-radius: .5rem;
    background: white;
    max-width:800px;

    @media (min-width:992px){
        margin-top:10rem;
    }

    

    h1{
        text-align:center;
        position:relative;
        padding-left: 4rem;
        color:black;

        &::before{
        content: open-quote;
        font-size: 7rem;
        color:black;
        position:absolute;
        left: -1rem;
        top:-2rem;
    }
    }

    p{
        font-size: 1.4rem;
        text-align : right;
        color:#666;
        margin-top:2rem;
    }

`

const Frase = ({frase}) => {
    
    //const [author,quote] = frase;

    

    return (
        <>
        
            <ContenedorFrase>
                <p>{frase.author}</p>
                <h1>{frase.quote}</h1>
            </ContenedorFrase>
            
        </>  
      );
}
 
export default Frase;