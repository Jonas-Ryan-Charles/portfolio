const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-down').forEach((el) => observer.observe(el));
// Scroll gradient shift
const gradients = [
  'radial-gradient(circle at 18% 20%,rgba(37,99,235,.55),transparent 45%),radial-gradient(circle at 80% 30%,rgba(6,182,212,.35),transparent 40%),linear-gradient(180deg,#030509,#060f1e)',
  'radial-gradient(circle at 20% 60%,rgba(99,102,241,.5),transparent 45%),radial-gradient(circle at 75% 20%,rgba(37,99,235,.3),transparent 40%),linear-gradient(180deg,#05071a,#080c1f)',
  'radial-gradient(circle at 15% 30%,rgba(13,148,136,.5),transparent 45%),radial-gradient(circle at 80% 70%,rgba(6,182,212,.35),transparent 40%),linear-gradient(180deg,#020f0d,#041a14)',
  'radial-gradient(circle at 70% 20%,rgba(139,92,246,.5),transparent 45%),radial-gradient(circle at 20% 70%,rgba(168,85,247,.3),transparent 40%),linear-gradient(180deg,#08040f,#100618)',
  'radial-gradient(circle at 30% 50%,rgba(30,58,138,.5),transparent 45%),radial-gradient(circle at 80% 30%,rgba(51,65,85,.4),transparent 40%),linear-gradient(180deg,#020509,#050b18)'
];

const sections = document.querySelectorAll('section');
let lastIndex = -1;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  let closestIndex = 0;
  sections.forEach((sec, i) => {
    if (scrollY >= sec.offsetTop - window.innerHeight / 2) closestIndex = i;
  });
  if (closestIndex !== lastIndex && gradients[closestIndex]) {
    lastIndex = closestIndex;
    document.body.style.background = gradients[closestIndex];
  }
});
