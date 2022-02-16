import levelChars from "./_levelchars";
/*
 * '.' -> space
 * '#' -> wall
 * '+' -> lava
 *********'=' -> horizontal Lava
 *********'|' -> vertical Lava
 *********'v' -> bang Lava (just vertical)
 * '@' -> player
 * 'o' -> coin
 */
/******************** *levelChars This object tells us what each character in our stage is,
 * whether it is an object or a string, or in other words a static
 * character or a motion character ***************************/

// create level class
class Level {
  constructor(plan) {
    let row = plan
      .trim()
      .split("\n")
      .map((l) => [...l]);
    this.width = row[0].length;
    this.height = row.length;
    this.startActors = [];
    this.rows = rows.map((row, y) => {
      return row.map((ch, x) => {
        /**array of string array containt 'empty' | 'Lava' | 'wall' */
        let type = levelChars[ch]; /* String | Object */
        if (typeof type === "string" /*static character in game */) return type;
        else {
          /*dynamic character in game which a instance of special class */
          this.startActors.push(type.create(new Vec(x, y), ch));
          return "empty";
        }
      });
    });
  }
}
export default Level;
