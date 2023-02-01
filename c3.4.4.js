// Реализовать следующее консольное приложение. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function Device(name, power) {
    this.name = name;
    this.power = power;
    this.isTurnOn = false;
}

Device.prototype.turnOn = function () {
    this.isTurnOn = true;
    console.log(this.name + ' is turned on!');
}

Device.prototype.turnOff = function () {
    this.isTurnOn = false;
    console.log(this.name + ' is turned off!');
}

function Lamp(name, power, brand, type) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.type = type;
    this.isTurnOn = false;
}

Lamp.prototype = new Device();

function Computer(name, power, brand, functionality) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.functionality = functionality;
    this.isTurnOn = false;
}

Computer.prototype = new Device()

const tableLamp = new Lamp('Table Lamp', 10, 'Xiaomi', 'LED')
const homePC = new Computer('PC', 300, 'HP', 'for work')

tableLamp.turnOn()
homePC.turnOn()

let power = (tableLamp.isTurnOn ? tableLamp.power : 0) + (homePC.isTurnOn ? homePC.power : 0)
console.log(`Power consumption is ${power}`)

console.log(homePC)
console.log(tableLamp)



