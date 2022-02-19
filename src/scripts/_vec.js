/**
 * 2d rendering target uses vector
 */
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(other) {
    /** A<vec> + B<vev> = (A.x + B.x, A.y + B.y)<vec>*/
    return new Vec(this.x + other.x, this.y + other.y);
  }
  times(factor) {
    return new Vec(this.x * factor, this.y * factor);
  }
}

export default Vec;
