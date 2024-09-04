import { MouseEventHandler } from "react";


export interface NavLinksProps {
    title: string,
    href: string,
    linkStyles?: string,

}
export interface NavButtonProps {
    BtnIcon? : JSX.Element,
    title?: string,
    btnStyle?: string,
    btnStyle2?: string,
    profileImg?: boolean,
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export type TMovie = {
    adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type TGenre = {
    id: number;
    name: string;
}

export type TMovieApiResponse = {
    page: number;
    results: TMovie[];
    total_pages: number;
    total_results: number;
  }