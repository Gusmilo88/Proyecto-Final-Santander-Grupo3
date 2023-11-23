const customerService = require('../Services/customer.services');

const register = async (req,res) => {
    try {
        const body = req.body;
        const customer = await customerService.register(body)
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const login = async (req,res) => {
    try {
        const {token,customer} = await customerService.login(req.body);
        res.status(200).json({
            customer:{
                username: customer?.username,
                rol: customer?.rol,
                email: customer?.email,
            },
            token: 'Bearer ' + token
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    register,
    login
}