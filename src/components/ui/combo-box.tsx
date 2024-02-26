"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const years = [
  {
    value: "1",
    label: "1st year",
  },
  {
    value: "2",
    label: "2nd year",
  },
  {
    value: "3",
    label: "3rd year",
  },
  {
    value: "4",
    label: "4th year",
  },
  {
    value: "0",
    label: "Others",
  },
]

export function ComboboxDemo({year}:{year:React.Dispatch<React.SetStateAction<string>>}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <div className="bg-black">
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-center"
        >
          {value
            ? years.find((years) => years.value === value)?.label
            : "Select years..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 text-white bg-black">
        <Command>
          <CommandInput placeholder="Search years..." className="h-9" />
          <CommandEmpty>No years found.</CommandEmpty>
          <CommandGroup>
            {years.map((years) => (
              <CommandItem
                key={years.value}
                value={years.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  year(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {years.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === years.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
    </div>
  )
}
