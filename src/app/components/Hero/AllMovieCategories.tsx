import { initialCategories, remainingCategories } from "@/app/apis/movieCategoriesUrl";
import MoviesByCategoryClient from "../(myComponent)/movieComponents/MoviesByCategoryClient";
import MoviesByCategory from "../(myComponent)/movieComponents/MoviesByCategory";


const AllMovieCategories = () => {

  return (
    <div>
      {initialCategories.map((category, index) => (
        <MoviesByCategory key={index} category={category} />
      ))}


      <MoviesByCategoryClient categories={remainingCategories}/>
    </div>
  );
};

export default AllMovieCategories;
