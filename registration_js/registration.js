document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const prime = document.getElementById('prime').value;
    const fileInput = document.getElementById('logo');
    const file = fileInput.files[0];
    const params = new URLSearchParams(window.location.search);
    const chatID = params.get("chat_id");

    const formData = {
        name: name,
        prime: prime,
        logo: file ? {
            fileType: file.type,
            fileBytes: Array.from(new Uint8Array(file))
        } : null,
        chat_id: chatID
    };

    fetch("https://only-charming-wahoo.ngrok-free.app/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }).then(response => {
        if (response.ok) {
            console.log('Данные успешно отправлены');
            tg.close(); 
        } else {
            console.error('Ошибка при отправке данных');
            tg.close(); 
        }
    }).catch(err => {
        console.error('Ошибка сети или сервера:', err);
        tg.close(); 
    });

    tg.close(); 
});
