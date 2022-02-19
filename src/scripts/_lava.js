/**
 * 3 type of Lava base on character type in constructor
 */

import Vec from "./_vec";

class Lava {
  constructor(pos, speed, reset) {
    this.pos = pos; /*position */
    this.speed = speed; /*speed */
    this.reset = reset; /*save previus position value for "V* type */
  }
  static create(pos, ch) {
    switch (ch /**based on character value */) {
      case "=":
        return new Lava(pos, new Vec(2, 0));
        break;
      case "|":
        return new Lava(pos, new Vec(0, 2));
        break;
      case "v":
        return new Lava(pos, new Vec(0, 1), pos /**previus position */);
        break;
    }
  }
  get type() {
    return "lava";
  }
}

Lava.prototype.size = new Vec(1, 1);

export default Lava;
