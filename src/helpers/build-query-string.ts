import { URLSearchParams } from 'node:url';
import type { NextPageParams } from '../types/transaction';

const buildQueryString = (parameters: NextPageParams): string => {
    const queryString = new URLSearchParams();

    for (const [key, value] of Object.entries(parameters)) {
        if (typeof value === 'string') {
            queryString.set(key, value);
        }
        if (typeof value === 'number') {
            queryString.set(key, String(value));
        }
    }

    return queryString.toString();
};

export default buildQueryString;
