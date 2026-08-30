"use client";

import { Label, ListBox, Select } from "@heroui/react";

import { ORDERING_OPTIONS } from "@/lib/filters";

/**
 * Sort order for the whole result set. The desktop table also exposes this
 * through clickable column headers; both write the same `ordering` value, so
 * there is one source of truth and the card layout is not left without a way
 * to sort.
 */
export const SortSelect = ({
  value,
  onChange,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) => (
  <Select
    // An empty string is a real option here (the backend's default order), so
    // the key has to be something the list can actually match on.
    value={value || "default"}
    onChange={(next) => onChange(next === "default" ? "" : String(next))}
    className={className}
    aria-label="Сортировка"
  >
    <Select.Trigger className="min-w-56">
      <Select.Value />
      <Select.Indicator />
    </Select.Trigger>
    <Select.Popover>
      <ListBox>
        {ORDERING_OPTIONS.map((option) => (
          <ListBox.Item key={option.value} id={option.value || "default"}>
            <Label>{option.label}</Label>
            <ListBox.ItemIndicator />
          </ListBox.Item>
        ))}
      </ListBox>
    </Select.Popover>
  </Select>
);
