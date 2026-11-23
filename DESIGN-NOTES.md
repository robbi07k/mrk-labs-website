# MRK Labs Design Notes

## Applied recommendations
- **Direction:** Premium, enterprise-accessible AI and business automation studio; dark midnight surfaces with restrained cyan and blue accents.
- **Style:** Clear professional hierarchy, visible focus states, high text contrast, and 44px minimum controls.
- **Pattern:** Outcome-led hero, five service categories, project process, practical use cases, studio principles, FAQ, and low-friction WhatsApp CTA.
- **Theme comparison:** Header control lets visitors switch between the original midnight-navy theme and a light theme; selection persists locally.
- **Header contrast:** The Navy page uses white navigation text and wordmark on solid blue `#0B3B78`; the White page uses dark navigation text and wordmark on pale blue-white `#F5F8FC`. Navigation links stay in the header; the burger menu contains only the language control above the theme control in a compact panel. Both controls preserve at least 44px touch targets.
- **Header surface:** The Navy page header uses solid blue `#0B3B78`; the White page header uses pale blue-white `#F5F8FC`. Both retain a soft lower edge; mobile navigation follows each page theme.
- **Light-theme contrast:** Uses deep blue-green accents, darker secondary copy, defined card borders, richer blue-tinted card surfaces, and darkened showcase artwork to keep text and controls distinct.
- **Blue surfaces:** In White mode, the 15 service, use-case, principle, and partnership cards use solid blue `#2163C5` with white text, matching the supplied color reference. The primary buttons and hero dots reuse this solid blue; dot opacity is increased in White mode for visibility. The showcase retains its gradient.
- **Theme balance:** The process markers invert for contrast; the partnership note follows the standard panel palette in each theme and uses brand-centered copy.
- **Video:** A local, user-initiated 16:9 introduction sits between the hero and services in a macOS-inspired player frame; native controls, a frame-derived poster, and metadata-only preload are retained.
- **Palette:** Deep midnight navy `#061225`, secondary navy `#0A1930`, soft-white text `#F4F7FC`, electric cyan `#08B9F2`, and electric-blue CTA `#2563EB`.
- **Typography:** System sans-serif stack only (`system-ui`, Segoe UI, sans-serif). Headings use 800 weight and compact tracking; body text remains 16px minimum and uses 1.65–1.75 line-height.
- **Spacing:** 4/8px-based rhythm, 16px card radius, 20–56px responsive gutters, and 64–88px section spacing.
- **Effects:** Subtle radial and linear gradients, restrained cyan glow, 16px glass-style card borders, and small elevation changes.
- **Motion:** 180ms button/card transitions and a 520ms scroll fade-up. The hero-anchored Canvas 2D particle wave fades into Services, is density-limited, pauses while hidden or offscreen, and stays static for reduced-motion preferences. Five distinct SVG/CSS service scenes rotate in the hero showcase; inactive scenes stop animating, manual controls pause rotation, hidden tabs pause motion, and reduced-motion preferences disable it.
- **AI pilot badge:** Uses a 12px corner radius for a rounded-rectangle shape in both themes rather than a full pill.
- **Accessibility:** Skip link, visible keyboard rings, semantic headings, inline SVG with decorative `aria-hidden`, summary details, and reduced-motion fallback.

## Hard-constraint overrides
- Rejected the skill's pure-black OLED direction: the project must not be pure `#000000`.
- Rejected external Google font imports: the site uses no CDN or external font files.
- Rejected the skill's suggestions for proof/logos/case studies and pricing tiers because the project has no fake metrics or testimonials.
- Rejected retro-futurism and neumorphism results: they conflict with modern enterprise clarity and can reduce contrast or add unnecessary visual noise.
- Kept the skill's accessible/dark and low-cost motion recommendations.

## Anti-patterns avoided
- No emoji icons or stock illustrations.
- No fake metrics, client logos, testimonials, or unverifiable guarantees.
- No low-contrast muted body copy or color-only status indicators.
- No invented customer results, metrics, client logos, or business credentials.
- No site-wide full-screen animation, animating layout dimensions, or blocking interactions; the decorative particle wave stays anchored to the hero and fades out shortly into Services.
- No external trackers, build tools, web fonts, or JavaScript-dependent default copy.
