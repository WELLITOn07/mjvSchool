"use strict";
// Faça uma função que mergeie dois objetos, retornando um tipo que é a interssecção dos dois tipos dos objetos.
// Dica - utilize type-parameters para receber os tipos dos objetos dinâmicamente e spread ou Object.assign para a fazer o merge
// na implementação da função. OK
Object.defineProperty(exports, "__esModule", { value: true });
const nameUser = { name: 'Welliton' };
const ageUser = { age: 29 };
function mergeFunction(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
;
const myUser = mergeFunction(nameUser, ageUser);
const result = myUser.name;
console.log(result);
