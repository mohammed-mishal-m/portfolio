
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            window.open(this.getAttribute('href'), '_blank');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skills');
    skills.forEach(skill => {
        skill.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                this.classList.toggle('active');
            }
        });
    });
});
