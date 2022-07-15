
// Crie uma função que aceita um argumento e retorna true se o argumento for um array, ou false caso não seja. OK
// Coloque a tipagem para que o Typescript consiga automaticamente entender esse retorno OK

// Dica: utilize um parâmetro de tipo para receber o tipo do argumento OK

type CreateArray = Array<any>

function isArray <T> (args: T): T extends Array<any> ? true : false {
    return args as any
};

const oneArray: CreateArray = [];
const result = isArray(oneArray);
