import React from 'react';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import CategorieList from './components/CategorieList';
import CategorieCreate from './components/CategorieCreate';
import CategorieEdit from './components/CategorieEdit';
import ImageList from './components/ImageList';
import ImageShow from './components/Imageshow';
import ImageCreate from './components/ImageCreate';

const theme = {
  palette: {
      type: 'dark', // Switching the dark mode on is a single property value change.
  },
};

function App() {
  return (
    <Admin theme={theme} dataProvider={restProvider('http://localhost:3000/api')}>
      <Resource name="categories" list={CategorieList} edit={CategorieEdit} create={CategorieCreate} >
      </Resource>
      <Resource name="images" list={ImageList} show={ImageShow} create={ImageCreate}>

      </Resource>
    </Admin>
  );
}

export default App;
