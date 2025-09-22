/**
 * Sign Up Popup Handler
 * Handles the hero signup button popup modal
 */

// Configuration - uses same API as email signup
const SIGNUP_API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001' 
    : 'https://unconventional-neuroscientists-api.vercel.app';

class SignUpPopup {
    constructor() {
        this.modal = document.getElementById('signUpModal');
        this.signUpBtn = document.getElementById('signUpBtn');
        this.closeBtn = document.querySelector('.close');
        this.form = document.getElementById('signUpForm');
        
        // Add error checking
        if (!this.modal || !this.signUpBtn || !this.form) {
            console.error('SignUp Popup: Required elements not found', {
                modal: !!this.modal,
                signUpBtn: !!this.signUpBtn,
                form: !!this.form
            });
            return;
        }
        
        this.submitBtn = this.form.querySelector('.submit-btn');
        this.btnText = this.submitBtn.querySelector('.btn-text');
        this.btnLoading = this.submitBtn.querySelector('.btn-loading');
        this.messageEl = document.getElementById('signupMessage');
        
        this.init();
    }

    init() {
        if (!this.modal || !this.signUpBtn) return;
        
        // Event listeners
        this.signUpBtn.addEventListener('click', this.openModal.bind(this));
        this.closeBtn.addEventListener('click', this.closeModal.bind(this));
        this.modal.addEventListener('click', this.handleModalClick.bind(this));
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        
        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') {
                this.closeModal();
            }
        });
    }

    openModal() {
        console.log('Opening signup modal...');
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scroll
        
        // Focus first input
        setTimeout(() => {
            const firstInput = this.form.querySelector('input');
            if (firstInput) firstInput.focus();
        }, 100);
    }

    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scroll
        this.form.reset();
        this.clearMessage();
    }

    handleModalClick(e) {
        // Close modal if clicking outside the modal content
        if (e.target === this.modal) {
            this.closeModal();
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const firstName = formData.get('firstName').trim();
        const lastName = formData.get('lastName').trim();
        const email = formData.get('email').trim();
        
        // Client-side validation
        if (!firstName || !lastName || !email) {
            this.showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!this.validateEmail(email)) {
            this.showMessage('Please enter a valid email address.', 'error');
            return;
        }

        this.setLoading(true);
        this.clearMessage();

        try {
            // Send data to same signup endpoint but with additional fields
            const response = await fetch(`${SIGNUP_API_BASE_URL}/api/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email,
                    firstName,
                    lastName
                })
            });

            const data = await response.json();

            if (data.success) {
                this.showMessage(`Welcome ${firstName}! ${data.message}`, 'success');
                
                // Close modal after success
                setTimeout(() => {
                    this.closeModal();
                }, 2000);
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
    new SignUpPopup();
});