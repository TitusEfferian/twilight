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
			{#each data._embedded.records as { memo }, index}
				<li class={`w-full p-2 ${index > 0 && 'mt-4'} flex items-center justify-between`}>
					<div class="flex items-center">
						<div class="w-12 h-12 rounded-3xl shadow border border-gray-300">
							<img
								alt="xlm"
								src="https://firebasestorage.googleapis.com/v0/b/twilight-wallet.appspot.com/o/stellar%2Fstellar-xlm-logo%20(2).webp?alt=media&token=e368dfc6-f6dd-4465-a522-515766670500"
							/>
						</div>
						<div class="ml-4">
							<p class="text-sm font-bold">Lumens</p>
							<p class="text-sm text-gray-800">XLM</p>
						</div>
					</div>
					<p class="font-bold">+1</p>
				</li>
			{/each}
		</ol>
	{/if}
</div>
