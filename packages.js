document.querySelectorAll(".dropdown-btn").forEach(button => {
    button.onclick = function() {
        let content = this.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }
});
        const elements = document.querySelectorAll(".wiw, .cta-section, h1, .hero");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show"); // fade out
        }
        })
    }, { threshold: 0.2 });
    elements.forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
});
        