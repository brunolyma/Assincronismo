const spaceship = {
    name: "Rontaro",
    currentBatteryCharge: 50,
    consumptionPerKms: 0.00020
}

const updateBaterryCharge = function (chargeConsumed) {
    return new Promise ((resolve, reject) => {
        spaceship.currentBatteryCharge -= chargeConsumed
        if(spaceship.currentBatteryCharge > 0) {
            resolve(spaceship.currentBatteryCharge)
        } else {
            reject("Bateria esgotada! Nave será desativada em alguns segundos.")
        }
    })
}

const calculateBaterryConsumption = function (velocity, seconds) {
    return new Promise ((resolve, reject) => {
        if(spaceship.consumptionPerKms <= 0 || velocity <= 0) {
            reject("Nave está parada")
        } else {
            let chargeConsumed = spaceship.consumptionPerKms * velocity * seconds
            resolve(chargeConsumed)
        }
    })
}

calculateBaterryConsumption(90, 300).then(chargeConsumed => {
    return updateBaterryCharge(chargeConsumed)
}).then(newCharge => {
    console.log(`Carga atual: ${newCharge}`)
}).catch(error => {
    console.log(error)
})