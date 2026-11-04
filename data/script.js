document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    openBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.classList.add('no-scroll');
    })
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    })

    const openModalBtn = document.getElementById('modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const retainerModal = document.getElementById('retainer-modal');

    function openModal() {
        retainerModal.showModal();
        document.body.classList.add('no-scroll');
        document.documentElement.classList.add('no-scroll');
    }
    function closeModal() {
        retainerModal.close();
        document.documentElement.classList.remove('no-scroll');
    }

    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    });

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