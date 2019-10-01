import React from 'react';
import styled from 'styled-components';


const Flex = styled.div`
   display:flex;
   flex-direction: column;
   justify-content:center;
   align-items:center;
   align-content: space-around;
   margin: 1rem 1.5rem 1rem 1.5rem;
   
`;

const Color = styled.h1`
   font-family: 'audiowide';
   font-weight: 'bold';
   color:#4141D8;
   font-size:3rem;
`;

const Size = styled.h3`
   font-size:2rem;
`;


export const StarInfo = (props) => {
         
       return (  
         <Flex>
             <Color>{props.name}</Color>
             <Size>Gender: {props.gender}</Size>
             <Size>Eye Color: {props.eyes}</Size>
         </Flex>

         
       )

}

export default StarInfo;