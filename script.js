const linhasElementos = document.querySelectorAll('[data-linha]');
const conteiner = document.querySelector('[data-conteiner]');

let vezDoCirculo;

const comecarJogo = () => {
    for (const linha of linhasElementos){
        linha.addEventListener('click', clicar, {once:true});
    }
    vezDoCirculo = false;
    conteiner.classList.add('x');
}

const marcando = (linha, adicionar) =>{
    linha.classList.add(adicionar);
}

const mudarSimbolo = () =>{
    vezDoCirculo =! vezDoCirculo;

    conteiner.classList.remove('circulo');
    conteiner.classList.remove('x');

    if(vezDoCirculo){
        conteiner.classList.add('circulo');
    } else{
        conteiner.classList.add('x');
    }
}

const clicar = (e) => {
    //colocar o x ou o circulo
    const linha = e.target;
    const adicionar = vezDoCirculo ? "circulo" : "x";
    
    marcando(linha,adicionar);

    //mudar o simbolo

    mudarSimbolo();
}

comecarJogo();

