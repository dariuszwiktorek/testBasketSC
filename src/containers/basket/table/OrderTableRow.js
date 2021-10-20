import React from 'react';
import styled from "styled-components";
import { THEME_COLORS } from '../../../app/styles';
import { Button } from '../../../components/buttons/Button';
import { QuantityInput } from '../../../components/QuantityInput';


const StyledTable = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;


export default function OrderTableRow({
  product,
  id,
  unitPrice,
  quantity,
  pricePrefix,
  onUpdate,
  onDelete,
}) {
  return (
    <StyledTable>
        <h2>Review Your Order</h2>
        <QuantityInput initValue={quantity} onChange={(v)=>onUpdate(id, v)}/>
        <Button color={THEME_COLORS.red} onClick={() => { onDelete(id) }}>Delete</Button>
    </StyledTable>
  );
}

