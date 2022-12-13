const express = require('express');
const router = express.Router();

const { category, subcategory, notation, visit, notation_visit, cat_subcat, admin } = require('../db.js');

router.get('/all', async(req,res)=>{ // la ruta más inservible de todos los tiempos
    try {
        let allAdmins = await admin.findAll()
        if(allAdmins) return res.status(200).json(allAdmins);
    } catch (error) {
        console.log(error)
    }
});

router.post('/define', async(req,res)=>{

    let {adminname , password} = req.body

    console.log(req.body)

    if( !adminname || !password ) return res.status(200).json('Faltan params')

    try {

        let createdAdmin = await admin.create(req.body)
        if(createdAdmin) return res.status(200).json(createdAdmin)
        
    } catch (error) {
        console.log(error)
    }
});

router.post('/login', async(req,res)=>{

    let {adminname, password, localst} = req.body

    console.log(req.body)

    try {
        
        let adminFound= await admin.findOne({
            where: {
                adminname
            }
        })

        if(adminFound.dataValues.password === password || localst) {
        
            let justCreated= await admin.findOne({
                where: {
                    adminname //must be unique
                }
            })

            return res.status(202).json(justCreated)

        }

        return res.status(200).json('Incorrect password')

    } catch (error) {
        console.log(error)        
    }
});

module.exports= router;