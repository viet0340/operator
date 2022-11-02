import React, { useState } from 'react';
import { firstData } from '../../api';
export const NormalOperator = () => {
    const [loadingNormal, setLoadingNormal] = useState(false);
    const [loadingSpread, setLoadingSpread] = useState(false);
    const [timeNormal, setTimeNormal] = useState(0);
    const [timeSpread, setTimeSpread] = useState(0);
    const [dataList, setDataList] = useState([]);

    const onTestNormal = async () => {
        if (loadingNormal) return;
        const { stores, products } = await firstData();
        const t0 = performance.now();
        let lists = [];
        for (let i = 0; i < stores.length; i++) {
            const store = stores[i];
            for (let j = 0; j < products.length; j++) {
                const product = products[j];
                lists.push(Object.assign({ product, store }))
            }
        }
        const t1 = performance.now();
        setTimeNormal((t1 - t0).toFixed(2));
        setLoadingNormal(false);
    }

    const onTestSpread = async () => {
        if (loadingSpread) return;
        const { stores, products } = await firstData();
        const t0 = performance.now();
        let lists = [];
        for (let i = 0; i < stores.length; i++) {
            var store = stores[i];
            for (let j = 0; j < products.length; j++) {
                var product = products[j];
                lists.push({ ...product, ...store })
            }
        }
        const t1 = performance.now();
        setTimeSpread((t1 - t0).toFixed(2));
        setLoadingSpread(false);
    }

    return (<div className='grid grid-cols-2 gap-10 mt-10'>
        <div>
            <div className='flex justify-between items-center mb-1'>
                <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150" onClick={() => {
                    setLoadingNormal(true);
                    onTestNormal();
                }}>
                    {loadingNormal && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='none'>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>}
                    {!loadingNormal ? 'Test normal operator' : 'Processing...'}
                </button>
                <div>
                    (ms) | <span className='font-bold text-orange-700'>{timeNormal}</span>
                </div>
            </div>
            <div className='border p-10 border-neutral-400'>
                <img className='w-full' src='/images/copyarraynormal.png' alt='' />
            </div>
        </div>
        <div>
            <div className='flex justify-between items-center mb-1'>
                <div>
                    (ms) | <span className='font-bold text-orange-700'>{timeSpread}</span>
                </div>
                <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150" onClick={() => {
                    setLoadingSpread(true);
                    onTestSpread();
                }}>
                    {loadingSpread && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='none'>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>}
                    {!loadingSpread ? 'Test spread operator' : 'Processing...'}
                </button>
            </div>
            <div className='border p-10 border-neutral-400'>
                <img className='w-full' src='/images/copyarrayspread.png' alt='' />
            </div>
        </div>
    </div>);
};
