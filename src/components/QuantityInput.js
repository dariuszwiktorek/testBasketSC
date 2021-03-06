import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { THEME_COLORS } from "../app/styles";
import { Button } from "./buttons/Button";

const Container = styled.div`
  flex: 1 1 auto;
`;

const StyledInput = styled.input`
  width: 30px;
  text-align: center;
  margin-right: 10px;
  height: 20px;
`;

//TODO:Refactor this one
export function QuantityInput({onChange, initValue, disable}) {

  const validationTimeout = 5; // .5 of the second in 10 steaps 
  const [value, SetValue] = useState(initValue);
  const [validateCountdown, SetvalidateCountdown] = useState(0);

  const onTextInputChange = (newValue) => {
    
    SetvalidateCountdown(validationTimeout);

    if (newValue === "") {
      SetValue("");
      return;
    }

    let floatValue = parseFloat(newValue);

    if (!isNaN(floatValue)) {
      SetValue(floatValue);
    }
  }

  const onButton = (v) => {
    SetvalidateCountdown(validationTimeout);
    let floatValue = parseFloat(value);
    if (!isNaN(floatValue)) {
      const newValue = floatValue + v;
      if (newValue > 0) {
        SetValue((floatValue + v).toFixed(0));
      }
    } else {
      SetValue(1);
    }
  }

  const validateAndDispatch = () => {
    let floatValue = parseFloat(value);
    let validated;
    if (isNaN(floatValue) || floatValue < 1) {
      validated = 1;
    } else if (floatValue > 10) {
      validated = 10;
    }else{
      validated = floatValue;
    }

    SetValue(validated);
    if(onChange){
      onChange(validated);
    }
  }

  useEffect(() => {
    if (validateCountdown <= 0) {
      validateAndDispatch()
      return;
    }

    const intervalId = setInterval(() => {
      SetvalidateCountdown(validateCountdown - 1);
    }, 100);

    return () => clearInterval(intervalId);

  }, [validateCountdown]);


  return (
    <Container>
      <StyledInput type="text" value={value} onChange={(e) => { onTextInputChange(e.target.value) }} />
      <Button disable={value<=1 || disable}color={THEME_COLORS.orange} onClick={() => { onButton(-1) }} style={{margin: 0}}>
        -
      </Button>
      <Button disable={disable} color={THEME_COLORS.green} onClick={() => { onButton(1) }} style={{marginLeft: 4}}>
        +
      </Button>
    </Container>
  );

}