# Cloudflare Deployment Guide

## Setup Instructions

### 1. Build the Project
```bash
npm run build
```

### 2. Deploy to Cloudflare Workers
```bash
npm run deploy
```

## Media Files Setup (Two Options)

### Option A: Use Cloudflare R2 (Recommended for Large Files)

1. **Create an R2 bucket in Cloudflare Dashboard:**
   - Go to R2 > Create Bucket
   - Name it: `holiday-fire-media`

2. **Generate R2 API Token:**
   - Account Settings > API Tokens > Create token
   - Set permissions for R2

3. **Upload media files via R2 dashboard or CLI:**
   ```bash
   # Install wrangler if needed
   npm install -g wrangler

   # Upload files
   wrangler r2 object put holiday-fire-media/fireplace.mp4 --file ./public/fireplace.mp4
   wrangler r2 object put holiday-fire-media/christmas-music.mp3 --file ./public/christmas-music.mp3
   ```

4. **Update media URLs in App.tsx:**
   Replace the source URLs with your R2 public URLs:
   ```
   https://r2.youraccount.com/fireplace.mp4
   https://r2.youraccount.com/christmas-music.mp3
   ```

### Option B: Serve from `/public` Directory

1. **Add media files to `/public` folder:**
   - Download/create `fireplace.mp4` and `christmas-music.mp3`
   - Place them in `/public/`

2. **Update wrangler.json** (already configured):
   - Assets directory is set to `./dist/client`
   - Public files are included in the build output

3. **Ensure wrangler config handles static files** (already done)

## Free Media Resources

### Fireplace Videos
- [Pexels](https://www.pexels.com) - Search "fireplace" or "christmas fireplace"
- [Pixabay](https://pixabay.com) - Free HD videos
- [Unsplash](https://unsplash.com/napi/videos/search) - Premium quality

### Christmas Music (Public Domain/CC Licensed)
- **Frank Sinatra, Henry Mancini Collections:**
  - Spotify API for stream embeds
  - YouTube Music API
  - [Free Music Archive](https://freemusicarchive.org)
  - [Incompetech](https://incompetech.com) - Royalty-free Christmas music

## Deployment Checklist

- [ ] Build project: `npm run build`
- [ ] Add fireplace.mp4 to `/public`
- [ ] Add christmas-music.mp3 to `/public`
- [ ] Update media URLs in App.tsx (if using R2)
- [ ] Deploy: `npm run deploy`
- [ ] Verify deployment at your Cloudflare Workers URL

## Notes

- Video should be in MP4 format (widely supported)
- Audio should be in MP3 format for compatibility
- Consider compression for faster loading:
  - Video: Use HandBrake or FFmpeg
  - Audio: Compress to 128kbps MP3
- Cloudflare Workers auto-caches static assets
