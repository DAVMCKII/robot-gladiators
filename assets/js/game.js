// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
// player variables


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack =10;
var playerMoney = 10;

// enemy variables

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log (enemyNames);
console.log(enemyNames.length)


for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }




var fight = function(enemyNames) {
    window.alert("Welcome to Robot Gladiators!");
var promtFight = window.prompt(" Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.") 

if (promtFight === "Fight" || promtFight === "FIGHT") { 

    enemyHealth=enemyHealth-playerAttack;
  
  console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");

      if (enemyHealth <= 0) {
          window.alert( enemyNames + " has died!")
      }

      else {
          window.alert( enemyNames + " still has " + enemyHealth + " health left.")
      }


      playerHealth = playerHealth - enemyAttack;

      console.log(
          enemyNames + " attacked" + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
      );
if( playerHealth<=0) {
    window.alert(playerName + " has died!")
}
else( window.alert(playerName + " still has " + playerHealth +" health left")
)

} else if (promtFight === "skip" || promtFight === "SKIP") {
    
    window.alert (playerName + " has chosen to skip the fight!");
    
    var confirmSkip = window.confirm(" Are you sure you'd like to quit?");

if(confirmSkip) {

    window.alert(playerName + " has decided to skip this fight. Goodbye!");

    playerHealth - 2;

}

    else {
        fight()
    }
}

 else {
    window.alert("You need to choose a valid option. Try again!")
}
}
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }



