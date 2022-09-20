const linhasElementos = document.querySelectorAll('[data-linha]');

let vezDoCirculo = false;

const marcando = (linha, adicionar) =>{
    linha.classList.add(adicionar);
}

const mudarSimbolo = () =>{
    vezDoCirculo =! vezDoCirculo;
}

const clicar = (e) => {
    //colocar o x ou o circulo
    const linha = e.target;
    const adicionar = vezDoCirculo ? "circulo" : "x";
    
    marcando(linha,adicionar);

    //mudar o simbolo

    mudarSimbolo();
}

for (const linha of linhasElementos){
    linha.addEventListener('click', clicar, {once:true});
}

