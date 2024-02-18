import './SmallCoverPageHeader.css'
import companyLogo from "../../assets/header-assets/company-logo.svg";
import searchIcon from "../../assets/header-assets/search.svg";
import { Link } from 'react-router-dom';

interface HeaderProps {
    toggleDrawer: () => void;
  }

export const SmallCoverPageHeader: React.FC<HeaderProps> = ({toggleDrawer}) => {

    console.log("Sneha: ", toggleDrawer)

    return (

        <>
            <header className='header-sm'>

                <div className="main-sm-header">
                    <div className='header-flex-sm'>
                        <div className="flex-none" >
                            <button className="btn btn-square btn-ghost" onClick={toggleDrawer}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-12 h-12 stroke-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </button>
                        </div>
                        <div className='header-body-sm'>
                            <Link to="/"><img className="company-logo-sm" src={companyLogo} alt="Chemical Today" /></Link>
                        </div>
                    </div>
                    <div className='header-search-sm'>
                        <img className='header-search-icon-sm' src={searchIcon} />
                    </div>
                </div >

            </header >

        </>
    )
}
