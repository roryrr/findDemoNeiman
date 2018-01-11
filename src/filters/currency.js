/**
 * @ngdoc filter
 * @name ebApp.filter:ebCurrency
 */
angular.module('ebApp').filter('ebCurrency', ['$filter', 'ebConfig', function($filter, ebConfig) {
  'use strict';

  var CURRENCY_SYMBOLS = {
    AED: [2, 'dh', '\u062f.\u0625.'],
    ALL: [0, 'Lek', 'Lek'],
    AUD: [2, '$', 'AU$'],
    BDT: [2, '\u09F3', 'Tk'],
    BGN: [2, 'lev', 'lev'],
    BRL: [2, 'R$', 'R$'],
    CAD: [32, 'CAD $', 'CAD'],
    CDF: [2, 'FrCD', 'CDF'],
    CHF: [2, 'CHF', 'CHF'],
    CLP: [0, '$', 'CL$'],
    CNY: [2, '¥', 'RMB¥'],
    COP: [0, '$', 'COL$'],
    CRC: [0, '\u20a1', 'CR\u20a1'],
    CZK: [50, 'K\u010d', 'K\u010d'],
    DKK: [18, 'kr', 'kr'],
    DOP: [2, '$', 'RD$'],
    EGP: [2, '£', 'LE'],
    ETB: [2, 'Birr', 'Birr'],
    EUR: [2, '€', '€'],
    GBP: [2, '£', 'GB£'],
    HKD: [2, '$', 'HK$'],
    HRK: [2, 'kn', 'kn'],
    HUF: [0, 'Ft', 'Ft'],
    IDR: [0, 'Rp', 'Rp'],
    ILS: [2, '\u20AA', 'IL\u20AA'],
    INR: [2, '\u20B9', 'Rs'],
    IRR: [0, 'Rial', 'IRR'],
    ISK: [0, 'kr', 'kr'],
    JMD: [2, '$', 'JA$'],
    JPY: [0, '¥', 'JP¥'],
    KRW: [0, '\u20A9', 'KR₩'],
    LKR: [2, 'Rs', 'SLRs'],
    LTL: [2, 'Lt', 'Lt'],
    MNT: [0, '\u20AE', 'MN₮'],
    MVR: [2, 'Rf', 'MVR'],
    MXN: [2, '$', 'Mex$'],
    MYR: [2, 'RM', 'RM'],
    NOK: [50, 'kr', 'NOkr'],
    PAB: [2, 'B/.', 'B/.'],
    PEN: [2, 'S/.', 'S/.'],
    PHP: [2, '\u20B1', 'Php'],
    PKR: [0, 'Rs', 'PKRs.'],
    PLN: [50, 'z\u0142', 'z\u0142'],
    RON: [2, 'RON', 'RON'],
    RSD: [0, 'din', 'RSD'],
    RUB: [50, 'руб.', 'руб.'],
    SAR: [2, 'Rial', 'Rial'],
    SEK: [2, 'kr', 'kr'],
    SGD: [2, '$', 'S$'],
    THB: [2, '\u0e3f', 'THB'],
    TRY: [2, 'TL', 'YTL'],
    TWD: [2, 'NT$', 'NT$'],
    TZS: [0, 'TSh', 'TSh'],
    UAH: [2, '\u20B4', 'UAH'],
    USD: [2, '$', 'US$'],
    UYU: [2, '$', '$U'],
    VND: [0, '\u20AB', 'VN\u20AB'],
    YER: [0, 'Rial', 'Rial'],
    ZAR: [2, 'R', 'ZAR']
  };

  return function(input, inputCurrency, hideDecimals) {
    /* jslint bitwise:true */
    var info = CURRENCY_SYMBOLS[inputCurrency] || CURRENCY_SYMBOLS[ebConfig.defaultCurrency] || CURRENCY_SYMBOLS.EUR;
    var value = $filter('number')(parseFloat(input), hideDecimals ? 0 : 2);
    if (inputCurrency === 'USD' || ebConfig.defaultCurrency === 'USD' || ebConfig.lang === 'en-CA') {
      value = value.toString().replace('.', ',');
    }
    var space = (info[0] & 0x20) === 0 ? '' : ' ';
    var prefix = (info[0] & 0x10) === 0;
    var symbol = info[ebConfig.currencySymbol || 1];

    return prefix ? symbol + value : value + space + symbol;
  };

}]);