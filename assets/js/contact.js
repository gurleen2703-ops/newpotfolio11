document.addEventListener('DOMContentLoaded', () => {
  const s = WSS.seo.contact;
  document.title = s.title; setMeta('description',s.description); setMeta('keywords',s.keywords);
  wssInit('Contact');
  renderContactInfo(); renderServiceDropdown(); renderReviewStrip(); renderFAQs();
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('formSuccess').style.display = 'block';
    e.target.reset();
    setTimeout(() => document.getElementById('formSuccess').style.display='none', 6000);
  });
});

function renderContactInfo() {
  const c = WSS.company;
  const socials = [
    {icon:'📸',label:'Instagram',url:c.instagramUrl},{icon:'📘',label:'Facebook',url:c.facebookUrl},
    {icon:'💼',label:'LinkedIn',url:c.linkedinUrl},{icon:'▶️',label:'YouTube',url:c.youtubeUrl}
  ].map(s=>`<a class="ci-soc-icon" href="${s.url}" title="${s.label}" target="_blank">${s.icon}</a>`).join('');

  document.getElementById('contactInfoCol').innerHTML = `
    <h2>Contact Details</h2>
    <div class="ci-item"><div class="ci-icon">📍</div><div><h4>Address</h4><p>${c.address}</p></div></div>
    <div class="ci-item"><div class="ci-icon">📞</div><div><h4>Phone</h4><p><a href="tel:${c.phone}">${c.phone}</a></p></div></div>
    <div class="ci-item"><div class="ci-icon">💬</div><div><h4>WhatsApp</h4><p><a href="${c.whatsappLink}" target="_blank">${c.whatsapp}</a></p></div></div>
    <div class="ci-item"><div class="ci-icon">✉️</div><div><h4>Email</h4><p><a href="mailto:${c.email}">${c.email}</a></p></div></div>
    <div class="ci-socials">
      <h4>Follow Us</h4>
      <div class="ci-soc-icons">${socials}</div>
    </div>
    <a href="${c.whatsappLink}?text=${encodeURIComponent(c.whatsappMessage)}" class="wa-big-btn" target="_blank">
      💬 Chat on WhatsApp Now
    </a>`;
}

function renderServiceDropdown() {
  document.getElementById('serviceSelect').innerHTML =
    `<option value="">Select a service...</option>` +
    WSS.services.map(s=>`<option value="${s.title}">${s.title}</option>`).join('');
}

function renderReviewStrip() {
  const c = WSS.company;
  document.getElementById('reviewInner').innerHTML = `
    <div class="ri-score reveal">
      <h2>${c.googleRating}</h2>
      <div class="ri-stars">★★★★★</div>
      <p>Google Rating${c.googleReviewCount?' · '+c.googleReviewCount+' Reviews':''}</p>
    </div>
    <div class="ri-note reveal reveal-delay-2">
      <p><strong>Google Business Profile coming soon.</strong><br>We're collecting verified reviews from our clients across healthcare, real estate, immigration and more. Check back soon!</p>
    </div>`;
  refreshReveal();
}

function renderFAQs() {
  document.getElementById('cfaqGrid').innerHTML = WSS.faqs.slice(0,6).map((f,i)=>`
    <div class="cfaq-card reveal reveal-delay-${(i%3)+1}">
      <h4>${f.q}</h4><p>${f.a}</p>
    </div>`).join('');
  refreshReveal();
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
