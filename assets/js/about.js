document.addEventListener('DOMContentLoaded', () => {
  const s = WSS.seo.about;
  document.title = s.title;
  setMeta('description', s.description);
  setMeta('keywords', s.keywords);
  wssInit('About');
  renderFounder(); renderMV(); renderValues(); renderProcess(); renderIndustries(); renderStats(); renderCTA();
});

function renderFounder() {
  const c = WSS.company; const a = WSS.about;
  document.getElementById('phSub').textContent = 'Learn how Gurleen Kaur built World Social Solutions from freelancing into a full-service digital marketing agency.';
  const photoInner = c.founderPhotoPath
    ? `<img src="${c.founderPhotoPath}" alt="${c.founderName}">`
    : `<div><div class="founder-initials-lg">${c.founderInitials}</div><p>${c.founderName}</p><span>${c.founderTitle}</span></div>`;
  const feats = a.features.map((f,i) => `
    <div class="feat-row reveal reveal-delay-${i+1}">
      <div class="feat-num">${i+1}</div>
      <p><strong>${f.title}</strong> — ${f.desc}</p>
    </div>`).join('');
  document.getElementById('founderGrid').innerHTML = `
    <div class="founder-photo-wrap reveal">
      <div class="founder-photo">${photoInner}</div>
      <div class="founder-badge"><h4>${c.founded}</h4><p>Founded</p></div>
    </div>
    <div class="founder-text reveal reveal-delay-2">
      <p class="sec-tag">${a.sectionTag}</p>
      <h2 class="sec-title">${a.title}</h2>
      ${a.paragraphs.map(p=>`<p>${p}</p>`).join('')}
      <div class="features-list">${feats}</div>
    </div>`;
  refreshReveal();
}

function renderMV() {
  const a = WSS.about;
  document.getElementById('mvGrid').innerHTML = `
    <div class="mv-card reveal">
      <div class="mv-icon">🎯</div>
      <h3>Our Mission</h3>
      <p>${a.mission}</p>
    </div>
    <div class="mv-card reveal reveal-delay-2">
      <div class="mv-icon">🔭</div>
      <h3>Our Vision</h3>
      <p>${a.vision}</p>
    </div>`;
  refreshReveal();
}

function renderValues() {
  const vals = [
    { icon:'🤝', title:'Client-First Always',     desc:'Every decision we make is rooted in what delivers the best outcome for our clients — not what is easiest for us.' },
    { icon:'📊', title:'Data-Driven Strategy',     desc:'We base every strategy on real data, market research, and measurable KPIs — not assumptions or guesswork.' },
    { icon:'⚡', title:'Fast & Reliable Delivery', desc:'We respect your time. Projects are delivered on schedule with regular communication throughout the process.' },
    { icon:'🎨', title:'Creative with Purpose',    desc:'Creativity is at our core, but every creative choice serves a strategic goal — to attract, engage, and convert.' },
    { icon:'🌍', title:'Global Perspective',       desc:'We bring an international mindset to every project, ensuring your brand resonates with both local and global audiences.' },
    { icon:'📈', title:'Growth-Focused',           desc:'Our definition of success is your growth. We measure outcomes, not just outputs.' }
  ];
  document.getElementById('valuesGrid').innerHTML = vals.map((v,i) => `
    <div class="val-card reveal reveal-delay-${(i%3)+1}">
      <div class="val-icon">${v.icon}</div>
      <h3>${v.title}</h3>
      <p>${v.desc}</p>
    </div>`).join('');
  refreshReveal();
}

function renderProcess() {
  document.getElementById('processWrap').innerHTML = WSS.process.map((s,i) => `
    <div class="proc-step reveal reveal-delay-${i+1}">
      <div class="proc-num">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>`).join('');
  refreshReveal();
}

function renderIndustries() {
  document.getElementById('indFlex').innerHTML = WSS.industries.map(i => `
    <div class="ind-tag reveal"><span class="it-icon">${i.icon}</span>${i.label}</div>`).join('');
  refreshReveal();
}

function renderStats() {
  document.getElementById('statsBand').innerHTML = WSS.stats.map(s => `
    <div class="sb-item reveal">
      <h3>${s.value}</h3><p>${s.label}</p>
    </div>`).join('');
  refreshReveal();
}

function renderCTA() {
  const c = WSS.company;
  document.getElementById('actaBtns').innerHTML = `
    <a href="contact.html" class="btn btn-primary">Get Free Consultation</a>
    <a href="${c.whatsappLink}" class="btn btn-outline" target="_blank">💬 WhatsApp Us</a>`;
}

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
  el.content = content;
}
function refreshReveal() {
  setTimeout(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e,i) => {
        if (e.isIntersecting) { setTimeout(()=>e.target.classList.add('up'),i*70); obs.unobserve(e.target); }
      });
    }, { threshold:0.08 });
    document.querySelectorAll('.reveal:not(.up)').forEach(el => obs.observe(el));
  }, 50);
}
