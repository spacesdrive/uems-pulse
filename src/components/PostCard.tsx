import { CalendarDays } from 'lucide-react';
import { formatDate, primaryCategory, type PostMeta } from '@/data/posts';
import { Img } from './Img';
import { SmartLink } from './SmartLink';

/** Blog card from the reference: image, category pill + date row, title, excerpt. */
export function PostCard({ post, index = 0 }: { post: PostMeta; index?: number }) {
  const category = primaryCategory(post);
  return (
    <article data-reveal style={{ '--reveal-delay': `${(index % 3) * 80}ms` } as React.CSSProperties} className="h-full">
      <SmartLink href={`/${post.slug}`} className="group card card-hover flex h-full flex-col overflow-hidden">
        <div className="overflow-hidden bg-primary-50">
          <Img
            src={post.cover}
            alt=""
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="flex items-center justify-between gap-3 text-sm">
            {category && <span className="rounded-full bg-primary-50 px-3 py-1 font-medium text-primary">{category.name}</span>}
            {post.date && (
              <time dateTime={post.date} className="inline-flex items-center gap-1.5 text-muted">
                <CalendarDays aria-hidden className="size-4" />
                {formatDate(post.date)}
              </time>
            )}
          </div>
          <h3 className="mt-4 text-lg leading-snug font-semibold transition-colors group-hover:text-primary">{post.title}</h3>
          {post.excerpt && <p className="mt-3 line-clamp-2 leading-7 text-muted">{post.excerpt}</p>}
        </div>
      </SmartLink>
    </article>
  );
}
