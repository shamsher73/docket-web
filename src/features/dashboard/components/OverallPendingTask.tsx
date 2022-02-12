
const OverallPendingTask = () => {
    return (
        <div className="flex-auto bg-white m-2">
            <div className="flex p-4">
                <div className="flex-auto card-text">
                    OVERALL PENDING TASK
                </div>
            </div>
            <div className="flex p-8">
                <progress className="flex-auto progress-bar" value="16" max="24"></progress>
            </div>
        </div>
    )
}

export default OverallPendingTask;
