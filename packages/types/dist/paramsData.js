"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.YT = void 0;
var wicType = [
    { label: 'Nasabah', value: 'N' },
    { label: 'Konduktor', value: 'C' },
    { label: 'WIC', value: 'Y' }
];
var fisikTunai = [
    { label: 'Tunai', value: 'ya' },
    { label: 'Non Tunai', value: 'tidak' },
];
var wicIdType = [
    { label: "KTP", value: "KTP" },
    { label: "Passport", value: "PASSPORT" },
    { label: "Rekening", value: "REKENING" },
];
exports.YT = [
    { label: "Ya", value: "YA" },
    { label: "Tidak", value: "TIDAK" }
];
var YTO = [
    { label: "Ya", value: "YA" },
    { label: "Tidak", value: "TIDAK" },
    { label: "Optional", value: "OPTIONAL" },
];
var currency = [
    { label: 'Opsional', value: 'OPSIONAL' },
    { label: 'IDR', value: 'IDR' },
    { label: 'USD', value: 'USD' },
    { label: 'SGD', value: 'SGD' },
    { label: 'EUR', value: 'EUR' },
    { label: 'SAR', value: 'SAR' },
    { label: 'JPY', value: 'JPY' },
    { label: 'GBP', value: 'GBP' },
    { label: 'AUD', value: 'AUD' },
    { label: 'CAD', value: 'CAD' },
    { label: 'CHF', value: 'CHF' },
    { label: 'CNY', value: 'CNY' },
    { label: 'HKD', value: 'HKD' },
    { label: 'AED', value: 'AED' },
    { label: 'MYR', value: 'MYR' },
];
exports.options = {
    wicType: wicType,
    wicIdType: wicIdType,
    fisikTunai: fisikTunai,
    YTO: YTO,
    YT: exports.YT,
    currency: currency,
    alphanumspace: /^[A-Za-z0-9 .,\/]+$/,
};
