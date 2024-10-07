function Calcular(){
    var valor1 = parseFloat($("#val1").val());
    var valor2 = parseFloat($("#val2").val());

    if(valor1 && valor2){
        var soma = valor1 + valor2;
        alert(soma)
    }else{
        alert("Adicione os valores nos campos")
    }
}