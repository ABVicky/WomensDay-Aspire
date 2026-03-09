/**
 * ================================================================
 *  WOMEN'S DAY — Blossom Luxe Gallery Edition
 *  script.js — Gallery, Lightbox, Particles, Confetti & Magic
 * ================================================================
 */

/* ----------------------------------------------------------------
   1. GALLERY DATA — actual image files in /images/
   ---------------------------------------------------------------- */
const galleryImages = [
  {
    src: "images/Harshita.jpg",
    hearts: "💖 💕 💗",
    quote: "Your brilliance lights up every room you walk into. ✨"
  },
  {
    src: "images/chatgpt_image.png",
    hearts: "🌸 💐 🌺",
    quote: "Radiant, resilient, and truly remarkable. 🌸"
  },
  {
    src: "images/f2ecd25d-ed2d-44a3-9f8e-bc3d31a26941.png",
    hearts: "💫 ✨ 💖",
    quote: "Your energy is pure sunshine for our whole team. ☀️"
  },
  {
    src: "images/fb1b9b86-cc6b-41d3-966c-5a0b36956252.png",
    hearts: "💗 💓 💝",
    quote: "Strength, grace, and endless inspiration. 👑"
  },
  {
    src: "images/hf_20260307_191241_709a91ce-7994-4212-a96f-4b64d5c58487.jpeg",
    hearts: "🌺 💖 🌸",
    quote: "You make the impossible look effortless. 🦋"
  },
  {
    src: "images/hf_20260307_192108_2cc85f57-29ad-411c-a92b-202aa73db516.jpeg",
    hearts: "✨ 💫 🌟",
    quote: "Creative, fearless, and absolutely wonderful. ✨"
  },
  {
    src: "images/hf_20260307_192812_f4e99109-a719-4164-a2fe-3c79dbe916e6.jpeg",
    hearts: "💕 💗 🌷",
    quote: "Your warmth creates a place where everyone thrives. 🌷"
  },
  {
    src: "images/hf_04bbb5b4.jpeg",
    hearts: "💖 🌸 💐",
    quote: "A heart full of kindness and a mind full of magic. 🌙"
  },
  {
    src: "images/hf_20260307_193929_c8084ba8-8d03-484b-b15d-1c16439810d9.jpeg",
    hearts: "🌟 💖 ✨",
    quote: "You inspire excellence in everything you touch. 💎"
  },
  {
    src: "images/hf_20260307_195321_c3629b4b-981d-42d0-ab45-6b5042dfbe46.jpeg",
    hearts: "💫 💕 💗",
    quote: "Bold, brilliant, and beautifully you. 🌈"
  },
  {
    src: "images/hf_20260307_195756_7368882d-0139-4f27-a21e-a3db0fc110f4.jpeg",
    hearts: "🌺 🌸 💖",
    quote: "Your passion ignites something beautiful in all of us. 🔥"
  },
  {
    src: "images/hf_20260307_201734_6481590a-8eaa-4fba-8a78-f616d825036a.jpeg",
    hearts: "💝 💓 🌟",
    quote: "Calm, collected, and endlessly inspiring. 🎋"
  },
  {
    src: "images/hf_20260307_202119_c23f6711-5292-4138-835f-fee826257acf.jpeg",
    hearts: "✨ 💖 🌸",
    quote: "Every project you touch becomes extraordinary. 🪄"
  },
  {
    src: "images/hf_20260307_202956_1baaf904-e0f2-4a50-a43a-88530cbee8cb.jpeg",
    hearts: "💐 🌷 💗",
    quote: "Your ideas reshape the world around you. 🌍"
  },
  {
    src: "images/hf_20260307_204008_ac50d53f-3c46-4d63-b6be-d545ad4489ee.jpeg",
    hearts: "🌸 💖 ✨",
    quote: "Positivity, power, and pure brilliance. 💫"
  },
  {
    src: "images/hf_20260308_094548_18f4a146-4077-4490-b9a5-e13f9ce5c859.jpeg",
    hearts: "💓 💕 🌺",
    quote: "You lead with heart — and it shows in everything. 👸"
  },
  {
    src: "images/hf_20260308_095955_ea41467f-0439-4bb3-8ae9-f60b5b208af1.jpeg",
    hearts: "💗 🌸 ✨",
    quote: "Your determination is truly awe-inspiring. 🦅"
  },
  {
    src: "images/hf_20260308_101518_5f515717-5f90-4aa3-87c4-62b4058314b5.jpeg",
    hearts: "💖 💝 🌟",
    quote: "Unstoppable. Unapologetic. Uniquely you. 🌠"
  },
  {
    src: "images/hf_20260308_102216_72d6b845-23d6-42aa-a010-12da61324c12.jpeg",
    hearts: "🌷 💐 💖",
    quote: "You bring grace and grit to everything you do. 🌹"
  },
  {
    src: "images/melanie.png",
    hearts: "💫 💖 🌸",
    quote: "Resilient, brilliant, and simply outstanding. 🏆"
  }
];

/* ----------------------------------------------------------------
   2. SECTIONS
   ---------------------------------------------------------------- */
const sections = {
  landing: document.getElementById('landing'),
  gallery: document.getElementById('gallery'),
};

const enterBtn = document.getElementById('enterBtn');
const backToHeroBtn = document.getElementById('backToHeroBtn');
const celebrateBtn = document.getElementById('celebrateBtn');
const particleCanvas = document.getElementById('particleCanvas');
const heartsLayer = document.getElementById('heartsLayer');
const photoGrid = document.getElementById('photoGrid');

/* ----------------------------------------------------------------
   3. SECTION TRANSITIONS
   ---------------------------------------------------------------- */
function showSection(name, useSweep = true) {
  const target = sections[name];
  if (!target) return;

  if (useSweep) {
    const overlay = document.getElementById('transitionOverlay');
    gsap.timeline()
      .to(overlay, { opacity: 1, duration: 0.35, ease: 'power2.in' })
      .call(() => {
        Object.values(sections).forEach(s => s.classList.remove('active'));
        target.classList.add('active');
        if (name === 'gallery') target.scrollTop = 0;
      })
      .to(overlay, { opacity: 0, duration: 0.5, ease: 'power2.out', delay: 0.05 });
  } else {
    Object.values(sections).forEach(s => s.classList.remove('active'));
    target.classList.add('active');
  }
}

/* ----------------------------------------------------------------
   4. BUILD PHOTO GRID
   ---------------------------------------------------------------- */
const messages = [
  "You make our workplace stronger, kinder & more inspiring.",
  "Your brilliance changes everything around you.",
  "Celebrated, loved, and deeply appreciated.",
  "Our team is better because of you — always.",
  "You are the heart of everything great we do.",
];

function buildGallery() {
  photoGrid.innerHTML = '';
  galleryImages.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.setAttribute('data-index', i);

    card.innerHTML = `
      <img src="${item.src}" alt="DigiSpire Woman ${i + 1}" loading="lazy" />
      <div class="photo-card-overlay">
        <div class="photo-card-hearts">${item.hearts}</div>
        <div class="photo-card-wish">Vicky wishes you...</div>
        <div class="photo-card-msg">${item.quote}</div>
      </div>
      <div class="photo-card-ribbon">🌸 She Slays</div>
    `;

    card.addEventListener('click', () => openLightbox(item, i));
    photoGrid.appendChild(card);
  });
}

/* ----------------------------------------------------------------
   5. LIGHTBOX
   ---------------------------------------------------------------- */
let lightbox = null;

function createLightbox() {
  lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.innerHTML = `
    <div class="lightbox-inner" id="lbInner">
      <button class="lightbox-close" id="lbClose" aria-label="Close">✕</button>
      <img id="lbImg" src="" alt="" />
      <div class="lightbox-msg">
        <div class="lightbox-hearts" id="lbHearts"></div>
        <div class="lightbox-wish">Vicky wishes you...</div>
        <p class="lightbox-quote" id="lbQuote"></p>
      </div>
    </div>
  `;
  document.body.appendChild(lightbox);

  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}

function openLightbox(item, idx) {
  if (!lightbox) createLightbox();
  document.getElementById('lbImg').src = item.src;
  document.getElementById('lbImg').alt = `DigiSpire Woman ${idx + 1}`;
  document.getElementById('lbHearts').textContent = item.hearts;
  document.getElementById('lbQuote').textContent = item.quote;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (lightbox) {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ----------------------------------------------------------------
   6. ULTRA PARTICLE CANVAS
   ---------------------------------------------------------------- */
(function initParticles() {
  const ctx = particleCanvas.getContext('2d');
  let W, H;

  const particles = [];
  const stars = [];
  const orbs = [];

  function resize() {
    W = particleCanvas.width = window.innerWidth;
    H = particleCanvas.height = window.innerHeight;
  }

  const SPARK_CHARS = ['✦', '✧', '⋆', '˚', '·', '✿', '❋', '❀'];

  function makeSpark() {
    return {
      type: 'spark',
      x: Math.random() * W,
      y: Math.random() * H,
      size: Math.random() * 12 + 4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -(Math.random() * 0.5 + 0.15),
      alpha: Math.random() * 0.6 + 0.2,
      char: SPARK_CHARS[Math.floor(Math.random() * SPARK_CHARS.length)],
      hue: Math.random() < 0.5 ? '#ff85b3' : '#c9a0ff',
      pulse: Math.random() * Math.PI * 2,
    };
  }

  function makeStar() {
    const angle = (Math.random() * 30 + 15) * (Math.PI / 180);
    const speed = Math.random() * 8 + 5;
    return {
      type: 'star',
      x: Math.random() * W,
      y: Math.random() * H * 0.5,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      len: Math.random() * 80 + 60,
      alpha: 1,
      fade: Math.random() * 0.02 + 0.015,
      color: Math.random() < 0.5 ? '#ffaecf' : '#e8d5ff',
    };
  }

  function makeOrb() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 120 + 60,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      alpha: Math.random() * 0.06 + 0.02,
      color: Math.random() < 0.5 ? '#ff2d78' : '#c9a0ff',
    };
  }

  function seed() {
    particles.length = 0; stars.length = 0; orbs.length = 0;
    for (let i = 0; i < 70; i++) particles.push(makeSpark());
    for (let i = 0; i < 6; i++) orbs.push(makeOrb());
  }

  function spawnStars() {
    if (stars.length < 5) stars.push(makeStar());
    setTimeout(spawnStars, Math.random() * 2000 + 1200);
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);

    orbs.forEach(o => {
      const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
      grad.addColorStop(0, o.color);
      grad.addColorStop(1, 'transparent');
      ctx.save(); ctx.globalAlpha = o.alpha; ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      o.x += o.vx; o.y += o.vy;
      if (o.x < -o.r) o.x = W + o.r; if (o.x > W + o.r) o.x = -o.r;
      if (o.y < -o.r) o.y = H + o.r; if (o.y > H + o.r) o.y = -o.r;
    });

    particles.forEach(p => {
      p.pulse += 0.04;
      const sizeNow = p.size + Math.sin(p.pulse) * 2;
      ctx.save();
      ctx.globalAlpha = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
      ctx.fillStyle = p.hue;
      ctx.font = `${sizeNow}px serif`;
      ctx.fillText(p.char, p.x, p.y);
      ctx.restore();
      p.x += p.vx; p.y += p.vy;
      if (p.y < -20) { p.y = H + 20; p.x = Math.random() * W; }
      if (p.x < -20) p.x = W + 20;
      if (p.x > W + 20) p.x = -20;
    });

    for (let i = stars.length - 1; i >= 0; i--) {
      const s = stars[i];
      ctx.save(); ctx.globalAlpha = s.alpha;
      const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 12, s.y - s.vy * 12);
      grad.addColorStop(0, s.color); grad.addColorStop(1, 'transparent');
      ctx.strokeStyle = grad; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx * 10, s.y - s.vy * 10); ctx.stroke();
      ctx.restore();
      s.x += s.vx; s.y += s.vy; s.alpha -= s.fade;
      if (s.alpha <= 0 || s.x > W + 50 || s.y > H + 50) stars.splice(i, 1);
    }

    requestAnimationFrame(animate);
  }

  resize(); seed(); animate(); spawnStars();
  window.addEventListener('resize', () => { resize(); seed(); });
})();

/* ----------------------------------------------------------------
   7. HERO ENTRANCE ANIMATION
   ---------------------------------------------------------------- */
window.addEventListener('DOMContentLoaded', () => {
  sections.landing.classList.add('active');
  buildGallery();

  gsap.timeline({ delay: 0.4 })
    .to('.hero-line-1', { opacity: 1, y: 0, duration: 1, ease: 'expo.out' })
    .to('.hero-line-2', { opacity: 1, y: 0, duration: 1, ease: 'expo.out' }, '-=0.5')
    .to('.hero-emoji', { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(2)' }, '-=0.3')
    .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
    .to('#enterBtn', { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.7)' }, '-=0.2');

  gsap.to('.hero-title', { y: -8, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1 });
});

/* ----------------------------------------------------------------
   8. NAVIGATION
   ---------------------------------------------------------------- */
enterBtn.addEventListener('click', () => {
  showSection('gallery');
  animateGallery();
});

backToHeroBtn.addEventListener('click', () => showSection('landing'));

/* ----------------------------------------------------------------
   9. GALLERY ENTRANCE ANIMATIONS
   ---------------------------------------------------------------- */
function animateGallery() {
  const cards = document.querySelectorAll('.photo-card');

  gsap.set(['.gallery-header', '.photo-grid', '.gallery-footer'], { opacity: 0, y: 40 });
  gsap.set(cards, { opacity: 0, y: 30, scale: 0.9 });
  gsap.set('#finalMessage', { opacity: 0, y: 50 });

  gsap.timeline({ delay: 0.5 })
    .to('.gallery-header', { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' })
    .to('.photo-grid', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');

  gsap.to(cards, {
    opacity: 1, y: 0, scale: 1,
    duration: 0.55, ease: 'back.out(1.5)',
    stagger: { amount: 1.4, from: 'start' },
    delay: 0.9
  });

  gsap.to('.gallery-footer', { opacity: 1, y: 0, duration: 0.7, ease: 'expo.out', delay: 1.6 });

  // Scroll-triggered final message reveal
  const scroller = document.getElementById('gallery');
  ScrollTrigger.getAll().forEach(t => t.kill());

  gsap.fromTo('#finalMessage',
    { opacity: 0, y: 60, scale: 0.96 },
    {
      opacity: 1, y: 0, scale: 1,
      duration: 1, ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: '#finalMessage',
        scroller,
        start: 'top 88%',
        once: true
      }
    }
  );

  // Pulse celebrate button once visible
  gsap.fromTo('#celebrateBtn',
    { opacity: 0, scale: 0.85 },
    {
      opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.6)', delay: 1.8,
      onComplete: () => {
        gsap.to('#celebrateBtn', { scale: 1.04, duration: 1.4, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      }
    }
  );
}

/* ----------------------------------------------------------------
   10. CONFETTI
   ---------------------------------------------------------------- */
function fireConfetti() {
  const colors = ['#ff2d78', '#c9a0ff', '#ffd6c9', '#ffffff', '#ffb8a0', '#ff85b3', '#ffd700'];
  const shoot = (origin, angle, spread) =>
    confetti({ particleCount: 90, angle, spread, origin, colors, scalar: 1.1 });

  shoot({ x: 0, y: 0.65 }, 60, 55);
  shoot({ x: 1, y: 0.65 }, 120, 55);
  setTimeout(() => shoot({ x: 0.5, y: 0.35 }, 90, 100), 350);
  setTimeout(() => {
    shoot({ x: 0.2, y: 0.7 }, 75, 45);
    shoot({ x: 0.8, y: 0.7 }, 105, 45);
  }, 700);
}

/* ----------------------------------------------------------------
   11. FLOATING HEARTS
   ---------------------------------------------------------------- */
const HEART_CHARS = ['💖', '💕', '💗', '💓', '💝', '🌸', '✨', '🌺', '💫', '⭐'];

function launchHearts(count = 20) {
  heartsLayer.innerHTML = '';
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const el = document.createElement('span');
      el.className = 'heart';
      el.textContent = HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)];
      el.style.left = `${Math.random() * 100}%`;
      el.style.bottom = '-5%';
      el.style.fontSize = `${Math.random() * 1.8 + 0.8}rem`;
      const dur = Math.random() * 3 + 3.5;
      el.style.animationDuration = `${dur}s`;
      heartsLayer.appendChild(el);
      setTimeout(() => el.remove(), (dur + 0.5) * 1000);
    }, i * 100);
  }
}

/* ----------------------------------------------------------------
   12. CELEBRATE BUTTON
   ---------------------------------------------------------------- */
celebrateBtn.addEventListener('click', () => {
  gsap.fromTo('#celebrateBtn',
    { scale: 0.88 },
    { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.4)' }
  );
  fireConfetti();
  launchHearts(32);
});
