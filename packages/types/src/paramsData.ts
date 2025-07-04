const wicType = [
    {label: 'Nasabah', value: 'N'},
    {label: 'Konduktor', value: 'C'},
    {label: 'WIC', value: 'Y'}
]

const fisikTunai = [
    {label: 'Tunai', value: 'ya'},
    {label: 'Non Tunai', value: 'tidak'},
]

const wicIdType = [
    {label: "KTP", value: "KTP"},
    {label: "Passport", value: "PASSPORT"},
    {label: "Rekening", value: "REKENING"},
]

export const YT = [
    {label: "Ya", value: "YA"},
    {label: "Tidak", value: "TIDAK"}
]

const YTO = [
    {label: "Ya", value: "YA"},
    {label: "Tidak", value: "TIDAK"},
    {label: "Optional", value: "OPTIONAL"},
]

const currency = [
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
]

export const options = {
    wicType: wicType,
    wicIdType: wicIdType,
    fisikTunai: fisikTunai,
    YTO: YTO,
    YT: YT,
    currency: currency,
    alphanumspace: /^[A-Za-z0-9 .,\/]+$/,
}