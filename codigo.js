<script>
    
    var novosalario = 
    var a = prompt("Qual o seu salário?");
    var b = prompt("Qual o seu salário?");
    var c = parseFloat(prompt("Qual o seu salário?"));
    var d = parseFloat(prompt("Qual o número de meses que você trabalhou?"));
  
    function Novo_Salário()

        if (a  1200){
        novosalario =  Math.round(a * 1.15) 
        } 

        if(a > 1200 && a <=2400){
        novosalario =  Math.round(a * 1.10)
        }

        if(a > 2400){
        novosalario = Math.round(a * 1.05)
        }
    
    
    alert ("Seu novo salário será " + novosalario)

    function Férias(){        
        pgférias = Math.round(b*(1+1/3))
        

    alert("Você receberá para as férias: " + pgférias);

    function Decimo(){
    
    var decimo =
        if (d>0 && d<=12){
            decimo = c + Math.round(c *(d/12))}
    }
  

    alert("Seu décimo terceiro será " + decimo);

    function Sair(){
        alert("Até a próxima")
    }
</script>