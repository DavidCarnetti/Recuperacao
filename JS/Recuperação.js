const escolha = Number(prompt("Digit 1, 2, 3, 4 ou 5 para selecionar a questão que deseja ver a solução:"));




// QUESTAO 1 // Se 1 - Peça uma temperatura em graus Celsius e converta para Fahrenheit usando a fórmula: F = (9 * C + 160) / 5.
if (escolha == 1) {
    let celsius = parseFloat(prompt('Digite a temperatura em Celsius:'));
    let fahrenheit = (celsius * 9 / 5) + 32;
    alert(celsius + '°C é igual a ' + fahrenheit.toFixed(2) + '°F');
}



// QUESTAO 2 // Se 2 - Peça dois números e diga qual é o maior.
else if (escolha == 2) {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    // Compara os números e mostra qual é o maior
    if (numero1 > numero2) {
        alert("O maior número é: " + numero1);
    } else if (numero2 > numero1) {
        alert("O maior número é: " + numero2);
    } else {
        alert("Os dois números são iguais.");
    }
}



// QUESTAO 3 //Se 3 - Peça o peso de 5 pessoas e calcule a média dos pesos. (Utilize estrutura de repetição)
else if (escolha == 3) {
    let somaPesos = 0;

    // Loop para pedir o peso de 5 pessoas
    for (let i = 1; i <= 5; i++) {
        let peso = parseFloat(prompt("Digite o peso da pessoa " + i + " (em kg):"));
        somaPesos += peso;
    }

    // Calcula a média dos pesos
    let mediaPesos = somaPesos / 5;

    // Mostra o resultado
    alert("A média dos pesos é: " + mediaPesos.toFixed(2) + " kg");
}



// QUESTAO 4 //Se 4 - Peça três números e diga qual é o menor.
else if (escolha == 4) {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let numero3 = parseFloat(prompt("Digite o terceiro número:"));
    let menor = numero1;

    // Compara os números para encontrar o menor
    if (numero2 < menor) {
        menor = numero2;
    }
    if (numero3 < menor) {
        menor = numero3;
    }
    alert("O menor número é: " + menor);
}


// QUESTAO 5 //Se 5 -Peça a quantidade de termos da sequência de Fibonacci e imprima até esse termo.
else if (escolha == 5) {

    let n = parseInt(prompt("Digite a quantidade de termos da sequência de Fibonacci que deseja ver:"));
    let a = 0;
    let b = 1;

    for (let i = 1; i <= n; i++) {
        alert(a);
        let proximo = a + b;
        a = b;
        b = proximo;


    }




}