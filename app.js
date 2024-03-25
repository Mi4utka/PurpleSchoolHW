const Hero = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};
Hero.prototype.speak = function () {
  console.log(this.language);
  console.log(this.name);
};

const Ork = function (race, name, language, weapon) {
  Hero.call(this, race, name, language);
  this.weapon = weapon;
};
Ork.prototype = Object.create(Hero.prototype);
Ork.prototype.constructor = Ork;

Ork.prototype.attack = function () {
  console.log('gg');
};

const Elf = function (race, name, language, spell) {
  Hero.call(this, race, name, language);
  this.spell = spell;
};
Elf.prototype = Object.create(Hero.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function () {
  console.log('nt');
};

const elf = new Elf('none', 'john', 'eng', 'fireball');
const ork = new Ork('none', 'Nikita', 'ru', 'sword');
ork.attack();
elf.createSpell();
