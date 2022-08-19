const funcao = (num1, num2) => {
    return (num1 === num2) ? true : false
}

const hof = (num, action) => {
    const sorteio = Math.ceil(Math.random()*5)
    return action(num, sorteio)
}

console.log(hof(3, funcao));