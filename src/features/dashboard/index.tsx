import DashboardHeader from "../../components/DashboardHeader";
import OverallPendingTask from "../../components/cards/OverallPendingTask";
import SuccessRate from "../../components/cards/SuccessRate";
import TotalHoursChart from "../../components/cards/TotalHoursChart";
import WorkingHoursChart from "../../components/cards/WorkingHoursChart";

const Dashboard = () => {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dataset = [{ 'label': 'Category 1', 'data': [4, 2, 1, 3, 4, 3, 2, 1, 3, 4, 1, 2] },
                    { 'label': 'Category 2', 'data': [4, 2, 1, 3, 4, 3, 2, 1, 3, 4, 1, 2] },
                    { 'label': 'More', 'data': [4, 2, 1, 3, 4, 3, 2, 1, 3, 4, 1, 2] }];
    const filterValues = ["today", "week", "month","year","custom"];

    return (
        <div className="w-screen p-6 xl:flex xl:flex-col overflow-auto">
            <div className="basis-1/2">
                <DashboardHeader filterHandler={() => { }} filter="year" filterValues={filterValues}/>
                <div className="xl:flex xl:flex-row">
                    <div className="basis-1/2">
                        <TotalHoursChart categories={[{ 'name': 'Category 1', 'value': 1 }, { 'name': 'Category 2', 'value': 1 }, { 'name': 'Category 3', 'value': 1 }, { 'name': 'More', 'value': 2 }]} />
                    </div>
                    <div className="flex flex-col basis-1/2">
                        <div className="flex xl:hidden">
                            <WorkingHoursChart labels={labels} dataset={dataset} />
                        </div>
                        <OverallPendingTask max={24} value={16} />
                        <SuccessRate rate={80} />
                    </div>
                </div>
            </div>
            <div className="basis-1/2 hidden xl:flex">
                <WorkingHoursChart labels={labels} dataset={dataset} />
            </div>
        </div>
    );
}

export default Dashboard;