function balancoFinanceiro(){
let soma_ganho = 0;
let ganho = 0;
    for(let i=1; i<=12; i+=1){
       let ganho = parseFloat(prompt("Digite o ganho do mês "+ i));

       if ( !isNaN(ganho) ){
            soma_ganho += ganho;
           console.log(soma);
        } else{
            alert("Por favor, digite um numero válido!");
        }
        
    }
    alert("O ganho anual foi de: "+soma_ganho);

    let soma_gasto = 0;
    let gasto = 0;
    for(let i=1; i<=12; i+=1){
       let gasto = parseFloat(prompt("Digite o gasto do mês "+ i));

       if ( !isNaN(gasto) ){
            soma_gasto += gasto;
           console.log(soma);
        } else{
            alert("Por favor, digite um numero válido!");
        }
        
    }
    alert("O gasto anual anual foi de: "+soma_ganho);

    let saldo = soma_ganho - soma_gasto;
    alert("O saldo anual foi de: "+saldo);

}