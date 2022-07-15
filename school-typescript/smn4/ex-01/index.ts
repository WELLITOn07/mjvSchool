//KEIOF
 interface Professor {
    name: string;
    age: string;
};

type ProfessorProperties = keyof Professor;

const professorProperties: ProfessorProperties = 'age'

console.log(professorProperties)
