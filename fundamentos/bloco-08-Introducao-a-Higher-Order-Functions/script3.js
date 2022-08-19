const comparaErrei = (Errei1, Errei2) => {
    let sum = 0;
    for (let i = 0; i < Errei1.length; i += 1) {
        (Errei1[i] === Errei2[i]) ? sum += 1 : sum -= 0.5;
        (Errei2[i] === 'N.A') ? sum += 1 : sum = sum;
    };
    return sum
}

const hof = (gabarito, respostas, comparaErrei) => {
    console.log(comparaErrei(gabarito, respostas));
}

const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostas = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

hof(gabarito, respostas, comparaErrei)

// Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (Gabarito);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for "N.A");
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante.