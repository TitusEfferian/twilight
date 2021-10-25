<script lang="ts">
	import StellarPayments from '$lib/stores/StellarPayments';

	import type { StellarPaymentsInterface } from '$lib/types';
	import { onDestroy, onMount } from 'svelte';
	let data: StellarPaymentsInterface;
	let currPublicAddress = '';
	const unsubscribe = StellarPayments.subscribe((val) => {
		data = val;
	});
	onDestroy(() => {
		unsubscribe();
	});
	onMount(() => {
		currPublicAddress = JSON.parse(localStorage.getItem('stellar')).public_address;
	});
</script>

<div class="w-full px-4 mt-4">
	{#if data._embedded.records.length > 0}
		<ol class="w-full p-4 rounded shadow bg-white">
			{#each data._embedded.records as { type }, index}
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
					<!-- creating account of other public address -->
					{#if type === 'create_account'}
						<!-- our public address firstly activated -->
						{#if data._embedded.records[index].funder === currPublicAddress}
							<p class="font-bold text-red-500">
								-{data._embedded.records[index].starting_balance}
							</p>
						{/if}
						<!-- activating other people public address -->
						{#if data._embedded.records[index].funder !== currPublicAddress}
							<p class="font-bold text-green-500">
								+{data._embedded.records[index].starting_balance}
							</p>
						{/if}
					{/if}
					{#if type === 'payment'}
						<!-- sending -->
						{#if data._embedded.records[index].from === currPublicAddress}
							<p class="font-bold text-red-500">-{data._embedded.records[index].amount}</p>
						{/if}
						<!-- receiving -->
						{#if data._embedded.records[index].from !== currPublicAddress}
							<p class="font-bold text-green-500">+{data._embedded.records[index].amount}</p>
						{/if}
					{/if}
				</li>
			{/each}
		</ol>
	{/if}
</div>
