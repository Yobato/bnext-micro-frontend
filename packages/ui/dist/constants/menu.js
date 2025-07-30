export const menuRaw = [
    // Menu paling luar (Dashboard)
    {
        title: "Dashboard",
        items: [
            {
                icon: "pi pi-home",
                label: "Dashboard",
                path: "{host}/dashboard",
                // external: true,
            },
        ],
    },
    // Menu Nasabah
    {
        title: "Nasabah",
        items: [
            {
                label: "CIF",
                icon: "pi pi-id-card",
                childMenu: [
                    {
                        label: "Home CIF",
                        icon: "pi pi-home",
                        path: "{cif}/",
                        external: true,
                    },
                    {
                        label: "Search CIF",
                        icon: "pi pi-search",
                        path: "{cif}/search",
                        external: true,
                    },
                    {
                        label: "Inquiry",
                        icon: "pi pi-eye",
                        path: "{cif}/inquiry",
                        external: true,
                    },
                ],
            },
            {
                label: "Reservasi",
                icon: "pi pi-calendar",
                childMenu: [
                    {
                        label: "Home Reservasi",
                        icon: "pi pi-home",
                        path: "{reservasi}/",
                        external: true,
                    },
                    {
                        label: "Formulir Selesai",
                        icon: "pi pi-check-square",
                        path: "{reservasi}/form",
                        external: true,
                    },
                    {
                        label: "Table Print",
                        icon: "pi pi-print",
                        path: "{reservasi}/search",
                        external: true,
                    },
                    {
                        label: "Table Default",
                        icon: "pi pi-table",
                        path: "{reservasi}/report",
                        external: true,
                    },
                    {
                        label: "Table IBSM",
                        icon: "pi pi-database",
                        path: "{reservasi}/ibsm",
                        external: true,
                    },
                ],
            },
        ],
    },
    // Menu Pengaturan
    {
        title: "Pengaturan",
        items: [
            {
                label: "User",
                icon: "pi pi-user",
                childMenu: [
                    {
                        label: "Daftar User",
                        icon: "pi pi-users",
                        path: "{settings}/users",
                    },
                ],
            },
        ],
    },
];
