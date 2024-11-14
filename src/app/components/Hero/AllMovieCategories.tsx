import { initialCategories, remainingCategories } from "@/app/apis/movieCategoriesUrl";
import MoviesByCategory from "../movieComponents/MoviesByCategory";
import MoviesByCategoryClient from "../movieComponents/MoviesByCategoryClient";



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
