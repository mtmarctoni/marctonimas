<template>
  <canvas ref="canvas" class="absolute inset-0 w-full h-full z-0"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref(null);
let ctx;
let animationId;
let particles = [];
let connections = [];

onMounted(() => {
  if (!canvas.value) return;

  ctx = canvas.value.getContext("2d");
  initCanvas();
  createParticles();
  animate();

  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  cancelAnimationFrame(animationId);
});

const initCanvas = () => {
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
};

const handleResize = () => {
  initCanvas();
  createParticles();
};

const createParticles = () => {
  particles = [];
  connections = [];

  // Create particles
  const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.value.width,
      y: Math.random() * canvas.value.height,
      size: Math.random() * 10 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: getRandomColor(0.5),
    });
  }

  // Create connections (simulating blockchain)
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

  // Add some random connections
  for (let i = 0; i < particleCount / 3; i++) {
    const from = Math.floor(Math.random() * particleCount);
    let to = Math.floor(Math.random() * particleCount);

    // Make sure we don't connect to self
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

const getRandomColor = (alpha = 1) => {
  const colors = [
    `rgba(147, 51, 234, ${alpha})`, // Purple
    `rgba(79, 70, 229, ${alpha})`, // Indigo
    `rgba(59, 130, 246, ${alpha})`, // Blue
    `rgba(236, 72, 153, ${alpha})`, // Pink
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

  // Update and draw particles
  particles.forEach((particle) => {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    // Bounce off edges
    if (particle.x < 0 || particle.x > canvas.value.width) {
      particle.speedX *= -1;
    }

    if (particle.y < 0 || particle.y > canvas.value.height) {
      particle.speedY *= -1;
    }

    // Draw particle
    ctx.beginPath();
    // ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2); // Original circle drawing
    ctx.fillRect(
      particle.x - particle.size / 2,
      particle.y - particle.size / 2,
      particle.size,
      particle.size,
    ); // New cube drawing
    ctx.fillStyle = particle.color;
    ctx.fill();
  });

  // Update and draw connections
  connections.forEach((connection) => {
    const now = Date.now();

    // Check if connection should be active based on delay
    if (!connection.active && now > connection.delay) {
      connection.active = true;
    }

    if (connection.active) {
      const fromParticle = particles[connection.from];
      const toParticle = particles[connection.to];

      // Update progress
      connection.progress += connection.speed;
      if (connection.progress > 1) {
        connection.progress = 0;
      }

      // Calculate current position
      const currentX =
        fromParticle.x + (toParticle.x - fromParticle.x) * connection.progress;
      const currentY =
        fromParticle.y + (toParticle.y - fromParticle.y) * connection.progress;

      // Draw line
      ctx.beginPath();
      ctx.moveTo(fromParticle.x, fromParticle.y);
      ctx.lineTo(toParticle.x, toParticle.y);
      ctx.strokeStyle = connection.color;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Draw moving data packet
      ctx.beginPath();
      ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
      ctx.fillStyle = connection.color;
      ctx.fill();
    }
  });

  animationId = requestAnimationFrame(animate);
};
</script>
