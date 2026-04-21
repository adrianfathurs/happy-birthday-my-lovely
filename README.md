# Our Story - Romantic Timeline Website ❤️

A beautiful, cinematic romantic storytelling website featuring an interactive envelope opening animation and an elegant timeline showcasing your relationship journey.

## Features

- **Envelope Opening Animation**: Click the envelope to reveal a surprise letter with smooth animations
- **Vertical Timeline**: Scroll through your romantic milestones with fade-in animations
- **Photo/Video Slideshow**: Each card can contain multiple photos and videos with swipe navigation
- **Floating Particles**: Soft heart particles floating in the background
- **Animated Background**: Subtle gradient animation creating a dreamy atmosphere
- **YouTube Music**: Auto-play romantic playlist after opening envelope
- **Cursor Trail Effect**: Glowing trail following your cursor
- **Fully Responsive**: Beautiful on all devices
- **Smooth Scroll Animations**: Elements appear as you scroll
- **Touch & Swipe Support**: Mobile-friendly swipe gestures for slideshow

## Tech Stack

- **React 18** - Functional components with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth, production-ready animations
- **Google Fonts** - Playfair Display (elegant) & Inter (body)

## Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## Customization

### Add Your Own Photos & Videos

Each timeline item can contain multiple photos and videos. Edit `src/data/timeline.js`:

```javascript
{
  id: 1,
  date: "2022-01-10",
  title: "First Time We Met",
  description: "Your romantic message...",
  images: [
    "/images/photo1.jpg",           // Photo
    "/images/photo2.jpg",           // Photo
    "/videos/moment1.mp4",          // Video (.mp4, .webm, .ogg, .mov)
    "/images/photo3.jpg",            // More photos...
  ]
}
```

**Supported Video Formats:**
- `.mp4` (recommended)
- `.webm`
- `.ogg`
- `.mov`
- `.avi`
- `.mkv`

**Photo/Video Features:**
- Click arrows to navigate
- Swipe on mobile devices
- Click dots to jump to specific media
- Videos have native controls (play/pause, volume, fullscreen)
- Image counter shows current position (e.g., "1 / 3")

```javascript
{
  id: 1,
  date: "2022-01-10",
  title: "First Time We Met",
  description: "Your romantic message here...",
  image: "/images/your-photo.jpg"  // Add your photos to public/images/
}
```

### Add Background Music

1. Place your romantic music file in `public/music/romantic-music.mp3`
2. The music toggle button is already set up in the app

### Customize Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'romantic-pink': '#FADADD',    // Primary pink
  'romantic-light': '#FFF5F7',   // Light background
  'romantic-gold': '#D4AF37',    // Accent gold
}
```

### Edit Timeline Data

Modify `src/data/timeline.js` to add your own romantic moments:

```javascript
export const timelineData = [
  {
    id: 1,
    date: "2022-01-10",
    title: "Your Moment Title",
    description: "Your romantic description...",
    image: "/images/your-image.jpg"
  },
  // Add more moments...
];
```

## Project Structure

```
src/
  components/
    AnimatedBackground.jsx  # Gradient & particle effects
    Envelope.jsx            # Opening envelope animation
    Timeline.jsx            # Timeline layout
    TimelineItem.jsx        # Individual timeline card
  data/
    timeline.js             # Your romantic moments data
  pages/
    Home.jsx                # Main page with envelope & timeline
  App.jsx                   # Root component with music toggle
  main.jsx                  # Entry point
  index.css                 # Global styles
```

## Animation Features

- **Envelope Flap Rotation**: Realistic opening animation
- **Letter Slide-out**: Smooth letter emerging from envelope
- **Page Transition**: Fade + scale effect between envelope and timeline
- **Scroll Animations**: Timeline items fade in as you scroll
- **Floating Hearts**: Continuous floating particle effect
- **Hover Effects**: Interactive feedback on cards and buttons
- **Typewriter Effect**: Final message reveal animation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading images
- Optimized animations with Framer Motion
- Minimal bundle size
- Smooth 60fps animations

## Tips for Best Results

1. Use high-quality, vertical orientation photos for timeline images
2. Keep descriptions concise but emotionally meaningful
3. Add 8-12 romantic moments for the best experience
4. Use a gentle, instrumental romantic music track
5. Test on mobile devices for responsiveness

## License

This project is open source and available for personal use.

---

Made with ❤️ for sharing your special moments
