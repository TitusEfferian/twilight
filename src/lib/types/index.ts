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

export type { StellarBadRequest, StellarLocalStorage };
