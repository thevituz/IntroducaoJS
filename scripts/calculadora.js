function somar() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let soma = parseFloat(num1) + parseFloat(num2);
    document.getElementById("resultado").innerHTML = "Resultado: " + soma;
}

function subtrair() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let subtracao = parseFloat(num1) - parseFloat(num2);
    document.getElementById("resultado").innerHTML = "Resultado: " + subtracao;
}

function multiplicar() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let multiplicacao = parseFloat(num1) * parseFloat(num2);
    document.getElementById("resultado").innerHTML = "Resultado: " + multiplicacao;
}

function dividir() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    if (parseFloat(num2) === 0) {
        document.getElementById("resultado").innerHTML = "Erro: Divisão por zero!";
    } else {
        let divisao = parseFloat(num1) / parseFloat(num2);
        document.getElementById("resultado").innerHTML = "Resultado: " + divisao;
    }
}
