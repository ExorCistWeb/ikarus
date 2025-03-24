document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            document.body.classList.add('modal-open');
        }
    });
});

document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.modal-overlay').style.display = 'none';
        document.body.classList.remove('modal-open');
    });
});

document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function(event) {
        if (event.target === this) {
            this.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
});