// Floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💕';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 7) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    document.getElementById('heartsContainer').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Create hearts periodically
setInterval(createHeart, 800);

// Screen navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

function showCake() {
    showScreen('cake');
}

// Cake and Candles
let candleCount = 0;
const maxCandles = 5;
const cake = document.getElementById('cake');

cake?.addEventListener('click', function(e) {
    if (candleCount < maxCandles) {
        addCandle();
    }
});

function addCandle() {
    if (candleCount >= maxCandles) return;

    const candlesContainer = document.getElementById('candlesContainer');
    const candle = document.createElement('div');
    candle.classList.add('candle');

    const flame = document.createElement('div');
    flame.classList.add('flame');
    candle.appendChild(flame);

    candlesContainer.appendChild(candle);
    candleCount++;

    // Update instruction text
    const instruction = document.getElementById('instruction');
    if (candleCount >= maxCandles) {
        instruction.innerHTML = '<p>Perfect! Now blow out the candles! 🎉</p>';
        // Show blow button
        document.getElementById('blowBtn').style.display = 'inline-block';
    } else {
        instruction.innerHTML = `<p>Keep clicking! Add ${maxCandles - candleCount} more candle${maxCandles - candleCount > 1 ? 's' : ''}! 🕯️</p>`;
    }
}

function blowCandles() {
    const flames = document.querySelectorAll('.flame');
    let delay = 0;

    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.classList.add('blown');
        }, delay);
        delay += 150;
    });

    // Show card after all candles are blown
    setTimeout(() => {
        showScreen('card');
    }, flames.length * 150 + 800);
}

// Card opening
function openCard() {
    const card = document.getElementById('birthdayCard');
    const tapHint = document.querySelector('.tap-hint');

    if (!card.classList.contains('open')) {
        card.classList.add('open');
        tapHint.style.display = 'none';

        // Remove click handler after opening
        card.style.cursor = 'default';
        setTimeout(() => {
            card.onclick = null;
        }, 1200);
    }
}

// Photo Gallery Modal
function openPhoto(photoNum) {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImage');
    modal.classList.add('active');
    modalImg.src = `images/${photoNum}.jpg`;
}

function closePhoto() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
}

// Close modal on outside click
document.getElementById('photoModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closePhoto();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePhoto();
    }
});

// Add some extra birthday magic
console.log('%c💕 Happy Birthday Hiro! 💕', 'font-size: 30px; color: #f093fb; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%cMade with love by Meghana ❤️', 'font-size: 16px; color: #667eea;');
