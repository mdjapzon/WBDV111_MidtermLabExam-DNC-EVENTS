    const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                question.classList.toggle('active');
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                    answer.style.paddingTop = 0;
                    answer.style.paddingBottom = 0;
                } else {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                    answer.style.paddingTop = "15px";
                    answer.style.paddingBottom = "15px";
                }
            });
        });
        
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