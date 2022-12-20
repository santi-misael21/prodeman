const { category } = require('../db');
const { subcategory } = require('../db');
const { cat_subcat } = require('../db');

const axios = require('axios').default;

const getCatSubcat = async (req, res) => {
    
    let {catName, subName} = req.body
    // console.log(req.body)

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
        }); 
        return res.status(200).json(catsubId)

    } catch (error) {
        console.log('getcatsubcat error')
    }

};

module.exports = {
    getCatSubcat
}