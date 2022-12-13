require('dotenv').config();
const express = require("express");
const router = express.Router();
const { Op, } = require("../db");

const { category, subcategory, notation, visit, notation_visit, cat_subcat } = require('../db.js');

const axios = require('axios').default;

router.get('/all', async(req, res) => {
    try {
        let allNotations = await notation.findAll()

        return res.status(200).json(allNotations)        
    } catch (error) {
        console.log(error)
    }
});

router.post('/define', async (req, res) => {

    let { /*Id,*/ Note, Observations, /*Image,*/ visitId, /*catSubcatId,*/ catName, subName, saved } = req.body
    console.log(req.body, typeof catName, typeof subName, catName, subName, req.body.catName, req.body.subName)

    // let {catName, subName} = req.query

    try {
        // Hallar el objeto {} de la categoría indicada *
        let catId = await category.findOne({
            where: {
                Nombre: catName
            }
        });
        // Y hallar el objeto {} de la subcategoría indicada #
        let subId = await subcategory.findOne({
            where: {
                Nombre: subName
            }
        });
        // * Para hallar el id de tal categoría 
        let categoryId = catId.id
        // # Y el id de tal subcategoría, respectivamente
        let subcategoryId = subId.id

        // *# Para dar con el id de esa relación
        let catsubId = await cat_subcat.findOne({
            where: {
                categoryId,
                subcategoryId
            }
        }); //return res.status(200).json(catsubId)

        // console.log(findReps)

        // if(Object.keys(findReps).length) return res.status(200).json('notation row alreadyFull')
        // let relat = await cat_subcat.findByPk(catSubcatId)

        /*relat = {
            "Id": 3,
            "categoryId": 1,
            "subcategoryId": 3
        } */

        // return res.status(200).json(relat.categoryId); 1
        // return res.status(200).json(relat.Id); 3 

        // let subcat = await subcategory.findByPk(relat.subcategoryId)
        // let cat = await category.findByPk(relat.categoryId)

        // Un arreglo para la redevolución de los nombres al front
        let arr = [catName, subName]

        // console.log('catsubId',catsubId/*,'catsubId.dataValues.id',catsubId.dataValues.Id*/)
        // return res.status(201).json(arr)

        // CASO UPDATE
        // if(saved === false){ // Hay que preguntarle si la fila existe, no si saved es false
            // Ahí vamos -> che base de datos, ¿la fila existe? ¿cómo lo digo en lenguaje sequelize?

            // Objeto where estándar
        let where = {
            visitId,
            catSubcatId: catsubId.Id,
        }

        // Se busca si ya existe una notación donde me mandaron a escribirla 
        let findNot = await notation.findOne({
            where,
        })

        // si así es, tocaría hacer un update
        if (findNot){
            let updatedNot = await notation.update({
                saved,
                Note,
                Observations, // y todavía hay más para investigar nutrite de la música sentila de verdad
            }, {
                where,
            })
            let justUpdated = await notation.findOne({
                where
            })
            // y devolver al front el updating
            console.log(justUpdated)
            let rr = {...justUpdated.dataValues, names: arr}
            return res.status(201).json(rr)
        }

        // Si no hay que hacer update, hay que hacer create: la fila aún no existe
        let createdNotation = await notation.create({
            Note, Observations, visitId, catSubcatId: catsubId.Id, saved
        })

        // CASO DELETE PARA FILAS REPETIDAS 
        let findReps = await notation.findAll({
            where: {
                catSubcatId: catsubId.Id,
                visitId,
                saved: true,
            }
        })

        // Che, si encontraste más de 1 elemento donde se repiten el catSubcatId y la visitId, borralos
        if(findReps.length > 1) {
            for(let i=1; i < findReps.length; i++){
                let destroyNots = await notation.destroy({
                    where: {
                        catSubcatId: catsubId.Id,
                        Id: findReps[i].Id,
                        visitId
                    }
                })
            }
        }

        let r = {...createdNotation.dataValues, names: arr}

        return res.status(201).json(r)
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;