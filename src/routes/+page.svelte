<script>
	export let data;
</script>

<div class="w-full max-w-screen-md px-4 mx-auto flex flex-col justify-center text-center">
	<h1 class="text-4xl pb-6">Welcome to SvelteKit</h1>

	{#each data.projects as project}
		<article class="text-left mb-8">
			<h2 class="text-2xl pb-2">
				{project.title}
			</h2>
			<p class="text-slate-600">{project.body}</p>
		</article>
	{/each}
</div>
