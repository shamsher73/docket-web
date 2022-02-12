import { ReactComponent as Party } from './../../../styles/party.svg';
import Party1 from './../../../styles/party.png';

const SuccessRate = () => {
    return (
        <div className="flex-auto bg-white m-2">
            <div className="flex p-4">
                <div className="flex-col flex-auto p-2">
                    <div className="flex-1 card-text mt-2">SUCCESS RATE</div>
                    <div className="flex-1 success-rate mt-2">80 %</div>
                </div>
                <div className="flex-none p-2 mr-6">
                    <img src={Party1} className="w-18 h-18" />
                </div>
            </div>
           
        </div>
    )
}

export default SuccessRate;
