

export interface TableDataType {
    text: string;
    basic: boolean;
    pro: boolean;
    enterprise: boolean;   
}
export interface ISeoTableData {
    seoWebsites: TableDataType[],
    seo: TableDataType[],
    administration: TableDataType[]
}

export interface ISeoPacket {
    [key: string]: {
        text: string,
        price: number
    }
}

export const SeoPackets: ISeoPacket = {
    basic: {
        text: 'Basic',
        price: 999
    },
    pro: {
        text: 'Pro',
        price: 1799
    },
    enterprise: {
        text: 'Enterprise',
        price: 2499 
    }
}

export const SeoTableData: ISeoTableData =  {
    seoWebsites: [
        {
            text: 'Audyt SEO / konkurencji na start',
            basic: true,
            pro: true,
            enterprise: true
        },
        {
            text: 'Optymalizacja strony pod kątem SEO',
            basic: true,
            pro: true,
            enterprise: true
        },
        {
            text: 'Pakiet treści na stronę (ilość w zależności od pakietu)',
            basic: false,
            pro: true,
            enterprise: true
        },
        {
            text: 'Instalacja narzędzi analitycznych Google (GSC i GA)',
            basic: false,
            pro: true,
            enterprise: true
        },
    ],
    seo: [
        {
            text: 'Utworzenie wizytówki Google Maps z optymalizacją',
            basic: true,
            pro: true,
            enterprise: true
        },
        {
            text: 'Linkowanie z ogólnodostępnych miejsc',
            basic: true,
            pro: true,
            enterprise: true
        },
        {
            text: 'Linkowanie z płatnych portali (ilość w zależności od pakietu)',
            basic: true,
            pro: true,
            enterprise: true
        },
        {
            text: 'Linkowanie z forów internetowych (ilość w zależności od pakietu)',
            basic: false,
            pro: true,
            enterprise: true
        },
        {
            text: 'Płatne artykuły sponsorowane z copywritingiem (ilość w zależności od pakietu)',
            basic: false,
            pro: false,
            enterprise: true
        }
    ],
    administration: [
        {
            text: 'Opieka nad wizytówką Google Maps + regularne wpisy',
            basic: false,
            pro: true,
            enterprise: true
        },
        {
            text: 'Opieka nad fanpage Facebook',
            basic: false,
            pro: false,
            enterprise: true
        }
    ]
}