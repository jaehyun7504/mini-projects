'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Sticky navigation
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.btn-box',
    start: 'top top',
    onEnter: () => document.querySelector('.btn-box').classList.add('btn-box--fixed'),
    onEnterBack: () => document.querySelector('.btn-box').classList.remove('btn-box--fixed'),
  },
});

// Box animation
const animation = gsap.to('.box', {
  x: 1000,
  rotation: 360,
  duration: 4,
  paused: true,
});

document.querySelector('.btn-box').addEventListener('click', e => {
  const btn = e.target.closest('.btn');
  if (!btn) return;

  if (btn.classList.contains('btn--play')) animation.play();
  if (btn.classList.contains('btn--pause')) animation.pause();
  if (btn.classList.contains('btn--resume')) animation.resume();
  if (btn.classList.contains('btn--reverse')) {
    animation.reversed(!animation.reversed());
    animation.reversed() ? animation.reverse() : animation.play();
  }
  if (btn.classList.contains('btn--restart')) animation.restart();
});
