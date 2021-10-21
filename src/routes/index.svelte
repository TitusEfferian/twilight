<script>
	import TwilightLogo from '$lib/components/TwilightLogo.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		const isLoggedIn = localStorage.getItem('is_logged_in');
		if (isLoggedIn === 'true') {
			window.location.href = '/wallet';
		}
	});
</script>

<svelte:head>
	<title>Twilight Wallet | Cryptocurrency Wallet Indonesia</title>
</svelte:head>

<main class="w-full h-screen bg-gray-100 flex items-center justify-center flex-col px-4">
	<TwilightLogo />
	<h1 class="text-center font-bold">Twilight adalah non kustodia wallet pertama di indonesia.</h1>
	<h2 class="text-xs mt-4">Gratis | <i>Anonymous</i> | Aman</h2>
	<div class="w-full flex items-center justify-around">
		<a href="/" class="text-green-500 text-sm mt-4 underline">Pelajari lebih lanjut</a>
	</div>
	<div class="max-w-xl mx-auto fixed bottom-0 inset-x-0 px-4 mb-8 flex items-center">
		<button class="w-full border border-gray-300 rounded-xl shadow mr-2">
			<a href="/login" class="w-full block p-2"> Masuk </a>
		</button>
		<button class="w-full border border-green-500 bg-green-500 rounded-xl text-white shadow">
			<a href="/login" class="w-full block p-2"> Buat Akun Baru </a>
		</button>
	</div>
</main>
