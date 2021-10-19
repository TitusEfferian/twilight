import { writable } from 'svelte/store';
import type { StellarAccountInterface } from './types';

const StellarAccount = writable<StellarAccountInterface>({
	balances: []
});

export default StellarAccount;
