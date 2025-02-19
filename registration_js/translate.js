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