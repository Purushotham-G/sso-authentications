// import React, { useEffect, useState } from 'react'

// const Demo = () => {

//     const [details, setDetails] = useState([]);
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(response => response.json())
//         .then(result => { setDetails(result)
//             const getData = setTimeout(()=> setDetails(result))
//         })
//         .catch(error => console.log("error message", error))
//     }, [])
//     console.log(details)

//   return (
//     <>
//      {/* {details} */}
//      <p>{details.map((item)=> 
//         <>
//             <p>{item.id}</p>
//         </>
//      )}</p>
//     </>
//   )
// }

// export default Demo

import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './../Css/Demo.css';

const Demo = () => {

    const [details, setDetails] = useState([]);
    const [searchValue, setSeatchValue] = useState('');

    useEffect(()=>{
        const fetchingData = async() =>{
            try{
                const dataFetching = await fetch('https://jsonplaceholder.typicode.com/todos')
                const finalResult = await dataFetching.json()
                setDetails(finalResult)
            }
            catch(error){
                console.log("error", error)
            }

        }

        //debouncing
        const getgata = setTimeout(()=> fetchingData() , 500)
        
    }, [])

    const filterSearch = details.filter((item, i)=> item.title.toLowerCase().includes(searchValue.toLowerCase()));

    const handleChanged = (e) =>{
        setSeatchValue(e.target.value)
    }

    console.log(details)

  return (
    <>
     {/* {details} */}
     <div className='header'>
       <TextField sx={{border:"1px solid red"}} type='text' value={searchValue} onChange={handleChanged} />
     </div>
     
      <p>{filterSearch.map((item)=> item.completed === true &&
        <>
        <p>{item.id}</p>
            <p>{item.title}</p>
        </>
     )}</p>
    </>
  )
}

export default Demo