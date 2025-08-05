
    let startTime;

    function initializePage() {
      showGreeting();
      showCurrentTime();
      highlightNav();
      startTime = new Date();
      setInterval(showCurrentTime, 1000);
    }

    function showGreeting() {
      const greeting = document.getElementById('greeting');
      const today = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      greeting.innerText = `Today is ${today.toLocaleDateString('en-US', options)}.`;
    }

    function showCurrentTime() {
      const currentTime = document.getElementById('current-time');
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const dateString = now.toLocaleDateString();
      const dayString = now.toLocaleString('en-US', { weekday: 'long' });
      const usageTime = Math.floor((now - startTime) / 1000); // Time in seconds
      currentTime.innerText = `Current Time: ${timeString} | Date: ${dateString} | Day: ${dayString} | Time Spent: ${usageTime} seconds`;
    }

    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
    }

    function highlightNav() {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav ul li a');

      window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
          }
        });
      });
    }

    function handleLogin(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Simple login validation (for demonstration purposes)
      if (username === "admin" && password === "password") {
        alert("Login successful!");
      } else {
        alert("Invalid username or password.");
      }
    }
