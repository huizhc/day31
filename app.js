window.addEventListener('load', function () {
    regionWr = document.querySelector('#region-radio-wrapper');
    productWr = document.querySelector('#product-radio-wrapper');
    tableWr = document.querySelector("#table-wrapper");
    //生成checkbox
    createCh(regionWr, ['华南', '华北', '华东']);
    createCh(productWr, ['手机', '笔记本', '智能音箱']);
});