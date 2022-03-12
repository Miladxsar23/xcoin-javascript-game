/**
 * run app function
 */
import GAME_LEVELS from "./_GAME_LEVELS";
import runLevel from "./_runLevel";
import Level from "./_level";
import '../styles/app.css'
async function runGame(plan) {
  let lives = 3;
  for (let level = 0; level < plan.length && lives > 0; ) {
    console.log(`level ${level + 1} and lives is : ${lives}`);
    let status = await runLevel(new Level(plan[level]));
    console.log(status);
    if (status === "won") level++;
    else if (lives === 1) {
      lives = 3;
      level = 0;
    }
    else lives--;
  }
  console.log("you win");
}
runGame(GAME_LEVELS);
