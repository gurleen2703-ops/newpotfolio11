/**
 * WORLD SOCIAL SOLUTIONS — Shared JS
 * Runs on every page: renders nav, footer, WA button, scroll effects
 */

/* ── NAV ─────────────────────────────────────────── */
function buildNav(activePage) {
  const pages = [
    { href:'../index.html',          label:'Home' },
    { href:'../pages/about.html',    label:'About' },
    { href:'../pages/services.html', label:'Services' },
    { href:'../pages/portfolio.html',label:'Portfolio' },
    { href:'../pages/contact.html',  label:'Contact' }
  ];
  // If we're on index.html adjust paths
  const isRoot = !window.location.pathname.includes('/pages/');
  const pagesAdj = pages.map(p => ({
    ...p,
    href: isRoot ? p.href.replace('../','') : p.href
  }));

  const links = pagesAdj.map(p =>
    `<li><a href="${p.href}" class="${p.label === activePage ? 'active' : ''}">${p.label}</a></li>`
  ).join('');
  const mlinks = pagesAdj.map(p =>
    `<a href="${p.href}" class="${p.label === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('');
  const contactHref = isRoot ? 'pages/contact.html' : '../pages/contact.html';

  document.getElementById('siteNav').innerHTML = `
    <a class="nav-brand" href="${isRoot ? 'index.html' : '../index.html'}">
      <div class="logo-box">W</div>
      <div>
        <div class="brand-text">World Social Solutions</div>
        <div class="brand-sub">Digital Marketing Agency</div>
      </div>
    </a>
    <ul class="nav-links">${links}</ul>
    <a class="nav-cta btn" href="${contactHref}">Start Project →</a>
    <button class="hamburger" id="ham" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  `;

  document.getElementById('mobileNav').innerHTML = mlinks +
    `<a href="${contactHref}" class="m-cta">Start Your Project →</a>`;

  // Hamburger
  const ham = document.getElementById('ham');
  const mob = document.getElementById('mobileNav');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
  });

  // Scroll shrink
  window.addEventListener('scroll', () => {
    document.getElementById('siteNav').classList.toggle('scrolled', window.scrollY > 50);
  });
}

/* ── FOOTER ──────────────────────────────────────── */
function buildFooter() {
  const c = WSS.company;
  const isRoot = !window.location.pathname.includes('/pages/');
  const pre = isRoot ? 'pages/' : '';

  document.getElementById('siteFooter').innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="fb-logo">
          <div class="logo-box">W</div>
          <span>${c.name}</span>
        </div>
        <p>${c.shortDesc}</p>
        <div class="footer-socials">
          <a href="${c.instagramUrl}" title="Instagram" target="_blank">📸</a>
          <a href="${c.facebookUrl}"  title="Facebook"  target="_blank">📘</a>
          <a href="${c.linkedinUrl}"  title="LinkedIn"  target="_blank">💼</a>
          <a href="${c.youtubeUrl}"   title="YouTube"   target="_blank">▶️</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Pages</h4>
        <ul>
          <li><a href="${isRoot?'index.html':'../index.html'}">Home</a></li>
          <li><a href="${pre}about.html">About Us</a></li>
          <li><a href="${pre}services.html">Services</a></li>
          <li><a href="${pre}portfolio.html">Portfolio</a></li>
          <li><a href="${pre}contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          ${WSS.services.slice(0,6).map(s=>`<li><a href="${pre}services.html">${s.title}</a></li>`).join('')}
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <div class="contact-item"><span>📍</span><span>${c.address}</span></div>
        <div class="contact-item"><span>📞</span><a href="tel:${c.phone}">${c.phone}</a></div>
        <div class="contact-item"><span>💬</span><a href="${c.whatsappLink}" target="_blank">${c.whatsapp}</a></div>
        <div class="contact-item"><span>✉️</span><a href="mailto:${c.email}">${c.email}</a></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ${c.name}. Founded by ${c.founderName}. All rights reserved.</span>
      <span>Made with ♥ in Tarn-Taran, Punjab · <a href="${isRoot?'admin/index.html':'../admin/index.html'}">Admin</a></span>
    </div>
  `;
}

/* ── WHATSAPP BUTTON ─────────────────────────────── */
function buildWA() {
  const c = WSS.company;
  document.getElementById('waFloat').innerHTML = `
    <a href="${c.whatsappLink}?text=${encodeURIComponent(c.whatsappMessage)}"
       class="wa-float" target="_blank" title="Chat on WhatsApp">💬</a>
  `;
}

/* ── SCROLL REVEAL ───────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e,i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('up'), i * 70);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── INIT (called per-page after setting activePage) ─ */
function wssInit(activePage) {
  buildNav(activePage);
  buildFooter();
  buildWA();
  setTimeout(initReveal, 100);
}

/* ── FORM SUBMIT ─────────────────────────────────── */
function handleContactForm(formId, successId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const success = document.getElementById(successId);
    if (success) { success.style.display = 'block'; }
    form.reset();
    setTimeout(() => { if (success) success.style.display = 'none'; }, 5000);
  });
}
