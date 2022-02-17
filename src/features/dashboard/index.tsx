import Card from "../../components/Card";
import DashboardHeader from "../../components/DashboardHeader";
import OverallPendingTask from "../../components/cards/OverallPendingTask";
import SuccessRate from "../../components/cards/SuccessRate";
import TotalHoursChart from "../../components/cards/TotalHoursChart";
// import WorkingHoursChart from "../../components/cards/WorkingHoursChart";

const Dashboard = () => {
    return (
        <div className="h-full w-full p-4">
            <DashboardHeader />
            <div className="flex">
                <Card className="flex-auto" title="Total Working Hours"><TotalHoursChart /></Card>
                <div className="flex-auto">
                    <Card className="flex-1" title="Overall Pending Task"><OverallPendingTask /></Card>
                    <Card className="flex-1" title="Success Rate"><SuccessRate /></Card>
                </div>
            </div>
            {/* <div className="flex">
                <Card className="flex-1" title="Working Hours breakdown"><WorkingHoursChart /></Card>
            </div> */}
        </div>
    );
}

export default Dashboard;