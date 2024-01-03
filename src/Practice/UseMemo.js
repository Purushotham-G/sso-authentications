import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [increment, setIncrement] = useState(0);
    const [number, setNumber] = useState(5);
    const fatcorial = useMemo(()=> fact(number), [number])
  return (
    <>
        <p>fact---{fatcorial}</p>
        <p>Count --- {increment}</p>
        <button onClick={()=> setIncrement(increment + 1)}>increment</button>
        <br />
        <p>{number}</p>
        <button onClick={()=> setNumber(number + 1)}>factoriallll</button>
    </>
  )
}

export default UseMemo

const fact = (n) =>{
    let fattt = 1;
    for( var i = n; i>= 1; i--){
        fattt = fattt * i
    }
    console.log(fattt);
    return fattt
}