class Spaceship {
    constructor(name, batteryMaxCapacity, batteryCurrentCapacity) {
        this.name = name
        this.batteryMaxCapacity = batteryMaxCapacity
        this.batteryCurrentCapacity = batteryCurrentCapacity
    }

    get PERCENT_CURRENT_BATTERY () {
        return this.batteryCurrentCapacity * 100 / this.batteryMaxCapacity
    }
}

export default Spaceship