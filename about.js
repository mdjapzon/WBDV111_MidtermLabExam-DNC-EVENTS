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