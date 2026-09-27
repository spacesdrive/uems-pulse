import type { ContentBlock } from '@/data/posts';
import { Img } from './Img';

/**
 * Renders long-form content extracted by scripts/extract-content.mjs.
 * Inline HTML is sanitised at extraction time (only strong/em/a/br survive).
 */
export function RichBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-uems">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'heading': {
            const H = `h${b.level}` as 'h2' | 'h3' | 'h4';
            return <H key={i}>{b.text}</H>;
          }
          case 'paragraph':
            return <p key={i} dangerouslySetInnerHTML={{ __html: b.html }} />;
          case 'list': {
            const L = b.ordered ? 'ol' : 'ul';
            return (
              <L key={i}>
                {b.items.map((item, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </L>
            );
          }
          case 'table': {
            const [head, ...rows] = b.rows;
            return (
              <div key={i} className="card overflow-x-auto p-0">
                <table className="w-full min-w-[520px] text-left text-[15px] leading-6">
                  <thead className="bg-primary-50 text-ink">
                    <tr>
                      {head.map((c, j) => (
                        <th key={j} scope="col" className="px-4 py-3 font-semibold">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) => (
                          <td key={k} className="px-4 py-3 align-top">
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          case 'quote':
            return <blockquote key={i}>{b.text}</blockquote>;
          case 'image':
            return (
              <figure key={i} className="overflow-hidden rounded-2xl border border-line">
                <Img src={b.src} alt={b.alt} className="w-full" sizes="(min-width: 768px) 720px, 100vw" />
              </figure>
            );
          case 'video':
            return (
              <div key={i} className="aspect-video overflow-hidden rounded-2xl border border-line bg-ink">
                <iframe
                  src={b.src}
                  title="Video"
                  loading="lazy"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="size-full"
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
