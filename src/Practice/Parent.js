// import React, { useState } from "react";
// import Child from "./Child";

// const Parent = () =>{
//     const [data, setData] = useState("hello present data");

//     const changeFunction = (msgg) =>{
//         setData(msgg)
//     }

//     return (
//         <>
//             {/* <p>hello parent</p> */}
//             <p>{data}</p>
//             <Child msg = "hello Child ?. How are you ...?" changeFunctionssss={changeFunction} />
//         </>
//     )
// }

// export default Parent

import React, { useState } from "react";
import Child from "./Child";

const Parent = () =>{
    const [childData, setChildData] = useState("hello son");
    const handleChanged = (msg) =>{
        setChildData(msg)
    }
    return(
        <> 
        <p>{childData}</p>
            <Child msg="Hello purushotham" changedValue={handleChanged} />
        </>
    )
}

export default Parent;