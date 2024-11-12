import { initialCategories, remainingCategories } from "@/app/apis/movieCategoriesUrl";
import MoviesByCategoryClient from "../(myComponent)/movieComponents/MoviesByCategoryClient";
import MoviesByCategory from "../(myComponent)/movieComponents/MoviesByCategory";


const AllMovieCategories = () => {

  return (
    <div className="pl-4 md:pl-0">
      {initialCategories.map((category, index) => (
        <MoviesByCategory key={index} category={category} />
      ))}


      <MoviesByCategoryClient categories={remainingCategories}/>
    </div>
  );
};

export default AllMovieCategories;
