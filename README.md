# DataIndia

India's public data, explained simply — modeled after USAFacts and
DataUSA, built for an Indian audience. Next.js (App Router), React,
Tailwind CSS.

## What's included

- `/` — homepage: static "this week's key numbers" block, explainer cards,
  topic tiles, monthly digest signup
- `/economy` — repo rate, inflation, GDP, fiscal deficit
- `/population` — census and demographic data
- `/states` — state-by-state comparisons
- `/health` — public health spending and outcomes
- `/india-vs-world` — comparisons using World Bank data
- `/about` — brand story
- Example article template: `/economy/repo-rate`

No live ticker, no news API, no third-party calls on page load. All
numbers are hardcoded in the page content. Update them by editing the
relevant page file whenever you refresh your data (monthly is plenty for
most of this), then redeploy — this avoids any API rate-limit issues
entirely, since you're the only one ever calling an API, not your
visitors.

## Local setup

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Free data sources to pull from periodically

- data.gov.in — register for a free API key at data.gov.in, no cost, no
  approval wait
- World Bank API — fully open, no key required, good for
  `/india-vs-world` comparisons
- RBI's Database on Indian Economy (DBIE) — free, for repo rate,
  inflation, forex reserves history

## Deploying to connectsangam.in for free

1. Push this project to a GitHub repository.
2. Go to Cloudflare Pages (or Vercel/Netlify), connect the repo.
3. Build command: `npm run build` — framework preset: Next.js.
4. Point your connectsangam.in DNS at the hosting provider following
   their custom domain setup instructions.

## Adding new content

Each article is a folder + `page.tsx` under the relevant topic folder
(`app/economy/`, `app/population/`, etc.) — copy the structure of
`app/economy/repo-rate/page.tsx` as a starting template.

## Design tokens

- Colors: paper `#F5F6F2`, ink `#14202B`, indigo `#2C3E6B` (economy/states),
  saffron `#C97A16` (health), teal `#1E7A6B` (population/world) — see
  `tailwind.config.ts`
- Fonts: Fraunces (display/headings), IBM Plex Sans (body), IBM Plex Mono
  (labels, numbers, nav)
- Signature element: the `Confluence` component — two lines merging into
  one, used under the homepage hero
