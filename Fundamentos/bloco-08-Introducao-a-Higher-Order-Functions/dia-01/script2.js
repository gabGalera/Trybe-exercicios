// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const funcao = (num1, num2) => {
    return (num1 === num2) ? true : false
}

const hof = (num, action) => {
    const sorteio = Math.ceil(Math.random()*5)
    return action(num, sorteio)
}

console.log(hof(3, funcao));