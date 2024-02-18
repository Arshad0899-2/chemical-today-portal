import React from 'react';
import './Drawer.css'

interface IDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;  // Include this line
}



const Drawer: React.FC = () => {
    return (
        <div className={`drawer open`}>
          <div className="drawer-overlay"></div>
          <div className="drawer-content">
            {/* {children} */}
          </div>
        </div>
        // <div className="drawer-side">
        //     <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        //     <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
        //         <li><a>Sidebar Item 1</a></li>
        //         <li><a>Sidebar Item 2</a></li>
        //         {/* {children} */}
        //     </ul>
        // </div>
    );
};

export default Drawer;
