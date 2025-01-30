
// This function will dynamically changed color based  on text

function stockLabelColor() {
  const stockLabel = document.querySelectorAll('.stock-label');

  console.log(stockLabel);
  
  
  stockLabel.forEach( element => {
  
  
    var stockText = element.textContent.toLowerCase();
    console.log(stockText);
        
      if (stockText === 'in stock') {
        gsap.to(element, {
            borderColor: ' #1bc47d',
            backgroundColor:  '#bbedd8',
            color: '#1bc47d'
        })
  
          // element.style.backgroundColor = 'blue'
  
      }
      else if (stockText === 'out of stock') {
          gsap.to(element, {
              borderColor: ' #fd5c63',
              backgroundColor:  'hsl(357, 97.6%, 90%)',
              color: '#fd5c63'
          })
          
          // element.style.backgroundColor = 'red'
      }
  
  
  })
  
}



stockLabelColor()