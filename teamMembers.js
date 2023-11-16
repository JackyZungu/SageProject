document.addEventListener('DOMContentLoaded', function () {
    const jumpLinks = document.querySelectorAll('.jump-links a');

    jumpLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop;
                const offset = 50; 

                window.scrollTo({
                    top: offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});
