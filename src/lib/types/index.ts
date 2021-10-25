interface StellarBadRequest {
	detail: string;
	extras: {
		invalid_field: string;
		reason: string;
	};
}

interface StellarLocalStorage {
	public_address: string;
}

interface StellarTransactionsInterface {
	_embedded: {
		records: {
			memo: string;
		}[];
	};
}

interface StellarPaymentsInterface {
	_embedded: {
		records: {
			type: 'create_account' | 'payment';
			starting_balance?: string;
			amount?: string;
			from?: string;
			to?: string;
			funder?: string;
		}[];
	};
}

export type {
	StellarBadRequest,
	StellarLocalStorage,
	StellarTransactionsInterface,
	StellarPaymentsInterface
};
