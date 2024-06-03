const express = require("express");
const router = express.Router();
const { User } = require("../database/db");
const {createUser} = require("../type");
const {validateInput} = require('../validateInput');


// signup route

router.post('/signup',validateInput(createUser),async(req, res)=>{

});

router.post('/signin',validateInput(createUser),async(req, res)=>{

});

router.post('/',validateInput(createUser),async(req, res)=>{

});

