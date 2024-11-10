<script lang="ts">
    
    let { data } = $props();

    $inspect(data);
</script>


<main>
    <a class="btn btn-primary m-4" href="/">Back</a>
    <h1 class="my-5 text-center font-bold text-2xl">Movies</h1>


    <div class="grid">
        {#each data.trending.results as trending}

            {trending.name}
        {/each}

    </div>
    
    
</main>