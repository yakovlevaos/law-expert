"use client";

import { Button, Checkbox, Popover } from "@heroui/react";

import { ChevronDownIcon } from "@/components/icons";
import type { NameRef } from "@/lib/types";

type Props = {
  label: string;
  options: NameRef[];
  selected: number[];
  onToggle: (id: number) => void;
  onClear: () => void;
};

/**
 * One filter facet. The previous implementation built these dropdowns from
 * raw DOM nodes with no labels, no keyboard handling and no way to see or
 * clear what was selected; a Popover of real checkboxes fixes all three.
 */
export const FacetFilter = ({ label, options, selected, onToggle, onClear }: Props) => (
  <Popover>
    <Popover.Trigger>
      <Button variant="outline" size="sm" className="gap-2">
        <span>{label}</span>
        {selected.length > 0 && (
          <span className="grid size-5 place-items-center rounded-full bg-[var(--accent)] text-xs text-[var(--accent-foreground)]">
            {selected.length}
          </span>
        )}
        <ChevronDownIcon className="size-4" />
      </Button>
    </Popover.Trigger>
    <Popover.Content placement="bottom start" className="z-40">
      <Popover.Dialog className="flex max-h-[60vh] w-72 flex-col gap-1 overflow-y-auto p-3">
        <div className="flex items-center justify-between gap-2 pb-2">
          <p className="text-sm font-semibold">{label}</p>
          {selected.length > 0 && (
            <Button variant="ghost" size="sm" onPress={onClear}>
              Сбросить
            </Button>
          )}
        </div>
        {options.map((option) => (
          <Checkbox
            key={option.id}
            isSelected={selected.includes(option.id)}
            onChange={() => onToggle(option.id)}
            className="py-1"
          >
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              {option.name}
            </Checkbox.Content>
          </Checkbox>
        ))}
      </Popover.Dialog>
    </Popover.Content>
  </Popover>
);
