import './Drawer.css'
import { Link } from 'react-router-dom';

interface HeaderProps {
  headerHeight: number;
}


const Drawer: React.FC<HeaderProps> = ({ headerHeight }) => {

  const headerStyles = {
    height: `calc(100% - ${headerHeight}px)`
  };

  return (
    <div className={`drawer open`} style={headerStyles}>
      <div className="drawer-content">
        <Link to='#'>Arshad</Link>
        <Link to='#'>Arshad</Link>
        <Link to='#'>Arshad</Link>
        <Link to='#'>Arshad</Link>
        <Link to='#'>Arshad</Link>
        <Link to='#'>Arshad</Link>
        <Link to='#'>Arshad</Link>
        <Link to='#'>Arshad</Link>
        <Link to='#'>Arshad</Link>
        <Link to='#'>Arshad</Link>
        <Link to='#'>snehu </Link>
      </div>
      <div className="drawer-overlay"></div>
    </div>
  );
};

export default Drawer;
