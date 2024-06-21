class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    ataquemago(){
        console.log(`O herói ${this.nome} com a idade ${this.idade} do tipo ${this.tipo} atacou usando magia`)

    }
    ataqueMonge(){
        console.log(`O herói ${this.nome} com a idade ${this.idade} ${this.tipo} atacou usando artes marciais`)
    }
    ataqueGuerreiro(){
        console.log(`O herói ${this.nome} com a idade ${this.idade} do tipo ${this.tipo} atacou usando espadas`)
    }
    ataqueNinja(){
        console.log(`O herói ${this.nome} com a idade ${this.idade} do tipo ${this.tipo} atacou usado Shuriken`)
    }
}
let mago = new heroi("Pedro", 21, "mago")
let monge = new heroi("John", 22, "Monge")
let guerreiro = new heroi("Astolfo", 45, "Guerreiro")
let ninja = new heroi("Black", 27, "Ninja")

mago.ataquemago()
monge.ataqueMonge()
guerreiro.ataqueGuerreiro()
ninja.ataqueNinja()
