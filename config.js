// ============================== EDIT HERE ==============================
// Everything you can change lives in this one file. The page wires itself up
// from these values, so you don't need to touch index.html.
window.BDAY_CONFIG = {
  childName: "Rishvik Mankkar",
  firstName: "Rishvik",
  age: 5,
  eventDate: "2026-11-26T15:00:00",   // party date & time, local time
  eventDateLabel: "Wednesday, 26 November 2026",
  eventTime: "3:00 PM",
  location: "123 Celebration Lane, Anytown",   // <-- replace with your party address
  gallery: [
    "assets/images/gallery/photo1.jpg",
    "assets/images/gallery/photo2.jpg",
    "assets/images/gallery/photo3.jpg",
    "assets/images/gallery/photo4.jpg",
    "assets/images/gallery/photo5.jpg",
    "assets/images/gallery/photo6.jpg"
  ],
  audioFile: "assets/audio/spiderman_1.mp3",   // drop MP3s here; a built-in tune plays until then
  audioFiles: [                              // list multiple MP3s; a random one plays on each click
    "assets/audio/spiderman_1.mp3",
    "assets/audio/spiderman_2.mp3",
    "assets/audio/spiderman_3.mp3"
  ],
  supabase: {
    url: "https://YOUR_PROJECT_REF.supabase.co",   // <-- paste your Supabase project URL
    anonKey: "YOUR_PUBLIC_ANON_KEY",                // <-- paste your Supabase public anon key
    table: "wishes"
  }
};
// =======================================================================
