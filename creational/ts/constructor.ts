class Server {
  private name: string;
  private ip: string
  
  public constructor(name: string, ip: string) {
    this.name = name;
    this.ip = ip;
  }
  
  getUrl(): string {
    return `https://${this.ip}:801`;
  }
  
  getName(): string {
    return this.name
  }
}

const aws = new Server('AWS', '11.11.11.11');
console.log(aws.getName());
console.log(aws.getUrl());
