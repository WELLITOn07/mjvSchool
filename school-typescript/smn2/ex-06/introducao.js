"use strict";
//AS VARIAVEIS PRECISAM SER EXPLICITAS O TIPO DE RETORNO//
var TipoPessoa;
(function (TipoPessoa) {
    TipoPessoa["Aluno"] = "Aluno";
    TipoPessoa["Professor"] = "Professsor";
})(TipoPessoa || (TipoPessoa = {}));
;
const tipoAluno = TipoPessoa.Aluno;
const tipoProfessor = TipoPessoa.Professor;
;
const PessoaDev = {
    tipo: TipoPessoa.Aluno
};
