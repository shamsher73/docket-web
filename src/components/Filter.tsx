
const Filter = ({ filterHandler, filter, filterValues }: { filterHandler: any, filter: string, filterValues: Array<string> }) => {
    const className = "dashboard-selector-active"
    const buttons = filterValues.map(value => <button className={filter === value ? `${className} flex-auto p-1 pr-4 pl-4 ml-2 m-1` : "flex-auto p-1 pr-4 pl-4 ml-2 m-1"} onClick={() => filterHandler(value)}>{value.charAt(0).toUpperCase() + value.slice(1)}</button>)
    return (
        <div className="flex-none flex filter-border">
            {buttons}
        </div>
    )
}

export default Filter;