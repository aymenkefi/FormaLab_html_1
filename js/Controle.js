var n = Math.round(Math.random() * 100);
var ch = "yes";

do {
    var i = 1;
    var x = prompt("HEYYY§ GUESS THE NUMBER [1..100]  ", "");
    do {
        i=i+1;
        if (x==null) i=9;
        else{
        if (x > n) var x = prompt("YOUR NUMBER > TRY AGAIN ", "");
        if (x < n) var x = prompt("YOUR NUMBER < TRY AGAIN ", "");}
    } while ((i < 8) && (x != n));
    if (x == n) var ch = prompt("BRAVO ! WONNA PLAY AGAIN", "");
    else var ch = prompt("KHSARA ! WONNA PLAY AGAIN", "");
} while (ch == "yes");