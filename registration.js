document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            const tg = window.Telegram.WebApp;
            console.log("Telegram API загружен:", tg);
        } else {
            console.error("Telegram API не загружен!");
        }
    }, 1000);
});

console.log("window.Telegram:", window.Telegram);
const language = tg.language; 
const elements = {
    "form-title": {
        "en": "Registration",
        "ru": "Регистрация"
    },
    "label-name": {
        "en": "Team Name:",
        "ru": "Название команды:"
    },
    "label-logo": {
        "en": "Team Logo (URL):",
        "ru": "Лого команды (URL):"
    },
    "label-prime": {
        "en": "Prime Time:",
        "ru": "Прайм-тайм:"
    },
    "label-leader": {
        "en": "Leader (Username):",
        "ru": "Лидер (Username):"
    },
    "label-members": {
        "en": "Members (Comma separated):",
        "ru": "Участники (через запятую):"
    },
    "label-manager": {
        "en": "Manager (Username):",
        "ru": "Менеджер (Username):"
    },
    "label-trainer": {
        "en": "Trainer (Username):",
        "ru": "Тренер (Username):"
    },
    "submit-btn": {
        "en": "Submit",
        "ru": "Отправить"
    }
};

function setLanguage(language) {
    for (const [id, translations] of Object.entries(elements)) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[language] || translations["en"];
        }
    }
}

setLanguage(language);

const themeParams = tg.themeParams;
if (themeParams.theme === 'dark') {
    document.body.classList.add('dark');
} else {
    document.body.classList.add('light');
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        request: "registration",
        name: document.getElementById('name').value,
        logo: document.getElementById('logo').value,
        prime: document.getElementById('prime').value,
        leader: document.getElementById('leader').value,
        members: document.getElementById('members').value,
        manager: document.getElementById('manager').value,
        trainer: document.getElementById('trainer').value,
    };

    console.log("Form data: ", formData); 

    tg.sendData(JSON.stringify(formData));

    alert("Заявка отправлена администрации, ожидайте!");

    tg.close(); 
});