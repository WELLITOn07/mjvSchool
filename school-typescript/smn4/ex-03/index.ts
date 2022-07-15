//INDEXED ACCESS TYPES
interface CourseSubjects {
    id: number;
    name: string;
};

interface Professor {
    name: string;
    age: number;
    subjects: CourseSubjects[];
};

type ProfessorName = Professor['name']//string
type ProfessorTypeObjects = Professor['subjects']//courseObjects
type ProfessorSubjectsId = Professor['subjects'][number]['id']//number
type ProfessorNameSgeTypes = Professor['name' | 'age']//string + number
type ProfessorAllTypes = Professor[keyof Professor]// string + number + courseSubjects