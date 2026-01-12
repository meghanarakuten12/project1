# Happy Birthday Hiro! 🎉

A special interactive birthday website made with love by Meghana.

## 🎂 About

This is a personalized birthday website where Hiro can celebrate his special day with an interactive cake and receive a heartfelt birthday card filled with love and memories.

## ✨ Features

- **Welcome Screen**: A warm birthday greeting to start the celebration
- **Interactive Cake**: Click on the cake to add candles (up to 5), then blow them out!
- **Birthday Card**: Open an envelope to reveal a heartfelt message and photo gallery
- **Photo**: Display of your special memory together
- **Beautiful Animations**: Floating hearts, flickering candle flames, smooth transitions
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices

## 🎮 How It Works

1. **Welcome Screen** - Start button to begin
2. **Cake Screen** - Click on the cake to add candles (5 times), then click "Blow the Candles!"
3. **Card Screen** - Click on the envelope to open it and reveal the birthday message and photos

## 📸 Adding Your Photo

Before deploying, you need to add 1 photo to the `images` folder:

1. Place your favorite photo in the `images` folder
2. Rename it as: `photo.jpg`
3. Supported formats: `.jpg`, `.jpeg`, `.png`
4. Recommended: Square photos work best (will be displayed as a square)

**Example:**
```
images/
  └── photo.jpg
```

## 🚀 Deploying to Vercel

### Method 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Navigate to the project folder:
   ```bash
   cd /Users/ar-meghana.r/projects/hiro
   ```

3. Add your photo to the `images` folder (see above)

4. Deploy:
   ```bash
   vercel
   ```

5. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N**
   - Project name? Press enter or give it a custom name
   - Directory? Press enter (current directory)

6. Your site will be live! Copy the production URL and share it with Hiro 💕

### Method 2: Using Vercel Dashboard

1. Add your photo to the `images` folder

2. Initialize a git repository (if not already done):
   ```bash
   cd /Users/ar-meghana.r/projects/hiro
   git init
   git add .
   git commit -m "Birthday website for Hiro"
   ```

3. Push to GitHub:
   - Create a new repository on GitHub
   - Follow GitHub's instructions to push your code

4. Go to [Vercel Dashboard](https://vercel.com)

5. Click "Add New Project"

6. Import your GitHub repository

7. Click "Deploy"

8. Your site will be live in seconds!

## 🎨 Customization

### Changing the Number of Candles

Edit `script.js` and change:
```javascript
const maxCandles = 5;  // Change this number
```

### Editing the Birthday Message

Open `index.html` and find the section with class `letter` (around line 63-70). Edit the paragraphs to personalize your message even more!

### Changing Colors

Edit `styles.css` and modify the gradient colors:
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

You can also change the cake colors by modifying the `.layer-1`, `.layer-2`, and `.layer-3` classes.

## 📱 Testing Locally

To test the website on your computer before deploying:

1. Simply open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # If you have Python installed:
   python -m http.server 8000

   # Then open: http://localhost:8000
   ```

## 💝 The Flow

The website journey:

1. **Welcome** - Birthday greeting from Meghana
2. **Interactive Cake** - Click to add 5 candles, then blow them out
3. **Envelope** - Click to open and reveal the card
4. **Birthday Card** - Your heartfelt message and special photo

## 🔧 Troubleshooting

**Photo not showing?**
- Make sure the photo is named exactly: `photo.jpg`
- Check it's in the `images` folder
- Try using `.jpg` format instead of `.png` (or update the HTML file extension)

**Candles not appearing?**
- Make sure JavaScript is enabled in your browser
- Try clicking directly on the colored cake layers
- Refresh the page and try again

**Envelope not opening?**
- Make sure you've blown out all the candles first
- Click directly on the envelope graphic
- Check browser console for any errors

**Layout issues on mobile?**
- The site is fully responsive and should work on all devices
- Try clearing your browser cache
- Ensure you're using a modern browser (Chrome, Firefox, Safari, Edge)

## 📝 Credits

Made with ❤️ by Meghana for Hiro's Birthday

- No frameworks used - pure HTML, CSS, and JavaScript
- Designed for modern browsers
- Optimized for performance

## 🎉 Final Notes

Remember to:
1. ✅ Add your photo before deploying (name it `photo.jpg`)
2. ✅ Test locally to make sure everything looks good
3. ✅ Deploy to Vercel
4. ✅ Copy the URL
5. ✅ Share it with Hiro on his special day!

**Tip**: Send him the link without any context and let him discover the surprise! 🎁

Happy Birthday to Hiro! From bus mates to soulmates. 💕

---

*"Made with love by your favorite bus mate"* 💕
