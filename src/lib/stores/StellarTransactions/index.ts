import type { StellarTransactionsInterface } from '$lib/types';
import { writable } from 'svelte/store';
// import type { StellarAccountInterface } from './types';

const StellarTransactions = writable<StellarTransactionsInterface>({
	_embedded: {
		records: []
	}
});

export default StellarTransactions;
