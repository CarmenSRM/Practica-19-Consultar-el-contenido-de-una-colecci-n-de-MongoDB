const express = require ('express'); //Se inyectan las dependencias de express.
const router = express.Router(); //Se inyecta el router. 
const mongoose = require ('mongoose'); //Se inyectan las dependencias de mongoose. 
let User = require ('../models/users'); //Se importan los datos del users.js de /models.

//Se define la ruta en la que se verán reflejados los datos de la BD
router.get('/gente', async (req, res) => {
    const Users = await User.find({});
    res.json(Users);
});

module.exports = router; //Se exporta el router.  