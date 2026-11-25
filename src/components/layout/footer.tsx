import Link from "next/link";
import { BedDouble } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <BedDouble className="size-7" />
              <span className="text-xl font-bold">
                MotelBooking
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm text-slate-400">
              Discover great stays, wherever life takes you.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <Link href="/about">About us</Link>
              <Link href="/contact">Contact us</Link>
              <Link href="/list-property">List your property</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Support</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <Link href="/help">Help centre</Link>
              <Link href="/privacy">Privacy policy</Link>
              <Link href="/terms">Terms of service</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © 2026 MotelBooking. All rights reserved.
        </div>
      </div>
    </footer>
  );
}