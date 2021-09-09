
    // Setter klokkelsett og dato som vi teller ned til
    var countDownDate_S = new Date("Jun 17, 2022 12:00:00").getTime();
 
    
    // Oppdaterer nedtellingen hvert sekund
    var x = setInterval(function() {
    
      // Henter dagent dato og klokkeslett
      var now = new Date().getTime();
        
      // Finner avstanden mellom dagens dato og klokkelsett og den vi teller ned til
      var distance = countDownDate_S - now;
     
        
      // kalkuleringen av dager, timer, minutter og sekunder
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Viser resultatet i elementet id=demo
      document.getElementById("nedtelling_S").innerHTML = "Hvor lenge til  sommerferien: "+ days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
   
        
      // Når nedtellingen er gjennomført, så vis følgende tekst
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("nedtelling_S").innerHTML = "EXPIRED";
      }
    }, 1000);
    