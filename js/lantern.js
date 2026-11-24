document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('lanternCarousel');
  const toggleBtn = document.getElementById('toggleSpinBtn');
  const speedRange = document.getElementById('speedRange');
  const speedLabel = document.getElementById('speedLabel');
  const dirBtn = document.getElementById('reverseDirBtn');

  if (!carousel) return;

  let isPaused = false;
  let isReverse = false;

  carousel.addEventListener('mouseenter', () => {
    carousel.classList.add('paused');
  });

  carousel.addEventListener('mouseleave', () => {
    if (!isPaused) {
      carousel.classList.remove('paused');
    }
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isPaused = !isPaused;
      carousel.classList.toggle('paused', isPaused);
      toggleBtn.textContent = isPaused ? '▶ Tiếp tục quay' : '⏸ Tạm dừng';
    });
  }

  if (speedRange && speedLabel) {
    speedRange.addEventListener('input', () => {
      const sec = speedRange.value;
      carousel.style.animationDuration = sec + 's';
      speedLabel.textContent = sec + 's / vòng';
    });
  }

  if (dirBtn) {
    dirBtn.addEventListener('click', () => {
      isReverse = !isReverse;
      carousel.style.animationDirection = isReverse ? 'reverse' : 'normal';
      dirBtn.textContent = isReverse ? '↻ Quay thuận chiều' : '↺ Đảo chiều quay';
    });
  }
});
