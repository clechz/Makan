import { useMemo } from 'react';
import './NarrativeText.css';

const NarrativeText = ({ scrollProgress }) => {
  // Define text stages with progress ranges
  const stages = [
    {
      start: 0.05,
      end: 0.25,
      lines: ['From orbit', 'to insight']
    },
    {
      start: 0.30,
      end: 0.60,
      lines: ['Every landscape.', 'Every city.', 'Every signal of change.']
    },
    {
      start: 0.65,
      end: 0.77,
      lines: ['Zooming into', 'New York']
    },
    {
      start: 0.80,
      end: 0.92,
      lines: ['Every city holds', 'hidden patterns.']
    },
    {
      start: 0.93,
      end: 0.98,
      lines: ['Makan turns imagery', 'into intelligence.']
    },
    {
      start: 0.98,
      end: 1.0,
      lines: ['Query the world.']
    }
  ];

  // Calculate which stage is active and its opacity
  const currentStage = useMemo(() => {
    for (let i = 0; i < stages.length; i++) {
      const stage = stages[i];
      if (scrollProgress >= stage.start && scrollProgress <= stage.end) {
        const fadeInEnd = stage.start + (stage.end - stage.start) * 0.15;
        const fadeOutStart = stage.start + (stage.end - stage.start) * 0.85;

        let opacity = 1;
        if (scrollProgress < fadeInEnd) {
          opacity = (scrollProgress - stage.start) / (fadeInEnd - stage.start);
        } else if (scrollProgress > fadeOutStart) {
          opacity = 1 - (scrollProgress - fadeOutStart) / (stage.end - fadeOutStart);
        }

        return { ...stage, opacity, index: i };
      }
    }
    return null;
  }, [scrollProgress]);

  if (!currentStage) return null;

  return (
    <div
      className="narrative-text-container"
      style={{ opacity: currentStage.opacity }}
    >
      <div className="narrative-text">
        {currentStage.lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default NarrativeText;
