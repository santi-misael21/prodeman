// require('dotenv').config();
const express = require("express");
const router = express.Router()

const { category, subcategory, notation, visit, notation_visit, user, team } = require('../db.js');

const axios = require('axios').default;

router.post('/define', async (req, res) => {

    let {teamname} = req.body

    let allTeams = await team.findAll()

    if(allTeams.length && teamname.length) return res.status(300).json('teams alreadyFull')

    try {

        let createdTeams= []
        if(teamname.length){
            for (let i=0; i<teamname.length; i++){
                createdTeams= await team.create({
                    teamname: teamname[i]
                })
            }
        };
        
        return res.status(201).json(createdTeams)
        
    } catch (error) {
        console.log(error)
    }

});

router.get('/all', async(req, res) => {

    try {

        let foundTeams = await team.findAll()

        if(foundTeams) return res.status(200).json(foundTeams)
        
    } catch (error) {
        console.log(error)
    }

})

module.exports= router