"use client";

import { ExpertCard } from "@/components/home/ExpertCard";
import { Rail } from "@/components/ui/Rail";
import type { Expert } from "@/data/experts";

export const ExpertsRail = ({ experts }: { experts: Expert[] }) => (
  <Rail label="Специалисты центра">
    {experts.map((expert) => (
      <ExpertCard key={expert.photo + expert.name} expert={expert} />
    ))}
  </Rail>
);
