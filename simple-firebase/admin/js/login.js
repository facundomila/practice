var read = db.ref('users/facumila').on('value', function (snapshot) {
    return name = snapshot.val()
});

var error = "Contraseña incorrecta";

window.onload = function valid(){
  if (name == "admin000") {
    document.getElementById('login').innerHTML = 'pass: '+ name;
  }
  else {
    document.getElementById('login').innerHTML = error;
  };
}
