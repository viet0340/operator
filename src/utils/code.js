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

    // classify: product.classify,
    // divisionType: product.divisionType,
    // marketableSize: product.marketableSize,
    // optionCd: product.optionCd,
    // optionId: product.optionId,
    // optionNm: product.optionNm,
    // productCd: product.productCd,
    // productId: product.productId,
    // productMakerNm: product.productMakerNm,
    // productNm: product.productNm,
    // productTp: product.productTp,
    // productTpNm: product.productTpNm,
    // quantityPerPack: product.quantityPerPack,
    // standardUnitPrice: product.standardUnitPrice,
    // trade: product.trade,
    // vendorNmDefault: product.vendorNmDefault,

    // storeCd: store.storeCd,
    // storeId: store.storeId,
    // storeNm: store.storeNm,
    // storeTp: store.storeTp,
    // storeTpNm: store.storeTpNm,
    // supplyUnitPriceGroup: store.supplyUnitPriceGroup,
    // supplyUnitPriceGroupNm: store.supplyUnitPriceGroupNm,

    //https://docs.google.com/presentation/d/1Gm6WDz7hWJ8ar7WV2UY_S_cIJxutX6wZb80wRT789rM/edit#slide=id.g174c8c10a99_0_0