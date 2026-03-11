'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface GradientBlindsProps {
  className?: string;
  dpr?: number;
  paused?: boolean;
  gradientColors?: string[];
  angle?: number;
  noise?: number;
  blindCount?: number;
  blindMinWidth?: number;
  mouseDampening?: number;
  mirrorGradient?: boolean;
  spotlightRadius?: number;
  spotlightSoftness?: number;
  spotlightOpacity?: number;
  distortAmount?: number;
  shineDirection?: 'left' | 'right';
  mixBlendMode?: string;
}

const MAX_COLORS = 8;
const hexToRGB = (hex: string): [number, number, number] => {
  const c = hex.replace('#', '').padEnd(6, '0');
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  return [r, g, b];
};

const prepStops = (stops?: string[]) => {
  const base = (stops && stops.length ? stops : ['#FF9FFC', '#5227FF']).slice(0, MAX_COLORS);
  if (base.length === 1) base.push(base[0]);
  while (base.length < MAX_COLORS) base.push(base[base.length - 1]);
  const arr: [number, number, number][] = [];
  for (let i = 0; i < MAX_COLORS; i++) arr.push(hexToRGB(base[i]));
  const count = Math.max(2, Math.min(MAX_COLORS, stops?.length ?? 2));
  return { arr, count };
};

const GradientBlinds: React.FC<GradientBlindsProps> = ({
  className = '',
  dpr,
  paused = false,
  gradientColors,
  angle = 0,
  noise = 0.3,
  blindCount = 16,
  blindMinWidth = 60,
  mouseDampening = 0.15,
  mirrorGradient = false,
  spotlightRadius = 0.5,
  spotlightSoftness = 1,
  spotlightOpacity = 1,
  distortAmount = 0,
  shineDirection = 'left',
  mixBlendMode = 'lighten'
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animationId: number | null = null;
    let gl: WebGLRenderingContext | null = null;
    let program: WebGLProgram | null = null;

    const deviceDpr = dpr ?? (window.devicePixelRatio || 1);
    gl = canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false });
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    const vertexShaderSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      uniform vec3 iResolution;
      uniform vec2 iMouse;
      uniform float iTime;
      uniform float uAngle;
      uniform float uNoise;
      uniform float uBlindCount;
      uniform float uSpotlightRadius;
      uniform float uSpotlightSoftness;
      uniform float uSpotlightOpacity;
      uniform float uMirror;
      uniform float uDistort;
      uniform float uShineFlip;
      uniform vec3 uColor0, uColor1, uColor2, uColor3, uColor4, uColor5, uColor6, uColor7;
      uniform int uColorCount;
      varying vec2 vUv;

      float rand(vec2 co) {
        return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
      }

      vec2 rotate2D(vec2 p, float a) {
        float c = cos(a), s = sin(a);
        return mat2(c, -s, s, c) * p;
      }

      vec3 getGradientColor(float t) {
        float tt = clamp(t, 0.0, 1.0);
        int count = uColorCount;
        if (count < 2) count = 2;
        float scaled = tt * float(count - 1);
        float seg = floor(scaled);
        float f = fract(scaled);
        if (seg < 1.0) return mix(uColor0, uColor1, f);
        if (seg < 2.0 && count > 2) return mix(uColor1, uColor2, f);
        if (seg < 3.0 && count > 3) return mix(uColor2, uColor3, f);
        if (seg < 4.0 && count > 4) return mix(uColor3, uColor4, f);
        if (seg < 5.0 && count > 5) return mix(uColor4, uColor5, f);
        if (seg < 6.0 && count > 6) return mix(uColor5, uColor6, f);
        if (seg < 7.0 && count > 7) return mix(uColor6, uColor7, f);
        return uColor7;
      }

      void main() {
        vec2 uv0 = vUv;
        float aspect = iResolution.x / iResolution.y;
        vec2 p = uv0 * 2.0 - 1.0;
        p.x *= aspect;
        vec2 pr = rotate2D(p, uAngle);
        pr.x /= aspect;
        vec2 uv = pr * 0.5 + 0.5;

        vec2 uvMod = uv;
        if (uDistort > 0.0) {
          uvMod.x += sin(uvMod.y * 6.0) * 0.01 * uDistort;
          uvMod.y += cos(uvMod.x * 6.0) * 0.01 * uDistort;
        }
        
        float t = uvMod.x;
        if (uMirror > 0.5) {
          t = 1.0 - abs(1.0 - 2.0 * fract(t));
        }
        vec3 base = getGradientColor(t);

        vec2 offset = iMouse / iResolution.xy;
        float d = length(uv0 - offset);
        float r = max(uSpotlightRadius, 0.0001);
        float spot = (1.0 - 2.0 * pow(d / r, uSpotlightSoftness)) * uSpotlightOpacity;
        
        float stripe = fract(uvMod.x * max(uBlindCount, 1.0));
        if (uShineFlip > 0.5) stripe = 1.0 - stripe;

        vec3 col = vec3(spot) + base - vec3(stripe);
        col += (rand(gl_FragCoord.xy + iTime) - 0.5) * uNoise;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compileShader = (type: number, source: string): WebGLShader | null => {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error('Shader error:', gl!.getShaderInfoLog(shader));
        gl!.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program error:', gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const getUniform = (name: string) => gl!.getUniformLocation(program!, name);
    const uniforms = {
      iResolution: getUniform('iResolution'),
      iMouse: getUniform('iMouse'),
      iTime: getUniform('iTime'),
      uAngle: getUniform('uAngle'),
      uNoise: getUniform('uNoise'),
      uBlindCount: getUniform('uBlindCount'),
      uSpotlightRadius: getUniform('uSpotlightRadius'),
      uSpotlightSoftness: getUniform('uSpotlightSoftness'),
      uSpotlightOpacity: getUniform('uSpotlightOpacity'),
      uMirror: getUniform('uMirror'),
      uDistort: getUniform('uDistort'),
      uShineFlip: getUniform('uShineFlip'),
      uColorCount: getUniform('uColorCount'),
      uColor0: getUniform('uColor0'),
      uColor1: getUniform('uColor1'),
      uColor2: getUniform('uColor2'),
      uColor3: getUniform('uColor3'),
      uColor4: getUniform('uColor4'),
      uColor5: getUniform('uColor5'),
      uColor6: getUniform('uColor6'),
      uColor7: getUniform('uColor7'),
    };

    const { arr: colorArr, count: colorCount } = prepStops(gradientColors);
    gl.uniform1f(uniforms.uAngle, (angle * Math.PI) / 180);
    gl.uniform1f(uniforms.uNoise, noise);
    gl.uniform1f(uniforms.uBlindCount, Math.max(1, blindCount));
    gl.uniform1f(uniforms.uSpotlightRadius, spotlightRadius);
    gl.uniform1f(uniforms.uSpotlightSoftness, spotlightSoftness);
    gl.uniform1f(uniforms.uSpotlightOpacity, spotlightOpacity);
    gl.uniform1f(uniforms.uMirror, mirrorGradient ? 1 : 0);
    gl.uniform1f(uniforms.uDistort, distortAmount);
    gl.uniform1f(uniforms.uShineFlip, shineDirection === 'right' ? 1 : 0);
    gl.uniform1i(uniforms.uColorCount, colorCount);
    colorArr.forEach((c, i) => gl!.uniform3fv(uniforms[`uColor${i}` as keyof typeof uniforms], c));

    let mouseX = 0.5, mouseY = 0.5;
    let targetX = 0.5, targetY = 0.5;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * deviceDpr;
      canvas.height = rect.height * deviceDpr;
      gl!.viewport(0, 0, canvas.width, canvas.height);
      gl!.uniform3f(uniforms.iResolution, canvas.width, canvas.height, 1);
      
      if (blindMinWidth > 0) {
        const maxBlinds = Math.floor(rect.width / blindMinWidth);
        gl!.uniform1f(uniforms.uBlindCount, Math.min(blindCount, maxBlinds));
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width;
      targetY = 1 - (e.clientY - rect.top) / rect.height;
    };
    container.addEventListener('pointermove', onPointerMove);

    let lastTime = 0;
    const render = (time: number) => {
      if (paused) {
        animationId = requestAnimationFrame(render);
        return;
      }

      const dt = (time - lastTime) / 1000;
      lastTime = time;

      if (mouseDampening > 0) {
        const factor = Math.min(1, 1 - Math.exp(-dt / mouseDampening));
        mouseX += (targetX - mouseX) * factor;
        mouseY += (targetY - mouseY) * factor;
      } else {
        mouseX = targetX;
        mouseY = targetY;
      }

      gl!.uniform1f(uniforms.iTime, time * 0.001);
      gl!.uniform2f(uniforms.iMouse, mouseX * canvas.width, mouseY * canvas.height);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);

      animationId = requestAnimationFrame(render);
    };
    animationId = requestAnimationFrame(render);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      container.removeEventListener('pointermove', onPointerMove);
      ro.disconnect();
      if (gl && program) {
        gl.deleteProgram(program);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        gl.deleteBuffer(buffer);
      }
    };
  }, [isClient, dpr, paused, gradientColors, angle, noise, blindCount, blindMinWidth, mouseDampening, mirrorGradient, spotlightRadius, spotlightSoftness, spotlightOpacity, distortAmount, shineDirection]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ mixBlendMode: mixBlendMode as React.CSSProperties['mixBlendMode'] }}
    >
      {isClient && (
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
};

export default GradientBlinds;
