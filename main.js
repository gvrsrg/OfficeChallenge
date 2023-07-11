//write your code here to make the tests pass

class Document{
    constructor(name){
        this._EmployeeName = name
    }
    get EmployeeName(){
        return this._EmployeeName
    }
}

class Employee{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }

    work(office){
        for (let i=0; i<10; i++){
            office.documents.push(new Document(this.name))

        }

    }
}

class Manager{
    constructor(name){
        this._name = name
        this.employees = []
    }
    get name(){
        return this._name
    }

    hireEmployee(name){
        const newEmployee = new Employee(name)
        this.employees.push(newEmployee)
    }

    askEmployeesToWork(office){
        for (let employee of this.employees){
            employee.work(office)

        }


    }
}

class Cleaner{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }

    clean(){
        console.log("Clean")

    }
}

class Office{
    constructor(){
        this.documents = []
        this.managers = []
        this.cleaners = []

    }

    hireCleaner(name){
        const newCleaner = new Cleaner(name)
        this.cleaners.push(newCleaner)
         
    }

    hireManager(name){
        const newManager = new Manager(name)
        this.managers.push(newManager)
         
    }

    startWorkDay(){
        for (let manager of this.managers){
            manager.askEmployeesToWork(this)
        }


        for (let cleaner of this.cleaners){
            cleaner.clean()
        }
    }



}