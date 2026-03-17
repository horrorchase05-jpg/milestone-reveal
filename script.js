// This makes the function globally accessible to the HTML button
window.triggerReveal = function() {
  const intro = document.getElementById('intro');
  const stage = document.getElementById('mainStage');
  const flash = document.getElementById('flash');

  // 1. Instant Shutter Flash
  flash.style.transition = 'none';
  flash.style.opacity = '1';
  
  // 2. Perform the swap after a tiny delay (100ms)
  setTimeout(() => {
    // Hide intro, show stage
    intro.style.display = 'none';
    stage.style.display = 'flex';
    
    // Slight delay to allow display:flex to register before animating opacity
    setTimeout(() => {
      stage.style.opacity = '1';
      stage.style.transition = 'opacity 1.5s ease-out';
    }, 10);

    // 3. Fade out the flash
    flash.style.transition = 'opacity 1s ease-out';
    flash.style.opacity = '0';
  }, 100);
};