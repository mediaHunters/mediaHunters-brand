import React from "react";

class CookiesBannerComponent extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <div style={{ color: "#000" }}>
              Ta strona korzysta z ciasteczek
            </div>
            <div>
              Używamy plików cookie do personalizowania treści i reklam,
              udostępniania funkcji mediów społecznościowych i analizowania
              naszego ruchu. Udostępniamy również informacje o Twoim korzystaniu
              z naszej witryny naszym partnerom społecznościowym, reklamowym i
              analitycznym, którzy mogą łączyć je z innymi informacjami, które
              im przekazałeś lub które zebrali podczas korzystania z ich usług.
              Wyrażasz zgodę na nasze pliki cookie, jeśli nadal korzystasz z
              naszej witryny.
              <a href="/cookies.html" style={{ display: "inline-block" }}>
                Polityka prywatności
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CookiesBannerComponent;
