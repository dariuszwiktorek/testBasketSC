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

const Cell = styled.div`
  flex: 1 1 auto;
  min-height: 30px;
  min-width: 30px;
`;

const ProductNameCell = styled(Cell)`
  flex: 0 1 180px;
  text-align: left;
  padding: 0 20px;
`;
const UnitPriceCell = styled(Cell)`
  flex 0 1 80px;
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
  disable
}) {
  
  return (
    <StyledRow>
        <ProductNameCell>{product}</ProductNameCell>
        <UnitPriceCell>{pricePrefix+unitPrice}</UnitPriceCell>
        <QuantityInput disable={disable} initValue={quantity} onChange={(v)=>onUpdate(id, v)}/>
        <UnitPriceCell>{pricePrefix+cost}</UnitPriceCell>
        <Button disable={disable} color={THEME_COLORS.red} onClick={() => { onDelete(id) }}>Delete</Button>
    </StyledRow>
  );
}

