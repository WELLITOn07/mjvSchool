//TEMPLATES LITERAL TYPES
const hello = 'Hello';
const world = 'World';
const HelloWorld = `${hello} ${world}` as const;
// o uso do AS CONST ao final permitiu receber os valores dos tipos acima, sem ele se torna apenas um type STRING
export type Hello = `hello`;
export type World = `WORLD`;
export type HelloWorld = `${Hello} ${World}`;

//TYPES AUXILIARES NATIVOS
type HelloUpercase = Uppercase<Hello>;
type WorldLowecase = Lowercase<World>;
type HelloCapilalize = Capitalize<Hello>;
//primeira maiuscula
type WorldUncapitalize = Uncapitalize<World>;
//primeira minuscula

//COLOCAR SUFIXO
type User = {
    id: number;
    name: string;
};
type ComsufixoChanged = `${keyof User}Changed`;

//EVENT FUNCTION 
type UserOnChangedEvent = {
    [event in ComsufixoChanged]: Function
};

//COLOCANDO SUFIXO NO VALOR E PROPRIEDADE
type UserOnChangedEvent2 = {
    [P in keyof User as `${P}Changed`]: string //retorno com nova propriedade
};

//FUNCAO P/ FAZER IGUAL ACIMA DE FORMA A RECEBER QUALQUER TYPE GENERICO
type UserOnChangedGeneric <T> = {
    [P in keyof T as `${Extract<P, string>}ChangedGeneric`]: (newValue: T[P]) => void
};

type TestChangedGeneric = UserOnChangedGeneric<User>;

//PERCORRER TYPES E REALIZAR ALGO (NESTE CASO TRIM<> PARA RECORTAR VALORES COM ESPACOS)\
type Trim<S extends string> = 
    S extends ` ${infer T}` ? Trim<T> :
    S extends `${infer T} ` ? Trim<T> :
    S;

type Spaces = '   Hello   ';
type RemoveSpaces = Trim<Spaces>;
