/**
 * run app function
 */
import GAME_LEVELS from "./_GAME_LEVELS";
import runLevel from "./_runLevel";
import Level from "./_level";
async function runGame(plan) {
  for (let level = 0; level < plan.length; ) {
    let status = await runLevel(new Level(plan[level]));
    console.log(status)
    if (status === "won") level++;
  }
  console.log("you win");
}
runGame(GAME_LEVELS);
