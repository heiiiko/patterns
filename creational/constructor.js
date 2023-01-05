// ES5
// function Server(name, ip) {
//   this.name = name
//   this.ip = ip
//
// }
//
// Server.prototype.getUrl = function () {
//   return `https://${this.ip}:801`
// }

// ES6
class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }
  
  getUrl() {
    return `https://${this.ip}:801`;
  }
  
  getName() {
    return this.name;
  }
}

const aws = new Server('AWS UK', '11.11.11.11');
console.log(aws.getUrl());
console.log(aws.getName());