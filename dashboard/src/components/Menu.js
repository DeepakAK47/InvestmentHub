import React,{useState} from "react";
import {Link} from "react-router-dom";

const Menu = () => {
  const[selectedMenu,setselectedMenu] = useState(0);
  const[isProfileDropdownOpen,setisProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) =>{
    setselectedMenu(index);
  };
  const handleProfileClick = (index) => {
    setisProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";  
  return (
<>
<div className="menu-container" >
    <div className="menus">
      <img src="logo.png" className="me-0" style={{width:"3%"}}/>
      <ul>

        <li className="topbarAlignment">
          <Link style={{textDecoration:"none"}} to="/"
          onClick={()=> handleMenuClick(0)}>
          <p className={selectedMenu===0 ? activeMenuClass : menuClass}>
          Dashboard
          </p>
          </Link>
        </li>
         <li className="topbarAlignment">
          <Link style={{textDecoration:"none"}} to="/orders"
          onClick={()=> handleMenuClick(1)}>
          <p className={selectedMenu===1 ? activeMenuClass : menuClass}>
            Orders
          </p>
          </Link>
        </li>

        <li className="topbarAlignment">
          <Link style={{textDecoration:"none"}} to="/holdings"
          onClick={()=>handleMenuClick(2)}>
          <p className={selectedMenu===2 ? activeMenuClass : menuClass}>
            Holdings
          </p>
          </Link>
        </li>

         <li className="topbarAlignment">
          <Link style={{textDecoration:"none"}} to="/positions"
          onClick={()=> handleMenuClick(3)}>
          <p className={selectedMenu===3 ? activeMenuClass : menuClass}>
            Positions
          </p>
          </Link>
        </li>

         <li className="topbarAlignment">
          <Link style={{textDecoration:"none"}} to="/funds"
          onClick={()=> handleMenuClick(4)}>
          <p className={selectedMenu===4 ? activeMenuClass : menuClass}>Funds</p>
          </Link>
        </li>

         <li className="topbarAlignment">
          <Link style={{textDecoration:"none"}} to="/apps"
          onClick={()=> handleMenuClick(5)}>
          <p className={selectedMenu===5 ? activeMenuClass : menuClass}>Apps</p>
          </Link>
        </li>
      </ul>


      <div className="profile" onClick={handleProfileClick}>
        <div className="avatar">ZU</div>
        <div className="username">USERID</div>
      </div>
    </div>
</div>
</>
  )
}

export default Menu;