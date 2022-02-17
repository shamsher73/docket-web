import { NavLink } from "react-router-dom";

const NavItem = ({route,text}:{route:string, text:string}): JSX.Element => {
    const classText = "sidemenu-link p-2 sm:pl-4 sm:pr-4 ";
    return (
        <div className='p-2 sm:p-4 sm:pl-6 items-center'>
            <NavLink to={route} className={({ isActive }) => isActive ? (classText + "sidemenu-active") : classText} >{text}</NavLink>
        </div>
    )
}

export default NavItem;