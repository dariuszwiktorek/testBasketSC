import React from 'react';
import styled from "styled-components";
import { THEME_COLORS } from '../../../app/styles';
import OrderTableRow from "./OrderTableRow";


const StyledTable = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: 2px solid ${THEME_COLORS.lightGrey}; 
  border-radius: 4px;
`;
  
const TableHeader = styled.h3`
  flex: 1;
  background: ${THEME_COLORS.lightGrey};
  text-align: left;
  padding: 10px;
  font-weight: 500;
  margin-top: 0;
`;

export default function OrderTable({products, pricePrefix, onUpdate, onDelete}) {
  console.log('Object.entries(products) ==>',Object.entries(products));
  return (
    <StyledTable>
        <TableHeader>Review Your Order</TableHeader>
        {
          Object.entries(products).map(([key, item]) => 
            <OrderTableRow 
              product={item.product} 
              id={key}
              unitPrice={item.unitPrice}
              quantity={item.quantity}
              pricePrefix={pricePrefix}
              onUpdate={onUpdate}
              onDelete={onDelete}     
            />
          )
        }
    </StyledTable>
  );
}