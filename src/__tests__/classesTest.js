import {
  Bowman,
  Daemon,
  Magician,
  Swordsman,
  Undead,
  Zombie,
} from "../classes.js";

test.each([
  [
    "invalid name input: less then 2",
    ["B", "Bowman", 100, 1, 10, 10],
    "The name must be at least 2 and no more than 10 characters",
  ],
  [
    "invalid name input: more then 10",
    ["B", "Bowman", 100, 1, 10, 10],
    "The name must be at least 2 and no more than 10 characters",
  ],
  [
    "invalid type input: not in the list: Bowman, Swordsman, Magician, Daemon, Undead, Zombie",
    ["Bowman", "Lulu", 100, 1, 10, 10],
    "The type must be one of the list: Bowman, Swordsman, Magician, Daemon, Undead, Zombie",
  ],
])("testing working status with %s", (_, imported, expected) => {
  expect(() => new Bowman(...imported)).toThrow(expected);
});

test.each([
  [
    "all classes",
    [
      new Bowman("Bowman", "Bowman"),
      new Daemon("Daemon", "Daemon"),
      new Magician("Magician", "Magician"),
      new Swordsman("Swordsman", "Swordsman"),
      new Undead("Undead", "Undead"),
      new Zombie("Zombie", "Zombie"),
    ],
    [
      {
        name: "Bowman",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        name: "Daemon",
        type: "Daemon",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      },
      {
        name: "Magician",
        type: "Magician",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      },
      {
        name: "Swordsman",
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: "Undead",
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        name: "Zombie",
        type: "Zombie",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ],
  ],
])("testing working status of %s", (_, imported, expected) => {
  expect(imported).toEqual(expected);
});
