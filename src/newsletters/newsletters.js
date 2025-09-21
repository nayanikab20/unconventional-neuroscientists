/**
 * Newsletter Page JavaScript
 * Handles PDF viewing functionality and dynamic newsletter loading
 */

// Newsletter data - automatically populated
let newsletters = [];

// Open newsletter PDF in modal
function openNewsletter(pdfPath) {
    const modal = document.getElementById('pdfModal');
    const viewer = document.getElementById('pdfViewer');
    const title = document.getElementById('pdfTitle');
    const downloadLink = document.getElementById('downloadLink');
    
    // Extract issue number from filename
    const filename = pdfPath.split('/').pop();
    const issueMatch = filename.match(/e(\d+)/);
    const issueNumber = issueMatch ? issueMatch[1] : '1';
    
    // Set modal content
    title.textContent = `Unconventional Weekly - Issue #${issueNumber}`;
    viewer.src = pdfPath;
    downloadLink.href = pdfPath;
    downloadLink.download = filename;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close PDF modal
function closePDF() {
    const modal = document.getElementById('pdfModal');
    const viewer = document.getElementById('pdfViewer');
    
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Clear iframe source to stop loading
    viewer.src = '';
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('pdfModal');
    if (event.target === modal) {
        closePDF();
    }
});

// Handle escape key to close modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('pdfModal');
        if (modal.style.display === 'block') {
            closePDF();
        }
    }
});

// Load newsletters dynamically
async function loadNewsletters() {
    try {
        console.log('Loading newsletters...');
        // Define the newsletters we know exist based on the file scan
        const newsletterFiles = [
            'Unconventional Weekly e1.pdf',
            'Unconventional Weekly e2.pdf', 
            'Unconventional Weekly e3.pdf',
            'Unconventional Weekly e4.pdf',
            'Unconventional Weekly e5.pdf',
            'Unconventional Weekly e6.pdf'
        ];
        
        // Create newsletter objects with metadata
        newsletters = newsletterFiles.map(filename => {
            const issueMatch = filename.match(/e(\d+)/);
            const issueNumber = issueMatch ? parseInt(issueMatch[1]) : 1;
            
            // Define actual titles from the newsletters (converted to sentence case)
            const titles = {
                1: "Alzheimer's reversal using FDA-approved cancer drugs",
                2: "Sam Altman-backed Merge Labs targets ambitious next-gen BCI",
                3: "Eight Sleep raises $100M to position AI-driven mattresses as a medical device",
                4: "AbbVie bets $1.2B on psychedelics to treat depression in just 1 dose",
                5: "The 7UP ingredient that could cure Alzheimer's",
                6: "AlterEgo just said the quiet part out loud: the world's first near-telepathic wearable"
            };
            
            return {
                filename: filename,
                path: `unconventional_weekly/${filename}`,
                issueNumber: issueNumber,
                title: `Issue #${issueNumber}`,
                description: titles[issueNumber] || "Latest insights into neuroscience research and breakthrough discoveries.",
                isLatest: issueNumber === Math.max(...newsletterFiles.map(f => {
                    const match = f.match(/e(\d+)/);
                    return match ? parseInt(match[1]) : 0;
                }))
            };
        });
        
        // Sort by issue number (newest first)
        newsletters.sort((a, b) => b.issueNumber - a.issueNumber);
        
        // Render the newsletters
        console.log('Rendering newsletters:', newsletters);
        renderNewsletters();
        
    } catch (error) {
        console.error('Error loading newsletters:', error);
        displayErrorMessage();
    }
}

// Render newsletters into the grid
function renderNewsletters() {
    const grid = document.querySelector('.newsletters-grid');
    console.log('Grid element found:', grid);
    if (!grid) return;
    
    // Clear existing content
    grid.innerHTML = '';
    console.log('Creating', newsletters.length, 'newsletter cards');
    
    // Create newsletter cards
    newsletters.forEach(newsletter => {
        console.log('Creating card for:', newsletter.title);
        const card = createNewsletterCard(newsletter);
        grid.appendChild(card);
    });
}

// Create a newsletter card element
function createNewsletterCard(newsletter) {
    const card = document.createElement('div');
    card.className = 'newsletter-card';
    card.onclick = () => openNewsletter(newsletter.path);
    
    card.innerHTML = `
        <div class="newsletter-preview">
            <iframe src="${newsletter.path}#page=1&toolbar=0&navpanes=0&scrollbar=0&zoom=fit&view=FitH" 
                    class="pdf-preview-iframe" 
                    title="Preview of ${newsletter.title}"
                    loading="lazy">
            </iframe>
            <div class="newsletter-overlay">
                <span class="click-to-read">Click to Read Full Issue</span>
            </div>
        </div>
        <div class="newsletter-info">
            <h3>${newsletter.title}</h3>
            <p class="newsletter-description">${newsletter.description}</p>
        </div>
    `;
    
    return card;
}

// Display error message if newsletters can't be loaded
function displayErrorMessage() {
    const grid = document.querySelector('.newsletters-grid');
    if (!grid) return;
    
    grid.innerHTML = `
        <div class="error-message">
            <h3>Unable to load newsletters</h3>
            <p>Please check back later or contact us if the issue persists.</p>
        </div>
    `;
}

// Add loading state for PDFs
document.addEventListener('DOMContentLoaded', function() {
    // Load newsletters when page loads
    loadNewsletters();
    
    const pdfViewer = document.getElementById('pdfViewer');
    
    pdfViewer.addEventListener('load', function() {
        // PDF loaded successfully
        console.log('PDF loaded successfully');
    });
    
    pdfViewer.addEventListener('error', function() {
        // Handle PDF loading error
        console.error('Error loading PDF');
        pdfViewer.innerHTML = '<div style="padding: 2rem; text-align: center; color: #666;">Unable to load PDF. Please try downloading it instead.</div>';
    });
});