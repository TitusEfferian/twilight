interface StellarAccountBalances {
	balance: string;
}


interface StellarAccountInterface {
	balances: StellarAccountBalances[];
}

export type { StellarAccountBalances, StellarAccountInterface };
