// let dictionary = {}
// marginRates.forEach(marginRate => {
//     const { supplyUnitPriceGroup, productType } = marginRate;
//     let data = dictionary[`${supplyUnitPriceGroup}_${productType}`];
//     if (!data) {
//         dictionary[`${supplyUnitPriceGroup}_${productType}`] = [marginRate];
//     } else {
//         dictionary[`${supplyUnitPriceGroup}_${productType}`] = data.concat(marginRate);
//     }
// });

// let marginRate = [];
// for (let x = 0; x < marginRates.length; x++) {
//     const { supplyUnitPriceGroup, productType } = marginRates[x];
//     if (supplyUnitPriceGroup === store.supplyUnitPriceGroup && productType === product.productTp) {
//         marginRate.push(marginRates[x])
//     }
// }


// const marginRate = dictionary[`${store.supplyUnitPriceGroup}_${product.productTp}`]
// lists.push(Object.assign(product, store, { marginRate }));
