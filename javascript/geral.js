// alert('Olá, Mundo!');
let figureFotoDesenvolvedor260px = window.document.getElementById('figura-foto-desenvolvedor-260px');
let figcaptionLegendaDesenvolvedor260px = window.document.getElementById('legenda-desenvolvedor-260px');
let Menu = false;

figureFotoDesenvolvedor260px.addEventListener('mouseover', moverFotoDesenvolvedor260px)
figureFotoDesenvolvedor260px.addEventListener('mouseout', tirarmouseFotoDesenvolvedor260px)

function moverFotoDesenvolvedor260px(){
    figcaptionLegendaDesenvolvedor260px.style.opacity = 1;
}

function tirarmouseFotoDesenvolvedor260px(){
    figcaptionLegendaDesenvolvedor260px.style.opacity = '0'
}

function menu(){
    if(Menu == false){
        window.document.getElementById('celular-520px').style.left = '0px';
        window.document.getElementsByTagName('main')[0].style.filter = 'blur(1px)';
        window.document.getElementById('cabecalho').style.filter = 'blur(1px)'
        window.document.getElementsByTagName('footer')[0].style.filter = 'blur(1px)'
        Menu = true;
    }else{
        window.document.getElementById('celular-520px').style.left = '-500px'
        window.document.getElementsByTagName('main')[0].style.filter = 'blur(0px)';
        window.document.getElementById('cabecalho').style.filter = 'blur(0px)'
        window.document.getElementsByTagName('footer')[0].style.filter = 'blur(0px)'
        Menu = false;
    }
}

function fecharMenu(){
    window.document.getElementById('celular-520px').style.left = '-500px'
    window.document.getElementsByTagName('main')[0].style.filter = 'blur(0px)';
    window.document.getElementById('cabecalho').style.filter = 'blur(0px)'
    window.document.getElementsByTagName('footer')[0].style.filter = 'blur(0px)'
    Menu = false;
}