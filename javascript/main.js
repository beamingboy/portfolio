
$(window).scroll(function () {
    if ($(window).scrollTop()) {
      $("header").addClass("sticky");
    }
    else {
      $("header").removeClass("sticky");
    }
  });
  
  
  
  // Bg changer
  
  var images = ["../images/home-section/earthWorksBg.jfif", "../images/home-section/earthWorksBg2.jfif", "../images/home-section/earthWorksBg3.jfif"]; // Add more image URLs as needed
          var currentIndex = 0;
          var banner = document.getElementById('main-banner');
  
          function changeBackground() {
            banner.style.setProperty('background-image', 'url(' + images[currentIndex] + ')');
              currentIndex = (currentIndex + 1) % images.length;
          }
  
          setInterval(changeBackground, 5000); // Change background every 5 seconds
          changeBackground(); // Initial background change
  
  // Nav-bar
  
  let savedScrollPosition = 0;
  
  function showSidebar() {
    const sidebar = document.querySelector('.side-bar')
    sidebar.style.display = 'flex'
    
    
  }
  
  function hideSidebar() {
    const sidebar = document.querySelector('.side-bar')
    savedScrollPosition = window.scrollY || window.pageYOffset;
    window.scrollTo(0, savedScrollPosition);
    sidebar.style.display = 'none'
    
  }
  
  
  // form
  
  function SendMail() {
  
    // Reset error messages
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("subject-error").textContent = "";
    document.getElementById("message-error").textContent = "";
  
    // Get form input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    // Validate Name
    if (name.trim() === "") {
      document.getElementById("name-error").textContent = "Name is required";
      return;
    }
  
    // Validate Email
    if (email.trim() === "") {
      document.getElementById("email-error").textContent = "Email is required";
      return;
    } else if (!isValidEmail(email)) {
      document.getElementById("email-error").textContent = "Invalid email format";
      return;
    }
  
    // Validate Subject
    if (subject.trim() === "") {
      document.getElementById("subject-error").textContent = "Subject is required";
      return;
    }
  
    // Validate Message
    if (message.trim() === "") {
      document.getElementById("message-error").textContent = "Message is required";
      return;
    }
  
    sendquote();
  
  
  
  }
  
  function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function sendquote() {
    var params = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      from_subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    }
    emailjs.send("service_helb38i","template_rpvwdtx", params).then(function (res) {
      alert("success! " + res.status)
  })
  }
  
  
  
  
  
  // emailjs.send("service_helb38i","template_4mmzvnj", params).then(function (res) {
  //     alert("success! " + res.status)
  // })
  
  
  
  // Care slider
  
  // script.js
  
  const container = document.querySelector('.card-slider-container');
  const cards = Array.from(document.querySelectorAll('.card'));
  const dotsContainer = document.querySelector('.dots');
  
  let currentCardIndex = 0;
  
  function updateCards() {
    container.style.transform = `translateX(-${currentCardIndex * 100}%)`;
  }
  
  function updateDots() {
    const dots = Array.from(dotsContainer.querySelectorAll('.dot'));
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentCardIndex);
    });
  }
  
  function navigateTo(index) {
    currentCardIndex = index;
    updateCards();
    updateDots();
  }
  
  function navigateLeft() {
    if (currentCardIndex === 0) {
      currentCardIndex = cards.length - 1;
    } else {
      currentCardIndex--;
    }
    updateCards();
    updateDots();
  }
  
  function navigateRight() {
    if (currentCardIndex === cards.length - 1) {
      currentCardIndex = 0;
    } else {
      currentCardIndex++;
    }
    updateCards();
    updateDots();
  }
  
  dotsContainer.innerHTML = cards.map((_, index) => `<div class="dot"></div>`).join('');
  
  const dots = Array.from(dotsContainer.querySelectorAll('.dot'));
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      navigateTo(index);
    });
  });
  
  document.querySelector('.arrow-left').addEventListener('click', navigateLeft);
  document.querySelector('.arrow-right').addEventListener('click', navigateRight);