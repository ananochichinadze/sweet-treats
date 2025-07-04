// Logo Setup Helper Script
// This script helps replace the placeholder logo with your actual logo

function setupLogo(logoPath) {
    // Update the logo replacement function in script.js to use your actual logo
    const logoElements = document.querySelectorAll('#logo, #logo-footer');
    
    logoElements.forEach(logo => {
        logo.src = logoPath;
        logo.style.background = 'transparent'; // Remove the pink background gradient
        logo.style.objectFit = 'contain'; // Ensure logo fits properly
    });
}

// Instructions for using your logo:
// 1. Save your logo image in the same folder as the website files
// 2. Name it 'logo.png' (or update the path below)
// 3. Call this function when the page loads

document.addEventListener('DOMContentLoaded', () => {
    // Replace 'logo.png' with the path to your actual logo file
    setupLogo('logo.png');
});

// Alternative: If you want to use the pink logo you provided,
// you can create a base64 version and use it directly:
const pinkLogoBase64 = `data:image/png;base64,YOUR_LOGO_BASE64_HERE`;

// To convert your logo to base64:
// 1. Go to https://www.base64-image.de/
// 2. Upload your logo image
// 3. Copy the generated base64 string
// 4. Replace YOUR_LOGO_BASE64_HERE with the actual base64 string