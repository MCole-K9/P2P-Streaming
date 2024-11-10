<script lang="ts">
    import { TMDBImageURL } from "$lib/utils/index.js";

    let { data } = $props();

    $inspect(data);
</script>

<h1 class="mb-5 text-center font-bold text-2xl">Movies</h1>

<div class="grid grid-cols-6 gap-5 ">
    {#each data.trending.results || [] as trending}
        <a href="/{trending.media_type}/{trending.id}">
            <div class="card bg-base-100">
                <figure>
                    <img
                        src={TMDBImageURL(
                            trending.poster_path || "",
                            "original",
                        )}
                        alt={trending.title}
                    />
                </figure>
                <div class="p-4">
                    <p>
                        {trending.media_type?.toUpperCase()} - {trending.release_date?.split(
                            "-",
                        )[0]}
                    </p>
                    <h2 class="card-title">{trending.title}</h2>
                    
                </div>
            </div>
        </a>
    {/each}
</div>
