// require('dotenv').config();
const express = require("express")
const router = express.Router()

const { category, subcategory, notation, visit, notation_visit, user, team } = require('../db.js');

const axios = require('axios').default;

router.post('/login', async (req, res) => {
    let { username, password, localst } = req.body
console.log(req.body)
    try {
        
        let userFound= await user.findOne({
            where: {
                username
            }
        })

        if(userFound.dataValues.password === password || localst) {
        
            let justCreated= await user.findOne({
                where: {
                    username //must be unique
                }
            })

            return res.status(202).json(justCreated)

        }

        return res.status(200).json('Incorrect password')

    } catch (error) {
        console.log('users error')        
    }
});

router.post('/create', async (req, res) => {

    let {teamname, username, password,} = req.body //enviando user = {req.body}

    console.log(req.body)

    if(!teamname || !username || !password ) return res.status(200).json('Faltan params')

    try {

        let teamFound= await team.findOne({
            where: {
                teamname,
            }
        });
        let teamId= teamFound.dataValues.id

        let createdUser= await user.create({
            teamId,
            username,
            password,
        });

        return res.status(201).json(createdUser.dataValues)
        
    } catch (error) {
        console.log('users2 error')
    }

});

module.exports= router