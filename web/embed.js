// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
const form = document.querySelector('#join');
const status = document.querySelector('#status');
const call = document.querySelector('#call');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = new FormData(form);
  try {
    const core = new URL(fields.get('server'));
    const loopback = ['localhost', '127.0.0.1', '[::1]'].includes(core.hostname);
    if (core.username || core.password || core.search || core.hash ||
        (core.protocol !== 'https:' && !(core.protocol === 'http:' && loopback))) {
      throw new Error('Укажите HTTPS-адрес Core или локальный HTTP-адрес.');
    }
    core.pathname = core.pathname.replace(/\/$/, '') + '/embed.html';
    for (const name of ['tenant', 'room', 'token']) {
      core.searchParams.set(name, fields.get(name).trim());
    }
    const frame = document.createElement('iframe');
    frame.title = 'Звонок AgilFrame';
    frame.allow = 'camera; microphone; display-capture; autoplay; fullscreen';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'no-referrer';
    frame.src = core.href;
    call.replaceChildren(frame);
    form.elements.namedItem('token').value = '';
    status.textContent = '';
  } catch (error) {
    status.textContent = error.message;
  }
});
