<script lang="ts">
    
    let { data, children } = $props();
</script>
<main class="p-4">
    <a class="btn btn-primary" href="/">Back</a>
    {@render children()}
</main>
