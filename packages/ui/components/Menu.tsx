'use client'
// import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { CSSTransition } from 'react-transition-group';
import { useLayout, useMenu } from "@bnext/context";

interface MenuItem {
    label: string;
    to?: string;
    icon?: string;
    childMenu?: MenuItem[];
    visible?: boolean;
    disabled?: boolean;
}

interface MenuItemProps {
    item: MenuItem;
    parentKey?: string;
    index?: number;
}

const MenuItemComponent: React.FC<MenuItemProps> = ({ item, parentKey, index }) => {
    const [ group, setGroup ] = useState(0);
    const [ subMenu, setSubMenu ] = useState(0);
    const { currentMenu, setCurrentMenu } = useMenu();

    useEffect(() => {
        const group = localStorage.getItem("group");
        const fold = localStorage.getItem("fold");
        const menu = localStorage.getItem("menu");

        group && setGroup(JSON.parse(group));
        fold && setSubMenu(JSON.parse(fold));
        menu && setCurrentMenu(menu);
    }, [currentMenu]);

    const groupClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: any) => {
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        const val = (group == index) ? 0 : index;

        setGroup(val);
        setSubMenu(0);
        localStorage.setItem("group", JSON.stringify(val));
        localStorage.setItem("fold", "0");
    };

    const subClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: any) => {
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        const val = subMenu == index ? 0 : index;

        setSubMenu(val);
        localStorage.setItem('fold', JSON.stringify(val));
    };

    const current = (val: string, type?: string) => {
        if (type == 'group') {
            setGroup(0);
            setSubMenu(0);
            localStorage.setItem("group", "0");
            localStorage.setItem("fold", "0");
        }

        setCurrentMenu(val);
        localStorage.setItem("menu", val);
    }

    return (
        <li className={classNames({'layout-root-menuitem': true})}>
            <div className="layout-menuitem-root-text">{item.label}</div>
            <ul>
                {
                    item.childMenu?.map((vGroup, iGroup) => {
                        if (vGroup.to) {
                            return (
                                <li key={iGroup} className={currentMenu === vGroup.label ? 'active' : ''} onClick={() => current(vGroup.label, 'group')}>
                                    <a className="p-ripple clickable" tabIndex={0} href={vGroup.to as string || ''}>
                                        <i className={`layout-menuitem-icon ${vGroup.icon || "pi pi-folder"}`}></i>
                                        <span className="layout-menuitem-text">{vGroup.label}</span>
                                    </a>
                                </li>
                            );
                        }
                        else {
                            const jGroup = iGroup + 1;
                            return (
                                <li key={jGroup} className={group === jGroup ? 'active-menuitem' : ''}>
                                    <a key={iGroup} id={"gm" + iGroup} className="p-ripple" tabIndex={0} onClick={ vGroup.childMenu ? (e) => { groupClick(e, jGroup); } : undefined }>
                                        <i className={`layout-menuitem-icon ${vGroup.icon || "pi pi-folder"}`}></i>
                                        <span className="layout-menuitem-text">{vGroup.label}</span>
                                        <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                                    </a>
                                    <CSSTransition timeout={{ enter: 200, exit: 200 }} classNames="layout-submenu" in={group === jGroup}>
                                        <ul id={vGroup!.label}>
                                            {
                                                vGroup.childMenu?.map((vSub, iSub) => {
                                                    if (vSub.to) {
                                                        return (
                                                            <li key={iSub} className={currentMenu === vSub.label ? 'active' : ''} onClick={() => current(vSub.label)}>
                                                                <a className="p-ripple clickable" tabIndex={0} href={vSub.to as string || ''}>
                                                                    <i className={`layout-menuitem-icon ${vSub.icon || "pi pi-file"}`}></i>
                                                                    <span className="layout-menuitem-text">{vSub.label}</span>
                                                                </a>
                                                            </li>
                                                        );
                                                    }
                                                    else {
                                                        const jSub = iSub + 1;
                                                        return (
                                                            <li key={jSub} className={subMenu === jSub ? 'active-menuitem' : ''}>
                                                                <a key={iSub} id={"sbm" + iSub} className="p-ripple" tabIndex={0} onClick={vSub.childMenu ? (e) => { subClick(e, jSub); } : undefined}>
                                                                    <i className={`layout-menuitem-icon ${vSub.icon || "pi pi-file"}`}></i>
                                                                    <span className="layout-menuitem-text">{vSub.label}</span>
                                                                    <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                                                                </a>
                                                                <CSSTransition timeout={{ enter: 200, exit: 200 }} classNames="layout-submenu" in={subMenu === jSub}>
                                                                    <ul>
                                                                        {
                                                                            vSub.childMenu?.map((vMenu, iMenu) => {
                                                                                return (
                                                                                    <li key={iMenu} className={currentMenu === vMenu.label ? 'active' : ''} onClick={() => current(vMenu.label)}>
                                                                                        <a className="p-ripple clickable" tabIndex={0} href={vMenu.to as string || ''}>
                                                                                            <i className={`layout-menuitem-icon ${vMenu.icon}`}></i>
                                                                                            <span className="layout-menuitem-text">{vMenu.label}</span>
                                                                                        </a>
                                                                                    </li>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </CSSTransition>
                                                            </li>
                                                        );
                                                    }
                                                }
                                            )}
                                        </ul>
                                    </CSSTransition>
                                </li>
                            );
                        }
                    })
                }
            </ul>
        </li>
    );
};

const Menu: React.FC = () => {
    const { isSidebar } = useLayout();
    const { isMobile, setMobile } = useLayout();
    const [menus] = useState<any>(() => {
        const res =  localStorage.getItem("Menu") || '[]';
        if (!res) return null;
        const dataMenus = JSON.parse(res);
        return dataMenus;
    });

    useEffect(() => {
        const sideBar = document.getElementById('webScreen');
        const strSide = localStorage.getItem("isSidebar");

        if (sideBar) {
            if (!isDesktop()) {
                const closeSideBar = document.querySelectorAll('a.clickable, span.close-menu, .layout-mask');

                const isRemove = () => {
                    document.body.classList.remove('blocked-scroll');
                    sideBar.classList.remove("layout-mobile-active");
                }

                if (isMobile) {
                    document.body.classList.add('blocked-scroll');
                    sideBar.classList.add("layout-mobile-active");
                }
                else
                    isRemove();

                closeSideBar.forEach(e => {
                    e.addEventListener("click", () => {
                        setMobile(false);
                        isRemove();
                    });
                });
            }
            else {
                setMobile(false);
                sideBar.className = 'layout-wrapper layout-static ' + (!isSidebar ? "layout-static-inactive" : "");
            }
        }

        if (strSide == undefined || (strSide && JSON.parse(strSide) != isSidebar))
            localStorage.setItem("isSidebar", JSON.stringify(isSidebar));
    }, [isSidebar, isMobile]);

    const simenus: any[] = [];

    const menuItems: any[] = [
        {
            label: 'Home',
            childMenu: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/reservasi' },
                { label: 'Reservasi', icon: 'pi pi-fw pi-book', to: '/reservasi/home' }
            ]
        },
        {
            label: 'Menu Features',
            childMenu: simenus
        }
    ]

    if (menus.length > 0) {
        const group = menus[0].menuGroup
        group.sort((a: any, b: any) => a.order - b.order);

        for (let i = 0; i < menus[0].menuGroup.length; i++) {
            const childMenuGroup: any[] = []
            const menuGroup = menus[0].menuGroup[i]
            simenus.push({
                label :menuGroup.name,
                childMenu: childMenuGroup
            })

            menuGroup.menuFolder.sort((a: any, b: any) => a.order - b.order);

            for (let i = 0; i < menuGroup.menuFolder.length; i++) {
                const childFolder: any[] = []
                const menuFolder = menuGroup.menuFolder[i];
                childMenuGroup.push({
                    label: menuFolder.name,
                    icon: '',
                    childMenu: childFolder
                })

                if (menuFolder.menu && Array.isArray(menuFolder.menu)) {
                    for(let i=0; i<menuFolder.menu.length; i++){
                        const menu = menuFolder.menu[i];
                        childFolder.push({
                            id: menu.menuId,
                            icon: '',
                            label: menu.name,
                            to: "/" +menu.path
                        })
                    }
                }
            }
        }
    }

    const isDesktop = () => {
        return window.innerWidth > 991;
    };

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 991) setMobile(false);
    });

    const menuModel: MenuItem[] = menuItems;

    return (
        <>
            {menuModel.map((item, index) => (
                <MenuItemComponent key={index} item={item} />
            ))}
        </>

    );
};

export default Menu; 