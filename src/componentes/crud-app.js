import React,{ useState } from 'react/cjs/react.development';
import { CRUD_FORM } from './crud-form';
import { WATCH_DATA } from './crud-tables';

const BBDD = [
    {
        id:1,
        nombre: "Hengerbeth Mejias",
        edad: 18
    },
    {
        id:2,
        nombre: "Ángel Granadino",
        edad: 18
    },
    {
        id:3,
        nombre: "German Aguilera",
        edad: 24
    },
    {
        id:4,
        nombre: "Sofia Rodriguez",
        edad: 15
    },
    {
        id:5,
        nombre: "José Aguilera",
        edad: 18
    }
];

export const CRUD_APP = () =>{

    const [db, setDb] = useState(BBDD);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) =>{
        data.id = Date.now();
        setDb([...db,data]);
    };

    const updateData = (data) =>{
        let newData = db.map((el) => (el.id === data.id ? data : el));

        setDb(newData);
    };

    const deleteData = (data) =>{
        let isDelete = window.confirm(`Seguro que quieres eliminar a ${data.nombre}`);

        if(isDelete){
            let newData = db.filter((el)=>(el.id !== data.id));

            setDb(newData);
        }else{
           return alert("Se ha cancelado la eliminacion");
        };
    };


    return(
        <>
            <h2>Formulario con React</h2>
            <CRUD_FORM 
            createData={createData}
            updateData={updateData} 
            dataToEdit={dataToEdit} 
            setDataToEdit={setDataToEdit} />
            <WATCH_DATA 
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData} />
        </>
    );
}