import { PricingSection } from './seo.style'
import SeoTableComponent from "./seo-table";
import { SeoTableData } from "./seo-table.data";

const SEOComponent = () => {
  return (
    <PricingSection className="pricing-section">
      <div className="container py-5">
        <div className="row text-center align-items-end">
            <SeoTableComponent data={SeoTableData} type={'basic'}/>
            <SeoTableComponent data={SeoTableData} type={'pro'}/>
            <SeoTableComponent data={SeoTableData} type={'enterprise'}/>
        </div>
      </div>
    </PricingSection>
  );
};

export default SEOComponent;
