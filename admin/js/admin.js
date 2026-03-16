/* ── ADMIN JS — World Social Solutions ── */

/* Navigation */
document.querySelectorAll('.sb-item').forEach(item => {
  item.addEventListener('click', () => {
    goSec(item.dataset.s);
    if (window.innerWidth < 900) document.getElementById('sidebar').classList.remove('open');
  });
});
document.getElementById('adminToggle').addEventListener('click', () =>
  document.getElementById('sidebar').classList.toggle('open'));

function goSec(name) {
  document.querySelectorAll('.sb-item').forEach(i => i.classList.toggle('active', i.dataset.s === name));
  document.querySelectorAll('.asec').forEach(s => s.classList.toggle('active', s.id === `asec-${name}`));
  const titles = {dashboard:'Dashboard',company:'Company Info',seo:'SEO Settings',stats:'Hero Stats',services:'Services',about:'About / Founder',process:'Process Steps',faqs:'FAQs',portfolio:'Portfolio',socialclients:'Social Clients',testimonials:'Testimonials',industries:'Industries'};
  document.getElementById('adminTitle').textContent = titles[name] || name;
  renderSec(name);
}

function renderSec(name) {
  switch(name) {
    case 'dashboard':   renderDash(); break;
    case 'company':     renderCompany(); break;
    case 'seo':         renderSEO(); break;
    case 'stats':       renderStats(); break;
    case 'services':    renderServices(); break;
    case 'about':       renderAbout(); break;
    case 'process':     renderProcess(); break;
    case 'faqs':        renderFAQs(); break;
    case 'portfolio':   renderPortfolio(); break;
    case 'socialclients': renderSocialClients(); break;
    case 'testimonials':  renderTestimonials(); break;
    case 'industries':    renderIndustries(); break;
  }
}

/* ── DASHBOARD ── */
function renderDash() {
  document.getElementById('dashCards').innerHTML = [
    {icon:'🖼️',count:WSS.portfolio.length,label:'Portfolio Items',s:'portfolio'},
    {icon:'⚙️',count:WSS.services.length,label:'Services',s:'services'},
    {icon:'💬',count:WSS.testimonials.length,label:'Testimonials',s:'testimonials'},
    {icon:'📱',count:WSS.socialClients.length,label:'Social Clients',s:'socialclients'},
  ].map(d=>`<div class="dash-card" onclick="goSec('${d.s}')"><div class="dc-icon">${d.icon}</div><div class="dc-info"><h3>${d.count}</h3><p>${d.label}</p></div></div>`).join('');
}

/* ── COMPANY ── */
function renderCompany() {
  const c = WSS.company;
  const fields = [
    ['name','Company Name'],['tagline','Tagline'],['shortDesc','Short Description'],
    ['founded','Founded Year'],['founderName','Founder Name'],['founderTitle','Founder Title'],
    ['founderInitials','Founder Initials (2 chars)'],['founderBio','Founder Bio'],
    ['founderPhotoPath','Founder Photo Path'],['logoPath','Logo Path'],
    ['address','Office Address'],['phone','Phone'],['whatsapp','WhatsApp Number'],
    ['whatsappLink','WhatsApp Link'],['whatsappMessage','WhatsApp Message'],['email','Email'],
    ['googleRating','Google Rating'],['googleReviewCount','Google Review Count'],
    ['instagramUrl','Instagram URL'],['facebookUrl','Facebook URL'],
    ['linkedinUrl','LinkedIn URL'],['youtubeUrl','YouTube URL'],
    ['heroAvailBadge','Hero Badge Text'],['ctaPrimary','Primary CTA Text'],['ctaSecondary','Secondary CTA Text']
  ];
  document.getElementById('companyFields').innerHTML = fields.map(([k,lbl])=>
    `<div class="fg"><label>${lbl}</label><input type="text" id="co-${k}" value="${esc(c[k]||'')}"></div>`
  ).join('');
}
function saveCompany() {
  ['name','tagline','shortDesc','founded','founderName','founderTitle','founderInitials','founderBio','founderPhotoPath','logoPath','address','phone','whatsapp','whatsappLink','whatsappMessage','email','googleRating','googleReviewCount','instagramUrl','facebookUrl','linkedinUrl','youtubeUrl','heroAvailBadge','ctaPrimary','ctaSecondary'].forEach(k=>{
    const el = document.getElementById(`co-${k}`); if(el) WSS.company[k] = el.value.trim();
  });
  wssSave(); toast('Company info saved ✓');
}

/* ── SEO ── */
function renderSEO() {
  document.getElementById('seoFields').innerHTML = Object.entries(WSS.seo).map(([page,d])=>`
    <div class="seo-panel">
      <h3>${page.charAt(0).toUpperCase()+page.slice(1)} Page</h3>
      <div class="fg"><label>Title</label><input type="text" id="seo-${page}-title" value="${esc(d.title||'')}"></div>
      <div class="fg"><label>Description</label><textarea id="seo-${page}-desc" rows="2">${esc(d.description||'')}</textarea></div>
      <div class="fg"><label>Keywords</label><input type="text" id="seo-${page}-kw" value="${esc(d.keywords||'')}"></div>
    </div>`).join('');
}
function saveSEO() {
  Object.keys(WSS.seo).forEach(page => {
    WSS.seo[page].title       = v(`seo-${page}-title`);
    WSS.seo[page].description = v(`seo-${page}-desc`);
    WSS.seo[page].keywords    = v(`seo-${page}-kw`);
  });
  wssSave(); toast('SEO settings saved ✓');
}

/* ── STATS ── */
function renderStats() {
  document.getElementById('statsRows').innerHTML = WSS.stats.map((s,i)=>`
    <div class="repeat-row">
      <span class="rr-label">Stat ${i+1}</span>
      <input type="text" placeholder="Value e.g. 50+" value="${esc(s.value)}" oninput="WSS.stats[${i}].value=this.value">
      <input type="text" placeholder="Label" value="${esc(s.label)}" oninput="WSS.stats[${i}].label=this.value">
      <button class="btn-rm" onclick="WSS.stats.splice(${i},1);renderStats()">✕</button>
    </div>`).join('');
}
function addStat(){WSS.stats.push({value:'',label:''});renderStats();}
function saveStats(){wssSave();toast('Stats saved ✓');}

/* ── SERVICES ── */
function renderServices() {
  document.getElementById('servicesRows').innerHTML = WSS.services.map((s,i)=>`
    <div class="repeat-row" style="flex-wrap:wrap;gap:8px">
      <input type="text" value="${esc(s.icon)}" placeholder="Icon" style="max-width:65px" oninput="WSS.services[${i}].icon=this.value">
      <input type="text" value="${esc(s.title)}" placeholder="Title" style="flex:1;min-width:130px" oninput="WSS.services[${i}].title=this.value">
      <input type="text" value="${esc(s.description)}" placeholder="Description" style="flex:2;min-width:200px" oninput="WSS.services[${i}].description=this.value">
      <label style="display:flex;align-items:center;gap:5px;font-size:.76rem;color:var(--gray);cursor:pointer;flex-shrink:0">
        <input type="checkbox" ${s.featured?'checked':''} onchange="WSS.services[${i}].featured=this.checked"> Featured
      </label>
      <button class="btn-rm" onclick="WSS.services.splice(${i},1);renderServices()">✕</button>
    </div>`).join('');
}
function addService(){WSS.services.push({id:Date.now(),icon:'🔧',title:'',description:'',featured:false});renderServices();}
function saveServices(){wssSave();toast('Services saved ✓');}

/* ── ABOUT ── */
function renderAbout() {
  const a = WSS.about;
  document.getElementById('aboutFields').innerHTML = `
    <div class="ag2">
      <div class="fg"><label>Section Tag</label><input type="text" id="ab-tag" value="${esc(a.sectionTag)}"></div>
      <div class="fg"><label>Mission</label><input type="text" id="ab-mission" value="${esc(a.mission)}"></div>
    </div>
    <div class="fg"><label>Section Title (HTML ok)</label><input type="text" id="ab-title" value="${esc(a.title)}"></div>
    <div class="fg"><label>Vision</label><input type="text" id="ab-vision" value="${esc(a.vision)}"></div>
    <label style="font-size:.74rem;font-weight:700;color:var(--gray);text-transform:uppercase;letter-spacing:.07em;display:block;margin-bottom:8px">Paragraphs</label>
    ${a.paragraphs.map((p,i)=>`<div class="fg"><label>Para ${i+1}</label><textarea id="ab-p${i}" rows="3">${esc(p)}</textarea></div>`).join('')}
    <label style="font-size:.74rem;font-weight:700;color:var(--gray);text-transform:uppercase;letter-spacing:.07em;display:block;margin:10px 0 8px">USPs / Features</label>
    <div id="featRows">${a.features.map((f,i)=>`
      <div class="repeat-row">
        <input type="text" value="${esc(f.title)}" placeholder="Bold title" style="flex:1;min-width:130px" oninput="WSS.about.features[${i}].title=this.value">
        <input type="text" value="${esc(f.desc)}" placeholder="Description" style="flex:2;min-width:180px" oninput="WSS.about.features[${i}].desc=this.value">
        <button class="btn-rm" onclick="WSS.about.features.splice(${i},1);renderAbout()">✕</button>
      </div>`).join('')}</div>
    <button class="btn-add" onclick="WSS.about.features.push({title:'',desc:''});renderAbout()">+ Add Feature</button>`;
}
function saveAbout() {
  WSS.about.sectionTag = v('ab-tag'); WSS.about.title = v('ab-title');
  WSS.about.mission = v('ab-mission'); WSS.about.vision = v('ab-vision');
  WSS.about.paragraphs = [v('ab-p0'),v('ab-p1'),v('ab-p2')].filter(Boolean);
  wssSave(); toast('About saved ✓');
}

/* ── PROCESS ── */
function renderProcess() {
  document.getElementById('processRows').innerHTML = WSS.process.map((s,i)=>`
    <div class="repeat-row" style="flex-wrap:wrap;gap:8px">
      <input type="text" value="${esc(s.icon)}" placeholder="Emoji" style="max-width:65px" oninput="WSS.process[${i}].icon=this.value">
      <input type="text" value="${esc(s.title)}" placeholder="Step title" style="flex:1;min-width:120px" oninput="WSS.process[${i}].title=this.value">
      <input type="text" value="${esc(s.desc)}" placeholder="Description" style="flex:2;min-width:180px" oninput="WSS.process[${i}].desc=this.value">
      <button class="btn-rm" onclick="WSS.process.splice(${i},1);renderProcess()">✕</button>
    </div>`).join('');
}
function addStep(){WSS.process.push({icon:'⭐',title:'',desc:''});renderProcess();}
function saveProcess(){wssSave();toast('Process saved ✓');}

/* ── FAQs ── */
function renderFAQs() {
  document.getElementById('faqRows').innerHTML = WSS.faqs.map((f,i)=>`
    <div class="repeat-row" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;gap:8px;align-items:flex-start">
        <div class="fg" style="flex:1;margin:0"><label>Q${i+1}</label><input type="text" value="${esc(f.q)}" placeholder="Question" oninput="WSS.faqs[${i}].q=this.value"></div>
        <button class="btn-rm" style="margin-top:22px" onclick="WSS.faqs.splice(${i},1);renderFAQs()">✕</button>
      </div>
      <div class="fg" style="margin:8px 0 0"><label>Answer</label><textarea rows="2" oninput="WSS.faqs[${i}].a=this.value">${esc(f.a)}</textarea></div>
    </div>`).join('');
}
function addFAQ(){WSS.faqs.push({q:'',a:''});renderFAQs();}
function saveFAQs(){wssSave();toast('FAQs saved ✓');}

/* ── PORTFOLIO ── */
function renderPortfolio() {
  document.getElementById('portfolioList').innerHTML = WSS.portfolio.length
    ? WSS.portfolio.map(p=>`
        <div class="icard">
          <div class="icard-icon">${p.emoji||'🖼️'}</div>
          <div class="icard-info">
            <div class="imeta">${p.category} · ${p.meta}</div>
            <h4>${p.title}</h4>
            <p>${(p.description||'').substring(0,65)}…</p>
          </div>
          <div class="icard-acts">
            <button class="btn-edit" onclick="editPort(${p.id})">Edit</button>
            <button class="btn-del" onclick="delPort(${p.id})">Del</button>
          </div>
        </div>`).join('')
    : '<p style="color:var(--gray);padding:12px 0">No portfolio items yet. Click "+ Add Portfolio Item".</p>';
}
function openPortModal(id=null) {
  document.getElementById('portModalTitle').textContent = id ? 'Edit Portfolio Item' : 'Add Portfolio Item';
  const p = id ? WSS.portfolio.find(x=>x.id===id) : {};
  ['id','title','meta','desc','emoji','link','linklbl','img','tags'].forEach(k=>{const el=document.getElementById(`pm-${k}`);if(el)el.value='';});
  if (p) {
    sv('pm-id',p.id||''); sv('pm-title',p.title||''); sv('pm-cat',p.category||'websites');
    sv('pm-meta',p.meta||''); sv('pm-desc',p.description||''); sv('pm-emoji',p.emoji||'');
    sv('pm-bg',p.bgGrad||''); sv('pm-link',p.link||''); sv('pm-linklbl',p.linkLabel||'');
    sv('pm-img',p.imagePath||''); sv('pm-tags',(p.tags||[]).join(', '));
  }
  openModal('portModal');
}
function editPort(id){openPortModal(id);}
function delPort(id){if(confirm('Delete this item?')){WSS.portfolio=WSS.portfolio.filter(p=>p.id!==id);wssSave();renderPortfolio();toast('Deleted ✓');}}
function savePortItem() {
  const idV = v('pm-id');
  const item = {
    id: idV?parseInt(idV):Date.now(), title:v('pm-title'), category:v('pm-cat'),
    meta:v('pm-meta'), description:v('pm-desc'), emoji:v('pm-emoji')||'🖼️',
    bgGrad:v('pm-bg'), link:v('pm-link'), linkLabel:v('pm-linklbl'),
    imagePath:v('pm-img'), tags:v('pm-tags').split(',').map(t=>t.trim()).filter(Boolean)
  };
  if(!item.title){alert('Title required');return;}
  if(idV){const idx=WSS.portfolio.findIndex(p=>p.id===item.id);if(idx!==-1)WSS.portfolio[idx]=item;}
  else WSS.portfolio.push(item);
  wssSave();closeModal();renderPortfolio();toast('Portfolio item saved ✓');
}
function savePortfolio(){wssSave();toast('Saved ✓');}

/* ── SOCIAL CLIENTS ── */
function renderSocialClients() {
  document.getElementById('socialClientList').innerHTML = WSS.socialClients.length
    ? WSS.socialClients.map(c=>`
        <div class="icard">
          <div class="icard-icon">📸</div>
          <div class="icard-info">
            <div class="imeta">${c.platform} · ${c.industry}</div>
            <h4>${c.name}</h4>
            <p>${c.tags.join(', ')}</p>
          </div>
          <div class="icard-acts">
            <button class="btn-edit" onclick="editSC(${c.id})">Edit</button>
            <button class="btn-del" onclick="delSC(${c.id})">Del</button>
          </div>
        </div>`).join('')
    : '<p style="color:var(--gray);padding:12px 0">No social clients yet.</p>';
}
function openSCModal(id=null){
  document.getElementById('scModalTitle').textContent = id?'Edit Social Client':'Add Social Client';
  const c = id?WSS.socialClients.find(x=>x.id===id):{};
  sv('sc-id',c.id||''); sv('sc-name',c.name||''); sv('sc-plat',c.platform||'Instagram');
  sv('sc-industry',c.industry||''); sv('sc-tags',(c.tags||[]).join(', '));
  sv('sc-link',c.link||''); sv('sc-result',c.result||'');
  openModal('scModal');
}
function editSC(id){openSCModal(id);}
function delSC(id){if(confirm('Delete?')){WSS.socialClients=WSS.socialClients.filter(c=>c.id!==id);wssSave();renderSocialClients();toast('Deleted ✓');}}
function saveSCItem(){
  const idV=v('sc-id');
  const item={id:idV?parseInt(idV):Date.now(),name:v('sc-name'),platform:v('sc-plat'),industry:v('sc-industry'),tags:v('sc-tags').split(',').map(t=>t.trim()).filter(Boolean),link:v('sc-link'),result:v('sc-result')};
  if(!item.name){alert('Name required');return;}
  if(idV){const idx=WSS.socialClients.findIndex(c=>c.id===item.id);if(idx!==-1)WSS.socialClients[idx]=item;}
  else WSS.socialClients.push(item);
  wssSave();closeModal();renderSocialClients();toast('Social client saved ✓');
}
function saveSocialClients(){wssSave();toast('Saved ✓');}

/* ── TESTIMONIALS ── */
function renderTestimonials(){
  document.getElementById('testimonialList').innerHTML = WSS.testimonials.length
    ? WSS.testimonials.map(t=>`
        <div class="icard">
          <div class="icard-icon" style="width:40px;height:40px;border-radius:50%;background:var(--grad);display:flex;align-items:center;justify-content:center;font-size:.9rem;font-weight:800;flex-shrink:0">${t.initials}</div>
          <div class="icard-info">
            <div class="imeta">${'★'.repeat(t.rating)} · ${t.title}</div>
            <h4>${t.name}</h4>
            <p>"${(t.quote||'').substring(0,60)}…"</p>
          </div>
          <div class="icard-acts">
            <button class="btn-edit" onclick="editTest(${t.id})">Edit</button>
            <button class="btn-del" onclick="delTest(${t.id})">Del</button>
          </div>
        </div>`).join('')
    : '<p style="color:var(--gray);padding:12px 0">No testimonials yet.</p>';
}
function openTestModal(id=null){
  document.getElementById('testModalTitle').textContent=id?'Edit Testimonial':'Add Testimonial';
  const t=id?WSS.testimonials.find(x=>x.id===id):{};
  sv('tm-id',t.id||''); sv('tm-quote',t.quote||''); sv('tm-name',t.name||'');
  sv('tm-title',t.title||''); sv('tm-init',t.initials||''); sv('tm-rating',t.rating||5);
  sv('tm-avatar',t.avatarPath||'');
  openModal('testModal');
}
function editTest(id){openTestModal(id);}
function delTest(id){if(confirm('Delete?')){WSS.testimonials=WSS.testimonials.filter(t=>t.id!==id);wssSave();renderTestimonials();toast('Deleted ✓');}}
function saveTestItem(){
  const idV=v('tm-id');
  const item={id:idV?parseInt(idV):Date.now(),quote:v('tm-quote'),name:v('tm-name'),title:v('tm-title'),initials:v('tm-init').toUpperCase(),rating:parseInt(v('tm-rating')),avatarPath:v('tm-avatar')};
  if(!item.quote||!item.name){alert('Quote and name required');return;}
  if(idV){const idx=WSS.testimonials.findIndex(t=>t.id===item.id);if(idx!==-1)WSS.testimonials[idx]=item;}
  else WSS.testimonials.push(item);
  wssSave();closeModal();renderTestimonials();toast('Testimonial saved ✓');
}
function saveTestimonials(){wssSave();toast('Saved ✓');}

/* ── INDUSTRIES ── */
function renderIndustries(){
  document.getElementById('industryRows').innerHTML=WSS.industries.map((ind,i)=>`
    <div class="repeat-row">
      <input type="text" value="${esc(ind.icon)}" placeholder="Emoji" style="max-width:65px" oninput="WSS.industries[${i}].icon=this.value">
      <input type="text" value="${esc(ind.label)}" placeholder="Industry name" oninput="WSS.industries[${i}].label=this.value">
      <button class="btn-rm" onclick="WSS.industries.splice(${i},1);renderIndustries()">✕</button>
    </div>`).join('');
}
function addIndustry(){WSS.industries.push({icon:'🏢',label:''});renderIndustries();}
function saveIndustries(){wssSave();toast('Industries saved ✓');}

/* ── MODALS ── */
function openModal(id){document.getElementById('modalOv').classList.add('open');document.getElementById(id).classList.add('open');}
function closeModal(){document.getElementById('modalOv').classList.remove('open');document.querySelectorAll('.modal').forEach(m=>m.classList.remove('open'));}

/* ── SAVE ALL ── */
function adminSaveAll(){wssSave();document.getElementById('saveInd').textContent='● Saved';toast('All data saved ✓');}
function adminReset(){if(confirm('⚠ Reset ALL data to defaults?')){localStorage.removeItem('wss_sitedata');toast('Reset done. Reloading…');setTimeout(()=>location.reload(),1200);}}

/* ── TOAST ── */
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2800);}

/* ── UTILS ── */
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function v(id){const el=document.getElementById(id);return el?el.value.trim():'';}
function sv(id,val){const el=document.getElementById(id);if(el)el.value=val;}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => { renderDash(); });

/* ── EXPORT sitedata.js ── */
function exportSitedata() {
  const content = `/**\n * WORLD SOCIAL SOLUTIONS — Central Data Store\n * Last exported: ${new Date().toLocaleString()}\n * Generated from Admin Panel — replace data/sitedata.js with this file then push to GitHub\n */\n\nconst WSS = ${JSON.stringify(WSS, null, 2)};\n\nfunction wssSave() {\n  try { localStorage.setItem('wss_sitedata', JSON.stringify(WSS)); } catch(e) {}\n}\nfunction wssLoad() {\n  try {\n    const raw = localStorage.getItem('wss_sitedata');\n    if (!raw) return;\n    const parsed = JSON.parse(raw);\n    Object.keys(parsed).forEach(k => { if (WSS[k] !== undefined) WSS[k] = parsed[k]; });\n  } catch(e) {}\n}\nwssLoad();\n`;
  const blob = new Blob([content], { type: 'text/javascript' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'sitedata.js';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
  toast('✅ sitedata.js downloaded! Replace data/sitedata.js then push to GitHub.');
}
