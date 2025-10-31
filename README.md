
Drew's Auto & Truck Repair - Vercel-ready React (Vite + Tailwind) project
=======================================================================

How to run locally
------------------
1. Install dependencies:
   npm install

2. Start development server:
   npm run dev
   (Open http://localhost:5173)

Build & Preview
---------------
1. Build:
   npm run build

2. Preview production build:
   npm run start

Deploy to Vercel (one-click)
----------------------------
1. Create a free account at https://vercel.com.
2. In Vercel dashboard, choose 'New Project' -> 'Import from Git' (or drag & drop this folder).
3. If you import from GitHub, push this project to a GitHub repo and connect it in the import flow.
4. Vercel will detect the Vite project. Use the defaults:
   - Build command: npm run build
   - Output directory: dist
5. Deploy. Your site will be live at a vercel.app url (you can customize).

Notes
-----
- The logo file is included at /public/business-logo.jpg (replace if you want).
- Forms currently show a confirmation message client-side; no emails are sent.
