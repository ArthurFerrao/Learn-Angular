import {Milenium} from './fighters'
import {Spacecraft, Containership} from './baseShips'

import * as _ from "lodash"
console.log(_.pad("TypeScript", 40, "-"))

let nave = new Spacecraft('HyperDrive')
nave.jumpIntoHyperSpace()

let nave2 = new Milenium(3)
nave2.jumpIntoHyperSpace()

let goodForJob  = (nav: Containership) => nav.cargoContainers > 3
console.log(`Tem ${nave2.cargoContainers} containers`)
console.log(`É boa? ${goodForJob(nave2)}`)