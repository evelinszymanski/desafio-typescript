// Como podemos melhorar esse código usando TS? 
// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

// resolução
interface pessoa {
  nome: string,
  idade: number,
  profissao: string
}

const pessoa1: pessoa = {
  nome: "Maria",
  idade: 29,
  profissao: "Atriz"
};

const pessoa2: pessoa = {
  nome: "Roberto",
  idade: 19,
  profissao: "Padeiro"
};

const pessoa3: pessoa = {
  nome: "Laura",
  idade: 32,
  profissao: "Atriz"
};

const pessoa4: pessoa = {
  nome: "Carlos",
  idade: 19,
  profissao: "Padeiro"
}; 