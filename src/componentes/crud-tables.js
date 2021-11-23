import React from 'react';
import { CRUD_ROWTABLES } from './crud-rowtables';


export const WATCH_DATA = ({data, setDataToEdit, deleteData}) =>{

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Years</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map(el => <CRUD_ROWTABLES key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData} />)}
            </tbody>
        </table>
        </>
    );

};