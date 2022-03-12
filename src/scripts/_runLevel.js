/**
 * run level function
 */
import DOMDisplay from "./_DOMDisplay";
import runAnimation from "./_runAnimation";
import State from "./_state";
import arrowKeys from "./_trackKeys";
function runLevel(level) {
  const mountPoint = document.querySelector("#root")
  let display = new DOMDisplay(mountPoint, level);
  let state = State.start(level);
  let ending = 1;
  return new Promise((resolve, reject) => {
    runAnimation((time) => {
      state = state.update(time, arrowKeys);
      display.syncState(state);
      if (state.status === "playing") return true;
      else if (ending > 0) {
        ending -= time;
        return true;
      } else {
        display.clear();
        resolve(state.status);
        return false;
      }
    });
  });
}

export default runLevel;
