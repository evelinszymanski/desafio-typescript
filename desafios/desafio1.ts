// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";

// resolução 01
interface employee {
  code: number,
  name: string
};

const employee = {} as employee;
employee.code = 10;
employee.name = "John";

//resolução 02
const employee2: { code: number, name: string } = {
  code: 10,
  name: "John"
}