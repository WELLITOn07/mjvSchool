//AS VARIAVEIS PRECISAM SER EXPLICITAS O TIPO DE RETORNO//

enum TipoPessoa {
    Aluno = "Aluno",
    Professor = "Professsor" 
};

const tipoAluno = TipoPessoa.Aluno;

const tipoProfessor = TipoPessoa.Professor;

interface PessoaDev {
    tipo: TipoPessoa
};

const PessoaDev: pessoaDev = {
    tipo: TipoPessoa.Aluno
};