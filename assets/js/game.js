var playerMoney = 10;
// player variables

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack =10;

// enemy variables

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");


};

fight();

var promtFight = window.prompt(" Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.") 

if (promtFight === "Fight" || promtFight === "FIGHT") { 

    enemyHealth=enemyHealth-playerAttack;
  
  console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

      if (enemyHealth <= 0) {
          window.alert( enemyName + " has died!")
      }

      else {
          window.alert( enemyName + " still has " + enemyHealth + " health left.")
      }


      playerHealth = playerHealth - enemyAttack;

      console.log(
          enemyName + " attacked" + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
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


