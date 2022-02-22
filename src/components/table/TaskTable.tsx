import HeaderText from "./HeaderText";
import Row from "./Row";

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

const TaskTable = ({headers,rows,handleModal}:{headers:Array<string>,rows:Array<RowProps>,handleModal:any}) => {
    return (
        <table className="table-auto w-full mt-4 m-2">
        <thead className="rounded-[10px] bg-[#F1F1F5] h-8">
            <tr className='table-column-text text-left'>
                {headers.map((header, index) => {
                    return (
                        <HeaderText key={index} header={header} />
                    )
                })}
            </tr>
        </thead>
        <tbody className='table-row-text'>
            {rows.map((row, index) => {
                return (
                    <Row key={index} data={row} handleModal={handleModal}/>
                )
            })}
        </tbody>
    </table>
    )
}

export default TaskTable;