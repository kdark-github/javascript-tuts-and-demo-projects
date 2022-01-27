// window.scrollTo(0,0)

const sectionOne = document.querySelector('.section-1');
const sectionZero = document.querySelector('section-0')
const elementOne = document.querySelector('.elem-1');
const elementTwo = document.querySelector('.elem-2');
const elementThree = document.querySelector('.elem-3');
const elementFour = document.querySelector('.elem-4');
const elementFive = document.querySelector('.elem-5');
// elementOne.style.transform = 'translate(100%,100%)';
// elementOne.style.height = '100px'
const options = {

};



var start_value = sectionOne.offsetTop

function anim(value) {
  // let start_value = undefined;

  console.log("The scroll is ", window.scrollY)
  let rects = sectionOne.getBoundingClientRect()
  
  if (start_value === undefined && window.scrollY) {
    console.log("The start_value is undefined",window.scrollY,rects.y ,sectionOne)
    start_value = window.scrollY
  }
  else {
  
let rects = sectionOne.getBoundingClientRect()

    
    console.log("The value diff is ", window.scrollY - start_value,rects,sectionOne.offsetTop)
    let diff = window.scrollY - start_value;
    let speed = -0.6
    elementOne.style.transform = `translate(0%,${diff * -0.4}%) `;
    elementTwo.style.transform = `translate(0%,${diff * -0.2}%) `;
    elementThree.style.transform = `translate(0%,${diff * -0.4}%) `;
    elementFour.style.transform = `translate(0%,${diff * -0.2}%) `;
    elementFive.style.transform = `translate(0%,${diff * -0.3}%) `;


    // elementOne.style.boxShadow = `0px 0px ${diff*0.2}px ${diff*0.1}px black`

  }


}

function scoll() {

  window.requestAnimationFrame(anim)

}

const observer = new IntersectionObserver((entries, observer) => {

  console.log("The entries are ", entries);

  if (entries[0].isIntersecting) {
    console.log("is intersecting it")

    window.addEventListener('scroll', scoll, false)




  }
  else {
    // console.log("Not intersecting",e);
    window.removeEventListener('scroll', scoll, false)
  }

}, options);

observer.observe(sectionOne);
