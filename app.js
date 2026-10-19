const credentials = [
 {title:'DevOps',issuer:'HCL',brand:'HCL',icon:'',category:'DevOps',date:'Certificate file not supplied',file:null},
 {title:'AI Strategy & Business Intelligence Internship',issuer:'IBM SkillsBuild · CSRBOX · AICTE',brand:'IBM',icon:'ibm',category:'Programs',date:'Mar – Apr 2026',file:'ibm-aicte-internship.pdf'},
 {title:'AWS AI Practitioner Challenge',issuer:'Udacity',brand:'AWS',icon:'aws',category:'Cloud & Data',date:'Jun 2026',file:'aws-ai-practitioner-challenge.pdf'},
 {title:'Intelligent by Design: Build an AI Agent',issuer:'IBM',brand:'IBM',icon:'ibm',category:'AI & ML',date:'Mar 2026',file:'ibm-ai-agent.pdf'},
 {title:'Introduction to Natural Language Processing',issuer:'Infosys Springboard',brand:'infosys',icon:'',category:'AI & ML',date:'Jul 2025',file:'infosys-nlp.pdf'},
 {title:'Generative AI: From Prompt to Production',issuer:'IBM SkillsBuild · CSRBOX Boot Camp',brand:'IBM',icon:'ibm',category:'Programs',date:'Feb – Mar 2026',file:'ibm-boot-camp.pdf'},
 {title:'McKinsey.org Forward',issuer:'McKinsey.org · Online learning program',brand:'McK',icon:'',category:'Programs',date:'Jun 2026',file:'mckinsey-forward.pdf'},
 {title:'Introduction to Data Science',issuer:'Infosys Springboard',brand:'infosys',icon:'',category:'Cloud & Data',date:'Mar 2026',file:'infosys-data-science.pdf'},
 {title:'Introduction to Large Language Models',issuer:'IBM',brand:'IBM',icon:'ibm',category:'AI & ML',date:'Feb 2026',file:'ibm-llm.pdf'},
 {title:'Use Generative AI for Software Development',issuer:'IBM',brand:'IBM',icon:'ibm',category:'AI & ML',date:'Feb 2026',file:'ibm-gen-ai-development.pdf'},
 {title:'Generative AI: From Prompt to Production',issuer:'IBM · Learning plan completion',brand:'IBM',icon:'ibm',category:'AI & ML',date:'Mar 2026',file:'ibm-gen-ai-learning-plan.pdf'},
 {title:'Introduction to Machine Learning Concepts',issuer:'Microsoft Learn',brand:'',icon:'ms',category:'AI & ML',date:'Jan 2026',file:'microsoft-ml-concepts.pdf'},
 {title:'Introduction to Generative AI and Agents',issuer:'Microsoft Learn',brand:'',icon:'ms',category:'AI & ML',date:'Jan 2026',file:'microsoft-generative-ai.pdf'},
 {title:'Overview of AI Concepts',issuer:'Microsoft Learn',brand:'',icon:'ms',category:'AI & ML',date:'Jan 2026',file:'microsoft-ai-concepts.pdf'},
 {title:'Describe Cloud Computing',issuer:'Microsoft Learn',brand:'',icon:'ms',category:'Cloud & Data',date:'Jan 2026',file:'microsoft-cloud.pdf'},
 {title:'AI Tools Skill Up',issuer:'GeeksforGeeks',brand:'GfG',icon:'',category:'AI & ML',date:'Course completion',file:'gfg-ai-tools.pdf'},
 {title:'Equip and Support Learners with AI Tools',issuer:'Microsoft Learn',brand:'',icon:'ms',category:'AI & ML',date:'Jan 2026',file:'microsoft-ai-tools.pdf'},
 {title:'Empower Educators to Explore AI',issuer:'Microsoft Learn',brand:'',icon:'ms',category:'AI & ML',date:'Jan 2026',file:'microsoft-ai-educators.pdf'}
];
let activeFilter='All', expanded=false;
const grid=document.querySelector('#certificate-grid');
const more=document.querySelector('#show-more');
function renderCredentials(){
 const query=document.querySelector('#certificate-search').value.toLowerCase().trim();
 const matches=credentials.filter(c=>(activeFilter==='All'||c.category===activeFilter)&&`${c.title} ${c.issuer} ${c.category}`.toLowerCase().includes(query));
 const shown=expanded?matches:matches.slice(0,6);
 grid.innerHTML=shown.map(c=>{
  const body=`<div class="certificate-brand"><div class="issuer-icon ${c.icon}" aria-hidden="true">${c.icon==='ms'?'<i></i><i></i><i></i><i></i>':c.brand}</div><span>${c.category.toUpperCase()}</span></div><h3>${c.title}</h3><p>${c.issuer}</p><div class="certificate-bottom"><span>${c.date}</span>${c.file?'<span aria-hidden="true">↗</span>':''}</div>`;
  return c.file?`<a class="certificate-card" href="certificates/${c.file}" target="_blank" rel="noopener noreferrer" aria-label="View ${c.title}, ${c.issuer}, PDF in a new tab">${body}</a>`:`<article class="certificate-card certificate-pending" aria-label="${c.title}, ${c.issuer}. Certificate file not supplied.">${body}</article>`;
 }).join('');
 document.querySelector('#certificate-status').textContent=matches.length?`SHOWING ${shown.length} OF ${matches.length} CREDENTIALS`:'No credentials found. Try a different search or category.';
 more.hidden=matches.length<=6;
 more.innerHTML=expanded?'Show fewer credentials <span>↑</span>':`View all ${matches.length} credentials <span>↓</span>`;
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 activeFilter=button.dataset.filter; expanded=false;
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));}); renderCredentials();
}));
document.querySelector('#certificate-search').addEventListener('input',()=>{expanded=false;renderCredentials();});
more.addEventListener('click',()=>{expanded=!expanded;renderCredentials();if(!expanded)document.querySelector('#credentials').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});
renderCredentials();
const details={
audio:`<div class="eyebrow red">03 / AI × AUDIO</div><h2 id="dialog-title">Deepfake Audio Detection</h2><p>A hackathon project focused on voice authenticity: exploring the detection of AI-generated and manipulated audio.</p><h3>The problem</h3><p>Synthetic voices can sound convincing. This project explores how to distinguish authentic voice recordings from deepfake audio.</p><h3>Project context</h3><p>Developed as part of a hackathon. The portfolio waveform is an illustration of the idea, rather than an interactive detector or a model result.</p><div class="tags"><span>Deepfake Detection</span><span>Voice Analysis</span><span>Audio Authenticity</span></div>`,
fitness:`<div class="eyebrow red">01 / AI × FITNESS</div><h2 id="dialog-title">Build Up</h2><p>A Flask-based fitness platform combining AI workout recommendations with an LLM-powered fitness assistant.</p><h3>The idea</h3><p>Make workout planning more approachable with an intelligent companion that helps users explore training recommendations and ask fitness questions.</p><h3>Design direction</h3><p>A Nothing-inspired visual language: near-black surfaces, a red accent, and DotGothic16 typography.</p><h3>Technology</h3><div class="tags"><span>Python</span><span>Flask</span><span>LLM-powered assistant</span><span>AI workout recommendations</span></div><a class="button primary" href="https://build-up-studio.lovable.app/dashboard" target="_blank" rel="noopener noreferrer">Open live project <span>↗</span></a>`,
ev:`<div class="eyebrow red">02 / ML × SUSTAINABILITY</div><h2 id="dialog-title">EV Station Health Monitor</h2><p>A predictive maintenance and process intelligence project for EV charging stations, using a RandomForestClassifier to support station health monitoring.</p><h3>Current progress</h3><div class="milestone-row"><strong>Database layer — built</strong>SQLAlchemy models backed by SQLite.</div><div class="milestone-row"><strong>Technical documentation — complete</strong>Project documentation prepared as a Word document.</div><div class="milestone-row current"><strong>Milestone 3 — in progress</strong>Frontend dashboard and backend database integration. Presentation deck also in progress.</div><h3>Technology</h3><div class="tags"><span>Python</span><span>FastAPI</span><span>SQLAlchemy</span><span>SQLite</span><span>scikit-learn</span><span>RandomForestClassifier</span><span>Pydantic</span></div><h3>About the preview</h3><p>The portfolio card is a visual concept. Its signal chart is illustrative; it does not display live charging station data.</p>`
};
const dialog=document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>{document.querySelector('#dialog-content').innerHTML=details[b.dataset.project];dialog.showModal();document.body.style.overflow='hidden';}));
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>document.body.style.overflow='');
document.querySelector('#year').textContent=new Date().getFullYear();
// Animate illustrative project previews only while visible.
const projectMotionObserver=new IntersectionObserver(entries=>{for(const entry of entries)entry.target.classList.toggle('in-view',entry.isIntersecting);},{threshold:.12});
document.querySelectorAll('.project-card').forEach(card=>projectMotionObserver.observe(card));
document.querySelectorAll('.fitness-bars span,.audio-wave i').forEach((bar,index)=>bar.style.setProperty('--delay',`${-(index%11)*.17}s`));
if(window.lucide)lucide.createIcons({attrs:{'stroke-width':1.6}});

// Reveal content once; keep it readable even if animation is unavailable.
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const revealTargets = document.querySelectorAll('.section-heading, .project-card, .about-copy, .education-panel, .tool-card, .resume-section, .contact-panel');
const revealObserver = new IntersectionObserver(entries => {
 for (const entry of entries) {
  if (!entry.isIntersecting) continue;
  entry.target.classList.add('is-visible');
  revealObserver.unobserve(entry.target);
 }
}, {threshold: .08});
revealTargets.forEach(element => { element.classList.add('reveal'); revealObserver.observe(element); });
const ambientObserver = new IntersectionObserver(entries => {
 for (const entry of entries) entry.target.classList.toggle('motion-in-view', entry.isIntersecting);
});
document.querySelectorAll('.hero, .education-panel').forEach(element => ambientObserver.observe(element));

// Blue star trail and click burst: lightweight, bounded, and motion-aware.
const sparkleLayer = document.querySelector('#sparkle-layer');
const sparkleToggle = document.querySelector('#sparkle-toggle');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const activeSparks = new Set();
let sparkleEnabled = true;
let lastSparkTime = 0;
try { sparkleEnabled = localStorage.getItem('aj-blue-sparkles') !== 'off'; } catch { /* Storage is optional. */ }
function clearSparks() {
 for (const animation of activeSparks) animation.cancel();
 activeSparks.clear();
 sparkleLayer.replaceChildren();
}
function updateSparklePreference() {
 const enabled = sparkleEnabled && !motionPreference.matches;
 sparkleToggle.setAttribute('aria-pressed', String(enabled));
 sparkleToggle.innerHTML = `<span aria-hidden="true">✦</span> Blue sparkles ${enabled ? 'on' : 'off'}`;
 sparkleToggle.disabled = motionPreference.matches;
 if (!enabled) clearSparks();
}
function animateSpark(element, keyframes, options) {
 sparkleLayer.append(element);
 const animation = element.animate(keyframes, options);
 activeSparks.add(animation);
 const cleanup = () => { element.remove(); activeSparks.delete(animation); };
 animation.onfinish = cleanup;
 animation.oncancel = cleanup;
}
function createStar(x, y, burst = false) {
 if (activeSparks.size >= 96) return;
 const star = document.createElement('span');
 star.className = 'cursor-star';
 star.textContent = Math.random() > .5 ? '✦' : '✳';
 star.style.left = `${x}px`;
 star.style.top = `${y}px`;
 star.style.fontSize = `${burst ? 9 + Math.random() * 14 : 12 + Math.random() * 7}px`;
 const angle = Math.random() * Math.PI * 2;
 const distance = burst ? 25 + Math.random() * 65 : 12 + Math.random() * 15;
 const dx = burst ? Math.cos(angle) * distance : (Math.random() - .5) * 20;
 const dy = burst ? Math.sin(angle) * distance : -distance;
 animateSpark(star, [
  {transform: 'translate(-50%,-50%) scale(.4) rotate(0deg)', opacity: 0},
  {offset: .15, transform: 'translate(-50%,-50%) scale(1) rotate(10deg)', opacity: 1},
  {transform: `translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(.08) rotate(85deg)`, opacity: 0}
 ], {duration: burst ? 700 + Math.random() * 220 : 650, easing: 'cubic-bezier(.15,.65,.35,1)'});
}
document.addEventListener('pointermove', event => {
 if (!sparkleEnabled || motionPreference.matches || !finePointer.matches || event.pointerType !== 'mouse') return;
 const now = performance.now();
 if (now - lastSparkTime < 100) return;
 lastSparkTime = now;
 createStar(event.clientX, event.clientY);
}, {passive: true});
document.addEventListener('pointerdown', event => {
 if (!sparkleEnabled || motionPreference.matches || event.button !== 0 || event.target.closest('#sparkle-toggle')) return;
 for (let i = 0; i < 16; i++) createStar(event.clientX, event.clientY, true);
 if (activeSparks.size >= 96) return;
 const halo = document.createElement('span');
 halo.className = 'sparkle-halo';
 halo.style.left = `${event.clientX - 9}px`;
 halo.style.top = `${event.clientY - 9}px`;
 animateSpark(halo, [{transform: 'scale(.4)', opacity: .9}, {transform: 'scale(5)', opacity: 0}], {duration: 550, easing: 'ease-out'});
}, {passive: true});
sparkleToggle.addEventListener('click', () => {
 sparkleEnabled = !sparkleEnabled;
 try { localStorage.setItem('aj-blue-sparkles', sparkleEnabled ? 'on' : 'off'); } catch { /* Storage is optional. */ }
 updateSparklePreference();
});
motionPreference.addEventListener('change', updateSparklePreference);
document.addEventListener('visibilitychange', () => {
 document.body.classList.toggle('motion-paused', document.hidden);
 if (document.hidden) clearSparks();
});
// A native dialog is in the browser's top layer; carry the effects with it.
dialog.addEventListener('toggle', () => {
 if (dialog.open) dialog.append(sparkleLayer);
 else document.body.append(sparkleLayer);
});
updateSparklePreference();

document.body.classList.toggle('motion-paused', document.hidden);
