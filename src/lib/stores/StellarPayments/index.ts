import type { StellarPaymentsInterface } from '$lib/types';
import { writable } from 'svelte/store';

const StellarPayments = writable<StellarPaymentsInterface>({
	_embedded: {
		records: []
	}
});

export default StellarPayments;
