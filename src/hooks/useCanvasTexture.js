import { useEffect, useRef, useState } from 'react';
import { CanvasTexture, SRGBColorSpace } from 'three';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useCanvasTexture = () => {
  const canvasRef = useRef(null);
  const textureRef = useRef(null);
  const [images, setImages] = useState([]);
  const frameDataRef = useRef({ frame: 0 });

  const frameCount = 161;
  const currentFrame = (index) => {
    return `/frames/ezgif-frame-${index.toString().padStart(3, "0")}.png`;
  };

  // Initialize canvas and texture once
  useEffect(() => {
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.width = 1920;
    canvas.height = 1080;
    canvasRef.current = canvas;

    // Fill with initial color
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ff0000'; // Red to make it visible
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Create texture from canvas
    const canvasTexture = new CanvasTexture(canvas);
    canvasTexture.colorSpace = SRGBColorSpace;
    canvasTexture.needsUpdate = true;
    textureRef.current = canvasTexture;

    console.log('Texture created:', canvasTexture);
  }, []);

  useEffect(() => {
    // Preload images
    const loadedImages = [];
    let imagesToLoad = frameCount;

    const onLoad = () => {
      imagesToLoad--;
      if (imagesToLoad === 0) {
        console.log('All frames loaded:', loadedImages.length);
        setImages(loadedImages);
      }
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.onload = onLoad;
      img.onerror = (e) => {
        console.error('Failed to load frame:', i, currentFrame(i));
        onLoad();
      };
      img.src = currentFrame(i);
      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current || !textureRef.current) {
      console.log('useEffect skipped - images:', images.length, 'canvas:', !!canvasRef.current, 'texture:', !!textureRef.current);
      return;
    }

    console.log('Setting up frame animation with', images.length, 'frames');

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const texture = textureRef.current;

    const render = () => {
      const currentFrameIndex = Math.min(
        Math.floor(frameDataRef.current.frame),
        frameCount - 1
      );

      const img = images[currentFrameIndex];
      if (img && img.complete && img.naturalWidth > 0) {
        context.clearRect(0, 0, canvas.width, canvas.height);

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
        texture.needsUpdate = true;
        console.log('Rendered frame:', currentFrameIndex);
      }
    };

    render();

    const trigger = ScrollTrigger.create({
      trigger: '#product-viewer',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
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

  return textureRef.current;
};
