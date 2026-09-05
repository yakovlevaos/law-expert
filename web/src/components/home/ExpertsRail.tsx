"use client";

import { useState } from "react";

import { ExpertCard } from "@/components/home/ExpertCard";
import { Rail } from "@/components/ui/Rail";
import type { Expert } from "@/data/experts";

export const ExpertsRail = ({ experts }: { experts: Expert[] }) => {
  /*
   * One expanded state for the whole rail rather than one per card: the cards
   * sit side by side in a row, so unfolding a single biography would leave it
   * towering over its neighbours. Expanding and collapsing both apply to
   * every card at once, and the row keeps a common height either way.
   */
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => setIsExpanded((value) => !value);

  return (
    <Rail label="Специалисты центра">
      {experts.map((expert) => (
        <ExpertCard
          key={expert.photo + expert.name}
          expert={expert}
          isExpanded={isExpanded}
          onToggle={toggle}
        />
      ))}
    </Rail>
  );
};
