function switchTab(event, tabId) {
    document.querySelectorAll('.tabs button').forEach(button => button.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

// Функция для получения текущего времени в формате HH:MM
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Функция для добавления сообщения в чат
function addMessage(message, type = 'user') {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message');
    if (type === 'user') {
        messageDiv.classList.add('user-message');
    } else {
        messageDiv.classList.add('bot-message');
    }

    // Добавляем текст сообщения
    const messageText = document.createElement('span');
    messageText.textContent = message;

    // Добавляем дату и время
    const messageTime = document.createElement('span');
    messageTime.classList.add('message-time');
    messageTime.textContent = getCurrentTime();

    // Вставляем элементы в сообщение
    messageDiv.appendChild(messageText);
    messageDiv.appendChild(messageTime);

    chatMessages.appendChild(messageDiv);

    // Прокручиваем чат вниз до последнего сообщения
    messageDiv.scrollIntoView({ behavior: 'smooth' });
}

// Обработчик кнопки отправки сообщения
sendBtn.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        addMessage(userMessage);
        chatInput.value = ''; // Очистка поля ввода

        // Ответ бота (простой пример)
        setTimeout(() => {
            addMessage('Здравствуйте, чем могу помочь?', 'bot');
        }, 1000);
    }
});

// Добавление функционала Enter для отправки сообщений
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});