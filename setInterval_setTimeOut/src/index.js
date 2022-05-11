import 'core-js'
import 'regenerator-runtime/runtime'

let timeoutID = setTimeout(() => { // faz com que determinada função aguarde um tempo para ser executada, e sempre retorna um id da operação
    console.log("Executando após 2 segundos")
}, 2000)

clearTimeout(timeoutID)

let second = 0

let intervalId = setInterval(() => { // faz com que derteminada função ocorra a cada intervalo de tempo, também retorna um id
    second += 2
    console.log(`Executando após ${second} segundos`)
    if(second >= 10) {
        console.log("Finalizando intervalo")
        clearInterval(intervalId)
    }
}, 2000);