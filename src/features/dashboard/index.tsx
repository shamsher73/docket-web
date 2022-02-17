import DashboardHeader from "../../components/DashboardHeader";
import OverallPendingTask from "../../components/cards/OverallPendingTask";
import SuccessRate from "../../components/cards/SuccessRate";
import TotalHoursChart from "../../components/cards/TotalHoursChart";
import WorkingHoursChart from "../../components/cards/WorkingHoursChart";

const Dashboard = () => {
    return (
        <div className="w-full p-6 md:flex md:flex-col">
            <div className="basis-1/2">
                <DashboardHeader />
                <div className="md:flex md:flex-row">
                    <div className="basis-1/2">
                        <TotalHoursChart />
                    </div>
                    <div className="flex flex-col basis-1/2">
                        <OverallPendingTask />
                        <SuccessRate />
                    </div>
                </div>
            </div>
            <div className="flex basis-1/2 mb-14">
                <WorkingHoursChart />
            </div>
        </div>
    );
}

export default Dashboard;