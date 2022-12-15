// require('dotenv').config();
const express = require("express")
const router = express.Router()

const { category, subcategory, notation, visit, notation_visit, cat_subcat } = require('../db.js');

const axios = require('axios').default;

router.get('/', async (req, res) => {

    let {id} = req.query

    console.log(id)
    try {
        let visitFound = await visit.findByPk(id) // {}
        let allNotationByID = await notation.findAll({
            where: {
                visitId: id
            }
        })  // []

        let catName, subName;
        let notations = [];
        for (i= 0 ; i < allNotationByID.length; i++) {
            let relation = await cat_subcat.findByPk(allNotationByID[i].catSubcatId) // {}
            let categoryFound = await category.findByPk(relation.categoryId) // {}
            let subcategoryFound = await subcategory.findByPk(relation.subcategoryId) // {}
            catName = categoryFound.Nombre;
            subName = subcategoryFound.Nombre;
            notations[i] = {...allNotationByID[i].dataValues, catName, subName} 
        }

        if(Object.keys(visitFound).length) {
            let r = {...visitFound.dataValues, notations} //Con posibilidad de cambiar nombre de prop
            return  res.status(202).json(r)
        }

        return res.status(200).json('Visit not found')
    } catch (error) {
        console.log(error)
    }
})

router.get('/all', async (req, res) => {

    let {userId} = req.query

    if(!userId) {
        let reallyAllVisits = await visit.findAll()
        if(reallyAllVisits) return res.status(200).json(reallyAllVisits)
    }

    try {
        let all= await visit.findAll({
            where: {
                userId
            }
        })
        
        if(all) return res.status(200).json(all)     

    } catch (error) {
        console.log(error)
    }
})

router.get('/last', async (req, res)=> {

    try {

        let vis = await visit.findAll()

        if(vis.length) {
            let l= vis.length-1
            let one= vis[l] // {}
            let lastId = await visit.findByPk(l+1)

            // console.log('lastId', lastId, 'one', one)

            if(Object.keys(lastId).length) {
                console.log('tiene length')
                return res.status(202).json(lastId)
            }
            
            return res.status(202).json(one)
        }

        return res.status(202).json('Empty')
        
    } catch (error) {
        console.log(error)
    }
});

router.post('/visitid', async (req, res)=> { //postear una visita y a la vez retornar los datos

    console.log(req.body)
    let {Team, Closed, Opening_date, userId} = req.body

    try {

        if(!Team) return res.status(300).json('Must have a team') //

        let createVisit = await visit.create(req.body)

        return res.status(201).json(createVisit)

    } catch (error) {
        console.log(error)
    }
});

router.put('/closing', async (req, res) => {

    let {Id, userId, Closing_date, Closed} = req.body

    try {
        let where = {
            Id, 
            userId,
        }

        let visitFound = await visit.findOne({
            where
        })

        if(visitFound.Closed) return res.status(200).json([Id, true, visitFound.Closing_date])

        if(visitFound) {
            let c = await visit.update({
                Closed,
                Closing_date,
            }, {
                where
            })
        }

        let verifyBoolean = await visit.findOne({
            where
        })
        let data = []
        if(verifyBoolean.dataValues.Closed) {
            data[0] = verifyBoolean.dataValues.Id
            data[1] = verifyBoolean.dataValues.Closed
            data[2] = verifyBoolean.dataValues.Closing_date
        }

        return res.status(200).json(data)

    } catch (error) {
        console.log(error)
    }

});

module.exports= router