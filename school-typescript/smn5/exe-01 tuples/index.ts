//TUPLES 
type PairStrings = [string, string];
//somente dois elementos do tipo string
type PairStringNumber = [string, number];
//dois elementos - string e number
type Pair<T1, T2> = [type1: T1, type2: T2];
type PairStringNumber2 = Pair<string, number>;
//T1 passou a ser string e T2 number, esse novo type rece esses dois elementos por referencia
type Triple <T1, T2, T3> = [T1, T2, T3];
const tripleStrings: Triple<string, string, string> = ['', '', ''];
//array sendo tipado com  o type Triple com 3 strings 
type StringTheNumber = [...string[], number];
//todos os valores iniciais (o restperator diz que pode ser numeros indefinidos)terao que ser strings porem o ultimo valor tera que ser number
const stringsTheNumbers: StringTheNumber = ['a', 'b', 'c', 'd', 1];
//array de strings e ultimo é number 
type ReadOnlyTuple = readonly[string, number];
//type que não pode ser modificados

