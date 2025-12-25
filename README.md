# Holiday Fireplace - Cloudflare Workers

A cozy fireplace experience with looping video and Christmas music, running on Cloudflare Workers.

## Features

- 🔥 Full-screen fireplace video with Christmas decorations
- 🎵 Background Christmas music (Frank Sinatra, Henry Mancini style)
- 🔊 Mute/unmute toggle button
- 🚀 Deployed globally on Cloudflare Workers
- 📱 Responsive design
- ⚡ Lightning-fast performance at the edge

## Quick Start

### Local Development
```bash
npm install
npm run dev
```

### Deployment to Cloudflare
```bash
npm run build
npm run deploy
```

## Setup Media Files

See [CLOUDFLARE_SETUP.md](./CLOUDFLARE_SETUP.md) for detailed instructions on adding fireplace video and Christmas music.

### Option 1: Local Files (Simple)
1. Add `fireplace.mp4` to `/public`
2. Add `christmas-music.mp3` to `/public`
3. Deploy

### Option 2: Cloudflare R2 (Recommended for Large Files)
1. Upload media to R2 bucket
2. Update URLs in `src/react-app/App.tsx`
3. Deploy

## Project Structure

```
src/
├── react-app/          # React frontend
│   ├── App.tsx        # Main fireplace component
│   ├── App.css        # Styling
│   └── main.tsx       # Entry point
└── worker/            # Cloudflare Worker backend
```

## Built With

- [React](https://react.dev/) - UI Library
- [Vite](https://vite.dev/) - Build Tool
- [Hono](https://hono.dev/) - Backend Framework
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) - Deployment Platform

## Getting Started

To start a new project with this template, run:

```bash
npm create cloudflare@latest -- --template=cloudflare/templates/vite-react-template
```

A live deployment of this template is available at:
[https://react-vite-template.templates.workers.dev](https://react-vite-template.templates.workers.dev)

## Development

Install dependencies:

```bash
npm install
```

Start the development server with:

```bash
npm run dev
```

Your application will be available at [http://localhost:5173](http://localhost:5173).

## Production

Build your project for production:

```bash
npm run build
```

Preview your build locally:

```bash
npm run preview
```

Deploy your project to Cloudflare Workers:

```bash
npm run build && npm run deploy
```

Monitor your workers:

```bash
npx wrangler tail
```

## Additional Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/)
- [Hono Documentation](https://hono.dev/)
