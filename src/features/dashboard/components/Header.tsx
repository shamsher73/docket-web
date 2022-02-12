
const Header = () => {
    return (
        <div className="flex">
            <div className="flex-auto overview-text"><span>Overview</span></div>
            <div className="flex-none flex dashboard-selector  place-content-center pl-2 pr-2">
                <div className="dashboard-selector-text bg-white p-2 pl-4 pr-4 ">Today</div>
                <div className="dashboard-selector-text bg-white p-2 pl-4 pr-4">Week</div>
                <div className="dashboard-selector-text bg-white p-2 pl-4 pr-4 ">Month</div>
                <div className="dashboard-selector-text bg-white p-2 pl-4 pr-4 dashboard-selector-active">Year</div>
                <div className="dashboard-selector-text bg-white p-2 pl-4 pr-4">Custom</div>
            </div>
        </div>
    )
}

export default Header;
