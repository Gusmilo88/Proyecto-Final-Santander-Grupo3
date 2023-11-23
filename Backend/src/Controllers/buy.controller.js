const buyService = require('../Services/buy.services');

const createBuy = async (req,res) => {
    try {
        await buyService.createBuy(req.user.id,req.body);
        res.status(201).json({message: "Se ralizaron " + req.body.length + " compras correctamente"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const searchByBuy = async (req,res) => {
    try {
        let id = req.user.id;
        const buys = await buyService.searchByBuy(id);
        res.status(200).json(buys);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    createBuy,
    searchByBuy
}