import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { THEME_COLORS } from '../../app/styles';
import { Button } from '../../components/buttons/Button';
import { deleteProduct, selectBasket, updateQuantity, buyNow } from './basketSlice';
import OrderSummary from './OrderSummary';
import OrderTable from "./table/OrderTable";


const BasketHeader = styled.h1`
  flex: 1;
  font-weight: 350;
`;

const Divider = styled.hr`
  flex: 1;
  border-top: 1px solid ${THEME_COLORS.lightGrey};
  width: 100%;
  margin 20px 0;
`;

const StyledBasket = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
  max-width: 800px;
  margin: 40px auto;
`;

export default function Basket() {

  const basketData = useSelector(selectBasket);
  const dispatch = useDispatch();

  if (!basketData || !basketData.products)
    return null;

  const {pricePrefix, subtotal, vat, total} = basketData
  console.log('basketItems',basketData);
  return (
    <StyledBasket>
        <BasketHeader>Review Your Order & Complete Checkout</BasketHeader>
        <Divider />
        <OrderTable
          products={basketData.products}
          pricePrefix={pricePrefix}
          onUpdate={(uid, value) => dispatch(updateQuantity({ uid, value })) }
          onDelete={(uid) => dispatch(deleteProduct({ uid })) }
        />
        <Divider />
        <OrderSummary label='Subtotal' amount={`${pricePrefix}${subtotal.toFixed(2)}`}/>
        <OrderSummary label='VAT @ 20%' amount={`${pricePrefix}${vat.toFixed(2)}`}/>
        <Divider />
        <OrderSummary label='Total' amount={`${pricePrefix}${total.toFixed(2)}`} total/>
        <Divider />
        <Button label='Buy Now' onClick={() => { dispatch(buyNow())}} size={Button.SIZE.large} color={THEME_COLORS.seledin} style={{alignSelf: 'end'}}/>
    </StyledBasket>
  );
}