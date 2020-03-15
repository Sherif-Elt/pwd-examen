// Sticky menu background js
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#nav-bar').style.opacity = 0.8;
    } else {
      document.querySelector('#nav-bar').style.opacity = 1;
    }
  }); 



// Smooth Scrolling jquery
$('#show-case a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 30
        },
        800
      );
    }
  });

