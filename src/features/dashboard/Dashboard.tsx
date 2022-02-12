import Header from "./components/Header";
import OverallPendingTask from "./components/OverallPendingTask";
import SuccessRate from "./components/SuccessRate";
import TotalHoursChart from "./components/TotalHoursChart";
import WorkingHoursChart from "./components/WorkingHoursChart";

const Dashboard = () => {
    return (
        <div className="h-full w-full p-4">
            <Header />
            <div className="flex">
                <TotalHoursChart />
                <div className="flex-auto">
                    <OverallPendingTask />
                    <SuccessRate />
                </div>
            </div>
            <div className="flex">
                <WorkingHoursChart />
           
            </div>
        </div>
    );
}

export default Dashboard;