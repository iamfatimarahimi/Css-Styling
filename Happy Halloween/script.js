gsap.from("#leftside", {
  scrollTrigger: {
    scrub: true,
  },
  x: -100,
});
gsap.from("#rightside", {
  scrollTrigger: {
    scrub: true,
  },
  x: 100,
});