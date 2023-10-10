//incializacion de variables
let botones=document.getElementsByClassName('boton')
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
//tiempo
let segundos=0
let minutos=0
let horas=0


//desorganizar arreglo
numeros.sort(()=> Math.random()-0.5)
console.log(numeros)

//logica del juego
for(let i=0;i<botones.length;i++){
botones[i].addEventListener('click', ()=>{
    if(abierto==null){
        temporizador() // para que si presiona boton
    }
    abierto++
    
    if(abierto==1){
        posicion=Array.from(botones).indexOf(event.target)// recuperar posicion del elemento presionddo
        console.log(posicion)
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
    console.log(abierto)
} )
}

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
