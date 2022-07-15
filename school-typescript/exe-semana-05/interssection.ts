// Faça uma função que mergeie dois objetos, retornando um tipo que é a interssecção dos dois tipos dos objetos.
// Dica - utilize type-parameters para receber os tipos dos objetos dinâmicamente e spread ou Object.assign para a fazer o merge
// na implementação da função. OK


export type Name = {
    name: string
};

export type Age = {
    age: number
};

const nameUser: Name = {name: 'Welliton'};
const ageUser: Age = {age: 29};


function mergeFunction <T, U extends object>(obj1: T, obj2: U): T & U {
    return Object.assign(obj1, obj2);
};

const myUser = mergeFunction(nameUser, ageUser);
const result = myUser.name;
console.log(result);
