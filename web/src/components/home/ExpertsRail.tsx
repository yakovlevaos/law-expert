"use client";

import { ExpertCard } from "@/components/home/ExpertCard";
import { Rail } from "@/components/ui/Rail";
import type { Expert } from "@/data/experts";

export const ExpertsRail = ({ experts }: { experts: Expert[] }) => (
  <Rail label="Специалисты центра" itemClassName="w-[82vw] sm:w-[340px]">
    {experts.map((expert) => (
      <ExpertCard key={expert.photo + expert.name} expert={expert} />
    ))}
  </Rail>
);
