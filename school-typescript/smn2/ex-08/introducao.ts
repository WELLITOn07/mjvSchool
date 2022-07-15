//AS VARIAVEIS PRECISAM SER EXPLICITAS O TIPO DE RETORNO//

//MODIFICADORES

interface User {
    readonly id: number;
    name: string,
    email?: string
};

const user: User = {
    id: 1,
    name: "",
    email: ""
};
