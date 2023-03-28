<script>
	import Header from './Header.svelte';
	import '../app.css';
	import bgimg from '$lib/images/bg.webp';
	import bgimg_fallback from '$lib/images/bg.jpg';
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div class="app">
	<Header />
	<div class="flex flex-col min-h-full">
		<!-- beam background -->
		<div
			class="absolute z-10 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none select-none"
		>
			<div class="w-[106.25rem] flex-none justify-center">
				<picture>
					<source srcset={bgimg} type="image/webp" />
					<img src={bgimg_fallback} alt="BG" />
				</picture>
			</div>
		</div>

		<main class="w-full grow mx-auto z-10 pt-28">
			<slot />
		</main>
	</div>
</div>
