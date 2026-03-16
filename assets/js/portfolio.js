let activeFilter = 'all';
document.addEventListener('DOMContentLoaded', () => {
  const s = WSS.seo.portfolio;
  document.title = s.title; setMeta('description',s.description); setMeta('keywords',s.keywords);
  wssInit('Portfolio');
  renderFilters(); renderPortfolio('all'); renderSocialShowcase(); renderStats(); renderCTA();
});

function renderFilters() {
  const cats = ['all',...new Set(WSS.portfolio.map(p=>p.category))];
  const labels = {all:'All Work',websites:'Websites',branding:'Branding',video:'Video',social:'Social Media',print:'Print Design'};
  document.getElementById('portfolioFilters').innerHTML = cats.map(c=>
    `<button class="pf-btn ${c==='all'?'active':''}" onclick="filterPortfolio('${c}')">${labels[c]||c}</button>`
  ).join('');
}

function filterPortfolio(cat) {
  activeFilter = cat;
  document.querySelectorAll('.pf-btn').forEach(b => b.classList.toggle('active', b.textContent.trim() === (({all:'All Work',websites:'Websites',branding:'Branding',video:'Video',social:'Social Media',print:'Print Design'})[cat]||cat)));
  document.querySelectorAll('.pfc').forEach(card => {
    const match = cat==='all' || card.dataset.cat === cat;
    card.classList.toggle('pfc-hidden', !match);
    card.style.display = match ? '' : 'none';
  });
}

function renderPortfolio() {
  document.getElementById('portFullGrid').innerHTML = WSS.portfolio.map((p,i)=>{
    const thumb = p.imagePath ? `<img src="${p.imagePath}" alt="${p.title}">` : `<span class="pfe">${p.emoji}</span>`;
    const link  = p.link ? `<a href="${p.link}" target="_blank" class="pfc-link">${p.linkLabel}</a>` : '';
    const tags  = (p.tags||[]).map(t=>`<span class="pfc-tag">${t}</span>`).join('');
    return `
      <div class="pfc reveal reveal-delay-${(i%3)+1}" data-cat="${p.category}">
        <div class="pfc-thumb" style="${p.bgGrad?'background:'+p.bgGrad:''}">${thumb}</div>
        <div class="pfc-info">
          <div class="pfc-meta">${p.meta}</div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          ${tags?`<div class="pfc-tags">${tags}</div>`:''}
          ${link}
        </div>
      </div>`;
  }).join('');
  refreshReveal();
}

function renderSocialShowcase() {
  document.getElementById('socialShowcaseGrid').innerHTML = WSS.socialClients.map((c,i)=>`
    <div class="ssg-card reveal reveal-delay-${i+1}">
      <div class="ssg-plat">📸 ${c.platform}</div>
      <h3>${c.name}</h3>
      <div class="ssg-ind">${c.industry}</div>
      <div class="ssg-tags">${c.tags.map(t=>`<span class="ssg-tag">${t}</span>`).join('')}</div>
      ${c.result?`<p class="ssg-result">✓ ${c.result}</p>`:''}
      <a href="${c.link}" target="_blank" class="ssg-link">View Page ↗</a>
    </div>`).join('');
  refreshReveal();
}

function renderStats() {
  document.getElementById('pstatsInner').innerHTML = WSS.stats.map(s=>`
    <div class="pst-item reveal"><h3>${s.value}</h3><p>${s.label}</p></div>`).join('');
  refreshReveal();
}

function renderCTA() {
  const c = WSS.company;
  document.getElementById('pctaBtns').innerHTML = `
    <a href="contact.html" class="btn btn-primary">Start Your Project</a>
    <a href="${c.whatsappLink}" class="btn btn-outline" target="_blank">💬 WhatsApp</a>`;
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
