import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow, ProductGrid } from '@/components';
import { products } from '@/data';
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; brand?: string }>;
}) {
  const params = await searchParams;
  const group = params.category || params.brand;
  const filtered = group
    ? products.filter(
        (p) =>
          p.category.toLowerCase() === group.toLowerCase() ||
          p.maker.toLowerCase() === group.toLowerCase(),
      )
    : products;
  const title =
    group === 'Apple'
      ? 'Apple & Mac'
      : group === 'Dell'
        ? 'Dell laptops'
        : group || 'Everyday favourites';
  return (
    <main className="listing-page">
      <div className="listing-hero">
        <div>
          <Eyebrow>THE MAC 360 SELECTION</Eyebrow>
          <h1>
            Find your <em>next favourite.</em>
          </h1>
          <p>
            Explore our current range of phones, laptops, tablets and accessories. Availability can
            change, so just ask.
          </p>
        </div>
        <div className="listing-hero-visual">
          <img src="/images/iphone-blue-front.webp" alt="Blue iPhone" />
          <img src="/images/macbook-silver.webp" alt="MacBook" />
        </div>
      </div>
      <div className="catalog-toolbar">
        <div>
          <span>COLLECTION</span>
          <h2>
            {title} <small>({filtered.length})</small>
          </h2>
        </div>
        <div className="filter-chips">
          <Link className={!group ? 'selected' : ''} href="/products">
            All devices
          </Link>
          <Link className={group === 'Phones' ? 'selected' : ''} href="/products?category=Phones">
            Phones
          </Link>
          <Link className={group === 'Apple' ? 'selected' : ''} href="/products?brand=Apple">
            Apple
          </Link>
          <Link className={group === 'Dell' ? 'selected' : ''} href="/products?brand=Dell">
            Dell
          </Link>
          <Link href="/products?category=Accessories">Accessories</Link>
        </div>
        <span className="sort-label">
          Showing locally selected products <ArrowUpRight size={14} />
        </span>
      </div>
      {filtered.length ? (
        <ProductGrid items={filtered} />
      ) : (
        <div className="empty-state">
          <h3>That collection is being refreshed.</h3>
          <p>Message us and we’ll help you find what you’re looking for.</p>
        </div>
      )}
      <div className="catalog-note">
        <span className="pulse-dot" />
        Prices and product availability can change. Confirm current stock with our team before
        visiting.
        <Link href="/contact">
          Contact us <ArrowUpRight size={14} />
        </Link>
      </div>
    </main>
  );
}
