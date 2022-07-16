//CONDITIONAL TYPES 

export type TypeArray = Array<any>;

function IsArray <T>(args: T): T extends Array<any> ? true:false {
    return args as any;
};


const constArray: TypeArray = [];
const result = IsArray(constArray);
