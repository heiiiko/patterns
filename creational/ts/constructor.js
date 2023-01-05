var Server = /** @class */ (function () {
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
    }
    Server.prototype.getUrl = function () {
        return "https://".concat(this.ip, ":801");
    };
    Server.prototype.getName = function () {
        return this.name;
    };
    return Server;
}());
var aws = new Server('AWS', '11.11.11.11');
console.log(aws.getUrl());
console.log(aws.getName());
