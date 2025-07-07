import React from "react";

type SidebarProps = {
    children?: React.ReactNode;
};

const Sidebar: React.FC<SidebarProps> = ({children}) => {
    return(
        <>
            <div className="layout-menu-header hide">
                <span className='close-menu'><i className="pi pi-times"></i></span>
            </div>
            <ul className="layout-menu" id='sideBarBox'>
                {/* Menu component will be rendered here */}
                {children}
            </ul>
        </>
    )
}

export default Sidebar;