'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  ShoppingBag,
  ShieldCheck,
  Wrench,
  X,
} from 'lucide-react';
import { Product } from './data';

const WHATSAPP_SHARE = 'https://wa.me/?text=';

export function waLink(message: string) {
  return WHATSAPP_SHARE + encodeURIComponent(message);
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [introPassed, setIntroPassed] = useState(false);
  const isHome = path === '/';

  useEffect(() => {
    if (!isHome) {
      setIntroPassed(true);
      return;
    }

    const updateHeader = () => setIntroPassed(window.scrollY > window.innerHeight * 1.7);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, [isHome]);

  useEffect(() => setMenuOpen(false), [path]);

  return (
    <>
      <header className={`header ${isHome ? `header-home${introPassed ? ' scrolled' : ''}` : ''}`}>
        <Link href="/" className="brand" aria-label="MAC 360 Technologies home">
          <Image
            src="/images/mac360-logo.webp"
            alt="MAC 360 Technologies"
            width={166}
            height={56}
            priority
          />
        </Link>
        <button
          className="menu-trigger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open site menu"
          aria-expanded={menuOpen}
        >
          <span>Explore</span>
          <Menu size={17} strokeWidth={1.6} />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 250 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="drawer-head">
                <Image
                  src="/images/mac360-logo.webp"
                  alt="MAC 360 Technologies"
                  width={150}
                  height={52}
                />
                <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  <X size={20} />
                </button>
              </div>
              <div className="drawer-label">EXPLORE MAC 360</div>
              {[
                ['Home', '/'],
                ['Shop all devices', '/products'],
                ['Apple and Mac', '/mac'],
                ['Dell and Windows', '/dell'],
                ['Repairs', '/repairs'],
                ['About', '/about'],
                ['Contact and directions', '/contact'],
              ].map(([label, href], index) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.045 }}
                >
                  <Link href={href} onClick={() => setMenuOpen(false)}>
                    {label}
                    <ArrowUpRight size={17} />
                  </Link>
                </motion.div>
              ))}
              <div className="drawer-bottom">
                <p>Have a question about a device?</p>
                <a
                  href={waLink('Hello MAC 360, can you help me choose a device?')}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-blue"
                >
                  Chat with the shop <MessageCircle size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
      <Footer />
    </>
  );
}

export function OpeningSequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const laptopRotate = useTransform(scrollYProgress, [0, 0.24, 0.6, 1], [42, 25, 0, 0]);
  const laptopScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.72, 1, 0.72]);
  const laptopY = useTransform(scrollYProgress, [0, 0.55, 1], [95, 0, -180]);
  const laptopX = useTransform(scrollYProgress, [0, 0.55, 1], [0, 0, 70]);
  const earlyOpacity = useTransform(scrollYProgress, [0, 0.12, 0.45, 0.62], [1, 1, 0, 0]);
  const earlyY = useTransform(scrollYProgress, [0, 0.45], [0, -35]);
  const revealOpacity = useTransform(scrollYProgress, [0.42, 0.67, 1], [0, 1, 1]);
  const revealY = useTransform(scrollYProgress, [0.42, 0.67], [28, 0]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      className="opening-sequence"
      ref={sectionRef}
      aria-label="Welcome to MAC 360 Technologies"
    >
      <div className="opening-sticky">
        <div className="opening-grain" />
        <div className="opening-coordinate">COMPUTER VILLAGE&nbsp; / &nbsp;IKEJA, LAGOS</div>
        <motion.div className="opening-early" style={{ opacity: earlyOpacity, y: earlyY }}>
          <p>TECHNOLOGY, WITH A HUMAN TOUCH</p>
          <h1>
            Good tech.
            <br />
            <em>Good people.</em>
          </h1>
          <span>
            SCROLL TO OPEN <ArrowDown size={13} />
          </span>
        </motion.div>
        <motion.div
          className="opening-laptop"
          style={{ rotateX: laptopRotate, scale: laptopScale, y: laptopY, x: laptopX }}
        >
          <Image
            src="/images/macbook-hero.webp"
            alt="Open silver MacBook with a blue display"
            fill
            priority
            sizes="(max-width: 760px) 96vw, 70vw"
          />
        </motion.div>
        <motion.div className="opening-reveal" style={{ opacity: revealOpacity, y: revealY }}>
          <p>WELCOME TO MAC 360 TECHNOLOGIES</p>
          <h2>
            Find your next
            <br />
            <em>favourite device.</em>
          </h2>
          <span>Apple devices, laptops and repairs, chosen with care in Ikeja.</span>
          <div className="opening-actions">
            <Link href="/products" className="button button-white">
              Explore devices <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="opening-contact">
              Find the shop <ArrowUpRight size={15} />
            </Link>
          </div>
        </motion.div>
        <div className="opening-progress" aria-hidden="true">
          <motion.span style={{ scaleX: progressScale }} />
        </div>
      </div>
    </section>
  );
}

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  copy,
  href,
  link = 'View all',
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  href?: string;
  link?: string;
}) {
  return (
    <div className="section-head">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
      {href && (
        <Link className="outline-link" href={href}>
          {link} <ArrowUpRight size={15} />
        </Link>
      )}
    </div>
  );
}

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <Reveal delay={(index % 4) * 0.055} className="product-card-wrap">
      <article className="product-card">
        <Link href={`/products/${product.slug}`} className="product-image">
          <div className="image-glow" />
          {product.badge && <span className="badge">{product.badge}</span>}
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 700px) 48vw, (max-width: 1100px) 30vw, 24vw"
          />
        </Link>
        <div className="product-meta">
          <span>
            {product.maker} <i>·</i> {product.category}
          </span>
          <span className="stock">
            <b /> Check stock
          </span>
        </div>
        <Link href={`/products/${product.slug}`} className="product-name">
          {product.name}
        </Link>
        <div className="product-bottom">
          <span className="price-stack">
            <small>INDICATIVE</small>
            <strong>{product.price}</strong>
          </span>
          <Link
            aria-label={`Ask about ${product.name}`}
            href={`/products/${product.slug}`}
            className="round-arrow"
          >
            <ShoppingBag size={16} strokeWidth={1.7} />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

export function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="product-grid">
      {items.map((product, index) => (
        <ProductCard key={product.slug} product={product} index={index} />
      ))}
    </div>
  );
}

export function WhatsappCTA({ text = 'Ask about availability' }: { text?: string }) {
  return (
    <a
      className="button button-blue"
      href={waLink('Hello MAC 360, I would like to ask about a product.')}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={16} /> {text} <ArrowUpRight size={15} />
    </a>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/">
            <Image
              src="/images/mac360-logo.webp"
              alt="MAC 360 Technologies"
              width={174}
              height={60}
            />
          </Link>
          <p>
            Good tech, thoughtful advice.
            <br />
            Right here in Computer Village.
          </p>
          <a className="footer-wa" href={waLink('Hello MAC 360!')} target="_blank" rel="noreferrer">
            <MessageCircle size={15} /> Start a conversation <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="footer-col">
          <small>EXPLORE</small>
          <Link href="/products">Shop all</Link>
          <Link href="/mac">Apple and Mac</Link>
          <Link href="/dell">Dell and Windows</Link>
          <Link href="/repairs">Repairs</Link>
        </div>
        <div className="footer-col">
          <small>MAC 360</small>
          <Link href="/about">About us</Link>
          <Link href="/contact">Visit the shop</Link>
          <Link href="/contact">Get in touch</Link>
          <a href="https://instagram.com/mac360_gadgets" target="_blank" rel="noreferrer">
            Instagram <ArrowUpRight size={12} />
          </a>
        </div>
        <div className="footer-address">
          <small>FIND THE SHOP</small>
          <p>
            <MapPin size={15} />
            <span>
              Suite 7, M&amp;D Plaza,
              <br />
              14 Ola-Ayeni Street,
              <br />
              Computer Village, Ikeja
            </span>
          </p>
          <p className="hours">
            <Clock3 size={14} /> Monday to Saturday, 10:00 to 18:00
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 MAC 360 Technologies</span>
        <span>Shop local. Choose well.</span>
        <span>Ikeja, Lagos, Nigeria</span>
      </div>
    </footer>
  );
}

export function Hero({ kind = 'home' }: { kind?: 'home' | 'mac' | 'dell' | 'repairs' }) {
  const config = {
    home: {
      label: 'TECHNOLOGY, WITH A HUMAN TOUCH',
      title: (
        <>
          Find your next
          <br />
          <em>favourite device.</em>
        </>
      ),
      copy: 'Apple devices, dependable laptops and expert repairs, with honest help when you need it.',
      image: '/images/macbook-hero.webp',
      tag: 'SELECTED WITH CARE',
      first: 'Explore devices',
      href: '/products',
      second: 'Visit the shop',
    },
    mac: {
      label: 'MEET YOUR NEXT MAC',
      title: (
        <>
          A little more
          <br />
          <em>room to create.</em>
        </>
      ),
      copy: 'Explore MacBook Air and Pro options, selected for how you work, study and create.',
      image: '/images/macbook-silver.webp',
      tag: 'APPLE · MACBOOK',
      first: 'Explore Mac',
      href: '/products?brand=Apple',
      second: 'Ask on WhatsApp',
    },
    dell: {
      label: 'WINDOWS, YOUR WAY',
      title: (
        <>
          Ready for
          <br />
          <em>what’s next.</em>
        </>
      ),
      copy: 'Find a Dell laptop for the office, the classroom, the studio or everywhere in between.',
      image: '/images/dell-xps.webp',
      tag: 'DELL · WINDOWS LAPTOPS',
      first: 'Shop Dell',
      href: '/products?brand=Dell',
      second: 'Ask on WhatsApp',
    },
    repairs: {
      label: 'REPAIRS, DONE WITH CARE',
      title: (
        <>
          A fresh start
          <br />
          <em>for your device.</em>
        </>
      ),
      copy: 'From diagnostics to hardware fixes, talk with our team about careful, clear device repairs.',
      image: '/images/dell-repair-open.webp',
      tag: 'DEVICE CARE · COMPUTER VILLAGE',
      first: 'Discuss a repair',
      href: '/contact',
      second: 'Visit the shop',
    },
  }[kind];

  return (
    <section className={`hero hero-${kind}`}>
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <div className="hero-matrix" aria-hidden="true" />
      <div className="hero-copy">
        <Eyebrow>{config.label}</Eyebrow>
        <h1>{config.title}</h1>
        <p>{config.copy}</p>
        <div className="hero-actions">
          <Link className="button button-dark" href={config.href}>
            {config.first} <ArrowRight size={16} />
          </Link>
          <Link className="hero-text-link" href="/contact">
            {config.second} <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="hero-proof">
          <div className="proof-avatars">
            <span>M</span>
            <span>360</span>
            <span>MC</span>
          </div>
          <p>
            <b>Local expertise.</b>
            <br />
            Right here in Ikeja.
          </p>
        </div>
      </div>
      <motion.div
        className="hero-visual"
        initial={{ y: 24, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero-ring ring-a" />
        <div className="hero-ring ring-b" />
        <div className="hero-visual-label">
          <span className="pulse-dot" /> {config.tag}
        </div>
        <Image
          src={config.image}
          alt="A device available at MAC 360"
          fill
          priority
          sizes="(max-width: 760px) 95vw, 54vw"
          className="hero-product"
        />
        <div className="hero-caption">
          <span>Selected with care</span>
          <span className="caption-dot" /> MAC 360
        </div>
      </motion.div>
      <div className="hero-bottom">
        <span>LOCAL. PERSONAL. TECH.</span>
        <span>
          SCROLL TO EXPLORE <ArrowDown size={13} />
        </span>
      </div>
    </section>
  );
}

export function CategoryTiles() {
  const categories = [
    {
      title: 'iPhone',
      sub: 'A little more brilliant.',
      image: '/images/iphone-blue-front.webp',
      href: '/products?category=Phones',
      className: 'category-blue',
    },
    {
      title: 'Mac',
      sub: 'Power, made portable.',
      image: '/images/macbook-silver.webp',
      href: '/mac',
      className: 'category-pale',
    },
    {
      title: 'Dell',
      sub: 'Built for your workflow.',
      image: '/images/dell-xps.webp',
      href: '/dell',
      className: 'category-dark',
    },
    {
      title: 'Repairs',
      sub: 'Expert care, clear advice.',
      image: '/images/repair-icon.webp',
      href: '/repairs',
      className: 'category-repair',
    },
  ];

  return (
    <div className="category-grid">
      {categories.map((category, index) => (
        <Reveal key={category.title} delay={index * 0.07} className="category-wrap">
          <Link href={category.href} className={`category-tile ${category.className}`}>
            <span className="category-content">
              <b>{category.title}</b>
              <span>{category.sub}</span>
            </span>
            <span className="category-go">
              <ArrowUpRight size={16} />
            </span>
            <Image src={category.image} alt="" fill sizes="(max-width: 760px) 48vw, 25vw" />
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function AboutBand() {
  return (
    <section className="about-band">
      <Reveal className="about-copy">
        <Eyebrow>THE MAC 360 WAY</Eyebrow>
        <h2>
          Good tech feels
          <br />
          <em>like a good fit.</em>
        </h2>
        <p>
          Buying a device should feel straightforward. We are a local Computer Village team ready to
          help you compare, choose and care for your tech.
        </p>
        <Link href="/about" className="text-link">
          A little about us <ArrowUpRight size={15} />
        </Link>
      </Reveal>
      <Reveal className="about-cards" delay={0.12}>
        <div className="about-card card-blue">
          <span>01</span>
          <div>
            <ShieldCheck size={23} />
            <h3>Thoughtful advice</h3>
            <p>Clear answers to help you choose with confidence.</p>
          </div>
          <ArrowUpRight className="about-arrow" size={17} />
        </div>
        <div className="about-card card-light">
          <span>02</span>
          <div>
            <Wrench size={22} />
            <h3>Here for the long run</h3>
            <p>Practical repair support when your device needs attention.</p>
          </div>
          <ArrowUpRight className="about-arrow" size={17} />
        </div>
      </Reveal>
    </section>
  );
}

export function ContactStrip() {
  return (
    <section className="contact-strip">
      <div className="contact-strip-glow" />
      <div>
        <Eyebrow>COME SAY HELLO</Eyebrow>
        <h2>Need a second opinion?</h2>
        <p>Talk devices with people who know them. We are right here in Computer Village.</p>
      </div>
      <Link href="/contact" className="button button-white">
        Find the shop <ArrowUpRight size={16} />
      </Link>
      <div className="strip-orbit" aria-hidden="true" />
    </section>
  );
}

export function BrandStats() {
  return (
    <div className="brand-stats">
      <div>
        <span>BASED IN</span>
        <b>Computer Village</b>
        <small>Ikeja, Lagos</small>
      </div>
      <div>
        <span>WHAT WE DO</span>
        <b>Devices and repairs</b>
        <small>With a personal touch</small>
      </div>
      <div>
        <span>HERE TO HELP</span>
        <b>Real people, local</b>
        <small>Ask us anything</small>
      </div>
    </div>
  );
}
