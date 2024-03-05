// import { TextField } from "@mui/material";
// import React, { useEffect, useState } from "react";

// const FirstApi = () =>{

//     const [details, setDetails] = useState([]);
//     const [searching, setSearching] = useState('');
//     // useEffect(()=>{
//     //     fetch('https://jsonplaceholder.typicode.com/todos')
//     //     .then(response => response.json())
//     //     .then(result => setDetails(result));
//     // }, [])

//     useEffect(()=>{
//         const finalResult = async() =>{
//             try{
//                 const demo = await fetch('https://jsonplaceholder.typicode.com/todos')
//                 const result = await demo.json()
//                 setDetails(result)
//             }
//             catch(error){
//                 console.log("if incase any error, let me show the error notifications")
//             }
//         }
//         const debounce = setTimeout(()=>{finalResult()}, 500 )
//         // finalResult()
//     }, [])
//     // console.log(details);

//     const filterChnaged = details.filter((item, i)=> item.title.toLowerCase().includes(searching.toLowerCase()));

//     const handleChanged = (e) =>{
//         setSearching(e.target.value)
//     }
//     console.log("filterValue", filterChnaged)

//     return (
//         <>
//             {details.length > 0  && <>
//             <TextField type = "text" value={searching} onChange={handleChanged} />
//                 {filterChnaged?.map((item, index) => item.completed === true &&  <>
//                     <p>{item?.title}</p>
//                 </>)}
//             </>}
//         </>
//     )
// }

// export default FirstApi

// import { TextField } from '@mui/material';
// import React, { useEffect, useState } from 'react'

// const FirstApi = () => {
//     const [data, setData] = useState([]);
//     const [searchValue, setSearchValue] = useState('')

//     // normal data fetching
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(resposne => resposne.json())
//         .then(result => setData(result))
//     }, []);
//     console.log(data)

//     // async operations

//     useEffect(()=>{
//         const fetchingData = async() =>{
//             try{
//                 const finalFetchingData = await fetch('https://jsonplaceholder.typicode.com/todos');
//                 const getResult = await finalFetchingData.json();
//                 setData(getResult);
//             }
//             catch(error){
//                 console.log("something error", error)
//             }
//         }
//         //debouncing
//         const debounce = setTimeout(()=>{fetchingData()}, 1000)
//     })

//     const filterSearched = data.filter((item)=> item.title.toLowerCase().includes(searchValue.toLowerCase()))

//     const handleSearched = (e)=>{
//         setSearchValue(e.target.value);
//     }
//   return (
//     <>
//         {data.length > 0 &&
//             <>
//             <TextField type = "text" value={searchValue} onChange={handleSearched} />
//                 {filterSearched.map((item, index)=> item.completed === true && <>
//                     <p>{item.title}</p>
//                 </>)}
//             </>
//         }
//     </>
//   )
// }

// export default FirstApi

import React, { useEffect, useState } from 'react';

const FirstApi = () =>{

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(resp => resp.json())
        .then(result => setData(result))
    },[])

    const filterData = data.filter((item, i)=> item.title.toLowerCase().includes(search.toLowerCase()));

    console.log(data);
    const handleChnaged = (e) =>{
        setSearch(e.target.value)
    }

    return(
        <>
            <input type='text' value={search} onChange={handleChnaged} />
            {filterData?.map((item, i)=> <p>{item.title}</p>)}
        </>
    )
}

export default FirstApi;