const countLuas = () => {
  var a = document.getElementById("InputLuas").value;
  if ( a === ""){
    document.getElementById("OutputLuas").innerHTML = "Masukkan panjang persegi";
  }
  else{
    var rumus = parseInt(a) * parseInt(a);
    document.getElementById("OutputLuas").innerHTML = rumus;
  }
}

const countKeliling = () => {
  var a = document.getElementById("InputKeliling").value;
  if ( a === ""){
    document.getElementById("OutputKeliling").innerHTML = "Masukkan panjang persegi";
  }
  else{
    var rumus = 4 * parseInt(a);
    document.getElementById("OutputKeliling").innerHTML = rumus;  
  }
}

function LuasPage() {
    var x = document.getElementById("WrapLuas");
    var y = document.getElementById("WrapKeliling");
    x.style.display = "block";
    y.style.display = "none";
  }

function KelPage() {
    var x = document.getElementById("WrapLuas");
    var y = document.getElementById("WrapKeliling");
    y.style.display = "block";
    x.style.display = "none";
  }

