document.addEventListener('DOMContentLoaded', () => {
  const bubble = document.getElementById('mia-chat-bubble');
  const windowBox = document.getElementById('mia-chat-window');

  if (bubble && windowBox) {
    bubble.addEventListener('click', () => {
      windowBox.style.display = windowBox.style.display === 'none' ? 'block' : 'none';
    });
  }
});
