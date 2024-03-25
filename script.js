function buscarTemtem() {
  var temtemNumber = document.getElementById('temtemNumber').value;
  if(temtemNumber == ""){
    document.getElementById('error').innerHTML = "Insira um Número!";
    document.querySelector('.status').style.display = "none";
    document.querySelector(".img").style.display = "none";
  }else{
    var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://temtem-api.mael.tech/api/temtems/' + temtemNumber, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        document.getElementById('error').innerHTML = ""
        document.querySelector('.status').style.display = "flex";
        var data = JSON.parse(xhr.responseText);

        document.getElementById('nome').innerText = data.name;
        document.getElementById('tipagem').innerText = data.types.join(', ');
        document.getElementById('hp').innerText = data.stats.hp;
        document.getElementById('sta').innerText = data.stats.sta;
        document.getElementById('spd').innerText = data.stats.spd;
        document.getElementById('atk').innerText = data.stats.atk;
        document.getElementById('def').innerText = data.stats.def;
        document.getElementById('spatk').innerText = data.stats.spatk;
        document.getElementById('spdef').innerText = data.stats.spdef;
        document.getElementById('total').innerText = data.stats.total;

        document.querySelector(".img").style.display = "inline";
        var imgElement = document.querySelector('.img');
        imgElement.style.backgroundImage = "url('" + data.portraitWikiUrl + "')";
      } else {
        document.getElementById('error').innerHTML = "Temtem não encontrado"
        document.querySelector(".img").style.display = "none";
        document.querySelector('.status').style.display = "none";

        document.getElementById('nome').innerText = "";
        document.getElementById('tipagem').innerText = "";
        document.getElementById('hp').innerText = "";
        document.getElementById('sta').innerText = "";
        document.getElementById('spd').innerText = "";
        document.getElementById('atk').innerText = "";
        document.getElementById('def').innerText = "";
        document.getElementById('spatk').innerText = "";
        document.getElementById('spdef').innerText = "";
        document.getElementById('total').innerText = "";
      }
    }
  };
  xhr.send();
  }
  
}