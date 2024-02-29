document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        rootMargin: "-50px",
        threshold: 1
    });

    // Observe elements with class 'info-card'
    document.querySelectorAll('.info-card').forEach(card => {
        observer.observe(card);
    });

    // Observe elements with class 'info-card2'
    document.querySelectorAll('.info-card2').forEach(card => {
        observer.observe(card);
    });
});
