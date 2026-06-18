/* ──────────────────────────────────────────────────────────
   script.js — CV Pahlevy Zaqi Shah
   ──────────────────────────────────────────────────────────*/

(function () {
  'use strict';

  // ── Navbar scroll effect & active link ─────────────────
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function onScroll() {
    // Scrolled class for style
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active nav link based on viewport position
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Mobile nav toggle ───────────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinksEl = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinksEl.classList.toggle('open');
  });

  // Close mobile nav when a link is clicked
  navLinksEl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinksEl.classList.remove('open');
    });
  });

  // ── Scroll Reveal ───────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings by small delay
          const siblings = entry.target.closest('.about-grid, .skills-wrapper, .contact-grid, .stat-row');
          const idx = siblings
            ? Array.from(siblings.children).indexOf(entry.target)
            : 0;
          entry.target.style.transitionDelay = `${idx * 0.08}s`;
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  revealEls.forEach(el => revealObserver.observe(el));

  // ── Skill bar animation ─────────────────────────────────
  const skillItems = document.querySelectorAll('.skill-item');

  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target.querySelector('.skill-fill');
          const level = entry.target.dataset.level;
          // Small delay so the bar appears after reveal
          setTimeout(() => {
            fill.style.width = `${level}%`;
          }, 200);
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  skillItems.forEach(item => skillObserver.observe(item));

  // ── Smooth scroll for anchor links ─────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Contact form ────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = contactForm.querySelector('button[type="submit"]');
      const original = btn.innerHTML;

      // Loading state
      btn.disabled = true;
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim...';

      // Simulate send (replace with real fetch/EmailJS when ready)
      setTimeout(() => {
        btn.innerHTML = original;
        btn.disabled = false;
        contactForm.reset();
        formSuccess.classList.add('show');
        setTimeout(() => formSuccess.classList.remove('show'), 5000);
      }, 1500);
    });
  }

  // ── Download CV button ──────────────────────────────────
  const downloadBtn = document.getElementById('downloadBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function (e) {
      // If no actual PDF exists, give friendly feedback
      // Replace href with '/cv-pahlevy-zaqi-shah.pdf' when file is ready
      const pdfPath = this.getAttribute('data-pdf') || null;
      if (!pdfPath) {
        e.preventDefault();
        const original = this.innerHTML;
        this.innerHTML = '<i class="fa-solid fa-circle-info"></i> PDF belum tersedia';
        this.style.opacity = '0.7';
        setTimeout(() => {
          this.innerHTML = original;
          this.style.opacity = '1';
        }, 2500);
      }
    });
  }

  // ── Typing cursor blink in code window ─────────────────
  const codeBody = document.querySelector('.code-body');
  if (codeBody) {
    let visible = true;
    setInterval(() => {
      visible = !visible;
    }, 530);
  }

  // ── Parallax hero glow on mouse move ───────────────────
  const heroGlow = document.querySelector('.hero-glow');
  if (heroGlow) {
    document.addEventListener('mousemove', function (e) {
      const x = (e.clientX / window.innerWidth) * 20 - 10;
      const y = (e.clientY / window.innerHeight) * 20 - 10;
      heroGlow.style.transform = `translate(${x}px, ${y}px)`;
    }, { passive: true });
  }

})();
