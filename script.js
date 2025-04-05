
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll("section");

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("active");
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    reveals.forEach(section => {
        section.classList.add("fade-section");
        appearOnScroll.observe(section);
    });
});
