<script lang="ts">
	import { SINGLE_ACCOUNT } from '../../../apis/stellar';
	import { onMount } from 'svelte';
	import BalanceControl from './BalanceControl.svelte';
	import Header from './HeaderWallet.svelte';
	import StellarAccount from '$lib/stores/StellarAccount';
import TransactionList from './TransactionList.svelte';
    export const prerender = true;
	const handleFetchStellarAccount = async (address: string) => {
		const data = await fetch(`${SINGLE_ACCOUNT}/${address}`);
		const { balances } = await data.json();
		StellarAccount.update(prev=>{
            return {
                ...prev,
                balances,
            };
        });
	};
	onMount(async () => {
		const data = localStorage.getItem('stellar_public_address');
		if (!data) {
			window.location.href = '/';
		} else {
			await handleFetchStellarAccount(data);
		}
	});
</script>

<div class="w-full h-screen bg-gray-100">
	<Header />
	<BalanceControl />
	<TransactionList />
</div>
