import { NeatGradient } from "@firecms/neat";

  const config = {
    colors: [
      { color: '#DC9CFF', enabled: true },
      { color: '#4CB4BB', enabled: false },
      { color: '#AE94F7', enabled: true },
      { color: '#8B6AE6', enabled: false },
      { color: '#2E0EC7', enabled: false },
      { color: '#998AED', enabled: true },
    ],
    speed: 0,
    horizontalPressure: 3,
    verticalPressure: 7,
    waveFrequencyX: 2,
    waveFrequencyY: 3,
    waveAmplitude: 5,
    shadows: 2,
    highlights: 2,
    colorBrightness: 0.9,
    colorSaturation: 5,
    wireframe: false,
    colorBlending: 7,
    backgroundColor: '#003FFF',
    backgroundAlpha: 1,
    grainScale: 0,
    grainSparsity: 0,
    grainIntensity: 0,
    grainSpeed: 1,
    resolution: 1,
    yOffset: 7802,
    yOffsetWaveMultiplier: 4,
    yOffsetColorMultiplier: 4,
    yOffsetFlowMultiplier: 4,
    flowDistortionA: 3.7,
    flowDistortionB: 1.4,
    flowScale: 2.9,
    flowEase: 0.32,
    flowEnabled: true,
    enableProceduralTexture: false,
    textureVoidLikelihood: 0.27,
    textureVoidWidthMin: 60,
    textureVoidWidthMax: 420,
    textureBandDensity: 1.2,
    textureColorBlending: 0.06,
    textureSeed: 333,
    textureEase: 0.5,
    proceduralBackgroundColor: '#0E0707',
    textureShapeTriangles: 20,
    textureShapeCircles: 15,
    textureShapeBars: 15,
    textureShapeSquiggles: 10,
    domainWarpEnabled: false,
    domainWarpIntensity: 0,
    domainWarpScale: 3,
    vignetteIntensity: 0,
    vignetteRadius: 0.8,
    fresnelEnabled: false,
    fresnelPower: 2,
    fresnelIntensity: 0.5,
    fresnelColor: '#FFFFFF',
    iridescenceEnabled: false,
    iridescenceIntensity: 0.5,
    iridescenceSpeed: 1,
    bloomIntensity: 0,
    bloomThreshold: 0.7,
    chromaticAberration: 0,
  };

  const canvas = document.getElementById("gradient");
  if (canvas) {
    const gradient = new NeatGradient({
      ref: canvas,
      ...config
    });

    window.addEventListener("scroll", () => {
      if (gradient) {
        gradient.yOffset = window.scrollY;
      }
    });
  }