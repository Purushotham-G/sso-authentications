import { TextField } from '@mui/material';
import React, { useEffect, useState, memo, useMemo } from 'react'

const Demo2 = () => {
    const [details, setDetails] = useState([]);
    const [searchValue, setSeatchValue] =  useState('');

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const dataFetching = await fetch('https://jsonplaceholder.typicode.com/todos')
                const finalResult = await dataFetching.json()
                setDetails(finalResult)    
            }
            catch(error){
                console.log(error, "Something error please check it")
            }
        }
        // console.log('i fire once');

        // const getData = setTimeout(()=> fetchData() ,2000)
        fetchData()
    }, [])
    console.log(details)

    const filterSearch = details.filter((item, index)=> item.title.toLowerCase().includes(searchValue.toLowerCase()));

    const handleChanged = (e)=>{
        setSeatchValue(e.target.value);
    }
  return (
    <>
    {details.length > 0 && <>
    <TextField type='text' value={searchValue} onChange={handleChanged} placeholder='search title' />
        {filterSearch.map((item, index)=> item.completed === true && <>
            <p>{item.id}</p>
            <p>{item.title}</p>
            
        </> )}
        </> }
    </>
  )
}

export default Demo2