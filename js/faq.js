document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach((header) => {
        header.addEventListener("click", () => {
            const targetId = header.getAttribute("data-target");
            const content = document.getElementById(targetId);
            const plusIcon = header.querySelector(".faq_plus");

            // Закрываем все открытые элементы
            document.querySelectorAll(".accordion-content.active").forEach((openContent) => {
                if (openContent !== content) {
                    openContent.classList.remove("active");
                    const openIcon = openContent.previousElementSibling.querySelector(".faq_plus");
                    if (openIcon) openIcon.classList.remove("active");
                }
            });

            // Переключаем текущий элемент
            content.classList.toggle("active");
            plusIcon.classList.toggle("active");
        });
    });
});