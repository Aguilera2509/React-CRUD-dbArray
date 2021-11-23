import React from 'react';

export const CRUD_ROWTABLES = ({el, setDataToEdit, deleteData}) =>{

    return(
        <>
            <tr>
                <td>{el.nombre}</td>
                <td>{el.edad}</td>
                <td>
                    <button onClick={()=>{
                        setDataToEdit(el);
                    }} >Editar</button>
                    <button onClick={()=>{
                        deleteData(el);
                    }} >Eliminar</button>
                </td>
            </tr>
        </>
    );
}