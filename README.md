# Portfolio

Minimalist UI/UX designer portfolio built with Next.js (App Router) and Tailwind CSS. White background, purple accent.

## Sections

- Sticky nav with smooth-scroll anchors (About, Works, Experience, Contact)
- About: hero headline, two CTAs, social links
- Works: category tabs + symmetric bento grid (Aceternity-style hover cards)
- Experience: work history timeline
- Contact: name / email / message form

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

- Replace copy, socials, and email in `components/About.tsx` and `components/Contact.tsx`
- Edit projects in `data/projects.ts`
- Edit work history in `data/experience.ts`
- Wire the contact form's `handleSubmit` in `components/Contact.tsx` to your email/API provider
- Accent color lives in `tailwind.config.ts` under `theme.extend.colors.accent`
