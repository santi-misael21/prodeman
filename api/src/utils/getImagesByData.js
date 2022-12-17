const { image } = require('../db');
const { getCatSubcat } = require('./getCatSubcat.js');

const getImages = async (req, res) =>{
    
    let {catName, subName} = req.body

    try {

        let notationId = await getCatSubcat(req, res)

        let imagesFound = await image.findAll({
            where: {
                notationId: notationId.Id
            }
        })

        return res.status(200).json(imagesFound) // []
        
    } catch (error) {
        console.log(error)
    }
}

module.exports= {
    getImages
}