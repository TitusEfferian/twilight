<script>
	import NavBar from '$lib/components/NavBar.svelte';
	const handleGoBack = () => {
		history.back();
	};
	let inputValue = '';
</script>

<div class="w-full h-screen bg-gray-100 px-4 flex items-center justify-center flex-col">
	<NavBar onBack={handleGoBack} />
	<input
		type="text"
		bind:value={inputValue}
		class="w-full text-center text-black rounded p-2 border shadow"
		placeholder="Your Public Address..."
	/>
	{#if inputValue === ''}
		<button class="w-full p-2 bg-gray-500 rounded-lg text-white mt-4 transition-all">
			Masuk
		</button>
	{/if}
	{#if inputValue !== ''}
		<button class="w-full p-2 bg-green-500 rounded-lg text-white mt-4"> Masuk </button>
	{/if}
</div>
