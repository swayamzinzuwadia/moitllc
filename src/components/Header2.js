// Header2.js

import { Link } from 'react-router-dom';
import './Header2.css';
const Header2 = () => {
  return (
    <div className='pager-header'>
    <div className="dcell">
      <div className="container">
        <h1 className="page-title">About Company</h1>
        <ul id="breadcrumbs" className="breadcrumbs">
          <li className="home-link"><Link to="https://moitllc.com">Home</Link></li>
          <li class = 'active'>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Header2;
