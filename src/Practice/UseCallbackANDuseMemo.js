import React, { useCallback, useMemo, useState } from 'react'

const UseCallbackANDuseMemo = () => {
    const [count, setCount] = useState(0);

    //useCallback
    // const handleChange = useCallback(()=>{
    //     setCount(count+1)    
    // }, [count]);
    const expensiveValue = useMemo(()=>{
        return count *2
    },[count])

  return (
    <>
        <p>{count}</p>
        //useCallback
        {/* <button onClick={handleChange}>increment</button> */}

        <p>useMemo output</p>
        <p>useMemo-----{expensiveValue}</p>
        <button onClick={()=>setCount(count+1)}>useMemo button</button>
    </>
  )
}

export default UseCallbackANDuseMemo
