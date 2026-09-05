import { CONTACTS, MAP_EMBED_URL } from "@/data/site";

/**
 * The old markup carried two near-identical copies of this block, one hidden
 * at each breakpoint, which is how they drifted apart (one of them had a typo
 * in the e-mail address). It is one block now.
 */
export const Contacts = () => (
  <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr]">
    <div className="flex flex-col gap-5">
      {CONTACTS.map((block) => (
        <div key={block.heading}>
          <h3 className="text-sm font-semibold tracking-wide text-[var(--muted)] uppercase">
            {block.heading}
          </h3>
          <div className="mt-1 flex flex-col gap-0.5">
            {block.lines.map((line) => {
              if (/^\+7/.test(line)) {
                return (
                  <a
                    key={line}
                    href={`tel:${line.replace(/[^\d+]/g, "")}`}
                    className="w-fit whitespace-nowrap py-0.5 text-[var(--accent)] underline-offset-4 hover:underline"
                  >
                    {line}
                  </a>
                );
              }
              if (line.includes("@")) {
                return (
                  <a
                    key={line}
                    href={`mailto:${line}`}
                    className="w-fit py-0.5 text-[var(--accent)] underline-offset-4 hover:underline"
                  >
                    {line}
                  </a>
                );
              }
              return <p key={line}>{line}</p>;
            })}
          </div>
        </div>
      ))}
    </div>

    <div className="min-h-[320px] overflow-hidden rounded-lg border border-[var(--border)]">
      <iframe
        src={MAP_EMBED_URL}
        title="Центр «Генезис» на карте Красноярска"
        loading="lazy"
        className="size-full min-h-[320px] border-0"
      />
    </div>
  </div>
);
