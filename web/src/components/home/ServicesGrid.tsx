import Image from "next/image";

import { Surface } from "@/components/ui/Surface";
import { SERVICES } from "@/data/services";

/**
 * The old page nested a carousel inside a carousel here, so each service
 * showed one bullet at a time and the rest were only reachable by swiping.
 * Everything is listed at once now — the copy is short enough that hiding it
 * cost more than it saved.
 */
export const ServicesGrid = () => (
  <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
    {SERVICES.map((service) => (
      <Surface
        key={service.title}
        as="li"
        className="flex h-full flex-col overflow-hidden"
      >
        <div className="relative aspect-16/10 w-full bg-[var(--surface-secondary)]">
          <Image
            src={`/images/${service.image}.jpg`}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="text-lg font-bold">{service.title}</h3>
          <ul className="flex list-disc flex-col gap-2 pl-4 text-sm leading-relaxed marker:text-[var(--accent)]">
            {service.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Surface>
    ))}
  </ul>
);
