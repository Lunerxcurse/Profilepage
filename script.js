// Custom cursor functionality
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  let posX = 0, posY = 0;
  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth cursor animation
  const animate = () => {
    posX += (mouseX - posX) * 0.1;
    posY += (mouseY - posY) * 0.1;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
    
    follower.style.left = `${posX}px`;
    follower.style.top = `${posY}px`;

    requestAnimationFrame(animate);
  };
  animate();

  // Add hover effect for clickable elements
  const handleMouseInteraction = (elements, enter) => {
    elements.forEach(element => {
      element.addEventListener(enter ? 'mouseenter' : 'mouseleave', () => {
        cursor.classList[enter ? 'add' : 'remove']('active');
        follower.classList[enter ? 'add' : 'remove']('active');
      });
    });
  };

  // Add hover effects for all clickable elements
  const clickableElements = document.querySelectorAll('a, button, input, select, [role="button"]');
  handleMouseInteraction(clickableElements, true);
  handleMouseInteraction(clickableElements, false);
});