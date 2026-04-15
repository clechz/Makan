import { useEffect, useRef } from 'react';

const StarField = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create 200 stars
    const starCount = 200;
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');

      // Random position
      const left = Math.random() * 100;
      const top = Math.random() * 100;

      // Random size between 1px and 1.5px
      const size = 1 + Math.random() * 0.5;

      // Random opacity
      const opacity = 0.2 + Math.random() * 0.3;

      // Random color - mostly white/gray with some cyan/pink accents
      const colors = [
        'rgb(255, 255, 255)',
        'rgb(255, 255, 255)',
        'rgb(255, 255, 255)',
        'rgb(204, 204, 204)',
        'rgb(204, 204, 204)',
        '#22D3EE', // cyan
        '#EC4899', // pink
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];

      // Random animation duration and scale
      const duration = 2 + Math.random() * 4;
      const scale = 1 + Math.random() * 0.2;

      star.style.cssText = `
        position: absolute;
        left: ${left}%;
        top: ${top}%;
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        border-radius: 50%;
        opacity: ${opacity};
        will-change: transform;
        animation: float-${i} ${duration}s ease-in-out infinite;
        transform: scale(${scale});
      `;

      // Add unique keyframe animation for each star
      const style = document.createElement('style');
      const randomX = (Math.random() - 0.5) * 20;
      const randomY = (Math.random() - 0.5) * 20;

      style.textContent = `
        @keyframes float-${i} {
          0%, 100% {
            transform: translate(0, 0) scale(${scale});
            opacity: ${opacity};
          }
          50% {
            transform: translate(${randomX}px, ${randomY}px) scale(${scale * 1.2});
            opacity: ${opacity * 1.5};
          }
        }
      `;

      document.head.appendChild(style);
      container.appendChild(star);
      stars.push({ element: star, style });
    }

    // Cleanup
    return () => {
      stars.forEach(({ element, style }) => {
        element.remove();
        style.remove();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default StarField;
