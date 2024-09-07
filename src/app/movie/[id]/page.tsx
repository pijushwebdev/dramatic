
import { fetchData } from "@/app/apis/api";
import DetailsPoster from "../../components/(myComponent)/DetailsPoster";

const MovieDetails = async ({params}:{params: {id: string}}) => {
    const paramId = params.id;
    const movie = await fetchData(`/movie/${paramId}`);

  return (
    <div className="pl-0 md:pl-24 max-w-[1440px] mx-auto">
        <DetailsPoster movie={movie}  />
    </div>
  );
};

export default MovieDetails;
