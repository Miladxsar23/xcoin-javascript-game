/**
 * run level function
 */
// import DOMDisplay from "./_DOMDisplay";
import CanvasDisplay from "./_canvasDisplay";
import runAnimation from "./_runAnimation";
import State from "./_state";
import trackKeys from "./_trackKeys";
function runLevel(level) {
  const mountPoint = document.querySelector("#root");
  let display = new CanvasDisplay(mountPoint, level);
  let state = State.start(level);
  let ending = 1;
  return new Promise((resolve, reject) => {
    function trackEsc(evt) {
      if (evt.key === "Escape") {
        arrowKeys["Escape"] = !arrowKeys["Escape"];
        evt.preventDefault();
      }
    }
    const arrowKeys = trackKeys(["ArrowUp", "ArrowLeft", "ArrowRight"]);
    window.addEventListener("keydown", trackEsc);
    runAnimation((time) => {
      if (!arrowKeys["Escape"]) {
        state = state.update(time, arrowKeys);
        display.syncState(state);
      }
      if (state.status === "playing") return true;
      else if (ending > 0) {
        ending -= time;
        return true;
      } else {
        display.clear();
        resolve(state.status);
        window.removeEventListener("keydown", trackEsc);
        arrowKeys.unRegistered();
        return false;
      }
    });
  });
}

export default runLevel;
