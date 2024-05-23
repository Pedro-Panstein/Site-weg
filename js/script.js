
const metas = document.getElementById("metas");

metas.addEventListener("click", function(){
    
    window.location.href="metas.html"
    
});

const datas = document.getElementById("datas");

datas.addEventListener("click", function(){
    
    window.location.href="datas.html"
    
});

const novidades = document.getElementById("novidades");

novidades.addEventListener("click", function(){
    
    window.location.href="novidade.html"
    
});

const noticias = document.getElementById("noticias");

noticias.addEventListener("click", function(){
    
    window.location.href="noticia.html"
    
});

const avisos = document.getElementById("avisos");

avisos.addEventListener("click", function(){

    window.location.href="avisos.html"
    
});

const eventos = document.getElementById("eventos");

eventos.addEventListener("click", function(){
    
    window.location.href="eventos.html"
    
});

const aniversario = document.getElementById("aniversario");

aniversario.addEventListener("click", function(){
    
    window.location.href="aniversariantes.html"
    
});

const setor = document.getElementById("setor");

setor.addEventListener("click", function(){

    window.location.href="setor.html"

});

const cardapio = document.getElementById("cardapio");

cardapio.addEventListener("click", function(){
    
    window.location.href="cardapio.html"
    
});

const curiosidade = document.getElementById("curiosidade");

curiosidade.addEventListener("click", function(){
    
    window.location.href="curiosidade.html"
    
});

const contrato = document.getElementById("contrato");

contrato.addEventListener("click", function(){
    
    window.location.href="contrato.html"
    
});

const saude = document.getElementById("saude");

saude.addEventListener("click", function(){
    
    window.location.href="saude.html"
    
});

const feedback = document.getElementById("feedback");

feedback.addEventListener("click", function(){
    
    window.location.href="feedback.html"
    
});

const acidente = document.getElementById("acidente");

acidente.addEventListener("click", function(){
    
    window.location.href="acidente.html"
    
});

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "image/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "image/close_white_36dp.svg";
    }
}