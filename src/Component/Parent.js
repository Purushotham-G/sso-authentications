import React, { useState } from 'react'
import { Child } from './Child'

export const Parent = () => {
    const [child, setChild] = useState('hello world parent');
    function changesMessage(msg){
        setChild(msg)
    }
  return (
    <>
    <p>jdfkvgkbjh</p>
    <p>{child}</p>
    <Child msg="hello child" changesMessage={changesMessage} />
        
    </>
  )
}
