// Add a little magic sparkle when user clicks!
document.addEventListener('click', function(e) {
    let star = document.createElement("div");
    star.innerHTML = "✨";
    star.style.position = "fixed";
    star.style.left = e.clientX + "px";
    star.style.top = e.clientY + "px";
    star.style.fontSize = "2em";
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
  
  // Simple contact form handler (optional, as form will not actually send without customization)
  document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('The owl is on its way (form submission not wired yet)!');
  });
  