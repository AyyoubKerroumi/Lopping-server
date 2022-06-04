import React from 'react';
import { List, Datagrid, TextField,ImageField,EditButton,DeleteButton,ReferenceField,FunctionField } from 'react-admin';
import ListAvatar from './ListAvatar.js'
import { withStyles } from "material-ui/styles";
import '../img.css';

  const ImageList = ({ classes, ...props }) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <ImageField source="file" className="avatar"/>
                <TextField source="title" />
                <TextField source="description" />
            </Datagrid>
        </List>
    );
};

  export default ImageList;