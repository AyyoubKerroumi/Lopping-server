const express = require('express');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded( {extended: true} ))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/Images', express.static('Images'));
const categorieRoutes = require('./routes/categorie-route');
const imageRoutes = require('./routes/image-route');
const gameRoutes = require('./routes/game-route');
const indexRoutes = require('./routes/index');

app.use('/api/categories',categorieRoutes);
app.use('/api/images',imageRoutes)
app.use('/api/game',gameRoutes);
app.use('/',indexRoutes);
app.listen(port,()=> console.log('listening on port '+port));

