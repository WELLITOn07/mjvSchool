"use strict";
// Crie um mixin "named" e tipo "HasName" para adicionar as
// propriedades "firstName" e "lastName" de tipos string.
// Crie um outro mixin chamado "fullNamed" e tipo "HasFullName"
// que deverá adicionar um método "getFullName()" a um tipo qualquer que implemente "HasName"
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullNamed = exports.named = void 0;
function named(named) {
    return class extends named {
        constructor() {
            super(...arguments);
            this.firstName = 'Welliton';
            this.lastName = 'Becker';
        }
    };
}
exports.named = named;
;
/*---------------------------------------*/
function fullNamed(fullN) {
    return class extends fullN {
        getFullName() {
            return `Fuul name: ${this.firstName} ${this.lastName}`;
        }
    };
}
exports.fullNamed = fullNamed;
;
