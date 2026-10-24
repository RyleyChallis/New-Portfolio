const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');

    questionButton.addEventListener('click', () => {
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        item.classList.toggle('active');
    });
});