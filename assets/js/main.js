//===============Show Menu ===============//
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const  navClose = document.getElementById('nav-close');

      if (navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
      }

      if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
      }

      // Remove Menu Mobile

      const navLink = document.querySelectorAll('.nav__link')

      const linkAction = () => {
        const navMenu = document.getElementById('nav-menu')

        navMenu.classList.remove('show-menu')
      }
      navLink.forEach(n => n.addEventListener('click', linkAction));

      // ==== DAY COUNTER FOR CHRISTMAS ====

       const titleData = document.getElementById('title-data');
       const numberData = document.getElementById('number-data');
       const textData = document.getElementById('text-data');
      const msgChristmas = document.getElementById('msg-christmas');

  

      const christmasCountdown = () => {
        let now = new Date();
        let currentMonth = now.getMonth() + 1;
        let currentDay = now.getDate();
      
        let nextChristmasYear = now.getFullYear();
        if (currentMonth == 12 && currentDay > 25) {
          nextChristmasYear += 1;
        }
      
        let nextChristmasDate = `Dec 25, ${nextChristmasYear} 00:00:00`;
        let christmasDay = new Date(nextChristmasDate);
        let timeLeft = christmasDay - now;
      
        let days = 0,
          hours = 0,
          minutes = 0,
          seconds = 0;
      
        if (currentMonth != 12 || (currentMonth == 12 && currentDay != 25)) {
          days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
          hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24);
          minutes = Math.floor((timeLeft / 1000 / 60) % 60);
          seconds = Math.floor((timeLeft / 1000) % 60);
        }
      
        
        numberData.innerHTML = days < 10 ? `0${days}` : days;
        textData.innerHTML = 'Days';

        // Show missing hours

        if(currentDay == 24) {
          numberData.innerHTML = hours < 10 ? `0${hours}` : hours
          textData.innerHTML = 'Hours'
        }

        // Show missing minutes. Countdown, 0 hours left, show minutes (00:59)

        if(currentDay == 24 && hours  === 0) {
          numberData.innerHTML = minutes < 10 ? `0${minutes}` : minutes
          textData.innerHTML = 'Minutes'
        }

        // Show missing seconds. Countdown, 0 hours & 0 minutes left, show seconds (00:00:59)

        if(currentDay == 24 && hours  === 0 && minutes === 0) {
          numberData.innerHTML = seconds < 10 ? `0${seconds}` : seconds
          textData.innerHTML = 'Seconds'
        }

        // Show message on Christmas Day

        if (currentMonth == 12 && currentDay == 25) {
            titleData.style.display = 'none'
            msgChristmas.style.display = 'block'
            msgChristmas.innerHTML = 'Today is Dec 25, Merry Christmas'
        }

        //Show remaining days & remove Christmas message 

        if (currentMonth == 12 && currentDay == 26) {
          titleData.style.display = 'block'
          msgChristmas.style.display = 'none'
      }


      };
      
      
      setInterval(christmasCountdown, 1000);

      
      