import { useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

interface CheckboxSelectProps {
  label: string;
  options: string[];
  value?: string[];
  onChange?: (selected: string[]) => void;
}

export function CheckboxSelect({
  label,
  options,
  value,
  onChange,
}: CheckboxSelectProps) {
  const [selected, setSelected] = useState<string[]>(value ?? []);

  const toggle = (item: string) => {
    const newValue = selected.includes(item)
      ? selected.filter((i) => i !== item)
      : [...selected, item];

    setSelected(newValue);

    if (onChange) onChange(newValue);
  };

  return (
    <Popover>
      <PopoverTrigger className="bg-white! text-main" asChild>
        <Button variant="outline" className="w-[15vw] justify-between">
          {selected.length > 0 ? `${selected.length} Selected` : label}
          <ChevronsUpDown className="w-4 h-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[250px] bg-white p-2">
        <Command className="bg-white ">
          <CommandEmpty>No options available.</CommandEmpty>
          <CommandGroup>
            {options.map((item) => (
              <CommandItem
                key={item}
                onSelect={() => toggle(item)}
                className="flex items-center text-main hover:text-white gap-2 cursor-pointer"
              >
                <Checkbox
                  checked={selected.includes(item)}
                  className=" border-gray-400 data-[state=checked]:bg-white!
                  "
                />
                <span>{item}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
