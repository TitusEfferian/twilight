<script lang="ts">
	import { PAYMENTS, SINGLE_ACCOUNT, TRANSACTIONS } from '$lib/apis/stellar';
	import { onMount } from 'svelte';
	import BalanceControl from './BalanceControl.svelte';
	import Header from './HeaderWallet.svelte';
	import StellarAccount from '$lib/stores/StellarAccount';
	import StellarTransactions from '$lib/stores/StellarTransactions';
	import TransactionList from './TransactionList.svelte';
	import type { StellarLocalStorage, StellarPaymentsInterface } from '$lib/types';
	import StellarPayments from '$lib/stores/StellarPayments';
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

	const handleFetchStellarPayments = async (address: string) => {
		const data = await fetch(`${SINGLE_ACCOUNT}/${address}/${PAYMENTS}`);
		const { _embedded } = (await data.json()) as StellarPaymentsInterface;
		StellarPayments.update((prev) => {
			return {
				...prev,
				_embedded
			};
		});
	};
	onMount(async () => {
		const isLoggedIn = localStorage.getItem('is_logged_in');
		if (isLoggedIn === 'true') {
			const { public_address }: StellarLocalStorage = JSON.parse(localStorage.getItem('stellar'));
			if (!public_address) {
				window.location.href = '/';
			} else {
				await handleFetchStellarAccount(public_address);
				await handleFetchStellarPayments(public_address);
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
