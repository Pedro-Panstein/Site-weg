const setor = document.getElementById("setor");

setor.addEventListener("click", function(){

    window.location.href="setor.html"

});

const metas = document.getElementById("metas");

metas.addEventListener("click", function(){

    window.location.href="metas.html"

});

const datas = document.getElementById("datas");

datas.addEventListener("click", function(){

    window.location.href="datas.html"

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