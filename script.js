// Magic click sparkle
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
  
  // Simple contact form handler (optional)
  document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('The owl is on its way (form submission not wired yet)!');
  });
  
  // Marauder's Map interactive dots
  const mapContainer = document.getElementById('map-container');
  
  if (mapContainer) {
    // example coordinates relative to map container (in %)
    const users = [
      {name: 'Yeseswini', x: 30, y: 50},
      {name: 'Hogwarts', x: 60, y: 30},
      {name: 'Diagon Alley', x: 45, y: 70}
    ];
  
    users.forEach(user => {
      let dot = document.createElement('div');
      dot.classList.add('user-dot');
      dot.style.left = user.x + '%';
      dot.style.top = user.y + '%';
      dot.title = user.name;
      mapContainer.appendChild(dot);
    });
  }
  