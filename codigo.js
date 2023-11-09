<script>
function Novo_Salário(){
    var novosalario
    'a é a variável que recebe o valor do salário'
    var a = prompt("Qual o seu salário?");

    if (a == 0 || a == "" ){
        alert("Digite um valor válido");
    }
    if (a != "" && a > 0 && a <= 1200){
        novosalario =  Math.round(a * 1.15);
        alert("Seu novo salário será " + novosalario);
    } 
    if(a != "" && a > 1200 && a <=2400){
        novosalario =  Math.round(a * 1.10);
        alert("Seu novo salário será " + novosalario);
    }
    if(a != "" && a > 2400){
        novosalario = Math.round(a * 1.05);
        alert("Seu novo salário será " + novosalario);
    }
   
}
</script>

<script>
function Férias(){
    'b é a variável que recebe o valor do salário'
    var b = prompt("Qual o seu salário?");
   if (b == 0 || b == "" ){
    alert("Digite um valor valido");
   }
   if (b != 0 && b > 0){
    pgférias = Math.round(b*(1+1/3));
    alert("Você receberá para as férias: " + pgférias);
   }
}
</script>

<script>
function Decimo(){
    'c e d recebem respectivamente, salário e número de meses trabalhados'
    var c = parseFloat(prompt("Qual o seu salário?"));
    var d = parseFloat(prompt("Qual o número de meses que você trabalhou?"));
    var decimo 
    if ((c == 0 || c == "") && (d == 0 || d == "")){
        alert("Digite um valor válido");
    }
    if ((c != "" && c > 0) && (d > 0 && d <= 12 && d!= "")){
        decimo = c + Math.round(c *(d/12));
        alert("Seu décimo terceiro será " + decimo);
    }
  
}
</script>

<script>
    function Sair(){
        alert("Até a próxima");
    }
</script>
