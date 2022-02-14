import Party1 from './../../styles/party.png';

const SuccessRate = () => {
    return (
        <div className="flex p-2">
            <div className="flex-auto success-rate mt-2 ml-6">80 %</div>
            <img src={Party1} className="relative top-0 right-0 w-18 h-18" />
        </div>
    )
}

export default SuccessRate;