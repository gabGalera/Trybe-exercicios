// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

let romano = 'XXIV';
let num = 0;

for(i = 0; i < romano.length; i++){
    if(romano[i] == 'I' && romano[i+1] == 'V'){
        num = num + 4;
        i = i + 1;
    } else if(romano[i] == 'I' && romano[i+1] == 'X'){
        num = num + 9;
        i = i + 1;
    }  else if(romano[i] == 'X' && romano[i+1] == 'L'){
        num = num + 40;
        i = i + 1;
    }  else if(romano[i] == 'X' && romano[i+1] == 'C'){
        num = num + 90;
        i = i + 1;
    }  else if(romano[i] == 'C' && romano[i+1] == 'D'){
        num = num + 400;
        i = i + 1;
    }  else if(romano[i] == 'C' && romano[i+1] == 'M'){
        num = num + 900;
        i = i + 1;
    }  else if(romano[i] == 'M'){
        num = num + 1000;
    }  else if(romano[i] == 'D'){
        num = num + 500;
    }  else if(romano[i] == 'C'){
        num = num + 100;
    }  else if(romano[i] == 'X'){
        num = num + 10;
    }  else if(romano[i] == 'I'){
        num = num + 1;
    }
}

console.log(num);
