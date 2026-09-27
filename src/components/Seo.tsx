import { site } from '@/data/site';

/** React 19 hoists these tags into <head>. */
export function Seo({ title, description }: { title: string; description?: string }) {
  const fullTitle = title.includes('UEMS') ? title : `${title} | ${site.name}`;
  const desc = description ?? site.seoDescription;
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
    </>
  );
}
