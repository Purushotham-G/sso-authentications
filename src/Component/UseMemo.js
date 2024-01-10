import { Button } from '@mui/material';
import React, { useMemo, useState } from 'react'

export const UseMemo = () => {

    const [increment, setIncrement] = useState(0);
    const [number, setNumber] = useState(5);
    const factorial = useMemo(()=> fact(number), [number])

  return (
    <>
    factorial : {factorial}
        <p>useMemo Hook</p>
        <Button onClick={()=> setIncrement(increment +1)}> Incerment button</Button>
        <br />
        incerement : {increment}
    </>
  ) 
}

const fact = (n) =>{
    let facttt = 1;
    for (var i = n; i>= 1; i-- ){
        facttt = facttt * i;
    }
    console.log("some many times factorial reperates");
    return facttt
}
