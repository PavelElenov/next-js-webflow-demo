import PriceCard, { IPriceCardData } from "../priceCard/page";
import "./style.css";

export default function FindTheRightPrice() {
    return (
        <section className="find-the-right-price">
            <h2 className="find-the-right-price-header">Find the right price for you</h2>
            <p className="find-the-right-price-text">Explore our flexible pricing options designed to meet the diverse needs of both job seekers and employers. Unlock the full potential of the Visual Developers Job Board and invest in your future success with our affordable and value-driven plans.</p>
            <div className="price-cards-wrapper">
                <div className="price-card-wrapper">
                    <PriceCard params={{
                        priceCardHeader: "Employers",
                        pricePerMonth: 95,
                        priceCardText: "Our Employers Plan is tailored to provide maximum visibility and engagement for your job listings, ensuring you reach the most talented and qualified candidates in the development community.",
                        priceCardOptions:
                            [
                                "Priority placement of your job listings, resulting in increased visibility",
                                "Customizable job posts with your company logo and branding",
                                "Access to our curated pool of highly skilled Webflow, no-code, and traditional developers"
                            ]
                    }}
                    ></PriceCard>
                </div>
                <div className="price-card-wrapper">
                    <PriceCard params={{
                        priceCardHeader: "Employers",
                        pricePerMonth: 95,
                        priceCardText: "Our Employers Plan is tailored to provide maximum visibility and engagement for your job listings, ensuring you reach the most talented and qualified candidates in the development community.",
                        priceCardOptions:
                            [
                                "Priority placement of your job listings, resulting in increased visibility",
                                "Customizable job posts with your company logo and branding",
                                "Access to our curated pool of highly skilled Webflow, no-code, and traditional developers"
                            ]
                    }}
                    ></PriceCard>
                </div>
            </div>
        </section >
    );
}
