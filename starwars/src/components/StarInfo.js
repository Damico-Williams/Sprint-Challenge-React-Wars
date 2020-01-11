import React from 'react';
import styled from 'styled-components';

const FlexBox = styled.div`
   display:flex;
   flex-direction: column;
   justify-content:center;
   margin: 1rem 1.5rem 1rem 1.5rem;
   align-content: space-around;
   align-items:center;
  `;

const Color = styled.h1`
   font-family: 'audiowide';
   font-weight: 'bold';
   color:#4141D8;
   text-shadow: 5px 3px 5px red;
   font-size:4rem;
`;

const Size = styled.h3`
   font-size:3rem;
`;


export const StarInfo = (props) => {
         
       return (  
         <FlexBox>
             <Color>{props.name}</Color>
             <Size>Gender: {props.gender}</Size>
             <Size>Eye Color: {props.eyes}</Size>
             <Size>{props.movie}</Size>
         </FlexBox>

         
       )

}

export default StarInfo;