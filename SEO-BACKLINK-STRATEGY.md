# Westfield (staywestfield.uk) — SEO & Backlink Strategy

This accompanies the new page set built for the site. It covers what was built, how to deploy it, and — separately — a concrete, real-world backlink and outreach plan, since backlinks have to be placed on *other* websites and can't be created by editing your own HTML.

---

## 1. What was built

Your site was a single page (`index.html`) with anchor sections. It's now a small, properly-linked site:

| Page | File | Targets |
|---|---|---|
| Home | `index.html` | "holiday cottage Ullswater", "Westfield Watermillock" |
| The Cottage | `cottage.html` | "holiday cottage Watermillock", "cottage with hot tub Ullswater" |
| Bedrooms | `bedrooms.html` | "3 bedroom cottage sleeps 6 Ullswater" |
| Location | `location.html` | "Watermillock", "cottage near Ullswater", getting-here queries |
| Ullswater | `ullswater.html` | "Ullswater", "Ullswater Steamers", "Aira Force", "Dalemain" |
| Walking | `walking.html` | "Ullswater Way", "walks near Ullswater", "Helvellyn" |
| Things to Do | `things-to-do.html` | "things to do near Ullswater / Watermillock" |
| Food & Drink | `food-drink.html` | "Brackenrigg Inn", "where to eat near Ullswater" |
| Gallery | `gallery.html` | brand/visual queries, image search |
| Booking | `booking.html` | "book Westfield", "availability", FAQ rich results |

**Why separate pages, not just anchors:** Google indexes and ranks *pages*, not sections of a page. A single page can only realistically rank for one or two phrases; ten focused pages, well linked together, can rank for ten (or more) different search intents — and each becomes a landing page you can point ads, social posts or press mentions at directly.

**Internal linking model used (pillar → cluster):** Home links to every page; every page links back to Home, to Booking, and to 2–3 related pages via the "Continue exploring" cards at the bottom; the footer on every page lists all ten pages; the mobile menu lists all ten pages too, so search engines can always crawl the whole site from any single page.

### Technical SEO included on every page
- Unique `<title>` and meta description per page, written for the specific search intent.
- Self-referencing `<link rel="canonical">` on every page.
- Open Graph + Twitter card tags for link-preview quality on social/WhatsApp shares.
- `BreadcrumbList` structured data on every subpage; `FAQPage` structured data on the Booking page (eligible for FAQ rich results); the existing `VacationRental` structured data kept on Home.
- Descriptive, keyword-relevant `alt` text on every image (helps Google Image search traffic).
- Shared `assets/styles.css` and `assets/site.js` instead of one large inline `<style>`/`<script>` repeated on every page — smaller pages, faster loads, one file to update. Page speed is a ranking factor, so this is a genuine (small) SEO win, not just tidiness.
- `sitemap.xml` and `robots.txt` added at the root — submit the sitemap in Google Search Console (see §3).

### Content
Each page has original, non-duplicate copy grounded in real, checkable facts about the area (Ullswater Steamers' four piers, the Ullswater Way's history, Aira Force, Dalemain, Lowther Castle, Rheged, the Brackenrigg Inn/Another Place, local watersports operators including Ullswater Paddleboarding — which is based in Watermillock itself). Outbound links point to the *official* sites for these (National Trust, Ullswater Association, Ullswater Steamers, Dalemain, Ramblers, LDWA, MWIS, Visit Lake District, Lake District National Park Authority, Visit Eden) — linking out to genuinely authoritative, relevant sources is good practice for topical trust (E-E-A-T), separate from the backlink-building in §4.

---

## 2. What you need to do to deploy this

1. The `images/` folder in this download is a placeholder — it does **not** contain your real photos. None of the image filenames were changed (`logo.JPG`, `ullswater_panoramic.jpg`, `hot_tub_deck.jpg`, `w_dog_bench.jpg`, `dining_ullswater_view.jpg`, `views_around_westfield.jpeg`, `selfie.jpg`), so you can simply upload the new HTML files and the `assets/` folder into your existing site root, next to your existing `images/` folder, without touching your current images.
2. Upload `sitemap.xml` and `robots.txt` to the site root too.
3. A few pages (Bedrooms, Walking, Food & Drink) currently reuse existing photos because no new images were supplied. These pages would benefit most from dedicated photos — see the content ideas in §5.
4. The Booking page embeds your InnStyle calendar a second time, directly in the page body (in addition to the existing slide-over panel). Please check that it renders correctly on your host before relying on it — if InnStyle's script doesn't support two embeds on one page, keep the slide-over version and drop the inline one.

---

## 3. Search Console & directory setup (do this first, costs nothing)

- **Google Search Console** (search.google.com/search-console): verify `staywestfield.uk`, submit `sitemap.xml`, and request indexing for the new pages once live. This is the single highest-value free step — it's how Google finds and evaluates the new pages fastest.
- **Google Business Profile**: if you don't already have one for Westfield, create one (category: "Holiday home rental" / "Vacation home rental"). It's free, shows in Google Maps and local search, and guest reviews there are a strong local-SEO signal.
- **Bing Webmaster Tools**: same idea as Search Console, five minutes, free traffic from Bing/Copilot.

---

## 4. Backlink & outreach action plan

Important distinction: everything in Part 1 is *on your own site* and helps Google understand and rank your pages. A **backlink** is a link *on someone else's site* pointing to yours — that has to be earned or arranged directly with that other site; it can't be created by editing your own HTML. Below is a concrete, real-world list matched to the categories you asked about, with actual organisations and URLs found for you.

### Ullswater Association — do this one first
- **ullswater.org** is the official tourism-membership body for the whole valley.
- Self-catering membership is **£150/year** (covers up to 6 units) and includes a listing + photo gallery on ullswater.org, inclusion in the printed Visit Ullswater leaflet (circulation ~60k), and access to their blog/press-release distribution.
- This is the single best-matched, most locally relevant backlink available to you — a genuine local tourism body linking to a genuine local cottage.
- Join at: https://www.ullswater.org/membership/

### Visit Lake District / Cumbria Tourism directories
- **visitlakedistrict.com / golakes.co.uk** — both run by Cumbria Tourism, the official Destination Management Organisation for the county. Business membership gets you a listing (and backlink) in their accommodation directory, seen by a large volume of pre-trip searchers.
- **visiteden.co.uk** — the tourism site for Eden district specifically (where Watermillock sits) — smaller, hyper-local, worth a listing enquiry.

### Cottage & accommodation directories
- **Sykes Cottages, Cottages.com, Independent Cottages, Cool Stays** — major UK self-catering directories/OTAs. Even where these are primarily booking-fee platforms, a profile with a link back to staywestfield.uk is standard and worth having for both referral traffic and the backlink itself.
- **Sally's Cottages** (sallyscottages.co.uk) — a Lake District specialist agency that also publishes area guides (their "Things to do in Ullswater" guide came up repeatedly in research) — worth approaching both as a listing agency and as a potential guide-mention.

### Local activity & watersports providers (genuinely local — good for reciprocal/partner links)
- **Ullswater Paddleboarding** — based at The Sheep Shed, Watermillock, i.e. your own village. A natural local partnership: offer their guests a returning-guest discount at Westfield, or simply ask to be added to any "where to stay" page they maintain, in exchange for recommending them on your Things to Do page (already done).
- **Glenridding Sailing Centre**, **Ullswater Yacht Club / Sailing School**, **St Patrick's Boat Landing**, **Lakeland Boat Hire**, **Tall Bloke Adventures** — all real, current operators around the lake. Worth a short email introducing Westfield and asking if they maintain an "accommodation partners" or "where to stay" page.

### Local businesses (partnership / cross-promotion)
- **The Brackenrigg Inn** and **Another Place, The Lake** — both in Watermillock, i.e. on your own doorstep. A short, friendly email ("we're just up the road, would you be open to a link exchange or mention on each other's sites?") is a realistic ask given the shared location.

### Walking / outdoors websites
- **Ramblers** (ramblers.org.uk) and the **Long Distance Walkers Association** (ldwa.org.uk) — not directly link-sellers, but both maintain route pages for the Ullswater Way; a polite note pointing out Westfield as accommodation directly on the route is worth sending to any local Ramblers group.
- **Walking/blog sites** that already write about the Ullswater Way (walkingenglishman.com, walkingbritain.co.uk, go4awalk.com, andrewswalks.co.uk) — several are personal/independent sites that do accept accommodation mentions or links; worth a polite outreach email offering a complimentary stay in exchange for an honest write-up.

### Local press
- **Cumberland & Westmorland Herald** (cwherald.com) — the long-established weekly for the Penrith/Eden area.
- **Cumbria Crack** (part of the same publisher, Barrnon Media) — the county's largest breaking-news website, online-only, generally more open to local-business stories than the print paper.
- A realistic angle for a story pitch: "new/refreshed luxury self-catering cottage with hot tub opens in Watermillock" — local papers regularly run short business features like this, especially with a couple of good photos attached.

### Travel blogs
- Reach out to 3–5 Lake District/UK staycation bloggers (search "Lake District travel blog" or "Ullswater blog") offering a complimentary or discounted stay in exchange for an honest review and a link. This is standard practice in UK holiday-let marketing and is the most effective way to get genuine, editorial (non-directory) backlinks.

### Cumbria tourism resources (general)
- **Lake District National Park Authority** (lakedistrict.gov.uk) doesn't link to individual businesses, but their guided-walks and "where to stay near Ullswater" content is worth monitoring for any application process.
- **Visit England** (visitengland.com) surfaces Cumbria "gold winner" attractions — not directly accessible to individual cottages, but a reminder that a **VisitEngland/Quality in Tourism star-rating assessment** (if you don't already have one) is itself a trust signal worth having, and often unlocks eligibility for other directories.

### A simple outreach template
> Subject: Westfield, Watermillock — link/partnership?
>
> Hi [name], I run Westfield, a 3-bedroom self-catering cottage with a private hot tub in Watermillock, right by Ullswater. I've just put together dedicated pages on walking, food & drink and things to do around the lake ([link]), and [their business/route/article] is one of the things I've recommended to our guests. Would you be open to a link back from [their page], or listing us as a nearby place to stay? Happy to do the same in return. Thanks, [name]

---

## 5. Content ideas for when you have more photos

- **Bedrooms** — one photo per bedroom would let that page stand entirely on its own for "sleeps 6" searches.
- **Walking** — a photo taken from a footpath near the cottage, and one from the Aira Force or Hallin Fell walk, would strengthen `walking.html` considerably.
- **Food & Drink** — even one exterior shot of the Brackenrigg Inn or the terrace at Another Place (with permission, or your own photo taken as a customer) would help.
- **Seasonal shots** — the hot tub in winter with snow on the fells behind it is a strong, shareable image and a good hook for a local press story (see §4).

---

## 6. Ongoing (do quarterly)
- Add 1–2 new photos to the Gallery page each season.
- Check `sitemap.xml`/Search Console for crawl errors after any file changes.
- Ask happy guests to leave a Google review on your Business Profile — recent, genuine reviews are one of the strongest local-SEO signals and cost nothing.
- Revisit the backlink list above once a year — memberships (Ullswater Association, Cumbria Tourism) need renewing, and new local businesses appear.
