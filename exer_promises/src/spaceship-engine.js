export class SpaceshipEngine {
    constructor(spaceship) {
        this.spaceship = spaceship
    }
    turnOn() {
        this.checkBatteryCharge().then((result) => {
            console.log(`(${this.spaceship.name}) Partida autorizada: Carga atual em ${result.toFixed()}%`)
        }).catch((err) => {
            console.log(err)
        });
    }

    checkBatteryCharge () {
        return new Promise ((resolve, reject) => {
            let currentCharge = this.spaceship.PERCENT_CURRENT_BATTERY
            if(currentCharge >= 30) {
                resolve(currentCharge)
            } else {
                reject(`(${this.spaceship.name}) Partida não autorizada: Carga da bateria abaixo da permitida para navegação!\nCarga atual: ${currentCharge}%`)
            }
        })
    }
}