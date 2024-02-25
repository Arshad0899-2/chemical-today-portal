import './Header.css'
import companyLogo from "../../assets/header-assets/company-logo.svg";
import { Link } from 'react-router-dom';
import Drawer from '../Drawer/Drawer';
import { useEffect, useRef, useState } from 'react';

interface HeaderProps {
    toggleDrawer: () => void;
}



export const Header: React.FC<HeaderProps> = ({ }) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const [scrollDisabled, setScrollDisabled] = useState(false);

    useEffect(() => {
        if (scrollDisabled) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [scrollDisabled]);

    const toggleDrawer1 = () => {
        setIsDrawerOpen(!isDrawerOpen);
        setScrollDisabled(!scrollDisabled);
    };

    const componentRef = useRef<HTMLDivElement>(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        if (componentRef.current) {
            setHeaderHeight(componentRef.current.clientHeight);
        }
    }, []);


    const openDownloadDialog = () => {
        console.log("Hello");
        setIsModalVisible(!isModalVisible);
        console.log(isModalVisible);
    }

    console.log("Height bol bhai: " + headerHeight)


    return (

        <>
            <header ref={componentRef} className='header-sm'>

                <div className="main-sm-header">
                    <div className='header-flex-sm'>
                        <div className="flex-none">
                            <button className="btn btn-square btn-ghost" onClick={toggleDrawer1} >

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-18 h-14 stroke-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </button>
                        </div>
                        <div className='header-body-sm'>
                            <label htmlFor="my-drawer"><Link to="/"><img className="company-logo-sm" src={companyLogo} alt="Chemical Today" /></Link></label>
                        </div>
                    </div>
                    <div className='header-search-sm'>
                        <label className="input h-9 flex items-center gap-2 search">
                            <input type="text" className="grow search-input" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="current" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
                        </label>
                        <button className="btn h-2 download-btn" onClick={openDownloadDialog}>Download App</button>
                    </div>

                    {isModalVisible && (<dialog className="modal modal-bottom sm:modal-middle" open>
                        <div className="modal-box">
                            <div className='dialog-cls-btn'>
                                <button className="btn btn-square" onClick={openDownloadDialog}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <p className="py-4">Download Chem Square Today</p>
                            <div role="tablist" className="tabs">
                                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
                                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

                                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
                                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

                            </div>
                        </div>
                    </dialog>)}
                </div >

            </header >

            {isDrawerOpen && <Drawer headerHeight={headerHeight} onOverlayClicked={toggleDrawer1} />}

        </>
    )
}
