import Link from 'next/link';
import { ArrowRight, ArrowUpRight, MapPin, HeartHandshake, Compass } from 'lucide-react';
import { AboutBand, ContactStrip, Eyebrow, Reveal } from '@/components';
export default function About() {
  return (
    <main className="about-page">
      <section className="page-hero-simple">
        <Eyebrow>ABOUT MAC 360</Eyebrow>
        <h1>
          Good tech starts
          <br />
          with <em>good people.</em>
        </h1>
        <p>
          We’re a Computer Village team helping people find, care for and enjoy the devices they
          rely on.
        </p>
        <Link className="button button-dark" href="/contact">
          Come meet us <ArrowRight size={17} />
        </Link>
      </section>
      <AboutBand />
      <section className="section about-values">
        <Eyebrow>WHAT WE BELIEVE</Eyebrow>
        <h2>
          Make the complicated
          <br />
          <em>feel simple.</em>
        </h2>
        <div className="value-grid">
          <Reveal>
            <Compass />
            <h3>Good guidance</h3>
            <p>Clear, useful advice that starts with what you need.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <HeartHandshake />
            <h3>Personal service</h3>
            <p>Talk to real people who are happy to help you compare.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <MapPin />
            <h3>Local roots</h3>
            <p>Shop and get support at Computer Village, Ikeja.</p>
          </Reveal>
        </div>
      </section>
      <ContactStrip />
    </main>
  );
}
