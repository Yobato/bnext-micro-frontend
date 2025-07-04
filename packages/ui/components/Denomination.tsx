import React, { useState, useCallback } from 'react';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { useTranslation } from 'react-i18next';
 
export interface Denomination {
    denom: number;
    count: number;
    total: number;
}
 
export const useDenominations = (currency = 'IDR'): { denominations: Denomination[]; updateDenomination: (index: number, count: number) => void; resetDenominations: () => void; totalDenomAmount: number; } => {
    const initialDenominations: Denomination[] = [
        { denom: 100000, count: 0, total: 0 },
        { denom: 50000, count: 0, total: 0 },
        { denom: 20000, count: 0, total: 0 },
        { denom: 10000, count: 0, total: 0 },
        { denom: 5000, count: 0, total: 0 },
        { denom: 2000, count: 0, total: 0 },
        { denom: 1000, count: 0, total: 0 },
    ];
 
    const [denominations, setDenominations] = useState<Denomination[]>([...initialDenominations]);
 
    const updateDenomination = useCallback((index: number, count: number) => {
        setDenominations(prev => {
            const newDenoms = [...prev];
            newDenoms[index] = {
                ...newDenoms[index],
                count,
                total: newDenoms[index].denom * count,
            };
            return newDenoms;
        });
    }, []);
 
    const resetDenominations = useCallback(() => {
        setDenominations([...initialDenominations]);
    }, []);
 
    const totalDenomAmount = denominations.reduce((sum, d) => sum + d.total, 0);
 
    return {
        denominations,
        updateDenomination,
        resetDenominations,
        totalDenomAmount,
    };
};
 
interface DenominationDisplayProps {
    denominations: Denomination[];
    total: number;
    editable?: boolean;
    currency?: string;
    loading?: boolean;
    onUpdate?: (index: number, count: number) => void;
}
 
export const DenominationDisplay: React.FC<DenominationDisplayProps> = ({ denominations, total, editable = false, currency = 'IDR', loading = false, onUpdate, }) => {
    const { t } = useTranslation(['transaction']);
    const currencyConfig: Intl.NumberFormatOptions = {
        style: 'currency',
        currency,
        maximumFractionDigits: 0,
    };
 
    return (
        <div className="denomination-display">
            {denominations.map((denom, index) => (
                <div key={denom.denom} className="flex flex-column mb-3">
                    <label htmlFor={`denom-${index}`} className="mb-2 font-medium">
                        {new Intl.NumberFormat('id-ID', currencyConfig).format(denom.denom)}
                    </label>
                    <div className="flex flex-row gap-2">
                        <InputNumber
                            id={`denom-${index}`}
                            value={denom.count}
                            onValueChange={(e: InputNumberValueChangeEvent) =>
                                onUpdate?.(index, e.value ?? 0)
                            }
                            mode="decimal"
                            showButtons
                            min={0}
                            disabled={!editable || loading}
                            className="w-full"
                            incrementButtonClassName="p-button-secondary"
                            decrementButtonClassName="p-button-secondary"
                            inputClassName="text-center"
                        />
                    </div>
                    <small className="mt-2 text-color-secondary">
                        {new Intl.NumberFormat('id-ID', currencyConfig).format(denom.total)}
                    </small>
                </div>
            ))}
            
            <div className="flex flex-row align-items-center justify-content-between mt-4">
                <label className="font-medium">
                    {t('transaction:totalDenom')}
                </label>
                <InputNumber
                    value={total}
                    disabled
                    prefix={currency === 'IDR' ? 'Rp' : undefined}
                    mode="decimal"
                    className="w-6"
                    inputClassName="font-bold"
                    {...(currency !== 'IDR' && {
                        suffix: ` ${currency}`,
                        currency
                    })}
                />
            </div>
        </div>
    );
};