"use client";

import { Button, Checkbox, NumberField, Popover, Separator } from "@heroui/react";

import { ChevronDownIcon } from "@/components/icons";
import type { NameRef } from "@/lib/types";

type Props = {
  /** Playtime categories (`duration_type`) as named by the backend. */
  options: NameRef[];
  selected: number[];
  onToggleType: (id: number) => void;
  min: number | null;
  max: number | null;
  endless: boolean;
  onRangeChange: (min: number | null, max: number | null) => void;
  onEndlessChange: (endless: boolean) => void;
  onClear: () => void;
};

/**
 * Playtime, in one control: the coarse categories the catalog is tagged with
 * and the exact hour range underneath them. Splitting these into two separate
 * dropdowns would put one concept in two places; the backend ANDs whatever is
 * set, so both can be used at once.
 */
export const DurationFilter = ({
  options,
  selected,
  onToggleType,
  min,
  max,
  endless,
  onRangeChange,
  onEndlessChange,
  onClear,
}: Props) => {
  const activeCount =
    selected.length +
    (min !== null ? 1 : 0) +
    (max !== null ? 1 : 0) +
    (endless ? 1 : 0);

  return (
    <Popover>
      <Popover.Trigger>
        <Button variant="outline" size="sm" className="gap-2">
          <span>Продолжительность</span>
          {activeCount > 0 && (
            <span className="grid size-5 place-items-center rounded-full bg-[var(--accent)] text-xs text-[var(--accent-foreground)]">
              {activeCount}
            </span>
          )}
          <ChevronDownIcon className="size-4" />
        </Button>
      </Popover.Trigger>
      <Popover.Content placement="bottom start" className="z-40">
        <Popover.Dialog className="flex max-h-[70vh] w-80 flex-col gap-1 overflow-y-auto p-3">
          <div className="flex items-center justify-between gap-2 pb-2">
            <p className="text-sm font-semibold">Продолжительность</p>
            {activeCount > 0 && (
              <Button variant="ghost" size="sm" onPress={onClear}>
                Сбросить
              </Button>
            )}
          </div>

          {options.map((option) => (
            <Checkbox
              key={option.id}
              isSelected={selected.includes(option.id)}
              onChange={() => onToggleType(option.id)}
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

          <Separator className="my-3" />

          <p className="pb-2 text-sm font-semibold">Часы прохождения</p>
          <div className="flex items-end gap-2">
            <NumberField
              value={min ?? Number.NaN}
              onChange={(value) =>
                onRangeChange(Number.isNaN(value) ? null : value, max)
              }
              minValue={0}
              aria-label="Не меньше, часов"
              className="flex-1"
            >
              <NumberField.Group>
                <NumberField.Input placeholder="от" />
              </NumberField.Group>
            </NumberField>
            <span className="pb-2 text-sm text-[var(--muted)]">—</span>
            <NumberField
              value={max ?? Number.NaN}
              onChange={(value) =>
                onRangeChange(min, Number.isNaN(value) ? null : value)
              }
              minValue={0}
              aria-label="Не больше, часов"
              className="flex-1"
            >
              <NumberField.Group>
                <NumberField.Input placeholder="до" />
              </NumberField.Group>
            </NumberField>
          </div>

          <Checkbox
            isSelected={endless}
            onChange={onEndlessChange}
            className="pt-3"
          >
            <Checkbox.Content>
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              Без ограничения по времени
            </Checkbox.Content>
          </Checkbox>
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  );
};
