const { Employees } = require("./Employees");

class SalesPerson extends Employees{
    #totalSales = 0
    clients = []
constructor (name, position, salary, clients, totalSales){
    super(name, position, salary)
    this.clients = clients
}
getSalesNumber(){
    return this.#totalSales
}
makeSale (amount){
    this.#totalSales +=amount
}
}

module.exports = {
    SalesPerson,
}