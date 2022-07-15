// Crie um mixin "named" e tipo "HasName" para adicionar as
// propriedades "firstName" e "lastName" de tipos string.
// Crie um outro mixin chamado "fullNamed" e tipo "HasFullName"
// que deverá adicionar um método "getFullName()" a um tipo qualquer que implemente "HasName"

export type Constructor<T = {}> = new (...args: any[]) => T;

export type HasName = {
    firstName: string;
    lastName: string;   
};

export type HasFullName = HasName

export function named <T extends Constructor<HasName>> (named: T) {
    return class extends named {
        firstName = 'Welliton'
        lastName = 'Becker'
    }
};


/*---------------------------------------*/
export function fullNamed<T extends Constructor<HasFullName>> (args: T) {
    return class extends args {
        getFullName() {
            return `Fuul name: ${this.firstName} ${this.lastName}`
        }
    }
};

