require('dotenv').config();
const express = require("express");
const router = express.Router();
const { Op, } = require("../db");

const { category, subcategory, notation, visit, notation_visit } = require('../db.js');

const axios = require('axios').default;

router.get('/all', async(req, res)=> {

    try {

        let askAll = await subcategory.findAll()

        if(askAll) return res.status(201).json(askAll)

    } catch (error) {
        console.log(error)
    }

})

router.post('/define', async (req, res)=> {

    let {names} = req.body
    let resp = []

    let subs= await subcategory.findAll()

    if(names.length && subs.length) return res.status(300).json('subs alreadyFull')

    // console.log('names', names)

    function retProm(names){
        names.map((Nombre,i)=> {resp.push(subcategory.create({
            Nombre,
            // categoryId: 1, //Después cambiar la relación de * ~ *
        }))
        // console.log('Nombre map', Nombre, i)
    })
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
        console.log('error subs')
    }

})

module.exports= router;