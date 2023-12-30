import { Cta, Features, FeaturesCard, PricingGrid } from "../../devlink";
import { Hero } from "../../devlink/Hero";
import FindTheRightPrice from "./components/findTheRighPrice/page";
import TrustedByBrands from "./components/trusted-by-brands/page";


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <TrustedByBrands></TrustedByBrands>
      <FindTheRightPrice></FindTheRightPrice>
      <Cta></Cta>
      <PricingGrid></PricingGrid>
      <Features cardSlot={<FeaturesCard></FeaturesCard>}></Features>
    </div>
  )
}
