const getDataList = async () => {
    const token = localStorage.getItem('access_token');
    if (!token) return;
    const res = await fetch('https://dev.api.smdc-dev.com/product/supply-rate', {
        headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ storeIds: [382, 447, 448, 445, 444, 405, 321, 303, 147, 223, 82, 95, 119, 96], "supplyUnitPriceGroupIds": [], "productTypes": [], "product": "", "largeCategoryCodes": [], "mediumCategoryCodes": [], "smallCategoryCodes": [], "subCategoryCodes": [], "productGroupIds": [], "isReadOnlyProductTp": true })
    }).then(res => res.json());

    return res;
}

const firstData = async () => {
    const res = await getDataList();
    const { stores, products, marginRates } = res?.data;
    return {
        stores, products, marginRates
    }
}


export { getDataList, firstData }