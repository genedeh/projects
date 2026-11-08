import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Wrench } from 'lucide-react';
import { Hero, Eyebrow, Reveal, ContactStrip } from '@/components';
const services = [
  [
    'Laptop diagnostics',
    'We’ll inspect the issue and explain what we find before recommending a fix.',
  ],
  [
    'Screen & keyboard repairs',
    'Get help with damaged displays, keyboard issues and everyday hardware wear.',
  ],
  ['Battery & charging', 'Bring in battery, power and charging concerns for a clear assessment.'],
  [
    'Software & setup',
    'Support for performance issues, system setup and getting your device back on track.',
  ],
];
export default function Repairs() {
  return (
    <main>
      <Hero kind="repairs" />
      <section className="section repair-intro">
        <Reveal>
          <Eyebrow>DEVICE CARE, EXPLAINED</Eyebrow>
          <h2>
            Clear answers
            <br />
            <em>before the repair.</em>
          </h2>
          <p>
            Tell us what’s happening. We’ll help you understand the next step, expected cost and
            timing before work begins.
          </p>
          <Link href="/contact" className="button button-dark">
            Talk about a repair <ArrowRight size={17} />
          </Link>
        </Reveal>
        <Reveal className="repair-service-grid" delay={0.12}>
          {services.map(([title, copy], i) => (
            <div className="service-card" key={title}>
              <span>0{i + 1}</span>
              <Wrench size={19} />
              <h3>{title}</h3>
              <p>{copy}</p>
              <ArrowUpRight size={16} />
            </div>
          ))}
        </Reveal>
      </section>
      <section className="repair-showcase">
        <div className="repair-showcase-text">
          <Eyebrow>OUR APPROACH</Eyebrow>
          <h2>
            Thoughtful work.
            <br />
            <em>No guesswork.</em>
          </h2>
          <p>
            Every device is different. We start by listening, check the issue and keep you in the
            loop at every step.
          </p>
          <div className="repair-promises">
            <span>
              <CheckCircle2 />
              Diagnosis first
            </span>
            <span>
              <CheckCircle2 />
              Your approval before repair
            </span>
            <span>
              <CheckCircle2 />
              Updates from a real person
            </span>
          </div>
        </div>
        <div className="repair-showcase-image">
          <Image
            src="/images/dell-repair-open.webp"
            alt="Opened laptop with circuit board visible during repair"
            fill
            sizes="(max-width: 700px) 100vw, 55vw"
          />
          <span className="repair-image-caption">
            <ShieldCheck size={17} /> CAREFUL, PRACTICAL DEVICE SUPPORT
          </span>
        </div>
      </section>
      <ContactStrip />
    </main>
  );
}
