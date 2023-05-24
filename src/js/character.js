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
