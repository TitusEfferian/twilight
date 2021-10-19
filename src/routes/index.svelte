<!-- <script>
import { onMount } from 'svelte';

	import { SINGLE_ACCOUNT } from '../../apis/stellar';
	export const prerender = true;
	let inputValue = '';

	const handleClickLogin = async () => {
		const data = await fetch(`${SINGLE_ACCOUNT}/${inputValue}`);
		const { id } = await data.json();
		if (id) {
			localStorage.setItem('stellar_public_address', id);
			localStorage.setItem('is_logged_in', 'true');
			window.location.href = '/wallet';
		} else {
			alert('no public address found');
		}
	};
    onMount(()=>{
        if(localStorage.getItem('is_logged_in') === 'true') {
            window.location.href = '/wallet';
        }
    });
</script>

<div class="w-full h-screen bg-gray-100">
	<header class="w-full h-60 bg-purple-300" />

	<main class="rounded-t-3xl bg-gray-100 w-full pt-16 -mt-8 pl-2 pr-2">
		<p class="text-lg font-bold text-center">
			Non Kustodia Stellar Wallet pertama <br />di Indonesia.
		</p>
		<input
			type="text"
			bind:value={inputValue}
			class="w-full px-2 py-4 text-xl bg-red-white rounded-xl text-center shadow-lg mt-8"
			placeholder="public address..."
		/>
		<button
			class="py-4 w-full mt-8 rounded-lg bg-black text-white font-bold d"
			on:click={handleClickLogin}>Login</button
		>
	</main>
</div> -->

<main class="w-full h-screen bg-gray-100 flex items-center justify-center flex-col px-4">
    <h1 class="text-center font-bold">Twilight adalah non kustodia wallet pertama di indonesia.</h1>
    <div class="w-full flex items-center justify-around">
        <!-- <div class="flex flex-col items-center">
            <p class="text-green-500 font-bold text-2xl">1</p>
            <p>token</p>
        </div>
        <div class="flex flex-col items-center">
            <p>1</p>
            <p>token</p>
        </div>
        <div class="flex flex-col items-center">
            <p>1</p>
            <p>token</p>
        </div> -->
        <a href="/" class="text-green-500 text-sm mt-4 underline">Pelajari lebih lanjut</a>
    </div>
    <div class="max-w-xl mx-auto fixed bottom-0 inset-x-0 px-4 mb-8 flex items-center">
        <button class="w-full border border-gray-300 rounded-xl shadow p-2 mr-2">Login</button>
        <button class="w-full border border-green-500 bg-green-500 rounded-xl text-white shadow p-2">Buat Wallet Baru</button>
    </div>
</main>