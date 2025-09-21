/**
 * Email Signup Form Handler
 * Handles form submission, validation, and user feedback
 */

// Configuration - updated with actual Vercel URL
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001' 
    : 'https://unconventional-neuroscientists-api.vercel.app';

class EmailSignup {
    constructor() {
        this.form = document.getElementById('emailSignupForm');
        this.emailInput = document.getElementById('email');
        this.submitBtn = this.form.querySelector('.signup-btn');
        this.btnText = this.submitBtn.querySelector('.btn-text');
        this.btnLoading = this.submitBtn.querySelector('.btn-loading');
        this.messageEl = document.getElementById('form-message');
        
        this.init();
    }

    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.emailInput.addEventListener('input', this.clearMessage.bind(this));
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const email = this.emailInput.value.trim();
        
        // Client-side validation
        if (!this.validateEmail(email)) {
            this.showMessage('Please enter a valid email address.', 'error');
            return;
        }

        this.setLoading(true);
        this.clearMessage();

        try {
            const response = await fetch(`${API_BASE_URL}/api/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (data.success) {
                this.showMessage(data.message, 'success');
                this.form.reset();
            } else {
                this.showMessage(data.message || 'Something went wrong. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Signup error:', error);
            
            // Check if it's a network error
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                this.showMessage('Unable to connect. Please check your internet connection and try again.', 'error');
            } else {
                this.showMessage('Something went wrong. Please try again later.', 'error');
            }
        } finally {
            this.setLoading(false);
        }
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) && email.length <= 100;
    }

    setLoading(isLoading) {
        this.submitBtn.disabled = isLoading;
        
        if (isLoading) {
            this.btnText.style.display = 'none';
            this.btnLoading.style.display = 'inline-block';
        } else {
            this.btnText.style.display = 'inline';
            this.btnLoading.style.display = 'none';
        }
    }

    showMessage(message, type) {
        this.messageEl.textContent = message;
        this.messageEl.className = `form-message ${type}`;
    }

    clearMessage() {
        this.messageEl.className = 'form-message';
        this.messageEl.textContent = '';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EmailSignup();
});