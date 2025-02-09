// Add fade-in animation when page loads
window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        element.classList.add('visible');
    });
});

// Function to show the order form
function showForm(productName) {
    document.getElementById('productName').textContent = productName;
    document.getElementById('productNameInput').value = productName;
    document.getElementById('orderForm').style.display = 'flex';
}

// Function to close the form if clicked outside of it
document.getElementById('orderForm').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

// Smooth scrolling to the top
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.padding = '10px';
scrollToTopButton.style.fontSize = '20px';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '5px';
scrollToTopButton.style.background = '#FFD700';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.display = 'none'; // Hidden by default
document.body.appendChild(scrollToTopButton);

// Show the button when the page is scrolled down
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
