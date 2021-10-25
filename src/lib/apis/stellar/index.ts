type NETWORK_ENV_TYPES = 'production' | 'test';
const NETWORK_ENV: NETWORK_ENV_TYPES = 'production';
const BASE_URL =
	NETWORK_ENV === 'production'
		? 'https://horizon.stellar.org'
		: 'https://horizon-testnet.stellar.org';
const SINGLE_ACCOUNT = `${BASE_URL}/accounts`;
const TRANSACTIONS = `transactions`;
const PAYMENTS = 'payments';

export { SINGLE_ACCOUNT, TRANSACTIONS, PAYMENTS };
