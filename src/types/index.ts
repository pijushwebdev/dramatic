import { MouseEventHandler } from "react";


export interface NavLinksProps {
    title: string,
    href: string,
    linkStyles?: string,
    handleOpener?: MouseEventHandler<HTMLAnchorElement>,
}
export interface NavButtonProps {
    BtnIcon?: JSX.Element,
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
    genres?: TGenre[];
    homepage?: string;
    imdb_id?: string;
    origin_country?: string[] | null;
    production_companies?: TProductionCompanies[];
    belongs_to_collection?: TBelongs_to_collection[] | null;
    budget?: number;
    production_countries?: TProduction_countries[];
    revenue?: number;
    runtime?: number;
    spoken_languages?: TSpoken_languages[];
    status?: string;
    tagline?: string;
}

type TSpoken_languages = {
    iso_639_1: string;
    name: string;
    english_name: string;
}
type TProduction_countries = {
    name: string;
    iso_3166_1: string;
}
type TBelongs_to_collection = {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

type TProductionCompanies = {
    id: number;
    name: string;
    origin_country: string;
    logo_path: string;
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
export type TTvShowApiResponse = {
    page: number;
    results: TTvShow[];
    total_pages: number;
    total_results: number;
}
export type TTvShow = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    first_air_date: string;
    name: string;
    vote_average: number;
    vote_count: number;
}
export type TVideo = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}

export type TCastMember = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

export type TSimilarMovies = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type TCategoryUrl = {
    title: string;
    apiUrl: string
}
