// بيانات المهارات
const skills = [
  { name: 'HTML', pct: 95 },
  { name: 'CSS', pct: 92 },
  { name: 'JavaScript', pct: 80 },
  { name: 'Git & GitHub', pct: 78 },
  { name: 'C++', pct: 65 },
  { name: 'Graphic Design', pct: 72 },
];

// توليد قائمة المهارات في الـ HTML
const list = document.getElementById('skillsList');
skills.forEach(s => {
  list.innerHTML += `
    <div class="skill-row">
      <div class="skill-name">${s.name}</div>
      <div class="skill-track"><div class="skill-fill" data-w="${s.pct}"></div></div>
      <div class="skill-pct">${s.pct}%</div>
    </div>`;
});

// أنيميشن تحميل الـ Progress bars
setTimeout(() => {
  document.querySelectorAll('.skill-fill').forEach(el => {
    el.style.width = el.dataset.w + '%';
  });
}, 300);

// تبديل الثيم (Dark/Light Mode)
const tog = document.getElementById('tog');
const knob = document.getElementById('knob');
let dark = false;

tog.addEventListener('click', () => {
  dark = !dark;
  document.body.classList.toggle('dark', dark);
  knob.textContent = dark ? '🌙' : '☀️';
});


document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Custom Cursor ---
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // تكبير الماوس عند الوقوف على اللينكات
  const links = document.querySelectorAll('a, button, .contact-link, .proj-card');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => cursor.classList.add('grow'));
    link.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
  });
  
});