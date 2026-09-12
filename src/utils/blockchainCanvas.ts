interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

interface Connection {
  from: number;
  to: number;
  progress: number;
  speed: number;
  active: boolean;
  delay: number;
  color: string;
}

const COLORS = [
  (alpha: number) => `rgba(135, 206, 235, ${alpha})`,
  (alpha: number) => `rgba(79, 70, 229, ${alpha})`,
  (alpha: number) => `rgba(59, 130, 246, ${alpha})`,
  (alpha: number) => `rgba(16, 185, 129, ${alpha})`,
] as const;

const getRandomColor = (alpha = 1): string => {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)] ?? COLORS[0];
  return color(alpha);
};

export function initBlockchainCanvas(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return () => {};
  }

  let animationId = 0;
  let particles: Particle[] = [];
  let connections: Connection[] = [];

  const initCanvas = (): void => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const createParticles = (): void => {
    particles = [];
    connections = [];

    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 10 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: getRandomColor(0.5),
      });
    }

    for (let i = 0; i < particleCount - 1; i++) {
      connections.push({
        from: i,
        to: i + 1,
        progress: 0,
        speed: 0.005 + Math.random() * 0.01,
        active: false,
        delay: i * 100,
        color: getRandomColor(0.3),
      });
    }

    for (let i = 0; i < particleCount / 3; i++) {
      const from = Math.floor(Math.random() * particleCount);
      let to = Math.floor(Math.random() * particleCount);

      while (to === from) {
        to = Math.floor(Math.random() * particleCount);
      }

      connections.push({
        from,
        to,
        progress: 0,
        speed: 0.002 + Math.random() * 0.005,
        active: false,
        delay: (particleCount + i) * 100,
        color: getRandomColor(0.3),
      });
    }
  };

  const handleResize = (): void => {
    initCanvas();
    createParticles();
  };

  const animate = (): void => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX *= -1;
      }

      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY *= -1;
      }

      ctx.fillStyle = particle.color;
      ctx.fillRect(
        particle.x - particle.size / 2,
        particle.y - particle.size / 2,
        particle.size,
        particle.size,
      );
    });

    connections.forEach((connection) => {
      if (!connection.active && Date.now() > connection.delay) {
        connection.active = true;
      }

      if (connection.active) {
        const fromParticle = particles[connection.from];
        const toParticle = particles[connection.to];

        if (!fromParticle || !toParticle) return;

        connection.progress += connection.speed;
        if (connection.progress > 1) {
          connection.progress = 0;
        }

        const currentX = fromParticle.x + (toParticle.x - fromParticle.x) * connection.progress;
        const currentY = fromParticle.y + (toParticle.y - fromParticle.y) * connection.progress;

        ctx.beginPath();
        ctx.moveTo(fromParticle.x, fromParticle.y);
        ctx.lineTo(toParticle.x, toParticle.y);
        ctx.strokeStyle = connection.color;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
        ctx.fillStyle = connection.color;
        ctx.fill();
      }
    });

    animationId = requestAnimationFrame(animate);
  };

  initCanvas();
  createParticles();
  animate();

  window.addEventListener("resize", handleResize);

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener("resize", handleResize);
  };
}
