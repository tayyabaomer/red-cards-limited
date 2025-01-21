


// Use this gsap tools when we use these utilities
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip,ScrollTrigger,ScrollToPlugin,TextPlugin)
    // gsap code here!





   });



// loading animation
function timeLineLoading() {
    const header = document.querySelector('header');

    const tl = gsap.timeline()
    
    tl.from(header, {
        y: 30,
        opacity: 0,
        duration: 1.1,
        overflow: 'hidden'
    })
}



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


// Splitted Text for brand Name section
function herotitleTextAnimation() {
  
var heroTitles = document.querySelectorAll('.hero-title');
var heroTitleSpan = document.querySelector('#hero-title-span');

heroTitles.forEach(function(prlxH2) {
    var prlxH2TextContent = prlxH2.querySelector('h2').textContent;
    var prlxH2SplittedText = prlxH2TextContent.split('');

    var clutter = '';
    prlxH2SplittedText.forEach(function(elem) {
        clutter += `<span>${elem}</span>`;
    });

    prlxH2.querySelector('h2').innerHTML = clutter;

    const h2Span = prlxH2.querySelectorAll('h2 span')
    gsap.from(h2Span, {
        y: 100,
        stagger: 0.02,
        duration: 0.8,
    });

});



}


// shrink and grow svg in brands names link

function brandNameSvg() {
    // const brandLinks = document.querySelectorAll('.brands h4');
    const brandName = document.querySelectorAll('.brands-name-container a');
    
    // this code is not working because it need to have two heading one on top of each other sp that they can animate in real time
    // brandLinks.forEach( elems => {
    
    //     const elemTextContent = elems.textContent;
    //     const elemSplitText = elemTextContent.split('');
    
    //     let clutter = '';
    
    //     elemSplitText.forEach( letter => {
    //         const letterSpan = `<span>${letter}</span>`;
    //         clutter += letterSpan       // adding span with letters in clutter variable
    //     })
    
    //     elems.innerHTML = clutter;
    
        // console.log(elemTextContent);
        // console.log(elemSplitText);
        // console.log(clutter);
    
    
        brandName.forEach( name => {
            const svgs = name.querySelector(".brands-name-container a svg");
            name.addEventListener('mouseenter', () => {
                // console.log(name);
                
                gsap.to(svgs, {
                    // y: 0,
                    scale: 1.4,
                    duration: 0.5,
                    ease: 'power2.in'
                })

                gsap.to(name, {
                    paddingRight: '2rem',
                    gap: '2rem'
                })
    
            })
            name.addEventListener('mouseleave', () => {
    
                // const svgs = name.querySelectorAll(".brands h4 span");
                gsap.to(svgs, {
                    // y: 100,
                    // stagger: 0.02,
                    scale: 1,
                    duration: 0.5,
                    ease: 'power2.out'
                })
                gsap.to(name, {
                    paddingRight: '2.3rem',
                    gap: '1rem'
                })
    
            })
        })
    
    
    // })
}



// Svg grow and shrink
brandNameSvg()
// Hero Title animation
herotitleTextAnimation()
// submenu anchor animation
submenuAnimation()
// Loading animation of navbar with timeline function
timeLineLoading()
// Calling the nav function
navAnimation()