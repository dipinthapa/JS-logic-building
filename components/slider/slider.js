class Slider {
            constructor(container) {
                this.container = container;
                this.track = container.querySelector('.slider-track');
                this.slides = container.querySelectorAll('.slide');
                this.prevButton = container.querySelector('.prev');
                this.nextButton = container.querySelector('.next');
                this.dotsContainer = container.querySelector('.slider-dots');
                this.pauseButton = container.querySelector('.pause');
                
                this.currentIndex = 0;
                this.isAutoPlaying = true;
                this.autoPlayInterval = null;
                
                this.init();
            }
            
            init() {
                this.createDots();
                this.attachEventListeners();
                this.updateSlider();
                this.startAutoPlay();
            }
            
            createDots() {
                this.slides.forEach((_, index) => {
                    const dot = document.createElement('button');
                    dot.classList.add('dot');
                    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
                    dot.addEventListener('click', () => this.goToSlide(index));
                    this.dotsContainer.appendChild(dot);
                });
                this.dots = this.dotsContainer.querySelectorAll('.dot');
            }
            
            attachEventListeners() {
                this.prevButton.addEventListener('click', () => this.prevSlide());
                this.nextButton.addEventListener('click', () => this.nextSlide());
                this.pauseButton.addEventListener('click', () => this.toggleAutoPlay());
                
                // Touch support for mobile
                let touchStartX = 0;
                let touchEndX = 0;
                
                this.track.addEventListener('touchstart', (e) => {
                    touchStartX = e.changedTouches[0].screenX;
                }, { passive: true });
                
                this.track.addEventListener('touchend', (e) => {
                    touchEndX = e.changedTouches[0].screenX;
                    this.handleSwipe(touchStartX, touchEndX);
                }, { passive: true });
                
                // Keyboard navigation
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowLeft') this.prevSlide();
                    if (e.key === 'ArrowRight') this.nextSlide();
                });
            }
            
            handleSwipe(startX, endX) {
                const swipeThreshold = 50;
                const diff = startX - endX;
                
                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        this.nextSlide();
                    } else {
                        this.prevSlide();
                    }
                }
            }
            
            updateSlider() {
                const offset = -this.currentIndex * 100;
                this.track.style.transform = `translateX(${offset}%)`;
                
                // Update dots
                this.dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === this.currentIndex);
                });
            }
            
            nextSlide() {
                this.currentIndex = (this.currentIndex + 1) % this.slides.length;
                this.updateSlider();
                this.resetAutoPlay();
            }
            
            prevSlide() {
                this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
                this.updateSlider();
                this.resetAutoPlay();
            }
            
            goToSlide(index) {
                this.currentIndex = index;
                this.updateSlider();
                this.resetAutoPlay();
            }
            
            startAutoPlay() {
                if (this.isAutoPlaying) {
                    this.autoPlayInterval = setInterval(() => {
                        this.nextSlide();
                    }, 3000);
                }
            }
            
            stopAutoPlay() {
                if (this.autoPlayInterval) {
                    clearInterval(this.autoPlayInterval);
                    this.autoPlayInterval = null;
                }
            }
            
            resetAutoPlay() {
                this.stopAutoPlay();
                if (this.isAutoPlaying) {
                    this.startAutoPlay();
                }
            }
            
            toggleAutoPlay() {
                this.isAutoPlaying = !this.isAutoPlaying;
                
                if (this.isAutoPlaying) {
                    this.startAutoPlay();
                    this.pauseButton.textContent = 'Pause Auto-play';
                    this.pauseButton.classList.remove('pause');
                } else {
                    this.stopAutoPlay();
                    this.pauseButton.textContent = 'Resume Auto-play';
                    this.pauseButton.classList.add('pause');
                }
            }
        }
        
        // Initialize the slider
        const slider = new Slider(document.querySelector('.slider-container'));