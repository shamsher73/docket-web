import Filter from "./Filter";

const Header = ({ filterHandler, filter, filterValues }: { filterHandler: any, filter: string, filterValues: Array<string> }) => {
    return (
        <div className="flex">
            <div className="flex-auto overview-text ml-6"><span>Overview</span></div>
            <Filter filter={filter} filterValues={filterValues} filterHandler={() => { }} />
        </div>
    )
}

export default Header;
