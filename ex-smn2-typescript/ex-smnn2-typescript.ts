//EXERCICIOS SEMANA 2 TYPESCRIPT - WELLITON BECKER//
/*1- Crie um tipo para representar um objeto que contenha as suas informações de 
 * nome, profissão, idade e uma lista de assuntos de seu interesse.
 * 
 * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
 * 
 * 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, 
 * e retorne somente a lista de assuntos do objeto.
 * 
 * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
 * 
 * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
 * 
 * 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.
 * 
 * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
 * Nathan = Angular e Git, Alan = Angular, Typescript e Git
 * 
 * 8 - Declare e popule um array com os objetos do exercício 7.
 * 
 * 9 - Faça uma função que receba um argumento de array de Professor 
 * e retorne um novo array de strings contendo somente os nomes dos professores.
 * 
 * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
 * 
 * 11 - Faça uma função que receba um argumento de array de Professores e 
 * retorne o primeiro Professor encontrado que dê aula de Typescript.*/
/********************************************/
//EX-01
interface Pessoa {
    name: string;
    profession: string;
    age: number;
    listMatters: string[];
};
//EX-02
const meusDados: Pessoa = {
    name: 'Welliton',
    profession: 'Driver',
    age: 29,
    listMatters: [
        'HTML',
        'SCSS',
        'JAVASCRIPT',
        'ANGULAR',
        'TYPESCRIPT'
    ]
};
//EX-03
function listMatters (list: Pessoa) {
    return list.listMatters
};

//EX-04
type ListMatters = (list: Pessoa) => Pessoa;


//EX-05
enum CourseLists {
    angular = 'angular',
    typescript = 'typescript',
    git = 'git'
};

//EX-06
interface TeachersSubjects {
    teacher: string;
    subjects: string[]
};


//EX07
const nathan: TeachersSubjects = {
    teacher: 'Nathan',
    subjects: [
        CourseLists.angular,
        CourseLists.git
    ]
};

const alan: TeachersSubjects = {
    teacher: 'Alan',
    subjects: [
        CourseLists.angular,
        CourseLists.typescript,
        CourseLists.git
    ]
};

//EX-08
const arrayTeachers: TeachersSubjects [] = [alan, nathan];
    
//EX-09 
function getNameTeachers (array = arrayTeachers) {
   let nameTeacher: string[];
   return nameTeacher = array.map(teacher => teacher.teacher)
};
console.log(getNameTeachers());

//EX-10 
function getNameSubjects(array = arrayTeachers)  {
    let subjects: string [] = [];
    let [subjects1, subjects2] = array.map(subjects => subjects.subjects)
    return subjects = [...subjects1, ...subjects2];
};
console.log(getNameSubjects());

//EX-11
function getTeacherTypescript (array = arrayTeachers) {
    let teacher:TeachersSubjects | undefined;
    teacher = array.find(name => name.subjects.includes(CourseLists.typescript))
    
    let TeacherTypescript = [];
    TeacherTypescript.push(teacher?.teacher)
    return TeacherTypescript;
};
console.log(getTeacherTypescript());

