# Pampered Nails by Hani - Landing Page

A modern, responsive landing page for a professional nail art technician business. Showcases nail art work and enables direct booking through Facebook Messenger.

## 📋 Features

- ✨ **Modern Design**: Clean, minimalist layout with soft pastel colors
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🖼️ **Interactive Gallery**: Lightbox modal for enlarged image viewing with keyboard navigation
- 📞 **Messenger Integration**: Direct booking links to Facebook Messenger
- 🔗 **Sticky CTA Button**: Always-visible booking button while scrolling
- 🎨 **SEO Optimized**: Semantic HTML, JSON-LD schema, alt text for images
- ♿ **Accessible**: WCAG compliant with keyboard navigation support
- ⚡ **Fast Loading**: Lightweight HTML/CSS/JS with no heavy dependencies
- 🎯 **Performance**: Optimized for Lighthouse scores >90

## 🚀 Quick Start

### Option 1: Local Development

1. **Clone or download the project**
   ```bash
   cd "Pampered Nails by Hani"
   ```

2. **Open in Browser**
   - Open `index.html` directly in a web browser
   - Or use a local server (Python 3):
     ```bash
     python -m http.server 8000
     ```
   - Visit `http://localhost:8000`

### Option 2: Deploy to Vercel (Free)

1. **Initialize Git** (if not already a repository)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub** (create a new repository and push code)

3. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Import your repository
   - Click "Deploy" (automatic configuration)
   - Your site will be live at `https://your-project.vercel.app`

## ⚙️ Configuration

### Set Your Facebook Page ID for Messenger

The Messenger links are currently placeholders. You must configure your Facebook Page ID:

#### Option 1: In Browser Console
```javascript
window.PamperedNails.updateMessengerPageId('YOUR_FACEBOOK_PAGE_ID');
```

#### Option 2: Edit script.js
Open `script.js` and find this line:
```javascript
const CONFIG = {
    messengerPageId: 'YOUR_PAGE_ID', // Update this
};
```

Replace `'YOUR_PAGE_ID'` with your actual Facebook Page ID (numeric ID, e.g., `123456789`).

**How to find your Facebook Page ID:**
1. Go to your Facebook Business Page
2. Click "About" → Scroll down to find your Page ID
3. Or visit `https://findmyfbid.com` and paste your page URL

### Add Your Images

Replace placeholder image paths with your actual nail art photos:

1. **Hero Image** (1920×600px recommended)
   - Replace: `./assets/hero/hero-image.jpg`

2. **Gallery Images** (6 images, 300×300px or 300×375px)
   - Replace: `./assets/gallery/nail-design-1.jpg` through `nail-design-6.jpg`

3. **About Photo** (300×300px)
   - Replace: `./assets/testimonials/hani-photo.jpg`

4. **Testimonial Photos** (80×80px)
   - Replace: `./assets/testimonials/client-1.jpg`, `client-2.jpg`, `client-3.jpg`

**Image Optimization Tips:**
- Compress images using [TinyPNG](https://tinypng.com) or [ImageOptim](https://imageoptim.com)
- Keep file sizes under 50KB per image for fast loading
- Use JPEG for photos, PNG for icons with transparency

### Customize Content

Edit these sections in `index.html`:

- **Hero Section** (line ~44-50): Update headline and subheadline
- **About Section** (line ~76-88): Replace with your actual bio
- **Testimonials** (line ~104-142): Add real client reviews
- **Contact Info** (line ~184-197): Update social media links and contact details
- **Footer** (line ~184-197): Update business name and details

### Update Social Media Links

In `index.html`, find these lines and update with your actual links:
```html
<a href="https://instagram.com/YOUR_HANDLE">📸 Instagram</a>
<a href="https://facebook.com/YOUR_PAGE">👥 Facebook</a>
```

## 📂 Project Structure

```
Pampered Nails by Hani/
├── index.html              # Main HTML file (semantic structure)
├── styles.css              # Responsive CSS (mobile-first)
├── script.js               # JavaScript (lightbox, interactions)
├── vercel.json             # Vercel deployment config
├── .gitignore              # Git ignore patterns
├── README.md               # This file
└── assets/
    ├── hero/               # Hero section images
    │   └── hero-image.jpg
    ├── gallery/            # Gallery images (6+)
    │   ├── nail-design-1.jpg
    │   ├── nail-design-2.jpg
    │   └── ...
    └── testimonials/       # Profile & testimonial photos
        ├── hani-photo.jpg
        ├── client-1.jpg
        ├── client-2.jpg
        └── client-3.jpg
```

## 🎨 Customization

### Colors & Design System

Edit CSS variables in `styles.css` (lines 1-20):

```css
:root {
    --primary-color: #f5a5a5;        /* Soft rose/coral */
    --secondary-color: #e8c5d8;      /* Blush pink */
    --accent-color: #d4a574;         /* Warm beige */
    --neutral-light: #faf9f7;        /* Off-white */
    --neutral-dark: #3d3d3d;         /* Dark gray */
    /* ... more variables */
}
```

**Example: Change primary color from rose to teal**
```css
--primary-color: #6dd5d7;
```

### Typography

Fonts are loaded from Google Fonts in `index.html`:
- **Headings**: Poppins
- **Body**: Inter

To change fonts, edit the `<link>` tag in `<head>` and update the CSS:

```css
body {
    font-family: 'YOUR_FONT', sans-serif;
}
```

### Responsive Breakpoints

Breakpoints defined in `styles.css`:
- **Mobile**: 0px (default)
- **Tablet**: 768px and up
- **Desktop**: 1024px and up

## ✅ Testing Checklist

Before launching, verify:

1. **Responsive Design**
   - [ ] Test on mobile (375px width)
   - [ ] Test on tablet (768px width)
   - [ ] Test on desktop (1440px+ width)
   - [ ] No horizontal scrollbars

2. **Functionality**
   - [ ] Gallery images open in lightbox on click
   - [ ] Close lightbox with X, ESC key, or background click
   - [ ] Navigation arrows work (next/prev images)
   - [ ] Sticky button appears when scrolling past hero
   - [ ] All buttons link to Messenger correctly

3. **Performance**
   - [ ] Run Lighthouse audit (target >90)
   - [ ] Page loads in <3 seconds
   - [ ] Images load quickly (use DevTools Network tab)

4. **Accessibility**
   - [ ] Keyboard navigation works (Tab through all elements)
   - [ ] All images have alt text
   - [ ] Color contrast is sufficient (use WebAIM)
   - [ ] Focus indicators are visible

5. **SEO**
   - [ ] Meta title and description are present
   - [ ] All images have descriptive alt text
   - [ ] Open Graph tags look correct (check with Facebook Sharing Debugger)
   - [ ] JSON-LD schema is valid (use Google Structured Data Testing Tool)

6. **Browser Compatibility**
   - [ ] Chrome/Edge
   - [ ] Firefox
   - [ ] Safari
   - [ ] Mobile Safari (iOS)

## 📊 Analytics (Optional)

To track user interactions (Messenger clicks, page views):

1. **Google Analytics** - Add your GA ID to `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_ID');
   </script>
   ```

2. **Messenger Click Tracking** - Already configured in `script.js` (uncomment lines ~81-85)

## 🔒 Security Notes

- This is a static site (no server-side code)
- No databases or user data collection
- All Messenger interactions go through Facebook's official channels
- Use HTTPS when deployed (Vercel provides free SSL)

## 📱 Mobile Optimization

- Images automatically scale on mobile
- Touch-friendly button sizes (48px+ recommended)
- Optimized viewport settings in HTML
- Sticky button becomes larger on desktop
- Gallery grid adapts: 1 column mobile → 2 columns tablet → 3 columns desktop

## 🐛 Troubleshooting

### Gallery images not loading
- Check file paths match HTML (`./assets/gallery/filename.jpg`)
- Ensure images are in the correct directories
- Use DevTools (F12) → Network tab to see if images load

### Messenger link not working
- Verify Facebook Page ID is correct (`https://m.me/YOUR_PAGE_ID`)
- Check that Messenger isn't blocked by browser privacy settings
- Test in a different browser

### Sticky button appears in wrong position
- Check browser zoom level (should be 100%)
- Clear browser cache (Ctrl+Shift+Delete)
- Test in another browser

### CSS not loading
- Ensure `styles.css` is in the same directory as `index.html`
- Check file name spelling (case-sensitive on Linux/Mac)

## 📞 Support

For issues or questions:
1. Check this README thoroughly
2. Review browser console for errors (F12)
3. Verify all configuration steps above
4. Test in different browsers

## 📄 License

This project is yours to use, modify, and distribute as needed.

---

**Last Updated**: April 2026
**Version**: 1.0
