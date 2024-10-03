
import AllMovieCategories from "./components/Hero/AllMovieCategories";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <main className="pl-0 md:pl-14 lg:pl-24 max-w-[1440px] mx-auto">
      <Hero />
      <div className="relative top-0 md:-top-20 lg:-top-40 ">
        <AllMovieCategories />
      </div>
    </main>
  );
}
