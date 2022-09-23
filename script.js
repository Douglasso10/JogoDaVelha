const linhasElementos = document.querySelectorAll('[data-linha]');
const conteiner = document.querySelector('[data-conteiner]');
const mensagem = document.querySelector('[data-mensagem]');
const mensagemTxt = document.querySelector('[data-mensagem-txt]');

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

const fimDeJogo = (empate) => {
    if(empate){
        mensagemTxt.innerText = "Empate";
    }else{
        mensagemTxt.innerText = vezDoCirculo ? 'Círculo Venceu!' : 'X Venceu!'
    }

    mensagem.classList.add('mostrarMensagem')
}

const checandoVitoria = (jogadorAtual) => {
    return combinacaoDeVitoria.some((combinacao) => {
        return combinacao.every((index) => {
            return linhasElementos[index].classList.contains(jogadorAtual);
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
    const vitoria = checandoVitoria(adicionar);
    if(vitoria){
        fimDeJogo(false);
    }

    //mudar o simbolo

    mudarSimbolo();
}

comecarJogo();

