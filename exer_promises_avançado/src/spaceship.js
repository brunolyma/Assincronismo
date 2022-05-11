class Spaceship {
    constructor(name, batteryMaxCapacity, batteryCurrentCapacity, shield) {
        this.name = name
        this.batteryMaxCapacity = batteryMaxCapacity
        this.batteryCurrentCapacity = batteryCurrentCapacity
        this.shield = shield
    }

    get PERCENT_CURRENT_BATTERY () {
        return this.batteryCurrentCapacity * 100 / this.batteryMaxCapacity
    }
}

export default Spaceship