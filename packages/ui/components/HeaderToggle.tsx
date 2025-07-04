'use client'
import React, { useState, useEffect } from 'react';
import { useLayout } from '@bnext/context';

const HeaderToggle: React.FC = React.memo(() =>  {
    const { setMobile } = useLayout();
    const { setIsSidebar } = useLayout();
    const [currentTime, setCurrentTime] = useState(new Date());

    const onMenuToggle = () => {
        if (isDesktop())
            setIsSidebar((prev) => !prev);
        else
            setMobile((prev) => !prev);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    const isDesktop = () => {
        return window.innerWidth > 991;
    };

    const formatDateTime = (date: any) => {
        const today = date.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${today} ${hours}:${minutes}:${seconds}`;
    };

    return (
        <>
            <div className="layout-menu-button">
                <div className="grid-me">
                    <button type="button" className="p-link layout-topbar-button" title='button' onClick={onMenuToggle}>
                        <i className="pi pi-bars" />
                    </button>
                    <p className="p-topbar-toogle">{formatDateTime(currentTime)}</p>
                </div>
            </div>
        </>
    )
});

export default HeaderToggle;