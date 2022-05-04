const express = require('express');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true} ))
app.use(express.static(path.join(__dirname, 'public')));
const categorieRoutes = require('./routes/categorie-route');
const imageRoutes = require('./routes/image-route');
const indexRoutes = require('./routes/index');

app.use('/api/categories',categorieRoutes);
app.use('/api/images',imageRoutes)
app.use('/',indexRoutes);
app.listen(port,()=> console.log('listening on port '+port));

