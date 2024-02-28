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

const tech = [
  {
    value: "HTML",
    label: "HTML, CSS",
  },
  {
    value: "React",
    label: "React JS",
  },
  {
    value: "Django",
    label: "Django",
  },
]

export function ComboboxDemo2({year}:{year:React.Dispatch<React.SetStateAction<string>>}) {
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
            ? tech.find((tech) => tech.value === value)?.label
            : "Select tech..."}
            {value}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 text-white bg-black">
        <Command>
          <CommandInput placeholder="Search tech..." className="h-9" />
          <CommandEmpty>No tech found.</CommandEmpty>
          <CommandGroup>
            {tech.map((tech) => (
              <CommandItem
                key={tech.value}
                value={tech.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  year(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {tech.label}
                {/* console.log({value}); */}
                
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === tech.value ? "opacity-100" : "opacity-0"
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
