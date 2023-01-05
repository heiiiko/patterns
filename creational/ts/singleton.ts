class Database {
  private static instance: Database;
  private name: string;
  
  private constructor(name: string) {
    this.name = name;
  }

  public static getInstance(name: string): Database {
    if (!Database.instance) {
      Database.instance = new Database(name);
    }
    
    return Database.instance;
  }

  public getData(): string {
    return this.name;
  }
  
}

const mongo = Database.getInstance('Mongo');
console.log(mongo.getData())

const mySql = Database.getInstance('MySQL');
console.log(mySql.getData())

