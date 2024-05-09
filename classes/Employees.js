class Employees {
    #salary
    #isHired = true
    static #allEmployees = []
constructor(name, title, salary){
    this.name = name 
    this.title = title
    this.#salary = salary
    Employees.#allEmployees.push(this)
}
getSalary(){
    return this.#salary
}
setSalary (amount) {
    this.#salary = amount
}
getStatus(){
    return this.#isHired
}
setStatus (command) {
    if (command === 'hire'){
        this.#isHired = true
    } else if (command === 'fire'){
        this.#isHired = false
    }
}
static getEmployees () {
    return Employees.#allEmployees
}

static getTotalPayroll() {
    return Employees.#allEmployees.reduce((total, employee) => total + employee.getSalary(), 0);
}
}




module.exports = {
    Employees,
}