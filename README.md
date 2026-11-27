# AgilFrame Examples

Самостоятельные примеры для интеграции.

[AgilFrame](https://github.com/users/GillHD/projects/1) · [Core и документация](https://github.com/GillHD/agilframe-core)

Исходная версия компонентов: [e49af79](https://github.com/GillHD/agilframe-core/commit/e49af79496ed8d4e200f520e2f7dd162bf789a7d). [Лицензия](LICENSE) · [Уведомления](NOTICE)

## Встроить комнату в iframe

1. Запустите [AgilFrame Core](https://github.com/GillHD/agilframe-core) и создайте комнату.
2. Получите короткоживущий токен участника через сервер своей интеграции.
3. В корне примеров выполните `python -m http.server 8090 --bind 127.0.0.1`. Откройте `http://127.0.0.1:8090/web/`.
4. Укажите адрес Core, организацию, комнату и токен. Если Core использует ограничения встраивания, разрешите origin примера в настройках организации.

Пример использует `embed.html` и набирает параметры через `URLSearchParams`. Ключ администратора в браузер не передаётся. Для собственного интерфейса см. [Web SDK](https://github.com/GillHD/agilframe-websdk) и [руководство по API](https://github.com/GillHD/agilframe-core/blob/main/agil/core/docs/api-guide.md).
