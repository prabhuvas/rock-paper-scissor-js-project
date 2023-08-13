let playgame = confirm("Shall we play rock,paper,scissors");
if(playgame){
    let computer_mind = ["r", "p", "s", "R", "P", "S"];
let n = computer_mind.length;
let random = Math.floor(Math.random()*n);
console.log(computer_mind[random]);
let player = prompt("Enter r (or) p (or) s (or) R (or) P (or) S");
let a="r",b="p",c="s", h="R", i="P", j="S"; 
a===h;
b===i;
c===j;
let d="Tie Game", e="You Win", f="Computer Win", g="error";

switch(player){
    case a:
        alert((player===a && computer_mind[random]===a) ? d : (player===a && computer_mind[random]===b) ? f : (player===a && computer_mind[random]===c) ? e : 
        (player===a && computer_mind[random]===h) ? d : (player===a && computer_mind[random]===i) ? f : (player===a && computer_mind[random]===j) ? e : "error" );
        break;
    
    case b:
        alert((player===b && computer_mind[random]===b) ? d : (player===b && computer_mind[random]===a) ? e : (player===b && computer_mind[random]===c) ? f : 
        (player===b && computer_mind[random]===i) ? d : (player===b && computer_mind[random]===h) ? e : (player===b && computer_mind[random]===j) ? f : "error" );
        break;

    case c:
        alert((player===c && computer_mind[random]===c) ? d : (player===c && computer_mind[random]===a) ? f : (player===c && computer_mind[random]===b) ? e : 
        (player===c && computer_mind[random]===j) ? d : (player===c && computer_mind[random]===h) ? f : (player===c && computer_mind[random]===i) ? e : "error" );
        break;

    case h:
        alert((player===h && computer_mind[random]===a) ? d : (player===h && computer_mind[random]===b) ? f : (player===h && computer_mind[random]===c) ? e : 
        (player===h && computer_mind[random]===h) ? d : (player===h && computer_mind[random]===i) ? f : (player===h && computer_mind[random]===j) ? e : "error" );
        break;

    case i:
        alert((player===i && computer_mind[random]===b) ? d : (player===i && computer_mind[random]===a) ? e : (player===i && computer_mind[random]===c) ? f : 
        (player===i && computer_mind[random]===i) ? d : (player===i && computer_mind[random]===h) ? e : (player===i && computer_mind[random]===j) ? f : "error" );
        break;

    case j:
        alert((player===j && computer_mind[random]===c) ? d : (player===j && computer_mind[random]===a) ? f : (player===j && computer_mind[random]===b) ? e : 
        (player===j && computer_mind[random]===j) ? d : (player===j && computer_mind[random]===h) ? f : (player===j && computer_mind[random]===i) ? e : "error" );
        break;

    default:
        alert("You entered wrong input");
        break;
}
document.write("<li>You entered "+ "\"" +  player + "\""+" <br><br></li>");
document.write("<li>Computer choosed " +  "\"" + computer_mind[random]+  "\"" + " <br></li>");
}
else{
    alert("ok, May be next time");
}

