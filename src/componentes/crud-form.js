import React, { useState, useEffect } from 'react';

const VALUE_FORM = {
    nombre : "",
    edad : "",
    id : null
};

export const CRUD_FORM = ({createData, updateData, dataToEdit, setDataToEdit}) =>{
    
    const [form, setForm] = useState(VALUE_FORM);

    useEffect(()=>{
        if(dataToEdit){
            setForm(dataToEdit);
        }else{
            setForm(VALUE_FORM);
        }
    },[dataToEdit]);


    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!form.nombre || !form.edad){
            return alert("Datos incompletos"); 
        }

        if(form.id === null){
            createData(form);
        }else{
            updateData(form);
        }

        setForm(VALUE_FORM);
        setDataToEdit(null);
    }

    return(
        <>
            <h3>Add data</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" >Name:</label>
                <input 
                type="text" 
                name="nombre" 
                id="name" 
                autoComplete="off" 
                placeholder="Add your name" 
                value={form.nombre} 
                onChange={handleChange} />
                <br />
                <label htmlFor="year">Years:</label>
                <input 
                type="number" 
                name="edad" 
                id="year" 
                autoComplete="off" 
                placeholder="add your year" 
                value={form.edad} 
                onChange={handleChange} />
                <br />
                <input type="submit" />
            </form>
        </>
    );
};