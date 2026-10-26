# Manishree Residency

A responsive editorial website for the private Manishree Residency stay in Patrakar Puram, Gomti Nagar, Lucknow. It uses the Sites Vinext starter already configured for this project.

## Run locally

Requires Node.js 22.13 or later.

    npm run dev

Open the local URL printed by the command. The main routes are /, /the-stay, /gallery, /our-story, /explore-lucknow, /contact, /privacy and /terms.

## Verify and build

    npm run lint
    npx tsc --noEmit
    npm run build

## Enquiry email

The form validates on the server, checks dates and occupancy, uses a honeypot and applies a short-lived per-isolate rate limit. It does not store enquiry details. Email delivery is intentionally unavailable until the owner supplies and configures:

- RESEND_API_KEY
- ENQUIRY_TO_EMAIL
- ENQUIRY_FROM_EMAIL (a sender verified with Resend)

For local Worker development, copy .dev.vars.example to .dev.vars and fill the values locally. For production, set the values as private runtime secrets/variables in the hosting environment. Do not commit .dev.vars or real credentials. With any value missing, the form returns a configuration-required state and directs guests to Airbnb.

The current rate limit is an in-memory Worker-isolate safeguard. It is best-effort across distributed isolates and does not replace a platform-wide WAF rule or shared rate-limit store for a high-volume public launch.

## Owner content

lib/site-data.ts is the single source for the Airbnb and Instagram links, residence facts, spaces, amenities, FAQ content, neighbourhood map searches and review summary. The public listing was checked on 26 October 2026; volatile facts should be checked again before launch.

The local image library contains clearly labeled generated atmosphere images and one attributed Lucknow landmark photo. None of the generated images represents the residence. See the full origin, permission and crop record in docs/asset-manifest.md.

Before launch, the owner should:

1. Supply owner-approved high-resolution photographs of The Sun Room, The Sky Room, The Lounge, The Kitchen and The Courtyard, confirm reuse permission, and map each photo to its real space. Until then, the public website is not ready for a photography-complete commercial launch; generated imagery is explicitly illustrative.
2. Supply the authorized high-resolution logo. The current seal and wordmark are typographic fallbacks, not a recreation of the original handwritten logo.
3. Provide a verified enquiry recipient and sender identity, then configure the email secrets.
4. Review the guest-facing terms and privacy information and confirm current house rules, accessibility, amenities and stay details.
5. If moving to a custom domain, update SITE_URL in lib/site-data.ts and verify the canonical metadata. The current hosted domain is public and robots.txt allows indexing; verify the domain in Google Search Console and submit /sitemap.xml when ready.
6. Add a privacy-conscious analytics service only if the owner requests one and has reviewed its consent requirements. No analytics are installed.

## Hosting

This project is published publicly at https://manishree-residency-lucknow.deeploach33.chatgpt.site. Hosting-specific IDs are stored in .openai/hosting.json; keep the manifest with this source. The Site workflow handles source pushes, build packaging and deployment.

For Vercel, `vercel.json` selects the Next.js framework and uses `npm run build:vercel` so Vercel builds the App Router app instead of the Cloudflare Worker output used by the Sites workflow. Set the Vercel project root to this repository's root and redeploy to restore `manibnb.vercel.app`.

## Visual asset provenance

Images are self-hosted under public/images/ in hero, lifestyle and location folders. Four new generated WebP still lifes are optimized locally, alongside the initial generated linen mood image and an unchanged CC BY 2.5 photograph of Bara Imambara with visible attribution. No Instagram screenshots, Airbnb-hosted image URLs, guest photographs or unlicensed room images are included.
