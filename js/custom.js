(function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);

// TYPING ANIMATION
$(document).ready(function(){
  var text = "I’m college student.";
  var i = 0;
  var speed = 300; // ms per character

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  // Start typing after preloader fades out
  setTimeout(typeWriter, 1500); // Adjust delay as needed
});

$(document).ready(function(){
    // Prompt user for their name if not already stored
    let userName = localStorage.getItem('visitorName');
    if (!userName) {
        userName = prompt("Masukkan nama Anda:");
        if (userName) {
            localStorage.setItem('visitorName', userName);
            alert("Selamat datang yaa " + userName);
        } else {
            userName = "Pengunjung";
            alert("Selamat datang yaa " + userName);
        }
    } else {
        alert("Selamat datang kembali yaa " + userName);
    }

    // Visitor counter
    let count = localStorage.getItem('visitorCount') || 0;
    count = parseInt(count) + 1;
    localStorage.setItem('visitorCount', count);
    $('#count').text(count);

    // Display visitor name with interactive and colorful style
    $('#visitor-count').append(
        `<br><span class="visitor-name" style="font-size: 20px; background: linear-gradient(45deg, #ff6ec4, #7873f5); padding: 10px 15px; border-radius: 15px; box-shadow: 0 4px 15px rgba(255, 110, 196, 0.6); color: white; font-weight: 700; display: inline-block; user-select: none; cursor: default;">👋 Pengunjung: <span style="color:#fff; font-weight:bold;">${userName}</span></span>`
    );
});
