const getDataList = async () => {
    const token = localStorage.getItem('access_token');
    if (!token) return;
    const res = await fetch('https://dev.api.smdc-dev.com/product/supply-rate', {
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ storeIds: [382], "supplyUnitPriceGroupIds": [], "productTypes": ["1"], "product": "", "largeCategoryCodes": [], "mediumCategoryCodes": [], "smallCategoryCodes": [], "subCategoryCodes": [], "productGroupIds": [], "isReadOnlyProductTp": true })
    }).then(res => res.json());

    return res;
}

const firstData = async () => {
    const res = await getDataList();
    const { stores, products } = res?.data;
    return {
        stores, products,
    }
}


export { getDataList, firstData }