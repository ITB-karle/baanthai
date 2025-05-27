<!-- components/AppLoading.vue -->
<template>
  <div class="elegant-loading-container">
    <!-- Subtle Background Pattern -->
    <div class="background-pattern"></div>
    
    <div class="loading-content">
      <!-- Logo Section -->
      <div class="logo-section">
        <div class="logo-container">
          <img 
            src="~/assets/images/Baan_Thai_Logo.webp" 
            alt="Baan Thai Logo" 
            class="main-logo"
            @error="onImageError"
          >
        </div>
        
        <div class="brand-divider"></div>
        <p class="brand-tagline">Authentic Thai Cuisine</p>
      </div>
      
      <!-- Elegant Loading Animation -->
      <div class="loading-animation">
        <div class="cooking-pot">
          <div class="pot-body"></div>
          <div class="pot-steam">
            <div class="steam-wisp" v-for="n in 3" :key="n" :style="{ animationDelay: (n * 0.4) + 's' }"></div>
          </div>
        </div>
      </div>
      
      <!-- Progress Section -->
      <div class="progress-section">
        <div class="progress-container">
          <div class="progress-track">
            <div class="progress-fill" :style="{ width: progress + '%' }"></div>
            <div class="progress-ornament" :style="{ left: progress + '%' }">✦</div>
          </div>
        </div>
        <p class="progress-percentage">{{ Math.round(progress) }}%</p>
      </div>
      
      <!-- Loading Message -->
      <div class="message-section">
        <p class="loading-message">{{ currentMessage }}</p>
      </div>
      
      <!-- Elegant Loading Dots -->
      <div class="loading-dots">
        <div class="dot" v-for="n in 3" :key="n" :style="{ animationDelay: (n * 0.5) + 's' }"></div>
      </div>
    </div>
    
    <!-- Corner Flourishes -->
    <div class="corner-flourish top-left"></div>
    <div class="corner-flourish top-right"></div>
    <div class="corner-flourish bottom-left"></div>
    <div class="corner-flourish bottom-right"></div>
  </div>
</template>

<script setup>
const progress = ref(0)
const currentMessage = ref('')

const elegantMessages = [
  'Preparing your dining experience...',
  'Selecting finest ingredients...',
  'Crafting authentic flavors...',
  'Almost ready to serve...',
  'Welcome to Baan Thai!'
]

let messageIndex = 0

// Handle image load error
const onImageError = (event) => {
  console.warn('Logo image failed to load:', event.target.src)
  // You could set a fallback here if needed
}

onMounted(() => {
  currentMessage.value = elegantMessages[0]
  
  // Smooth progress animation
  const duration = 3500
  const startTime = Date.now()
  
  const animate = () => {
    const elapsed = Date.now() - startTime
    const newProgress = Math.min((elapsed / duration) * 100, 100)
    progress.value = newProgress
    
    if (newProgress < 100) {
      requestAnimationFrame(animate)
    }
  }
  
  requestAnimationFrame(animate)
  
  // Message rotation
  const messageInterval = setInterval(() => {
    messageIndex = (messageIndex + 1) % elegantMessages.length
    currentMessage.value = elegantMessages[messageIndex]
  }, 700)
  
  onUnmounted(() => {
    clearInterval(messageInterval)
  })
})
</script>

<style scoped>
.elegant-loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8f6f0 0%, #fff 50%, #f5f3ed 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
}

.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(218, 165, 32, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(218, 165, 32, 0.03) 0%, transparent 50%);
  background-size: 600px 600px;
  animation: subtleMove 20s linear infinite;
}

.loading-content {
  text-align: center;
  max-width: 400px;
  padding: 40px;
  position: relative;
  z-index: 2;
}

.logo-section {
  margin-bottom: 50px;
}

.logo-container {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-logo {
  max-width: 280px;
  max-height: 200px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(218, 165, 32, 0.1));
  animation: logoGlow 3s ease-in-out infinite;
}

.brand-divider {
  width: 150px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #DAA520, transparent);
  margin: 25px auto;
}

.brand-tagline {
  color: #8B6914;
  font-size: 1.1rem;
  font-style: italic;
  letter-spacing: 1px;
  margin: 0;
}

.loading-animation {
  margin: 40px 0;
  display: flex;
  justify-content: center;
}

.cooking-pot {
  position: relative;
}

.pot-body {
  width: 50px;
  height: 35px;
  background: linear-gradient(145deg, #DAA520, #B8860B);
  border-radius: 0 0 25px 25px;
  position: relative;
  box-shadow: 0 4px 8px rgba(218, 165, 32, 0.2);
}

.pot-body::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  height: 6px;
  background: #DAA520;
  border-radius: 3px;
}

.pot-steam {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 30px;
}

.steam-wisp {
  position: absolute;
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, rgba(218, 165, 32, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  animation: gentleSteam 3s infinite;
}

.steam-wisp:nth-child(1) { left: 20px; }
.steam-wisp:nth-child(2) { left: 26px; }
.steam-wisp:nth-child(3) { left: 32px; }

.progress-section {
  margin: 30px 0;
}

.progress-container {
  margin-bottom: 15px;
}

.progress-track {
  width: 100%;
  height: 3px;
  background: rgba(218, 165, 32, 0.2);
  border-radius: 1.5px;
  position: relative;
  overflow: visible;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #DAA520, #FFD700);
  border-radius: 1.5px;
  transition: width 0.3s ease;
}

.progress-ornament {
  position: absolute;
  top: -6px;
  color: #DAA520;
  font-size: 12px;
  transform: translateX(-50%);
  transition: left 0.3s ease;
}

.progress-percentage {
  color: #DAA520;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
}

.message-section {
  margin: 30px 0;
}

.loading-message {
  color: #8B6914;
  font-size: 1rem;
  margin: 0;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
}

.loading-dots {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #DAA520;
  border-radius: 50%;
  animation: elegantBounce 1.5s infinite;
}

.corner-flourish {
  position: absolute;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, rgba(218, 165, 32, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.corner-flourish::before {
  content: '✦';
  position: absolute;
  color: rgba(218, 165, 32, 0.3);
  font-size: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: sparkle 4s infinite;
}

.top-left { top: 30px; left: 30px; }
.top-right { top: 30px; right: 30px; }
.bottom-left { bottom: 30px; left: 30px; }
.bottom-right { bottom: 30px; right: 30px; }

/* Animations */
@keyframes logoGlow {
  0%, 100% { 
    filter: drop-shadow(0 4px 8px rgba(218, 165, 32, 0.1)); 
  }
  50% { 
    filter: drop-shadow(0 4px 16px rgba(218, 165, 32, 0.3)); 
  }
}

@keyframes subtleMove {
  0% { background-position: 0 0, 300px 300px; }
  100% { background-position: 600px 600px, 900px 900px; }
}

@keyframes gentleSteam {
  0% { 
    transform: translateY(0) scale(0.8); 
    opacity: 0.6; 
  }
  50% { 
    transform: translateY(-15px) scale(1); 
    opacity: 0.3; 
  }
  100% { 
    transform: translateY(-30px) scale(1.2); 
    opacity: 0; 
  }
}

@keyframes elegantBounce {
  0%, 100% { 
    transform: scale(1); 
    opacity: 0.7; 
  }
  50% { 
    transform: scale(1.3); 
    opacity: 1; 
  }
}

@keyframes sparkle {
  0%, 100% { 
    opacity: 0.3; 
    transform: translate(-50%, -50%) scale(1); 
  }
  50% { 
    opacity: 0.8; 
    transform: translate(-50%, -50%) scale(1.2); 
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .loading-content {
    padding: 30px 20px;
    max-width: 320px;
  }
  
  .main-logo {
    max-width: 240px;
    max-height: 160px;
  }
  
  .corner-flourish {
    width: 30px;
    height: 30px;
  }
  
  .corner-flourish::before {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .loading-content {
    max-width: 280px;
    padding: 20px 15px;
  }
  
  .main-logo {
    max-width: 200px;
    max-height: 140px;
  }
  
  .brand-tagline {
    font-size: 1rem;
  }
}
</style>