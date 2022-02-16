import { Route, Routes } from "react-router-dom";
import App from "../App";
import Dashboard from "../features/dashboard";
import UserLogin from "../features/login";
import MyDayTasks from "../features/my-day-tasks";


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<UserLogin />} />
            <Route path="/" element={<App />} >
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/my-day-tasks" element={<MyDayTasks />} />
            </Route>
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>Not Found</p>
                    </main>
                }
            />
        </Routes>
    );
};

export default AllRoutes;


