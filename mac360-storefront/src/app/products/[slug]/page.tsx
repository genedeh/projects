import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft,ArrowRight,Check,ChevronDown,ShieldCheck} from 'lucide-react';
import {Eyebrow} from '@/components';
import {Configurator} from '@/Configurator';
import {products} from '@/data';
export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export default async function ProductDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const product=products.find(p=>p.slug===slug);if(!product)notFound();return <main className="detail-page"><div className="breadcrumbs"><Link href="/products"><ArrowLeft size={14}/> All devices</Link><span>/</span><span>{product.category}</span><span>/</span><b>{product.name}</b></div><div className="detail-layout"><div className="detail-gallery"><div className="detail-main-image"><div className="detail-image-wash"/><Image src={product.image} alt={product.name} fill priority sizes="(max-width:780px) 100vw, 58vw"/></div><div className="detail-thumb-row"><div><Image src={product.image} alt="" fill sizes="100px"/></div><p>Product images are representative. Confirm the exact available model and condition with us.</p></div></div><div className="detail-info"><Eyebrow>{product.maker} · {product.category}</Eyebrow><h1>{product.name}</h1><p className="detail-description">{product.description}</p><Configurator product={product}/></div></div><div className="detail-more"><Eyebrow>KEEP EXPLORING</Eyebrow><Link href="/products">More from the collection <ArrowRight size={16}/></Link></div></main>}
