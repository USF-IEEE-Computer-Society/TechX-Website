<h1 align="center" id="title">TechX Website</h1>

<p align="center">
  <img src="https://www.techxflorida.com/assets/techx-2-BFdz3Mzj.webp" width="750" />
</p>


### Official website for the TechX Florida Conference

### Live website
<a href="https://techxflorida.com" target="_blank">techxflorida.com</a>

### Event report (TechX Florida 2025)
- **Report page**: <a href="https://www.techxflorida.com/2025/report" target="_blank">techxflorida.com/2025/report</a>
- **Detailed report (PDF-style pages)**: <a href="https://www.techxflorida.com/2025/detailed-report" target="_blank">techxflorida.com/2025/detailed-report</a>

#### Highlights from the report
- **Date & host**: November 8th, 2025 • University of South Florida • IEEE Computer Society Student Branch at USF
- **Attendance**: 500+ registrations → **336 check-ins**
- **Reach**: attendees from **9 educational institutions** across the US; ~**40%** industry professionals (Tampa Bay Area)
- **Agenda**: **11 presentations**, a “Careers in Tech” panel, and ~**5 hours** of career fair opportunities

### What this repo contains
- **Marketing site**: single-page app with year-based routing (`/2025`, `/2026`)
- **Key pages**:
  - **Home**: `/2025`
  - **Schedule**: `/2025/schedule`
  - **Report**: `/2025/report`
  - **Detailed report**: `/2025/detailed-report`
- **Media-heavy content**: optimized images (`.webp`) and a photo mosaic experience

### Tech stack
 
![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) 
![TypeScript](https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)
  
### Local development
#### Prerequisites
- **Node.js** (recommended: latest LTS)

#### Install & run
```bash
npm install
npm run dev
```

#### Image tooling (repo scripts)
This repo includes scripts used to optimize the photo-heavy website assets:
```bash
npm run img:webp
npm run img:resize-mosaic
npm run img:crop
```

### Deployment notes
- Built with **Vite** and deployed as a SPA to Vercel.
- `vercel.json` rewrites all routes to `index.html` so deep links like `/2025/report` work in production.

![cover.jpeg](https://techxflorida.com/cover.jpg)

