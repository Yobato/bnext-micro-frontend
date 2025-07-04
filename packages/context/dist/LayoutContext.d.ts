import { ReactNode, Dispatch, SetStateAction } from 'react';
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
export declare const LayoutProvider: ({ children }: {
    children: ReactNode;
}) => any;
export declare const useLayout: () => LayoutContextType;
export declare const useMenu: () => MenuContextType;
export {};
//# sourceMappingURL=LayoutContext.d.ts.map