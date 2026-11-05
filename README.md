# Rishvik's 5th Birthday 🎂

A Spider-Verse / Miles Morales inspired birthday celebration site for **Rishvik Mankkar's 5th birthday on 26 November 2026**. Built as a single-page static site, ready to publish on GitHub Pages.

## Features

- Comic-book Spider-Verse design (ink-black borders, halftone dots, city skyline canvas, tilted panels)
- Countdown timer to the party
- Party details (date, time, location, directions link)
- Photo gallery with clickable lightbox popup and download button
- Shared guestbook for birthday wishes (Supabase-backed with localStorage fallback)
- Original synthesized heroic theme tune (plays on interaction)
- Looping comic sound effects (POW / BAM / THWIP / ZAP)
- Confetti on wish submission and photo popup open
- Fully configurable via `config.js` — no need to touch `index.html`

## Project Structure

```
birthday-site/
├── index.html          # Main page (HTML/CSS/JS all in one)
├── config.js           # All user-editable settings (names, date, photos, music, Supabase)
├── README.md           # This file
├── .gitignore          # Git ignore rules
├── assets/
│   ├── audio/          # Drop birthday.mp3 here (referenced in config.js)
│   └── images/
│       └── gallery/    # Drop party photos here (referenced in config.js)
```

## Configuration

Edit `config.js` — everything you can change lives there:

```js
window.BDAY_CONFIG = {
  childName: "Rishvik Mankkar",
  firstName: "Rishvik",
  age: 5,
  eventDate: "2026-11-26T15:00:00",   // party date & time, local time
  eventDateLabel: "Wednesday, 26 November 2026",
  eventTime: "3:00 PM",
  location: "123 Celebration Lane, Anytown",
  gallery: [
    "assets/images/gallery/photo1.jpg",
    "assets/images/gallery/photo2.jpg",
    // add more photos as needed
  ],
  audioFile: "assets/audio/birthday.mp3",
  supabase: {
    url: "https://YOUR_PROJECT_REF.supabase.co",
    anonKey: "YOUR_PUBLIC_ANON_KEY",
    table: "wishes"
  }
};
```

- **Gallery photos:** drop JPG/PNG files into `assets/images/gallery/` and list their filenames in `config.js` under `gallery`.
- **Music:** drop an MP3 into `assets/audio/` and set `audioFile`. A built-in heroic tune plays until your file is available.
- **Supabase (optional):** for shared guestbook wishes across all visitors. Create a Supabase project, set up a `wishes` table with RLS enabled for public inserts, and paste your URL + anon key into `config.js`. If left as placeholders, wishes save to browser `localStorage` only.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `birthday-site`).
2. Push this folder's contents to the repo.
3. In the repo settings, go to **Pages** → set source to **Deploy from a branch** → select `main` (or `master`) and `/ (root)`.
4. Your site will be live at `https://<your-username>.github.io/birthday-site/`.

## Local Development

Just open `index.html` in your browser. No build step, no dependencies.

## Accessibility

- The photo popup supports `Escape` to close, backdrop click to close, and ARIA dialog attributes.
- `prefers-reduced-motion` is respected (confetti and looping animations are disabled).
- The tune only starts after a user interaction (browser autoplay policy).

## License

Personal use — build it for your own birthday celebration.