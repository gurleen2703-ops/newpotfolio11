document.addEventListener('DOMContentLoaded', () => {
  const s = WSS.seo.services;
  document.title = s.title; setMeta('description',s.description); setMeta('keywords',s.keywords);
  wssInit('Services');
  renderServicesDetailed(); renderSocialClients(); renderProcess(); renderFAQs(); renderCTA();
});

const serviceIncludes = {
  "Social Media Management":   ["Content Strategy","Post Scheduling","Story Creation","Audience Engagement","Monthly Reports"],
  "Graphic Designing":         ["Logo Design","Brand Identity Kit","Social Media Creatives","Marketing Materials","File Formats: PNG/SVG/PDF"],
  "Website Designing":         ["Responsive Design","Mobile-First","SEO-Friendly Code","Contact Forms","Fast Loading"],
  "Video Editing":             ["Reel Editing","Transitions & Effects","Music Sync","Captions","Export in HD"],
  "Paid Ads – Meta":           ["Campaign Strategy","Ad Copywriting","Audience Targeting","A/B Testing","Performance Reports"],
  "Google My Business Setup":  ["Profile Setup","Category Optimization","Post Scheduling","Review Management","Local SEO"],
  "Branding & Identity":       ["Logo Design","Colour Palette","Typography System","Brand Guidelines","Mockup Design"],
  "SEO":                       ["Keyword Research","On-Page SEO","Technical Audit","Link Building","Monthly Reports"],
  "Shoots & Invitation Cards": ["Product Photography","Event Shoots","Digital Invitations","Print-Ready Designs","Quick Turnaround"]
};

function renderServicesDetailed() {
  document.getElementById('servicesDetailGrid').innerHTML =
    WSS.services.map((s,i) => {
      const inc = (serviceIncludes[s.title] || []).map(t=>`<span class="sdc-tag">${t}</span>`).join('');
      return `
        <div class="srv-detail-card reveal reveal-delay-${(i%3)+1}">
          ${s.featured ? '<span class="sdc-featured">⭐ Popular</span>' : ''}
          <div class="sdc-icon">${s.icon}</div>
          <h3>${s.title}</h3>
          <p>${s.description}</p>
          ${inc ? `<div class="sdc-includes">${inc}</div>` : ''}
        </div>`;
    }).join('');
  refreshReveal();
}

function renderSocialClients() {
  document.getElementById('socialGrid').innerHTML =
    WSS.socialClients.map((c,i) => `
      <div class="sc-card reveal reveal-delay-${i+1}">
        <div class="sc-platform">📸 ${c.platform}</div>
        <h3>${c.name}</h3>
        <div class="sc-industry">${c.industry}</div>
        <div class="sc-tags">${c.tags.map(t=>`<span class="sc-tag">${t}</span>`).join('')}</div>
        ${c.result?`<p class="sc-result">✓ ${c.result}</p>`:''}
        <a href="${c.link}" target="_blank" class="sc-link">View ${c.platform} Page ↗</a>
      </div>`).join('');
  refreshReveal();
}

function renderProcess() {
  document.getElementById('srvProcessSteps').innerHTML = WSS.process.map((s,i) => `
    <div class="sps-step reveal reveal-delay-${i+1}">
      <div class="sps-num">${s.icon}</div>
      <h3>${s.title}</h3><p>${s.desc}</p>
    </div>`).join('');
  refreshReveal();
}

function renderFAQs() {
  document.getElementById('faqList').innerHTML = WSS.faqs.map((f,i) => `
    <div class="faq-item reveal reveal-delay-${(i%3)+1}" data-i="${i}">
      <div class="faq-q" onclick="toggleFAQ(${i})">
        <span>${f.q}</span><span class="faq-arr">▾</span>
      </div>
      <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
    </div>`).join('');
  refreshReveal();
}

function toggleFAQ(i) {
  const item = document.querySelector(`.faq-item[data-i="${i}"]`);
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

function renderCTA() {
  const c = WSS.company;
  document.getElementById('sctaBtns').innerHTML = `
    <a href="contact.html" class="btn btn-primary">Get Free Consultation</a>
    <a href="${c.whatsappLink}" class="btn btn-outline" target="_blank">💬 WhatsApp Us</a>`;
}

function setMeta(name,content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) { el=document.createElement('meta'); el.name=name; document.head.appendChild(el); }
  el.content = content;
}
function refreshReveal() {
  setTimeout(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e,i) => { if (e.isIntersecting) { setTimeout(()=>e.target.classList.add('up'),i*70); obs.unobserve(e.target); } });
    }, { threshold:0.08 });
    document.querySelectorAll('.reveal:not(.up)').forEach(el => obs.observe(el));
  }, 50);
}
