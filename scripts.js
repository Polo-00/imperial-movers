// =====================================================
// IMPERIAL MOVERS - JAVASCRIPT FUNCTIONALITY
// ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    initMobileMenu();
    
    // Contact Form Handling
    initContactForm();
    
    // Active Navigation Link
    setActiveNavLink();
    
    // Initialize Animations
    initScrollAnimations();
    
    // Parallax Effects
    initParallax();
    
    // Hero Animation
    initHeroAnimation();
});

// =====================================================
// MOBILE MENU TOGGLE
// =====================================================

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!menuToggle) return;
    
    // Toggle menu on button click
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navMenu.contains(event.target) || menuToggle.contains(event.target);
        
        if (!isClickInside) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// =====================================================
// CONTACT FORM HANDLING
// =====================================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (!validateContactForm(data)) {
            showFormMessage('Please fill in all required fields correctly.', 'error');
            return;
        }
        
        // Simulate form submission (in real application, this would send to a server)
        submitContactForm(data);
    });
}

function validateContactForm(data) {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return false;
    }
    
    // Validate phone format (basic validation)
    const phoneRegex = /^[\d\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(data.phone)) {
        return false;
    }
    
    // Validate date is selected
    if (!data.moveDate) {
        return false;
    }
    
    // Validate message is not empty
    if (!data.message || data.message.trim().length === 0) {
        return false;
    }
    
    return true;
}

function submitContactForm(data) {
    // Show loading state
    const submitButton = document.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call delay
    setTimeout(function() {
        // In a real application, you would send this data to your server
        console.log('Form Data:', data);
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Show success message
        showFormMessage(
            'Thank you for your inquiry! We will contact you within 24 hours. Check your email for confirmation.',
            'success'
        );
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Scroll to message
        const formMessage = document.getElementById('formMessage');
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Clear message after 5 seconds
        setTimeout(function() {
            clearFormMessage();
        }, 5000);
    }, 1000);
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = 'form-message ' + type;
}

function clearFormMessage() {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = '';
    formMessage.className = 'form-message';
}

// =====================================================
// SET ACTIVE NAVIGATION LINK
// =====================================================

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (href === currentPage) {
            link.classList.add('active');
        } else if (currentPage === '' && href === 'index.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// =====================================================
// SCROLL ANIMATIONS WITH INTERSECTION OBSERVER
// =====================================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered animation
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation to various card elements
    document.querySelectorAll('.feature-card, .highlight-card, .service-item, .value-card, .location-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// =====================================================
// PARALLAX EFFECT
// =====================================================

function initParallax() {
    const heroSection = document.querySelector('.hero');
    
    if (!heroSection) return;
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Move hero background
        if (scrollPosition < window.innerHeight) {
            heroSection.style.backgroundPosition = `0px ${scrollPosition * 0.5}px`;
        }
    });
}

// =====================================================
// HERO ANIMATION
// =====================================================

function initHeroAnimation() {
    const heroBackground = document.querySelector('.hero-background');
    const heroIllustration = document.querySelector('.hero-illustration');
    
    if (!heroBackground) return;
    
    // Parallax effect on mouse move
    document.addEventListener('mousemove', function(e) {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
        
        if (heroIllustration) {
            heroIllustration.style.transform = `translate(${mouseX * 0.5}px, ${mouseY * 0.5}px)`;
        }
        
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach((shape, index) => {
            const depth = (index + 1) * 0.3;
            shape.style.transform = `translate(${mouseX * depth}px, ${mouseY * depth}px)`;
        });
    });
    
    // Reset on mouse leave
    document.addEventListener('mouseleave', function() {
        if (heroIllustration) {
            heroIllustration.style.transform = 'translate(0, 0)';
        }
        
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach(shape => {
            shape.style.transform = 'translate(0, 0)';
        });
    });
}

// =====================================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================================================
// COUNTER ANIMATION
// =====================================================

function animateCounters() {
    const stats = document.querySelectorAll('.stat h3');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target')) || parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + '+';
                clearInterval(timer);
            } else {
                stat.textContent = Math.ceil(current) + '+';
            }
        }, 30);
    });
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.team-stats').forEach(element => {
    statsObserver.observe(element);
});

// =====================================================
// IMAGE LAZY LOADING
// =====================================================

function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

initLazyLoading();

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Format phone number
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize for responsive adjustments
const handleResize = debounce(function() {
    console.log('Window resized');
}, 250);

window.addEventListener('resize', handleResize);

// =====================================================
// PAGE LOAD ANIMATIONS
// =====================================================

window.addEventListener('load', function() {
    // Fade in page content
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});

// =====================================================
// ERROR HANDLING
// =====================================================

window.addEventListener('error', function(event) {
    console.error('Error occurred:', event.error);
});

// =====================================================
// FAQ ACCORDION FUNCTIONALITY
// =====================================================

function toggleFaq(button) {
    const faqItem = button.closest('.faq-accordion-item');
    
    if (!faqItem) return;
    
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQs in the same category
    const category = button.closest('.faq-category');
    if (category) {
        const allItems = category.querySelectorAll('.faq-accordion-item');
        allItems.forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
    }
    
    // Toggle current FAQ
    faqItem.classList.toggle('active', !isActive);
    
    // Optional: Smooth scroll to accordion item if opening
    if (!isActive) {
        setTimeout(() => {
            button.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

// Handle keyboard navigation for FAQ accordions
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        if (event.target.classList.contains('faq-accordion-header')) {
            event.preventDefault();
            toggleFaq(event.target);
        }
    }
});

// Add keyboard navigation hint
document.addEventListener('DOMContentLoaded', function() {
    // Make accordion headers keyboard accessible
    const headers = document.querySelectorAll('.faq-accordion-header');
    headers.forEach(header => {
        header.setAttribute('role', 'button');
        header.setAttribute('tabindex', '0');
    });
});

