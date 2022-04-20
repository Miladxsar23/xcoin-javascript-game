/**
 * all refrence of charaacter in level
 */

import Coin from "./_coin";
import Lava from "./_lava";
import Player from "./_player";
import Monster from "./_monster";
const levelChars = {
  ".": "empty",
  "+": "lava",
  "=": Lava,
  "|": Lava,
  "v": Lava,
  "#": "wall",
  "@": Player,
  "o": Coin,
  "M" : Monster
};
export default levelChars;