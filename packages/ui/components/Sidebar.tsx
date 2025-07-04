'use server'
import Menu from "./Menu";

async function getMenuData() {
    return [
        {
            label: 'menu.home',
            childMenu: [
                { label: 'menu.dashboard', icon: 'pi pi-fw pi-home', to: '/reservasi' },
                { label: 'menu.reservasi', icon: 'pi pi-fw pi-book', to: '/reservasi' },
            ]
        },
        {
            label: 'menu.features',
            childMenu: []
        }
    ];
}

const Sidebar: React.FC = async () => {
    const menuData = await getMenuData();

    return (
        <>
            <div className="layout-menu-header hide">
                <span className='close-menu'><i className="pi pi-times"></i></span>
            </div>
            <ul className="layout-menu" id='sideBarBox'>
                <Menu serverMenuData={menuData}/>
            </ul>
        </>
    )
}

export default Sidebar;