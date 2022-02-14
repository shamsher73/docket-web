
import { ReactComponent as ArrowRight } from './../../styles/arrow-right.svg';


interface RowProps {
    task: string,
    category: string,
    tags: string,
    time: string,
    dueDate: string,
    status: string
}

const Row = ({data,handleModal}:{data:RowProps,handleModal:any}) => {

    return (
        <tr className="border-b odd:bg-white even:bg-gray-50 ">
            <td className='p-4'>
                <label className="container">
                    <label className='table-row-text'>{data.task}</label>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </td>
            <td>{data.category}</td>
            <td>{data.tags}</td>
            <td>{data.time}</td>
            <td>{data.dueDate}</td>
            <td className='flex place-content-around pt-6'>
                <span className={`label-${data.status} flex-none snap-center`}>{data.status}</span>
                <ArrowRight onClick={handleModal} />
            </td>
        </tr>
    )
}

export default Row;