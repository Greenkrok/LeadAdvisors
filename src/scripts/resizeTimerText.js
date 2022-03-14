const updateText = () => {
    const days = document.querySelector('#text_days');
    const hours = document.querySelector('#text_hours');
    const minutes = document.querySelector('#text_minutes');
    const seconds = document.querySelector('#text_seconds');
  
    window.addEventListener('resize', () => {
      const screenWidth = document.documentElement.clientWidth;
  
      if (screenWidth > 1919) {
        days.innerText = 'Days';
        hours.innerText = 'Hours';
        minutes.innerText = 'Minutes';
        seconds.innerText = 'Seconds';
      } else {
        days.innerText = 'DD';
        hours.innerText = 'HH';
        minutes.innerText = 'MM';
        seconds.innerText = 'SS';
      }
    });
  }

  updateText();
