import { PUBLIC_TMDB } from "$env/static/public";
import { fetch } from "@tauri-apps/plugin-http";

export async function TMDBFetch(url: string | URL, options: Record<string, unknown> = {}) {
  console.log(PUBLIC_TMDB)
    try{
        const res = await fetch(url, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${PUBLIC_TMDB}`
            },
            ...options
        })
        return await res.json()
    }catch(err){
    
        return {error: true, message: err}
    }


}

export function TMDBImageURL(poster_path: string, size: string = "w220_and_h330_face") {
    return `https://image.tmdb.org/t/p/${size}${poster_path}`
}



