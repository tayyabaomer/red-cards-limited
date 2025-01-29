
// nav function with submenu animation
// Nav Animation on hover
function navAnimation() {

  // animating sub menu on mouse enter
  const hasSubmenu = document.querySelectorAll('.has-submenu');

  hasSubmenu.forEach( (link) => { 
  
      const submenu = link.querySelector('ul');
  
      link.addEventListener('mouseenter', () => {
          // console.log("hello");
              gsap.to(submenu, {
                  // display: "block",
                  visibility: "visible",
                  duration: 0.5,
                  opacity: 1,
                  ease: "power2-out",
                  // y: 5
              })
  
      })
  
      link.addEventListener('mouseleave', () => {
          // console.log("HI");
          
          gsap.to(submenu, {
              // display: "none",
              visibility: "hidden",
              duration: 0.5,
              opacity: 0,
              ease: "power2-out",
              // y: -5
          })
      })
  })
  

  // hover on anchor will let the box shdow appear
      
  const navLinks = document.querySelectorAll('header ul > li');

  const header = document.querySelector('header');

  navLinks.forEach(links => {
      links.addEventListener('mouseenter', () => {
          gsap.to(header, {
              boxShadow: "0 0 20px #d4d4d433",
              duration: 0.3

          })
      } )
      links.addEventListener('mouseleave', () => {
          gsap.to(header, {
              boxShadow: "none",
              duration: 0.3
          })
      } )
  });


}




// This function will dynamically changed color based  on text

function stockLabelColor() {
  const stockLabel = document.querySelectorAll('.stock-label');

  console.log(stockLabel);
  
  
  stockLabel.forEach( element => {
  
  
    var stockText = element.textContent.toLowerCase();
    console.log(stockText);
        
      if (stockText === 'in stock') {
        gsap.to(element, {
            borderColor: ' #008e4c',
            backgroundColor:  '#97eeb8',
            color: '#008e4c'
        })
  
          // element.style.backgroundColor = 'blue'
  
      }
      else if (stockText === 'out of stock') {
          gsap.to(element, {
              borderColor: ' #ee0000',
              backgroundColor:  '#ff8d8d',
              color: '#ee0000'
          })
          
          // element.style.backgroundColor = 'red'
      }
  
  
  })
  
}


// submenu animation 
function submenuAnimation() {
  const submenuLinks = document.querySelectorAll('.submenus-menu > ul > li > a');

  submenuLinks.forEach(element => {
  
      element.addEventListener('mouseenter', () => {
          gsap.to(element, {
              padding: '1rem 1.1rem',
          })
      })
      element.addEventListener('mouseleave', () => {
          gsap.to(element, {
              padding: '1rem 1.8rem',
          })
      })
  });
}






// DYnamic color change stock text
stockLabelColor()
// nav function
navAnimation()
// sub menu animation
submenuAnimation()