<script lang="ts">
    import { TMDBImageURL } from '$lib/utils/index.js';

    let { data } = $props();

    $inspect(data);
</script>

<main class="p-4">
    <a class="btn btn-primary" href="/">Back</a>
    <h1 class="mb-5 text-center font-bold text-2xl">Movies</h1>

    <div class="grid grid-cols-4 gap-5">
        {#each data.trending.results as trending}
            <div class="card bg-base-100  shadow-xl">
                <figure>
                    <img
                        src="{TMDBImageURL(trending.poster_path, 'original')}"
                        alt="Shoes"
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{trending.title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</main>
