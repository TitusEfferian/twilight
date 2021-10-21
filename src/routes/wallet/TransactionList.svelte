<script lang="ts">
	import StellarTransactions from '$lib/stores/StellarTransactions';
	import type { StellarTransactionsInterface } from '$lib/types';
	let data: StellarTransactionsInterface;
	const unsubscribe = StellarTransactions.subscribe((val) => {
		data = val;
	});
</script>

<div class="w-full px-4 mt-4">
	{#if data._embedded.records.length > 0}
		<ol class="w-full p-4 rounded shadow bg-white">
			{#each data._embedded.records as { memo }}
				<li>{memo}</li>
			{/each}
		</ol>
	{/if}
</div>
