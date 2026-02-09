class VocabGame {
    constructor() {
        // Initialize audio context lazily (will be created after user interaction)
        this.audioCtx = null;
        
        this.levels = [
            {
                name: "Fruits",
                items: [
                    { word: "apple", icon: "🍎" },
                    { word: "banana", icon: "🍌" },
                    { word: "orange", icon: "🍊" },
                    { word: "grape", icon: "🍇" },
                    { word: "strawberry", icon: "🍓" }
                ]
            },
            {
                name: "Food",
                items: [
                    { word: "bread", icon: "🍞" },
                    { word: "milk", icon: "🥛" },
                    { word: "egg", icon: "🥚" },
                    { word: "cake", icon: "🎂" },
                    { word: "cookie", icon: "🍪" }
                ]
            },
            {
                name: "Animals",
                items: [
                    { word: "cat", icon: "🐱" },
                    { word: "dog", icon: "🐶" },
                    { word: "bird", icon: "🐦" },
                    { word: "fish", icon: "🐟" },
                    { word: "duck", icon: "🦆" }
                ]
            },
            {
                name: "Colors",
                items: [
                    { word: "red", icon: "🔴" },
                    { word: "blue", icon: "🔵" },
                    { word: "green", icon: "🟢" },
                    { word: "yellow", icon: "🟡" },
                    { word: "purple", icon: "🟣" }
                ]
            },
            {
                name: "Body Parts",
                items: [
                    { word: "head", icon: "👤" },
                    { word: "hand", icon: "✋" },
                    { word: "foot", icon: "🦶" },
                    { word: "eye", icon: "👁️" },
                    { word: "mouth", icon: "👄" }
                ]
            },
            {
                name: "Home",
                items: [
                    { word: "bed", icon: "🛏️" },
                    { word: "chair", icon: "🪑" },
                    { word: "table", icon: "🍽️" },
                    { word: "door", icon: "🚪" },
                    { word: "window", icon: "🪟" }
                ]
            },
            {
                name: "Toys & Objects",
                items: [
                    { word: "ball", icon: "⚽" },
                    { word: "book", icon: "📚" },
                    { word: "car", icon: "🚗" },
                    { word: "phone", icon: "📱" },
                    { word: "shoe", icon: "👟" }
                ]
            },
            {
                name: "Nature",
                items: [
                    { word: "sun", icon: "☀️" },
                    { word: "moon", icon: "🌙" },
                    { word: "star", icon: "⭐" },
                    { word: "tree", icon: "🌳" },
                    { word: "flower", icon: "🌸" }
                ]
            },
            {
                name: "Actions",
                items: [
                    { word: "eat", icon: "🍽️" },
                    { word: "drink", icon: "🥤" },
                    { word: "sleep", icon: "😴" },
                    { word: "run", icon: "🏃" },
                    { word: "jump", icon: "⬆️" }
                ]
            },
            {
                name: "Family",
                items: [
                    { word: "mom", icon: "👩" },
                    { word: "dad", icon: "👨" },
                    { word: "baby", icon: "👶" },
                    { word: "grandma", icon: "👵" },
                    { word: "grandpa", icon: "👴" }
                ]
            },
            {
                name: "More Fruits",
                items: [
                    { word: "kiwi", icon: "🥝" },
                    { word: "watermelon", icon: "🍉" },
                    { word: "pineapple", icon: "🍍" },
                    { word: "cherry", icon: "🍒" },
                    { word: "peach", icon: "🍑" }
                ]
            },
            {
                name: "More Animals",
                items: [
                    { word: "lion", icon: "🦁" },
                    { word: "cow", icon: "🐄" },
                    { word: "horse", icon: "🐴" },
                    { word: "rabbit", icon: "🐰" },
                    { word: "elephant", icon: "🐘" }
                ]
            },
            {
                name: "Weather",
                items: [
                    { word: "rain", icon: "🌧️" },
                    { word: "snow", icon: "❄️" },
                    { word: "cloud", icon: "☁️" },
                    { word: "rainbow", icon: "🌈" },
                    { word: "storm", icon: "⛈️" }
                ]
            },
            {
                name: "Feelings",
                items: [
                    { word: "happy", icon: "😀" },
                    { word: "sad", icon: "😢" },
                    { word: "angry", icon: "😡" },
                    { word: "scared", icon: "😱" },
                    { word: "tired", icon: "😴" }
                ]
            },
            {
                name: "Clothes",
                items: [
                    { word: "hat", icon: "👒" },
                    { word: "shirt", icon: "👕" },
                    { word: "pants", icon: "👖" },
                    { word: "dress", icon: "👗" },
                    { word: "coat", icon: "🧥" }
                ]
            },
            {
                name: "Vehicles",
                items: [
                    { word: "bus", icon: "🚌" },
                    { word: "train", icon: "🚆" },
                    { word: "bike", icon: "🚲" },
                    { word: "plane", icon: "✈️" },
                    { word: "boat", icon: "🚤" }
                ]
            },
            {
                name: "Sea Animals",
                items: [
                    { word: "whale", icon: "🐳" },
                    { word: "dolphin", icon: "🐬" },
                    { word: "crab", icon: "🦀" },
                    { word: "octopus", icon: "🐙" },
                    { word: "turtle", icon: "🐢" }
                ]
            },
            {
                name: "More Food",
                items: [
                    { word: "pizza", icon: "🍕" },
                    { word: "cheese", icon: "🧀" },
                    { word: "ice cream", icon: "🍦" },
                    { word: "sandwich", icon: "🥪" },
                    { word: "soup", icon: "🍲" }
                ]
            }
        ];
        
        this.currentLevel = 0;
        this.currentItemIndex = 0;
        this.score = 0;
        this.streak = 0;
        this.answered = new Set();
        
        this.congratulations = [
            "Very good!",
            "Well done!",
            "Fantastic!",
            "Perfect!",
            "You are great!",
            "Amazing!",
            "Excellent!",
            "Super!",
            "Brilliant!",
            "Awesome!",
            "Great job!",
            "Wonderful!"
        ];

        // #region agent log
        if ('speechSynthesis' in window) {
            window.speechSynthesis.addEventListener('voiceschanged', () => {
                const voices = window.speechSynthesis.getVoices();
                fetch('http://127.0.0.1:7242/ingest/45e8356b-c730-4083-ac33-9fda3359f9fa', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        id: 'log_voices_changed',
                        runId: 'pre-fix',
                        hypothesisId: 'H4',
                        location: 'game.js:constructor',
                        message: 'voiceschanged event',
                        data: { count: voices.length },
                        timestamp: Date.now()
                    })
                }).catch(() => {});
            });
        }
        // #endregion agent log
        
        // Start keep-alive interval for speech synthesis
        // NOTE: Disabled for now because frequent dummy utterances can
        // cause real words to be interrupted on some Chrome setups.
        // if ('speechSynthesis' in window) {
        //     setInterval(() => this.keepSpeechAlive(), 5000);
        // }
        
        // Add global click handler to resume speech synthesis on any interaction
        document.addEventListener('click', () => {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.resume();
            }
        }, { once: false });
        
        this.init();
    }
    
    init() {
        this.hideOverlay('celebration');
        this.updateLevelBadge();
        this.updateProgressDots();
        this.updateStreak();
    }
    
    start() {
        // Reset indices for a fresh game
        this.currentLevel = 0;
        this.currentItemIndex = 0;
        this.answered.clear();

        // Shuffle levels so categories appear in a random order each game
        this.levels = this.shuffleArray(this.levels);
        // Shuffle items in each level for random word order on first play
        this.levels.forEach(level => {
            level.items = this.shuffleArray(level.items);
        });

        // Make sure the header reflects the (now shuffled) first level
        this.updateLevelBadge();
        this.updateProgressDots();
        this.hideOverlay('start-overlay');
        this.loadLevel();
    }
    
    getAudioContext() {
        if (!this.audioCtx) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
        return this.audioCtx;
    }

    // Keep speech synthesis alive (Chrome stops it after ~15 seconds of inactivity)
    keepSpeechAlive() {
        if (!('speechSynthesis' in window)) return;
        
        // Send a silent utterance periodically to keep the system awake,
        // but only when nothing else is speaking or queued, and DO NOT cancel afterwards.
        const synth = window.speechSynthesis;
        if (!synth.speaking && !synth.pending) {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/45e8356b-c730-4083-ac33-9fda3359f9fa', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: 'log_keepAlive',
                    runId: 'pre-fix',
                    hypothesisId: 'H2',
                    location: 'game.js:keepSpeechAlive',
                    message: 'keepSpeechAlive firing',
                    data: {
                        speaking: synth.speaking,
                        pending: synth.pending
                    },
                    timestamp: Date.now()
                })
            }).catch(() => {});
            // #endregion agent log

            const dummy = new SpeechSynthesisUtterance(' ');
            dummy.volume = 0;
            dummy.rate = 1;
            dummy.pitch = 1;
            synth.speak(dummy);
        }
    }
    
    restart() {
        this.currentLevel = 0;
        this.currentItemIndex = 0;
        this.score = 0;
        this.streak = 0;
        this.answered.clear();
        // Shuffle levels so categories appear in a random order on restart
        this.levels = this.shuffleArray(this.levels);
        // Shuffle items in each level for random word order
        this.levels.forEach(level => {
            level.items = this.shuffleArray(level.items);
        });
        this.init();
        this.loadLevel();
    }
    
    loadLevel() {
        const level = this.levels[this.currentLevel];
        if (!level) return;
        
        this.currentItemIndex = 0;
        this.answered.clear();
        this.updateProgressDots();
        this.showItem();
    }
    
    showItem() {
        const level = this.levels[this.currentLevel];
        const container = document.getElementById('cards-container');
        
        if (this.currentItemIndex >= level.items.length) {
            this.showCelebration();
            return;
        }
        
        const currentItem = level.items[this.currentItemIndex];

        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/45e8356b-c730-4083-ac33-9fda3359f9fa', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: 'log_showItem',
                runId: 'pre-fix',
                hypothesisId: 'H1',
                location: 'game.js:showItem',
                message: 'showItem current word',
                data: {
                    levelName: level.name,
                    currentIndex: this.currentItemIndex,
                    word: currentItem.word
                },
                timestamp: Date.now()
            })
        }).catch(() => {});
        // #endregion agent log
        
        // Get 3 wrong options from other items in the level
        const otherItems = level.items.filter((_, idx) => idx !== this.currentItemIndex);
        const wrongOptions = this.shuffleArray(otherItems).slice(0, 3);
        
        // Combine correct and wrong options, then shuffle
        const options = this.shuffleArray([currentItem, ...wrongOptions]);
        
        container.innerHTML = '';
        
        // Visual prompt only - no text for young kids
        
        // Create icon cards
        options.forEach(item => {
            const card = document.createElement('button');
            card.className = 'card icon-card';
            card.innerHTML = `<span class="icon">${item.icon}</span>`;
            card.onclick = () => this.checkAnswer(item, currentItem, card);
            container.appendChild(card);
        });
        
        // Speak the word
        this.speak(currentItem.word);
    }
    
    checkAnswer(selected, correct, cardElement) {
        if (this.answered.has(this.currentItemIndex)) return;
        
        const isCorrect = selected.word === correct.word;
        
        if (isCorrect) {
            cardElement.classList.add('correct');
            this.answered.add(this.currentItemIndex);
            this.score++;
            this.streak++;
            this.updateProgressDots();
            this.updateStreak();
            
            // Visual and audio effects for correct answer
            this.playSuccessSound();
            this.createBurstParticles(cardElement);
            this.mascotCelebrate();
            this.screenFlash();
            this.setMascotHappy();
            
            setTimeout(() => {
                this.currentItemIndex++;
                this.showItem();
            }, 1500);
        } else {
            this.streak = 0;
            this.updateStreak();
            cardElement.classList.add('wrong');
            this.playErrorSound();
            this.shakeMascot();
            this.setMascotSad();
            
            setTimeout(() => {
                cardElement.classList.remove('wrong');
            }, 500);
        }
    }
    
    nextWord() {
        const level = this.levels[this.currentLevel];
        if (this.currentItemIndex < level.items.length - 1) {
            this.currentItemIndex++;
            this.showItem();
        }
    }
    
    nextLevel() {
        this.currentLevel++;
        
        if (this.currentLevel >= this.levels.length) {
            this.currentLevel = 0;
        }
        
        this.hideOverlay('celebration');
        this.updateLevelBadge();
        this.loadLevel();
    }
    
    speak(text) {
        this.speakWithBrowserTTS(text);
    }

    speakWithBrowserTTS(text) {
        if (!('speechSynthesis' in window)) {
            console.warn('Speech synthesis not supported');
            return;
        }

        const synth = window.speechSynthesis;

        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/45e8356b-c730-4083-ac33-9fda3359f9fa', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: 'log_speak_call',
                runId: 'pre-fix',
                hypothesisId: 'H1',
                location: 'game.js:speakWithBrowserTTS',
                message: 'speakWithBrowserTTS called',
                data: {
                    text,
                    speakingBefore: synth.speaking,
                    pendingBefore: synth.pending
                },
                timestamp: Date.now()
            })
        }).catch(() => {});
        // #endregion agent log

        // Just resume before speaking our word (do not cancel,
        // since that can cause "interrupted" errors on some setups)
        synth.resume();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.85;
        utterance.pitch = 1.0;
        utterance.volume = 1;
        utterance.lang = 'en-US';

        // Log when utterance actually starts, ends, or errors (to see if Chrome speaks)
        utterance.onstart = () => {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/45e8356b-c730-4083-ac33-9fda3359f9fa', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: 'log_utterance_start',
                    runId: 'pre-fix',
                    hypothesisId: 'H3',
                    location: 'game.js:speakWithBrowserTTS',
                    message: 'utterance started',
                    data: { text },
                    timestamp: Date.now()
                })
            }).catch(() => {});
            // #endregion agent log
        };

        utterance.onend = () => {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/45e8356b-c730-4083-ac33-9fda3359f9fa', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: 'log_utterance_end',
                    runId: 'pre-fix',
                    hypothesisId: 'H3',
                    location: 'game.js:speakWithBrowserTTS',
                    message: 'utterance ended',
                    data: { text },
                    timestamp: Date.now()
                })
            }).catch(() => {});
            // #endregion agent log
        };

        utterance.onerror = (event) => {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/45e8356b-c730-4083-ac33-9fda3359f9fa', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: 'log_utterance_error',
                    runId: 'pre-fix',
                    hypothesisId: 'H4',
                    location: 'game.js:speakWithBrowserTTS',
                    message: 'utterance error',
                    data: { text, error: event.error },
                    timestamp: Date.now()
                })
            }).catch(() => {});
            // #endregion agent log
        };

        // Try to get an English voice
        let voices = synth.getVoices();

        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/45e8356b-c730-4083-ac33-9fda3359f9fa', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: 'log_voices_snapshot',
                runId: 'pre-fix',
                hypothesisId: 'H4',
                location: 'game.js:speakWithBrowserTTS',
                message: 'voices snapshot',
                data: {
                    count: voices.length
                },
                timestamp: Date.now()
            })
        }).catch(() => {});
        // #endregion agent log
        const voice = voices.find(v => v.lang === 'en-US') 
            || voices.find(v => v.lang && v.lang.startsWith('en'))
            || voices[0];
        if (voice) {
            utterance.voice = voice;
        }

        // Speak with a tiny delay to ensure cancel() has completed
        setTimeout(() => {
            synth.speak(utterance);
        }, 50);
    }
    
    repeatCurrentWord() {
        const level = this.levels[this.currentLevel];
        const currentItem = level.items[this.currentItemIndex];
        if (currentItem) {
            this.speak(currentItem.word);
        }
    }
    
    // Audio effects using Web Audio API
    playSuccessSound() {
        const audioCtx = this.getAudioContext();
        
        // Play a happy major chord arpeggio
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        const now = audioCtx.currentTime;
        
        notes.forEach((freq, index) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.frequency.value = freq;
            osc.type = 'sine';
            
            const startTime = now + index * 0.08;
            gain.gain.setValueAtTime(0, startTime);
            gain.gain.linearRampToValueAtTime(0.15, startTime + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);
            
            osc.start(startTime);
            osc.stop(startTime + 0.3);
        });
    }
    
    playErrorSound() {
        const audioCtx = this.getAudioContext();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.frequency.setValueAtTime(200, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(150, audioCtx.currentTime + 0.2);
        osc.type = 'sawtooth';
        
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.2);
    }
    
    playLevelCompleteSound() {
        const audioCtx = this.getAudioContext();
        
        // Play a celebratory fanfare
        const melody = [
            { freq: 523.25, duration: 0.15 }, // C5
            { freq: 523.25, duration: 0.15 }, // C5
            { freq: 523.25, duration: 0.15 }, // C5
            { freq: 659.25, duration: 0.4 },  // E5
            { freq: 783.99, duration: 0.15 }, // G5
            { freq: 783.99, duration: 0.15 }, // G5
            { freq: 783.99, duration: 0.15 }, // G5
            { freq: 880.00, duration: 0.4 },  // A5
            { freq: 783.99, duration: 0.2 },  // G5
            { freq: 659.25, duration: 0.2 },  // E5
            { freq: 523.25, duration: 0.6 },  // C5
        ];
        
        let currentTime = audioCtx.currentTime;
        
        melody.forEach(note => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.frequency.value = note.freq;
            osc.type = 'triangle';
            
            gain.gain.setValueAtTime(0, currentTime);
            gain.gain.linearRampToValueAtTime(0.2, currentTime + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, currentTime + note.duration - 0.05);
            
            osc.start(currentTime);
            osc.stop(currentTime + note.duration);
            
            currentTime += note.duration;
        });
    }
    
    // Visual effects
    createBurstParticles(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const colors = ['#ff9ff3', '#f368e0', '#ff6b9d', '#ffb3d9', '#ffc0e7', '#ffd6e8', '#ffeef7', '#ffb3ba'];
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'burst-particle';
            
            const angle = (Math.PI * 2 * i) / 20;
            const distance = 60 + Math.random() * 40;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            particle.style.cssText = `
                position: fixed;
                left: ${centerX}px;
                top: ${centerY}px;
                width: ${8 + Math.random() * 8}px;
                height: ${8 + Math.random() * 8}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
            `;
            
            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);
            
            document.body.appendChild(particle);
            
            // Trigger animation
            requestAnimationFrame(() => {
                particle.style.animation = 'burst-fly 0.8s ease-out forwards';
            });
            
            setTimeout(() => particle.remove(), 800);
        }
    }
    
    mascotCelebrate() {
        const mascot = document.getElementById('mascot');
        mascot.style.animation = 'mascot-party 0.5s ease 3';
        
        // Create mini stars around mascot
        const container = document.getElementById('mascot-container');
        for (let i = 0; i < 6; i++) {
            const star = document.createElement('div');
            star.className = 'mini-star';
            star.textContent = '⭐';
            star.style.cssText = `
                position: absolute;
                font-size: 20px;
                opacity: 0;
                pointer-events: none;
            `;
            star.style.left = `${30 + Math.random() * 40}%`;
            star.style.top = `${20 + Math.random() * 60}%`;
            star.style.animationDelay = `${i * 0.1}s`;
            container.appendChild(star);
            
            setTimeout(() => {
                star.style.animation = 'star-pop 0.6s ease forwards';
            }, 10);
            
            setTimeout(() => star.remove(), 600);
        }
        
        setTimeout(() => {
            mascot.style.animation = 'bounce 2s infinite';
        }, 1500);
    }
    
    screenFlash() {
        const flashContainer = document.getElementById('flash-container');
        const flash = document.createElement('div');
        flash.className = 'flash-effect';
        flashContainer.appendChild(flash);
        
        setTimeout(() => flash.remove(), 500);
    }
    
    updateLevelBadge() {
        const badge = document.getElementById('level-badge');
        const level = this.levels[this.currentLevel];
        badge.textContent = `${level.name}`;
    }
    
    updateProgressDots() {
        const dots = document.querySelectorAll('.dot');
        const level = this.levels[this.currentLevel];
        
        dots.forEach((dot, index) => {
            dot.classList.remove('active', 'correct');
            
            if (index < level.items.length) {
                if (index < this.currentItemIndex) {
                    dot.classList.add('correct');
                } else if (index === this.currentItemIndex) {
                    dot.classList.add('active');
                }
            }
        });
    }
    
    updateStreak() {
        const streakCounter = document.getElementById('streak-counter');
        if (streakCounter) {
            streakCounter.textContent = `🔥 Streak: ${this.streak}`;
        }
    }
    
    showCelebration() {
        const celebration = document.getElementById('celebration');
        const celebrationText = celebration.querySelector('.celebration-text');
        
        // Pick a random congratulatory phrase
        const randomPhrase = this.congratulations[Math.floor(Math.random() * this.congratulations.length)];
        
        // Update the celebration text with emoji
        celebrationText.innerHTML = `🎉 ${randomPhrase} 🎉`;
        
        celebration.classList.remove('hidden');
        
        this.playLevelCompleteSound();
        this.createConfetti();
        this.createFireworks();
        this.speak(randomPhrase);
    }
    
    hideOverlay(id) {
        const overlay = document.getElementById(id);
        if (overlay) {
            overlay.classList.add('hidden');
        }
    }
    
    shakeMascot() {
        const mascot = document.getElementById('mascot');
        mascot.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            mascot.style.animation = 'bounce 2s infinite';
        }, 500);
    }
    
    setMascotHappy() {
        const mascot = document.getElementById('mascot');
        const mouth = document.getElementById('mascot-mouth');
        const tongue = document.getElementById('mascot-tongue');
        const tearLeft = document.getElementById('tear-left');
        const tearRight = document.getElementById('tear-right');
        
        // Add happy class for eye shape
        mascot.classList.add('happy');
        mascot.classList.remove('sad');
        
        // Show smile with tongue
        mouth.setAttribute('d', 'M 52 78 Q 60 88 68 78');
        tongue.style.opacity = '1';
        
        // Hide tears
        tearLeft.style.opacity = '0';
        tearRight.style.opacity = '0';
        
        // Reset after a while
        setTimeout(() => {
            this.resetMascotExpression();
        }, 1500);
    }
    
    setMascotSad() {
        const mascot = document.getElementById('mascot');
        const mouth = document.getElementById('mascot-mouth');
        const tongue = document.getElementById('mascot-tongue');
        const tearLeft = document.getElementById('tear-left');
        const tearRight = document.getElementById('tear-right');
        
        // Add sad class for eye shape
        mascot.classList.add('sad');
        mascot.classList.remove('happy');
        
        // Show frown
        mouth.setAttribute('d', 'M 52 85 Q 60 80 68 85');
        tongue.style.opacity = '0';
        
        // Show tears
        tearLeft.style.opacity = '1';
        tearRight.style.opacity = '1';
        
        // Reset after a while
        setTimeout(() => {
            this.resetMascotExpression();
        }, 1000);
    }
    
    resetMascotExpression() {
        const mascot = document.getElementById('mascot');
        const mouth = document.getElementById('mascot-mouth');
        const tongue = document.getElementById('mascot-tongue');
        const tearLeft = document.getElementById('tear-left');
        const tearRight = document.getElementById('tear-right');
        
        // Remove expression classes
        mascot.classList.remove('happy', 'sad');
        
        // Reset mouth to neutral smile
        mouth.setAttribute('d', 'M 52 78 Q 60 86 68 78');
        
        // Hide tongue and tears
        tongue.style.opacity = '0';
        tearLeft.style.opacity = '0';
        tearRight.style.opacity = '0';
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    createConfetti() {
        const colors = ['#ff9ff3', '#f368e0', '#ff6b9d', '#ffb3d9', '#ffc0e7', '#ffd6e8', '#ffeef7', '#ffb3ba', '#ff9aa2', '#ffb3d9'];
        const celebration = document.getElementById('celebration');
        
        for (let i = 0; i < 80; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: absolute;
                width: ${8 + Math.random() * 8}px;
                height: ${8 + Math.random() * 8}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: -20px;
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                animation: fall ${3 + Math.random() * 4}s linear forwards;
                animation-delay: ${Math.random() * 2}s;
                transform: rotate(${Math.random() * 360}deg);
            `;
            celebration.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 7000);
        }
    }
    
    createFireworks() {
        const celebration = document.getElementById('celebration');
        const colors = ['#ff9ff3', '#f368e0', '#ff6b9d', '#ffb3d9', '#ffc0e7', '#ffd6e8', '#ffeef7', '#ffb3ba'];
        
        // Create multiple firework bursts
        for (let fw = 0; fw < 5; fw++) {
            setTimeout(() => {
                const x = 20 + Math.random() * 60;
                const y = 20 + Math.random() * 40;
                
                for (let i = 0; i < 30; i++) {
                    const particle = document.createElement('div');
                    particle.style.cssText = `
                        position: absolute;
                        left: ${x}%;
                        top: ${y}%;
                        width: 6px;
                        height: 6px;
                        background: ${colors[Math.floor(Math.random() * colors.length)]};
                        border-radius: 50%;
                        pointer-events: none;
                    `;
                    
                    const angle = (Math.PI * 2 * i) / 30;
                    const distance = 80 + Math.random() * 60;
                    const tx = Math.cos(angle) * distance;
                    const ty = Math.sin(angle) * distance;
                    
                    particle.style.setProperty('--tx', `${tx}px`);
                    particle.style.setProperty('--ty', `${ty}px`);
                    
                    celebration.appendChild(particle);
                    
                    requestAnimationFrame(() => {
                        particle.style.animation = 'firework-burst 1s ease-out forwards';
                    });
                    
                    setTimeout(() => particle.remove(), 1000);
                }
            }, fw * 400);
        }
    }
}

// Initialize game
const game = new VocabGame();
