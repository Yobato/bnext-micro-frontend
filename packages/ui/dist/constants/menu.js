export const menuRaw = [
    {
        title: "Nasabah",
        items: [
            {
                label: "CIF",
                icon: "pi pi-fw pi-database",
                childMenu: [
                    {
                        label: "Home CIF",
                        icon: "pi pi-home",
                        path: "{cif}/", // relatif terhadap zona /cif
                        external: true
                    },
                    {
                        label: "Search CIF",
                        icon: "pi pi-search",
                        path: "{cif}/search", // hasilnya: /cif/search
                        external: true
                    },
                ],
            },
            {
                label: "Reservasi",
                icon: "pi pi-fw pi-calendar",
                childMenu: [
                    {
                        label: "Home Reservasi",
                        icon: "pi pi-home",
                        path: "{reservasi}/", // relatif terhadap zona /reservasi
                        external: true
                    },
                    {
                        label: "Formulir Selesai",
                        icon: "pi pi-copy",
                        path: "{reservasi}/form",
                        external: true
                    },
                    {
                        label: "Table Print",
                        icon: "pi pi-search",
                        path: "{reservasi}/search",
                        external: true
                    },
                    {
                        label: "Table Default",
                        icon: "pi pi-copy",
                        path: "{reservasi}/report",
                        external: true
                    },
                ],
            },
        ],
    },
    {
        title: "Pengaturan",
        items: [
            {
                label: "User",
                icon: "pi pi-fw pi-user",
                childMenu: [
                    {
                        label: "Daftar User",
                        icon: "pi pi-users",
                        path: "/settings/users",
                    },
                ],
            },
        ],
    },
];
