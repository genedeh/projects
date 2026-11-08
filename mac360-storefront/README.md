# MAC 360 Technologies storefront

A responsive Next.js product showcase for MAC 360 Technologies, Computer Village, Ikeja. The site uses a sample catalog and routes product enquiries to WhatsApp, including the selected configuration. It does not collect payments or maintain live inventory.

## Run locally

```bash
npm install
npm run dev
```

## Format source files

```bash
npm run format
npm run format:check
```

## Before launch

- Replace sample products, descriptions, configuration options and indicative prices with verified shop information.
- Set the business WhatsApp number in `src/components.tsx` and `src/Configurator.tsx` using the international number using digits only. Current links use WhatsApp's share flow because the number was not present in the supplied business profile.
- Confirm opening hours, address, contact details and image usage with the business.

## Pages

- `/`: Landing page
- `/products`: Filterable sample catalog
- `/products/[slug]`: Product detail with configuration based enquiries
- `/mac`, `/dell`: Brand collections
- `/repairs`: Repair services and enquiries
- `/about`, `/contact`: Business information and shop directions

## Deployment

The project is in `mac360-storefront/` within the connected GitHub repository. Configure the Vercel project's Root Directory to `mac360-storefront`. The production branch is `main`, so its pushes deploy to production.
