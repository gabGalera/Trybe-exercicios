// Objeto 1

let info = [ 
    {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
    },

    {personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'    
    } 
];
  
console.log('Bem-vinda, ' + info[0].personagem)
console.log(info[0]);

for(key in info[0]){
    console.log(key);
}

for(key in info[0]){
    console.log(info[0][key]);
}

for(let i in info[0]){
    if (info[0][i] && info[1][i] == 'Sim'){
        console.log('Ambos reocrrentes');
    } else {
    console.log(info[0][i],"e",info[1][i]);
    }
}