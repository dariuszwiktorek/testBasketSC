import React from 'react';
import styled from 'styled-components';


const ButtonContainer = styled.button`
  flex: 1;
  font-size: ${({size}) => size==='large'? 1.6 : 1}rem;
  font-weight: 600;
  background: ${({color}) => color};
  color: white;
  border-radius: ${({size}) => size==='large'? 40 : 4}px;
  padding: ${({size}) => size==='large'? '20px 40px' : '5px'};
  border: none;
  margin: 10px;
  min-width: 30px;
  max-width: 220px;
`;

//common button with potential to add an icon
export function Button(props) {
 return (
   <ButtonContainer {...props}>
     {props.label}
   </ButtonContainer>
 )
}

Button.SIZE = {
  regular: 'regular',
  large: 'large',
}