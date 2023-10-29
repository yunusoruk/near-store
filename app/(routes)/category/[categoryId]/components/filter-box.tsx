"use client"

import qs from "query-string"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { Color, Size } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, type FC } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"

interface FilterBoxProps {
    valueKey: string
    name: string
    data: (Size | Color)[]
}

const FilterBox: FC<FilterBoxProps> = ({
    valueKey,
    name,
    data
}) => {

    const [open, setOpen] = useState(false)

    const searchParams = useSearchParams()
    const router = useRouter()

    const selectedValue = searchParams.get(valueKey)

    const current = qs.parse(searchParams.toString())


    const onSelect = (id: string, valueKey: string) => {

        const query = {
            ...current,
            [valueKey]: id
        }

        // If value key if the curent id, then user wants to remove the filter.
        if (current[valueKey] === id) {
            query[valueKey] = null
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true })

        router.push(url)
    }

    return (
        <>
            {/* TODO: FIX MOBILE VIEW */}
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between"
                    >
                        {current[valueKey] !== undefined
                            ? data?.find((item) => item.id === current[valueKey])?.name
                            : `Select ${name}...`}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder={`Search ${valueKey}...`} className="h-9" />
                        <CommandEmpty>No role found.</CommandEmpty>
                        <CommandGroup>
                            {data?.map((item) => (
                                <CommandItem
                                    value={item.id}
                                    key={item.id}
                                    onSelect={(currentValue) => {
                                        // setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                        onSelect(currentValue, valueKey)



                                    }}
                                >
                                    {item.name}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            current[valueKey] === item.id ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </>
    );
}
export default FilterBox;