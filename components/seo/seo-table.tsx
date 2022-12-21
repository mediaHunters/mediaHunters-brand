import Link from "next/link";
import React from "react";
import { ISeoTableData, SeoPackets, TableDataType } from "./seo-table.data";
import { PricingButton } from "./seo.style";

interface ISeoTableComponent {
  data: ISeoTableData;
  type: "basic" | "pro" | "enterprise";
}

const SeoTableComponent = (props: ISeoTableComponent) => {
  const packet = SeoPackets[props.type];
  return (
    <div className="col-lg-4 mb-5 mb-lg-0">
      <div className="bg-white p-5 rounded-lg shadow">
        <h1 className="h6 text-uppercase font-weight-bold mb-4">
          {packet.text}
        </h1>
        <h2 className="h1 font-weight-bold">{packet.price} PLN</h2>

        <div className="custom-separator my-4 mx-auto bg-primary-bittersweet"></div>

        <ul className="list-unstyled my-5 text-left">
          <li key="Pozycjonowanie stron ( SEO lokalne )" className="h4">
            Pozycjonowanie stron ( SEO lokalne )
          </li>
          {props.data.seoWebsites.map((elem: TableDataType) => {
            if (elem[props.type]) {
              return (
                <li className="mb-3" key={elem.text}>
                  <i className="fa fa-check mr-2 cr-primary-bittersweet"></i>
                  {elem.text}
                </li>
              );
            } else {
              return (
                <li className="mb-3 text-muted" key={elem.text}>
                  <i className="fa fa-times mr-2"></i>
                  <del>{elem.text}</del>
                </li>
              );
            }
          })}
          <div className="mb-5"></div>
          <li key="Pozycjonowanie" className="h4">
            Pozycjonowanie
          </li>
          {props.data.seo.map((elem: TableDataType) => {
            if (elem[props.type]) {
              return (
                <li className="mb-3" key={elem.text}>
                  <i className="fa fa-check mr-2 cr-primary-bittersweet"></i>
                  {elem.text}
                </li>
              );
            } else {
              return (
                <li className="mb-3 text-muted" key={elem.text}>
                  <i className="fa fa-times mr-2"></i>
                  <del>{elem.text}</del>
                </li>
              );
            }
          })}
          <div className="mb-5"></div>
          <li key="Administracja" className="h4">
            Administracja
          </li>
          {props.data.administration.map((elem: TableDataType) => {
            if (elem[props.type]) {
              return (
                <li className="mb-3" key={elem.text}>
                  <i className="fa fa-check mr-2 cr-primary-bittersweet"></i>
                  {elem.text}
                </li>
              );
            } else {
              return (
                <li className="mb-3 text-muted" key={elem.text}>
                  <i className="fa fa-times mr-2"></i>
                  <del>{elem.text}</del>
                </li>
              );
            }
          })}
        </ul>
        <div className="mb-5"></div>
        <PricingButton className="btn btn-block p-2 shadow rounded-pill">
          <Link href="/#contact"><a>Skontaktuj się!</a></Link>
        </PricingButton>
      </div>
    </div>
  );
};

export default SeoTableComponent;
