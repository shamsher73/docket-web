import HeaderText from "./HeaderText";
import Row from "./Row";

interface RowProps {
    task: string,
    category: string,
    tags: string,
    time: string,
    dueDate: string,
    status: string
}

const TaskTable = ({headers,rows,handleModal}:{headers:Array<string>,rows:Array<RowProps>,handleModal:any}) => {
    return (
        <table className="table-auto w-full mt-4">
        <thead className="rounded-[10px] bg-[#F1F1F5] h-8">
            <tr className='table-column-text'>
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