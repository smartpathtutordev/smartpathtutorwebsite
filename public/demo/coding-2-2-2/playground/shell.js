/* SmartPath Coding · Creative Playground shell (shared by every playground engine)
   Each engine page:  <link rel="stylesheet" href="shell.css"> <script src="shell.js"></script>
   then:  PG.boot(cfg => { ...build your UI inside PG.root ... });
   API:
     PG.cfg            the lesson's playground config (playgrounds/<id>.json)
     PG.root           the element your engine fills (flex:1, full size under the header)
     PG.say(text,key)  Codi speaks (voice/P/<id>/<key>.wav; falls back to the device voice); returns a Promise
     PG.done(checkId)  tick a badge goal (ids come from cfg.badge.checks[].id); when all are ticked the badge is awarded
     PG.save(project)  save the kid's work (localStorage + app bridge); PG.load() returns the saved project or null
     PG.sfx.pop()/ding()/oops()/tada()/step()
     PG.toast(html)    quick feedback bubble
     PG.art(name)      URL of a prop picture;  PG.bg(name) URL of a background;  PG.pic(name,size) <img> HTML with placeholder fallback
     PG.emit(event)    send any event to the app
*/
(function () {
  const Q = new URLSearchParams(location.search);
  const CFG = Object.assign({ base: Q.get('base') || '../', id: Q.get('id') || '', lang: Q.get('lang') || 'en' }, window.PLAYGROUND_CONFIG || {});
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const PG = window.PG = { esc, base: CFG.base, id: CFG.id };
  PG.art = n => `${CFG.base}art/props/${n}.png`;
  PG.bg = n => `${CFG.base}art/bg/${n}.jpg`;
  PG.pic = (name, size = 100) => {
    if (!name) return '';
    const C = { red: '#FF6B6B', blue: '#2EA8F5', yellow: '#FFC93C', green: '#4CC76A' }[name];
    if (C) return `<span class="pg-ball" style="width:${size * .8}px;height:${size * .8}px;background:${C}"></span>`;
    return `<img class="pg-pic" src="${PG.art(name)}" alt="" style="width:${size}px;height:${size}px" onerror="this.outerHTML='<span class=pg-ph style=width:${size}px;height:${size}px>${name.replace(/^[a-z0-9]+_/, '').replace(/_/g, ' ')}</span>'">`;
  };
  /* ---- bridge ---- */
  PG.emit = ev => { ev.playground = CFG.id; try { window.SmartPathBridge && SmartPathBridge.postMessage(JSON.stringify(ev)); } catch (e) {} try { parent !== window && parent.postMessage(ev, '*'); } catch (e) {} };
  /* ---- sound effects ---- */
  let AC; const tone = seq => { try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); const t0 = AC.currentTime;
    seq.forEach(([f, d, st = 0, type = 'sine', v = .18]) => { const o = AC.createOscillator(), g = AC.createGain(); o.type = type; o.frequency.value = f; g.gain.setValueAtTime(0, t0 + st); g.gain.linearRampToValueAtTime(v, t0 + st + .01); g.gain.exponentialRampToValueAtTime(.001, t0 + st + d); o.connect(g).connect(AC.destination); o.start(t0 + st); o.stop(t0 + st + d + .05); }); } catch (e) {} };
  PG.tone = tone;
  PG.sfx = { pop: () => tone([[660, .12, 0, 'triangle']]), ding: () => tone([[880, .25], [1320, .35, .1]]), oops: () => tone([[300, .2, 0, 'square', .08], [220, .3, .15, 'square', .08]]),
    tada: () => tone([[523, .2], [659, .2, .12], [784, .2, .24], [1047, .5, .36]]), step: () => tone([[520, .06, 0, 'triangle', .1]]) };
  /* ---- data ---- */
  const loadJS = src => new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
  async function getData(dir, key) {
    try { return await fetch(`${CFG.base}${dir}/${CFG.id}.json`).then(r => { if (!r.ok) throw 0; return r.json(); }); }
    catch (e) { try { await loadJS(`${CFG.base}${dir}/${CFG.id}.js`); return window[key]; } catch (e2) { return null; } }
  }
  /* ---- voice ---- */
  let cur = null, talkUntil = 0, last = null;
  PG.say = (text, key, common) => {
    last = [text, key, common]; const b = document.getElementById('pg-say'); if (b) b.innerHTML = esc(text);
    document.getElementById('pg-bubble').classList.add('show');
    if (cur) { cur.pause(); cur = null; } try { speechSynthesis.cancel(); } catch (e) {}
    return new Promise(res => {
      if (!key) { setTimeout(res, 300 * text.split(' ').length); return; }
      const a = new Audio(`${CFG.base}voice/P/${common ? 'common' : CFG.id}/${key}.mp3`); cur = a; let done = false;
      const fin = () => { if (!done) { done = true; talkUntil = 0; res(); } };
      a.onplaying = () => { talkUntil = performance.now() + (a.duration || 3) * 1000; }; a.onended = fin;
      a.onerror = () => { try { const u = new SpeechSynthesisUtterance(text); u.lang = 'en-US'; u.rate = .95; u.pitch = 1.3; u.onstart = () => talkUntil = performance.now() + 60000; u.onend = fin; u.onerror = fin; speechSynthesis.speak(u); } catch (e) { fin(); } setTimeout(fin, 400 * text.split(' ').length + 1500); };
      a.play().catch(() => a.onerror());
    });
  };
  PG.toast = (html, ms = 1000) => { const t = document.getElementById('pg-toast'); t.innerHTML = html; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), ms); };
  /* ---- save / load ---- */
  const KEY = `spc_pg_${CFG.id}`;
  PG.save = (project, quiet) => { try { localStorage.setItem(KEY, JSON.stringify(project)); } catch (e) {} PG.emit({ type: 'saveProject', project }); if (!quiet) { PG.sfx.pop(); PG.toast('💾 Saved!'); } };
  PG.load = () => { if (window.PLAYGROUND_SAVED) return window.PLAYGROUND_SAVED; try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; } };
  /* ---- badge ---- */
  const ticked = new Set(); let awarded = false;
  PG.done = id => {
    const checks = (PG.cfg.badge && PG.cfg.badge.checks) || []; if (!checks.some(c => c.id === id) || ticked.has(id)) return;
    ticked.add(id); PG.sfx.ding(); drawGoals(); PG.emit({ type: 'goalDone', goal: id });
    const c = checks.find(c => c.id === id); PG.toast('✅ ' + esc(c.text), 1400);
    try { localStorage.setItem(KEY + '_goals', JSON.stringify([...ticked])); } catch (e) {}
    if (!awarded && checks.every(c => ticked.has(c.id))) { awarded = true; setTimeout(award, 900); }
  };
  function badgeSVG(size = 180) {
    const b = PG.cfg.badge || {}, col = b.color || '#7B5CFF';
    return `<svg width="${size}" height="${size}" viewBox="0 0 200 200"><defs><linearGradient id="bgr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>
      <path d="M60 150 L45 198 L72 184 L86 200 L96 156 Z" fill="#FF6B6B"/><path d="M140 150 L155 198 L128 184 L114 200 L104 156 Z" fill="#2EA8F5"/>
      <polygon points="100,8 121,30 151,24 157,54 184,70 170,97 184,124 157,140 151,170 121,164 100,186 79,164 49,170 43,140 16,124 30,97 16,70 43,54 49,24 79,30" fill="${col}"/>
      <circle cx="100" cy="97" r="62" fill="#fff"/><circle cx="100" cy="97" r="54" fill="${col}" opacity=".15"/>
      <foreignObject x="48" y="45" width="104" height="104"><div xmlns="http://www.w3.org/1999/xhtml" style="width:104px;height:104px;display:flex;align-items:center;justify-content:center">${b.img ? PG.pic(b.img, 92) : '<span style="font-size:60px">⭐</span>'}</div></foreignObject>
      <polygon points="100,8 121,30 151,24 157,54 184,70 170,97 184,124 157,140 151,170 121,164 100,186 79,164 49,170 43,140 16,124 30,97 16,70 43,54 49,24 79,30" fill="url(#bgr)"/></svg>`;
  }
  PG.badgeSVG = badgeSVG;
  async function award() {
    const b = PG.cfg.badge || {}; PG.sfx.tada(); confetti(); PG.emit({ type: 'badgeEarned', badge: b.name, goals: [...ticked] });
    try { localStorage.setItem(KEY + '_badge', '1'); } catch (e) {}
    const ov = document.getElementById('pg-over'); ov.innerHTML = `<div class="pg-card"><div class="pg-bdg">${badgeSVG(200)}</div><h2>${esc(b.name || 'Badge')}</h2><p>${esc(b.say || '')}</p>
      <div class="pg-row"><button class="pg-go" id="pg-keep">Keep playing</button><button class="pg-ghost" id="pg-next">Next lesson ▶</button></div></div>`; ov.classList.add('show');
    document.getElementById('pg-keep').onclick = () => ov.classList.remove('show'); document.getElementById('pg-next').onclick = () => PG.emit({ type: 'next' });
    drawBadgeSlot(); await PG.say(b.say || 'You earned a badge!', 'badge');
  }
  function drawBadgeSlot() { const s = document.getElementById('pg-badge'); s.innerHTML = badgeSVG(44); s.classList.toggle('earned', awarded); }
  function drawGoals() {
    const checks = (PG.cfg.badge && PG.cfg.badge.checks) || [];
    document.getElementById('pg-goals').innerHTML = `<div class="pg-gt">Badge goals</div>` + checks.map(c => `<div class="pg-g ${ticked.has(c.id) ? 'on' : ''}"><span>${ticked.has(c.id) ? '✔' : ''}</span>${esc(c.text)}</div>`).join('');
  }
  function confetti() { const cv = document.getElementById('pg-conf'), x = cv.getContext('2d'); cv.width = innerWidth; cv.height = innerHeight;
    const P = [...Array(140)].map(() => ({ x: Math.random() * cv.width, y: -20 - Math.random() * 200, vx: (Math.random() - .5) * 4, vy: 2 + Math.random() * 4, c: ['#FFC93C', '#FF6B6B', '#2EA8F5', '#4CC76A', '#7B5CFF'][Math.floor(Math.random() * 5)], r: Math.random() * 6 }));
    let f = 0; (function step() { x.clearRect(0, 0, cv.width, cv.height); P.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += .06; p.r += .1; x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.fillStyle = p.c; x.fillRect(-6, -4, 12, 8); x.restore(); }); if (++f < 220) requestAnimationFrame(step); else x.clearRect(0, 0, cv.width, cv.height); })(); }
  PG.confetti = confetti;
  /* ---- page chrome ---- */
  function chrome() {
    document.body.insertAdjacentHTML('afterbegin', `
<header id="pg-top"><button id="pg-close" aria-label="Close">✕</button>
 <div id="pg-title"><span class="pg-pill">Creative playground</span><b id="pg-tt"></b></div>
 <button class="pg-ghost" id="pg-ideas">💡 Ideas</button><button class="pg-ghost" id="pg-goalsbtn">🏅 Goals</button><button class="pg-ghost" id="pg-savebtn">💾 Save</button><div id="pg-badge" title="Badge"></div></header>
<main id="pg-root"></main>
<div id="pg-goals"></div>
<div id="pg-codi"><svg viewBox="-10 0 430 330" width="92"><rect x="202" y="48" width="13" height="55" fill="#1F2A44"/><circle id="pg-ant" cx="208" cy="35" r="26" fill="#FF6B6B"/>
 <circle cx="64" cy="200" r="29" fill="#7B5CFF"/><circle cx="352" cy="200" r="29" fill="#7B5CFF"/><rect x="64" y="96" width="288" height="208" rx="58" fill="#2EA8F5"/><rect x="99" y="131" width="218" height="138" rx="38" fill="#1F2A44"/>
 <g id="pg-eyes"><circle cx="168" cy="189" r="22" fill="#6CF0FF"/><circle cx="248" cy="189" r="22" fill="#6CF0FF"/></g><path id="pg-smile" d="M173,232 Q208,256 243,232" stroke="#6CF0FF" stroke-width="8" stroke-linecap="round" fill="none"/><ellipse id="pg-mouth" cx="208" cy="240" rx="22" ry="4" fill="#6CF0FF" opacity="0"/></svg>
 <div id="pg-bubble"><span id="pg-say"></span><button id="pg-replay" aria-label="Hear again">🔊</button><button id="pg-hide" aria-label="Hide">✕</button></div></div>
<div id="pg-toast"></div><div id="pg-over"></div><canvas id="pg-conf"></canvas>`);
    document.getElementById('pg-close').onclick = () => PG.emit({ type: 'close' });
    document.getElementById('pg-replay').onclick = () => last && PG.say(...last);
    document.getElementById('pg-hide').onclick = () => document.getElementById('pg-bubble').classList.remove('show');
    document.getElementById('pg-codi').querySelector('svg').onclick = () => PG.say(PG.cfg.challenge, 'challenge');
    document.getElementById('pg-goalsbtn').onclick = () => document.getElementById('pg-goals').classList.toggle('show');
    document.getElementById('pg-savebtn').onclick = () => PG.onSave ? PG.onSave() : PG.toast('Nothing to save yet');
    document.getElementById('pg-ideas').onclick = () => { const ov = document.getElementById('pg-over');
      ov.innerHTML = `<div class="pg-card"><h2>💡 Try these ideas</h2><ol>${(PG.cfg.ideas || []).map(i => `<li>${esc(i)}</li>`).join('')}</ol><button class="pg-go" id="pg-ok">OK!</button></div>`; ov.classList.add('show');
      document.getElementById('pg-ok').onclick = () => ov.classList.remove('show'); };
    (function anim(t) { const talking = performance.now() < talkUntil; const m = document.getElementById('pg-mouth');
      if (m) { m.setAttribute('opacity', talking ? 1 : 0); document.getElementById('pg-smile').setAttribute('opacity', talking ? 0 : 1); m.setAttribute('ry', talking ? 5 + 13 * Math.abs(Math.sin(t / 70)) : 4);
        document.getElementById('pg-eyes').setAttribute('transform', (t % 3700) < 130 ? 'translate(0,189) scale(1,.12) translate(0,-189)' : ''); document.getElementById('pg-ant').setAttribute('fill', talking && Math.floor(t / 160) % 2 ? '#FFC93C' : '#FF6B6B'); }
      requestAnimationFrame(anim); })(0);
  }
  /* the app can push a saved project in: SmartPathLoad(project) (web iframe: iframe.contentWindow.SmartPathLoad; mobile: runJavaScript) */
  window.SmartPathLoad = p => { try { const s = JSON.stringify(p); if (localStorage.getItem(KEY) !== s) { localStorage.setItem(KEY, s); location.reload(); } } catch (e) {} };
  PG.boot = async (start) => {
    chrome(); PG.root = document.getElementById('pg-root');
    PG.cfg = window.PLAYGROUND || await getData('playgrounds', 'PLAYGROUND') || {};
    const L = window.LESSON_META || await getData('lessons', 'LESSON_META') || {};
    PG.cfg.title = PG.cfg.title || L.title || ''; document.getElementById('pg-tt').textContent = PG.cfg.title;
    if (PG.cfg.bg) document.body.style.setProperty('--pg-bg', `url(${PG.bg(PG.cfg.bg)})`);
    try { (JSON.parse(localStorage.getItem(KEY + '_goals') || '[]')).forEach(g => ticked.add(g)); awarded = localStorage.getItem(KEY + '_badge') === '1'; } catch (e) {}
    drawGoals(); drawBadgeSlot();
    const ov = document.getElementById('pg-over');
    ov.innerHTML = `<div class="pg-card"><span class="pg-pill">Creative playground · ${esc(CFG.id)}</span><h2>${esc(PG.cfg.title)}</h2><div class="pg-bdg small">${badgeSVG(120)}</div><p>${esc(PG.cfg.challenge || '')}</p>
      <button class="pg-play" id="pg-start" aria-label="Start"><svg width="54" height="54" viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="#fff"/></svg></button></div>`; ov.classList.add('show');
    document.getElementById('pg-start').onclick = () => { ov.classList.remove('show'); PG.sfx.pop(); PG.emit({ type: 'playgroundStart' }); PG.say(PG.cfg.challenge || '', 'challenge'); };
    PG.emit({ type: 'ready' });
    start(PG.cfg);
  };
})();
