
/**
 * @param {arrowKeys} keys
 * @returns {down}
 */

function trackKeys(keys) {
  const down = Object.create(null);
  function track(event) {
    if (keys.includes(event.key) && event.key !== "Escape") {
      down[event.key] = event.type === "keydown";
      event.preventDefault();
    }
  }
  window.addEventListener("keydown", track);
  window.addEventListener("keyup", track);
  down.unRegistered = () => {
    window.removeEventListener("keydown", track)
    window.removeEventListener("keyup", track)
  }
  return down;
}

export default trackKeys;
