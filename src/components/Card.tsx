
const Card = ({ children, className, title, ...props }:{children:JSX.Element,className:string,title:string}) => (
    <div className={`${className} p-4 m-2 card`}>
        <div className="flex justify-between">
            <span className="card-text">{title}</span>
        </div>
        {children}
    </div>
);

export default Card;