let Salario = 1500.00;
let SalarioINSS = 0;
let SalarioNet = 0;

// INSS

if (Salario <= 1556.94) {
    SalarioINSS = Salario*0.92
} else if (Salario <=  2594.92){
    SalarioINSS = Salario*0.91
} else if (Salario <= 5189.82){
    SalarioINSS = Salario*0.88
} else {
    SalarioINSS = Salario - 570.88
}

// IR

if (SalarioINSS <= 1903.98){
    SalarioNet = SalarioINSS
} else if (SalarioINSS <= 28)