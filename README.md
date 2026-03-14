# Subhro Chatterjee — Portfolio

Built with **Next.js 14** + **Tailwind CSS** + **TypeScript**.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# Open http://localhost:3000

# 3. Build for production
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles + Tailwind directives
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx        # Fixed top navigation
│   ├── Hero.tsx          # Landing hero section
│   ├── About.tsx         # About me section
│   ├── Skills.tsx        # Tech stack grid
│   ├── Career.tsx        # Timeline - work + education
│   ├── Projects.tsx      # Featured projects grid
│   ├── Contact.tsx       # Contact section
│   ├── Footer.tsx        # Footer
│   └── Cursor.tsx        # Custom animated cursor
├── tailwind.config.ts    # Tailwind config with custom tokens
├── postcss.config.mjs    # PostCSS config
├── next.config.mjs       # Next.js config
└── tsconfig.json         # TypeScript config
```

## 🌐 Deploy to Netlify

1. Push this folder to a GitHub repo
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variable: `NEXT_PUBLIC_SITE_URL=https://yoursite.netlify.app`

Or use the Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## ✏️ Customisation

- **Personal info**: Edit `components/Hero.tsx`, `components/About.tsx`
- **Career**: Edit the `timeline` array in `components/Career.tsx`
- **Projects**: Edit the `projects` array in `components/Projects.tsx`
- **Skills**: Edit `skillCategories` in `components/Skills.tsx`
- **Colors**: Edit `tailwind.config.ts` → `theme.extend.colors`
- **Your photo**: Replace the initials block in `Hero.tsx` with an `<Image>` tag pointing to your photo in `/public`

## 📄 License

MIT License

Copyright (c) 2026 Subhro Chatterjee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
