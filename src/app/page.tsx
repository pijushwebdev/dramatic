import AllMovieCategories from "./components/AllMovieCategories";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="pl-0 md:pl-24 max-w-[1440px] mx-auto">
      <Hero />
      <div className="relative -top-40 ">
        <AllMovieCategories />
      </div>
    </main>
  );
}
