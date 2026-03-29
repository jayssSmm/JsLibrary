function Person(name){
    this.name=name
}

Person.prototype.sayName=function(){
    return `I'm ${this.name}`
}

function Player(name,marker){
    this.name=name
    this.marker=marker
}

Player.prototype.getMarker=function(){
    return `This is my ${this.marker}`
}

console.log(Object.getPrototypeOf(Player))

Object.setPrototypeOf(Player.prototype,Person.prototype)
Object.getPrototypeOf(Player.prototype)

const p1=new Player('bob','X')
const p2=new Player('carl','O')

console.log(p1.sayName())
console.log(p2.sayName())

console.log(p1.getMarker())
console.log(p2.getMarker())