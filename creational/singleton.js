class Database {
  constructor(name) {
    if (Database.exists) {
      return Database.instance
    }
    Database.instance = this
    Database.exists = true
    this.name = name
  }
  
  getData() {
    return this.name
  }
}

const mySql = new Database('MySql')
console.log(mySql.getData())

const mongo = new Database('MongoDB')
console.log(mongo.getData())