/**
 * track keys event
 */
const arrowKeys = trankKeys(["ArrowLeft", "ArrowRight", "ArrowUp"]);

/**
 * @param {arrowKeys} keys
 * @returns {down}
 */

function trankKeys(keys) {
  const down = Object.create(null);
  function track(event) {
    if (keys.includes(event.key)) {
      down[event.key] = event.type === "keydown";
      event.preventDefault();
    }
  }
  window.addEventListener("keydown", track);
  window.addEventListener("keyup", track);
  return down;
}

export default arrowKeys;
