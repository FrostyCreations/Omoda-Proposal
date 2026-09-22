# OMODA | JAECOO The Glen – Digital Marketing Proposal

Client review site for the Big On Digital proposal to OMODA | JAECOO The Glen. React + Vite, deployed on Vercel.

## Editing

- All proposal copy, prices and images: `src/data/proposalData.js`
- Prices still awaiting confirmation are marked `pending: true` and show as "TBC"
- Section components: `src/components/dealer/`
- Dealer UI skin: `src/omoda-ui.css`
- Images: `public/glen/` (from omodajaecootheglen.co.za) and `public/brand/` (from jaecoo.co.za)

## Local

```bash
npm install
npm run dev
```

## Deploy

Vercel builds with `npm run build` and serves `dist/`. Every route falls back to `index.html` (so `/quotes` works), and all responses carry `X-Robots-Tag: noindex, nofollow` so the review site stays out of search results.
