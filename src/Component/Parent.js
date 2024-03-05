// // import React, { useState } from 'react'
// // import { Child } from './Child'

// // export const Parent = () => {
// //     const [child, setChild] = useState('hello world parent');
// //     function changesMessage(msg){
// //         setChild(msg)
// //     }
// //   return (
// //     <>
// //     <p>jdfkvgkbjh</p>
// //     <p>{child}</p>
// //     <Child msg="hello child" changesMessage={changesMessage} />
                
// //     </>
// //   )
// // }

// import React, { useState } from "react";
// import { Child } from './Child'

// export const Parent = () =>{

//   const [child, setChild] = useState('hello world parent');

//   const handleState = ({msg}) =>{
//     setChild(msg);
//   }
//   return(
//     <>
//         <p>Hello , Im your father child</p>
//         <p>{child}</p>
//         <Child handleChange={handleState} />
//     </>
//   )
// }

// // export default Parent;

import React, { useState } from 'react'
import {Child } from './Child';

export const Parent = () => {
  const [child, setChild] = useState("hello world, i am your parent components")

  const handleChanged = (msggg) =>{
    setChild(msggg)
  }
  return (
    <>
      <p>{child}</p>
      <p>{handleChanged}</p>
      <Child changesStatus={handleChanged} />
    </>
  )
}

