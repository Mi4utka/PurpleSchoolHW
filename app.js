// eslint-disable-next-line max-classes-per-file
class Hero {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  talk() {
    console.log(`${this.race} - ${this.language}`);
  }
}
class Elf extends Hero {
  constructor(race, name, language, spell) {
    super(race, name, language);
    this.spell = spell;
  }

  talk() {
    console.log(`My name is ${this.name}`);
  }

  magic() {
    console.log(this.spell);
  }
}
class Ork extends Hero {
  constructor(race, name, language, sword) {
    super(race, name, language);
    this.sword = sword;
  }

  talk() {
    console.log(`My second name is ${this.name}`);
  }

  damage() {
    console.log(this.sword);
  }
}
