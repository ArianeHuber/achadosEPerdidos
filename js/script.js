function mensagem(){
	alert("Sua mensagem foi enviada com sucesso!");
}
function agradecimento(){
	alert("Agradecemos o seu contato ;)");
}


var swiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView:'auto', //slides por tela
    spaceBetween:5,  //espaço entre as imagens
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
     },
    breakpoints:{
      767: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      430:{
        slidesPerView: 1.2,
        spaceBetween: 2
      }
        }
  }) 



function mouseOver() {
  document.getElementById("redes").style.color = "red";
}

function mouseOut() {
  document.getElementById("demo").style.color = "black";
}