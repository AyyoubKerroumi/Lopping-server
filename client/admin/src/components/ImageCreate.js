import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import {Create,SimpleForm,TextInput,ImageInput,required,ReferenceInput,SelectInput,ImageField} from 'react-admin';
import '../img.css';

const ImageCreate = (props) => {
  const navigate = useNavigate();
  const [file,setFile] = useState({});
  const validateFirstName = [required()];
  const test = (data)=> {
    let formdata = new FormData();
    console.log(file);
    formdata.append("image",file);
    formdata.append("title",data.title);
    formdata.append("description",data.description);
    formdata.append("categorieId",data.categorieId);
    fetch("http://localhost:5000/api/images/",{
      method: "POST",
      body: formdata
    })
    .then((res)=>res.json())
    .then((resBody)=>{
      console.log(resBody);
      alert("Your image is being uploaded!");
      navigate('http://localhost:3000/api/images?title=test&title=test#/images')
      
    })
  };
  const fileChange = (e)=>{
    setFile(e.target.files[0]);
  }
  return (
    <Create title='Créer une categorie' {...props}>
    <SimpleForm enctype="multipart/form-data" onSubmit={test}>
        <ReferenceInput label="Post" source="categorieId" reference="categories">
          <SelectInput optionText="title" validate={validateFirstName} />
        </ReferenceInput>
        <TextInput multiline source='title' />
        <TextInput multiline source='description' />
        <input type="file" name="image" onChange={(e)=>setFile(e.target.files[0])}/>
    </SimpleForm>
</Create>
  )
}

export default ImageCreate