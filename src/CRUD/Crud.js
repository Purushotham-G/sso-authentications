import React, { useEffect, useState } from 'react'
import { EmployeeData } from './EmployeeData';
import { Box, Button, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';

export const Crud = () => {

    const [data, setData] = useState([]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isUpadte, setIsUpadted] = useState(false);
    const [age, setAge] = useState(0);
    const [id, setId] = useState(0);

    useEffect(()=>{
        setData(EmployeeData)
    }, []);

    const handleEdit = (id) =>{
        const editData = data.filter((item , index)=> item.id === id);
        if (editData !== undefined){
            setIsUpadted(true);
            setId(id);
            setFirstName(editData[0].firstName);
            setLastName(editData[0].lastName);
            setAge(editData[0].age);
        }
    }
    const handleDeleted = (id) =>{
        if(id > 0){
            if(window.confirm('are you sure to deleted ...?')){
                const deletedData = data.filter(item => item.id !== id);
                setData(deletedData);
            }
        }
    }
    const handleSave = (e) =>{
        e.preventDefault();
        const settedData = [...data];
        const newEmpl = {
            id: EmployeeData.length+1,
            firstName:firstName,
            lastName: lastName,
            age: age
        }
        settedData.push(newEmpl);
        setData(settedData);
        handleClear();
    }

    const handleUpadte = () =>{
        const index = data.map((item, i)=>{
            return item.id
        }).indexOf(id)
        const update = [...data];
        update[index].firstName = firstName;
        update[index].lastName = lastName;
        update[index].age = age;
        setData(update);
        handleClear();
    }

    const handleClear = () =>{
        setFirstName('');
        setLastName('');
        setAge('');
    }

  return (
    <>
    <>
        <Box sx={{flexDirection:'row', gap:2}}>
            <Stack sx={{flexDirection:"column"}}>
            <TextField sx={{width:350}} type='text' value={firstName} onChange={(e)=> setFirstName(e.target.value)} placeholder='enter first Name' />
            <TextField sx={{width:350}} type='text' value={lastName} onChange={(e)=> setLastName(e.target.value)} placeholder='enter last name' />
            <TextField sx={{width:350}} type='text' value={age} onChange={(e)=> setAge(e.target.value)} placeholder='enter the age' />
            </Stack>
            <Stack flexDirection="row" sx={{}}>
                {
                    ! isUpadte ? <Button onClick={(e)=>handleSave(e)}>Save</Button> :
                    <Button onClick={handleUpadte}>Update</Button>
                }    
                <Button onClick={handleClear}>Clear</Button> 
            </Stack>
        </Box>
    </>
    <Table>
        <TableHead>
            <TableRow>
                {/* <TableCell>Sl no.</TableCell> */}
                <TableCell sx={{fontWeight:"600"}}>id</TableCell>
                <TableCell sx={{fontWeight:"600"}}>FirstName</TableCell>
                <TableCell sx={{fontWeight:"600"}}>LastName</TableCell>
                <TableCell sx={{fontWeight:"600"}}>Age</TableCell>
                <TableCell sx={{fontWeight:"600"}}>Action</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map((item, index)=>{
                return(
                    <TableRow>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{item.firstName}</TableCell>
                        <TableCell>{item.lastName}</TableCell>
                        <TableCell>{item.age}</TableCell>
                        <TableCell> 
                            <Button onClick={()=>handleEdit(item.id)} sx={{background:"blue", color:"#ffff"}}>Edit</Button>
                            <Button onClick={()=> handleDeleted(item.id)} sx={{background:"red", color:"#ffff"}}>Delete</Button>
                        </TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    </Table>
    </>
  )
}
