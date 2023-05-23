export class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
    if (name.length > 2 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error(
        "The name must be at least 2 and no more than 10 characters"
      );
    }
    if (
      [
        "Bowman",
        "Swordsman",
        "Magician",
        "Daemon",
        "Undead",
        "Zombie",
      ].includes(type)
    ) {
      this.type = type;
    } else {
      throw new Error(
        "The type must be one of the list: Bowman, Swordsman, Magician, Daemon, Undead, Zombie"
      );
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

export class Bowman extends Character {
  constructor(name, type, health, level, attack = 25, defence = 25) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
export class Swordsman extends Character {
  constructor(name, type, health, level, attack = 40, defence = 10) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
export class Magician extends Character {
  constructor(name, type, health, level, attack = 10, defence = 40) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
export class Daemon extends Character {
  constructor(name, type, health, level, attack = 10, defence = 40) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
export class Undead extends Character {
  constructor(name, type, health, level, attack = 25, defence = 25) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}
export class Zombie extends Character {
  constructor(name, type, health, level, attack = 40, defence = 10) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}

// const bowerman = new Bowman("Bowman", "Bowman");
// const swordsman = new Swordsman("Swordsman", "Swordsman");
// const magician = new Magician("Magician", "Magician");
// const daemon = new Daemon("Daemon", "Daemon");
// const undead = new Undead("Undead", "Undead");
// const zombie = new Zombie("Zombie", "Zombie");
// console.log(new Bowman("Bowman", "Bowman"));
