//incializacion de variables
let botones=document.getElementsByClassName('button')
let move=document.getElementById('move')
let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
let movimientos=null
let time=document.getElementById('timer')
let aciertos=null
let tarjetaUno=null
let tarjetaDos=null
let primerResultado=null
let segundoResultado=null
let abierto=null
let acabado=false
let timer


//desorganizar arreglo
numeros.sort(()=> Math.random()-0.5)

//logica del juego
for(let i=0;i<botones.length;i++){
botones[i].addEventListener('click', ()=>{
    if(abierto==null){
        temporizador() // Manejo de error para que cada que presione un boton no llame el temporizador
    }
    abierto++
    
    if(abierto==1){
        posicion=Array.from(botones).indexOf(event.target)// recuperar posicion del elemento presionddo
        tarjetaUno=botones[posicion]
        primerResultado=numeros[posicion]
        tarjetaUno.innerHTML=primerResultado
        tarjetaUno.style.backgroundColor='#ffa500'
    }
    if(abierto==2){
        posicion=Array.from(botones).indexOf(event.target)
        tarjetaDos=botones[posicion]
        segundoResultado=numeros[posicion]
        tarjetaDos.innerHTML=segundoResultado
        tarjetaDos.style.backgroundColor='#ffa500'
        //movimientos
        movimientos++
        move.innerHTML=movimientos
        //comprobaciontos
        if(primerResultado==segundoResultado){
            if(abierto==2){
            abierto=0
            aciertos++
            tarjetaUno.style.backgroundColor='#BCCEDA'
            tarjetaDos.style.backgroundColor='#BCCEDA'
            if(aciertos==8){
                acabado=true
                clearInterval(timer)
            }
            }
        }else if(primerResultado!=segundoResultado){
            if(abierto==2){
                setTimeout(() => {
                    abierto=0
                    tarjetaUno.innerHTML=''
                    tarjetaDos.innerHTML=''
                    tarjetaUno.style.backgroundColor='#31485a'
                    tarjetaDos.style.backgroundColor='#31485a'
                }, 1000);
            }
        }
    }
} )
}

//tiempo
let segundos=0
let minutos=0
let horas=0

function temporizador(){
    timer=setInterval(() => {
        segundos++
        time.innerHTML=draw(segundos,minutos,horas)
            if(segundos==60){
                segundos=0
                minutos++
            }
            if(minutos==60){
                minutos=0
                horas++
            }
    }, 1000);
}
//dibujar el temporizador
function draw(s,m,h){
    if(s<10 && m<10){
        return `0:${h}:0${m}:0${s}`
    }else if(m<10){
        return `0${h}:0${m}:${s}`
    }
    if(s<10 && m>=10){
        return `0:${h}:${m}:0${s}`
    }else if(m>=10){
        return `0.${h}:${m}:${s}`
    }
}
//setinggs
let settings=document.getElementById('settings')
let settings_presionado=false
let main=document.getElementById('Main')
let footer=document.getElementById('Footer')
let restart=document.getElementById('Restart')
//llamar configuracion
    
settings.addEventListener('click',()=>{
    if(settings_presionado==false){
    cargarConfiguracion()
    document.body.removeChild(footer)
    }
    settings_presionado=true
})

function cargarConfiguracion() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'settings.html', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            main.innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}
