<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import type { StellarAccountInterface } from '$lib/stores/StellarAccount/types';
	import type { StellarBadRequest } from '$lib/types/index';
	import { SINGLE_ACCOUNT } from '$lib/apis/stellar';
	const handleGoBack = () => {
		history.back();
	};
	let inputValue = '';
	let loading = false;
	const handleValidateLogin = async () => {
		try {
			loading = true;
			const data = await fetch(`${SINGLE_ACCOUNT}/${inputValue}`);
			switch (data.status) {
				case 200: {
					const { id } = (await data.json()) as StellarAccountInterface;
					if (id !== '') {
						// localStorage.setItem('stellar_public_address', inputValue);
						// localStorage.setItem('is_logged_in', String(true));
						// window.location.href = '/wallet';
						localStorage.setItem(
							'stellar',
							JSON.stringify({
								public_address: inputValue
							})
						);
						localStorage.setItem('is_logged_in', String(true));
						window.location.href = '/wallet';
					}
					break;
				}
				case 400: {
					const { detail, extras } = (await data.json()) as StellarBadRequest;
					break;
				}
				default: {
					break;
				}
			}
		} catch (err) {
			console.log(err, 'got here');
		} finally {
			loading = false;
		}
	};
</script>

<div class="w-full h-screen bg-gray-100 px-4 flex items-center justify-center flex-col">
	<NavBar title="Masuk" onBack={handleGoBack} />
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
		<button
			on:click={handleValidateLogin}
			class={`w-full p-2 ${loading ? 'bg-gray-500' : 'bg-green-500'} rounded-lg text-white mt-4`}
		>
			{loading ? 'Mohon Menunggu...' : 'Masuk'}
		</button>
	{/if}
</div>
