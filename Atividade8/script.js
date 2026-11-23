function sorte(){
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);

    let mostrar = document.getElementById('resultado');

    if(num > 50){
        contasorte++;
        mostrar.innerHTML =`<img src="https://youtooz.com/cdn/shop/files/6c5u5l5c5h.png?v=1766003656">`;
    }else{
        contaazar++;
        mostrar.innerHTML = `<img src="https://media.tenor.com/jfXbLdz6_zEAAAAM/the-amazing-world-of-gumball.gif">`;
    }
}