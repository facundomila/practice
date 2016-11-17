db.ref('noticias').on('value', function (snapshot) {
    var noticias = snapshot.val();

    renderNoticias(noticias);
});

var error = "Contraseña incorrecta";

window.onload = function (){

  if (name == "facumila") {
    document.getElementById('login').innerHTML = 'Bienvenido: '+ name;
  }
  else {
    document.getElementById('login').innerHTML = error;
  }
};

function renderNoticias(noticias) {
  document.getElementById('noticias').appendChild(document.createTextNode(''));

  noticias.forEach(function (noticia) {
    var node = document.createTextNode(noticia.titulo);

    document.getElementById('noticias').appendChild(node);
  });
}