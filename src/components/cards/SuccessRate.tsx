import Party1 from './../../styles/assets/images/party.png';

const SuccessRate = () => {
    return (
        <div className="flex flex-row flex-auto card m-4">
            <div className='basis-1/2 flex flex-col pt-7 pl-7'>
                <label className='card-text p-1'>Success Rate</label>
                <div className="success-rate p-1">80 %</div>
            </div>
            <div className='basis-1/2 flex justify-end'>
                <img src={Party1} className="p-4 pr-8" alt="dfg asfj asdf "/>
            </div>
        </div>
    )
}

export default SuccessRate;
