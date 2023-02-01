// Написать функцию, которая создает пустой объект, но без прототипа.

function createObjWithoutProto() {
    return Object.create(null);
  }