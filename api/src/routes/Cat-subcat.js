require('dotenv').config();
const express = require("express");
const router = express.Router();
const { Op, } = require("../db");

const { category, subcategory, notation, visit, notation_visit, cat_subcat } = require('../db.js');

const axios = require('axios').default;

router.post('/define', async (req, res)=>{

    let {objectsInArray} = req.body

    let relations = await cat_subcat.findAll()
    if(relations.length) return res.status(200).json(relations)

    try { 

        let cats= await category.findAll()
        let subcats= await subcategory.findAll()

        if(cats && subcats && objectsInArray.length){
            if(!cats.length ){
                return res.status(201).json('categorías vacío')
            }
            if(!subcats.length){
                return res.status(201).json('subcategorías vacío')
            }
            
            for(let i= 0; i< objectsInArray.length; i++){
                let Nombre= objectsInArray[i].name
                let catAsked= await category.findOne({
                    where: {
                        Nombre,
                    }
                })
                // console.log(catAsked)
                let categoryId= catAsked.dataValues.id;
                for (let loop in objectsInArray[i]){
                    if(loop!=='name'){

                        let subAsked= await subcategory.findOne({
                            where: {
                                Nombre: loop
                            }
                        })
                        // console.log('subAsked', subAsked, 'loop', loop)
                        let subcategoryId= subAsked.dataValues.id;
                        let catsubcatRel= await cat_subcat.create({
                            categoryId,
                            subcategoryId,
                        })
                    }
                }
            }
            let all= await cat_subcat.findAll()
            return res.status(200).json(all) // Redux espera un true
        }

        return res.status(201).json('algo salió mal')

    } catch (error) {
        console.log(error)
    }

});

module.exports= router;