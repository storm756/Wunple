# Wunple Pet Care

A responsive Next.js storefront for Wunple pet-care products, with Home, About Us, and Contact Us pages.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- CSS (responsive, no UI framework)

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production

```bash
pnpm build
pnpm start
```

## Image replacement guide

Replace the files in `public/images/` while keeping the filenames unchanged:

| File | Placement |
| --- | --- |
| `homepage-hero.png` | Home page hero banner |
| `product-coat-ease.png` | Coat Ease product cards |
| `product-itch-relief.png` | Itch Relief product cards |
| `about-contact-hero.png` | About Us and Contact Us hero banners |

The founder, team, home information-banner, and blog visuals are intentionally styled placeholders until final images are available.

## Contact form

The current contact form validates browser input and shows a success message. Connect it to an email service or database before collecting real customer enquiries.
