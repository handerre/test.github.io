
    // Setter klokkelsett og dato som vi teller ned til
    var countDownDate_V= new Date("Feb 28, 2022 15:25:00").getTime();

    

    // Oppdaterer nedtellingen hvert sekund
    var x = setInterval(function() {
    
      // Henter dagent dato og klokkeslett
      var now = new Date().getTime();
        
      // Finner avstanden mellom dagens dato og klokkelsett og den vi teller ned til
      var distance = countDownDate_V - now;
     
        
      // kalkuleringen av dager, timer, minutter og sekunder
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Viser resultatet i elementet id=demo
      document.getElementById("nedtelling_V").innerHTML = "Hvor lenge til vinterferien: "+ days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
        
        // Når nedtellingen er gjennomført, så vis følgende tekst
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("nedtelling_V").innerHTML = "EXPIRED";
        }
     

    }, 1000);
    