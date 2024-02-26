import './Drawer.css'
import { Link } from 'react-router-dom';

interface HeaderProps {
  headerHeight: number;
  onOverlayClicked: () => void;
}


const Drawer: React.FC<HeaderProps> = ({ headerHeight, onOverlayClicked }) => {

  const headerStyles = {
    height: `calc(100% - ${headerHeight}px)`,
  };

  return (
    <>
      <div className={`drawer open`} style={headerStyles}>
        <div className="drawer-content">
          <a>Post</a>
          <a>Sector</a>
          <a>Insights</a>        
          <a>Product</a>
          <a>Events</a>
          <a>Equipment</a>
          <a>Sustainability</a>
          <a>Digitalization</a>
        </div>
        <div className="drawer-overlay" onClick={onOverlayClicked}></div>
      </div>
    </>
  );
};

export default Drawer;
