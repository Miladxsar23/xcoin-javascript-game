/**
 * The state is all about things that change over time
 * ++++++++ level of game
 * ++++++++ actors of game
 * ++++++++ status of game
 *          | _ _ _ playing
 *          | _ _ _ lost
 *          | _ _ _ win
 */

class State {
  constructor(level, actors, status) {
    this.level = level;
    this.actors = actors;
    this.status = status;
  }
  static start(level) {
    return new State(level, level.startActors, "playing");
  }
  get player() {
    return this.actors.find((a) => a.type === "player");
  }
}
export default State;
