//UTILITY TYPES

interface User {
    id: number | null;
    name: string;
};

type PartialUser = Partial<User>
//USA AS TIPAGENS ORIGINAIS DA INTERFACE USER E ADICIONA COMO PARCIAL TAMBEM O UNDEFINED
type RequiredUser = Required<User>;
//REMOVE O OPCIONAL
type RendOnlyUser = Readonly<User>;
//ADICIONA readonly EM TODAS AS PROPRIEDADES
type PickUser = Pick<User, 'id' | 'name'>
//PEGAR TYPES E UNIR CASO QUEIRA
type RecordUser = Record<string, User>
//VAI CRIAR UMA ASSINATURA INDEXADA
type ExcludeUserName = Exclude<keyof User, 'id'>
//VAI PEGAR TODAS AS PROPRIEDADES DO USER E REMOVER O TYPE ID
type ExtractUser = Extract<User | null, User>
//ACESSA O TYPE USER E VERIFICA SE TEM TYPE USER | NULL E ESCOLHE A EXISTENTE
type OmitUser = Omit<User, 'name'>
//EXCLUI UMA PROPRIEDADE
//type NullUser = NonNullUser<User['id']>//
//REMOVE O NULL DE UM PAREMETRO

//UTILITARIOS P/ FUNCTIONS
function createUser (name: string, id: number): User {
    return {
        name: name,
        id: id,
    }
};



type ParametersUser = Parameters<typeof createUser>
//PASSA PO PARAMETRO O TYPE DA FUNCAO P/ OUTRA TYPE
type ReturnTypeUser = ReturnType<typeof createUser>
//RECEBE O TIPO DE RETORNO DE UMA FUNCAO

//P/ CLASS
class Professor {
    constructor(public name: string, age: number) {}
};

type ConstructorParameter = ConstructorParameters<typeof Professor>
//PEGA OS TYPES COMO PARAMETRO DE UMA CLASS
type InstanceTypeProfessor = InstanceType<typeof Professor>
//PEGA O TIPO DE RETORNO DE UMA CLASS

//P/ STRINGS LITERAIS
type WellitonLiteral = 'Welliton'

type UppercaseName = Uppercase<WellitonLiteral>
//COLOCA EM MAIUSCULA
type Lower = Lowercase<WellitonLiteral>
//COLOCA EM MINUSCULA
type Capitalizee = Capitalize<WellitonLiteral>
//CONVERTE O PRIMEIRO CARACTERE PARA UPPERCASE
type UncapitalizeWelliton = Uncapitalize<WellitonLiteral>
//
