import { http, createPublicClient, defineChain } from 'viem';

const calderaSepolia = defineChain({
    id: 10017,
    name: 'Caldera Sepolia',
    nativeCurrency: {
        decimals: 18,
        symbol: 'ETH',
        name: 'Ether',
    },
    rpcUrls: {
        default: {
            http: ['https://primodium-sepolia.rpc.caldera.xyz/http'],
        },
    },
});

export const publicClient = createPublicClient({
    chain: calderaSepolia,
    transport: http('https://primodium-sepolia.rpc.caldera.xyz/http'),
});
