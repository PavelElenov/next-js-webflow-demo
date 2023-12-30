"use client";

import "./style.css";

export interface IPriceCardData {

    priceCardHeader: string;
    pricePerMonth: number;
    priceCardText: string;
    priceCardOptions: string[]

}

export default function PriceCard({ params, searchParams }: { params: IPriceCardData, searchParams?: string | undefined }) {

    return (
        <div className="price-card">
            <h2 className="price-card-header">{params.priceCardHeader}</h2>
            <p className="price-card-price-per-month"><span className="price-per-month">${params.pricePerMonth}</span>/month</p>
            <p className="price-card-text">{params.priceCardText}</p>
            <ul>
                {params.priceCardOptions?.map(option => <li key={option} className="price-card-option">{option}</li>)}
            </ul>
            <button className="price-card-button">Sign up</button>
        </div>
    );
}