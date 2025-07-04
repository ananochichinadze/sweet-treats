// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// Logo Image Replacement (placeholder for actual logo)
function replaceLogoPlaceholders() {
    // This is a placeholder function where you would replace the placeholder
    // base64 images with the actual logo. For now, we'll create a simple
    // pink circle with text as a temporary logo
    const logoElements = document.querySelectorAll('#logo, #logo-footer');
    
    logoElements.forEach(logo => {
        // Create a canvas to draw a simple logo
        const canvas = document.createElement('canvas');
        canvas.width = 80;
        canvas.height = 80;
        const ctx = canvas.getContext('2d');
        
        // Draw pink circle background
        ctx.fillStyle = '#E91E63';
        ctx.beginPath();
        ctx.arc(40, 40, 35, 0, 2 * Math.PI);
        ctx.fill();
        
        // Draw text
        ctx.fillStyle = 'white';
        ctx.font = 'bold 12px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('LIPCARE', 40, 35);
        ctx.fillText('GEORGIA', 40, 50);
        
        // Replace the src with the canvas data
        logo.src = canvas.toDataURL();
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        // Show loading state
        btnText.style.display = 'none';
        btnLoading.style.display = 'flex';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        try {
            // In a real application, you would send the form data to your server
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
            
            // Show success message
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Sorry, there was an error sending your message. Please try again.');
        } finally {
            // Reset button state
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
}

// Scroll Animations
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Smooth Scrolling for Internal Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar Background on Scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(233, 30, 99, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Form Validation Enhancement
function enhanceFormValidation() {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        // Add real-time validation feedback
        input.addEventListener('blur', () => {
            validateField(input);
        });
        
        input.addEventListener('input', () => {
            if (input.classList.contains('invalid')) {
                validateField(input);
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error styling
    field.classList.remove('invalid');
    removeErrorMessage(field);
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Apply validation styling
    if (!isValid) {
        field.classList.add('invalid');
        showErrorMessage(field, errorMessage);
    }
    
    return isValid;
}

function showErrorMessage(field, message) {
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#E91E63';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    errorElement.style.display = 'block';
    
    field.parentNode.appendChild(errorElement);
}

function removeErrorMessage(field) {
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

// Add invalid field styling to CSS
function addValidationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .form-group input.invalid,
        .form-group textarea.invalid,
        .form-group select.invalid {
            border-color: #E91E63 !important;
            box-shadow: 0 0 0 3px rgba(233, 30, 99, 0.1) !important;
        }
    `;
    document.head.appendChild(style);
}

// Page Load Animations
function initPageLoadAnimations() {
    // Add fade-in animation to main content
    const mainContent = document.querySelector('main') || document.body;
    mainContent.style.opacity = '0';
    mainContent.style.transform = 'translateY(20px)';
    mainContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
    }, 100);
}

// Instagram Link Enhancement
function enhanceInstagramLinks() {
    const instagramLinks = document.querySelectorAll('a[href*="instagram.com"]');
    
    instagramLinks.forEach(link => {
        // Add Instagram branding
        link.addEventListener('mouseenter', () => {
            link.style.background = 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.background = ''; // Reset to original
        });
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    replaceLogoPlaceholders();
    initScrollAnimations();
    initSmoothScrolling();
    initNavbarScroll();
    enhanceFormValidation();
    addValidationStyles();
    initPageLoadAnimations();
    enhanceInstagramLinks();
});

// Add scroll-to-top functionality
function addScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #E91E63, #F06292);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(233, 30, 99, 0.3);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    // Scroll to top functionality
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effects
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'translateY(-2px)';
        scrollBtn.style.boxShadow = '0 6px 20px rgba(233, 30, 99, 0.4)';
    });
    
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'translateY(0)';
        scrollBtn.style.boxShadow = '0 4px 12px rgba(233, 30, 99, 0.3)';
    });
}

// Initialize scroll-to-top button
document.addEventListener('DOMContentLoaded', () => {
    addScrollToTop();
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Add parallax effect to hero section
function addParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
    });
}