document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;
  
  document.body.appendChild(trail);

  // Verwijder het element na korte tijd en laat het vervagen
  setTimeout(() => {
    trail.style.transform = "translate(-50%, -50%) scale(0.5)";
    trail.style.opacity = "0";
  }, 20);

  setTimeout(() => {
    trail.remove();
  }, 500);
});