import NavItem from "./NavItem";

const NavBarTop = () => {
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
    return (
        <div className="flex-none sm:w-32 md:w-64 bg-white h-full">
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