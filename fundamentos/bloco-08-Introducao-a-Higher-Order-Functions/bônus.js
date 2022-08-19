// Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

// Para os próximos exercícios copie o código abaixo.

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const danoDoDragao = () => {
    dragon.damage = Math.random() * (dragon.strength - 15) + 15
    return dragon.damage
}

//  Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).


const danoDoWarrior = () => {
    warrior.damage = Math.random() * (warrior.strength * warrior.weaponDmg -  warrior.strength) + warrior.strength
    return warrior.damage
}

// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const danoMago = () => {
    mage.damage = Math.random() * (mage.intelligence * 2 - mage.intelligence) + mage.intelligence
    return mage.damage
}

const usoMana = () => {
    (mage.mana < 15) ? mage.mana = `Não possui mana suficiente` : mage.mana -= 15
    return mage.mana
}

const ataqueDoMage = () => {
    return { 
        ataque: danoMago(),
        custo: usoMana()
    }
}

const gameActions = {
    // Crie as HOFs neste objeto.
    // Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.
    turnoDoWarrior: (danoDoWarrior) => {
        dragon.healthPoints -= danoDoWarrior()
        return dragon.healthPoints
    },

    // Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

    turnoDoMage: (ataqueDoMage) => {
        dragon.healthPoints -= ataqueDoMage().ataque
        return dragon.healthPoints
    }, 

    turnoDoDragao: (danoDoDragao) => {
        mage.healthPoints -= danoDoDragao()
        warrior.healthPoints -= danoDoDragao()
        const obj = {
            mage: mage.healthPoints,
            warrior: warrior.healthPoints
        }
        return obj
    },

    battleMembers: () => {
        const obj = {
            dragon: dragon,
            mage: mage,
            warrior: warrior,
        }
        return obj
    }
    };

    console.log(gameActions.turnoDoWarrior(danoDoWarrior));
    console.log(gameActions.turnoDoMage(ataqueDoMage));
    console.log(gameActions.turnoDoDragao(danoDoDragao));
    console.log(warrior);
    console.log(dragon);
    console.log(mage);
    console.log(gameActions.battleMembers());