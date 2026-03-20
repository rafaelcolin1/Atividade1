function Mawer(){
let soma_ganho = 0;
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
}