import './SmallCoverPageHeader.css'
import companyLogo from "../../assets/header-assets/company-logo.svg";
import searchIcon from "../../assets/header-assets/search.svg";
import { Link } from 'react-router-dom';
import Drawer from '../Drawer/Drawer';
import { useEffect, useRef, useState } from 'react';

interface HeaderProps {
    toggleDrawer: () => void;
}



export const SmallCoverPageHeader: React.FC<HeaderProps> = ({ toggleDrawer }) => {

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

    useEffect(() => {
        if (componentRef.current) {
            setHeaderHeight(componentRef.current.clientHeight);
        }
    }, []);

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
                        <img className='header-search-icon-sm' src={searchIcon} />
                    </div>
                </div >

            </header >

            {isDrawerOpen && <Drawer headerHeight={headerHeight} />}

        </>
    )
}
