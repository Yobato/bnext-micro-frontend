import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Bahasa Indonesia
import idCommon from '@bnext/locales/id/common.json';
import idHeader from '@bnext/locales/id/header.json';
import idMenu from '@bnext/locales/id/menu.json';
import idInquiry from '@bnext/locales/id/inquiry.json';
import idTransaction from '@bnext/locales/id/transaction.json';
// ... maybe idLogin, etc.

// English
import enCommon from '@bnext/locales/en/common.json';
import enHeader from '@bnext/locales/en/header.json';
import enMenu from '@bnext/locales/en/menu.json';
import enInquiry from '@bnext/locales/en/inquiry.json';
import enTransaction from '@bnext/locales/en/transaction.json';
// ... maybe enLogin, etc.

i18n
    .use(initReactI18next)
    .init({
        resources: {
        en: {
            common: enCommon,
            header: enHeader,
            menu: enMenu,
            inquiry: enInquiry,
            transaction: enTransaction,
            // ...
        },
        id: {
            common: idCommon,
            header: idHeader,
            menu: idMenu,
            inquiry: idInquiry,
            transaction: idTransaction,
            // ...
        }
        },

        defaultNS: 'common',
        fallbackLng: 'id', // default fallback is Bahasa
        lng: 'id',         // initial language (can also set to 'en' if you prefer)

        // The array of namespaces to load by default
        ns: ['common', 'header', 'inquiry', 'transaction'],

        interpolation: {
            escapeValue: false, // react already safe from xss
        }
    });

export default i18n;