
import { ReactComponent as ArrowRight } from './../../styles/assets/images/arrow-right.svg';

interface SubTask {
    title: string
    startTime: string
    endTime: string
    status: string
}

interface RowProps {
    id:number
    task: string
    description: string
    priority: string
    subTasks: SubTask[]
    category: string
    tags: string[]
    time: number
    due_date: string
    remind_me: string
    repeat: string
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
            <td>
                {data.tags.map((tag, index) => {
                    return (
                        <span key={index} className='table-row-text'>{tag}, </span>
                    )
                })}
            </td>
            <td>{data.time}</td>
            <td>{data.due_date}</td>
            <td className='flex place-content-around pt-6'>
                <span className={`label-${data.status} flex-none snap-center`}>{data.status.toUpperCase()}</span>
                <ArrowRight onClick={() => handleModal(data.id)} />
            </td>
        </tr>
    )
}

export default Row;