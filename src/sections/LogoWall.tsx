import type { ImageRef } from '@/data/types';
import { Img } from '@/components/Img';
import { Marquee } from '@/components/Marquee';

/** Partner / affiliation logos on white tiles, looping with faded edges. */
export function LogoWall({ images, duration = 35 }: { images: ImageRef[]; duration?: number }) {
  return (
    <div data-reveal>
      <Marquee duration={duration}>
        {images.map((img) => (
          <div key={img.src} className="card flex h-24 w-44 shrink-0 items-center justify-center px-6 py-5 sm:h-28 sm:w-52">
            <Img src={img.src} alt={img.alt} sizes="200px" className="size-full object-contain" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
