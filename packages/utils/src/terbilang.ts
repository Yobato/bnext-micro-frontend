const units = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan'];
const specialTens = ['Sepuluh', 'Sebelas'];
const scales = ['', 'Ribu', 'Juta', 'Milyar'];

function convertGroup(num: number) {
    if (num === 0) return '';
    
    let result = '';
    if (num >= 100) {
        const hundreds = Math.floor(num / 100);
        result += (hundreds === 1 ? 'Seratus' : units[hundreds] + ' Ratus');
        num %= 100;
        if (num > 0) result += ' ';
    }
    
    if (num >= 20) {
        const tens = Math.floor(num / 10);
        result += units[tens] + ' Puluh';
        num %= 10;
        if (num > 0) result += ' ' + units[num];
    } else if (num >= 10) {
        result += num === 10 ? specialTens[0] : 
                 num === 11 ? specialTens[1] : 
                 units[num % 10] + ' Belas';
    } else if (num > 0) {
        result += units[num];
    }
    
    return result;
}

export function terbilangAmount(amount: number) {
    if (amount === 0) return 'Nol';
    if (amount < 0 || amount > 25000000) return 'Jumlah Tidak Valid';
    
    let result = '';
    let scaleIndex = 0;
    
    while (amount > 0) {
        const group = amount % 1000;
        if (group > 0) {
            const groupText = convertGroup(group);
            if (scaleIndex > 0) {
                if (scaleIndex === 1 && group === 1) {
                    result = 'Seribu' + (result ? ' ' + result : '');
                } else {
                    result = groupText + ' ' + scales[scaleIndex] + (result ? ' ' + result : '');
                }
            } else {
                result = groupText + (result ? ' ' + result : '');
            }
        }
        amount = Math.floor(amount / 1000);
        scaleIndex++;
    }
    
    return result.trim() + ' Rupiah';
}
