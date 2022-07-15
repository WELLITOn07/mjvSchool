//AS VARIAVEIS PRECISAM SER EXPLICITAS O TIPO DE RETORNO//
interface pessoa {
    name: string;
    idade: number;
    isAluno: boolean;
}

interface pessoa {
    sobrenome: string;
}

const person: pessoa = {
    name: 'Welliton',
    idade: 29,
    isAluno: true,
    sobrenome: 'Gruber'
}
