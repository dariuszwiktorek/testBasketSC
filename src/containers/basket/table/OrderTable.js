import React from 'react';
import styled from "styled-components";
import { THEME_COLORS } from '../../../app/styles';
import OrderTableRow, {ColumnTitles} from "./OrderTableRow";


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

export default function OrderTable({products, pricePrefix, onUpdate, onDelete, disable}) {
  return (
    <StyledTable>
        <TableHeader>Review Your Order</TableHeader>
        <ColumnTitles />
        {
          Object.entries(products).map(([key, item]) => 
            <OrderTableRow 
              key={key}
              product={item.name} 
              id={key}
              unitPrice={item.unitPrice}
              quantity={item.quantity}
              cost={item.cost}
              pricePrefix={pricePrefix}
              onUpdate={onUpdate}
              onDelete={onDelete}
              disable={disable}    
            />
          )
        }
    </StyledTable>
  );
}