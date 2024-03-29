export const apiMock: {[url: string]: any} = {
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&tokenOut=0x6b175474e89094c44da98b954eedeac495271d0f&amountIn=3330666666666664&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '3330666666666664',
      outputAmount: '15388008267926874564',
      totalGas: 185000,
      gasPriceGwei: '133.6593122',
      gasUsd: 114.65135429727593,
      amountInUsd: 15.443275154347825,
      amountOutUsd: 15.388008267926875,
      receivedUsd: -99.26334602934905,
      swaps: [
        [
          {
            pool: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
            tokenIn: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            tokenOut: '0x6b175474e89094c44da98b954eedeac495271d0f',
            swapAmount: '3330666666666664',
            amountOut: '15388008267926874564',
            limitReturnAmount: '0',
            maxPrice: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
            exchange: 'uniswap',
            poolLength: 2,
            poolType: 'uni',
          },
        ],
      ],
      tokens: {
        '0x6b175474e89094c44da98b954eedeac495271d0f': {
          address: '0x6b175474e89094c44da98b954eedeac495271d0f',
          symbol: 'DAI',
          name: 'Dai Stablecoin',
          price: 1,
          decimals: 18,
        },
        '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          symbol: 'WETH',
          name: 'Wrapped Ether',
          price: 4636.691899824211,
          decimals: 18,
        },
      },
    },
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&tokenOut=0x6b175474e89094c44da98b954eedeac495271d0f&amountIn=33306666666666634&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '33306666666666634',
      outputAmount: '153879606400649702128',
      totalGas: 185000,
      gasPriceGwei: '133.6593122',
      gasUsd: 114.65135429727593,
      amountInUsd: 154.43275154347822,
      amountOutUsd: 153.8796064006497,
      receivedUsd: 39.22825210337376,
      swaps: [
        [
          {
            pool: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
            tokenIn: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            tokenOut: '0x6b175474e89094c44da98b954eedeac495271d0f',
            swapAmount: '33306666666666634',
            amountOut: '153879606400649702128',
            limitReturnAmount: '0',
            maxPrice: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
            exchange: 'uniswap',
            poolLength: 2,
            poolType: 'uni',
          },
        ],
      ],
      tokens: {
        '0x6b175474e89094c44da98b954eedeac495271d0f': {
          address: '0x6b175474e89094c44da98b954eedeac495271d0f',
          symbol: 'DAI',
          name: 'Dai Stablecoin',
          price: 1,
          decimals: 18,
        },
        '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          symbol: 'WETH',
          name: 'Wrapped Ether',
          price: 4636.691899824211,
          decimals: 18,
        },
      },
    },
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0x6b175474e89094c44da98b954eedeac495271d0f&tokenOut=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&amountIn=4996000000000000000&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '4996000000000000000',
      outputAmount: '4985848',
      totalGas: 305000,
      gasPriceGwei: '133.6593122',
      gasUsd: 189.0198003279414,
      amountInUsd: 4.996,
      amountOutUsd: 4.985848,
      receivedUsd: -184.0339523279414,
      swaps: [
        [
          {
            pool: '0x231b7589426ffe1b75405526fc32ac09d44364c4',
            tokenIn: '0x6b175474e89094c44da98b954eedeac495271d0f',
            tokenOut: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
            swapAmount: '4996000000000000000',
            amountOut: '7725',
            limitReturnAmount: '0',
            maxPrice: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
            exchange: 'uniswap',
            poolLength: 2,
            poolType: 'uni',
          },
          {
            pool: '0xbb2b8038a1640196fbe3e38816f3e67cba72d940',
            tokenIn: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
            tokenOut: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            swapAmount: '7725',
            amountOut: '1079207000566738',
            limitReturnAmount: '0',
            maxPrice: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
            exchange: 'uniswap',
            poolLength: 2,
            poolType: 'uni',
          },
          {
            pool: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
            tokenIn: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            tokenOut: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            swapAmount: '1079207000566738',
            amountOut: '4985848',
            limitReturnAmount: '0',
            maxPrice: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
            exchange: 'uniswap',
            poolLength: 2,
            poolType: 'uni',
          },
        ],
      ],
      tokens: {
        '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': {
          address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          symbol: 'WBTC',
          name: 'Wrapped BTC',
          price: 64521.64177106359,
          decimals: 8,
        },
        '0x6b175474e89094c44da98b954eedeac495271d0f': {
          address: '0x6b175474e89094c44da98b954eedeac495271d0f',
          symbol: 'DAI',
          name: 'Dai Stablecoin',
          price: 1,
          decimals: 18,
        },
        '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
          address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          symbol: 'USDC',
          name: 'USD Coin',
          price: 1,
          decimals: 6,
        },
        '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          symbol: 'WETH',
          name: 'Wrapped Ether',
          price: 4636.691899824211,
          decimals: 18,
        },
      },
    },
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0x6b175474e89094c44da98b954eedeac495271d0f&tokenOut=0xdac17f958d2ee523a2206206994597c13d831ec7&amountIn=4996000000000000000&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '4996000000000000000',
      outputAmount: '4979299',
      totalGas: 185000,
      gasPriceGwei: '133.6593122',
      gasUsd: 114.65135429727593,
      amountInUsd: 4.996,
      amountOutUsd: 4.979299,
      receivedUsd: -109.67205529727593,
      swaps: [
        [
          {
            pool: '0xb20bd5d04be54f870d5c0d3ca85d82b34b836405',
            tokenIn: '0x6b175474e89094c44da98b954eedeac495271d0f',
            tokenOut: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            swapAmount: '4996000000000000000',
            amountOut: '4979299',
            limitReturnAmount: '0',
            maxPrice: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
            exchange: 'uniswap',
            poolLength: 2,
            poolType: 'uni',
          },
        ],
      ],
      tokens: {
        '0x6b175474e89094c44da98b954eedeac495271d0f': {
          address: '0x6b175474e89094c44da98b954eedeac495271d0f',
          symbol: 'DAI',
          name: 'Dai Stablecoin',
          price: 1,
          decimals: 18,
        },
        '0xdac17f958d2ee523a2206206994597c13d831ec7': {
          address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          symbol: 'USDT',
          name: 'Tether USD',
          price: 1,
          decimals: 6,
        },
      },
    },
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0x6b175474e89094c44da98b954eedeac495271d0f&tokenOut=0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202&amountIn=4996000000000000000&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '0',
      outputAmount: '0',
      totalGas: 125000,
      gasPriceGwei: '133.6593122',
      gasUsd: 77.4671312819432,
      amountInUsd: 4.996,
      amountOutUsd: 0,
      receivedUsd: -77.4671312819432,
      swaps: [],
      tokens: {},
    },
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&tokenOut=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&amountIn=3330666666666664&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '3330666666666664',
      outputAmount: '15387407',
      totalGas: 185000,
      gasPriceGwei: '133.6593122',
      gasUsd: 114.65135429727593,
      amountInUsd: 15.443275154347825,
      amountOutUsd: 15.387407,
      receivedUsd: -99.26394729727593,
      swaps: [
        [
          {
            pool: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
            tokenIn: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            tokenOut: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            swapAmount: '3330666666666664',
            amountOut: '15387407',
            limitReturnAmount: '0',
            maxPrice: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
            exchange: 'uniswap',
            poolLength: 2,
            poolType: 'uni',
          },
        ],
      ],
      tokens: {
        '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
          address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          symbol: 'USDC',
          name: 'USD Coin',
          price: 1,
          decimals: 6,
        },
        '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          symbol: 'WETH',
          name: 'Wrapped Ether',
          price: 4636.691899824211,
          decimals: 18,
        },
      },
    },
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&tokenOut=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&amountIn=33306666666666634&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '33306666666666634',
      outputAmount: '153873935',
      totalGas: 185000,
      gasPriceGwei: '133.6593122',
      gasUsd: 114.65135429727593,
      amountInUsd: 154.43275154347822,
      amountOutUsd: 153.873935,
      receivedUsd: 39.22258070272406,
      swaps: [
        [
          {
            pool: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
            tokenIn: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            tokenOut: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            swapAmount: '33306666666666634',
            amountOut: '153873935',
            limitReturnAmount: '0',
            maxPrice: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
            exchange: 'uniswap',
            poolLength: 2,
            poolType: 'uni',
          },
        ],
      ],
      tokens: {
        '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
          address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          symbol: 'USDC',
          name: 'USD Coin',
          price: 1,
          decimals: 6,
        },
        '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          symbol: 'WETH',
          name: 'Wrapped Ether',
          price: 4636.691899824211,
          decimals: 18,
        },
      },
    },
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&tokenOut=0x6b175474e89094c44da98b954eedeac495271d0f&amountIn=4996000&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '4996000',
      outputAmount: '4984478080985186611',
      totalGas: 185000,
      gasPriceGwei: '133.6593122',
      gasUsd: 114.65135429727593,
      amountInUsd: 4.996,
      amountOutUsd: 4.984478080985187,
      receivedUsd: -109.66687621629075,
      swaps: [
        [
          {
            pool: '0xae461ca67b15dc8dc81ce7615e0320da1a9ab8d5',
            tokenIn: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            tokenOut: '0x6b175474e89094c44da98b954eedeac495271d0f',
            swapAmount: '4996000',
            amountOut: '4984478080985186611',
            limitReturnAmount: '0',
            maxPrice: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
            exchange: 'uniswap',
            poolLength: 2,
            poolType: 'uni',
          },
        ],
      ],
      tokens: {
        '0x6b175474e89094c44da98b954eedeac495271d0f': {
          address: '0x6b175474e89094c44da98b954eedeac495271d0f',
          symbol: 'DAI',
          name: 'Dai Stablecoin',
          price: 1,
          decimals: 18,
        },
        '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
          address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          symbol: 'USDC',
          name: 'USD Coin',
          price: 1,
          decimals: 6,
        },
      },
    },
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&tokenOut=0xdac17f958d2ee523a2206206994597c13d831ec7&amountIn=4996000&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '4996000',
      outputAmount: '4971372',
      totalGas: 305000,
      gasPriceGwei: '133.6593122',
      gasUsd: 189.0198003279414,
      amountInUsd: 4.996,
      amountOutUsd: 4.971372,
      receivedUsd: -184.0484283279414,
      swaps: [
        [
          {
            pool: '0x004375dff511095cc5a197a54140a24efef3a416',
            tokenIn: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            tokenOut: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
            swapAmount: '4996000',
            amountOut: '7719',
            limitReturnAmount: '0',
            maxPrice: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
            exchange: 'uniswap',
            poolLength: 2,
            poolType: 'uni',
          },
          {
            pool: '0xbb2b8038a1640196fbe3e38816f3e67cba72d940',
            tokenIn: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
            tokenOut: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            swapAmount: '7719',
            amountOut: '1078368781579604',
            limitReturnAmount: '0',
            maxPrice: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
            exchange: 'uniswap',
            poolLength: 2,
            poolType: 'uni',
          },
          {
            pool: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
            tokenIn: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            tokenOut: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            swapAmount: '1078368781579604',
            amountOut: '4971372',
            limitReturnAmount: '0',
            maxPrice: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
            exchange: 'uniswap',
            poolLength: 2,
            poolType: 'uni',
          },
        ],
      ],
      tokens: {
        '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': {
          address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          symbol: 'WBTC',
          name: 'Wrapped BTC',
          price: 64521.64177106359,
          decimals: 8,
        },
        '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
          address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          symbol: 'USDC',
          name: 'USD Coin',
          price: 1,
          decimals: 6,
        },
        '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          symbol: 'WETH',
          name: 'Wrapped Ether',
          price: 4636.691899824211,
          decimals: 18,
        },
        '0xdac17f958d2ee523a2206206994597c13d831ec7': {
          address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          symbol: 'USDT',
          name: 'Tether USD',
          price: 1,
          decimals: 6,
        },
      },
    },
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&tokenOut=0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202&amountIn=4996000&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '0',
      outputAmount: '0',
      totalGas: 125000,
      gasPriceGwei: '133.6593122',
      gasUsd: 77.4671312819432,
      amountInUsd: 4.996,
      amountOutUsd: 0,
      receivedUsd: -77.4671312819432,
      swaps: [],
      tokens: {},
    },
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&tokenOut=0xdac17f958d2ee523a2206206994597c13d831ec7&amountIn=3330666666666664&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '3330666666666664',
      outputAmount: '15354657',
      totalGas: 185000,
      gasPriceGwei: '133.6593122',
      gasUsd: 114.65135429727593,
      amountInUsd: 15.443275154347825,
      amountOutUsd: 15.354657,
      receivedUsd: -99.29669729727593,
      swaps: [
        [
          {
            pool: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
            tokenIn: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            tokenOut: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            swapAmount: '3330666666666664',
            amountOut: '15354657',
            limitReturnAmount: '0',
            maxPrice: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
            exchange: 'uniswap',
            poolLength: 2,
            poolType: 'uni',
          },
        ],
      ],
      tokens: {
        '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          symbol: 'WETH',
          name: 'Wrapped Ether',
          price: 4636.691899824211,
          decimals: 18,
        },
        '0xdac17f958d2ee523a2206206994597c13d831ec7': {
          address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          symbol: 'USDT',
          name: 'Tether USD',
          price: 1,
          decimals: 6,
        },
      },
    },
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&tokenOut=0xdac17f958d2ee523a2206206994597c13d831ec7&amountIn=33306666666666634&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '33306666666666634',
      outputAmount: '153546325',
      totalGas: 185000,
      gasPriceGwei: '133.6593122',
      gasUsd: 114.65135429727593,
      amountInUsd: 154.43275154347822,
      amountOutUsd: 153.546325,
      receivedUsd: 38.894970702724066,
      swaps: [
        [
          {
            pool: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
            tokenIn: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            tokenOut: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            swapAmount: '33306666666666634',
            amountOut: '153546325',
            limitReturnAmount: '0',
            maxPrice: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
            exchange: 'uniswap',
            poolLength: 2,
            poolType: 'uni',
          },
        ],
      ],
      tokens: {
        '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': {
          address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          symbol: 'WETH',
          name: 'Wrapped Ether',
          price: 4636.691899824211,
          decimals: 18,
        },
        '0xdac17f958d2ee523a2206206994597c13d831ec7': {
          address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          symbol: 'USDT',
          name: 'Tether USD',
          price: 1,
          decimals: 6,
        },
      },
    },
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0xdac17f958d2ee523a2206206994597c13d831ec7&tokenOut=0x6b175474e89094c44da98b954eedeac495271d0f&amountIn=4996000&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '4996000',
      outputAmount: '4982710906843669954',
      totalGas: 185000,
      gasPriceGwei: '133.6593122',
      gasUsd: 114.65135429727593,
      amountInUsd: 4.996,
      amountOutUsd: 4.98271090684367,
      receivedUsd: -109.66864339043227,
      swaps: [
        [
          {
            pool: '0xb20bd5d04be54f870d5c0d3ca85d82b34b836405',
            tokenIn: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            tokenOut: '0x6b175474e89094c44da98b954eedeac495271d0f',
            swapAmount: '4996000',
            amountOut: '4982710906843669954',
            limitReturnAmount: '0',
            maxPrice: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
            exchange: 'uniswap',
            poolLength: 2,
            poolType: 'uni',
          },
        ],
      ],
      tokens: {
        '0x6b175474e89094c44da98b954eedeac495271d0f': {
          address: '0x6b175474e89094c44da98b954eedeac495271d0f',
          symbol: 'DAI',
          name: 'Dai Stablecoin',
          price: 1,
          decimals: 18,
        },
        '0xdac17f958d2ee523a2206206994597c13d831ec7': {
          address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          symbol: 'USDT',
          name: 'Tether USD',
          price: 1,
          decimals: 6,
        },
      },
    },
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0xdac17f958d2ee523a2206206994597c13d831ec7&tokenOut=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&amountIn=4996000&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '4996000',
      outputAmount: '4991095',
      totalGas: 185000,
      gasPriceGwei: '133.6593122',
      gasUsd: 114.65135429727593,
      amountInUsd: 4.996,
      amountOutUsd: 4.991095,
      receivedUsd: -109.66025929727593,
      swaps: [
        [
          {
            pool: '0x3041cbd36888becc7bbcbc0045e3b1f144466f5f',
            tokenIn: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            tokenOut: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            swapAmount: '4996000',
            amountOut: '4991095',
            limitReturnAmount: '0',
            maxPrice: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
            exchange: 'uniswap',
            poolLength: 2,
            poolType: 'uni',
          },
        ],
      ],
      tokens: {
        '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
          address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          symbol: 'USDC',
          name: 'USD Coin',
          price: 1,
          decimals: 6,
        },
        '0xdac17f958d2ee523a2206206994597c13d831ec7': {
          address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          symbol: 'USDT',
          name: 'Tether USD',
          price: 1,
          decimals: 6,
        },
      },
    },
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0xdac17f958d2ee523a2206206994597c13d831ec7&tokenOut=0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202&amountIn=4996000&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '0',
      outputAmount: '0',
      totalGas: 125000,
      gasPriceGwei: '133.6593122',
      gasUsd: 77.4671312819432,
      amountInUsd: 4.996,
      amountOutUsd: 0,
      receivedUsd: -77.4671312819432,
      swaps: [],
      tokens: {},
    },
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&tokenOut=0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202&amountIn=3330666666666664&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '0',
      outputAmount: '0',
      totalGas: 125000,
      gasPriceGwei: '133.6593122',
      gasUsd: 77.4671312819432,
      amountInUsd: 15.443275154347825,
      amountOutUsd: 0,
      receivedUsd: -77.4671312819432,
      swaps: [],
      tokens: {},
    },
  'https://aggregator-api.kyber.org/ethereum/route?tokenIn=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&tokenOut=0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202&amountIn=33306666666666634&saveGas=0&gasInclude=0&dexes=uniswap':
    {
      inputAmount: '0',
      outputAmount: '0',
      totalGas: 125000,
      gasPriceGwei: '133.6593122',
      gasUsd: 77.4671312819432,
      amountInUsd: 154.43275154347822,
      amountOutUsd: 0,
      receivedUsd: -77.4671312819432,
      swaps: [],
      tokens: {},
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toTokenAddress=0x6b175474e89094c44da98b954eedeac495271d0f&amount=3330666666666663&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        logoURI: 'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
      },
      toToken: {
        symbol: 'DAI',
        name: 'Dai Stablecoin',
        decimals: 18,
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        logoURI: 'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
        eip2612: true,
      },
      toTokenAmount: '15409153795552610984',
      fromTokenAmount: '3330666666666663',
      protocols: [
        [
          [
            {
              name: 'UNIFI',
              part: 100,
              fromTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              toTokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bd53943882aa7000000000000000000000000000000000000000000000000c075e15cbdf2affd0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000180000000000000003b6d0340efcf8e86a2c6ab9be7fe00241651cb1b0a4983fbcfee7c08',
        value: '3330666666666663',
        gas: 0,
        gasPrice: '146402845416',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toTokenAddress=0x6b175474e89094c44da98b954eedeac495271d0f&amount=33306666666666633&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        logoURI: 'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
      },
      toToken: {
        symbol: 'DAI',
        name: 'Dai Stablecoin',
        decimals: 18,
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        logoURI: 'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
        eip2612: true,
      },
      toTokenAmount: '153365630481700009264',
      fromTokenAmount: '33306666666666633',
      protocols: [
        [
          [
            {
              name: 'UNISWAP_V2',
              part: 100,
              fromTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              toTokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000076543ca351aa890000000000000000000000000000000000000000000000077b89c1857dfea3110000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000180000000000000003b6d0340a478c2975ab1ea89e8196811f51a7b7ade33eb11cfee7c08',
        value: '33306666666666633',
        gas: 0,
        gasPrice: '128923851422',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0x6b175474e89094c44da98b954eedeac495271d0f&toTokenAddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&amount=4996000000000000000&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'DAI',
        name: 'Dai Stablecoin',
        decimals: 18,
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        logoURI: 'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
        eip2612: true,
      },
      toToken: {
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
        eip2612: true,
      },
      toTokenAmount: '4984730',
      fromTokenAmount: '4996000000000000000',
      protocols: [
        [
          [
            {
              name: 'UNISWAP_V2',
              part: 100,
              fromTokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
              toTokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c80000000000000000000000006b175474e89094c44da98b954eedeac495271d0f00000000000000000000000000000000000000000000000045555b87b1da000000000000000000000000000000000000000000000000000000000000004474710000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000100000000000000003b6d0340ae461ca67b15dc8dc81ce7615e0320da1a9ab8d5cfee7c08',
        value: '0',
        gas: 0,
        gasPrice: '150230770819',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0x6b175474e89094c44da98b954eedeac495271d0f&toTokenAddress=0xdac17f958d2ee523a2206206994597c13d831ec7&amount=4996000000000000000&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'DAI',
        name: 'Dai Stablecoin',
        decimals: 18,
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        logoURI: 'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
        eip2612: true,
      },
      toToken: {
        symbol: 'USDT',
        name: 'Tether USD',
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
      },
      toTokenAmount: '4986100',
      fromTokenAmount: '4996000000000000000',
      protocols: [
        [
          [
            {
              name: 'UNISWAP_V2',
              part: 100,
              fromTokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
              toTokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c80000000000000000000000006b175474e89094c44da98b954eedeac495271d0f00000000000000000000000000000000000000000000000045555b87b1da000000000000000000000000000000000000000000000000000000000000004479420000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000100000000000000003b6d0340b20bd5d04be54f870d5c0d3ca85d82b34b836405cfee7c08',
        value: '0',
        gas: 0,
        gasPrice: '128923851422',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toTokenAddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&amount=3330666666666663&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        logoURI: 'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
      },
      toToken: {
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
        eip2612: true,
      },
      toTokenAmount: '15375962',
      fromTokenAmount: '3330666666666663',
      protocols: [
        [
          [
            {
              name: 'UNISWAP_V2',
              part: 100,
              fromTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              toTokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bd53943882aa70000000000000000000000000000000000000000000000000000000000d3281d0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000180000000000000003b6d0340b4e16d0168e52d35cacd2c6185b44281ec28c9dccfee7c08',
        value: '3330666666666663',
        gas: 0,
        gasPrice: '120767611484',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toTokenAddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&amount=33306666666666633&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        logoURI: 'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
      },
      toToken: {
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
        eip2612: true,
      },
      toTokenAmount: '153759491',
      fromTokenAmount: '33306666666666633',
      protocols: [
        [
          [
            {
              name: 'UNISWAP_V2',
              part: 100,
              fromTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              toTokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000076543ca351aa8900000000000000000000000000000000000000000000000000000000083f90b50000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000180000000000000003b6d0340b4e16d0168e52d35cacd2c6185b44281ec28c9dccfee7c08',
        value: '33306666666666633',
        gas: 0,
        gasPrice: '128923851422',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&toTokenAddress=0x6b175474e89094c44da98b954eedeac495271d0f&amount=4996000&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
        eip2612: true,
      },
      toToken: {
        symbol: 'DAI',
        name: 'Dai Stablecoin',
        decimals: 18,
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        logoURI: 'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
        eip2612: true,
      },
      toTokenAmount: '4991976733055986437',
      fromTokenAmount: '4996000',
      protocols: [
        [
          [
            {
              name: 'SUSHI',
              part: 100,
              fromTokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
              toTokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c8000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000000000000000000000000000000000000004c3ba00000000000000000000000000000000000000000000000003e598ec046bc40510000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000180000000000000003b6d0340aaf5110db6e744ff70fb339de037b990a20bdacecfee7c08',
        value: '0',
        gas: 0,
        gasPrice: '115639645970',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&toTokenAddress=0xdac17f958d2ee523a2206206994597c13d831ec7&amount=4996000&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
        eip2612: true,
      },
      toToken: {
        symbol: 'USDT',
        name: 'Tether USD',
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
      },
      toTokenAmount: '5001346',
      fromTokenAmount: '4996000',
      protocols: [
        [
          [
            {
              name: 'UNISWAP_V2',
              part: 100,
              fromTokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
              toTokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c8000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000000000000000000000000000000000000004c3ba0000000000000000000000000000000000000000000000000000000000044aedb0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000100000000000000003b6d03403041cbd36888becc7bbcbc0045e3b1f144466f5fcfee7c08',
        value: '0',
        gas: 0,
        gasPrice: '128923851422',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&toTokenAddress=0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202&amount=4996000&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
        eip2612: true,
      },
      toToken: {
        symbol: 'KNC',
        name: 'Kyber Network Crystal v2',
        decimals: 18,
        address: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
        logoURI: 'https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png',
      },
      toTokenAmount: '2548036780970495888',
      fromTokenAmount: '4996000',
      protocols: [
        [
          [
            {
              name: 'UNIFI',
              part: 100,
              fromTokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
              toTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            },
          ],
          [
            {
              name: 'SUSHI',
              part: 100,
              fromTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              toTokenAddress: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c8000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000000000000000000000000000000000000004c3ba00000000000000000000000000000000000000000000000001fd3335b63f0479b0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000200000000000000003b6d034013e18e8a0a3fa7dbe67d2cd7ed5745ce6462747a00000000000000003b6d0340bdc120fef90fb185a49ad8fa62c7bc0ed0516cc7cfee7c08',
        value: '0',
        gas: 0,
        gasPrice: '115639645970',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&toTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&amount=4996000&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
        eip2612: true,
      },
      toToken: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        logoURI: 'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
      },
      toTokenAmount: '1077413054020255',
      fromTokenAmount: '4996000',
      protocols: [
        [
          [
            {
              name: 'UNIFI',
              part: 100,
              fromTokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
              toTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c8000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000000000000000000000000000000000000004c3ba0000000000000000000000000000000000000000000000000000371e94c2007f50000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000140000000000000003b6d034013e18e8a0a3fa7dbe67d2cd7ed5745ce6462747acfee7c08',
        value: '0',
        gas: 0,
        gasPrice: '115639645970',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toTokenAddress=0xdac17f958d2ee523a2206206994597c13d831ec7&amount=3330666666666663&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        logoURI: 'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
      },
      toToken: {
        symbol: 'USDT',
        name: 'Tether USD',
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
      },
      toTokenAmount: '15421017',
      fromTokenAmount: '3330666666666663',
      protocols: [
        [
          [
            {
              name: 'SUSHI',
              part: 100,
              fromTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              toTokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bd53943882aa70000000000000000000000000000000000000000000000000000000000d3c6830000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000100000000000000003b6d034006da0fd433c1a5d7a4faa01111c044910a184553cfee7c08',
        value: '3330666666666663',
        gas: 0,
        gasPrice: '150230770819',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toTokenAddress=0xdac17f958d2ee523a2206206994597c13d831ec7&amount=33306666666666633&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        logoURI: 'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
      },
      toToken: {
        symbol: 'USDT',
        name: 'Tether USD',
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
      },
      toTokenAmount: '154209952',
      fromTokenAmount: '33306666666666633',
      protocols: [
        [
          [
            {
              name: 'SUSHI',
              part: 100,
              fromTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              toTokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000076543ca351aa89000000000000000000000000000000000000000000000000000000000845c05c0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000100000000000000003b6d034006da0fd433c1a5d7a4faa01111c044910a184553cfee7c08',
        value: '33306666666666633',
        gas: 0,
        gasPrice: '127622222045',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xdac17f958d2ee523a2206206994597c13d831ec7&toTokenAddress=0x6b175474e89094c44da98b954eedeac495271d0f&amount=4996000&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'USDT',
        name: 'Tether USD',
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
      },
      toToken: {
        symbol: 'DAI',
        name: 'Dai Stablecoin',
        decimals: 18,
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        logoURI: 'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
        eip2612: true,
      },
      toTokenAmount: '4973934540339906900',
      fromTokenAmount: '4996000',
      protocols: [
        [
          [
            {
              name: 'UNISWAP_V2',
              part: 100,
              fromTokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
              toTokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c8000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000000000000000000000000000000000000004c3ba00000000000000000000000000000000000000000000000003e1fde6677b495320000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000180000000000000003b6d0340b20bd5d04be54f870d5c0d3ca85d82b34b836405cfee7c08',
        value: '0',
        gas: 0,
        gasPrice: '115639645970',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xdac17f958d2ee523a2206206994597c13d831ec7&toTokenAddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&amount=4996000&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'USDT',
        name: 'Tether USD',
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
      },
      toToken: {
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
        eip2612: true,
      },
      toTokenAmount: '4977477',
      fromTokenAmount: '4996000',
      protocols: [
        [
          [
            {
              name: 'UNIFI',
              part: 100,
              fromTokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
              toTokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c8000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000000000000000000000000000000000000004c3ba00000000000000000000000000000000000000000000000000000000000445af10000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000180000000000000003b6d03405e08d9163b8f701a5da001785d58f004fc8d75afcfee7c08',
        value: '0',
        gas: 0,
        gasPrice: '115639645970',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xdac17f958d2ee523a2206206994597c13d831ec7&toTokenAddress=0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202&amount=4996000&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'USDT',
        name: 'Tether USD',
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
      },
      toToken: {
        symbol: 'KNC',
        name: 'Kyber Network Crystal v2',
        decimals: 18,
        address: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
        logoURI: 'https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png',
      },
      toTokenAmount: '2599697302291756741',
      fromTokenAmount: '4996000',
      protocols: [
        [
          [
            {
              name: 'MINISWAP',
              part: 100,
              fromTokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
              toTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            },
          ],
          [
            {
              name: 'SUSHI',
              part: 100,
              fromTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              toTokenAddress: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c8000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000000000000000000000000000000000000004c3ba0000000000000000000000000000000000000000000000000207861d493fa314a0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000280000000000000003b6d03403a8414b08ffb128cf1a9da1097b0454e0d4bfa8f00000000000000003b6d0340bdc120fef90fb185a49ad8fa62c7bc0ed0516cc7cfee7c08',
        value: '0',
        gas: 0,
        gasPrice: '127622222045',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xdac17f958d2ee523a2206206994597c13d831ec7&toTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&amount=4996000&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'USDT',
        name: 'Tether USD',
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
      },
      toToken: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        logoURI: 'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
      },
      toTokenAmount: '1099262431256056',
      fromTokenAmount: '4996000',
      protocols: [
        [
          [
            {
              name: 'MINISWAP',
              part: 100,
              fromTokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
              toTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c8000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000000000000000000000000000000000000004c3ba0000000000000000000000000000000000000000000000000000383cbc80e949200000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000001c0000000000000003b6d03403a8414b08ffb128cf1a9da1097b0454e0d4bfa8fcfee7c08',
        value: '0',
        gas: 0,
        gasPrice: '115639645970',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toTokenAddress=0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202&amount=3330666666666663&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        logoURI: 'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
      },
      toToken: {
        symbol: 'KNC',
        name: 'Kyber Network Crystal v2',
        decimals: 18,
        address: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
        logoURI: 'https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png',
      },
      toTokenAmount: '7873032889143864768',
      fromTokenAmount: '3330666666666663',
      protocols: [
        [
          [
            {
              name: 'SUSHI',
              part: 100,
              fromTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              toTokenAddress: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bd53943882aa70000000000000000000000000000000000000000000000006255918794260f930000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000100000000000000003b6d0340bdc120fef90fb185a49ad8fa62c7bc0ed0516cc7cfee7c08',
        value: '3330666666666663',
        gas: 0,
        gasPrice: '127622222045',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&toTokenAddress=0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202&amount=33306666666666633&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        logoURI: 'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
      },
      toToken: {
        symbol: 'KNC',
        name: 'Kyber Network Crystal v2',
        decimals: 18,
        address: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
        logoURI: 'https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png',
      },
      toTokenAmount: '78221129472848802650',
      fromTokenAmount: '33306666666666633',
      protocols: [
        [
          [
            {
              name: 'SUSHI',
              part: 100,
              fromTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              toTokenAddress: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000076543ca351aa89000000000000000000000000000000000000000000000003d0fb8c8a3f1787d10000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000100000000000000003b6d0340bdc120fef90fb185a49ad8fa62c7bc0ed0516cc7cfee7c08',
        value: '33306666666666633',
        gas: 0,
        gasPrice: '127622222045',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202&toTokenAddress=0x6b175474e89094c44da98b954eedeac495271d0f&amount=2498000000000000000&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'KNC',
        name: 'Kyber Network Crystal v2',
        decimals: 18,
        address: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
        logoURI: 'https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png',
      },
      toToken: {
        symbol: 'DAI',
        name: 'Dai Stablecoin',
        decimals: 18,
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        logoURI: 'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
        eip2612: true,
      },
      toTokenAmount: '4909971205650181800',
      fromTokenAmount: '2498000000000000000',
      protocols: [
        [
          [
            {
              name: 'SUSHI',
              part: 100,
              fromTokenAddress: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
              toTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            },
          ],
          [
            {
              name: 'UNIFI',
              part: 100,
              fromTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              toTokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c8000000000000000000000000defa4e8a7bcba345f687a2f1456f5edd9ce9720200000000000000000000000000000000000000000000000022aaadc3d8ed00000000000000000000000000000000000000000000000000003d535984852870640000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000280000000000000003b6d0340bdc120fef90fb185a49ad8fa62c7bc0ed0516cc780000000000000003b6d0340efcf8e86a2c6ab9be7fe00241651cb1b0a4983fbcfee7c08',
        value: '0',
        gas: 0,
        gasPrice: '115639645970',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202&toTokenAddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&amount=2498000000000000000&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'KNC',
        name: 'Kyber Network Crystal v2',
        decimals: 18,
        address: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
        logoURI: 'https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png',
      },
      toToken: {
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
        eip2612: true,
      },
      toTokenAmount: '4847014',
      fromTokenAmount: '2498000000000000000',
      protocols: [
        [
          [
            {
              name: 'SUSHI',
              part: 100,
              fromTokenAddress: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
              toTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            },
          ],
          [
            {
              name: 'UNISWAP_V2',
              part: 100,
              fromTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              toTokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c8000000000000000000000000defa4e8a7bcba345f687a2f1456f5edd9ce9720200000000000000000000000000000000000000000000000022aaadc3d8ed000000000000000000000000000000000000000000000000000000000000004290480000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000280000000000000003b6d0340bdc120fef90fb185a49ad8fa62c7bc0ed0516cc780000000000000003b6d0340b4e16d0168e52d35cacd2c6185b44281ec28c9dccfee7c08',
        value: '0',
        gas: 0,
        gasPrice: '127622222045',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202&toTokenAddress=0xdac17f958d2ee523a2206206994597c13d831ec7&amount=2498000000000000000&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'KNC',
        name: 'Kyber Network Crystal v2',
        decimals: 18,
        address: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
        logoURI: 'https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png',
      },
      toToken: {
        symbol: 'USDT',
        name: 'Tether USD',
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        decimals: 6,
        logoURI: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
      },
      toTokenAmount: '4895027',
      fromTokenAmount: '2498000000000000000',
      protocols: [
        [
          [
            {
              name: 'SUSHI',
              part: 100,
              fromTokenAddress: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
              toTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            },
          ],
          [
            {
              name: 'LINKSWAP',
              part: 100,
              fromTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              toTokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c8000000000000000000000000defa4e8a7bcba345f687a2f1456f5edd9ce9720200000000000000000000000000000000000000000000000022aaadc3d8ed000000000000000000000000000000000000000000000000000000000000004339140000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000280000000000000003b6d0340bdc120fef90fb185a49ad8fa62c7bc0ed0516cc700000000000000003b6d034026642be81ffd799b8588a5602758d1f34e9ff7bacfee7c08',
        value: '0',
        gas: 0,
        gasPrice: '115639645970',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202&toTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&amount=2498000000000000000&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'KNC',
        name: 'Kyber Network Crystal v2',
        decimals: 18,
        address: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
        logoURI: 'https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png',
      },
      toToken: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        logoURI: 'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
      },
      toTokenAmount: '1049441554884784',
      fromTokenAmount: '2498000000000000000',
      protocols: [
        [
          [
            {
              name: 'SUSHI',
              part: 100,
              fromTokenAddress: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
              toTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c8000000000000000000000000defa4e8a7bcba345f687a2f1456f5edd9ce9720200000000000000000000000000000000000000000000000022aaadc3d8ed000000000000000000000000000000000000000000000000000000035b03effb77d100000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000001c0000000000000003b6d0340bdc120fef90fb185a49ad8fa62c7bc0ed0516cc7cfee7c08',
        value: '0',
        gas: 0,
        gasPrice: '127622222045',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0x6b175474e89094c44da98b954eedeac495271d0f&toTokenAddress=0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202&amount=4996000000000000000&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'DAI',
        name: 'Dai Stablecoin',
        decimals: 18,
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        logoURI: 'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
        eip2612: true,
      },
      toToken: {
        symbol: 'KNC',
        name: 'Kyber Network Crystal v2',
        decimals: 18,
        address: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
        logoURI: 'https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png',
      },
      toTokenAmount: '2556121306324218386',
      fromTokenAmount: '4996000000000000000',
      protocols: [
        [
          [
            {
              name: 'DXSWAP',
              part: 100,
              fromTokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
              toTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            },
          ],
          [
            {
              name: 'SUSHI',
              part: 100,
              fromTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
              toTokenAddress: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c80000000000000000000000006b175474e89094c44da98b954eedeac495271d0f00000000000000000000000000000000000000000000000045555b87b1da00000000000000000000000000000000000000000000000000001fed0ce81ba2e0430000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000200000000000000003b74a4607515be43d16f871588adc135d58a9c30a71eb34f00000000000000003b6d0340bdc120fef90fb185a49ad8fa62c7bc0ed0516cc7cfee7c08',
        value: '0',
        gas: 0,
        gasPrice: '136625181623',
      },
    },
  'https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0x6b175474e89094c44da98b954eedeac495271d0f&toTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&amount=4996000000000000000&fromAddress=0xc783df8a850f42e7F7e57013759C285caa701eB6&slippage=10&disableEstimate=true&fee=0&burnChi=false&allowPartialFill=false':
    {
      fromToken: {
        symbol: 'DAI',
        name: 'Dai Stablecoin',
        decimals: 18,
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        logoURI: 'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
        eip2612: true,
      },
      toToken: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18,
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        logoURI: 'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
      },
      toTokenAmount: '1080832321429449',
      fromTokenAmount: '4996000000000000000',
      protocols: [
        [
          [
            {
              name: 'DXSWAP',
              part: 100,
              fromTokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
              toTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            },
          ],
        ],
      ],
      tx: {
        from: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
        to: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
        data: '0x2e95b6c80000000000000000000000006b175474e89094c44da98b954eedeac495271d0f00000000000000000000000000000000000000000000000045555b87b1da0000000000000000000000000000000000000000000000000000000374b5cbec29680000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000140000000000000003b74a4607515be43d16f871588adc135d58a9c30a71eb34fcfee7c08',
        value: '0',
        gas: 0,
        gasPrice: '190758030499',
      },
    },
};
