import Spaceship from "./spaceship"
import { SpaceshipEngine } from "./spaceship-engine"

const sophia = new Spaceship("Sophia", 10, 5)
const amsterdam = new Spaceship("Amsterdam", 14, 10)
const dwarfStar = new Spaceship("Estrela-Anã", 20, 4)

const sophiaEngine = new SpaceshipEngine(sophia)
const amsterdamEngine = new SpaceshipEngine(amsterdam)
const dwarfStarEngine = new SpaceshipEngine(dwarfStar)

sophiaEngine.turnOn()
amsterdamEngine.turnOn()
dwarfStarEngine.turnOn()

console.log("Promises")