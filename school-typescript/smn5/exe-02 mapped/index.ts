

//MAPPED 
type MappedType = {
    [contador in 'valor 1' |'valor 2']: number
};
//INTEROU SOBRE ESSES VALORES DENTRO DO TYPE E RETORNOU UM NOVO TYPE PARA OS VALORES
interface User  {
    name: string;
    age: number;
};

type MappedUser = {
    [c in keyof User]: User[c]
};
//INTEROU SOBRE OS TIPOS DO USER E ATRIBUIU A ELE MESMO 
type ModifieldUser = {
    readonly [c in keyof User]?: User[c] | null
};
//ESSE TYPE MODIFICOU O TYPE ORIGINAL DO USER, ADICIONANDO ese novo type como readonly e COM O USO DO '?' (undefined), os proprios keyof | (e tambem) null
type TypeGeneric <T> = {
[c in keyof T]: T[c]
};
//PASSA O TYPE POR PARAMETRO
type MappedGenericCustomProps <T> = {
    [c in keyof T ]: T[c]
    
};
//PEGOU UM TYPE GENERICO E CAPITALIZOU E EXTRAIU TODOS OS VALORES DO TIPO STRING, DEPOIS ADCIONOU UMA FUNCAO COM RETORNO DESSA NOVA TIPAGEM

type NewGenericCustomUser = MappedGenericCustomProps<User>



let a:User[] =[]
a.forEach((item: User) => {
    item.age = 1
    item.name = 'oi'
    return item
});