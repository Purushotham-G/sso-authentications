// // import React from 'react'

// // export const Child = ({changesMessage, msg}) => {
// //     // const msg1= "testing the child component"
// //   return (
// //     <>
// //         <p>{msg}</p>
// //         {/* <p>{changesMessage}</p> */}
// //         <button onClick={()=> changesMessage("child is success")}>change message</button>
// //         {/* <p>{props?.child(msg1)}</p> */}
// //     </>
// //   )
// // }

// import React from "react";

// export const Child = ({msg, handleChange}) =>{
//   return (
//     <>
//       <p>Hello , Im child components</p>
//       {/* <p>{msg}</p> */}
//       <p>{handleChange}</p>
//       <button onClick={()=>handleChange("msg chsnged or not...?")}>submit</button>
//     </>
//   )
// }

// // export default Child;

import React from 'react'

export const Child = ({changesStatus}) => {
  return (
    <>
      <div>Child</div>
      <button onClick={()=>changesStatus("hello , i am from clid components")}>submit</button>
    </>
  )
}
