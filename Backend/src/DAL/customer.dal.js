const Customer = require("../Models/Customer.js");

class CustomerDAL {
    async getCustomerByUsername(username){
        return await Customer.findOne({username})
    }
    async createCustomer(body){
        return new Customer(body).save();
    }
    async getCustomerById(id){
        return await Customer.findById(id);
    }
}

module.exports = CustomerDAL;