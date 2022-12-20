const express = require('express');
const router = express.Router();

const axios = require('axios').default;
const { category, subcategory, notation, visit, notation_visit, cat_subcat, admin, image } = require('../db.js');
const { getCatSubcat } = require('../utils/getCatSubcat.js');
const { getImages } = require('../utils/getImagesByData.js');


router.get('/all', async(req,res)=>{ // 
    try {
        let allImages = await image.findAll()
        if(allImages) return res.status(200).json(allImages);
    } catch (error) {
        console.log(error)
    }
});

router.post('/bydata', async (req, res)=>{
    let {catName, subName} = req.body

    try {

        let imagesFound = await getImages(req, res)
        // let notationId = await getCatSubcat(req, res)

        // let imagesFound = await image.findAll({
        //     where: {
        //         notationId
        //     }
        // })

        return res.status(200).json(imagesFound) // []
        
    } catch (error) {
        console.log(error)
    }
})

router.post('/define', async(req,res)=>{

    let {url , notationId} = req.body

    // console.log(req.body)

    if( !url || !notationId ) return res.status(200).json('Faltan params')

    try {

        let createdImage= await image.create(req.body)
        if(createdImage) return res.status(200).json(createdImage)
        
    } catch (error) {
        console.log(error)
    }
});

module.exports= router;