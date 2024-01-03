import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const FirstApi = () =>{

    const [details, setDetails] = useState([]);
    const [searching, setSearching] = useState('');
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(result => setDetails(result));
    // }, [])

    useEffect(()=>{
        const finalResult = async() =>{
            try{
                const demo = await fetch('https://jsonplaceholder.typicode.com/todos')
                const result = await demo.json()
                setDetails(result)
            }
            catch(error){
                console.log("if incase any error, let me show the error notifications")
            }
        }
        const debounce = setTimeout(()=>{finalResult()}, 500 )
        // finalResult()
    }, [])
    // console.log(details);

    const filterChnaged = details.filter((item, i)=> item.title.toLowerCase().includes(searching.toLowerCase()));

    const handleChanged = (e) =>{
        setSearching(e.target.value)
    }
    console.log("filterValue", filterChnaged)

    return (
        <>
            {details.length > 0  && <>
            <TextField type = "text" value={searching} onChange={handleChanged} />
                {filterChnaged?.map((item, index) => item.completed === true &&  <>
                    <p>{item?.title}</p>
                </>)}
            </>}
        </>
    )
}

export default FirstApi