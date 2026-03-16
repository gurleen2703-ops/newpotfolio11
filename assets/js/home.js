/**
 * HOME PAGE RENDERER
 */
document.addEventListener('DOMContentLoaded', () => {
  // SEO
  const s = WSS.seo.home;
  document.title = s.title;
  setMeta('description', s.description);
  setMeta('keywords', s.keywords);
  setOG('title', s.title); setOG('description', s.description);

  wssInit('Home');
  renderHero();
  renderServices();
  renderAboutPreview();
  renderPortfolioPreview();
  renderIndustries();
  renderTestimonials();
  renderCTA();
});

function renderHero() {
  const c = WSS.company;
  document.getElementById('heroBadge').textContent = c.heroAvailBadge;
  document.getElementById('heroTitle').innerHTML =
    `Digital Marketing &amp; <span class="accent gradient-text">Creative Solutions</span><br>for Businesses Worldwide`;
  document.getElementById('heroSub').textContent =
    'Helping service-based businesses grow through strategic marketing, creative branding, and powerful digital presence — locally and internationally.';

  document.getElementById('heroBtns').innerHTML = `
    <a href="pages/contact.html" class="btn btn-primary">${c.ctaPrimary}</a>
    <a href="${c.whatsappLink}" class="btn btn-outline" target="_blank">💬 ${c.ctaSecondary}</a>
  `;

  document.getElementById('heroStats').innerHTML =
    WSS.stats.map(s => `<div class="stat-item"><h3>${s.value}</h3><p>${s.label}</p></div>`).join('');

  document.getElementById('heroFloat').innerHTML = `
    <h4>✦ Our Services</h4>
    ${WSS.services.map(s=>`<span class="service-pill">${s.title}</span>`).join('')}
  `;
}

function renderServices() {
  document.getElementById('servicesGrid').innerHTML =
    WSS.services.map((s,i) => `
      <div class="card srv-card reveal reveal-delay-${(i%4)+1}">
        <div class="srv-icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
      </div>
    `).join('');
  refreshReveal();
}

function renderAboutPreview() {
  const a = WSS.about; const c = WSS.company;
  const photoInner = c.founderPhotoPath
    ? `<img src="${c.founderPhotoPath}" alt="${c.founderName}">`
    : `<div class="about-photo-inner">
         <div class="about-initials">${c.founderInitials}</div>
         <h3>${c.founderName}</h3><span>${c.founderTitle}</span>
       </div>`;
  const features = a.features.map(f => `
    <div class="feat-item">
      <div class="feat-check">✓</div>
      <p><strong>${f.title}</strong> — ${f.desc}</p>
    </div>`).join('');

  document.getElementById('aboutGrid').innerHTML = `
    <div class="about-image-wrap reveal">
      <div class="about-photo">${photoInner}</div>
      <div class="about-badge"><h4>${c.founded}</h4><p>Founded</p></div>
    </div>
    <div class="about-text reveal reveal-delay-2">
      <p class="sec-tag">${a.sectionTag}</p>
      <h2 class="sec-title">${a.title}</h2>
      ${a.paragraphs.map(p=>`<p>${p}</p>`).join('')}
      <div class="about-features">${features}</div>
      <div class="mt-24">
        <a href="pages/about.html" class="btn btn-outline">Meet the Founder →</a>
      </div>
    </div>
  `;
  refreshReveal();
}

function renderPortfolioPreview() {
  const items = WSS.portfolio.slice(0,6);
  document.getElementById('portfolioGrid').innerHTML = items.map((p,i) => {
    const thumb = p.imagePath
      ? `<img src="${p.imagePath}" alt="${p.title}">`
      : `<span class="pt-emoji">${p.emoji}</span>`;
    const link = p.link ? `<a href="${p.link}" target="_blank" class="port-link">${p.linkLabel}</a>` : '';
    return `
      <div class="port-card reveal reveal-delay-${(i%3)+1}">
        <div class="port-thumb" style="${p.bgGrad?'background:'+p.bgGrad:''}">${thumb}</div>
        <div class="port-info">
          <div class="pm">${p.meta}</div>
          <h3>${p.title}</h3>
          <p>${p.description.substring(0,80)}…</p>
          ${link}
        </div>
      </div>`;
  }).join('');
  refreshReveal();
}

function renderIndustries() {
  document.getElementById('industriesGrid').innerHTML =
    WSS.industries.map((ind,i) => `
      <div class="ind-chip reveal reveal-delay-${(i%4)+1}">
        <div class="ic-icon">${ind.icon}</div>
        <p>${ind.label}</p>
      </div>`).join('');
  refreshReveal();
}

function renderTestimonials() {
  document.getElementById('testimonialsGrid').innerHTML =
    WSS.testimonials.map((t,i) => {
      const av = t.avatarPath
        ? `<img src="${t.avatarPath}" alt="${t.name}">`
        : t.initials;
      return `
        <div class="test-card reveal reveal-delay-${i+1}">
          <div class="test-quote">"</div>
          <div class="test-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5-t.rating)}</div>
          <blockquote>${t.quote}</blockquote>
          <div class="test-foot">
            <div class="test-av">${av}</div>
            <div><h4>${t.name}</h4><span>${t.title}</span></div>
          </div>
        </div>`;
    }).join('');
  refreshReveal();
}

function renderCTA() {
  const c = WSS.company;
  document.getElementById('ctaActions').innerHTML = `
    <a href="pages/contact.html" class="btn btn-primary">Get Free Consultation</a>
    <a href="${c.whatsappLink}" class="wa-cta-btn" target="_blank">💬 Chat on WhatsApp</a>
  `;
}

/* helpers */
function setMeta(name,content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
  el.content = content;
}
function setOG(prop,content) {
  let el = document.querySelector(`meta[property="og:${prop}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute('property',`og:${prop}`); document.head.appendChild(el); }
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
