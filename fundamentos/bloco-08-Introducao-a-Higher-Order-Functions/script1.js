const minhaFuncao = (Nome) => ({ Nome: Nome, email: (Nome) => {
    let a = Nome.split(' ');
    return `${a[0].toLowerCase()}_${a[1].toLowerCase()}@trybe.com`
}})

const newEmployees = (action) => {
    const employees = {
      id1: action('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: action('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: action('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    employees.id1.email = employees.id1.email('Pedro Guerra')
    employees.id2.email = employees.id2.email('Luiza Drumond')
    employees.id3.email = employees.id3.email('Carla Paiva')
    return employees;
  };

console.log(newEmployees(minhaFuncao));

//   1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.