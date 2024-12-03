// alert('Olá, Mundo!');
let figureFotoDesenvolvedor260px = window.document.getElementById('figura-foto-desenvolvedor-260px');
let figcaptionLegendaDesenvolvedor260px = window.document.getElementById('legenda-desenvolvedor-260px');
let conteudoHora = window.document.getElementById('conteudo-hora');
let hora = new Date().getHours();
let Menu = false;

figureFotoDesenvolvedor260px.addEventListener('mouseover', moverFotoDesenvolvedor260px)
figureFotoDesenvolvedor260px.addEventListener('mouseout', tirarmouseFotoDesenvolvedor260px)

if(hora < 12){
    conteudoHora.innerHTML = 'Muito Bom Dia, Caríssimo Visitante!';
    conteudoHora.style.color = '#8C6330';
}else if(hora < 18){
    conteudoHora.innerHTML = 'Muito Boa Tarde, Caríssimo Visitante!';
    conteudoHora.style.color = '#03588C';
}else if(hora >= 18){
    conteudoHora.innerHTML = 'Muito Boa Noite, Caríssimo Visitante!';
    conteudoHora.style.color = '#023859';
}

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