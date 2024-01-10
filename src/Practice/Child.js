// import React from "react";

// const Child = ({msg, changeFunctionssss}) =>{
//     return (
//         <>
//             <p>Hello child</p>
//             <p>{msg}</p>
//             <button onClick={()=> changeFunctionssss("success data from child to parent")}>submit</button>
//         </>
//     )
// }

// export default Child;

import React from "react";

const Child = ({msg, changedValue}) =>{
    return(
        <>
            <p>{msg}</p>
            <button onClick={()=>changedValue("hello dada, how are you...?")}>exchange value</button>
        </>
    )
}

export default Child;