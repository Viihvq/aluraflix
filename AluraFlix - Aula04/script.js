// var listaFilmes = ["Yesterday","A chegada","Escola de Rock"]

// listaFilmes.push("Harry Potter")

// // document.write("<p>"+listaFilmes[3]+"</p>");
// // document.write("<p>"+listaFilmes[0]+"</p>");
// // document.write("<p>"+listaFilmes[1]+"</p>");
// // document.write("<p>"+listaFilmes[2]+"</p>");

// listaFilmes.push("HP 4")

// for(var indice = 0; indice<listaFilmes.length;indice++){
//     document.write("<p>"+listaFilmes[indice]+"</p>")
// }

// var listaFilmes = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM%40._V1_UY1200_CR89%2C0%2C630%2C1200_AL_.jpg"];

// for(var i = 0; i<listaFilmes.length; i++){
//  //    document.write("<img src="+listaFilmes[i]+">")
// }

function adicionarFilme(){
     var filmeFavorito = document.getElementById("filme").value;
     if(filmeFavorito.endsWith(".jpg")){
          listarFilmesNaTela(filmeFavorito);
     }else{
          console.error("Endereço de filme inválido");
     }
     
     filmeFavorito = "";
}

function listarFilmesNaTela(filmeFavorito){
     var elementoFilmeFavorito = "<img src="+filmeFavorito+">";
     var elementoListaFilmes = document.getElementById("listaFilmes");
     elementoListaFilmes.innerHTML += elementoFilmeFavorito;
}