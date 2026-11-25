import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Motel Booking</h1>
      <p className="mt-2">Find and book your perfect stay.</p>

      <Button className="mt-4">Search Hotels</Button>
      <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg">
  Test Button
</button>
    </main>
  );
}