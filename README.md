# Lipcare Georgia Website

A beautiful, modern website for Lipcare Georgia - a premium lip care products business. The website features a clean design with a pink beauty theme, responsive layout, and professional presentation.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with beautiful animations
- **Contact Form**: Interactive contact form with validation
- **Instagram Integration**: Direct links to Instagram profile
- **Performance Optimized**: Fast loading with smooth animations
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Pages

1. **Home Page** (`index.html`)
   - Hero section with compelling headline
   - About section highlighting company values
   - Product range preview
   - Call-to-action section

2. **Contact Page** (`contact.html`)
   - Contact information
   - Interactive contact form
   - FAQ section
   - Instagram integration

## File Structure

```
├── index.html          # Home page
├── contact.html        # Contact page
├── style.css          # All styling and responsive design
├── script.js          # Interactive functionality
└── README.md          # This file
```

## How to Use

1. **Open the Website**: Open `index.html` in your web browser
2. **Navigate**: Use the navigation menu to switch between Home and Contact pages
3. **Test Contact Form**: Try filling out the contact form (currently shows a demo success message)

## Customization

### Replace Logo
To use your actual logo:
1. Save your logo image as `logo.png` in the same folder
2. Open `script.js` and modify the `replaceLogoPlaceholders()` function to use your image:
   ```javascript
   logoElements.forEach(logo => {
       logo.src = 'logo.png'; // Use your actual logo file
   });
   ```

### Update Colors
The color scheme can be modified in `style.css` by changing the CSS custom properties in the `:root` section:
```css
:root {
    --primary-pink: #E91E63;    /* Main brand color */
    --light-pink: #F8BBD9;      /* Light accent */
    --soft-pink: #FCE4EC;       /* Background tints */
    /* ... other colors */
}
```

### Modify Content
- Edit the HTML files directly to change text, links, and content
- Update the Instagram URL in both HTML files to match your account
- Modify the contact information in `contact.html`

### Form Integration
To make the contact form functional:
1. Set up a form handling service (like Formspree, Netlify Forms, or your own backend)
2. Update the form submission logic in `script.js`
3. Replace the simulated form submission with actual API calls

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## Performance Features

- Optimized images and fonts
- Smooth animations and transitions
- Lazy loading for better performance
- Minimal external dependencies

## Color Scheme

The website uses a carefully selected pink beauty theme:
- **Primary Pink**: `#E91E63` - Main brand color
- **Light Pink**: `#F8BBD9` - Accents and highlights
- **Soft Pink**: `#FCE4EC` - Background elements
- **Dark Gray**: `#2C2C2C` - Text and headings

## Technical Notes

- Uses CSS Grid and Flexbox for layouts
- Font Awesome icons for visual elements
- Inter font family for modern typography
- CSS custom properties for easy theme customization
- Vanilla JavaScript (no frameworks required)

## Next Steps

1. **Add Your Logo**: Replace the placeholder logo with your actual brand logo
2. **Update Content**: Customize the text to match your brand voice
3. **Set Up Hosting**: Deploy to a web hosting service
4. **Connect Form**: Integrate with a form handling service
5. **SEO Optimization**: Add Google Analytics and improve meta descriptions

## Support

This website is built with standard web technologies and should work in any modern web browser. All code is well-commented for easy customization.

---

**Built for Lipcare Georgia** - Premium lip care products for beautiful, healthy lips.