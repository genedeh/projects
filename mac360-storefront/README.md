# MAC 360 Technologies storefront

A responsive Next.js product showcase for MAC 360 Technologies, Computer Village, Ikeja. The site uses a sample catalog and routes product enquiries to WhatsApp, including the selected configuration. It does not collect payments or maintain live inventory.

## Run locally

```bash
npm install
npm run dev
```

## Before launch

- Replace sample products, descriptions, configuration options and indicative prices with verified shop information.
- Set the business WhatsApp number in `src/components.tsx` and `src/Configurator.tsx` using the international digits-only number. Current links use WhatsApp's share flow because the number was not present in the supplied business profile.
- Confirm opening hours, address, contact details and image usage with the business.

## Pages

- `/` — landing page
- `/products` — filterable sample catalog
- `/products/[slug]` — product detail with configuration-aware enquiry
- `/mac`, `/dell` — brand collections
- `/repairs` — repair services and enquiry path
- `/about`, `/contact` — business information and shop directions

## Deployment

The project is in `mac360-storefront/` within the connected GitHub repository. Configure the Vercel project's Root Directory to `mac360-storefront`; use `main` as its production branch for production deployments from pushes to `main`.
