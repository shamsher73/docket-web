
const Card = ({ children, className, title, ...props }:{children:JSX.Element,className:string,title:string}) => (
    <div className={`${className} card`}>
        {children}
    </div>
);

export default Card;