import Image from 'next/image';
import "./style.css";

export default function TrustedByBrands() {
    return (
        <section className="trusted-by-brands">
            <h1 className='trusted-by-brands-header'>Trusted by brands around the world</h1>
            <div className="trusted-by-brands-imgs-wrapper">
                <div className="trusted-by-brands-img-wrapper">
                    <Image src="/border.svg" alt="Border" className="image" width={0} height={0}></Image>
                </div>
                <div className="trusted-by-brands-img-wrapper">
                    <Image src="/cactus.svg" alt="Cactus" className="image" width={0} height={0}></Image>
                </div>
                <div className="trusted-by-brands-img-wrapper">
                    <Image src="/iceberg.svg" alt="IceBerg" className="image" width={0} height={0}></Image>
                </div>
                <div className="trusted-by-brands-img-wrapper">
                    <Image src="/terra.svg" alt="Terra" className="image" width={0} height={0}></Image>
                </div>
                <div className="trusted-by-brands-img-wrapper">
                    <Image src="/umbrella.svg" alt="Umbrella" className="image" width={0} height={0}></Image>
                </div>
            </div>
        </section>
    )
}