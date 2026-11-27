# AgilFrame Examples

**Русский** · [English](README.en.md)

Минимальный веб-пример встраивания звонка AgilFrame через iframe. Вы можете запустить его локально и проверить интеграцию со своим экземпляром Core.

[Общий проект](https://github.com/GillHD/agilframe) · [AgilFrame Core](https://github.com/GillHD/agilframe-core) · [Web SDK](https://github.com/GillHD/agilframe-websdk)

## Встраивание комнаты

1. Запустите Core и создайте комнату. Выпустите короткоживущий токен участника на сервере своей интеграции. [Руководство по API](https://github.com/GillHD/agilframe-core/blob/main/agil/core/docs/api-guide.md)
2. Из корня этого репозитория запустите `python -m http.server 8090 --bind 127.0.0.1` и откройте `http://127.0.0.1:8090/web/`.
3. Введите адрес Core, ID организации, ID комнаты и токен участника. Для Core на удалённом сервере используйте HTTPS. HTTP разрешён для локального Core на loopback-адресе.
4. Нажмите «Открыть звонок». Если в настройках организации ограничено встраивание, добавьте `http://127.0.0.1:8090` в список разрешённых источников.

Страница формирует адрес `/embed.html` с параметрами комнаты и участника. Храните административный ключ на сервере интеграции. Браузеру передавайте только токен участника. [Исходный код примера](web/)

## Проверка и вклад

Для проверки синтаксиса JavaScript выполните `node --check web/embed.js`. [Правила участия](CONTRIBUTING.md) · [Безопасность](SECURITY.md) · [Лицензия](LICENSE) · [Уведомления](NOTICE)

[Исходная версия компонентов](https://github.com/GillHD/agilframe-core/commit/e49af79496ed8d4e200f520e2f7dd162bf789a7d)
