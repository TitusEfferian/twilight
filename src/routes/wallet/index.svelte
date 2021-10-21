<script lang="ts">
	import { SINGLE_ACCOUNT } from '../../../apis/stellar';
	import { onMount } from 'svelte';
	import BalanceControl from './BalanceControl.svelte';
	import Header from './HeaderWallet.svelte';
	import StellarAccount from '$lib/stores/StellarAccount';
	import TransactionList from './TransactionList.svelte';
	import type { StellarLocalStorage } from '$lib/types';
	export const prerender = true;
	const handleFetchStellarAccount = async (address: string) => {
		const data = await fetch(`${SINGLE_ACCOUNT}/${address}`);
		const { balances } = await data.json();
		StellarAccount.update((prev) => {
			return {
				...prev,
				balances
			};
		});
	};
	onMount(async () => {
		const isLoggedIn = localStorage.getItem('is_logged_in');
		if (isLoggedIn === 'true') {
			const { public_address }: StellarLocalStorage | null = JSON.parse(
				localStorage.getItem('stellar')
			);
			if (!public_address) {
				window.location.href = '/';
			} else {
				await handleFetchStellarAccount(public_address);
			}
		} else {
			window.location.href = '/';
		}
	});
</script>

<div class="w-full h-screen bg-gray-100">
	<Header />
	<BalanceControl />
	<TransactionList />
</div>
