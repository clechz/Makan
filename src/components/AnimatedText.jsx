import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedText = ({ children, className = '' }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split text into words and characters
    const text = textRef.current.textContent;
    const words = text.split(' ');

    textRef.current.innerHTML = '';

    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.whiteSpace = 'nowrap';
      wordSpan.style.display = 'inline-block';

      word.split('').forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        charSpan.style.display = 'inline-block';
        charSpan.style.willChange = 'transform';
        wordSpan.appendChild(charSpan);
      });

      textRef.current.appendChild(wordSpan);

      // Add space after word (except last word)
      if (wordIndex < words.length - 1) {
        textRef.current.appendChild(document.createTextNode(' '));
      }
    });

    // Animate characters
    const chars = textRef.current.querySelectorAll('span span');
    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedText;
