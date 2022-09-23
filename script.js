const linhasElementos = document.querySelectorAll('[data-linha]');
const conteiner = document.querySelector('[data-conteiner]');

let vezDoCirculo;

const combinacaoDeVitoria = [
    [0, 1, 2],
    [3, 4 ,5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const comecarJogo = () => {
    for (const linha of linhasElementos){
        linha.addEventListener('click', clicar, {once:true});
    }
    vezDoCirculo = false;
    conteiner.classList.add('x');
}

const checandoVitoria = (jogadorAtual) => {
    combinacaoDeVitoria.some(combinacao => {
        return combinacao.every(index => {
            return conteiner[index].classList.conteins(jogadorAtual);
        })
    })
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

    // Verificação de vitória
    const vitoria = checandoVitoria();
    if(vitoria){
        console.log("ganhei!!")
    }

    //mudar o simbolo

    mudarSimbolo();
}

comecarJogo();

