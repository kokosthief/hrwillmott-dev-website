# Henry Willmott Portfolio Website

Personal portfolio site for Henry Willmott - Full-Stack Dev & Context Engineer based in Amsterdam.

**Live:** https://dev.hrwillmott.com

## Tech Stack

- Next.js 16 with Turbopack
- React 19
- Tailwind CSS 3
- next-themes for dark mode

## Project Structure

```
components/       # React components
constants/        # Shared data (userData in data.js)
pages/            # Next.js pages
public/           # Static assets (images, videos)
styles/           # CSS/Tailwind
```

## Key Files

- `constants/data.js` - Master data file containing projects, experience, social links, contact info
- `components/FavouriteProjects.js` - Homepage featured projects (hardcoded selection)
- `components/Projects.js` - Full projects grid (reads from data.js)
- `components/Contact.js` - Contact page with copy-to-clipboard for email/phone

## Adding Projects

1. Add image/video to `/public/`
2. Add entry to `projects` array in `constants/data.js`:
   ```js
   {
     title: "Project Name",
     link: "https://project-url.com",
     imgUrl: "/image-filename.ext"
   }
   ```
3. Optionally update `FavouriteProjects.js` to feature it on homepage

## Current Projects (14)

1. Rope Access Network - Job matching for rope access pros
2. Vaarbewijs Pro App - Dutch boating license study app (iOS)
3. Odessa Team Management App
4. DJ Henners
5. ROPACS
6. Alfa Society Dapp
7. AlphaBotCalls
8. CUE to Text Converter
9. Tweet Signal
10. DeFi-Robot Website
11. This Portfolio
12. DeFi-Robot Documentation
13. A-Bike Spain Shop
14. Roetz-Bikes Landing Page

## Development

```bash
npm run dev    # Start dev server (usually port 3000)
npm run build  # Production build
```

## Notes

- GIFs converted to MP4 for performance (team-odessa, ropacs, roetz)
- Images use Next.js Image component with AVIF/WebP optimization
- Security headers configured in next.config.js
