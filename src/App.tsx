import { useState, useCallback, useRef, useEffect } from 'react';
import { CATEGORIES, MENU_ITEMS, type Category, type MenuItem } from './data/menu';

// Eagerly import every file from src/pictures/ — populated when user drops their folder in
const pictureModules = import.meta.glob('./pictures/*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

function getPicture(filename: string): string | undefined {
  return pictureModules[`./pictures/${filename}`];
}

// ─── Menu Card ───────────────────────────────────────────────────────────────

function MenuCard({ item, isFlipped, onFlip }: { item: MenuItem; isFlipped: boolean; onFlip: () => void }) {
  const src = getPicture(item.imageFile);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onFlip(); }
    if (e.key === 'Escape' && isFlipped) onFlip();
  }, [onFlip, isFlipped]);

  const badgeColor =
    item.badge === 'Best Seller' ? 'var(--primary)' :
    item.badge === 'New' ? '#2C7A4B' :
    item.badge === 'Sweet' ? '#9B4F9B' :
    'var(--accent)';

  return (
    <div
      className={`menu-card-wrapper flip-card ${isFlipped ? 'flipped' : ''}`}
      style={{ height: '380px' }}
    >
      <div className="flip-card-inner">

        {/* ── Front ── */}
        <div
          className="flip-card-front cursor-pointer group"
          role="button"
          tabIndex={0}
          aria-label={`Show details for ${item.name}`}
          aria-pressed={isFlipped}
          onClick={onFlip}
          onKeyDown={handleKeyDown}
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            boxShadow: '0 2px 16px rgba(44,26,14,0.08)',
          }}
        >
          {/* Image area */}
          <div className="relative overflow-hidden" style={{ height: '220px', background: '#e8ddd0' }}>
            {src ? (
              <img
                src={src}
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 opacity-40">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--muted-foreground)' }}>
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <span className="text-xs" style={{ color: 'var(--muted-foreground)', fontFamily: 'Outfit, sans-serif' }}>
                  {item.imageFile}
                </span>
              </div>
            )}

            {item.badge && (
              <span
                className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: badgeColor, color: 'white' }}
              >
                {item.badge}
              </span>
            )}

            <div
              className="absolute inset-0 flex items-end justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(to top, rgba(44,26,14,0.5) 0%, transparent 60%)' }}
            >
              <span className="text-white text-xs font-medium flex items-center gap-1">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
                </svg>
                View details
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="p-4 flex flex-col gap-1.5">
            <h3 className="font-display font-semibold text-lg leading-tight" style={{ color: 'var(--foreground)' }}>
              {item.name}
            </h3>
            <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--muted-foreground)' }}>
              {item.description}
            </p>
            <div className="flex items-center justify-between mt-auto pt-2">
              {item.price
                ? <span className="font-semibold text-base" style={{ color: 'var(--primary)' }}>{item.price}</span>
                : <span />
              }
              <span className="text-xs flex items-center gap-1" style={{ color: 'var(--muted-foreground)' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 16l-4-4 4-4M17 8l4 4-4 4"/>
                </svg>
                Tap to flip
              </span>
            </div>
          </div>
        </div>

        {/* ── Back ── */}
        <div
          className="flip-card-back flex flex-col"
          style={{ background: 'var(--foreground)', color: 'var(--card)' }}
        >
          <div className="p-5 flex flex-col gap-3 h-full">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-semibold text-xl leading-tight" style={{ color: '#FFF9F2' }}>
                {item.name}
              </h3>
              {item.price && (
                <span className="font-bold text-lg shrink-0" style={{ color: 'var(--accent)' }}>
                  {item.price}
                </span>
              )}
            </div>

            <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,249,242,0.85)' }}>
              {item.description}
            </p>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: 'var(--accent)' }}>
                Ingredients
              </p>
              <p className="text-sm" style={{ color: 'rgba(255,249,242,0.7)' }}>
                {item.ingredients}
              </p>
            </div>

            {item.popular && (
              <div className="flex items-center gap-1.5">
                <span style={{ color: 'var(--accent)' }}>★</span>
                <span className="text-xs font-medium" style={{ color: 'rgba(255,249,242,0.7)' }}>
                  Popular choice
                </span>
              </div>
            )}

            <button
              onClick={onFlip}
              onKeyDown={handleKeyDown}
              className="mt-auto w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-80"
              style={{
                background: 'rgba(255,249,242,0.12)',
                color: '#FFF9F2',
                border: '1px solid rgba(255,249,242,0.2)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 16l-4-4 4-4M17 8l4 4-4 4"/>
              </svg>
              Flip back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section Heading ──────────────────────────────────────────────────────────

function SectionHeading({ category, count }: { category: string; count: number }) {
  return (
    <div className="flex items-baseline gap-3 mb-6 mt-12 first:mt-0">
      <h2 className="font-display font-semibold text-2xl md:text-3xl" style={{ color: 'var(--foreground)' }}>
        {category}
      </h2>
      <span className="text-sm font-medium" style={{ color: 'var(--muted-foreground)' }}>
        {count} item{count !== 1 ? 's' : ''}
      </span>
      <div className="flex-1 h-px ml-2" style={{ background: 'var(--border)' }} />
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [flippedId, setFlippedId] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (flippedId) setFlippedId(null);
        else if (searchOpen) { setSearchOpen(false); setSearchQuery(''); }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [flippedId, searchOpen]);

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setFlippedId(null);
  };

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    setFlippedId(null);
    if (q) setActiveCategory('All');
  };

  const filtered = MENU_ITEMS.filter(item => {
    const matchCat = activeCategory === 'All' || item.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q || item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  // Group into sections
  const grouped: { category: string; items: MenuItem[] }[] = [];
  if (activeCategory === 'All' && !searchQuery) {
    for (const cat of CATEGORIES.filter(c => c !== 'All') as Exclude<Category, 'All'>[]) {
      const items = MENU_ITEMS.filter(i => i.category === cat);
      if (items.length) grouped.push({ category: cat, items });
    }
  } else {
    if (filtered.length) {
      grouped.push({
        category: searchQuery ? 'Search Results' : activeCategory,
        items: filtered,
      });
    }
  }

  const logoSrc = getPicture('Logo.png') ?? getPicture('Logo.jpg');

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>

      {/* ── Sticky Header ── */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{ background: 'rgba(250,245,236,0.92)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top bar */}
          <div className="flex items-center justify-between h-14 gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0 flex items-center justify-center"
                style={{ background: 'var(--primary)' }}>
                {logoSrc
                  ? <img src={logoSrc} alt="Majjell's Logo" className="w-full h-full object-cover" />
                  : <span className="text-white font-display font-bold text-sm">M</span>
                }
              </div>
              <div>
                <h1 className="font-display font-semibold text-lg leading-none" style={{ color: 'var(--foreground)' }}>
                  Majjell's
                </h1>
                <p className="text-xs leading-none mt-0.5" style={{ color: 'var(--muted-foreground)' }}>
                  Food · Drinks · Pastries
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2">
              {searchOpen ? (
                <div
                  className="flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm"
                  style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    style={{ color: 'var(--muted-foreground)', flexShrink: 0 }}>
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                  <input
                    ref={searchRef}
                    value={searchQuery}
                    onChange={e => handleSearch(e.target.value)}
                    placeholder="Search menu…"
                    className="outline-none bg-transparent w-40 sm:w-56"
                    style={{ color: 'var(--foreground)' }}
                  />
                  <button onClick={() => { handleSearch(''); setSearchOpen(false); }}
                    className="text-xs opacity-60 hover:opacity-100" style={{ color: 'var(--muted-foreground)' }}>
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="rounded-xl p-2 transition-opacity hover:opacity-70"
                  style={{ background: 'var(--secondary)', color: 'var(--foreground)' }}
                  aria-label="Search menu"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Category tabs */}
          <div className="category-scroll overflow-x-auto pb-2.5 -mx-4 px-4 sm:-mx-6 sm:px-6">
            <div className="flex gap-2 min-w-max">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    background: activeCategory === cat ? 'var(--primary)' : 'var(--secondary)',
                    color: activeCategory === cat ? 'var(--primary-foreground)' : 'var(--foreground)',
                    border: `1px solid ${activeCategory === cat ? 'var(--primary)' : 'var(--border)'}`,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tap hint */}
        <div className="text-center py-1.5" style={{ background: 'var(--muted)', borderTop: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
            ✦ Tap a card to see details
          </p>
        </div>
      </header>

      {/* ── Welcome strip ── */}
      <div className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #A0491E 100%)', minHeight: '80px' }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)' }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-5">
          <p className="font-display text-xl md:text-2xl font-semibold" style={{ color: '#FFF9F2' }}>
            Good food, sweet moments
          </p>
          <p className="text-sm mt-0.5" style={{ color: 'rgba(255,249,242,0.8)' }}>
            and favorites made for sharing.
          </p>
        </div>
      </div>

      {/* ── Menu grid ── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-16">
        {grouped.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="text-5xl opacity-30">🍽️</div>
            <p className="font-display text-xl" style={{ color: 'var(--muted-foreground)' }}>No items found</p>
            <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Try a different search or category</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); setSearchOpen(false); }}
              className="mt-2 px-5 py-2 rounded-full text-sm font-medium"
              style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
            >
              View all items
            </button>
          </div>
        ) : (
          grouped.map(({ category, items }) => (
            <section key={category} id={category.replace(/\s+/g, '-').toLowerCase()}>
              <SectionHeading category={category} count={items.length} />
              <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
                {items.map(item => (
                  <MenuCard
                    key={item.id}
                    item={item}
                    isFlipped={flippedId === item.id}
                    onFlip={() => setFlippedId(flippedId === item.id ? null : item.id)}
                  />
                ))}
              </div>
            </section>
          ))
        )}
      </main>

      {/* ── Footer ── */}
      <footer style={{ background: 'var(--foreground)', borderTop: '1px solid rgba(255,249,242,0.08)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-semibold text-2xl" style={{ color: '#FFF9F2' }}>Majjell's</h2>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,249,242,0.55)' }}>
                Made for good meals and sweet moments.
              </p>
            </div>
            <div className="flex flex-col gap-1 text-sm" style={{ color: 'rgba(255,249,242,0.55)' }}>
              <p>📍 Location details available upon inquiry</p>
              <p>🕐 Hours may vary — contact us for schedule</p>
            </div>
          </div>
          <div className="mt-8 pt-6 text-xs text-center"
            style={{ borderTop: '1px solid rgba(255,249,242,0.08)', color: 'rgba(255,249,242,0.35)' }}>
            Prices and availability may change without prior notice. · © Majjell's
          </div>
        </div>
      </footer>
    </div>
  );
}
