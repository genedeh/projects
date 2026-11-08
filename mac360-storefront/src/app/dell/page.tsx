import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Hero, ProductGrid, SectionTitle, Reveal, WhatsappCTA } from '@/components';
import { products } from '@/data';
export default function DellPage() {
  const list = products.filter((p) => p.maker === 'Dell' || p.maker === 'HP');
  return (
    <main>
      <Hero kind="dell" />
      <section className="section brand-intro dell-intro">
        <Reveal>
          <span className="dell-wordmark">
            DELL
            <br />
            <i>WINDOWS PCs</i>
          </span>
          <div>
            <small>WINDOWS, WELL CHOSEN</small>
            <h2>
              Built for how
              <br />
              <em>you get things done.</em>
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <p>
            Reliable laptops for work, school and life. Compare Dell and HP options with a local
            team who can help make the specs feel simple.
          </p>
          <ul>
            <li>
              <CheckCircle2 />
              Business & everyday models
            </li>
            <li>
              <CheckCircle2 />
              Memory and storage options
            </li>
            <li>
              <CheckCircle2 />
              Help choosing a good fit
            </li>
          </ul>
          <WhatsappCTA text="Ask about laptop stock" />
        </Reveal>
      </section>
      <section className="section brand-products">
        <SectionTitle
          eyebrow="WINDOWS LAPTOPS"
          title="Ready for what’s next."
          copy="Explore popular Dell and HP laptop options. Ask us for current availability."
          href="/products?brand=Dell"
        />
        <ProductGrid items={list} />
      </section>
      <section className="brand-spotlight dell-spotlight">
        <div>
          <span>DELL XPS · MADE TO MOVE</span>
          <h2>
            Your desk can
            <br />
            <em>go with you.</em>
          </h2>
          <Link href="/products/dell-xps-13">
            Meet Dell XPS <ArrowRight size={16} />
          </Link>
        </div>
        <img src="/images/dell-xps.webp" alt="Dell XPS laptop" />
      </section>
    </main>
  );
}
