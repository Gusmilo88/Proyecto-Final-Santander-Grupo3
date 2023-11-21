const Buy = require('../Models/Buy');

class buyDal{
    async createBuy(body){
        return new Buy(body).save();
    }
    async searchByBuy(id){
        return await Buy.find({customer: id});
    }
}

module.exports = buyDal;