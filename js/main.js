// Скрипт для управления гамбургер-меню
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');

    // Блокируем прокрутку при открытом меню
    if (menu.classList.contains('active')) {
        document.body.classList.add('menu-open');
    } else {
        document.body.classList.remove('menu-open');
    }
});

// Скрипт для добавления фона к header при скролле

// Получаем ссылку на header
const header = document.querySelector('header');

// Функция для добавления или удаления класса при скролле
function handleScroll() {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Добавляем обработчик события scroll
window.addEventListener('scroll', handleScroll);

// Добавляем стили для класса scrolled
const style = document.createElement('style');
style.textContent = `
    header {
        transition: background-color 0.3s ease-in-out;
    }
    header.scrolled {
        background-color: #fff;
    }
`;
document.head.appendChild(style);