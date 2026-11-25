"use client";

import {
  MapPin,
  CalendarDays,
  Users,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HotelSearch() {
  return (
    <div className="grid gap-2 rounded-xl bg-white p-3 text-foreground shadow-lg lg:grid-cols-[1.2fr_1fr_1fr_auto]">
      {/* Destination */}
      <div className="flex items-center gap-3 rounded-lg border p-3">
        <MapPin className="size-5 shrink-0 text-muted-foreground" />

        <div className="min-w-0 flex-1">
          <label htmlFor="destination" className="text-sm font-semibold">
            Destination
          </label>

          <Input
            id="destination"
            placeholder="Where are you going?"
            className="h-auto border-0 p-0 shadow-none focus-visible:ring-0"
          />
        </div>
      </div>

      {/* Dates */}
      <button
        type="button"
        className="flex items-center gap-3 rounded-lg border p-3 text-left"
      >
        <CalendarDays className="size-5 shrink-0 text-muted-foreground" />

        <div>
          <p className="text-sm font-semibold">
            Check-in — Check-out
          </p>
          <p className="text-sm text-muted-foreground">
            Select dates
          </p>
        </div>
      </button>

      {/* Guests */}
      <button
        type="button"
        className="flex items-center gap-3 rounded-lg border p-3 text-left"
      >
        <Users className="size-5 shrink-0 text-muted-foreground" />

        <div>
          <p className="text-sm font-semibold">Guests</p>
          <p className="text-sm text-muted-foreground">
            2 adults · 1 room
          </p>
        </div>
      </button>

      {/* Search */}
      <Button className="h-full min-h-14 bg-teal-700 px-8 text-white hover:bg-teal-800">
        <Search className="size-5" />
        Search
      </Button>
    </div>
  );
}