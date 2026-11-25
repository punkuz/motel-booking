"use client";

import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { MapPin, CalendarDays, Users, Search, Plus, Minus } from "lucide-react";
import { format, differenceInCalendarDays } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DESTINATIONS } from "@/constants/destinations";

export function HotelSearch() {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState<DateRange | undefined>();
  const [today, setToday] = useState<Date>();

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const nights =
    dates?.from && dates?.to ? differenceInCalendarDays(dates.to, dates.from) : 0;
  return (
    <div className='grid gap-2 rounded-xl bg-white p-3 text-foreground shadow-lg lg:grid-cols-[1.2fr_1fr_1fr_auto]'>
      {/* Destination */}
      <Popover>
        <PopoverTrigger
          render={
            <button
              type='button'
              className='flex items-center gap-3 rounded-lg border p-3 text-left'
            />
          }
        >
          <MapPin className='size-5 shrink-0 text-muted-foreground' />

          <div className='min-w-0 flex-1'>
            <p className='text-sm font-semibold'>Destination</p>
            <p className='truncate text-sm text-muted-foreground'>
              {destination || "Where are you going?"}
            </p>
          </div>
        </PopoverTrigger>

        <PopoverContent className='w-80 p-3' align='start'>
          <Input
            placeholder='Search destinations...'
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />

          <div className='mt-2 max-h-64 overflow-y-auto'>
            {DESTINATIONS.filter(({ city, state }) =>
              `${city} ${state}`.toLowerCase().includes(destination.toLowerCase()),
            ).map(({ city, state, country }) => (
              <button
                key={city}
                type='button'
                onClick={() => setDestination(city)}
                className='flex w-full items-center gap-3 rounded-lg p-3 text-left hover:bg-muted'
              >
                <MapPin className='size-5 text-muted-foreground' />

                <div>
                  <p className='text-sm font-medium'>{city}</p>
                  <p className='text-xs text-muted-foreground'>
                    {state}, {country}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      {/* Dates */}
      <Popover
        onOpenChange={(open) => {
          if (open) {
            const date = new Date();
            date.setHours(0, 0, 0, 0);
            setToday(date);
          }
        }}
      >
        <PopoverTrigger
          render={
            <button
              type='button'
              className='flex items-center gap-3 rounded-lg border p-3 text-left'
            />
          }
        >
          <CalendarDays className='size-5 shrink-0 text-muted-foreground' />

          <div>
            <p className='text-sm font-semibold'>Check-in — Check-out</p>

            <p className='text-sm text-muted-foreground'>
              {dates?.from
                ? dates.to
                  ? `${format(dates.from, "dd MMM")} — ${format(dates.to, "dd MMM")}`
                  : format(dates.from, "dd MMM")
                : "Select dates"}
            </p>
          </div>
        </PopoverTrigger>

        <PopoverContent className='w-auto p-0' align='start'>
          {today && (
            <Calendar
              mode='range'
              selected={dates}
              onSelect={setDates}
              numberOfMonths={1}
              disabled={{ before: today }}
              min={1}
            />
          )}
          {nights > 0 && (
            <div className='border-t p-3 text-center text-sm font-medium'>
              {nights} {nights === 1 ? "night" : "nights"} selected
            </div>
          )}
        </PopoverContent>
      </Popover>

      {/* Guests */}
      <Popover>
        <PopoverTrigger
          render={
            <button
              type='button'
              className='flex items-center gap-3 rounded-lg border p-3 text-left'
            />
          }
        >
          <Users className='size-5 shrink-0 text-muted-foreground' />

          <div>
            <p className='text-sm font-semibold'>Guests</p>
            <p className='text-sm text-muted-foreground'>
              {adults} adults · {children} children · {rooms} rooms
            </p>
          </div>
        </PopoverTrigger>

        <PopoverContent className='w-80 p-4' align='start'>
          <div className='space-y-5'>
            {[
              {
                label: "Adults",
                value: adults,
                setter: setAdults,
                min: 1,
                max: 30,
              },
              {
                label: "Children",
                value: children,
                setter: setChildren,
                min: 0,
                max: 10,
              },
              {
                label: "Rooms",
                value: rooms,
                setter: setRooms,
                min: 1,
                max: 10,
              },
            ].map(({ label, value, setter, min, max }) => (
              <div key={label} className='flex items-center justify-between'>
                <span className='text-sm font-medium'>{label}</span>

                <div className='flex items-center gap-4'>
                  <Button
                    type='button'
                    variant='outline'
                    size='icon'
                    aria-label={`Decrease ${label}`}
                    disabled={value <= min}
                    onClick={() => setter((prev) => Math.max(min, prev - 1))}
                  >
                    <Minus />
                  </Button>

                  <span className='w-6 text-center'>{value}</span>

                  <Button
                    type='button'
                    variant='outline'
                    size='icon'
                    aria-label={`Increase ${label}`}
                    disabled={value >= max}
                    onClick={() => setter((prev) => Math.min(max, prev + 1))}
                  >
                    <Plus />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      {/* Search */}
      <Button className='h-full min-h-14 bg-teal-700 px-8 text-white hover:bg-teal-800'>
        <Search className='size-5' />
        Search
      </Button>
    </div>
  );
}
