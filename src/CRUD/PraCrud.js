import React, { useEffect, useState } from "react";
import {EmployeeData} from './EmployeeData'
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";


export const PraCrud = () =>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(EmployeeData);
    }, [])

    const handleEdit = (id)=>{
        const editData= data.filter((item, i)=> item.id === id);
        if(editData){

        }
    }

    const handleDeleted =(id) =>{
        if(id > 0 ){
            if(window.confirm('are you sure is deleted the data')){
                const deletedData = data.filter((item, i)=> item.id !== id);
                    setData(deletedData);
            }
        }
    }
    
    return(
        <>
            <Table>

                <TableHead sx={{flexDirection:"row"}}>
                    <TableCell>Id</TableCell>
                    <TableCell>FirstName</TableCell>
                    <TableCell>LastName</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Action</TableCell>
                </TableHead>
                <TableBody>
                    {data?.map((item, index)=>{
                        return(
                            <TableRow>
                                <TableCell>{index+1}</TableCell>
                                <TableCell>{item.firstName}</TableCell>
                                <TableCell>{item.lastName}</TableCell>
                                <TableCell>{item.age}</TableCell>
                                <TableCell sx={{flexDirection:"row"}}>
                                    <Button sx={{background:"blue", color:"#ffff"}} onClick={()=> handleEdit(item.id)}>Edit</Button>
                                    <Button sx={{background:"red", color:"#ffff"}} onClick={()=> handleDeleted(item.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </>
    )
}