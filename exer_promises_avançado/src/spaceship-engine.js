export class SpaceshipEngine {
    constructor(spaceship) {
        this.spaceship = spaceship
    }
    turnOn() {
        let chargeChecking = this.checkBatteryCharge()
        let shieldChecking = this.checkShield()
        Promise.all([chargeChecking, shieldChecking]).then((results) => {
            return this.shieldNormalizer(results[1])
        }).then(newShield => {
            this.spaceship.shield = newShield
            console.log(`(${this.spaceship.name}) Partida autorizada: escudo ${this.spaceship.shield} - Carga(${this.spaceship.batteryCurrentCapacity}GJ) `)
        }).catch((err) => {
            console.log(`(${this.spaceship.name}) Partida não autorizada: ${err}` )
        });
    }

    checkBatteryCharge () {
        return new Promise ((resolve, reject) => {
            let currentCharge = this.spaceship.PERCENT_CURRENT_BATTERY
            if(currentCharge >= 30) {
                resolve(currentCharge)
            } else {
                reject(`Carga em apenas: ${currentCharge}%`)
            }
        })
    }

    checkShield () {
        return new Promise((resolve, reject) => {
            let doubleShield = this.spaceship.shield * 2
            if(doubleShield >= 100) {
                resolve(doubleShield)
            } else {
                reject("Escudo com sobrecarga!")
            }
        })
    }

    shieldNormalizer (shield) {
        return new Promise((resolve, reject) => {
            let normalizedShield = shield * 0.7
            if(normalizedShield >= 120) {
                reject("Escudo com supercarga!")
            } else {
                resolve(normalizedShield)
            }
        })
    }
}