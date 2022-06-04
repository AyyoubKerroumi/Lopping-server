import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, ImageField, ImageInput } from 'react-admin';

const CategorieEdit = (props) => {
  return (
    <Edit title='Créer une categorie' {...props}>
        <SimpleForm>
          <TextInput source='title' />
          <TextInput multiline source='description' />
        </SimpleForm>
    </Edit>
  )
}
export default CategorieEdit