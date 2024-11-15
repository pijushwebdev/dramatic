

export  const movieCategoryArray = [
        {
            title: 'Bollywood Classics',
            apiUrl: `/discover/movie?sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_original_language=hi`
        },
        {
            title: 'Popular TV Shows',
            apiUrl: `/discover/tv?language=en-US&sort_by=popularity.desc&include_adult=false&page=1`,
        },
        {
            title: 'Popular Movies',
            apiUrl: `/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
        },
        {
            title: 'Top Rated',
            apiUrl: `/movie/top_rated?language=en-US&page=1`,
        },
    
        {
            title: 'Best by Tom Cruise',
            apiUrl: `/discover/movie?language=en-US&include_adult=false&page=1&with_cast=500&with_people=500&sort_by=vote_count.desc`,
        },
        {
            title: 'Top Rated TV Shows',
            apiUrl: `/tv/top_rated?language=en-US&page=1`,
        },
        {
            title: 'Action',
            apiUrl: `/discover/movie?language=en-US&include_adult=false&include_video=false&page=1&with_genres=28`,
        },
        {
            title: 'Best by Shah Rukh Khan',
            apiUrl: `/discover/movie?language=en-US&include_adult=false&page=1&with_cast=35742&with_people=35742&sort_by=vote_count.desc`,
        },
        {
            title: 'Comedy',
            apiUrl: `/discover/movie?language=en-US&include_adult=false&include_video=false&page=1&with_genres=35`,
        },
        {
            title: 'Horror',
            apiUrl: `/discover/movie?language=en-US&include_adult=false&include_video=false&page=1&with_genres=27`,
        },
        {
            title: 'Best from 2010',
            apiUrl: `/discover/movie?language=en-US&include_adult=false&include_video=false&page=1&primary_release_year=2010&sort_by=vote_count.desc`,
        },
        {
            title: 'Best by Leonardo DiCaprio',
            apiUrl: `/discover/movie?language=en-US&include_adult=false&page=1&with_cast=6194&with_people=6194&sort_by=vote_count.desc`,
        },
        {
            title: 'Sci-Fi',
            apiUrl: `/discover/movie?language=en-US&include_adult=false&include_video=false&page=1&with_genres=878&sort_by=vote_count.desc`,
        },
        {
            title: 'Crime',
            apiUrl: `/discover/movie?language=en-US&include_adult=false&include_video=false&page=1&with_genres=80`,
        },
    ];


    const initialCategories = movieCategoryArray.slice(0, 2);
    const remainingCategories = movieCategoryArray.slice(2);

export {initialCategories, remainingCategories}
    


  



