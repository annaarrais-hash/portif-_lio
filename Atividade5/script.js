function maior() {
    let numero1;
    let numero2;

    numero1 = Number(prompt("Digita o primeiro número:"));
    numero2 = Number(prompt("Digite o segundo número:"));

        if(numero1 > numero2) {
        alert(" O número " + numero1 + " é maior que o número " + numero2 + " pegou? ");
}
else if(numero1 < numero2) {
    alert(" O número " + numero1 + " é menor que o número " + numero2 + " pegou? ");
}else{
    alert("Os numeros são iguais, dai não dá né animal");
}


}