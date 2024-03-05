import { Box, Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { EmployeeData } from './EmployeeData';

export const PraCrud = () => {
    const [data, setData] = useState([]);

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[isUpadte, setIsUpdate] = useState(false);
    const[age, setAge] = useState();
    const[id, SetId] = useState();


    useEffect(()=>{
        setData(EmployeeData);
    },[])

    const handleDeleted = (id) =>{
        if(id > 0){
            if(window.confirm('are you sure the deleted the data')){
                const deletedData = data.filter((item, i)=> item.id !== id);
                setData(deletedData);
            }
        }
    }

    const handleEdit = (id) =>{
        const editData = data.filter((item,i)=> item.id === id);
        if(editData){
            setIsUpdate(true);
            SetId(id);
            setFirstName(editData[0].firstName);
            setLastName(editData[0].lastName);
            setAge(editData[0].age);
        }
    }

    const handleUpadte = () =>{
        const index = data.map((item, i)=> item.id).indexOf(id);
        const update = [...data];
        console.log(index);
        update[index].firstName=firstName;
        update[index].lastName= lastName;
        update[index].age=age;
        setData(update);
        setIsUpdate(true)
        handleClear();
    }

    const handleClear = () =>{
        setFirstName('');
        setLastName('');
        setAge('');
    }

    const handleSave = (e) =>{
        e.preventDefault();
        const saveData = [...data];
        const newwData = {
            id : EmployeeData.length + 1,
            firstName: firstName,
            lastName: lastName,
            age: age,
        }
        saveData.push(newwData);
        setData(saveData);
        handleClear();

    }

  return (
    <>
    <>
        <Box>
            <Stack sx={{width:"300px"}}>
                <TextField type='text' value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
            </Stack>
            <Stack sx={{width:"300px"}}>
                <TextField type='text' value={lastName} onChange={(e)=> setLastName(e.target.value)} />
            </Stack>
            <Stack sx={{width:"300px"}}>
                <TextField type='text' value={age} onChange={(e)=> setAge(e.target.value)} />
            </Stack>
            <Stack sx={{flexDirection:"row"}}>
                {!isUpadte? 
                <Button onClick={handleSave}>Save</Button>: <Button onClick={handleUpadte}>Update</Button>}
                <Button onClick={handleClear}>Clear</Button>
            </Stack>
        </Box>
    </>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableCell>Sl No.</TableCell>
                    <TableCell>FirstName</TableCell>
                    <TableCell>LastName</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Action</TableCell>
                </TableHead>
                <TableBody>
                    {data?.map((item, index)=>{
                        return (
                            <TableRow>
                                <TableCell>{index +1}</TableCell>
                                <TableCell>{item.firstName}</TableCell>
                                <TableCell>{item.lastName}</TableCell>
                                <TableCell>{item.age}</TableCell>
                                <TableCell>
                                    <Stack sx={{flexDirection:"row", gap:1}}>
                                    <Button sx={{backgroundColor:"blue", color:"#ffff"}} onClick={()=>handleEdit(item.id)}>Edit</Button>
                                    <Button sx={{backgroundColor:"red", color:"#ffff"}} onClick={()=>handleDeleted(item.id)}>Deleted</Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </>
  )
}
