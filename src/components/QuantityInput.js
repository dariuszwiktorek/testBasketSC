import React, { useEffect, useState } from "react";
import { THEME_COLORS } from "../app/styles";
import { Button } from "./buttons/Button";

export function QuantityInput({onChange, initValue}) {

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
    <>
      <input type="text" value={value} onChange={(e) => { onTextInputChange(e.target.value) }} style={{ width: "60px", marginRight: "10px" }}  />
      <Button label='-' color={THEME_COLORS.orange} onClick={() => { onButton(-1) }}/>
      <Button label='+' color={THEME_COLORS.green} onClick={() => { onButton(1) }}/>
    </>
  );

}