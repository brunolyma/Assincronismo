export class SpaceshipEngine {
  constructor(spaceship) {
    this.spaceship = spaceship;
  }
  async turnOn() {
    try {
      let chargeChecking = this.checkBatteryCharge();
      let shieldChecking = this.checkShield();
      let results = await Promise.all([chargeChecking, shieldChecking]);
      this.spaceship.shield = await this.shieldNormalizer(results[1]);
      console.log(
        `(${this.spaceship.name}) Partida autorizada: escudo ${this.spaceship.shield} - Carga(${this.spaceship.batteryCurrentCapacity}GJ) `
      );
    } catch (err) {
      console.log(`(${this.spaceship.name}) Partida não autorizada: ${err}`);
    }
  }

  async checkBatteryCharge() {
    let currentCharge = this.spaceship.PERCENT_CURRENT_BATTERY;
    if (currentCharge < 30) {
      return Promise.reject(`Carga em apenas: ${currentCharge}%`);
    }
    return currentCharge;
  }

  async checkShield() {
    let doubleShield = this.spaceship.shield * 2;
    if (doubleShield < 100) {
      return Promise.reject("Escudo com sobrecarga!");
    }
    return doubleShield;
  }

  async shieldNormalizer(shield) {
    let normalizedShield = shield * 0.7;
    if (normalizedShield > 120) {
      return Promise.reject("Escudo com supercarga!");
    }
    return normalizedShield;
  }
}
