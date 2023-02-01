// Переписать консольное приложение из предыдущего юнита на классы.
// предыдущее задание:
// Реализовать следующее консольное приложение. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.


class Device {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isTurnOn = false;
    }

    turnOn() {
        this.isTurnOn = true;
        console.log(this.name + ' is turned on!');
    }

    turnOff() {
        this.isTurnOn = false;
        console.log(this.name + ' is turned off!');
    }
}

class Lamp extends Device {
    constructor(name, power, brand, type) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.isTurnOn = false;
    }
}

class Computer extends Device {
    constructor(name, power, brand, functionality) {
        super(name, power);
        this.brand = brand;
        this.functionality = functionality;
        this.isTurnOn = false;
    }
}

const tableLamp = new Lamp('Table Lamp', 10, 'Xiaomi', 'LED')
const homePC = new Computer('PC', 300, 'HP', 'for work')

tableLamp.turnOn()
homePC.turnOn()

let power = (tableLamp.isTurnOn ? tableLamp.power : 0) + (homePC.isTurnOn ? homePC.power : 0)
console.log(`Power consumption is ${power}`)

console.log(homePC)
console.log(tableLamp)