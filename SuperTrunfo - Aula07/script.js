var carta1 = {
    nome:"Bulbasauro",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome:"Darth Vader",
    imagem: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/03/darth-vader-star-wars-1.jpg",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};

var carta3 = {
    nome:"Shiryu de dragão",
    imagem: "https://img.elo7.com.br/product/zoom/2B30956/poster-quadro-shiryu-de-dragao-30x42cm-nerd.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3);

    while(numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    
    console.log(cartaJogador);
    //exibirOpcoes();
    exibirCartaJogador();
}

function exibirOpcoes(){
    //var opcoes = document.getElementById("opcoes");
    // var opcoesTexto = "";

    // for(var atributo in cartaJogador.atributos){
    //     opcoesTexto += "<input type='radio' name='atributo' value='"+atributo+"'>"+atributo;
    // }
    //opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo");

    for(var i = 0; i < radioAtributos.length; i++){
        if(radioAtributos[i].checked == true){
            return radioAtributos[i].value;
        }
    }
}

function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");

    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if(valorCartaJogador > valorCartaMaquina){
        // elementoResultado.innerHTML = "Você venceu!";
        htmlResultado = "<p class='resultado-final'>Venceu</p>"
    }else if(valorCartaMaquina > valorCartaJogador){
        // elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior.";
        htmlResultado = "<p class='resultado-final'>Perdeu</p>"
    }else{
        // elementoResultado.innerHTML = "Empatou.";
        htmlResultado = "<p class='resultado-final'>Empatou</p>"
    }

    divResultado.innerHTML = htmlResultado;
    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina();


    console.log(cartaMaquina);
    
    // console.log(atributoSelecionado);
    // console.log(cartaJogador.atributos[atributoSelecionado]);
}
//console.log(carta1.atributos.ataque);
function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`; //o ${} indica que dentro da tag css ta mexendo com js
    //divCartaJogador.style.backgroundImage = "url("+cartaJogador.imagem+")"; 
    var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = "";

    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='"+atributo+"'>"+atributo+" "+cartaJogador.atributos[atributo]+"<br>";
    }
    var nome = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div';
}

function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`; 
    
    var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = "";

    for(var atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type='text' name='atributo' value='"+atributo+"'>"+atributo+" "+cartaMaquina.atributos[atributo]+"</p>";
    }
    var nome = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div';
}