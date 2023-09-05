

class Character {
  // label all attributes
  // only if coming from postgres

  // create constructor
  constructor(
    name, 
    race,
    hp,
    attackBonus) {
    this.name = name;
    this.race = race;
    this.hp = hp;
    this.attackBonus = attackBonus;
  }

  // put in methods
  introduction() {
    console.log(`Hark and well met! My name is ${this.name}.`)
  }

  attack() {
    // execute an attack using bonus
    const attackRole = this.attackBonus + (Math.floor(Math.random() * 20))
    return console.log(`You hit for ${attackRole}!`);
  }

  takeDamage(dmg) {
    this.hp -= dmg;
    console.log(`Ouch! You took ${dmg} damage and your current hp is ${this.hp}.`);
  }

}

const Ragnar = new Character('Ragnar', 'Orc', 37, 2);
console.log('Ragnar:', Ragnar);
Ragnar.introduction();
Ragnar.attack();
Ragnar.takeDamage(10)
console.log('Ouch Ragnar:', Ragnar);
console.log('Ragner race:', Ragnar.race);



class Warlock extends Character {
  constructor(name, 
    race,
    hp,
    attackBonus,
    subclass, 
    spell, 
    familiar) {
      super(name, race, hp, attackBonus);
      this.subclass = subclass;
      this.spell = spell;
      this.familiar = familiar;
  }

  wizardChant() {
    console.log(`Fear me, for I am a ${this.subclass} warlock!`);
  }
}

const shosha = new Warlock('Shosha', 'Elf', 20, 3, 'Lich', 'Iron Eyes', 'Duncan the Cat');
console.log('Shosha:', shosha);
shosha.introduction();
shosha.wizardChant();

