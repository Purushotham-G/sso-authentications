import React from 'react'

export const Child = ({changesMessage, msg}) => {
    // const msg1= "testing the child component"
  return (
    <>
        <p>{msg}</p>
        {/* <p>{changesMessage}</p> */}
        <button onClick={()=> changesMessage("child is success")}>change message</button>
        {/* <p>{props?.child(msg1)}</p> */}
    </>
  )
}
