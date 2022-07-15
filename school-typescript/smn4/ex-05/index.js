"use strict";
/*function truth (x: string | null | undefined) {
     if (x) {
         x
     } else {
        x
     }
};

const teste = truth("200")*/
/*function vazio (x: 'a' | 'b' | null) {
    if (x === 'a') {
        console.log('a')
    } else if (x === 'b') {
        console.log('b')
    } else {
        console.log('NULL')
    }
};

function propriedadeArray (x: any[] | object) {
    if ('teste' in x) {
        console.log('true')
    } else {
        console.log('object(false)')
    }
}

class User {
    
}

function verificaType (x: User | string) {
    if (x instanceof User) {
        console.log('true')
    }else {
        console.log('false')
    }
}

function verificaValor (x: string | number) {
    x = 'teste' //x é string
    // ou //
    x = 10 //x é number
};*/
class User {
}
function customType(x) {
    if (x instanceof User) {
        console.log('true');
    }
    else {
        console.log('false');
    }
}

customType()