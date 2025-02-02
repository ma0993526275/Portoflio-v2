//================ welcome page ======================//
  
  // إبقاء صفحة الترحيب لمدة 5 ثوانٍ ثم بدء الأنيميشن
    setTimeout(() => {
        // بدء أنيميشن صفحة الترحيب للاختفاء
        document.getElementById('welcome-screen').style.opacity = '0';
        
        // عرض المحتوى الرئيسي مع الأنيميشن
        setTimeout(() => {
          document.getElementById('welcome-screen').style.display = 'none';
          document.getElementById('page').style.display = 'block';
          setTimeout(() => {
            document.getElementById('page').style.opacity = '1';
            document.getElementById('page').style.transform = 'translateY(0)';
          }, 100); // تأخير بسيط للتأكد من تنفيذ الأنيميشن بشكل سلس
        }, 1000); // تأخير الأنيميشن الخاص بإخفاء صفحة الترحيب
      }, 2000); // إبقاء صفحة الترحيب لمدة 5 ثوانٍ


//================ Header page ======================//

     // Select elements
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    // Add click event
    menuToggle.addEventListener('click', () => {
      // Toggle menu visibility
      nav.classList.toggle('active');

      // Toggle button icon
      menuToggle.textContent = nav.classList.contains('active') ? '✖' : '☰';
    });

    let headers = document.querySelectorAll('header ul li a');

    headers.forEach(element => {
   element.addEventListener('click',(e)=> {
    headers.forEach(element => {
      element.classList.remove('activ');
    });
    e.target.classList.add('activ');


      // Toggle menu visibility
      nav.classList.toggle('active');

      // Toggle button icon
      menuToggle.textContent = nav.classList.contains('active') ? '✖' : '☰';
    
   
  })});

 

//================ typing effect ======================//
const texts = ["Welcome to our website!", "We provide the best services!", "Contact us now!"];
const typingElement = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex][charIndex];
    charIndex++;
    setTimeout(typeEffect, 100); // Adjust typing speed
  } else {
    setTimeout(eraseEffect, 1000); // Pause before erasing
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = typingElement.textContent.slice(0, -1);
    charIndex--;
    setTimeout(eraseEffect, 50); // Adjust erasing speed
  } else {
    textIndex = (textIndex + 1) % texts.length; // Move to the next text
    setTimeout(typeEffect, 500); // Pause before typing the next text
  }
}

typeEffect(); // Start the typing effect

//================ Projects page ======================//

 
let items = document.querySelectorAll('.projects .control span');

let box = document.querySelectorAll('.projects .boxs .pro');


console.log( box);

items.forEach(element => {
  element.addEventListener('click',(e)=> {
      items.forEach(element => {

          element.classList.remove('activ');

          box.forEach(element => {
              
              element.classList.remove('activ');
          });
          
          e.target.classList.add('activ');
      });

   document.querySelector("."+e.target.dataset.box).classList.add('activ');


 })});