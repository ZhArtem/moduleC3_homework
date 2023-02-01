// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

function printObject(obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop, obj[prop]);
        }
    }
}