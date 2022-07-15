"use strict";
;
//EX-02
const meusDados = {
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
function listMatters(list) {
    return list.listMatters;
}
;
//EX-05
var CourseLists;
(function (CourseLists) {
    CourseLists["angular"] = "angular";
    CourseLists["typescript"] = "typescript";
    CourseLists["git"] = "git";
})(CourseLists || (CourseLists = {}));
;
;
//EX07
const nathan = {
    teacher: 'Nathan',
    subjects: [
        CourseLists.angular,
        CourseLists.git
    ]
};
const alan = {
    teacher: 'Alan',
    subjects: [
        CourseLists.angular,
        CourseLists.typescript,
        CourseLists.git
    ]
};
//EX-08
const arrayTeachers = [alan, nathan];
//EX-09 
function getNameTeachers(array = arrayTeachers) {
    let nameTeacher;
    return nameTeacher = array.map(teacher => teacher.teacher);
}
;
console.log(getNameTeachers());
//EX-10 
function getNameSubjects(array = arrayTeachers) {
    let subjects = [];
    let [subjects1, subjects2] = array.map(subjects => subjects.subjects);
    return subjects = [...subjects1, ...subjects2];
}
;
console.log(getNameSubjects());
//EX-11
function getTeacherTypescript(array = arrayTeachers) {
    let teacher;
    teacher = array.find(name => name.subjects.includes(CourseLists.typescript));
    let TeacherTypescript = [];
    TeacherTypescript.push(teacher === null || teacher === void 0 ? void 0 : teacher.teacher);
    return TeacherTypescript;
}
;
console.log(getTeacherTypescript());
