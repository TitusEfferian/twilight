<script lang="ts">
	import StellarAccount from '$lib/stores/StellarAccount';

	import type { StellarAccountBalances } from '$lib/stores/StellarAccount/types';
	let balances: StellarAccountBalances[];
	const unsubs = StellarAccount.subscribe((val) => {
		balances = val.balances;
	});
</script>

<header class="w-full h-52 bg-green-500 flex items-center justify-center">
	{#if balances.length === 0}
		<div class="w-48 h-6 bg-green-200 animate-pulse" />
	{/if}
	{#if balances.length > 0}
		<h1 class="font-bold text-3xl text-white">{balances[0].balance}XLM</h1>
	{/if}
</header>
