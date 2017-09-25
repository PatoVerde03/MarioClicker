  var coins = 0;
  var inventario = [0,0,0,0];
  var coinsProduce = [1,5,10,20];
  var precioProducto = [100,250,500,1000];

  function clic(){
    coins++;
  }

function producir(){
  for(contador=0; contador<inventario.length; contador++){
    coins += inventario[contador] * coinsProduce[contador]
  }
}

function comprar(objeto){
  if(coins >= precioProducto[objeto]){
  inventario[objeto]++;
  coins  -= precioProducto[objeto];
     }
  else{
    console.log("NO TIENES SUFICIENTES COINS");
  }
}

  function render(){
    document.getElementById("contador").innerHTML = coins;
    document.getElementById("inventario").innerHTML =
        `AutoJumpers: ${inventario[0]}<br>
         Goombas: ${inventario[1]}<br>
         Koopa Troopas: ${inventario[2]}<br>
         Monty Moles: ${inventario[3]}
  `;
  }
//----------------------------------------
  var FPSProduce = 1;

  setInterval(function(){
    producir();
  },1000/FPSProduce);




  var FPS = 300;

  setInterval(function(){
    render();
  },1000/FPS);
