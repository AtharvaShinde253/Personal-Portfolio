function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
  window.onscroll = function() {headerShadow()};
  function headerShadow() {
    const navHeader =document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }

  var typingEffect = new Typed(".typedText",{
    strings : ["Gamer","Coder","Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })

 const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true     
})
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

sr.reveal('.project-grid',{interval: 200})
sr.reveal('.top-header',{})
sr.reveal('#about', { delay: 200 });
sr.reveal('.progressBox .skill-icon', { delay: 200, interval: 100 });

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

document.addEventListener('DOMContentLoaded', (event) => {
  const icons = document.querySelectorAll('.social_icons .icon');
  console.log(icons); // Add this line
  const links = [
      'https://www.instagram.com/yourusername',
      'https://www.linkedin.com/in/yourusername',
      'https://dribbble.com/yourusername',
      'https://github.com/AtharvaShinde253'
  ];

  icons.forEach((icon, index) => {
      icon.innerHTML = `<a href="${links[index]}" target="_blank">${icon.innerHTML}</a>`;
  });
});
window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  let links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
      let section = document.querySelector(link.hash);
      if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
      ) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }
  });
});
const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
      }  else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
    })
  }
  window.addEventListener('scroll', scrollActive)