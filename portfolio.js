//fade in fade out
        const faders = document.querySelectorAll('.box, footer, gallery, section, .img-text');

        const appearOptions = {
    threshold: 0.1,
}; 

const appearOnScroll = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible'); // enables fade OUT
        }
    });
}, appearOptions);

faders.forEach((fader, index) => {
    fader.classList.add('fade-in');
    fader.style.transitionDelay = `${index * 0}s`;
    appearOnScroll.observe(fader);
});

        faders.forEach(fader => {
            fader.classList.add('fade-in'); // lagay initial class
            appearOnScroll.observe(fader);
        });

        window.addEventListener('load', () => {
        document.querySelector('.hero-text').classList.add('loaded');
        });

        function filterSelection(category){

        var boxes = document.getElementsByClassName("box");

        for(var i=0;i<boxes.length;i++){

        if(category=="all"){
        boxes[i].style.display="block";
        }

        else if(boxes[i].classList.contains(category)){
        boxes[i].style.display="block";
        }

        else{
        boxes[i].style.display="none";
        }

        }}; 

         // BACK TO THE TOP

        const backToTop = document.getElementById("back-to-top");

            // Show button after scrolling down 300px
        window.addEventListener("scroll", () => {
             if (window.scrollY > 300) {
        backToTop.style.display = "block";
        } else {
                  backToTop.style.display = "none";
           }
        });

           // Scroll smoothly to top on click
        backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        });
        document.getElementById("back-to-top").addEventListener("click", function(e) {
        e.preventDefault();  // prevents the default jump
        window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
        });

     // gallery 
    const galleries = {
    wedding: [
        "images/PORTFOLIO - ALL IN WEDDING.png",
        "images/PORTFOLIO - ALL IN WEDDING 1.png",
        "images/PORTFOLIO - ALL IN WEDDING 2.png",
        "images/PORTFOLIO - ALL IN WEDDING 3.png"
    ],
    basic: [
        "images/PORTFOLIO - BASIC WEDDING.jpg",
        "images/PORTFOLIO - BASIC WEDDING 1.jpg",
        "images/PORTFOLIO - BASIC WEDDING 2.jpg",
        "images/PORTFOLIO - BASIC WEDDING 3.jpg",
        "images/PORTFOLIO - BASIC WEDDING 4.jpg",
        "images/PORTFOLIO - BASIC WEDDING 5.jpg"
    ],
    christening: [
        "images/PORTFOLIO - GENDER REVEAL.jpg",
        "images/PACKAGES - BAPTISMAL & GENDER REVEAL.jpg",
        "images/PORTFOLIO - GENDER REVEAL 1.jpg"
        
    ],
    debut: [
        "images/PORTFOLIO - DEBUT & MILESTONE.jpg",
        "images/PORTFOLIO - MILESTONE 1.jpg",
        "images/PORTFOLIO - MILESTONE 2.jpg",
        "images/PACKAGES - DEBUT & MILESTONE.jpg",
        "images/PORTFOLIO - DEBUT 1.jpg",
        "images/PORTFOLIO - MILESTONE 3.jpg",
        "images/PORTFOLIO - DEBUT 2.jpg",
        "images/PORTFOLIO - MILESTONE 4.jpg",
        "images/PORTFOLIO - MILESTONE 5.jpg"
    ],
    kiddie: [
        "images/PORTFOLIO - KIDDIE BIRTHDAY PARTY.jpg",
        "images/PACKAGES - KIDDIE BIRTHDAY PARTY.jfif",
        "images/PORTFOLIO - KIDDIE BIRTHDAY PARTY 1.jpg",
        "images/PORTFOLIO - KIDDIE BIRTHDAY PARTY 2.jpg",
        "images/PORTFOLIO - KIDDIE BIRTHDAY PARTY 3.jpg",
        "images/PORTFOLIO - KIDDIE BIRTHDAY PARTY 4.jpg",
        "images/PORTFOLIO - KIDDIE BIRTHDAY PARTY 5.jpg",
        "images/PORTFOLIO - KIDDIE BIRTHDAY PARTY 6.jpg",
        "images/PORTFOLIO - KIDDIE BIRTHDAY PARTY 7.jpg",
        "images/PORTFOLIO - KIDDIE BIRTHDAY PARTY 8.jpg",
        "images/PORTFOLIO - KIDDIE BIRTHDAY PARTY 9.jpg",
        "images/PORTFOLIO - KIDDIE BIRTHDAY PARTY 10.jpg",
        "images/PORTFOLIO - KIDDIE BIRTHDAY PARTY 11.jpg",
        "images/PORTFOLIO - KIDDIE BIRTHDAY PARTY 12.jpg",
        "images/PORTFOLIO - KIDDIE BIRTHDAY PARTY 13.jpg",
        "images/PORTFOLIO - KIDDIE BIRTHDAY PARTY 14.jpg"
    ]
};

function openGallery(type){
    const modal = document.getElementById("galleryModal");
    const content = document.getElementById("galleryContent");

    content.innerHTML = "";

    galleries[type].forEach((img, index) => {
        const image = document.createElement("img");
        image.src = img;
        image.style.animationDelay = `${index * 0.1}s`;

        image.onclick = function(){
            openZoom(img);
        };

        content.appendChild(image);
    });

    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

function closeGallery(){
    const modal = document.getElementById("galleryModal");
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

function openZoom(src){
    const modal = document.getElementById("zoomModal");
    const img = document.getElementById("zoomImg");
    img.src = src;
    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

function closeZoom(){
    const modal = document.getElementById("zoomModal");
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

let currentGallery = [];
let currentIndex = 0;

function openZoom(src) {
    const modal = document.getElementById("zoomModal");
    const img = document.getElementById("zoomImg");

    // Find the index in currentGallery
    currentIndex = currentGallery.indexOf(src);
    img.src = currentGallery[currentIndex];

    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

function changeImage(direction) {
    // direction = 1 for next, -1 for prev
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = currentGallery.length - 1;
    if (currentIndex >= currentGallery.length) currentIndex = 0;

    document.getElementById("zoomImg").src = currentGallery[currentIndex];
}

// Update openGallery to set currentGallery
function openGallery(type) {
    const modal = document.getElementById("galleryModal");
    const content = document.getElementById("galleryContent");

    currentGallery = galleries[type]; // set for zoom navigation

    content.innerHTML = "";

    galleries[type].forEach((img, index) => {
        const image = document.createElement("img");
        image.src = img;
        image.style.animationDelay = `${index * 0.1}s`;

        image.onclick = function() {
            openZoom(img);
        };

        content.appendChild(image);
    });

    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}