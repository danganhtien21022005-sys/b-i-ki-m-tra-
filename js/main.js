document.addEventListener('DOMContentLoaded', () => {
  const mssv = '231A010532';
  document.querySelectorAll('#studentIdDisplay, .footer-mssv').forEach(el => {
    if (!el.textContent.trim()) el.textContent = mssv;
  });
});
