let n = 15;
let ast = '';
for(i = 0; i < n; i++){
    ast = ast + '*';
}
for(i = 0; i < n; i++){
    console.log(ast);
}

ast = '';
console.log('');

for(i = 0; i < n; i++){
    ast = ast + '*';
    console.log(ast);
}

ast = '';
console.log('');

for(i = 0; i < n; i++){
    for(j = n - i - 1; j > 0; j--){
        ast = ast + ' ';
    }
    for(j = i; j >= 0; j--){
        ast = ast + '*';
    }
    console.log(ast);
    ast = ''
}

console.log('');
ast = '';

for(i = 1; i <= n; i++){
    if(i % 2 != 0){
        let a = (n-i)/2;
        for(j = 0; j < a; j++){
            ast =  ast + ' ';
        }
        for(j = 0; j < i; j++){
            ast = ast + '*';
        }
        console.log(ast);
        ast = '';
    }
}


console.log('');
ast = '';

for(i = 1; i <= n; i++){
    if(i % 2 != 0){
        let a = (n-i)/2;
        for(j = 0; j < a; j++){
            ast =  ast + ' ';
        }
        ast = ast + '*';
        if(i != n && i != 1){
            for(j = 0; j < (i-1)/2; j++){
            ast =  ast + ' ';
            }
            for(j = 0; j < (i-3)/2; j++){
                    ast =  ast + ' ';
                    }
            ast = ast + '*';
        } else if(i != 1){
            for(j = 1; j < i; j++){
                ast = ast + '*';
            }
        }
        console.log(ast);
        ast = '';
    }
}
