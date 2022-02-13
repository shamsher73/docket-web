import { ReactComponent as Filter } from './../../../styles/btn-filter.svg';
import { ReactComponent as ArrowRight } from './../../../styles/arrow-right.svg';

const MyDayTasksTable = () => {
    return (
        <div className="w-full h-full p-4 mt-8 card">
            <div className="flex">
                <div className="flex-1 card-text p-1">
                    Tasks
                </div>
                <div className="flex-none flex filter-border">
                    <button className="flex-auto p-1 pr-4 pl-4 dashboard-selector-active">All</button>
                    <button className="flex-auto p-1 pr-4 pl-4">Pending</button>
                    <button className="flex-auto p-1 pr-4 pl-4">Completed</button>
                </div>
                <div className="flex-none p-2 ml-4 filter-border">
                    <Filter className="w-18 h-18" />
                </div>
            </div>
            <table className="table-auto w-full mt-4">
                <thead className="rounded-[10px] bg-[#F1F1F5] h-8">
                    <tr className='table-column-text'>
                        <th>TASK</th>
                        <th>CATEGORY</th>
                        <th>TAGS</th>
                        <th>TIME</th>
                        <th>DUE DATE</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody className='table-row-text'>
                    <tr className="border-b odd:bg-white even:bg-gray-50 ">
                        <td className='p-4'>
                            <label className="container">
                                <label className='table-row-text'>Lorem ipsum is dummy text</label>
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </td>
                        <td>Category 1</td>
                        <td>Tag 1, Tag 2, Tag 3, Tag 4, Tag 5</td>
                        <td>1 hr</td>
                        <td>11 Nov 21</td>
                        <td className='flex place-content-around pt-6'>
                            <span className='flex-none snap-center label-pending'>PENDING</span>
                            <ArrowRight />
                        </td>
                    </tr>
                    <tr className="border-b odd:bg-white even:bg-gray-50 ">
                        <td className='p-4'>
                            <label className="container">
                                <label className='table-row-text'>Lorem ipsum is dummy text</label>
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </td>
                        <td>Category 2</td>
                        <td>Tag 1, Tag 2, Tag 3</td>
                        <td>1 hr</td>
                        <td>11 Nov 21</td>
                        <td className='flex place-content-around pt-6'>
                            <span className='flex-none snap-center label-completed '>COMPLETED</span>
                            <ArrowRight />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MyDayTasksTable;