Create a responsive, interactive restaurant menu website for Majjell’s using the uploaded index.html as the starting point and preserving any useful existing branding, layout logic, colors, and asset paths. This is not a landing page. Redesign it as a food-and-drink menu browsing experience centered on tappable menu cards.

Core concept

Build the interface like a stylish digital menu wall. Each food or drink is represented by a large visual card. When the user clicks, taps, or presses Enter/Space on a card, the card performs a smooth 3D flip animation and reveals the item’s description, ingredients, price, and optional labels on the back. Clicking the flipped card, pressing Escape, or selecting a close/back control flips it back to the image side.

The menu should feel warm, appetizing, playful, and polished—like browsing a curated menu board at a modern Filipino/Asian comfort-food café. Prioritize food photography, clear item names, and delightful interaction over generic marketing sections.

Visual direction

•
Use the uploaded restaurant photo as a subtle visual reference and, where appropriate, as a background or atmospheric texture. Do not let the background overpower the food cards.

•
Use the uploaded logo and brand assets if available. Keep the Majjell’s name prominent but not oversized.

•
Use the actual uploaded food and drink photos. Do not replace them with generic stock images or unrelated AI-generated images.

•
Prefer a warm palette inspired by the food photography: creamy off-white or light warm beige base, deep brown/espresso text, charcoal accents, and restrained golden, orange, or red highlights.

•
Use rounded cards with a tactile, premium menu-board feel. Add soft shadows, subtle borders, and consistent image cropping.

•
Typography should be highly readable: a distinctive but legible display face for the Majjell’s wordmark and section headings, paired with a clean sans-serif for descriptions, prices, controls, and navigation.

•
Keep the design energetic but not cluttered. Avoid a generic SaaS dashboard, conventional e-commerce product grid, or full-screen landing-page hero.

Page structure

1. Compact menu header

Create a sticky or semi-sticky header containing:

•
Majjell’s logo/wordmark

•
A short label such as “Menu” or “Food • Drinks • Pastries”

•
Category navigation buttons that scroll to or filter the menu: All, Rice Meals, Chicken & Savory, Snacks, Halo-Halo & Desserts, Drinks, Pastries

•
A compact search button or search field that filters cards by item name

•
A visually clear instruction such as “Tap a card to see details”

On mobile, make the category controls horizontally scrollable and keep the header compact.

2. Intro strip, not a landing hero

At the top of the menu, include a short welcoming strip rather than a large landing-page hero. Example copy:


“Good food, sweet moments, and favorites made for sharing.”

Include a small decorative food or logo image if it fits, but immediately transition into the menu cards. The menu should be visible near the top of the page without requiring a dramatic hero scroll.

3. Interactive menu sections

Organize the cards into clear sections with strong headings and item counts where useful. Use a responsive grid:

•
Desktop: 3–4 cards per row depending on viewport width

•
Tablet: 2–3 cards per row

•
Mobile: 1–2 cards per row, with comfortable touch targets

Each card must have the same overall dimensions within a section and should support keyboard focus.

Card design and flip behavior

Front of card

Each card front should include:

•
Food/drink image using the matching uploaded asset

•
Category badge when useful, such as “Best Seller”, “New”, “Shareable”, or “Sweet”

•
Item name

•
Price, if present in the source code or available data

•
A small affordance such as “View details” or a rotate/arrow icon

Use tasteful image overlays only when needed for legibility. Keep the food photo dominant.

Back of card

Each card back should include:

•
Item name

•
Short appetizing description in plain, friendly language

•
Main ingredients or flavor notes

•
Price

•
Optional dietary/allergen note only when known; do not invent allergy claims

•
Optional “Popular” or “Recommended” label

•
A clear “Flip back” affordance

Keep descriptions concise enough to fit without scrolling on desktop. On small screens, allow the back face to expand naturally while preserving the flip effect.

Animation requirements

•
Use a true-feeling 3D horizontal card flip with perspective and backface-visibility: hidden.

•
Duration: approximately 500–700ms with a smooth ease-in-out curve.

•
Add subtle hover lift and image zoom on desktop, but do not trigger hover-only behavior on mobile.

•
Ensure only the selected card flips; other cards remain unchanged.

•
Support click/tap, Enter, and Space to flip.

•
Support Escape and clicking the back face to return to the image.

•
Respect prefers-reduced-motion: replace the 3D flip with a simple crossfade or instant reveal when reduced motion is enabled.

•
Do not make the card flip interfere with page scrolling or category filtering.

Suggested asset mapping

Use these uploaded filenames where they match the menu item. Preserve exact filenames and existing folder paths from the supplied index.html.

Savory food

•
Burger with Fries.jpg — Burger with Fries

•
Korean Fried Chicken.jpg — Korean Fried Chicken

•
Fried Chicken.jpg — Fried Chicken

•
Fried Pork Chop.jpg — Fried Pork Chop

•
Fried Shrimp.jpg — Fried Shrimp

•
Sizzling Porkchop.jpg — Sizzling Porkchop

•
Sizzling Shrimp.jpg — Sizzling Shrimp

•
Braised Pork.jpg — Braised Pork

•
Leche Flan.jpg — Leche Flan

•
Calamares.jpg — Calamares

•
Sisig Platter.jpg — Sisig Platter

•
Lumpiang Shanghai.jpg — Lumpiang Shanghai

•
Mais Con Yelo.jpg — Mais Con Yelo

Halo-halo and desserts

•
HaloHalo Bulk Order.jpg — Halo-Halo Bulk Order or Halo-Halo feature

•
Special Halo-Halo.jpg — Special Halo-Halo

•
HaloHalo with logo picture.jpg — Halo-Halo branded feature

•
halo halo-highlight.png — Halo-Halo highlight card

•
Chapsuey.jpg and Chapseuy 2.jpg — Chapsuey variants

Drinks

•
Chocolate Shake.jpg — Chocolate Shake

•
Mango Shake.jpg — Mango Shake

•
Floating-Mango-Shake.png — Floating Mango Shake feature

•
Fresh Lumpia.jpg — use only if the source data confirms this is a food item, not a drink

•
Bihon.jpg — Bihon

Pastries and cakes

•
Chocolate Cake.jpg — Chocolate Cake

•
Chocolate Cake.jpg — Chocolate Cake

•
Pastry - Cake Balls.jpg — Cake Balls

•
Pastry - Cakes.jpg — Cakes

•
Pastry - Chocolate Cake.jpg — Chocolate Cake pastry

•
Pastry - Cupcakes.jpg — Cupcakes

•
Pastry - Customized Cakes.jpg — Customized Cakes

•
Pastry - Empanada.jpg — Empanada

•
Pastry - Mini Cakes.jpg — Mini Cakes

•
Pastry - Strawberry Cake.jpg — Strawberry Cake

•
Pastry-Biscuits.jpg — Biscuits

Brand and atmosphere

•
Logo.jpg and Logo.png — use the clearest/highest-quality logo

•
Aesthetic background of the restaurant.jpg — subtle background reference

•
Logo with aesthetic picture of the place.jpg — optional branded atmosphere

•
Pic of menu front cover.jpg — optional reference for visual tone, not a replacement for the interactive menu

•
kape.jpg — Coffee or Kape feature if supported by the source data

•
pikokl.jpg — use only if the source data identifies the item

If an asset does not have a confirmed menu item or description, show it as an image reference or omit it rather than inventing a misleading item.

Content behavior

•
If the existing index.html contains menu names, prices, descriptions, categories, or asset paths, preserve and reuse that data.

•
If content is missing, create concise placeholder descriptions that are clearly editable and avoid fabricating specific ingredients, prices, nutrition, or allergen claims.

•
Keep all menu content in an easy-to-edit data structure or component properties.

•
Use realistic Philippine peso formatting if prices are present, for example ₱180, but do not invent prices when none are supplied.

•
Include a visible “Prices and availability may change” note near the footer if appropriate.

Filtering and usability

Implement working interactions, not static mockups:

•
Category tabs filter the visible cards.

•
Search filters item names and descriptions.

•
A reset or “All” control restores the complete menu.

•
Show a friendly empty state when no items match.

•
Use visible focus states, sufficient color contrast, semantic buttons, and accessible labels.

•
Cards should be keyboard reachable and screen-reader friendly, with an accessible state such as “Show details for Special Halo-Halo.”

Footer

Use a compact footer suitable for a menu, not a marketing landing page. Include the logo or restaurant name, a short line such as “Made for good meals and sweet moments,” and placeholders for location, hours, contact, or social links only if those details exist in the source code. Do not invent an address or phone number.

Technical implementation

•
Start from the uploaded index.html and adapt the existing code instead of discarding it unnecessarily.

•
Keep the implementation componentized and maintainable.

•
Use CSS Grid for the menu layout and CSS 3D transforms for the card flip.

•
Make the design responsive at mobile, tablet, and desktop widths.

•
Prevent layout shift when cards flip.

•
Optimize image sizing and use lazy loading for images below the first viewport.

•
Keep the visual hierarchy focused on the menu cards.

•
Remove or repurpose landing-page sections that do not serve menu browsing.

•
Do not add checkout, cart, user accounts, or payment flows unless they already exist in the provided code.

Final quality bar

The finished result should immediately read as Majjell’s interactive digital menu, not a restaurant landing page. A user should be able to open the page, see food cards quickly, filter by category, search for an item, and tap any card to flip it and read the details. Use the provided photography and brand assets throughout, keep the tone warm and appetizing, and ensure the card-flip interaction feels smooth, obvious, and satisfying.

Before finishing, test the interactions on desktop and mobile widths, verify that every card flips correctly, confirm that no image path is broken, and check the reduced-motion and keyboard-accessible states.

