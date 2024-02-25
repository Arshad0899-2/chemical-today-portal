import './Drawer.css'
import { Link } from 'react-router-dom';

interface HeaderProps {
  headerHeight: number;
  onOverlayClicked: () => void;
}


const Drawer: React.FC<HeaderProps> = ({ headerHeight, onOverlayClicked }) => {

  const headerStyles = {
    height: `calc(100% - ${headerHeight}px)`
  };

  return (
    <>
      <div className={`drawer open`} style={headerStyles}>
        <div className="drawer-content">
          <button className="btn btn-wide">Wide</button>
          <button className="btn btn-wide">Wide</button>
          <button className="btn btn-wide">Wide</button>
          <button className="btn btn-wide">Wide</button>
          <button className="btn btn-wide">Wide</button>
          <button className="btn btn-wide">Wide</button>
          <button className="btn btn-wide">Wide</button>
          <button className="btn btn-wide">Wide</button>
          <button className="btn btn-wide">Wide</button>
          <button className="btn btn-wide">Wide</button>
          <button className="btn btn-wide">Wide</button>          
        </div>
        <div className="drawer-overlay" onClick={onOverlayClicked}></div>
      </div>
    </>
  );
};

export default Drawer;
