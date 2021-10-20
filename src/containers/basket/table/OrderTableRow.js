import React from 'react';
import styled from "styled-components";
import { THEME_COLORS } from '../../../app/styles';
import { Button } from '../../../components/buttons/Button';
import { QuantityInput } from '../../../components/QuantityInput';


const StyledRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  row-gap: 40px;
  align-items: center;
  font-weight: ${({bold})=> bold? 600 : 400}
`;

const ProductNameCell = styled.div`
  flex: 0 1 180px;
  text-align: left;
  padding: 0 20px;
`;
const UnitPriceCell = styled.div`
  flex 0 1 80px;
`;

const Cell = styled.div`
  flex: 1 1 auto;
`;


export function ColumnTitles(){
  return (
    <StyledRow bold>
      <ProductNameCell>{'Product'}</ProductNameCell>
      <UnitPriceCell>{'Price'}</UnitPriceCell>
      <Cell>{'Quantity'}</Cell>
      <UnitPriceCell>{'Cost'}</UnitPriceCell>
      <Cell>{''}</Cell>
    </StyledRow>
  );
};

export default function OrderTableRow({
  product,
  id,
  unitPrice,
  quantity,
  cost,
  pricePrefix,
  onUpdate,
  onDelete,
}) {
  console.log('OrderTableRow: ',{product,
    id,
    unitPrice,
    quantity,
    pricePrefix,
    onUpdate,
    onDelete,});
  return (
    <StyledRow>
        <ProductNameCell>{product}</ProductNameCell>
        <UnitPriceCell>{pricePrefix+unitPrice}</UnitPriceCell>
        <QuantityInput initValue={quantity} onChange={(v)=>onUpdate(id, v)}/>
        <UnitPriceCell>{pricePrefix+cost}</UnitPriceCell>
        <Button label='Delete' color={THEME_COLORS.red} onClick={() => { onDelete(id) }}>Delete</Button>
    </StyledRow>
  );
}

