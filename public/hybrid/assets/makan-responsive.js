// Desktop comparison lists become optional detail on phones.
const phoneLayout = window.matchMedia('(max-width: 767px)');
const featureDetails = document.querySelectorAll('.mk-tier-details');
function syncFeatureDetails() {
  featureDetails.forEach(details => { details.open = !phoneLayout.matches; });
}
syncFeatureDetails();
phoneLayout.addEventListener('change', syncFeatureDetails);
featureDetails.forEach(details => details.addEventListener('toggle', () => {
  if (!phoneLayout.matches && window.ScrollTrigger) window.ScrollTrigger.refresh();
}));

// Native range input supports touch, keyboard and assistive technology.
const phoneComparison = document.querySelector('.mp-compare');
const comparisonRange = phoneComparison?.querySelector('input');
comparisonRange?.addEventListener('input', () => {
  phoneComparison.style.setProperty('--reveal', `${comparisonRange.value}%`);
});

// Keep the floating CTA from covering the actual form on phones.
const demoForm = document.querySelector('#mk-waitlist-form');
const floatingCta = document.querySelector('.cta');
if (demoForm && floatingCta) {
  new IntersectionObserver(entries => {
    floatingCta.classList.toggle('mp-form-visible', entries[0].isIntersecting);
  }, { threshold: 0 }).observe(demoForm);
}
const heroSection = document.querySelector('#hero');
if (heroSection) {
  new IntersectionObserver(entries => {
    const heroBottom = entries[0].boundingClientRect.bottom;
    document.documentElement.classList.toggle('mp-past-hero', heroBottom < window.innerHeight * .8);
  }, { threshold: [0, .25, .5, .75, 1] }).observe(heroSection);
}

document.querySelectorAll('[data-phone-case]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-phone-case]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('[data-phone-case-panel]').forEach(panel => { panel.hidden = panel.dataset.phoneCasePanel !== button.dataset.phoneCase; });
  });
});

// One spatial scene replaces the repeated phone feature cards.
document.querySelectorAll('[data-scene-select]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.mp-spatial').dataset.scene = button.dataset.sceneSelect;
    document.querySelectorAll('[data-scene-select]').forEach(control => control.setAttribute('aria-pressed', String(control === button)));
    document.querySelectorAll('[data-scene-panel]').forEach(panel => { panel.hidden = panel.dataset.scenePanel !== button.dataset.sceneSelect; });
    if (!phoneLayout.matches && window.ScrollTrigger) window.ScrollTrigger.refresh();
  });
});

// Load 3D only when a phone approaches the scene. Desktop pays no bundle cost.
const districtHost = document.querySelector('#mp-district');
if (districtHost) {
  let districtLoaded = false;
  const loadDistrict = () => {
    if (districtLoaded || !phoneLayout.matches) return;
    districtLoaded = true;
    import('./phone-district.js').catch(() => { districtHost.dataset.ready = 'fallback'; });
  };
  const districtObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) loadDistrict();
  }, { rootMargin: '200px' });
  districtObserver.observe(districtHost);
  phoneLayout.addEventListener('change', () => {
    if (districtHost.getBoundingClientRect().top < innerHeight + 200) loadDistrict();
  });
}

// Native swipe deck, with accessible direct card selection and no nested vertical scroll.
const tierDeck=document.querySelector('#mk-tiers .mk-tiers-grid');
if(tierDeck){
 const cards=[...tierDeck.querySelectorAll('.mk-tier-card')];
 const pagination=document.createElement('div');pagination.className='mp-tier-pagination';pagination.setAttribute('role','group');pagination.setAttribute('aria-label','Choose a way to use Makan');
 const buttons=cards.map((card,index)=>{const button=document.createElement('button');button.type='button';button.setAttribute('aria-label',['Studio','Connect','Custom'][index]);button.setAttribute('aria-pressed',String(index===0));button.innerHTML='<span>'+String(index+1).padStart(2,'0')+'</span>';button.addEventListener('click',()=>tierDeck.scrollTo({left:tierDeck.scrollLeft+card.getBoundingClientRect().left-tierDeck.getBoundingClientRect().left-(tierDeck.clientWidth-card.offsetWidth)/2,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));pagination.append(button);return button;});
 tierDeck.after(pagination);
 const activeCard=new IntersectionObserver(entries=>{if(!phoneLayout.matches)return;entries.forEach(entry=>{if(entry.intersectionRatio>.6){const index=cards.indexOf(entry.target);buttons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));cards.forEach((card,i)=>card.classList.toggle('mp-tier-active',i===index));}});},{root:tierDeck,threshold:[.6]});
 cards.forEach(card=>activeCard.observe(card));cards[0]?.classList.add('mp-tier-active');
 let deckWidth=tierDeck.clientWidth;
 new ResizeObserver(()=>{
   const width=tierDeck.clientWidth;if(width===deckWidth)return;deckWidth=width;
   if(!phoneLayout.matches)return;
   const index=Math.max(0,buttons.findIndex(button=>button.getAttribute('aria-pressed')==='true'));
   const card=cards[index];
   tierDeck.scrollTo({left:tierDeck.scrollLeft+card.getBoundingClientRect().left-tierDeck.getBoundingClientRect().left-(width-card.offsetWidth)/2,behavior:'instant'});
 }).observe(tierDeck);

}


// Put the existing integration strip in the phone hero; retain desktop placement.
const integrationsStrip=document.querySelector('#makan-logo-scroll-section');
const phoneTagline=document.querySelector('.hero-mobile-tagline');
if(integrationsStrip&&phoneTagline){
 const originalSlot=document.createComment('integrations desktop position');integrationsStrip.before(originalSlot);
 const placeIntegrations=()=>{if(phoneLayout.matches){document.querySelector('#hero').append(integrationsStrip);}else{originalSlot.after(integrationsStrip);}};
 placeIntegrations();phoneLayout.addEventListener('change',placeIntegrations);
}

// A deduplicated phone logo sequence; the second group only closes the marquee loop.
if(integrationsStrip){
 const track=integrationsStrip.querySelector('[style*="animation:makan-logo-scroll"]');
 if(track){
 const originalNodes=[...track.childNodes],originalStyle=track.getAttribute('style');
 const seen=new Set();const logos=[...track.querySelectorAll('img')].filter(img=>{const src=img.getAttribute('src');if(seen.has(src)||src.endsWith('/modis.svg'))return false;seen.add(src);return true;});
 const arrangeLogos=()=>{track.replaceChildren();if(phoneLayout.matches){track.classList.add('mp-logo-track');for(let i=0;i<2;i++){const group=document.createElement('div');group.className='mp-logo-group';if(i)group.setAttribute('aria-hidden','true');logos.forEach(img=>group.append(img.cloneNode(true)));track.append(group);}track.style.setProperty('animation','mp-logo-travel 55s linear infinite','important');track.style.setProperty('gap','0','important');}else{track.classList.remove('mp-logo-track');track.append(...originalNodes);track.setAttribute('style',originalStyle);}};
 arrangeLogos();phoneLayout.addEventListener('change',arrangeLogos);
 }
}

// The phone logo belongs to the hero, never the animated fixed header.
const legacyHeader=document.querySelector('.header');
if(legacyHeader){
 const syncHeroBrand=()=>{if(phoneLayout.matches){legacyHeader.setAttribute('hidden','');}else{legacyHeader.removeAttribute('hidden');}};
 syncHeroBrand();phoneLayout.addEventListener('change',syncHeroBrand);
}

// Keep the phone form prompt short enough to read without scrolling the field.
const demoProblem = document.querySelector('#mk-waitlist-form textarea[name="problem"]');
if (demoProblem) {
 const desktopProblemPrompt = demoProblem.placeholder;
 const syncProblemPrompt = () => { demoProblem.placeholder = phoneLayout.matches ? 'What would you like Makan to help with?' : desktopProblemPrompt; };
 syncProblemPrompt();
 phoneLayout.addEventListener('change', syncProblemPrompt);
 document.addEventListener('makan:lang-changed', syncProblemPrompt);
}
