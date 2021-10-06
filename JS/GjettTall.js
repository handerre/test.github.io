window.onload = oppstart; //Aktiverer skriptet når siden lastes- https://www.w3schools.com/jsref/event_onload.asp
var hemmeligTall; //Oppretter variabel og kaller den hemmeligTall
var forsokIgjen; //Oppretter variabel og kaller den forsøk igjen

function oppstart() //Lager en funksjon - som er en samling av flere hendelser
{
    hemmeligTall = Math.floor(Math.random()*101); // Definerer at variabelen hemmeligTall skal være et tilfeldig tall mellom 
                                                // 1 -100. Fra bibilioteket math brukes funksjonene floor og random som vil si at det plukkes et tilfeldig tall (random) og 
                                                // gjør det mulig og sammenligne dette tallet med andre tall (floor). Er andre tall (input fra bruker - txtTall) mindre eller høyere enn random
    forsokIgjen = 10; // antall forsøk
    document.getElementById("btnGjett").onclick = gjett; // referer til knappen i html og gjør det mulig å aktviserer funksjonen gjett
}

function gjett() //Funskjonen gjett tar og sammenligner innput med det hemmelige tallet og gir tilbakemelding til brukeren om det er for høyt, lavt eller riktig
// Her brukes if else i løkke, slik at man får til interaktivitet. En svarer man for lavt, for høyt, riktig eller så er antall mulig forsøk gjennomført 
{
    forsokIgjen--;
    var tall = document.getElementById("txtTall").value;
    if (tall == hemmeligTall) {
        document.getElementById("melding").innerHTML = "Gratulerer!!!"; //sier at melding skal vises på nettsiden
        document.getElementById("btnGjett").disable = true; //terminerer funksjonen - da svaret er funnet
    }
    else if (forsokIgjen <= 0) {
        document.getElementById("melding").innerHTML =
        "Du klarte ikke å finne tallet" + hemmeligTall;
        document.getElementById("btnGjett").disable = true; //terminerer funksjonen - da antall forsøk er oppbrukt
    }
    else if (tall < hemmeligTall) {
        document.getElementById("melding").innerHTML = "Tallet er for lavt";
    }
    else if (tall > hemmeligTall) {
        document.getElementById("melding").innerHTML = "Tallet er for høyt";
    }
    
}