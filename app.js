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
// A procedural particle sphere, drawn locally without image or 3D dependencies.
const canvas=document.querySelector('#neural-canvas');
const ctx=canvas.getContext('2d');
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
let width=0,height=0,rotation=.35,frame=0,lastTime=0,visible=true;
const points=Array.from({length:1000},(_,i)=>{const y=1-(i/999)*2;const ring=Math.sqrt(1-y*y),a=i*Math.PI*(3-Math.sqrt(5));return {x:Math.cos(a)*ring,y,z:Math.sin(a)*ring};});
function resizeCanvas(){const rect=canvas.getBoundingClientRect();width=rect.width;height=rect.height;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);draw();}
function draw(){
 ctx.clearRect(0,0,width,height);const radius=Math.min(width*.36,height*.37),cx=width*.5,cy=height*.49;
 const cs=Math.cos(rotation),sn=Math.sin(rotation),tilt=.24,ct=Math.cos(tilt),st=Math.sin(tilt);
 const projected=points.map(p=>{const x=p.x*cs-p.z*sn,z=p.x*sn+p.z*cs,y=p.y*ct-z*st,zz=p.y*st+z*ct;const perspective=2.9/(2.9-zz*.35);return{x:cx+x*radius*perspective,y:cy+y*radius*perspective,z:zz};}).sort((a,b)=>a.z-b.z);
 ctx.strokeStyle='#5b8fff18';ctx.lineWidth=.7;ctx.beginPath();ctx.ellipse(cx,cy,radius*1.17,radius*.32,-.38,0,Math.PI*2);ctx.stroke();
 projected.forEach((p,i)=>{const alpha=.15+(p.z+1)*.37;const warm=(i%13)<3;ctx.fillStyle=warm?`rgba(123,170,255,${alpha})`:`rgba(177,149,255,${alpha*.8})`;ctx.beginPath();ctx.arc(p.x,p.y,p.z>.3?1.4:.8,0,Math.PI*2);ctx.fill();});
 ctx.strokeStyle='#5b8fff45';ctx.beginPath();ctx.moveTo(cx-7,cy);ctx.lineTo(cx+7,cy);ctx.moveTo(cx,cy-7);ctx.lineTo(cx,cy+7);ctx.stroke();
}
function animate(time){if(visible&&!motionPreference.matches&&time-lastTime>32){rotation+=.003;draw();lastTime=time;}frame=requestAnimationFrame(animate);}
new ResizeObserver(resizeCanvas).observe(canvas);
new IntersectionObserver(entries=>visible=entries[0].isIntersecting).observe(canvas);
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else if(!frame)frame=requestAnimationFrame(animate);});
frame=requestAnimationFrame(animate);

// Animate illustrative project previews only while visible.
const projectMotionObserver=new IntersectionObserver(entries=>{for(const entry of entries)entry.target.classList.toggle('in-view',entry.isIntersecting);},{threshold:.12});
document.querySelectorAll('.project-card').forEach(card=>projectMotionObserver.observe(card));
document.querySelectorAll('.fitness-bars span,.audio-wave i').forEach((bar,index)=>bar.style.setProperty('--delay',`${-(index%11)*.17}s`));
if(window.lucide)lucide.createIcons({attrs:{'stroke-width':1.6}});
