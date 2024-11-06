// alert('Olá, Mundo!');

let Menu = false;

function menu(){
    if(Menu == false){
        window.document.getElementById('celular-520px').style.left = '0px';
        Menu = true;
    }else{
        window.document.getElementById('celular-520px').style.left = '-500px'
        Menu = false;
    }
}

function fecharMenu(){
    window.document.getElementById('celular-520px').style.left = '-500px'
    Menu = false;
}