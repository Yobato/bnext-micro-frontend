export const tableVariantDefaults = {
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
};
