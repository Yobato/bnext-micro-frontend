export type ActionButtonType = 'edit' | 'delete';

export type TableVariant = 'default' | 'ibsm' | 'print' | 'inquiry';

export type TableVariantConfig = {
  hasPagination: boolean;
  hasActionColumn: boolean;
  actionButtons: ActionButtonType[];
  toolbarPosition: 'start-end' | 'left-right' | 'none';
};

export const tableVariantDefaults: Record<TableVariant, TableVariantConfig> = {
  ibsm: {
    hasPagination: true,
    hasActionColumn: true,
    actionButtons: ['edit', 'delete'],
    toolbarPosition: 'start-end',
  },
  print: {
    hasPagination: true,
    hasActionColumn: true,
    actionButtons: ['edit'],
    toolbarPosition: 'start-end',
  },
  default: {
    hasPagination: true,
    hasActionColumn: true,
    actionButtons: ['edit'],
    toolbarPosition: 'left-right',
  },
  inquiry: {
    hasPagination: false,
    hasActionColumn: false,
    actionButtons: [],
    toolbarPosition: 'none',
  },
} as const;