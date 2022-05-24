const começar = document.getElementById('começar')
const pausar = document.getElementById('pausar')
const parar = document.getElementById('parar')


let seg = 0;
let min = 0;
let hor = 0;
let intervalo;

function start(){
   intervalo = setInterval(contador, 1000)
};

function pause(){
    clearInterval(intervalo)
};

function stop(){
    clearInterval(intervalo)
    seg = 0;
    min = 0;
    hor = 0;
    document.getElementById('tempo').innerText='00:00:00'
};

function contador(){
    seg++;
    if(seg === 60){
        min++
        seg = 0;
    }else if(min === 60){
        hor++
        min = 0
        seg = 0
    }
    document.getElementById('tempo').innerText=hor + ':' + min + ':' + seg
};

começar.addEventListener('click', start)
pausar.addEventListener('click', pause)
parar.addEventListener('click', stop)
