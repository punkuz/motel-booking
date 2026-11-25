import Link from "next/link";
import { BedDouble } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <BedDouble className="size-7" />
          <span className="text-xl font-bold">
            MotelBooking
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="hidden sm:inline-flex"
          >
            AUD
          </Button>

          <Link
            href="/list-property"
            className="hidden text-sm font-medium md:block"
          >
            List your property
          </Link>

          <Button
            variant="outline"
            className="hidden border-white bg-transparent text-white sm:inline-flex"
          >
            Register
          </Button>

          <Button variant="secondary">
            Sign in
          </Button>
        </nav>
      </div>
    </header>
  );
}