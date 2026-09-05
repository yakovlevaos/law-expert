import Image from "next/image";

import { ServiceItems } from "@/components/home/ServiceItems";
import { Surface } from "@/components/ui/Surface";
import { SERVICES } from "@/data/services";

/**
 * Each card carries its own carousel of what the service covers, as the
 * original site did. The bulleted list that replaced it made the cards very
 * uneven -- consulting has four points to mediation's one.
 */
export const ServicesGrid = () => (
  <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
    {SERVICES.map((service) => (
      <Surface
        key={service.title}
        as="li"
        className="flex h-full flex-col overflow-hidden"
      >
        {/* The illustrations are square; `contain` keeps a future
            non-square one whole rather than silently cropping it. */}
        <div className="relative aspect-square w-full bg-[var(--surface-secondary)]">
          <Image
            src={`/images/${service.image}.jpg`}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-contain"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="text-lg font-bold">{service.title}</h3>
          <ServiceItems title={service.title} items={service.items} />
        </div>
      </Surface>
    ))}
  </ul>
);
