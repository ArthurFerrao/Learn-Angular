
class Spacecraft {
    constructor (public propulsor: string){}

    jumpIntoHyperSpace(){
        console.log(`Entrar no hyperspace com ${this.propulsor}`)
    }
}

interface Containership {
    cargoContainers: number
}

export {Spacecraft, Containership}