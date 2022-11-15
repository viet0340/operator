import React, { useState } from 'react';
import { firstData } from '../../api';
export const NormalOperator = () => {
    const [loadingSpread, setLoadingSpread] = useState(false);
    const [timeSpread, setTimeSpread] = useState(0);
    const [dataLength, setDataLength] = useState({
        store: 0,
        product: 0,
        result: 0,
    });

    const onTestSpread = async () => {
        setTimeSpread(0);
        setDataLength({
            store: 0,
            product: 0,
            result: 0,
        })
        if (loadingSpread) return;
        const { stores, products, marginRates } = await firstData();
        const t0 = performance.now();
        
        // let lists = new Array(stores.length * products.length);
        let lists = [];
        // let index = 0;
        for (let i = 0; i < stores.length; i++) {
            const store = stores[i];
            for (let j = 0; j < products.length; j++) {
                const product = products[j];
                // lists[index] = Object.assign({}, product, store);
                // index++;
                lists.push(Object.assign(product, store));
            }
        }
        
        const t1 = performance.now();
        setTimeSpread((t1 - t0).toFixed(2));
        setLoadingSpread(false);
        setDataLength({
            product: products.length,
            store: stores.length,
            result: lists.length,
        });
        console.log(products, stores)
    }

    return (<div className='grid grid-cols-2 gap-10 mt-10'>
        <div>
            <div className='flex justify-between items-center mb-5'>
                <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150" onClick={() => {
                    setLoadingSpread(true);
                    onTestSpread();
                }}>
                    {loadingSpread && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='none'>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>}
                    {!loadingSpread ? 'Try test' : 'Processing...'}
                </button>
                <div>
                    <span className='font-bold text-orange-700'>{timeSpread}</span> | (ms)
                </div>
            </div>
            <div>
                <p className='pb-2 mb-2 border-b flex justify-between items-center'>Store: <span className='text-orange-700 font-bold'>{dataLength.store}</span></p>
                <p className='pb-2 mb-2 border-b flex justify-between items-center'>Product: <span className='text-orange-700 font-bold'>{dataLength.product}</span></p>
                <p className='pb-2 mb-2 border-b flex justify-between items-center'>Result: <span className='text-orange-700 font-bold'>{dataLength.result}</span></p>
            </div>
        </div>
    </div>);
};
