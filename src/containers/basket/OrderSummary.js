import React from 'react';
import styled from "styled-components";
import { THEME_COLORS } from "../../app/styles";


const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: ${({total}) => {console.log('total',total);return total ? 'black' : 'grey'}};
  font-weight: 600;
  font-size: 1.2rem;
`;

const Item = styled.div`
  flex: 1;
  text-align: ${({align}) => align};
  margin: 10px;
`;

export default function OrderSummary({label, amount, total}) {
  return (
    <Container total={total}>
        <Item align='left'>{label}</Item>
        <Item align='right'>{amount}</Item>
    </Container>
  );
}
