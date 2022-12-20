require('dotenv').config();
const express = require("express");
const router = express.Router();
const { Op, } = require("../db");

const { category, subcategory, notation, visit, notation_visit } = require('../db.js');

const axios = require('axios').default;

router.get('/all', async (req,res)=>{

    try {
        let all= await category.findAll()

        if(all) return res.status(201).json(all)

    } catch (error) {
        console.log(error) 
    }

})

router.post('/define', async (req,res)=>{

    let {names} = req.body // [] 

    let resp =[]
    
    let cats= await category.findAll()

    if(cats.length) return res.status(300).json('cats alreadyFull')

    // console.log('names', names)
    function retProm(names){
        names.map((Nombre,i)=> resp.push(category.create({
            Nombre
        })))
        return resp
    }

    try {
        
        if(names && names.length) {
            resp= retProm(names)
            Promise.all(resp).then((r)=>{
                let a= []
                r.map((u,i)=>{
                    a.push(u.Nombre)
                })
                return res.status(201).json(a)
            })
        }

    } catch (error) {
        console.log('error categories') 
    }

})

module.exports = router;