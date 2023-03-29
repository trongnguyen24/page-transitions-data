<script>
	export let form;
</script>

<div class="flex flex-col items-center h-full w-full">
	<h2 class="my-12 text-center text-3xl font-bold text-slate-800">Login to your account</h2>
	<form action="?/login" method="POST" class="w-full max-w-sm">
		<div class="mb-6">
			<label for="email" class="block text-sm font-semibold leading-6 text-gray-700">
				Email address
			</label>
			<input
				type="email"
				name="email"
				class="mt-2 appearance-none text-slate-800 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-400 ring-1 ring-slate-200"
			/>
		</div>
		<div class="mb-6">
			<label for="password" class="block text-sm font-semibold leading-6 text-gray-700">
				Password
			</label>
			<input
				type="password"
				name="password"
				class="mt-2 appearance-none text-slate-800 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-400 ring-1 ring-slate-200"
			/>
		</div>

		<div class="w-full max-w-md pt-2">
			<button
				type="submit"
				class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-800 text-white hover:bg-slate-700 w-full transition-colors duration-150"
				>Login</button
			>
		</div>
	</form>
</div>
