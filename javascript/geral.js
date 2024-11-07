// alert('Olá, Mundo!');

let Menu = false;

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