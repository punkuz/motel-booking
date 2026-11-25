import { HotelSearch } from "./hotel-search";
export function HeroSection() {
  return (
    <section className='bg-primary text-primary-foreground'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
        <h1 className='text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
          Find your next stay
        </h1>

        <p className='mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl'>
          Discover amazing hotels, motels and unique stays at prices you will love.
        </p>
        <div className='mt-10'>
          <HotelSearch />
        </div>
      </div>
    </section>
  );
}
