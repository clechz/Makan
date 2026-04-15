import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FrameAnimation = () => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const frameDataRef = useRef({ frame: 0 });

  const frameCount = 161; // 0-160
  const currentFrame = (index) => {
    return `/frames/ezgif-frame-${index.toString().padStart(3, "0")}.png`;
  };

  useEffect(() => {
    // Preload images
    const loadedImages = [];
    let imagesToLoad = frameCount;

    const onLoad = () => {
      imagesToLoad--;
      if (imagesToLoad === 0) {
        setImages(loadedImages);
      }
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.onload = onLoad;
      img.onerror = onLoad; // Continue even if image fails
      img.src = currentFrame(i);
      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const render = () => {
      const currentFrameIndex = Math.min(
        Math.floor(frameDataRef.current.frame),
        frameCount - 1
      );

      const img = images[currentFrameIndex];
      if (img && img.complete && img.naturalWidth > 0) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw image to cover canvas
        const imgAspect = img.naturalWidth / img.naturalHeight;
        const canvasAspect = canvas.width / canvas.height;

        let drawWidth, drawHeight, drawX, drawY;

        if (imgAspect > canvasAspect) {
          drawHeight = canvas.height;
          drawWidth = drawHeight * imgAspect;
          drawX = (canvas.width - drawWidth) / 2;
          drawY = 0;
        } else {
          drawWidth = canvas.width;
          drawHeight = drawWidth / imgAspect;
          drawX = 0;
          drawY = (canvas.height - drawHeight) / 2;
        }

        context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      }
    };

    // Initial render
    render();

    // Setup ScrollTrigger animation
    const trigger = ScrollTrigger.create({
      trigger: '#product-viewer',
      start: 'top top',
      end: `+=${window.innerHeight * 3}`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        frameDataRef.current.frame = progress * (frameCount - 1);
        render();
      },
    });

    return () => {
      trigger.kill();
    };
  }, [images]);

  return (
    <canvas
      ref={canvasRef}
      width={1920}
      height={1080}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  );
};

export default FrameAnimation;
