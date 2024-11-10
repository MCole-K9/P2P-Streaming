import { TMDBFetch } from '$lib/utils';
import type { PageLoad } from './$types';

export const load = (async () => {

    const trending = await TMDBFetch("https://api.themoviedb.org/3/trending/all/week?language=en-US")
    
    return {
        trending
    };
}) satisfies PageLoad;