let vitoriasJogador = 0;
let vitoriasMaquina = 0;

function comparaJogada(jogador, maquina){
    //window.alert("jogada player = "+ jogador + "jogada Maquina "+maquina);
    let vencedor;
    switch(jogador){
        case "pedra" :
            switch(maquina){
                case "papel" :
                    vencedor = "O vencedor e a maquina.";
                    vitoriasMaquina += 1;
                    break;

                case "pedra" :
                    vencedor = "Empate.";
                    break;

                case "tesoura" :
                    vencedor = "O vencedor e a Jogador.";
                    let vitoriasJogador = 0;
                    break;

                default :
                    window.alert("erro na comparacao 1");
                    break;
            };
            break;

        case "papel" :
            switch(maquina){
                case "papel" :
                    vencedor = "Empate.";
                    break;

                case "pedra" :
                    vencedor = "O vencedor e a Jogador.";
                    let vitoriasJogador = 0;
                    break;

                case "tesoura" :
                    vencedor = "O vencedor e a maquina.";
                    vitoriasMaquina += 1;
                    break;

                default :
                    window.alert("erro na comparacao 2");
                    break;
            };
            break;

        case "tesoura" :
            switch(maquina){
                case "papel" :
                    vencedor = "O vencedor e a Jogador.";
                    let vitoriasJogador = 0;
                    break;

                case "pedra" :
                    vencedor = "O vencedor e a maquina.";
                    vitoriasMaquina += 1;
                    break;

                case "tesoura" :
                    vencedor = "Empate.";

                default :
                    window.alert("erro na comparacao 3");
                    break;
            };
            break;

            default :
            window.alert("erro na comparacao 4");
            break;
    }
    return vencedor;
};

function escolhaDoComputador(){
    const jogadas = ["pedra","papel","tesoura"];
    return jogadas[parseInt(Math.random()*3)];

}

function escolhaDoJogador(){
    return window.prompt("Digite sua jogada").toLowerCase();
}

function iniciaJogo(){
    vitoriasJogador = 0;
    vitoriasMaquina = 0;
    do{
        let jogadaUsuario = escolhaDoJogador();
        if(!(jogadaUsuario == "pedra" || jogadaUsuario == "tesoura" || jogadaUsuario == "papel")){
            window.alert("Escolha invalida insira novamente");
            return null;
        }
        //window.alert(jogadaUsuario);
        
        let jogadaComputador = escolhaDoComputador();
        //window.alert("jogada da maquina "+ jogadaComputador);

        let resultado = comparaJogada(jogadaUsuario, jogadaComputador);

        window.alert("A escolha da maquina foi : "+jogadaComputador + "\n" + resultado);

    }while(vitoriasJogador<2 && vitoriasMaquina<2);
    if(vitoriasJogador > vitoriasMaquina){
        window.alert("Vitoria do jogador");
    }
    else{
        window.alert("Vitoria da maquina");
    };
};