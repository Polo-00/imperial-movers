document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.nav'),burger=document.getElementById('menuToggle'),menu=document.getElementById('navMenu');
  const onScroll=()=>nav.classList.toggle('solid',scrollY>40||nav.dataset.solid==='1');
  onScroll();addEventListener('scroll',onScroll,{passive:true});
  const close=()=>{burger.classList.remove('open');menu.classList.remove('open');burger.setAttribute('aria-expanded','false')};
  burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.classList.toggle('open',o);burger.setAttribute('aria-expanded',o)});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  // reveal
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});
  // counters
  const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);
    const el=e.target,end=+el.dataset.n,suf=el.dataset.s||'',t0=performance.now();
    const f=t=>{const p=Math.min((t-t0)/1400,1);el.textContent=Math.round(end*(1-Math.pow(1-p,3)))+suf;if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)}),{threshold:.6});
  document.querySelectorAll('[data-n]').forEach(el=>co.observe(el));
  // forms
  const today=new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type=date]').forEach(d=>d.min=today);
  const form=document.getElementById('contactForm');
  if(form){
    const msg=document.getElementById('formMessage');
    const q=new URLSearchParams(location.search);
    ['from','to','date'].forEach(k=>{const m={from:'location',to:'destination',date:'moveDate'}[k],el=document.getElementById(m);if(el&&q.get(k))el.value=q.get(k)});
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const d=Object.fromEntries(new FormData(form));
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)||!/^[\d\s\-()+]{10,}$/.test(d.phone)||!d.message.trim()){msg.className='msg error';msg.textContent='Please fill in all required fields correctly.';return}
      const b=form.querySelector('button');const t=b.textContent;b.textContent='Sending…';b.disabled=true;
      // TODO: wire to a real backend / form service (e.g. Formspree). Currently simulated.
      setTimeout(()=>{console.log('Form Data:',d);form.reset();msg.className='msg success';msg.textContent='Thank you! We will contact you within 24 hours.';b.textContent=t;b.disabled=false;msg.scrollIntoView({behavior:'smooth',block:'center'})},900);
    });
  }
});
