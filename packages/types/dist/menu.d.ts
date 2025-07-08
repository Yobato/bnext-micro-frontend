export type MenuItem = {
    label: string;
    icon?: string;
    path?: string;
    href?: string;
    childMenu?: MenuItem[];
    external?: boolean;
};
export type MenuGroup = {
    title: string;
    items: MenuItem[];
};
//# sourceMappingURL=menu.d.ts.map