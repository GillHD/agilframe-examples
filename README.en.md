# AgilFrame Examples

[Русский](README.md) · **English**

A minimal web example for embedding an AgilFrame call in an iframe. Run it locally to test the integration with your own Core instance.

[Project overview](https://github.com/GillHD/agilframe) · [AgilFrame Core](https://github.com/GillHD/agilframe-core) · [Web SDK](https://github.com/GillHD/agilframe-websdk)

## Embed a room

1. Start Core and create a room. Issue a short-lived participant token from your integration backend. [API guide](https://github.com/GillHD/agilframe-core/blob/main/agil/core/docs/api-guide.md)
2. Run `python -m http.server 8090 --bind 127.0.0.1` from the repository root and open `http://127.0.0.1:8090/web/`.
3. Enter the Core URL, tenant ID, room ID, and participant token. Use HTTPS for a remote Core instance. HTTP is allowed for a local Core instance on a loopback address.
4. Select **Открыть звонок** (Open call). If the tenant restricts embeddings, add `http://127.0.0.1:8090` to its list of allowed origins.

The page constructs the `/embed.html` URL from the room and participant details. Keep the administrative key on your integration backend. Pass only the participant token to the browser. [Example source](web/)

## Testing and contributing

Run `node --check web/embed.js` to check the JavaScript syntax. [Contributing](CONTRIBUTING.en.md) · [Security](SECURITY.en.md) · [License](LICENSE) · [Notices](NOTICE)

[Original component revision](https://github.com/GillHD/agilframe-core/commit/e49af79496ed8d4e200f520e2f7dd162bf789a7d)
