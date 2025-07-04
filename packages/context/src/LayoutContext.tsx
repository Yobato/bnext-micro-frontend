'use client'
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useMemo, useEffect } from 'react'
import { getUserInfo} from '@bnext/utils';
type Users = {
    [key: string]: any,
}

export interface MenuItem {
    label: string;
    to?: string;
    icon?: string;
    childMenu?: MenuItem[];
    visible?: boolean;
    disabled?: boolean;
}

interface MenuContextType {
    currentMenu: string;
    setCurrentMenu: (menu: string) => void;
}

interface LayoutContextType {
    isSidebar: boolean;
    setIsSidebar: Dispatch<SetStateAction<boolean>>;
    isMobile: boolean;
    setMobile: Dispatch<SetStateAction<boolean>>;
}

const ContextMenu = createContext<MenuContextType | undefined>(undefined);

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [isSidebar, setIsSidebar] = useState<boolean>(true);
    const [isMobile, setMobile] = useState<boolean>(false);

    useEffect(() => {
        const strSide = localStorage.getItem("isSidebar");

        strSide && setIsSidebar(JSON.parse(strSide));
    }, []);

    const value = useMemo(() => ({ isSidebar, setIsSidebar, isMobile, setMobile }), [isSidebar, setIsSidebar, isMobile, setMobile]);
    return (
        <LayoutContext.Provider value={value}>
            <ContextMenu.Provider value={{ currentMenu, setCurrentMenu }}>
                {children}
            </ContextMenu.Provider>
        </LayoutContext.Provider>
    )
}

export const useLayout = (): LayoutContextType => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('useUser must be used within an ContextMenuProvider');
    }
    return context;
}

export const useMenu = (): MenuContextType => {
    const context = useContext(ContextMenu);
    if (!context) {
        throw new Error('useMenu must be used within an ContextMenuProvider');
    }
    return context;
}
