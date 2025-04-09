const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        request: "registration",
        name: document.getElementById('name').value,
        logo: document.getElementById('logo').value,
        prime: document.getElementById('prime').value,
    };

    tg.sendData(JSON.stringify(formData)); 
    tg.close();
});