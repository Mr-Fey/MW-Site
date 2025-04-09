const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();
const language = tg.language
const elements = {
    "form-title": {
        "en": "Edit Team",
        "ru": "Редактировать команду"
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
    "label-kick": {
        "en": "Kick user:",
        "ru": "Кик пользователя(-ей):"
    },
    "label-manager": {
        "en": "Manager (@Username):",
        "ru": "Менеджер (@Username):"
    },
    "label-trainer": {
        "en": "Trainer (@Username):",
        "ru": "Тренер (@Username):"
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