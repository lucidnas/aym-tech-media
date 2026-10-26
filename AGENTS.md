# AGENTS.md: AYM rules for every agent (Claude, Codex, Cursor, etc.)

Read this before doing anything in this repo. `HANDOFF.md` has current status and open tasks; this file has the rules that don't change task to task. The same rules live in the `aym-tech-media` repo's AGENTS.md; keep them in sync.

## Hard rules
- **Never send, post, publish, pay or sign up without Abdul's explicit OK** for that specific action. Draft and show first.
- **Never publish Abdul's personal phone number or home address.** Use a business line or Calendly.
- **Never claim a business as a client unless it is one.** Sparkly and Loomi are spec/sample work only.
- **Never invent facts** (names, numbers, reviews, results). If a fact is unverified, say so or leave it out. Sparkly's contact name is unverified: greet "Hi Sparkly team".
- **Only promise what's in "Offer" below.** No new guarantees, prices or deadlines without Abdul's OK.
- Secrets never go in git. Media (mp4/mp3) lives in Google Drive (`nas2663:aymtechmedia/`), not git.

## Brands
- **AYM Tech Media** (aymtechmedia.com, abdul@aymtechmedia.com): the client-facing brand for websites, ads & video, and social media for local businesses. Not "AYM Studio" or "AYM Explains".
- **AYM Cloud Systems** (aymcloudsystems.com): separate business (cloud, APIs, application modernization; MyeloMetrix). Never mix the two: no AYM Tech Media colours, email or "parent company" lines on Cloud Systems, and vice versa (except one footer link from AYM Tech Media).
- Based in Milwaukee, serving businesses anywhere.
- Founder: **Abdul** (first name only on sites). LinkedIn: https://www.linkedin.com/in/abdulnasirmohammed is the proof of experience.

## Offer (AYM Tech Media), decided 2026-10-25
- **Lead magnet:** a free custom video ad for their business, delivered **within 24 hours**, theirs to keep, no obligation. (Proven: an ad in under an hour; up to ~5 ads a day.)
- **Positioning:** "We become your marketing department": website, ads and social media, done for you.
- **Try first, no guarantee:** they test the free ad on their own customers. If it works, they come back for more; if not, they paid nothing. Do NOT promise results, inquiries, engagement or any "work free until" guarantee.
- **Risk reversal:** no long-term contracts; the client owns everything we build.
- **Next step:** 15-minute call, https://calendly.com/aymtechmedia/discovery-call
- Price: not public yet (discussed on the call).

## How to write (site copy, emails, ads, listings)
Follow `docs/offer-and-messaging.md`. In short:
1. **Hormozi Value Equation:** maximise the dream outcome (a full schedule) and perceived likelihood (free work made for them that they can test, real person), minimise time (24 hours) and effort (done for you).
2. **Give value first:** lead with something made for them (ad, mockup, specific fixes), then one small ask.
3. **Speak the customer's words, about their pain:** slow weeks, relying on referrals, no time for marketing, phone not ringing. Pull phrases from their reviews. No jargon ("leads funnel", "conversion", "quotes"), no agency-vs-agency talk.
4. **Statements, not rhetorical questions.** Professionally casual tone.
5. **Buttons say what they get, first person:** "Get my free ad".
6. **Be specific and true:** numbers and claims must be real.
7. Emails: specific subject, value in line 1, bullets, "test it free" line, one CTA (Calendly), honest P.S. urgency only if real.

## Design
- AYM Tech Media: dark #07080b, Instrument Serif headlines, Geist body, glass cards; logo = Apex "A" (coral #ff6a3d left stroke, teal #2dd4bf right stroke, amber #f5b544 dot), files in `aym-tech-media/public/brand/`.
- AYM Cloud Systems: same quality bar, own accent sky blue #6ea8ff (never coral/teal/amber).
- Check every page at phone width before calling it done. Never hide content behind JS scroll reveals.

## Tools
- Email: Zoho Mail MCP, accountId `4809495000000008002` (can send, can't draft; never send without OK).
- Deploy steps: see `HANDOFF.md` (Cloud Systems deploys from `dist/cloud`, never `dist/client`).

## This repo (aym-tech-media): builds both websites
- One React/Vite app; it picks AYM Tech Media vs AYM Cloud Systems by hostname (`src/App.jsx`). AYM Tech Media page: `src/components/UmbrellaSite.jsx` + `umbrella.css`. Cloud Systems: `src/components/DesignDirections.jsx` (`FinalSite` and inner pages) + `directions.css` + `cloud-premium.css` (premium layer).
- `npx vite build` → `dist/client` (aymtechmedia.com) and `dist/cloud` (aymcloudsystems.com with its own static title/meta/share image).
- Only files listed in `vite.config.js` are copied from `public/`; add new public folders there.
- Deploy: copy the right dist folder into `/Volumes/SSK SSD/aym-studio-ads/_deploys/<aymtechmedia|aym-cloud>/`, then `npx wrangler@3 pages deploy <dir> --project-name <aymtechmedia|aym-cloud-systems> --branch main --commit-dirty=true`. Preview first with `--branch services-preview` / `premium-preview`, check desktop + phone, then go live with Abdul's OK.
- Active branch: `feat/studio-design-umbrella`. Business docs, outreach and the offer playbook live in the `aym-studio-ads` repo (github.com/lucidnas/aym-studio-ads).
