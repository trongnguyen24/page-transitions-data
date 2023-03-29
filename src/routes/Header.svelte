<script>
	import { page } from '$app/stores';

	let menu = [
		{
			title: 'Project',
			link: '/'
		},
		{
			title: 'Docs',
			link: '/docs'
		}
	];
</script>

<nav
	class="z-20 fixed w-full bg-white bg-opacity-50 backdrop-blur-sm border-b border-white h-14 items-center flex"
>
	<div class="max-w-screen-2xl w-full mx-auto items-center px-4 justify-between flex">
		<div class="flex gap-2 items-center font-mono font-bold">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-8 h-8"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
				/>
			</svg>
			TRAN
		</div>
		<ul class="flex gap-8">
			{#each menu as menulink}
				<li
					aria-current={$page.url.pathname === menulink.link ? 'page' : undefined}
					class="text-slate-700 hover:text-slate-800 aria-current:text-sky-100"
				>
					<a class="block" href={menulink.link}>{menulink.title}</a>
				</li>
			{/each}

			<li class="">
				<a href="/login">
					<svg
						width="24"
						height="24"
						class=" stroke-slate-600 hover:stroke-slate-800"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M17.9815 18.7248C16.6121 16.9175 14.4424 15.75 12 15.75C9.55761 15.75 7.38789 16.9175 6.01846 18.7248M17.9815 18.7248C19.8335 17.0763 21 14.6744 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.6744 4.1665 17.0763 6.01846 18.7248M17.9815 18.7248C16.3915 20.1401 14.2962 21 12 21C9.70383 21 7.60851 20.1401 6.01846 18.7248M15 9.75C15 11.4069 13.6569 12.75 12 12.75C10.3431 12.75 9 11.4069 9 9.75C9 8.09315 10.3431 6.75 12 6.75C13.6569 6.75 15 8.09315 15 9.75Z"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			</li>
		</ul>
	</div>
</nav>
