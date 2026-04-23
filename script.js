// ============================================
// PAMPERED NAILS BY HANI - SCRIPT.JS
// Gallery Lightbox, Sticky Button, & Interactivity
// ============================================

// Configuration
const CONFIG = {
    messengerPageId: 'https://www.messenger.com/t/61556642543798', // User must update this with their Facebook Page ID
    gallerySelectorDelay: 500, // Delay before initializing gallery in ms
};

// Gallery State
let currentImageIndex = 0;
let galleryImages = [];

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initStickyButton();
    initGallery();
    initMessengerLinks();
    initSmoothScroll();
});

// ============================================
// STICKY "BOOK NOW" BUTTON
// ============================================

function initStickyButton() {
    const stickyBtn = document.getElementById('stickyBtn');
    const hero = document.getElementById('hero');

    if (!stickyBtn || !hero) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hero is in view, hide sticky button
                stickyBtn.classList.remove('visible');
            } else {
                // Hero is out of view, show sticky button
                stickyBtn.classList.add('visible');
            }
        });
    }, observerOptions);

    observer.observe(hero);

    // Handle click on sticky button
    stickyBtn.addEventListener('click', function() {
        openMessenger();
    });
}

// ============================================
// GALLERY LIGHTBOX
// ============================================

function initGallery() {
    // Small delay to ensure DOM is fully rendered
    setTimeout(() => {
        const galleryCards = document.querySelectorAll('.gallery-card');
        
        if (galleryCards.length === 0) {
            console.warn('No gallery cards found');
            return;
        }

        galleryImages = Array.from(galleryCards).map(card => {
            const img = card.querySelector('.gallery-image');
            return {
                src: img.src,
                alt: img.alt,
            };
        });

        // Add click listeners to gallery cards
        galleryCards.forEach((card, index) => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                currentImageIndex = index;
                openLightbox(index);
            });

            // Add expand button click listener
            const expandBtn = card.querySelector('.gallery-expand');
            if (expandBtn) {
                expandBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    currentImageIndex = index;
                    openLightbox(index);
                });
            }
        });

        // Initialize lightbox close handlers
        initLightboxHandlers();
    }, CONFIG.gallerySelectorDelay);
}

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');

    if (!lightbox) return;

    currentImageIndex = Math.max(0, Math.min(index, galleryImages.length - 1));
    const image = galleryImages[currentImageIndex];

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = image.alt;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    openLightbox(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox(currentImageIndex);
}

function initLightboxHandlers() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxPrev = document.getElementById('lightboxPrev');

    if (!lightbox) return;

    // Close button
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    // Next button
    if (lightboxNext) {
        lightboxNext.addEventListener('click', nextImage);
    }

    // Previous button
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', prevImage);
    }

    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;

        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowRight':
                nextImage();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
        }
    });
}

// ============================================
// MESSENGER INTEGRATION
// ============================================

function initMessengerLinks() {
    const messengerLinks = document.querySelectorAll('[data-messenger-id="true"]');
    
    messengerLinks.forEach(link => {
        // Build Messenger URL
        const messengerUrl = `https://m.me/${CONFIG.messengerPageId}`;
        link.href = messengerUrl;
        
        // Add click tracking (optional - for future analytics)
        link.addEventListener('click', function(e) {
            trackMessengerClick(e.target.textContent || e.target.innerText);
        });
    });
}

function openMessenger() {
    const messengerUrl = `https://m.me/${CONFIG.messengerPageId}`;
    window.open(messengerUrl, '_blank', 'noopener,noreferrer');
}

function trackMessengerClick(source) {
    // Placeholder for analytics tracking
    // Example: send event to Google Analytics or custom analytics service
    console.log('Messenger link clicked from:', source);
    
    // Uncomment to send to Google Analytics (if GA is configured)
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'messenger_click', {
    //         'source': source,
    //         'timestamp': new Date().toISOString()
    //     });
    // }
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#" or if target doesn't exist
            if (href === '#' || !document.querySelector(href)) return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// PERFORMANCE & ACCESSIBILITY ENHANCEMENTS
// ============================================

// Lazy loading for images (if browser supports it)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px',
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get Messenger URL
 * @returns {string} Fully formatted Messenger URL
 */
function getMessengerUrl() {
    return `https://m.me/${CONFIG.messengerPageId}`;
}

/**
 * Update Messenger Page ID (call this if user wants to change it dynamically)
 * @param {string} pageId - Facebook Page ID
 */
function updateMessengerPageId(pageId) {
    CONFIG.messengerPageId = pageId;
    initMessengerLinks(); // Re-initialize links with new ID
}

/**
 * Log page performance metrics (for debugging)
 */
function logPerformanceMetrics() {
    if (!window.performance) return;
    
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    
    console.log('Page Performance Metrics:');
    console.log('Total Load Time:', pageLoadTime + 'ms');
    console.log('DOM Interactive:', perfData.domInteractive - perfData.navigationStart + 'ms');
    console.log('Time to First Paint:', (perfData.responseEnd - perfData.navigationStart) + 'ms');
}

// Log performance on page load
if (document.readyState === 'complete') {
    logPerformanceMetrics();
} else {
    window.addEventListener('load', logPerformanceMetrics);
}

// ============================================
// ERROR HANDLING
// ============================================

// Global error handler for debugging
window.addEventListener('error', function(event) {
    console.error('Global error:', event.error);
    // In production, you might send this to an error reporting service
});

// ============================================
// EXPORT FOR TESTING/EXTERNAL USE
// ============================================

// Make functions available globally if needed for testing
window.PamperedNails = {
    openMessenger,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
    updateMessengerPageId,
    getMessengerUrl,
    CONFIG,
};

console.log('Pampered Nails by Hani - Site initialized successfully');
console.log('Configure your Messenger Page ID to enable booking:', 'window.PamperedNails.updateMessengerPageId("YOUR_PAGE_ID")');
