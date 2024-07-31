type Timestamp = string;
type Hash = string;
type Address = string;
type BigIntString = string;

interface Fee {
    type: string;
    value: BigIntString;
}

interface AddressDetails {
    ens_domain_name: string | null;
    hash: Address;
    implementation_address: Address | null;
    implementation_name: string | null;
    is_contract: boolean;
    is_verified: boolean;
    name: string | null;
}

interface Parameter {
    name: string;
    type: string;
    value: string;
}

interface DecodedInput {
    method_call: string;
    method_id: string;
    parameters: Parameter[];
}

interface Transaction {
    timestamp: Timestamp;
    fee: Fee;
    gas_limit: BigIntString;
    block: number;
    status: string;
    method: string;
    confirmations: number;
    type: number;
    to: AddressDetails;
    tx_burnt_fee: BigIntString;
    max_fee_per_gas: BigIntString;
    result: string;
    hash: Hash;
    gas_price: BigIntString;
    priority_fee: BigIntString;
    base_fee_per_gas: BigIntString;
    from: AddressDetails;
    tx_types: string[];
    gas_used: BigIntString;
    position: number;
    nonce: number;
    has_error_in_internal_txs: boolean;
    decoded_input: DecodedInput;
    raw_input: string;
    value: BigIntString;
    max_priority_fee_per_gas: BigIntString;
    confirmation_duration: [number, number];
}

interface NextPageParams {
    block_number?: number;
    fee?: string;
    hash?: string;
    index?: number;
    inserted_at?: string;
    items_count?: number;
    value?: string;
}

export type { Transaction, NextPageParams };
