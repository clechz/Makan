// Desktop comparison lists become optional detail on phones.
const phoneLayout = window.matchMedia('(max-width: 767px)');
const featureDetails = document.querySelectorAll('.mk-tier-details');
function syncFeatureDetails() {
  featureDetails.forEach(details => { details.open = !phoneLayout.matches; });
}
syncFeatureDetails();
phoneLayout.addEventListener('change', syncFeatureDetails);
featureDetails.forEach(details => details.addEventListener('toggle', () => {
  if (window.ScrollTrigger) window.ScrollTrigger.refresh();
}));

const phoneMap = document.querySelector('#mp-map-image');
document.querySelectorAll('[data-phone-view]').forEach(button => {
  button.addEventListener('click', () => {
    const raw = button.dataset.phoneView === 'raw';
    phoneMap.src = raw ? './assets/before-satellite.png' : './assets/after-makan-overlay.png';
    const key = raw ? 'beforeafter.slider.alt.before' : 'beforeafter.slider.alt.after';
    phoneMap.dataset.i18nAlt = key;
    phoneMap.alt = window.MakanI18n.t(key);
    document.querySelectorAll('[data-phone-view]').forEach(control => {
      control.setAttribute('aria-pressed', String(control === button));
    });
  });
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
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  });
});

document.querySelectorAll('[data-shift-pass]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.mp-spatial').dataset.pass = button.dataset.shiftPass;
    document.querySelectorAll('[data-shift-pass]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  });
});
