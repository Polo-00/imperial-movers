# Imperial Movers Website

A professional, fully responsive website for Imperial Movers, a moving company operating in Calgary and Edmonton.

## 📁 Project Structure

```
imperial-moving-website/
├── index.html          # Home page
├── about.html          # About us page
├── services.html       # Services page
├── contact.html        # Contact us page
├── styles.css          # Main stylesheet
├── scripts.js          # JavaScript functionality
├── assets/             # Images and media files
└── README.md           # This file
```

## 🎨 Design Features

- **Color Scheme:**
  - Dark Blue: #12223b
  - Gold: #c7a273
  
- **Responsive Design:** Mobile-first approach with breakpoints at 768px and 480px
- **Modern UI:** Clean, professional design with smooth animations and transitions
- **Accessible:** Semantic HTML and keyboard navigation support

## 📄 Pages

### Home (index.html)
- Hero section with call-to-action
- Features/benefits section
- Service highlights
- Service areas (Calgary, Edmonton, expanding soon)
- Call-to-action section

### About (about.html)
- Company story
- Core values
- Team information and statistics
- Commitment to customers

### Services (services.html)
- Residential moving
- Commercial moving
- Packing & unpacking
- Furniture assembly/disassembly
- Storage solutions
- Junk removal & donation

### Contact (contact.html)
- Contact form with validation
- Office contact information
- FAQ section
- Multiple contact methods

## 🚀 Features

### HTML Features
- Semantic HTML5 structure
- Responsive meta tags
- Proper accessibility attributes
- Consistent navigation across all pages

### CSS Features
- CSS Grid and Flexbox layouts
- CSS Variables for easy customization
- Smooth animations and transitions
- Mobile-responsive design
- Professional typography
- Shadow and gradient effects

### JavaScript Features
- Mobile menu toggle
- Contact form validation
- Dynamic active navigation link
- Intersection Observer for scroll animations
- Form submission handling
- Utility functions for formatting

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px to 1199px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

## 🎯 Key Sections

### Navigation
- Sticky header with company logo
- Responsive mobile menu
- Active link highlighting

### Hero Sections
- Full-width background with overlay
- Large typography
- Call-to-action buttons

### Feature Cards
- Grid layout with hover effects
- Icon and text content
- Box shadow effects

### Forms
- Email and text input validation
- Date picker for moving date
- Select dropdowns for locations
- Textarea for detailed messages
- Checkbox for service interests

### Contact Information
- Multiple contact methods
- Office hours
- FAQ section
- Smooth form feedback

## 🔧 Customization

To customize the website:

1. **Change Colors:** Update CSS variables in `styles.css`
   ```css
   :root {
       --dark-blue: #12223b;
       --gold: #c7a273;
   }
   ```

2. **Update Content:** Edit HTML files directly in their respective sections

3. **Add Images:** Place images in the `assets/` folder and reference them in HTML

4. **Modify Spacing:** Adjust padding and margin values in `styles.css`

## 📞 Contact Information

- **Calgary:** (403) 555-0100
- **Edmonton:** (780) 555-0200
- **Email:** info@imperialmovers.com

## 📝 Form Handling

The contact form includes:
- Client-side validation
- Email format checking
- Phone number validation
- Required field validation
- Success/error message display
- Automatic form clearing on submission

**Note:** Currently, form submission is simulated. To enable actual email delivery, you'll need to:
1. Set up a backend server (Node.js, PHP, etc.)
2. Integrate an email service (SendGrid, Mailgun, etc.)
3. Update the `submitContactForm()` function in `scripts.js`

## 🌐 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 No External Dependencies

This website is built with pure HTML, CSS, and JavaScript. No frameworks or external libraries required!

## 🚀 Getting Started

1. Open `index.html` in your web browser
2. Navigate between pages using the navigation menu
3. Test the mobile menu on smaller screens
4. Try the contact form (currently simulated)

## ✨ Future Enhancements

- Backend form submission with email notifications
- Customer testimonials section
- Photo gallery
- Blog section
- Online booking system
- Multi-language support
- Integration with Google Maps
- Customer reviews/ratings

---

**Created:** 2025
**Company:** Imperial Movers
**Service Areas:** Calgary, Edmonton
