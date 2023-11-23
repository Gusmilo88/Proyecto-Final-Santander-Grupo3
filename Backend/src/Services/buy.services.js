const buyDal = require("../DAL/buy.dal");
const CustomerDAL = require("../DAL/customer.dal");

const buyDAL = new buyDal;
const customerDAL = new CustomerDAL;

const createBuy = async (id,body) => {
    if (!id) {
        throw new Error('No se encontro el id del usuario')
    }
    if (!body) {
        throw new Error('No se envió ningun producto');
    }
    const customer = await customerDAL.getCustomerById(id);
    if (!customer) {
        throw new Error('El id del usuario no existe');
    }
    let compras = []
    body.forEach( async (buys) => {
        let buy = await buyDAL.createBuy({...buys,customer});
        compras.push(buy);
    });
    return compras;
}

const searchByBuy = async (id) => {
    const customer = customerDAL.getCustomerById(id);
    if (!customer) {
        throw new Error('El id del usuario no existe');
    }
    const myBuy = await buyDAL.searchByBuy(id);
    const transform = myBuy.map(buy => {
        return{
            date_buy: FormatDate(buy.createdAt),
            event: {
                name: buy.name,
                quantity: buy.quantity,
                price: buy.price,
                subtotal: buy.quantity * buy.price
            }
        }
    })
    return transform;
}

const FormatDate = (date) => {
    return new Intl.DateTimeFormat('es-ES',{dateStyle:"medium",timeStyle:'long'}).format(date);
}

module.exports = {
    createBuy,
    searchByBuy
}