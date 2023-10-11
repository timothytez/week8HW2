class character{
    name: string;
    weapon: string;
    attackMechanism: string;
    defenseMechanism: string;
    gold: number

    constructor(name: string, weapon: string, attackMechanisim: string, defenseMechanism: string, gold: number){
        this.name = name;
        this.weapon = weapon;
        this.attackMechanism = attackMechanisim
        this.defenseMechanism = defenseMechanism
        this.gold = 0
    }
    attack(): void{}
    defense(): void{}
    collectGold(): void{}
}

class Orges extends character{
    constructor(name:string){
        super(name, 'club', 'attack with Club', 'defend with shield', 0 );
    }
}

class Peons extends character{
    constructor(name:string){
        super(name, 'club', 'attacks with club', 'defend with shield', 0);
    }
}

class Knights extends character{
    constructor(name:string){
        super(name, 'sword', 'attack with sword', 'defend with armor', 0);
    }
}

class Archer extends character{
    constructor(name:string){
        super(name, 'bow and arrow', 'attack with bow and arrow', 'defend with tunic', 0);
    }
}

interface attackMechanisim{
    attack(): void
}

interface defenseMechanism{
    defense():  void
}

console.log()


///////////////////////
// class Orges extends character {
//     constructor() {
//         super(new attack(), new defense());
//     }
// }


// class Peon extends character {
//     constructor() {
//         super(new attack(), new defense());
//     }
// }

// class Knights extends character {
//     constructor() {
//         super(new attack(), new defense());
//     }
// }

// class Archer extends character {
//     constructor() {
//         super(new attack(), new defense());
//     }
// }

// /////////////////////////////

// class ClubAttack implements IAttackMechanism {
//     attack(): void {
//         console.log('Attacking with a club');
//     }
// }
// interface IAttackMechanism {
//     attack(): void;
// }
// class Peon extends RPGCharacter {
//     constructor() {
//         super(new ClubAttack(), new ShieldDefence());
//     }
// }