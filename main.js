// get slider items | array.from [es6 feature];
let sliderImage = Array.from(document.querySelectorAll(".slider-container img"));

// get number of slide
let slidesCount = sliderImage.length;

// set current slide
let currentSlide = 1;

// Slide number string Element "title"
let slideNumberElement = document.getElementById('slide-number')

//previous and next buttons 
let nextButton = document.getElementById('next'); 
let prevButton = document.getElementById('prev'); 


// handel click on previous and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

    // create the main ul element 
    let paginationELement = document.createElement('ul');

// set id on created ul Element
paginationELement.setAttribute("id","pagination-ul");

// create li items based on slider count 
for (let i=1; i<=slidesCount; i++ ) {
    // create the main ul element 
    let paginationItem = document.createElement('li');
    // set custom attribute
    paginationItem.setAttribute("data-index", i);
    // set item content
    paginationItem.appendChild(document.createTextNode(i));
    // append items to the main ul list 
    paginationELement.appendChild(paginationItem);
}

// add the created ul element to the page 
document.getElementById('indicators').appendChild(paginationELement);


//  get the new created ul 
let paginationCreatedUl = document.getElementById('pagination-ul');

// get all bulets 
let bullets = document.querySelectorAll("#pagination-ul li");


// loop through all bullets items 
for (let i=0; i < bullets.length; i++) {
    
    bullets[i].onclick = function () {
        currentSlide = +this.dataset.index;
        theChecker();
    }
}

// Triger The Checker function
theChecker();

// next Slide function
function nextSlide() {
    if (nextButton.classList.contains("disabled")) {
        // do nothing
        return false;
    } else {
        currentSlide++
        theChecker()
    }
    
}

// previous Slide function
function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
        // do nothing
        return false;
    } else {
        currentSlide--
        theChecker()
    }
    
}


// create The Checker Function
function theChecker() {

    // set the slide number
    slideNumberElement.textContent = `slide# ${currentSlide} of ${slidesCount}`;
    // remove all active first
    removeAllactive();
    
    // set active class on current slide
    sliderImage[currentSlide - 1].classList.add("active");
    
    // set active class on paginationItem(li)
    paginationCreatedUl.children[currentSlide - 1].classList.add("active");
    
    // check if the current Slide is the first 
    if (currentSlide == 1) {

        // add disable class on previous button 
        prevButton.classList.add("disabled")
    } else {
        // if not remove it immeditetly from previous button 
        prevButton.classList.remove("disabled")
    }

    if (currentSlide == slidesCount) {

        // add disable class on previous button 
        nextButton.classList.add("disabled")
    } else {
        // if not remove it immeditetly from previous button 
        nextButton.classList.remove("disabled")
    }
}

// remove all active class from imgs and pagination bullets

function removeAllactive() {
    // loop through Images
    sliderImage.forEach(function (img) {
        img.classList.remove("active");
    });

    // loop through pagination bullet
    [...paginationCreatedUl.children].forEach(li =>{
        li.classList.remove("active")
    });

}
