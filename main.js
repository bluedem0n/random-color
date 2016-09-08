window.addEventListener("load", function() {

  var boton = document.getElementById("colores");
  boton.addEventListener("click", function(){

    var segundos = parseFloat(document.getElementById("segundos").value);
    setInterval(colorRandown,segundos*1000);

    function colorRandown(){
	  	document.body.style.backgroundColor ='#'+Math.floor(Math.random()*16777215).toString(16);
  	}

  });
});
