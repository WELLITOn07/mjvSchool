//INDEXED SIGNATURES 
interface CacheById {
    [id: string]: any
};

const cache: CacheById = {
    '110': 10,
    '120': 20
};

type PersonType = 'professor' | 'aluno' | 'diretora';

type CacheByOnion = {
    [c in PersonType]: any
};

const cacheByOnion: CacheByOnion = {
    'aluno': 'teste',
    professor: 132,
    diretora: 'teste'
};