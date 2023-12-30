import "./style.css";

export default function PriceCard(props: { priceCardHeader: string, pricePerMonth: number, priceCardText: string, priceCardOptions: string[] }) {

    return (
        <div className="price-card">
            <h2 className="price-card-header">{props.priceCardHeader}</h2>
            <p className="price-card-price-per-month"><span className="price-per-month">${props.pricePerMonth}</span>/month</p>
            <p className="price-card-text">{props.priceCardText}</p>
            <ul>
                {props.priceCardOptions.map(option => <li key={option} className="price-card-option">{option}</li>)}
            </ul>
            <button className="price-card-button">Sign up</button>
        </div>
    );
}