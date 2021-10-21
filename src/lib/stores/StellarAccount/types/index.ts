interface StellarAccountBalances {
	balance: string;
}

interface StellarAccountInterface {
	balances: StellarAccountBalances[];
	id: string;
}

export type { StellarAccountBalances, StellarAccountInterface };
