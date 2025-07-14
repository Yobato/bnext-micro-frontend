export type ActionButtonType = 'edit' | 'delete';
export type TableVariant = 'default' | 'ibsm' | 'print' | 'inquiry';
export type TableVariantConfig = {
    hasPagination: boolean;
    hasActionColumn: boolean;
    actionButtons: ActionButtonType[];
    toolbarPosition: 'start-end' | 'left-right' | 'none';
};
export declare const tableVariantDefaults: Record<TableVariant, TableVariantConfig>;
//# sourceMappingURL=tablevariants.d.ts.map