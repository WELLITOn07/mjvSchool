//AS VARIAVEIS PRECISAM SER EXPLICITAS O TIPO DE RETORNO//

export type StringOrBoolean = string | boolean;

let strOrBool: StringOrBoolean;

export interface User {
    id: string;
    name: string;
}

export interface classroom {
    id: number;
    subject: string
};

export type UserOrClassroom = User | classroom;

export function check (UserOrClassroom: UserOrClassroom) {
    return UserOrClassroom.id
};