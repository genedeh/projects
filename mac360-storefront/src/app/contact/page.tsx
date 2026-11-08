import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Instagram,
  MapPin,
  MessageCircle,
  Mail,
} from 'lucide-react';
import { Eyebrow, Reveal, WhatsappCTA } from '@/components';
export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-heading">
        <Eyebrow>WE’RE EASY TO FIND</Eyebrow>
        <h1>
          Let’s talk <em>tech.</em>
        </h1>
        <p>
          Ask about a product, plan a visit or tell us what needs fixing. We’ll point you in the
          right direction.
        </p>
      </section>
      <div className="contact-layout">
        <div className="contact-cards">
          <Reveal className="contact-info-card contact-chat">
            <span className="contact-icon">
              <MessageCircle />
            </span>
            <small>QUICK QUESTION?</small>
            <h2>WhatsApp works.</h2>
            <p>Ask us about availability, specs, repairs or directions.</p>
            <WhatsappCTA text="Chat with MAC 360" />
          </Reveal>
          <Reveal className="contact-info-card" delay={0.1}>
            <span className="contact-icon">
              <MapPin />
            </span>
            <small>COME BY</small>
            <h2>Find us in Ikeja.</h2>
            <p>
              Suite 7, M&amp;D Plaza
              <br />
              14 Ola-Ayeni Street
              <br />
              Computer Village, Ikeja, Lagos
            </p>
            <a
              className="text-link"
              target="_blank"
              href="https://maps.google.com/?q=Suite+7+M%26D+Plaza+14+Ola-Ayeni+Street+Computer+Village+Ikeja"
            >
              Open directions <ArrowUpRight size={16} />
            </a>
          </Reveal>
          <Reveal className="contact-info-card" delay={0.16}>
            <span className="contact-icon">
              <Clock3 />
            </span>
            <small>WHEN WE’RE OPEN</small>
            <h2>Monday to Saturday.</h2>
            <p>
              10:00 am to 6:00 pm
              <br />
              Sunday: Closed
            </p>
            <span className="hours-note">Hours may change on public holidays.</span>
          </Reveal>
        </div>
        <Reveal className="map-panel" delay={0.12}>
          <div className="map-frame">
            <iframe
              title="Map to MAC 360 Technologies in Computer Village, Ikeja"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Suite+7%2C+M%26D+Plaza%2C+14+Ola-Ayeni+Street%2C+Computer+Village%2C+Ikeja%2C+Lagos&output=embed"
            />
          </div>
          <div className="map-caption">
            <div>
              <b>MAC 360 Technologies</b>
              <span>Suite 7, M&amp;D Plaza, Computer Village, Ikeja</span>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&amp;destination=Suite+7%2C+M%26D+Plaza%2C+14+Ola-Ayeni+Street%2C+Computer+Village%2C+Ikeja%2C+Lagos"
              target="_blank"
              rel="noreferrer"
              aria-label="Open directions to MAC 360 Technologies in Google Maps"
            >
              <ArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>
      <section className="contact-social">
        <Mail />
        <span>EMAIL</span>
        <a href="mailto:Tolumac360@gmail.com">
          Tolumac360@gmail.com <ArrowUpRight size={15} />
        </a>
      </section>
      <section className="contact-social">
        <Instagram />
        <span>FOLLOW ALONG</span>
        <a href="https://instagram.com/mac360_gadgets" target="_blank">
          @mac360_gadgets <ArrowUpRight size={15} />
        </a>
        <p>New arrivals, useful tips and a peek at what’s in the shop.</p>
      </section>
    </main>
  );
}
