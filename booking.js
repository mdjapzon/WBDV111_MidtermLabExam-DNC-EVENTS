 document.getElementById('eventForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const services = document.querySelectorAll('input[name="services"]:checked');
            if (services.length === 0) {
                alert("Please select at least one service.");
                return;
            }

            const requiredInputs = this.querySelectorAll('input[required], select[required], textarea[required]');
            for (const input of requiredInputs) {
                if (!input.value) {
                    alert("Please fill out all required fields.");
                    input.focus();
                    return;
                }
            }

            alert("Form submitted successfully!");
            this.reset();
        });

        document.getElementById('eventForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const services = document.querySelectorAll('input[name="services"]:checked');
        const packages = document.querySelectorAll('input[name="packages"]:checked');

        if (services.length === 0) {
            alert("Please select at least one service.");
            return;
        }

        if (packages.length === 0) {
            alert("Please select at least one package.");
            return;
        }

        const requiredInputs = this.querySelectorAll('input[required], select[required], textarea[required]');
        for (const input of requiredInputs) {
            if (!input.value) {
                alert("Please fill out all required fields.");
                input.focus();
                return;
            }
        }

        alert("Form submitted successfully!");
        this.reset();
    });



    // eto dinagdag ko para pwede ma cancel kapag na select mo na yung sa package
    const packageRadios = document.querySelectorAll('input[name="packages"]');

        packageRadios.forEach(radio => {
            radio.addEventListener('click', function() {
                // kung naka-check na, i-deselect
                if (this.wasChecked) {
                    this.checked = false;
                }
                // i-track ang estado
                packageRadios.forEach(r => r.wasChecked = r.checked);
            });
        });

        
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