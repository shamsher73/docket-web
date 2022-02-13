import MyDayTasksTable from "./components/MyDayTasksTable";
import TaskCreationForm from "./components/TaskCreationForm";

const MyDayTasks = () => {
    return (
        <div className="w-full h-full p-4">
            <TaskCreationForm />
            <MyDayTasksTable />
        </div>
    )
}

export default MyDayTasks;