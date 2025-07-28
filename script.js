// Magic click sparkle (still works on click)
document.addEventListener('click', function(e) {
    let star = document.createElement("div");
    star.innerHTML = "✨";
    star.style.position = "fixed";
    star.style.left = e.clientX + "px";
    star.style.top = e.clientY + "px";
    star.style.fontSize = "2em";
    star.style.pointerEvents = "none";
    star.style.transition = "all 1.2s cubic-bezier(.33,1.52,.57,.73)";
    document.body.appendChild(star);
  
    setTimeout(() => {
      star.style.opacity = 0;
      star.style.transform = "translateY(-50px) scale(1.5)";
    }, 50);
  
    setTimeout(() => {
      document.body.removeChild(star);
    }, 1200);
  });
  
  // MAGIC DUST TRAIL (Gold sparkle dust follows mouse)
  document.addEventListener('mousemove', function(e) {
    // Small gold/yellow speckle
    let dust = document.createElement("div");
    dust.className = "magic-dust";
    dust.style.left = (e.clientX + (Math.random() * 14 - 7)) + "px";
    dust.style.top = (e.clientY + (Math.random() * 14 - 7)) + "px";
    document.body.appendChild(dust);
  
    setTimeout(() => {
      dust.style.opacity = 0;
      dust.style.transform = "scale(0.4) translateY(-20px)";
    }, 10);
  
    setTimeout(() => {
      document.body.removeChild(dust);
    }, 950);
  });
  
  // Contact form handler
  document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('The owl is on its way (form submission not wired yet)!');
  });
  