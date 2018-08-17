import {Spacecraft, Containership} from './baseShips'

export class Milenium extends Spacecraft implements Containership{

    cargoContainers: number

    constructor (containers: number){
        super('HyperDrive')
        this.cargoContainers = containers
    }

    jumpIntoHyperSpace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperSpace()
        }else{
            console.log("Falha")
        }
    }

}


