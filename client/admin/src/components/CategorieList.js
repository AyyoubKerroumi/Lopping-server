import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, TextInput } from 'react-admin';


const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="title" />,
];
const CategorieList = (props) => {
  return (
    <List {...props} filters={postFilters}>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='title'/>
            <TextField source='description'/>
            <EditButton basePath='/' />
            <DeleteButton basePath='/' />
        </Datagrid>
    </List>
  )
}

export default CategorieList