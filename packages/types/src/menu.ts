export type MenuItem = {
    label: string;
    icon?: string;
    path?: string; // path relatif atau absolut
    href?: string; // hasil resolved path
    childMenu?: MenuItem[];
    external?: boolean;
    // outsideZone: boolean;
  };
  
  export type MenuGroup = {
    title: string;
    items: MenuItem[];
  };
