//incializacion de variables
let botones=document.getElementsByClassName('boton')
let move=document.getElementById('move')
let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
let movimientos=null
let aciertos=null
let tarjetaUno=null
let tarjetaDos=null
let primerResultado=null
let segundoResultado=null
let abierto=null

numeros.sort(()=> Math.random()-0.5)
console.log(numeros)
for(let i=0;i<botones.length;i++){
botones[i].addEventListener('click', ()=>{
    abierto++
    
    if(abierto==1){
        posicion=Array.from(botones).indexOf(event.target)
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
