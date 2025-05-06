document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const prime = document.getElementById('prime').value;
    const fileInput = document.getElementById('logo');
    const file = fileInput.files[0];

    if (!tg.initDataUnsafe || !tg.initDataUnsafe.user || !tg.initDataUnsafe.user.id) {
        console.error('Ошибка: Не удалось получить информацию о пользователе Telegram');
        return; 
    }

    const chatId = tg.initDataUnsafe.user.id;

    const formData = {
        name: name,
        prime: prime,
        logo: file ? {
            fileType: file.type,
            fileBytes: Array.from(new Uint8Array(file))
        } : null,
        chat_id: chatId
    };

    fetch("https://only-charming-wahoo.ngrok-free.app/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }).then(response => {
        if (response.ok) {
            console.log('Данные успешно отправлены');
        } else {
            console.error('Ошибка при отправке данных');
        }
    }).catch(err => {
        console.error('Ошибка сети или сервера:', err);
    });

    tg.close(); 
});
