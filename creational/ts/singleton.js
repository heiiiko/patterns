var Database = /** @class */ (function () {
    function Database(name) {
        this.name = name;
    }
    Database.getInstance = function (name) {
        if (!Database.instance) {
            Database.instance = new Database(name);
        }
        return Database.instance;
    };
    Database.prototype.getData = function () {
        return this.name;
    };
    return Database;
}());
var mongo = Database.getInstance('Mongo');
console.log(mongo.getData());
var mySql = Database.getInstance('MySQL');
console.log(mySql.getData());
