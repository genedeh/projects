import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components';
export const metadata: Metadata = {
  title: 'MAC 360 Technologies | Apple, Laptops & Repairs in Ikeja',
  description:
    'Shop Apple devices, Dell and HP laptops, accessories and trusted device repairs at MAC 360 Technologies, Computer Village, Ikeja.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
