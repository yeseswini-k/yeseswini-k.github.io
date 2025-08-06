// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal on Scroll Effect
const sections = document.querySelectorAll('section');

const revealSection = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.add('fade-in');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

sections.forEach(section => {
    section.classList.add('hidden');
    sectionObserver.observe(section);
});