import NavItem from "./NavItem";

const NavBarTop = ({mobileMenu}:{mobileMenu:boolean}) => {

   
    const navLinks = [{
            route: "/dashboard",
            text: "Dashboard"
        },
        {
            route: "/my-day-tasks",
            text: "My Day Tasks"
        },
        {
            route: "/tasks",
            text: "Taks"
        },
        {
            route: "/history",
            text: "History"
        }
    ];
    const classText = "flex-none md:inline md:w-64 bg-white h-full";
    return (
        <div className={mobileMenu ? ("inline absolute z-50 " + classText) : ("hidden " + classText)}>
            {navLinks.map((navLink, index) => {
                return (
                    <NavItem key={index} route={navLink.route} text={navLink.text} />
                )
            })
            }
        </div>
    );
}

export default NavBarTop;