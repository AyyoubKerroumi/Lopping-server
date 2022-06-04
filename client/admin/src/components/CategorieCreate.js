import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, ImageField, ImageInput } from 'react-admin';

const PostCreate = (props) => {
  return (
    <Create title='Créer une categorie' {...props}>
        <SimpleForm>
          <TextInput source='title' />
          <TextInput multiline source='description' />
        </SimpleForm>
    </Create>
  )
}

export default PostCreate;