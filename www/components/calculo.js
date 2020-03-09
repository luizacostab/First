// This is a JavaScript file
//essa função anonima só funciona num moneto específico. Não precisa ser chamada
$(document).on("click","#calcular",function(){
    var valor1 = $("#n1").val(); 
    var valor2 = $("#n2").val();
    var result = parseFloat(valor1) + parseFloat(valor2);
    $("#result").val(result);
});