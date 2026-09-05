  // Google Analytics is only loaded after the user consents — see the
  // cookie banner below. Nothing analytics-related runs before that.
  function loadGoogleAnalytics(){
    if(window.gaLoaded) return;
    window.gaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-RP1K0VXQ7T';
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-RP1K0VXQ7T');
  }

  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAccept = document.getElementById('cookieAccept');
  const cookieReject = document.getElementById('cookieReject');
  const cookieSettingsTrigger = document.getElementById('cookieSettingsTrigger');

  function showCookieBanner(){
    if(cookieBanner) cookieBanner.classList.add('is-visible');
  }
  function hideCookieBanner(){
    if(cookieBanner) cookieBanner.classList.remove('is-visible');
  }

  const cookieChoice = localStorage.getItem('cookie_consent');
  if(cookieChoice === 'accepted'){
    loadGoogleAnalytics();
  } else if(cookieChoice !== 'rejected'){
    showCookieBanner();
  }

  if(cookieAccept){
    cookieAccept.addEventListener('click', function(){
      localStorage.setItem('cookie_consent', 'accepted');
      loadGoogleAnalytics();
      hideCookieBanner();
    });
  }
  if(cookieReject){
    cookieReject.addEventListener('click', function(){
      localStorage.setItem('cookie_consent', 'rejected');
      hideCookieBanner();
    });
  }
  if(cookieSettingsTrigger){
    cookieSettingsTrigger.addEventListener('click', function(){
      showCookieBanner();
    });
  }

  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.15});
  els.forEach(el=>io.observe(el));

  const availabilityTab = document.getElementById('availabilityTab');
  const availabilityPanel = document.getElementById('availabilityPanel');
  const availabilityClose = document.getElementById('availabilityClose');
  const availabilityBackdrop = document.getElementById('availabilityBackdrop');

  function openAvailability(){
    availabilityPanel.classList.add('is-open');
    availabilityBackdrop.classList.add('is-open');
    availabilityTab.setAttribute('aria-expanded', 'true');
  }
  function closeAvailability(){
    availabilityPanel.classList.remove('is-open');
    availabilityBackdrop.classList.remove('is-open');
    availabilityTab.setAttribute('aria-expanded', 'false');
  }
  if(availabilityTab && availabilityPanel){
    availabilityTab.addEventListener('click', ()=>{
      if(availabilityPanel.classList.contains('is-open')){
        closeAvailability();
      } else {
        openAvailability();
      }
    });
  }
  if(availabilityClose){
    availabilityClose.addEventListener('click', closeAvailability);
  }
  if(availabilityBackdrop){
    availabilityBackdrop.addEventListener('click', closeAvailability);
  }
  document.querySelectorAll('.open-availability').forEach(function(el){
    el.addEventListener('click', function(e){
      e.preventDefault();
      openAvailability();
    });
  });

  const menuTrigger = document.getElementById('menuTrigger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.getElementById('mobileMenuClose');

  function openMobileMenu(){
    mobileMenu.classList.add('is-open');
    menuTrigger.setAttribute('aria-expanded', 'true');
  }
  function closeMobileMenu(){
    mobileMenu.classList.remove('is-open');
    menuTrigger.setAttribute('aria-expanded', 'false');
  }
  if(menuTrigger && mobileMenu){
    menuTrigger.addEventListener('click', openMobileMenu);
  }
  if(mobileMenuClose){
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('is-open')){
      closeMobileMenu();
    }
  });
  if(mobileMenu){
    mobileMenu.querySelectorAll('a').forEach(link=>{
      link.addEventListener('click', closeMobileMenu);
    });
  }

  const heroEl = document.querySelector('.hero');
  const heroScrim = document.querySelector('.hero-scrim');
  function updateHeroFade(){
    if(!heroEl || !heroScrim) return;
    const heroHeight = heroEl.offsetHeight || 1;
    const progress = Math.min(Math.max(window.scrollY / heroHeight, 0), 1);
    heroScrim.style.opacity = (progress * 0.8).toFixed(2);
  }
  window.addEventListener('scroll', updateHeroFade, {passive:true});
  window.addEventListener('resize', updateHeroFade);
  updateHeroFade();

  const heroImgA = document.querySelector('.hero-img-a');
  const heroImgB = document.querySelector('.hero-img-b');
  const heroContentEl = document.querySelector('.hero-content');
  let heroTimers = [];

  function clearHeroTimers(){
    heroTimers.forEach(t => clearTimeout(t));
    heroTimers = [];
  }

  function playHeroSequence(){
    if(!heroImgA || !heroImgB) return;
    clearHeroTimers();

    // reset both images to their starting state
    heroImgB.classList.remove('is-visible', 'is-zooming');
    heroImgA.classList.remove('is-zooming', 'is-fading');
    if(heroContentEl) heroContentEl.classList.remove('is-visible');
    void heroImgA.offsetWidth; // force reflow so the animation can restart
    void heroImgB.offsetWidth;

    const CROSSFADE_START_MS = 2200; // shorter dwell time before the crossfade begins

    // phase 1: image A starts its slow zoom
    heroImgA.classList.add('is-zooming');

    // phase 2: crossfade begins well before image A's zoom finishes, so the two
    // motions overlap — A fades out while B fades in and starts its own zoom.
    // The hero text floats up into place at the same moment, so the whole
    // reveal — image and text — feels like one connected motion.
    heroTimers.push(setTimeout(()=>{
      heroImgA.classList.add('is-fading');
      heroImgB.classList.add('is-visible', 'is-zooming');
      if(heroContentEl) heroContentEl.classList.add('is-visible');
    }, CROSSFADE_START_MS));
  }

  playHeroSequence();

  if(heroEl){
    let hasLeftHero = false;
    const heroReplayObserver = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting){
          hasLeftHero = true;
        } else if(hasLeftHero){
          hasLeftHero = false;
          playHeroSequence();
        }
      });
    }, {threshold:0.6});
    heroReplayObserver.observe(heroEl);
  }

  const chatBubble = document.getElementById('chatBubble');
  if(chatBubble){
    let chatBubbleShown = false;
    function checkChatBubbleScroll(){
      if(!chatBubbleShown && window.scrollY > 120){
        chatBubbleShown = true;
        chatBubble.classList.add('is-visible');
        window.removeEventListener('scroll', checkChatBubbleScroll);
      }
    }
    window.addEventListener('scroll', checkChatBubbleScroll, {passive:true});
    checkChatBubbleScroll();
  }

  const newsletterBox = document.getElementById('newsletterBox');
  const newsletterClose = document.getElementById('newsletterClose');
  const newsletterForm = document.getElementById('newsletterForm');
  const galleryEl = document.getElementById('gallery');
  let newsletterDismissed = false;

  if(newsletterBox && galleryEl){
    const newsletterObserver = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting && !newsletterDismissed){
          newsletterBox.classList.add('is-visible');
        }
      });
    }, {threshold:0.15});
    newsletterObserver.observe(galleryEl);
  }

  if(newsletterClose){
    newsletterClose.addEventListener('click', ()=>{
      newsletterDismissed = true;
      newsletterBox.classList.remove('is-visible');
    });
  }

  // Paste your Google Apps Script Web App URL here once deployed
  // (see setup instructions — Extensions > Apps Script > Deploy > Web app).
  const GOOGLE_SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxMnABvzZoL22w2mbKTwQmEQ0ub0-7M9tz32rbsC3YnjOsU9DjAzUNoOpWj1p8Wmjm_/exec';

  if(newsletterForm){
    newsletterForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;

      if(GOOGLE_SHEET_ENDPOINT && GOOGLE_SHEET_ENDPOINT.indexOf('PASTE_YOUR') === -1){
        // no-cors: Apps Script doesn't return CORS headers, so the response
        // is opaque — we can't read it, but the row is appended regardless.
        fetch(GOOGLE_SHEET_ENDPOINT, {
          method:'POST',
          mode:'no-cors',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({action:'subscribe', email:email})
        }).catch(()=>{ /* network errors ignored — see note above */ });
      }

      newsletterBox.classList.add('is-submitted');
      setTimeout(()=>{
        newsletterDismissed = true;
        newsletterBox.classList.remove('is-visible');
      }, 2600);
    });
  }

  const unsubTrigger = document.getElementById('unsubTrigger');
  const unsubOverlay = document.getElementById('unsubOverlay');
  const unsubClose = document.getElementById('unsubClose');
  const unsubForm = document.getElementById('unsubForm');
  const unsubBox = document.getElementById('unsubBox');

  if(unsubTrigger && unsubOverlay){
    unsubTrigger.addEventListener('click', ()=>{
      unsubOverlay.classList.add('is-open');
    });
  }
  if(unsubClose && unsubOverlay){
    unsubClose.addEventListener('click', ()=>{
      unsubOverlay.classList.remove('is-open');
    });
  }
  if(unsubOverlay){
    unsubOverlay.addEventListener('click', (e)=>{
      if(e.target === unsubOverlay) unsubOverlay.classList.remove('is-open');
    });
  }
  if(unsubForm){
    unsubForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = unsubForm.querySelector('input[type="email"]').value;

      if(GOOGLE_SHEET_ENDPOINT && GOOGLE_SHEET_ENDPOINT.indexOf('PASTE_YOUR') === -1){
        fetch(GOOGLE_SHEET_ENDPOINT, {
          method:'POST',
          mode:'no-cors',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({action:'unsubscribe', email:email})
        }).catch(()=>{ /* network errors ignored — see note above */ });
      }

      unsubBox.classList.add('is-submitted');
      setTimeout(()=>{
        unsubOverlay.classList.remove('is-open');
        unsubBox.classList.remove('is-submitted');
        unsubForm.reset();
      }, 2200);
    });
  }
