import type { paths } from '$lib/types/tmdb';
import { TMDBFetch } from '$lib/utils';
import type { PageLoad } from './$types';

export const load = (async () => {

    const trending = await TMDBFetch("https://api.themoviedb.org/3/trending/all/week?language=en-US") as paths["/3/trending/all/{time_window}"]["get"]["responses"]["200"]["content"]["application/json"];
    
    return {
        trending
    };
}) satisfies PageLoad;