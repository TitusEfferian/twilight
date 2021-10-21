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

export type { StellarBadRequest, StellarLocalStorage, StellarTransactionsInterface };
