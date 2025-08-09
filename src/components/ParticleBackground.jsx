import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -20 },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: ["#7afcff", "#39FF14", "#ff8bd6"] },
          links: { enable: true, distance: 130, color: "#1de9b6", opacity: 0.08 },
          move: { enable: true, speed: 0.7, outModes: { default: "out" } },
          opacity: { value: 0.7 },
          size: { value: { min: 0.6, max: 2.4 } },
        },
      }}
    />
  );
}