// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "59",

      macros: [
        { function: "__e" },
        { function: "__e" },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_name: "gtm.triggers",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
        },
        {
          function: "__awec",
          vtp_mode: "AUTO",
          vtp_enableElementBlocking: false,
        },
        { function: "__aev", vtp_varType: "TEXT" },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__gas",
          vtp_cookieDomain: "auto",
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_useHashAutoLink: false,
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_enableEcommerce: false,
          vtp_trackingId: "UA-39160558-1",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableGA4Schema: true,
        },
        {
          function: "__u",
          vtp_component: "QUERY",
          vtp_queryKey: "gclid",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "gclid" },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
      ],
      tags: [
        {
          function: "__cvt_9703428_128",
          priority: 1,
          metadata: ["map"],
          once_per_event: true,
          vtp_wait_for_update: "0",
          vtp_regions: "all",
          vtp_sendDataLayer: false,
          vtp_command: "default",
          vtp_functionality_storage: "granted",
          vtp_url_passthrough: false,
          vtp_ad_storage: "denied",
          vtp_ads_data_redaction: false,
          vtp_ad_user_data: "denied",
          vtp_security_storage: "granted",
          vtp_personalization_storage: "denied",
          vtp_analytics_storage: "denied",
          vtp_ad_personalization: "denied",
          tag_id: 129,
        },
        {
          function: "__bzi",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_event: true,
          vtp_id: "1043809",
          tag_id: 3,
        },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 14 },
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "G-JLKV6BC755",
          vtp_configSettingsTable: [
            "list",
            ["map", "parameter", "send_page_view", "parameterValue", "true"],
          ],
          tag_id: 19,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "972850963",
          vtp_conversionLabel: "OJr2CJ2o-8UDEJOO8s8D",
          vtp_rdp: false,
          vtp_url: ["macro", 3],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 22,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: true,
          vtp_cssProvidedEnhancedConversionValue: ["macro", 5],
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "972850963",
          vtp_conversionLabel: "bF31CK7Eit0DEJOO8s8D",
          vtp_rdp: false,
          vtp_url: ["macro", 3],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 25,
        },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 30 },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "972850963",
          vtp_conversionLabel: "oAwvCO61p-MDEJOO8s8D",
          vtp_rdp: false,
          vtp_url: ["macro", 3],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 32,
        },
        {
          function: "__baut",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          vtp_customConfigTable: [
            "list",
            [
              "map",
              "customConfigName",
              "gtmTagSource",
              "customConfigValue",
              "1",
            ],
          ],
          vtp_c_navTimingApi: false,
          vtp_tagId: "187022879",
          vtp_c_storeConvTrackCookies: true,
          vtp_uetqName: "uetq",
          vtp_c_disableAutoPageView: false,
          vtp_c_removeQueryFromUrls: false,
          vtp_eventType: "PAGE_LOAD",
          vtp_c_enableAutoSpaTracking: false,
          tag_id: 121,
        },
        {
          function: "__baut",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_event: true,
          vtp_p_currency: "USD",
          vtp_uetqName: "uetq",
          vtp_customEventAction: "972850963/OJr2CJ2o-8UDEJOO8s8D",
          vtp_customParamTable: [
            "list",
            [
              "map",
              "customParamName",
              "gtm_tag_source",
              "customParamValue",
              "awct",
            ],
          ],
          vtp_eventType: "CUSTOM",
          tag_id: 122,
        },
        {
          function: "__baut",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_event: true,
          vtp_p_currency: "USD",
          vtp_uetqName: "uetq",
          vtp_customEventAction: "972850963/bF31CK7Eit0DEJOO8s8D",
          vtp_customParamTable: [
            "list",
            [
              "map",
              "customParamName",
              "gtm_tag_source",
              "customParamValue",
              "awct",
            ],
          ],
          vtp_eventType: "CUSTOM",
          tag_id: 123,
        },
        {
          function: "__baut",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_event: true,
          vtp_p_currency: "USD",
          vtp_uetqName: "uetq",
          vtp_customEventAction: "972850963/oAwvCO61p-MDEJOO8s8D",
          vtp_customParamTable: [
            "list",
            [
              "map",
              "customParamName",
              "gtm_tag_source",
              "customParamValue",
              "awct",
            ],
          ],
          vtp_eventType: "CUSTOM",
          tag_id: 124,
        },
        {
          function: "__baut",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_event: true,
          vtp_c_navTimingApi: false,
          vtp_tagId: "187022879",
          vtp_c_storeConvTrackCookies: true,
          vtp_uetqName: "uetq",
          vtp_c_disableAutoPageView: false,
          vtp_c_removeQueryFromUrls: false,
          vtp_eventType: "PAGE_LOAD",
          vtp_c_enableAutoSpaTracking: false,
          tag_id: 125,
        },
        {
          function: "__gclidw",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableCrossDomain: false,
          vtp_enableUrlPassthrough: true,
          vtp_enableCookieOverrides: false,
          tag_id: 131,
        },
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "AW-972850963",
          tag_id: 132,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "click_phone_number_txt",
              "parameterValue",
              ["macro", 6],
            ],
          ],
          vtp_eventName: "click_phone_number",
          vtp_measurementIdOverride: "G-JLKV6BC755",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 134,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "click_contact_email_txt",
              "parameterValue",
              ["macro", 6],
            ],
          ],
          vtp_eventName: "click_contact_email_hello",
          vtp_measurementIdOverride: "G-JLKV6BC755",
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 136,
        },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "9703428_127",
          tag_id: 137,
        },
        { function: "__cl", tag_id: 138 },
        { function: "__cl", tag_id: 139 },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage", "analytics_storage"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(){window.ldfdr=window.ldfdr||{};(function(b,c,e,a){function f(g){var d=b.createElement(c);d.src=g;setTimeout(function(){a.parentNode.insertBefore(d,a)},1)}a=b.getElementsByTagName(c)[0];f(e)})(document,"script","https://sc.lfeeder.com/lftracker_v1_kn9Eq4Rr0Pr4RlvP.js")})();\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 18,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Efunction getParam(c){return(c=RegExp("[?\\x26]"+c+"\\x3d([^\\x26]*)").exec(window.location.search))\u0026\u0026decodeURIComponent(c[1].replace(/\\+/g," "))}function getExpiryRecord(c){var d=7776E6;d=(new Date).getTime()+d;return{value:c,expiryDate:d}}\nfunction addUtmAndGclid(){var c=["utm_source","utm_medium","utm_campaign","utm_term"],d=getParam("gclid"),g=["gclid_field"],f,e=getParam("gclsrc");e=!e||-1!==e.indexOf("aw");d\u0026\u0026e\u0026\u0026(d=getExpiryRecord(d),localStorage.setItem("gclid",JSON.stringify(d)));c.forEach(function(a){var b=getParam(a);b\u0026\u0026(b=getExpiryRecord(b),localStorage.setItem(a,JSON.stringify(b)))});g.forEach(function(a){if(document.getElementById(a)){f=document.getElementById(a);var b=(a=JSON.parse(localStorage.getItem("gclid")))\u0026\u0026(new Date).getTime()\u003C\na.expiryDate;f\u0026\u0026b\u0026\u0026(f.value=a.value)}});c.forEach(function(a){var b=document.getElementById(a),h=(a=JSON.parse(localStorage.getItem(a)))\u0026\u0026(new Date).getTime()\u003Ca.expiryDate;b\u0026\u0026h\u0026\u0026(b.value=a.value)})}window.addEventListener("load",addUtmAndGclid);\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 28,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Service",\n  "serviceType": "Presentation Design",\n  "name": "Sales presentations",\n  "description": "Sales presentations that improve your sales. Transform your PowerPoint sales materials, improve the quality of your sales proposals and increase your conversion rates across the company. Transform your sales presentations and improve your conversion rate.",\n  "url": "https://www.slidor.fr/en/presentations-commerciales",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b8c3b96ecc158f4bb5b924_01-p-1600.jpeg",\n    "width": 1268,\n    "height": 713,\n    "caption": "Sales presentations - Slidor"\n  },\n  "provider": {\n    "@type": "Organization",\n    "name": "Slidor",\n  \t    "image": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n      "width": 1536,\n      "height": 695,\n      "caption": "Slidor -  Presentation Design Agency"\n    },\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n      "width": 367,\n      "height": 117,\n      "caption": "Slidor -  Presentation Design Agency"\n  },\n    "telephone": "+33185091738"\n  },\n  "providerMobility": "static",\n  "areaServed": "worldwide",\n  "potentialAction": {\n      "@type": "UseAction",\n      "object": {\n        "@type": "Service",\n        "name": "Sales presentations"\n      },\n      "target": "https://www.slidor.fr/en/presentations-commerciales"\n  },\n  "hasOfferCatalog": {\n        "@type": "OfferCatalog",\n    \t    "name": "Sales presentations",\n    \t    "itemListElement": [{\n      "@type": "Service",\n      \t      "name": "Capture more leads and improve your conversion rate",\n\t\t"description": "We enhance the messages in your sales proposals and sales materials to increase their conversion and impact. From presentations sent by email to those held in meetings, we take care of everything: visual proposals, photo retouching, animations, harmonisation of your media. We create tailor-made presentations to make them impactful and memorable."\n    },{\n      "@type": "Service",\n      "name": "Reinvented business proposals",\n\t"description": "Our requirements go beyond your needs, we draw on best practices and our experience with over 1000 clients to make your information punchy, intelligible and digestible."\n    },{\n      "@type": "Service",\n      "name": "Captivate the audience in a sales meeting, change your brand image",\n\t"description": "We enable your sales force to stand out from the competition by creating dynamic, creative and up-to-date presentations that leave a strong impression on your prospects or customers. We strictly respect your brand image and add a strong dose of creativity to make your sales materials unique."\n    },{\n      "@type": "Service",\n      "name": "A tool that you are already familiar with: PowerPoint\nor Google Slides",\n\t"description": "We produce everything on PowerPoint or Google Slides in their native version. Our presentations are fluid, light, and designed to be fully edited by the sales team."\n    },{\n      "@type": "Service",\n      "name": "Presentations that are easy to maintain and duplicate",\n\t"description": "We make it a point of honour to deliver a sales support that will live over time without having to ask us to update or modify it."\n    }]\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 34,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org",\n  "@type": "Organization",\n  "name": "Slidor",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n    "width": 1536,\n    "height": 695,\n    "caption": "Slidor -  Presentation Design Agency"\n  },\n  "logo": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n    "width": 367,\n    "height": 117,\n    "caption": "Slidor -  Presentation Design Agency"\n  },\n  "founder": [{\n    "@type": "Person",\n    "name": "Jérôme Bestel"\n  },{\n    "@type": "Person",\n    "name": "Jérémy Bestel"\n  }],\n  "foundingDate": "2013",\n  "numberOfEmployees": {\n    "@type": "QuantitativeValue",\n    "value": "30"\n  },\n  "slogan": "Presentation Design Agency",\n  "description": "Slidor is a PowerPoint agency located in the heart of Paris. We come from a consulting and web background and are driven by a results-oriented culture. We combine creativity, technique and design principles to deliver the best PowerPoint presentations on the market. Every day, we renew the codes of presentation design and PowerPoint for more than 1000 clients to offer unequaled renderings. Explore all our presentation design services: Sales presentations, PowerPoint Templates, Pitchdecks and fundraising, Keynotes events, Urgent presentations, Financial reports, PowerPoint Training, Interactive presentations. We are fortunate to have produced presentation materials for all sectors of activity and company sizes, in all graphic universes. 37 companies listed in the CAC40 have placed their trust in us. Contact us and Join the hundreds of companies transforming their presentations!",\n  "url": "https://www.slidor.fr/en/",\n  "telephone": "+33185091738",\n  "email": "hello@slidor.fr",\n  "address": {\n    "@type": "PostalAddress",\n    "streetAddress": "10 rue Chaptal",\n    "addressLocality": "Paris",\n    "postalCode": "75009",\n    "addressCountry": "FR"\n  },\n  "sameAs": [\n    "https://www.instagram.com/slidor_agency/",\n    "https://fr.linkedin.com/company/slidor",\n    "https://dribbble.com/slidor",\n    "https://vimeo.com/slidor"\n  ],\n  "additionalProperty": [\n    {\n      "@type": "PropertyValue",\n      "name": "Legal Information",\n      "url": "https://www.slidor.fr/en/mentions-legales"\n    },\n    {\n     "@type": "PropertyValue",\n      "name": "Cookie Policy",\n      "url": "https://www.slidor.fr/en/politique-de-cookies"\n    }\n  ],\n  "aggregateRating": {\n    \t\t    "@type": "AggregateRating",\n    \t\t    "ratingValue": "5",\n    \t\t    "bestRating": "5",\n    \t\t    "worstRating": "1",\n    \t\t    "reviewCount": "69"\n  },\n  "review": [{\n    "@type": "Review",\n    "author": {\n\t"@type": "Person",\n    \t"name": "Martin Dobelle"\n    },\n    "reviewBody": "Slidor is the best design firm that I\'ve ever worked with. Their treatment of our slide deck surpassed my highest expectations. The design is powerful and compelling, but still understated and tasteful. Julien is a genius. They were also efficient, responsive, and highly professional. We will certainly come back to them.",\n    "reviewRating": {\n\t"@type": "Rating",\n\t"author": "Martin Dobelle",\n\t"bestRating": 5,\n\t"ratingValue": 5,\n\t"worstRating": 1\n    }\n  },{\n    "@type": "Review",\n    "author": {\n\t"@type": "Person",\n    \t"name": "Rachel LI MUI SANG"\n    },\n    "reviewBody": "They transformed a simple classic bullet point presentation (and some quick sketchs) into high quality presentations (like TedTalk or Apple conference) !\nMoreover their positive attitude and the responsiveness to even very last minute requests - makes them my number one PPT agency !:)",\n    "reviewRating": {\n\t"@type": "Rating",\n\t"author": "Rachel LI MUI SANG",\n\t"bestRating": 5,\n\t"ratingValue": 5,\n\t"worstRating": 1\n    }\n  },{\n    "@type": "Review",\n    "author": {\n\t"@type": "Person",\n    \t"name": "Marie-Anne Oswald"\n    },\n    "reviewBody": "Excellent travail de mise en page, rapide, efficace. En moins de 24h, on m\'a remis une présentation ultra pro avec un design soigné et parfaitement aligné avec la charte graphique de mon entreprise. La qualité du service a surpassé mes attentes, je recommande Slidor sans hésitation.",\n    "reviewRating": {\n\t"@type": "Rating",\n\t"author": "Marie-Anne Oswald",\n\t"bestRating": 5,\n\t"ratingValue": 5,\n\t"worstRating": 1\n    }\n  }]\n}\n\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 36,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org",\n  "@type": "Organization",\n  "name": "Slidor",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n    "width": 1536,\n    "height": 695,\n    "caption": "Slidor - Agence PowerPoint"\n  },\n  "logo": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n    "width": 367,\n    "height": 117,\n    "caption": "Slidor - Agence PowerPoint"\n  },\n  "founder": [{\n    "@type": "Person",\n    "name": "Jérôme Bestel"\n  },{\n    "@type": "Person",\n    "name": "Jérémy Bestel"\n  }],\n  "foundingDate": "2013",\n  "numberOfEmployees": {\n    "@type": "QuantitativeValue",\n    "value": "30"\n  },\n  "slogan": "Agence PowerPoint",\n  "description": "Slidor est une agence PowerPoint située au cœur de Paris. Nous venons du monde du consulting et du web et nous sommes animés par la culture du résultat. Nous allions créativité, technique et principes de conception afin de délivrer les meilleures présentations PowerPoint sur le marché. Chaque jour, nous renouvelons les codes du design et de la présentation PowerPoint pour plus de 1000 clients afin d\'offrir des rendus inégalés.Explorez tous nos services de design de présentation: Présentations commerciales, Templates PowerPoint, Pitchdecks et levées de fonds, Rapports financiers, Présentations évènementielles, Présentations en urgence, Présentations interactives, Formation sur PowerPoint. Nous avons la chance d\'avoir réalisé les supports de présentations pour tous les secteurs d’activités et tailles d’entreprises, dans tous les univers graphiques. 37 entreprises listées dans le CAC40 nous ont fait confiance. Rejoignez les centaines d\'entreprises qui transforment leurs présentations!",\n  "url": "https://www.slidor.fr/en/",\n  "telephone": "+33185091738",\n  "email": "hello@slidor.fr",\n  "address": {\n    "@type": "PostalAddress",\n    "streetAddress": "10 rue Chaptal",\n    "addressLocality": "Paris",\n    "postalCode": "75009",\n    "addressCountry": "FR"\n  },\n  "sameAs": [\n    "https://www.instagram.com/slidor_agency/",\n    "https://fr.linkedin.com/company/slidor",\n    "https://dribbble.com/slidor",\n    "https://vimeo.com/slidor"\n  ],\n  "additionalProperty": [\n    {\n      "@type": "PropertyValue",\n      "name": "Mentions légales",\n      "url": "https://www.slidor.fr/mentions-legales"\n    },\n    {\n     "@type": "PropertyValue",\n      "name": "Politique de cookies",\n      "url": "https://www.slidor.fr/politique-de-cookies"\n    }\n  ],\n  "aggregateRating": {\n    \t\t    "@type": "AggregateRating",\n    \t\t    "ratingValue": "5",\n    \t\t    "bestRating": "5",\n    \t\t    "worstRating": "1",\n    \t\t    "reviewCount": "69"\n  },\n  "review": [{\n    "@type": "Review",\n    "author": {\n\t"@type": "Person",\n    \t"name": "Romain Cottard"\n    },\n    "reviewBody": "La meilleure agence de design à Paris pour les présentations. Slidor nous a accompagné sur plusieurs decks de startups pour lever des fonds, le travail est irréprochable.",\n    "reviewRating": {\n\t"@type": "Rating",\n\t"author": "Romain Cottard",\n\t"bestRating": 5,\n\t"ratingValue": 5,\n\t"worstRating": 1\n    }\n  },{\n    "@type": "Review",\n    "author": {\n\t"@type": "Person",\n    \t"name": "Estelle Dupont Aldiolan"\n    },\n    "reviewBody": "Les consultants ont répondu à nos attentes, le travail a été fourni dans les temps.",\n    "reviewRating": {\n\t"@type": "Rating",\n\t"author": "Estelle Dupont Aldiolan",\n\t"bestRating": 5,\n\t"ratingValue": 5,\n\t"worstRating": 1\n    }\n  },{\n    "@type": "Review",\n    "author": {\n\t"@type": "Person",\n    \t"name": "Emmanuelle Martiano"\n    },\n    "reviewBody": "Très contente du travail de slidor, en quelques jours un travail rendu top et une équipe très pro en face de nous. Merci slidor !",\n    "reviewRating": {\n\t"@type": "Rating",\n\t"author": "Emmanuelle Martiano",\n\t"bestRating": 5,\n\t"ratingValue": 5,\n\t"worstRating": 1\n    }\n  }]\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 38,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context" : "https://schema.org",\n  "@type" : "AboutPage",\n  "primaryImageOfPage": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n  "relatedLink": [\n    "https://www.instagram.com/slidor_agency/",\n    "https://fr.linkedin.com/company/slidor",\n    "https://dribbble.com/slidor",\n    "https://vimeo.com/slidor"\n  ],\n  "lastReviewed": "2022-10-12",\n  "reviewedBy": {\n    "@type": "Organization",\n    "name": "Slidor"\n  },\n  "url": "https://www.slidor.fr/en/agence",\n  "isPartOf": {\n    "@type": "Website",\n    "url": "https://www.slidor.fr/en/",\n    "name": "Slidor",\n    "description": "Slidor is a PowerPoint agency located in the heart of Paris. We come from a consulting and web background and are driven by a results-oriented culture. We combine creativity, technique and design principles to deliver the best PowerPoint presentations on the market. Every day, we renew the codes of presentation design and PowerPoint for more than 1000 clients to offer unequaled renderings. Explore all our presentation design services: Sales presentations, PowerPoint Templates, Pitchdecks and fundraising, Keynotes events, Urgent presentations, Financial reports, PowerPoint Training, Interactive presentations. We are fortunate to have produced presentation materials for all sectors of activity and company sizes, in all graphic universes. 37 companies listed in the CAC40 have placed their trust in us. Contact us and Join the hundreds of companies transforming their presentations!"\n  },\n  "mainContentOfPage": {\n    "text": "We are a PowerPoint agency. Slidor is a PowerPoint agency located in the heart of Paris. We come from a consulting and web background and are driven by a results-oriented culture. We combine creativity, technique and design principles to deliver the best PowerPoint presentations on the market. We are transforming the world of presentation. We are hyper-specialists in presentation. We are constantly looking to push the boundaries of PowerPoint to bring it up to the same level as other design softwares to give you the most beautiful renderings on a tool you already know. Pushing the limits of PowerPoint. Our requirements go beyond your needs, we renew the codes of design and presentation everyday in order to offer unequalled results in our sector. A 30-person studio entirely dedicated to PowerPoint design. We are obsessed with talent and continuous learning, we only recruit in-house in order to bring our teams to a high standard. Designers, illustrators and motion designers work together to deliver the most successful presentations on the market. More than 1000 customers. We are fortunate to have produced presentation materials for all sectors of activity and company sizes, in all graphic universes. 37 companies listed in the CAC40 have placed their trust in us. 100% in-house production in France. Our structure is unique. We are the only PowerPoint agency in France that internalises 100% of its production on more than 20 designers on permanent contracts. In order to offer the best rendering while guaranteeing the highest level of confidentiality, we never use freelancers, neither in France nor abroad. We are at your service. We are profitable, we are not financed by any fund or bank, the only person we have to satisfy is you. Sales presentations: Dynamic and impactful sales material. PowerPoint templates: Powerful and visual slide banks. Pitchdecks and fundraising: Decks that help entrepreneurs raise funds. Financial reports: Readable and better understood strategic documents. Event presentations: Spectacular PowerPoint presentations that convey emotion. Urgent presentations: High quality presentations delivered quickly. Interactive presentations: Non-linear and dynamic PowerPoint. PowerPoint training: Learn how to create impactful presentations. Join the hundreds of companies transforming their presentations."\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 40,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context" : "https://schema.org",\n  "@type" : "AboutPage",\n  "primaryImageOfPage": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n  "relatedLink": [\n    "https://www.instagram.com/slidor_agency/",\n    "https://fr.linkedin.com/company/slidor",\n    "https://dribbble.com/slidor",\n    "https://vimeo.com/slidor"\n  ],\n  "lastReviewed": "2022-10-12",\n  "reviewedBy": {\n    "@type": "Organization",\n    "name": "Slidor"\n  },\n  "url": "https://www.slidor.fr/agence",\n  "isPartOf": {\n    "@type": "Website",\n    "url": "https://www.slidor.fr/",\n    "name": "Slidor",\n    "description": "Slidor est une agence PowerPoint située au cœur de Paris. Nous venons du monde du consulting et du web et nous sommes animés par la culture du résultat. Nous allions créativité, technique et principes de conception afin de délivrer les meilleures présentations PowerPoint sur le marché. Chaque jour, nous renouvelons les codes du design et de la présentation PowerPoint pour plus de 1000 clients afin d\'offrir des rendus inégalés.Explorez tous nos services de design de présentation: Présentations commerciales, Templates PowerPoint, Pitchdecks et levées de fonds, Rapports financiers, Présentations évènementielles, Présentations en urgence, Présentations interactives, Formation sur PowerPoint. Nous avons la chance d\'avoir réalisé les supports de présentations pour tous les secteurs d’activités et tailles d’entreprises, dans tous les univers graphiques. 37 entreprises listées dans le CAC40 nous ont fait confiance. Rejoignez les centaines d\'entreprises qui transforment leurs présentations!"\n  },\n  "mainContentOfPage": {\n    "text": "Nous sommes une agence PowerPoint. Slidor est une agence PowerPoint située au cœur de Paris. Nous venons du monde du consulting et du web et nous sommes animés par la culture du résultat. Nous allions créativité, technique et principes de conception afin de délivrer les meilleures présentations PowerPoint sur le marché. Nous transformons le monde de la présentation. Nous sommes des hyper-spécialistes de la présentation. Nous cherchons sans cesse à repousser les limites de PowerPoint afin d\'élever l\'outil au même rang que les autres logiciels de design pour vous proposer les plus beaux rendus du marché sur un outil que vous maîtrisez déjà. Repousser les limites de PowerPoint. Notre exigence va au-delà de votre besoin, nous renouvelons les codes du design et de la présentation jour après jour afin d\'offrir des rendus inégalés sur notre secteur. Un studio de 30 personnes entierement dedié au PowerPoint design. Nous sommes obsédés par le talent et l\'apprentissage permanent, nous recrutons uniquement sur des contrats stables afin d\'emmener nos équipes à un niveau d\'exigence élevé. Designers, illustrateurs, motion-designers travaillent ensemble pour proposer les présentations les plus abouties du marché. Plus de 1000 clients. Nous avons la chance d\'avoir réalisé les supports de présentations pour tous les secteurs d’activités et tailles d’entreprises, dans tous les univers graphiques. 37 entreprises listées dans le CAC40 nous ont fait confiance. Une production 100% internalisée en France. Notre structure est unique. Nous sommes la seule agence PowerPoint à internaliser 100% de sa production sur plus de 20 designers en CDI, en France. Afin d\'offrir le meilleur rendu tout en garantissant le plus haut niveau de confidentialité, nous n\'avons jamais recours aux freelances, ni en France, ni à l\'étranger. Nous sommes. Nous sommes rentables, nous ne sommes financés par aucun fonds ou aucune banque, la seule personne que nous devons satisfaire c\'est vous. Présentations commerciales: Des supports de vente dynamiques et impactants. Templates PowerPoint: Des banques de slides puissantes et visuelles. Pitchdecks et levées de fonds: Des decks qui aident les entrepreneurs à lever des fonds. Rapports financiers: Des documents stratégiques lisibles et mieux compris. Présentations évènementielles: Des PowerPoint spectaculaires véhiculant de l\'émotion. Présentations en urgence: Des présentations de haute qualité livrées rapidement. Présentations interactives: Des PowerPoint non-linéaires et dynamiques. Formation sur PowerPoint: Apprenez à créer des présentations visuelles. Rejoignez les centaines d\'entreprises qui transforment leurs présentations."\n  }\n}\n\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 42,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Service",\n  "serviceType": "PowerPoint",\n  "name": "Présentations commerciales",\n  "description": "Des présentations commerciales\nqui améliorent vos ventes. Transformez vos supports de vente sur PowerPoint, améliorez la qualité de vos propositions commerciales et augmentez vos taux de conversion à l’échelle de l’entreprise. Transformez vos présentations commerciales et améliorez votre taux de conversion.\n",\n  "url": "https://www.slidor.fr/presentations-commerciales",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b8c3b96ecc158f4bb5b924_01-p-1600.jpeg",\n    "width": 1268,\n    "height": 713,\n    "caption": "Présentations commerciales - Slidor"\n  },\n  "provider": {\n    "@type": "Organization",\n    "name": "Slidor",\n  \t    "image": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n      "width": 1536,\n      "height": 695,\n      "caption": "Slidor - Agence PowerPoint"\n    },\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n      "width": 367,\n      "height": 117,\n      "caption": "Slidor - Agence PowerPoint"\n  },\n    "telephone": "+33185091738"\n  },\n  "providerMobility": "static",\n  "areaServed": "worldwide",\n  "potentialAction": {\n      "@type": "UseAction",\n      "object": {\n        "@type": "Service",\n        "name": "Présentations commerciales"\n      },\n      "target": "https://www.slidor.fr/presentations-commerciales"\n  },\n  "hasOfferCatalog": {\n        "@type": "OfferCatalog",\n    \t    "name": "Présentations commerciales",\n    \t    "itemListElement": [{\n      "@type": "Service",\n      \t      "name": "Captez plus de prospects et améliorez votre taux de transformation",\n"description": "Nous sublimons les messages de vos propositions commerciales et supports de vente afin d’augmenter leur conversion et leur impact. Des présentations envoyées par mail à celles soutenues en rendez-vous, nous nous occupons de tout : proposition de visuels, retouche photos, animations, harmonisation de vos supports. Nous créons du sur-mesure pour rendre votre discours impactant et mémorable."\n    },{\n      "@type": "Service",\n      \t      "name": "Des propositions commerciales réinventées",\n"description": "Notre exigence va au-delà de votre besoin, nous nous inspirons des meilleures pratiques et de notre expérience sur plus de 1000 clients pour rendre votre information percutante, intelligible, et digeste."\n    },{\n      "@type": "Service",\n      \t      "name": "Captivez l’audience en rendez-vous commercial, changez votre image de marque",\n"description": "Nous permettons à vos forces commerciales de se différencier de la concurrence en créant sur mesure des présentations dynamiques, créatives et dans l\'air du temps pour laisser une forte impression à vos prospects ou clients. Nous respectons rigoureusement votre image de marque et y ajoutons une forte dose de créativité pour que vos supports de vente soient uniques."\n    },{\n      "@type": "Service",\n      \t      "name": "Un outil que vous maîtrisez déjà parfaitement : PowerPoint ou Google Slides",\n"description": "Nous réalisons tout sur PowerPoint ou Google Slides dans leur version native. Nos présentations sont fluides, légères, et pensées pour être entièrement éditées par les équipes commerciales."\n    },{\n      "@type": "Service",\n      \t      "name": "Des présentations faciles à maintenir et à dupliquer",\n"description": "Nous mettons un point d\'honneur à vous livrer un support de vente qui vivra dans le temps sans avoir à nous solliciter à nouveau pour sa mise à jour ou sa modification."\n    }]\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 44,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context" : "https://schema.org",\n  "@type" : "ContactPage",\n  "primaryImageOfPage": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n  "relatedLink": [\n    "https://www.instagram.com/slidor_agency/",\n    "https://fr.linkedin.com/company/slidor",\n    "https://dribbble.com/slidor",\n    "https://vimeo.com/slidor"\n  ],\n  "reviewedBy": {\n    "@type": "Organization",\n    "name": "Slidor"\n  },\n  "url": "https://www.slidor.fr/en/contact",\n  "isPartOf": {\n    "@type": "Website",\n    "url": "https://www.slidor.fr/en/",\n    "name": "Slidor",\n    "description": "Slidor is a PowerPoint agency located in the heart of Paris. We come from a consulting and web background and are driven by a results-oriented culture. We combine creativity, technique and design principles to deliver the best PowerPoint presentations on the market. Every day, we renew the codes of presentation design and PowerPoint for more than 1000 clients to offer unequaled renderings. Explore all our presentation design services: Sales presentations, PowerPoint Templates, Pitchdecks and fundraising, Keynotes events, Urgent presentations, Financial reports, PowerPoint Training, Interactive presentations. We are fortunate to have produced presentation materials for all sectors of activity and company sizes, in all graphic universes. 37 companies listed in the CAC40 have placed their trust in us. Contact us and Join the hundreds of companies transforming their presentations!"\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 47,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context" : "https://schema.org",\n  "@type" : "ContactPage",\n  "primaryImageOfPage": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n  "relatedLink": [\n    "https://www.instagram.com/slidor_agency/",\n    "https://fr.linkedin.com/company/slidor",\n    "https://dribbble.com/slidor",\n    "https://vimeo.com/slidor"\n  ],\n  "reviewedBy": {\n    "@type": "Organization",\n    "name": "Slidor"\n  },\n  "url": "https://www.slidor.fr/contact",\n  "isPartOf": {\n    "@type": "Website",\n    "url": "https://www.slidor.fr/",\n    "name": "Slidor",\n    "description": "Slidor est une agence PowerPoint située au cœur de Paris. Nous venons du monde du consulting et du web et nous sommes animés par la culture du résultat. Nous allions créativité, technique et principes de conception afin de délivrer les meilleures présentations PowerPoint sur le marché. Chaque jour, nous renouvelons les codes du design et de la présentation PowerPoint pour plus de 1000 clients afin d\'offrir des rendus inégalés.Explorez tous nos services de design de présentation: Présentations commerciales, Templates PowerPoint, Pitchdecks et levées de fonds, Rapports financiers, Présentations évènementielles, Présentations en urgence, Présentations interactives, Formation sur PowerPoint. Nous avons la chance d\'avoir réalisé les supports de présentations pour tous les secteurs d’activités et tailles d’entreprises, dans tous les univers graphiques. 37 entreprises listées dans le CAC40 nous ont fait confiance. Rejoignez les centaines d\'entreprises qui transforment leurs présentations!"\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 49,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context" : "https://schema.org",\n  "@type" : "ContactPoint",\n  "areaServed": "worldwide",\n  "availableLanguage": ["en", "fr"],\n  "contactOption": "tollfree",\n  "contactType": "customer service",\n  "email": "hello@slidor.fr",\n  "hoursAvailable": {\n    "@type": "OpeningHoursSpecification",\n    "dayOfWeek": [\n      "Monday",\n      "Tuesday",\n      "Wednesday",\n      "Thursday",\n      "Friday"\n    ],\n    "opens": "09:30",\n    "closes": "19:00"\n  },\n  "telephone": "+33185091738"\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 50,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org",\n  "@type": "DownloadAction",\n  "object": {\n    "@type": "DigitalDocument",\n    "name": "Selfone PowerPoint Template"\n  },\n  "url": "https://www.slidor.fr/en/selfone",\n  "description": "A beautiful PowerPoint template to showcase your app. Completely free. Also available for Keynote and Google Slides. Created by the Presentation Design Agency Slidor. 30 beautiful slides to present your product. 100% free, less than 4MB. Customize your template on PowerPoint, Keynote or Google Slides."\n}\n\u003C/script\u003E\n\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Selfone - Free PowerPoint template",\n  "image": ["https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d4604a07031be32c78051_Slide10.PNG","https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d4604a134a7440bbfa117_Slide12.PNG", "https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d460458466af0b5888834_Slide13.PNG", "https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d460688ff8485d0abaf12_Slide14.PNG", "https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d4605e5d9c13b62e8c77f_Slide21.PNG", "https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d46058cf4755b09fae14f_Slide23.PNG", "https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d4606e5d9c12095e8c78d_Slide22.PNG", "https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d460888ff84f79dabaf16_Slide18.PNG", "https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d4603b0b0af2dc0fee59b_Slide25.PNG"],\n  "description": "A beautiful PowerPoint template to showcase your app. Completely free. Also available for Keynote and Google Slides. Created by the Presentation Design Agency Slidor. 30 beautiful slides to present your product. 100% free, less than 4MB. No font required: Selfone uses system fonts or a free font already embedded in the presentation. PowerPoint, Keynote, Google Slides: Selfone is available on all these platforms, for Mac and PC. Less than 5MB: No lag, no heavy image, all optimized so it weights less than 4MB images and fonts included. All SVG based: Icons, maps, mockups: all these elements are vectors and ultra-light. Smart color changer: Replace the accent colour in a few clicks over the entire presentation. Smart Placeholders: Replace any image, it automatically adapts to the mockup. Beautiful mockups: Ultra light and vector-based, they allow you to present your application on all smartphones and screens easily. 172 icons: Taken from the Material Design packs to enhance your content and keep it simple. Free, forever: No attribution required, use Selfone anywhere for your business or personal projects. Created by Slidor: We transform PowerPoint presentations for over 1000 clients. Customize your template on PowerPoint, Keynote or Google Slides. Change the color theme in a few clicks according to your visual identity. Download Selfone for PowerPoint, Keynote \u0026 Google Slides.",\n  "brand": {\n    "@type": "Brand", \n    "name": "Slidor"\n  },\n  "category": "PowerPoint Template",\n  "offers": {\n    "@type": "Offer",\n    "url": "https://www.slidor.fr/en/selfone",\n    "priceCurrency": "USD",\n    "price": "0",\n    "availability": "https://schema.org/InStock", \n    "itemCondition": "https://schema.org/NewCondition",\n    "seller": {\n      "@type": "Organization",\n      "name": "Slidor"\n    }\n  },\n  "aggregateRating": {\n    "@type": "AggregateRating",\n    "ratingValue": "4.6",\n    "bestRating": "5",\n    "worstRating": "0",\n    "ratingCount": "32"\n  },\n  "isRelatedTo": [{\n    "@type": "Product", \n    "name": "Glide - Free PowerPoint template",\n    "url": "https://www.slidor.fr/en/glide",\n    "image": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba23153a21f325f70461f0_Glide.jpg",\n    "description": "Our 100% free PowerPoint template for all your needs. The best way to present your company or project, starting with this custom-made PowerPoint template to cover all needs.",\n    "brand": {\n    "@type": "Brand", \n    "name": "Slidor"\n    },\n    "category": "PowerPoint Template"\n  },{\n    "@type": "Product", \n    "name": "PEETCH - Free PowerPoint template",\n    "url": "https://www.slidor.fr/en/peetch",\n    "image": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba23151d50ca6b13051ac7_Peetch.jpg",\n    "description": "The best PowerPoint template for fundraising. The best way to launch a product or present your business to investment funds, starting with this free PowerPoint template.",\n    "brand": {\n    "@type": "Brand", \n    "name": "Slidor"\n    },\n    "category": "PowerPoint Template"\n  }]\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 52,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org",\n  "@type": "DownloadAction",\n  "object": {\n    "@type": "DigitalDocument",\n    "name": "Template PowerPoint Selfone"\n  },\n  "url": "https://www.slidor.fr/selfone",\n  "description": "Le template PowerPoint parfait pour présenter votre application. Gratuit, vraiment gratuit. Aussi disponible pour Keynote et Google Slides. Créé par l\'agence PowerPoint Slidor. Created by the Presentation Design Agency Slidor. 30 slides hyper visuelles pour présenter votre produit. Dans un template hyper léger et 100% gratuit. Personnalisez votre Template sur PowerPoint, Keynote ou Google Slides."\n}\n\u003C/script\u003E\n\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Selfone - Template gratuit pour PowerPoint",\n  "image": ["https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d4604a07031be32c78051_Slide10.PNG","https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d4604a134a7440bbfa117_Slide12.PNG", "https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d460458466af0b5888834_Slide13.PNG", "https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d460688ff8485d0abaf12_Slide14.PNG", "https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d4605e5d9c13b62e8c77f_Slide21.PNG", "https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d46058cf4755b09fae14f_Slide23.PNG", "https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d4606e5d9c12095e8c78d_Slide22.PNG", "https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d460888ff84f79dabaf16_Slide18.PNG", "https://assets-global.website-files.com/5e3d30dbf669a1fe3533ffec/5e3d4603b0b0af2dc0fee59b_Slide25.PNG"],\n  "description": "Le template PowerPoint parfait pour présenter votre application. Gratuit, vraiment gratuit. Aussi disponible pour Keynote et Google Slides. Créé par l\'agence PowerPoint Slidor. 30 slides hyper visuelles pour présenter votre produit. Dans un template hyper léger et 100% gratuit. Aucune police à installer: Selfone utilise des polices système ou des polices gratuites selon le rendu souhaité. PowerPoint, Keynote, Google Slides: Selfone est disponible sur toutes ces plateformes, pour Mac et PC. Moins de 5MB: Aucun lag, aucune image lourde, tout est optimisé pour que Selfone pèse moins de 5 MB images incluses. Tout en SVG: Icônes, cartes, mockups : tous ces éléments sont vectoriels et ultra-légers. Thème de couleurs intelligent: Remplacez la couleur d\'accentuation en quelques clics sur toute la présentation. Placeholders intelligents: Remplacez n\'importe quelle image, elle s\'adapte automatiquement au mockup. Des mockups magnifiques: Ultra léger et vectoriels, ils vous permettent de présenter votre application sur tous les smartphones et écrans facilement. 172 icônes: Tirées des pack Material Design pour sublimer votre contenu et garder de la simplicité/ Gratuit, pour toujours: Aucune attribution requise, utilisez Selfone partout pour vos projets professionnels ou personnels. Créé par Slidor: Nous transformons les présentations PowerPoint pour plus de 1000 clients. Personnalisez votre Template sur PowerPoint, Keynote ou Google Slides. Changez le thème de couleurs en quelques clics en fonction de votre identité visuelle. Téléchargez Selfone pour PowerPoint, Keynote \u0026 Google Slides.",\n  "brand": {\n    "@type": "Brand", \n    "name": "Slidor"\n  },\n  "category": "Template PowerPoint",\n  "offers": {\n    "@type": "Offer",\n    "url": "https://www.slidor.fr/selfone",\n    "priceCurrency": "USD",\n    "price": "0",\n    "availability": "https://schema.org/InStock", \n    "itemCondition": "https://schema.org/NewCondition",\n    "seller": {\n      "@type": "Organization",\n      "name": "Slidor"\n    }\n  },\n  "aggregateRating": {\n    "@type": "AggregateRating",\n    "ratingValue": "4.6",\n    "bestRating": "5",\n    "worstRating": "0",\n    "ratingCount": "32"\n  },\n  "isRelatedTo": [{\n    "@type": "Product", \n    "name": "Glide - Template gratuit pour PowerPoint",\n    "url": "https://www.slidor.fr/glide",\n    "image": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba23153a21f325f70461f0_Glide.jpg",\n    "description": "Notre template PowerPoint 100% gratuit pour tous vos besoins. La meilleure façon de présenter votre entreprise ou votre projet, en partant de ce template PowerPoint créé sur mesure pour couvrir tous les besoins.",\n    "brand": {\n      "@type": "Brand", \n      "name": "Slidor"\n    },\n    "category": "Template PowerPoint"\n  },{\n    "@type": "Product", \n    "name": "PEETCH - Template gratuit pour PowerPoint",\n    "url": "https://www.slidor.fr/peetch",\n    "image": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba23151d50ca6b13051ac7_Peetch.jpg",\n    "description": "Le meilleur template PowerPoint pour lever des fonds. La meilleure façon de lancer un produit ou de présenter votre business à des fonds d\'investissement, en partant de ce template PowerPoint gratuit.",\n    "brand": {\n      "@type": "Brand", \n      "name": "Slidor"\n    },\n    "category": "Template PowerPoint"\n  }]\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 54,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org",\n  "@type": "DownloadAction",\n  "object": {\n    "@type": "DigitalDocument",\n    "name": "Glide PowerPoint Template"\n  },\n  "url": "https://www.slidor.fr/en/glide",\n  "description": "Next Gen free PowerPoint template. All yours. All free. 80 hyper-visual slides to cover all your needs. Free. Beautiful. Light. Everything needed on PPT: Keynotes, fundraising, sales presentations... Customize your PowerPoint template."\n}\n\u003C/script\u003E\n\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Glide - Free PowerPoint template",\n  "image": ["https://assets-global.website-files.com/613f261bb8fac770ce93134d/633c5043425f856f87f673c1_Slide2.png", "https://assets-global.website-files.com/613f261bb8fac770ce93134d/633c5043425f8513baf673d5_Slide4.png", "https://assets-global.website-files.com/613f261bb8fac770ce93134d/633c5043425f852f62f673c6_Slide6.png", "https://assets-global.website-files.com/613f261bb8fac770ce93134d/633c5043425f8533a3f673df_Slide7.png", "https://assets-global.website-files.com/613f261bb8fac770ce93134d/633c5043425f852881f673d0_Slide9.png", "https://assets-global.website-files.com/613f261bb8fac770ce93134d/633c5043425f85c860f673e4_Slide17.png"],\n  "description": "Next Gen free PowerPoint template. All yours. All free. 80 hyper-visual slides to cover all your needs. Free. Beautiful. Light. Everything needed on PPT. Keynotes, fundraising, sales presentations ... Cover slides, Text Slides, Agendas, Portfolios, Summaries, Biographies, Call to Actions, Mockups, Maps of the world, Icons, Slides figures, Graphics, Comparative tables. No fonts to install Glide uses system fonts, so you don\'t have to install anything else. For Mac and PC: Glide is available in two versions and runs on Mac, PC, and Mobile. Less than 5MB: No lag, no heavy images, everything is optimized so that Glide weighs less than 5 MB including images. All SVG based: Icons, maps, mockups: all these elements are vector-based and ultra-light. Smart color theme: Don\'t like this red? Replace it with your accent color in a few clicks. Created by Slidor: We create taylor-made PowerPoint templates since 2013. Customize your PowerPoint template. Change the color theme according to your visual identity. Download Glide!",\n  "brand": {\n    "@type": "Brand", \n    "name": "Slidor"\n  },\n  "category": "PowerPoint Template",\n  "offers": {\n    "@type": "Offer",\n    "url": "https://www.slidor.fr/en/glide",\n    "priceCurrency": "USD",\n    "price": "0",\n    "availability": "https://schema.org/InStock", \n    "itemCondition": "https://schema.org/NewCondition",\n    "seller": {\n      "@type": "Organization",\n      "name": "Slidor"\n    }\n  },\n  "aggregateRating": {\n    "@type": "AggregateRating",\n    "ratingValue": "4.6",\n    "bestRating": "5",\n    "worstRating": "0",\n    "ratingCount": "32"\n  },\n  "isRelatedTo": [{\n    "@type": "Product", \n    "name": "Selfone - Free PowerPoint template",\n    "url": "https://www.slidor.fr/en/selfone",\n    "image": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba23162d02da60cebc5eb5_Selfone.jpg",\n    "description": "Our PowerPoint, Keynote and Google Slides template to present your application. 30 highly visual slides to present your product on all screen sizes, available for PowerPoint PC, Mac, Keynote and Google Slides. 100% free.",\n    "brand": {\n      "@type": "Brand", \n      "name": "Slidor"\n    },\n    "category": "PowerPoint Template"\n  },{\n    "@type": "Product", \n    "name": "PEETCH - Free PowerPoint template",\n    "url": "https://www.slidor.fr/en/peetch",\n    "image": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba23151d50ca6b13051ac7_Peetch.jpg",\n    "description": "The best PowerPoint template for fundraising. The best way to launch a product or present your business to investment funds, starting with this free PowerPoint template.",\n    "brand": {\n      "@type": "Brand", \n      "name": "Slidor"\n    },\n    "category": "PowerPoint Template"\n  }]\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 56,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org",\n  "@type": "DownloadAction",\n  "object": {\n    "@type": "DigitalDocument",\n    "name": "Template PowerPoint Glide"\n  },\n  "url": "https://www.slidor.fr/glide",\n  "description": "Template PowerPoint gratuit, beau et super léger. 100% gratuit, même pour les entreprises. 80 slides hyper visuelles pour tous vos projets. Pitchdecks, présentations commerciales, présentations corporates, keynotes, etc. Pour tous vos besoins sur PPT: Keynotes, levées de fonds, présentations commerciales... Personnalisez votreTemplate PowerPoint."\n}\n\u003C/script\u003E\n\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Glide - Template gratuit pour PowerPoint",\n  "image": ["https://assets-global.website-files.com/613f261bb8fac770ce93134d/633c5043425f856f87f673c1_Slide2.png", "https://assets-global.website-files.com/613f261bb8fac770ce93134d/633c5043425f8513baf673d5_Slide4.png", "https://assets-global.website-files.com/613f261bb8fac770ce93134d/633c5043425f852f62f673c6_Slide6.png", "https://assets-global.website-files.com/613f261bb8fac770ce93134d/633c5043425f8533a3f673df_Slide7.png", "https://assets-global.website-files.com/613f261bb8fac770ce93134d/633c5043425f852881f673d0_Slide9.png", "https://assets-global.website-files.com/613f261bb8fac770ce93134d/633c5043425f85c860f673e4_Slide17.png"],\n  "description": "Template PowerPoint gratuit, beau et super léger. 100% gratuit, même pour les entreprises. 80 slides hyper visuelles pour tous vos projets. Pitchdecks, présentations commerciales, présentations corporates, keynotes, etc. Pour tous vos besoins sur PPT. Keynotes, levées de fonds, présentations commerciales ... Slide de couverture, Slides de texte, Agendas, Portfolios, Sommaires, Biographies, Call to Actions, Mockups, Cartes du monde, Icônes, Slides chiffres, Graphiques, Tableaux comparatifs. Pas de polices à installer: Glide utilise des polices système, vous n\'avez rien d\'autre à installer. Pour Mac et PC: Glide est disponible en deux versions et fonctionne sur Mac, PC, et Mobile. Moins de 5MB: Aucun lag, aucune image lourde, tout est optimisé pour que Glide pèse moins de 5 Mo images incluses. Tout en SVG: Icônes, cartes, mockups : tous ces éléments sont vectoriels et ultra-légers. Thème de couleurs intelligent: Ce rouge ne vous plaît pas ? Remplacez-le par votre couleur d\'accentuation en quelques clics. Créé par Slidor: Nous créons sur mesure des templates PowerPoint depuis 2013. Gratuit, pour: Aucune attribution requise et vous pouvez l\'utiliser partout pour vos projets professionnels comme personnels. 172 Icônes: Icônes Material Design pour sublimer votre contenu et garder de la cohérence. Des Mockups magnifiques: Tous les mockups dont vous avez besoin : Mac, PC, iPhone, Samsung, iPad et Smartwatches. Placeholders intelligents: Remplacez n\'importe quelle image, elle s\'adapte automatiquement. Personnalisez votreTemplate PowerPoint. Changez le thème de couleur en fonction de votre identité visuelle. Téléchargez Glide!",\n  "brand": {\n    "@type": "Brand", \n    "name": "Slidor"\n  },\n  "category": "Template PowerPoint",\n  "offers": {\n    "@type": "Offer",\n    "url": "https://www.slidor.fr/glide",\n    "priceCurrency": "USD",\n    "price": "0",\n    "availability": "https://schema.org/InStock", \n    "itemCondition": "https://schema.org/NewCondition",\n    "seller": {\n      "@type": "Organization",\n      "name": "Slidor"\n    }\n  },\n  "aggregateRating": {\n    "@type": "AggregateRating",\n    "ratingValue": "4.6",\n    "bestRating": "5",\n    "worstRating": "0",\n    "ratingCount": "32"\n  },\n  "isRelatedTo": [{\n    "@type": "Product", \n    "name": "Selfone - Template gratuit pour PowerPoint",\n    "url": "https://www.slidor.fr/selfone",\n    "image": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba23162d02da60cebc5eb5_Selfone.jpg",\n    "description": "Notre template PowerPoint, Keynote et Google Slides pour présenter votre application. 30 slides hyper visuelles pour présenter votre produit sur toutes les tailles d\'écran, disponible pour PowerPoint PC, Mac, Keynote et Google Slides. 100% gratuit.",\n    "brand": {\n      "@type": "Brand", \n      "name": "Slidor"\n    },\n    "category": "Template PowerPoint"\n  },{\n    "@type": "Product", \n    "name": "PEETCH - Template gratuit pour PowerPoint",\n    "url": "https://www.slidor.fr/peetch",\n    "image": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba23151d50ca6b13051ac7_Peetch.jpg",\n    "description": "Le meilleur template PowerPoint pour lever des fonds. La meilleure façon de lancer un produit ou de présenter votre business à des fonds d\'investissement, en partant de ce template PowerPoint gratuit.",\n    "brand": {\n      "@type": "Brand", \n      "name": "Slidor"\n    },\n    "category": "Template PowerPoint"\n  }\n]\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 58,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org",\n  "@type": "DownloadAction",\n  "object": {\n    "@type": "DigitalDocument",\n    "name": "PEETCH PowerPoint Template"\n  },\n  "url": "https://www.slidor.fr/en/peetch",\n  "description": "THE LAST POWERPOINT PITCHDECK YOU\'LL EVER NEED TO RAISE MONEY. 42 SLIDES OF AWESOMENESS TO CATCH VC ATTENTION. Because your content deserves more than bullet points. ONE GOOD STRUCTURE THAT MAKES SENSE. Your investor will ask you to stop reading his mind. THOSE FEATURES MAKE YOUR ENTREPRENEUR LIFE EASIER. CHARTS JOIN THE PARTY. Those cool lines will convince them. NEED TO CHANGE THE ACCENT COLOR ON EVERY SLIDE? Pure magic. Join the hundreds of companies transforming their presentations."\n}\n\u003C/script\u003E\n\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "PEETCH - Free PowerPoint template",\n  "image": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba23151d50ca6b13051ac7_Peetch.jpg",\n  "description": "THE LAST POWERPOINT PITCHDECK YOU\'LL EVER NEED TO RAISE MONEY. 42 SLIDES OF AWESOMENESS TO CATCH VC ATTENTION. Because your content deserves more than bullet points. ONE GOOD STRUCTURE THAT MAKES SENSE. Your investor will ask you to stop reading his mind. THOSE FEATURES MAKE YOUR ENTREPRENEUR LIFE EASIER. CHARTS JOIN THE PARTY. Those cool lines will convince them. NEED TO CHANGE THE ACCENT COLOR ON EVERY SLIDE? Pure magic. Join the hundreds of companies transforming their presentations.",\n  "brand": {\n    "@type": "Brand", \n    "name": "Slidor"\n  },\n  "category": "PowerPoint Template",\n  "offers": {\n    "@type": "Offer",\n    "url": "https://www.slidor.fr/en/peetch",\n    "priceCurrency": "USD",\n    "price": "0",\n    "availability": "https://schema.org/InStock", \n    "itemCondition": "https://schema.org/NewCondition",\n    "seller": {\n      "@type": "Organization",\n      "name": "Slidor"\n    }\n  },\n  "aggregateRating": {\n    "@type": "AggregateRating",\n    "ratingValue": "4.6",\n    "bestRating": "5",\n    "worstRating": "0",\n    "ratingCount": "32"\n  },\n  "isRelatedTo": [{\n    "@type": "Product", \n    "name": "Glide - Free PowerPoint template",\n    "url": "https://www.slidor.fr/en/glide",\n    "image": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba23153a21f325f70461f0_Glide.jpg",\n    "description": "Our 100% free PowerPoint template for all your needs. The best way to present your company or project, starting with this custom-made PowerPoint template to cover all needs.",\n    "brand": {\n    "@type": "Brand", \n    "name": "Slidor"\n    },\n    "category": "PowerPoint Template"\n  },{\n    "@type": "Product", \n    "name": "Selfone - Free PowerPoint template",\n    "url": "https://www.slidor.fr/en/selfone",\n    "image": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba23162d02da60cebc5eb5_Selfone.jpg",\n    "description": "Our PowerPoint, Keynote and Google Slides template to present your application. 30 highly visual slides to present your product on all screen sizes, available for PowerPoint PC, Mac, Keynote and Google Slides. 100% free.",\n    "brand": {\n      "@type": "Brand", \n      "name": "Slidor"\n    },\n    "category": "PowerPoint Template"\n}]}\n\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 60,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org",\n  "@type": "DownloadAction",\n  "object": {\n    "@type": "DigitalDocument",\n    "name": "Template PowerPoint PEETCH"\n  },\n  "url": "https://www.slidor.fr/peetch",\n  "description": "LE SEUL PITCHDECK POWERPOINT DONT VOUS AUREZ BESOIN POUR LEVER DES FONDS. 42 SLIDES POWERPOINT POUR CAPTIVER VOS INVESTISSEURS. Parce que votre contenu mérite mieux que des bullet points. LA STRUCTURE ATTENDUE PAR LES VC. Votre investisseur vous demandera d\'arrêter de lire dans ses pensées. UN POWERPOINT QUI VOUS FAIT PASSER UN LUNDI MATIN AGREABLE. Enfin un template que vous allez aimer. DES GRAPHIQUES CONVAINCANTS. Ces superbes courbes vont enfin les convaincre. BESOIN DE CHANGER LA COULEUR D\'ACCENTUATION SUR TOUTES LES SLIDES ? Simple comme bonjour. Rejoignez les centaines d\'entreprises qui transforment leurs présentations."\n}\n\u003C/script\u003E\n\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "PEETCH - Template gratuit pour PowerPoint",\n  "image": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba23151d50ca6b13051ac7_Peetch.jpg",\n  "description": "LE SEUL PITCHDECK POWERPOINT DONT VOUS AUREZ BESOIN POUR LEVER DES FONDS. 42 SLIDES POWERPOINT POUR CAPTIVER VOS INVESTISSEURS. Parce que votre contenu mérite mieux que des bullet points. LA STRUCTURE ATTENDUE PAR LES VC. Votre investisseur vous demandera d\'arrêter de lire dans ses pensées. UN POWERPOINT QUI VOUS FAIT PASSER UN LUNDI MATIN AGREABLE. Enfin un template que vous allez aimer. DES GRAPHIQUES CONVAINCANTS. Ces superbes courbes vont enfin les convaincre. BESOIN DE CHANGER LA COULEUR D\'ACCENTUATION SUR TOUTES LES SLIDES ? Simple comme bonjour. Rejoignez les centaines d\'entreprises qui transforment leurs présentations.",\n  "brand": {\n    "@type": "Brand", \n    "name": "Slidor"\n  },\n  "category": "Template PowerPoint",\n  "offers": {\n    "@type": "Offer",\n    "url": "https://www.slidor.fr/peetch",\n    "priceCurrency": "USD",\n    "price": "0",\n    "availability": "https://schema.org/InStock", \n    "itemCondition": "https://schema.org/NewCondition",\n    "seller": {\n      "@type": "Organization",\n      "name": "Slidor"\n    }\n  },\n  "aggregateRating": {\n    "@type": "AggregateRating",\n    "ratingValue": "4.6",\n    "bestRating": "5",\n    "worstRating": "0",\n    "ratingCount": "32"\n  },\n  "isRelatedTo": [{\n    "@type": "Product", \n    "name": "Selfone - Template gratuit pour PowerPoint",\n    "url": "https://www.slidor.fr/selfone",\n    "image": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba23162d02da60cebc5eb5_Selfone.jpg",\n    "description": "Notre template PowerPoint, Keynote et Google Slides pour présenter votre application. 30 slides hyper visuelles pour présenter votre produit sur toutes les tailles d\'écran, disponible pour PowerPoint PC, Mac, Keynote et Google Slides. 100% gratuit.",\n    "brand": {\n      "@type": "Brand", \n      "name": "Slidor"\n    },\n    "category": "Template PowerPoint"\n  },{\n    "@type": "Product", \n    "name": "Glide - Template gratuit pour PowerPoint",\n    "url": "https://www.slidor.fr/glide",\n    "image": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba23153a21f325f70461f0_Glide.jpg",\n    "description": "Notre template PowerPoint 100% gratuit pour tous vos besoins. La meilleure façon de présenter votre entreprise ou votre projet, en partant de ce template PowerPoint créé sur mesure pour couvrir tous les besoins.",\n    "brand": {\n      "@type": "Brand", \n      "name": "Slidor"\n    },\n    "category": "Template PowerPoint"\n  }\n]\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 62,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org",\n  "@type": "DownloadAction",\n  "object": {\n    "@type": "DigitalDocument",\n    "name": "Toolbar PowerPoint"\n  },\n  "url": "https://www.slidor.fr/en/toolbar-powerpoint",\n  "description": "Slidor Quick Toolbar for PowerPoint. 80% of the most used features are located in the banner and force you to repeat unnecessary clicks. To increase productivity, we provide a quick access bar to save time on each of your actions. Download the Toolbar to your desktop."\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 64,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org",\n  "@type": "DownloadAction",\n  "object": {\n    "@type": "DigitalDocument",\n    "name": "Toolbar PowerPoint"\n  },\n  "url": "https://www.slidor.fr/toolbar-powerpoint",\n  "description": "Barre d\'outil rapide Slidor pour PowerPoint. 80 % des fonctionnalités les plus utilisées sont situées dans le bandeau et vous obligent à répéter des clics inutiles. Pour gagner en productivité, nous mettons à disposition une barre d\'accès rapide pour gagner du temps sur chacune de vos actions. Téléchargez la Toolbar sur votre bureau."\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 66,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Service",\n  "serviceType": "Presentation Design",\n  "name": "PowerPoint templates",\n  "description": "Visual, intelligent and customisable PowerPoint templates. Offer your employees a powerful tool on PowerPoint, allowing them to save precious time and raise the level of their presentations while respecting your company\'s graphic charter. PowerPoint templates used by thousands of users worldwide. Our communication materials are the result of our long experience and inexhaustible creativity: we improve them day after day in order to offer the most creative and functional templates on the market, for all sectors. These companies use our PowerPoint and Google Slides templates on a daily basis. Change to a new template and raise your level of presentation!",\n  "url": "https://www.slidor.fr/en/templates-powerpoint",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61d429d1fc2e37c2b7536b53_klaxit.jpg",\n    "width": 1268,\n    "height": 713,\n    "caption": "PowerPoint templates - Slidor"\n  },\n  "provider": {\n    "@type": "Organization",\n    "name": "Slidor",\n  \t    "image": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n      "width": 1536,\n      "height": 695,\n      "caption": "Slidor -  Presentation Design Agency"\n    },\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n      "width": 367,\n      "height": 117,\n      "caption": "Slidor -  Presentation Design Agency"\n  },\n    "telephone": "+33185091738"\n  },\n  "providerMobility": "static",\n  "areaServed": "worldwide",\n  "potentialAction": {\n      "@type": "UseAction",\n      "object": {\n        "@type": "Service",\n        "name": "PowerPoint templates"\n      },\n      "target": "https://www.slidor.fr/en/templates-powerpoint"\n  },\n  "hasOfferCatalog": {\n        "@type": "OfferCatalog",\n    \t    "name": "PowerPoint templates",\n    \t    "itemListElement": [{\n      "@type": "Service",\n      \t      "name": "Raise the level of your internal presentations",\n"description": "Our PowerPoint Templates are tailor-made to suit the specific needs of each company. We co-define a large bank of slides that can accommodate your most frequent content. We add invariant slides that form the core of your presentations so that they can be reused by as many people as possible. Quickly deploy a new communication tool to all your employees and improve the impact of your presentations overnight, for your entire company."\n    },{\n      "@type": "Service",\n      \t      "name": "More visual PowerPoint templates that respect your visual guidelines",\n"description": "Your graphic charter and your constraints are our playground: we rigorously respect your communication territory so that your employees convey messages in your image."\n    },{\n      "@type": "Service",\n      \t      "name": "Save your employees valuable time with these features",\n"description": "In addition to the creative direction, we design our PowerPoint Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy. We adapt to all levels of tool mastery and optimise our files to keep communication media light, flexible and easily maintained over time. Bank of slides: Our templates range from 10 to 300 slides to cover all your company\'s content needs. Formatting of frequent slides: We recreate the most commonly used slides in your company to provide ready-to-use layouts. User guide: We include a user guide for the Template to facilitate its adoption. Ultra-light File: No lag, no heavy images, everything is optimised so that your template can be read easily anywhere and sent by email. Bank of pictograms: We include a bank of pictograms, customised or in your company colours. Photo Bank: We retouch, optimise and integrate all your company\'s photos to give your employees a choice. No font to install: Our Templates use system fonts or your fonts, or both, depending on the desired look. Dark theme: Follow the trend and offer a dark background version of your slides to stand out. Colour theme intelligent: Replace the accent colour with a few clicks across the entire presentation to create multiple themes. Placeholders intelligent: We plan all possible image areas so that they fit perfectly on the slides (resume photos, phone mockups, etc.) Training of employees: We train the company in the use of the Template and format sample slides in front of you, running an information design course. Maintenance of the Template: We remain at your disposal to make your Template evolve in time and to add missing slides."\n    },{\n      "@type": "Service",\n      \t      "name": "On PowerPoint, Google Slides, Keynote or all three",\n"description": "Our Templates are created on the same software as yours, with no plugins and nothing to install. Deployment is instantaneous and easy, requiring no technical knowledge or subscription."\n    },{\n      "@type": "Service",\n      \t      "name": "In all graphic styles, for all needs",\n"description": "Corporate, gaming, luxury, events: our creative expression is revealed in all sectors of activity."\n    }]\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 68,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Service",\n  "serviceType": "PowerPoint",\n  "name": "Templates PowerPoint",\n  "description": "Des Templates PowerPoint visuels, intelligents, et personnalisables. Proposez à vos collaborateurs un outil puissant sur PowerPoint, leur permettant de gagner un temps précieux et d\'élever le niveau de leurs présentations tout en respectant la charte graphique de votre entreprise. Des Templates PowerPoint utilisés par des milliers d\'utilisateurs dans le monde. Nos supports de communication sont le fruit de notre longue expérience et de notre inépuisable créativité : nous les améliorons jours après jours afin de proposer les Templates les plus créatifs et fonctionnels du marché, pour tous les secteurs. Ces entreprises utilisent nos Templates PowerPoint et Google Slides quotidiennement. Changez pour un nouveau template et élevez votre niveau de présentations!",\n  "url": "https://www.slidor.fr/templates-powerpoint",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61d429d1fc2e37c2b7536b53_klaxit.jpg",\n    "width": 1268,\n    "height": 713,\n    "caption": "Templates PowerPoint - Slidor"\n  },\n  "provider": {\n    "@type": "Organization",\n    "name": "Slidor",\n  \t    "image": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n      "width": 1536,\n      "height": 695,\n      "caption": "Slidor - Agence PowerPoint"\n    },\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n      "width": 367,\n      "height": 117,\n      "caption": "Slidor - Agence PowerPoint"\n  },\n    "telephone": "+33185091738"\n  },\n  "providerMobility": "static",\n  "areaServed": "worldwide",\n  "potentialAction": {\n      "@type": "UseAction",\n      "object": {\n        "@type": "Service",\n        "name": "Templates PowerPoint"\n      },\n      "target": "https://www.slidor.fr/templates-powerpoint"\n  },\n  "hasOfferCatalog": {\n        "@type": "OfferCatalog",\n    \t    "name": "Templates PowerPoint",\n    \t    "itemListElement": [{\n      "@type": "Service",\n      \t      "name": "Elevez le niveau de vos présentations en interne",\n"description": "Nos Templates PowerPoint sont créés sur mesure et en accord avec les besoins spécifiques de chaque entreprise. Nous co-définissons une large banque de slides susceptible d\'accueillir vos contenus les plus fréquents. Nous y ajoutons des slides invariantes qui constituent le cœur de vos présentations afin qu\'elles soient réutilisées par le plus grand nombre. Déployez rapidement un nouvel outil de communication à tous vos collaborateurs et améliorez l\'impact de vos présentations du jour au lendemain, pour toute votre entreprise."\n    },{\n      "@type": "Service",\n      \t      "name": "Des Templates PowerPoint plus visuels qui respectent votre charte graphique",\n"description": "Votre charte graphique et vos contraintes sont notre terrain de jeu : nous respectons rigoureusement votre territoire de communication afin que vos collaborateurs véhiculent des messages à votre image."\n    },{\n      "@type": "Service",\n      \t      "name": "Faites gagner un temps précieux à vos collaborateurs avec ces fonctionnalités",\n"description": "En plus de la direction créative, nous pensons nos Templates PowerPoint afin qu\'ils soient rapidement déployés et adoptés par tous. Nous y ajoutons de nombreuses fonctionnalités pour rendre l\'expérience et la transition facile. Nous nous adaptons à tous les niveaux de maîtrise de l\'outil et nous optimisons nos fichiers afin de garder des supports de communication légers, flexibles et qui se maintiennent facilement dans le temps. Banque de slides: Nos Templates vont de 10 à 300 slides afin de couvrir tous les besoins de contenu de votre entreprise. Mise en forme des slides fréquentes: Nous recréons les slides les plus utilisées par votre entreprise pour offrir des dispositions prêtes à l\'emploi. Guide d\'utilisation: Nous incluons un guide d’utilisation du Template à destination des utilisateurs pour faciliter son adoption. Fichier Ultra-léger: Aucun lag, aucune image lourde, tout est optimisé pour que votre Template puisse se lire facilement partout et s\'envoyer par email. Banque de pictogrammes: Nous incluons une banque de pictogrammes, sur mesure ou aux couleurs de votre entreprise. Banque de photos: Nous retouchons, optimisons et intégrons toutes les photos de votre entreprise afin de laisser du choix à vos collaborateurs. Aucune police à installer: Nos Templates utilisent des polices système ou vos polices, ou les deux, selon le rendu souhaité. Thème sombre: Suivez la tendance et proposez une version à fond foncé de vos slides pour vous démarquer. Thème de couleurs intelligent: Remplacez la couleur d\'accentuation en quelques clics sur toute la présentation pour la décliner en plusieurs thèmes. Placeholders intelligents: Nous prévoyons toutes les zones d\'image possibles pour qu\'elles s\'adaptent parfaitement sur les slides (photos de cv, mockups téléphone…). Formation des collaborateurs: Nous formons l\'entreprise à l\'utilisation du Template et mettons en forme des slides types devant vous, en déroulant un cours de design de l\'information. Maintenance du Template: Nous restons à disposition pour faire évoluer votre Template dans le temps et y ajouter des slides manquantes."\n    },{\n      "@type": "Service",\n      \t      "name": "Sur PowerPoint, Google Slides, Keynote ou les trois à la fois",\n"description": "Nos Templates sont créés sur le même logiciel que le vôtre, sans plugin et sans rien à installer. Le déploiement se fait instantanément et facilement, ne nécessite aucune connaissance technique ni aucun abonnement."\n    },{\n      "@type": "Service",\n      \t      "name": "Dans tous les styles graphiques, pour tous les besoins",\n"description": "Corporate, gaming, luxe, événementiel : notre expression créative se révèle dans tous les secteurs d’activités."\n    }]\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 70,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Service",\n  "serviceType": "Presentation Design",\n  "name": "Event presentations",\n  "description": "Inspiring, spectacular and memorable PowerPoint presentations. At the heart of our business as a creative agency, event presentations - or keynotes - are our artistic and technical showcase. We offer our clients unique renderings that enable them to convey strong messages and emotion at each of their events, both internally and externally. Events of all sizes for hundreds of happy customers. From the Paris 2024 Olympic bid to Coca-Cola conventions, we are the only PowerPoint agency in France with the production capacity to deliver large-scale, spectacular PowerPoint presentations on tight deadlines. Offer a unique presentation experience to your audience!",\n  "url": "https://www.slidor.fr/en/presentations-evenementielles",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b8eb4ca920b702ca2c7e18_01-p-1600.jpeg",\n    "width": 1268,\n    "height": 713,\n    "caption": "Event presentations - Slidor"\n  },\n  "provider": {\n    "@type": "Organization",\n    "name": "Slidor",\n  \t    "image": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n      "width": 1536,\n      "height": 695,\n      "caption": "Slidor -  Presentation Design Agency"\n    },\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n      "width": 367,\n      "height": 117,\n      "caption": "Slidor -  Presentation Design Agency"\n  },\n    "telephone": "+33185091738"\n  },\n  "providerMobility": "static",\n  "areaServed": "worldwide",\n  "potentialAction": {\n      "@type": "UseAction",\n      "object": {\n        "@type": "Service",\n        "name": "Event presentations"\n      },\n      "target": "https://www.slidor.fr/en/presentations-evenementielles"\n  },\n  "hasOfferCatalog": {\n        "@type": "OfferCatalog",\n    \t    "name": "Event presentations",\n    \t    "itemListElement": [{\n      "@type": "Service",\n      \t      "name": "Delivering a level of presentation your audience has never seen before. Convince and convey emotion.",\n"description": "Highly strategic, event presentations are a time when creativity, organisation and rigour are crucial to the success of the experience. In this exercise, we accompany you through all the stages: from the compilation of the content to the artistic direction and then to the diffusion on D-day."\n    },{\n      "@type": "Service",\n      \t      "name": "Stunning artistic directions",\n"description": "We deliver artistic quality beyond your expectations to your audience. We exploit the technical features of events and use the endless creativity of our 25-strong design studio to deliver unique presentations, all the time."\n    },{\n      "@type": "Service",\n      \t      "name": "Exemplary project management to control the entire production process",\n"description": "We have experience with events and our production processes are standardised so that there is no room for error. Do you have several contacts, several versions of files, daily unforeseen events or last-minute changes? We are used to these problems and offer you the tools and optimal operating methods to manage them."\n    },{\n      "@type": "Service",\n      \t      "name": "Rigorous production monitoring",\n"description": "We monitor production, file versions, designer time and content updates with powerful tools that allow us to always know where we stand. We provide you with regular progress updates to give you a clear picture of the work done and remaining."\n    },{\n      "@type": "Service",\n      \t      "name": "A presence on your premises or ours to make the best progress",\n"description": "Need to get live feedback? Have a face-to-face chat with one or more designers? Rehearse before the event and edit the presentation as it is being broadcast? We can dispatch one or more designers who know how to work together and who have experience in event production, at any time during the project. We are also able to host your team in our offices."\n    },{\n      "@type": "Service",\n      \t      "name": "Experience of broadcasting and the vagaries of D-Day",\n"description": "We have delivered events of all sizes, in all sectors and for all types of organisations. We communicate regularly with event management companies and provide powerful equipment to ensure that your event runs smoothly on the D-day."\n    }]\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 72,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Service",\n  "serviceType": "PowerPoint",\n  "name": "Présentations évènementielles",\n  "description": "Des présentations PowerPoint inspirantes, spectaculaires et mémorables. Au cœur de notre métier d\'agence créative, les présentations évènementielles - ou keynotes - sont notre vitrine artistique et technique. Nous offrons à nos clients des rendus uniques qui leur permettent de de véhiculer des messages forts et de l\'émotion sur chacun de leurs évènements, en interne comme en externe. Des évènements de toute taille pour des centaines de clients heureux. De la candidature de Paris aux J.O 2024 aux conventions de Coca-Cola, nous sommes la seule agence PowerPoint en France à avoir la capacité de production nécessaire pour délivrer des présentations PowerPoint de grande envergure aux rendus spéctaculaires sur des délais serrés. Offrez une expérience de présentation unique à votre audience!",\n  "url": "https://www.slidor.fr/presentations-evenementielles",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b8eb4ca920b702ca2c7e18_01-p-1600.jpeg",\n    "width": 1268,\n    "height": 713,\n    "caption": "Présentations évènementielles - Slidor"\n  },\n  "provider": {\n    "@type": "Organization",\n    "name": "Slidor",\n  \t    "image": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n      "width": 1536,\n      "height": 695,\n      "caption": "Slidor - Agence PowerPoint"\n    },\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n      "width": 367,\n      "height": 117,\n      "caption": "Slidor - Agence PowerPoint"\n  },\n    "telephone": "+33185091738"\n  },\n  "providerMobility": "static",\n  "areaServed": "worldwide",\n  "potentialAction": {\n      "@type": "UseAction",\n      "object": {\n        "@type": "Service",\n        "name": "Présentations évènementielles"\n      },\n      "target": "https://www.slidor.fr/presentations-evenementielles"\n  },\n  "hasOfferCatalog": {\n        "@type": "OfferCatalog",\n    \t    "name": "Présentations évènementielles",\n    \t    "itemListElement": [{\n      "@type": "Service",\n      \t      "name": "Délivrer à votre audience un niveau de présentation qu\'elle n\'a jamais vu. Convaincre et transmettre de l\'émotion.",\n"description": "Hautement stratégiques, les présentations évènementielles sont un moment où la créativité, l\'organisation et la rigueur sont déterminants dans la réussite de l\'expérience. Dans cet exercice, nous vous accompagnons sur toutes les étapes : de la compilation du contenu à la direction artistique puis à la diffusion le jour J."\n    },{\n      "@type": "Service",\n      \t      "name": "Des directions artistiques époustouflantes",\n"description": "Nous délivrons à votre audience une qualité artistique au-delà de vos exigences. Nous exploitons les dispositifs techniques des évènements et nous faisons appel à la créativité inépuisable de notre studio de 25 designers afin de vous proposer des présentations uniques, tout le temps."\n    },{\n      "@type": "Service",\n      \t      "name": "Une gestion de projet exemplaire pour maîtriser toute la production",\n"description": "Nous avons l\'expérience des évènements et nos process de production sont normés afin de ne pas laisser de place à l\'erreur. Vous avez plusieurs interlocuteurs, plusieurs versions de fichiers, des imprévus quotidiens ou des changements de dernière minute ? Nous sommes habitués à ces problématiques et vous proposons des outils ainsi que des modes de fonctionnement optimaux pour les gérer."\n    },{\n      "@type": "Service",\n      \t      "name": "Un suivi de la production rigoureux",\n"description": "Nous pilotons la production, les versions de fichiers, les temps passés par les designers et les mises à jour de contenu avec des outils puissants nous permettant de toujours savoir où nous en sommes. Nous vous communiquons régulièrement des éléments sur l\'avancement pour avoir une idée précise de la charge de travail effectuée et restante."\n    },{\n      "@type": "Service",\n      \t      "name": "Une présence dans vos locaux ou les nôtres pour avancer au mieux",\n"description": "Besoin de passer des retours en direct ? D\'échanger de visu avec un ou plusieurs designers ? De répéter avant l\'évènement et modifier la présentation en même temps qu\'elle est diffusée ? Nous dépêchons un à plusieurs designers qui savent travailler de concert et qui ont l\'expérience de la production évènementielle, à n\'importe quel moment du projet. Nous sommes également capable d\'accueillir votre équipe dans nos bureaux."\n    },{\n      "@type": "Service",\n      \t      "name": "Une expérience de la diffusion et des aléas du jour J",\n"description": "Nous avons réalisé des évènements de toute taille, dans tous les secteurs et pour tous types d\'organisations. Nous communiquons régulièrement avec les régies évènementielles et nous mettons du matériel puissant à disposition pour être sûrs que votre évènement se déroule parfaitement le jour J."\n    }]\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 74,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Service",\n  "serviceType": "Presentation Design",\n  "name": "Pitchdecks and fundraising",\n  "description": "A stunning pitchdeck for your next fundraising success. Offer your investors an impactful deck, increase your chances of screening with investment funds and benefit from our highly specialised knowledge of startup financing. 100+ startups have entrusted us with their deck. From the smallest to the largest, we are involved in all stages of financing. Investment funds and fundraisers are also our clients. We work with the financing players as well as their portfolio companies. Join the 100+ startups that stood out with their pitchdeck!",\n  "url": "https://www.slidor.fr/en/pitchdecks",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b8c58ec03d0711b5267012_02-p-1600.jpeg",\n    "width": 1268,\n    "height": 713,\n    "caption": "Pitchdecks and fundraising - Slidor"\n  },\n  "provider": {\n    "@type": "Organization",\n    "name": "Slidor",\n  \t    "image": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n      "width": 1536,\n      "height": 695,\n      "caption": "Slidor -  Presentation Design Agency"\n    },\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n      "width": 367,\n      "height": 117,\n      "caption": "Slidor -  Presentation Design Agency"\n  },\n    "telephone": "+33185091738"\n  },\n  "providerMobility": "static",\n  "areaServed": "worldwide",\n  "potentialAction": {\n      "@type": "UseAction",\n      "object": {\n        "@type": "Service",\n        "name": "Pitchdecks and fundraising"\n      },\n      "target": "https://www.slidor.fr/en/pitchdecks"\n  },\n  "hasOfferCatalog": {\n        "@type": "OfferCatalog",\n    \t    "name": "Pitchdecks and fundraising",\n    \t    "itemListElement": [{\n      "@type": "Service",\n      \t      "name": "Your startup at its best",\n"description": "We meet the very specific needs of the financing industry by transforming the design and impact of your investor pitch deck. We leverage our close relationships with French funds to help company founders succeed in their expansion."\n    },{\n      "@type": "Service",\n      \t      "name": "From pre-seed to exit",\n"description": "Whether your startup is early-stage, in the Serie A or at a more mature level, we create unique, visual and customised decks. We communicate with your investors, fundraisers or investment banks as necessary to update your deck throughout your fundraising process."\n    },{\n      "@type": "Service",\n      \t      "name": "A firm commitment to the confidentiality of your presentations",\n"description": "We sign non-disclosure agreements for the majority of our contracts and have internal processes that allow us to deal with highly sensitive data. All our designers are on permanent contracts and are frequently made aware of the confidentiality involved in the documents they design."\n    },{\n      "@type": "Service",\n      \t      "name": "New branding and marketing resources for startups",\n"description": "Beyond the creation of the pitchdeck, we take advantage of the exercise to recreate the brand identity and art direction of many startups that often did not have time to define their graphic universe during their growth. We carefully study the positioning of startups and offer them new marketing resources."\n    },{\n      "@type": "Service",\n      \t      "name": "On the tool of your choice: PowerPoint, Google Slides, Pitch.com or all three",\n"description": "Take advantage of our technical expertise on all presentation tools, and remove the technical barriers between all parties involved in the design of your pitchdeck."\n    },{\n      "@type": "Service",\n      \t      "name": "The only presentation design agency of creatives and investors in tech",\n"description": "We own stakes in 15 tech startups, and are investors (LPs) in 3 of the most prestigious Parisian investment funds. In addition to our creative abilities, we have a privileged relationship with the future audience of your pitchdeck and an in-depth knowledge of the fundraising process."\n    }]\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 76,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Service",\n  "serviceType": "PowerPoint",\n  "name": "Pitchdecks et levées de fonds",\n  "description": "Un pitchdeck magnifique pour réussir votre prochaine levée de fonds. Offrez à vos investisseurs un deck impactant et visuel, augmentez vos chances de screening auprès des fonds d’investissement et profitez de notre connaissance ultraspécialisée sur le financement des startups. +100 startups nous ont confié leur deck. Des plus petites aux plus grandes, nous intervenons à tous les stades de financement. Fonds d’investissement et leveurs de fonds sont aussi nos clients. Nous travaillons avec les acteurs du financement tout comme leurs entreprises en portfolio. Rejoignez les 100+ startups qui se sont démarquées par leur pitchdeck!",\n  "url": "https://www.slidor.fr/pitchdecks",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b8c58ec03d0711b5267012_02-p-1600.jpeg",\n    "width": 1268,\n    "height": 713,\n    "caption": "Pitchdecks et levées de fonds - Slidor"\n  },\n  "provider": {\n    "@type": "Organization",\n    "name": "Slidor",\n  \t    "image": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n      "width": 1536,\n      "height": 695,\n      "caption": "Slidor - Agence PowerPoint"\n    },\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n      "width": 367,\n      "height": 117,\n      "caption": "Slidor - Agence PowerPoint"\n  },\n    "telephone": "+33185091738"\n  },\n  "providerMobility": "static",\n  "areaServed": "worldwide",\n  "potentialAction": {\n      "@type": "UseAction",\n      "object": {\n        "@type": "Service",\n        "name": "Pitchdecks et levées de fonds"\n      },\n      "target": "https://www.slidor.fr/pitchdecks"\n  },\n  "hasOfferCatalog": {\n        "@type": "OfferCatalog",\n    \t    "name": "Pitchdecks et levées de fonds",\n    \t    "itemListElement": [{\n      "@type": "Service",\n      \t      "name": "Votre startup sous son plus beau jour",\n"description": "Nous répondons aux besoins très spécifiques des acteurs du financement en transformant le design et l’impact de votre pitchdeck investisseurs. Nous mettons à contribution nos relations étroites avec les fonds Français pour aider les fondateurs d\'entreprise à réussir leur expansion."\n    },{\n      "@type": "Service",\n      \t      "name": "Du pre-seed à l’exit",\n"description": "Que votre startup soit early-stage, en Serie A ou à un niveau plus mature, nous créons des decks uniques, visuels et sur mesure. Nous communiquons si besoin avec vos investisseurs, leveurs de fonds ou banques d’affaires pour mettre à jour votre deck tout au long de votre process de levée de fonds."\n    },{\n      "@type": "Service",\n      \t      "name": "Un engagement ferme sur la confidentialité de vos présentations",\n"description": "Nous signons des accords de non-divulgation pour la majorité de nos contrats et nous avons des process internes qui nous permettent de traiter des sujets ultra-sensibles. Tous nos designers sont en CDI et sont fréquemment sensibilisés aux enjeux des documents qu\'ils mettent en forme."\n    },{\n      "@type": "Service",\n      \t      "name": "Une nouvelle image de marque et des ressources marketing pour les startups",\n"description": "Au-delà de la création du pitchdeck, nous profitons de l\'exercice pour recréer l\'identité de marque et la direction artistique de nombreuses startups qui, souvent, n\'ont pas eu le temps de définir leur univers graphique pendant leur croissance. Nous étudions avec soin le positionnement des startups et leur proposons de nouvelles ressources marketing."\n    },{\n      "@type": "Service",\n      \t      "name": "Sur l’outil de votre choix : PowerPoint, Google Slides, Pitch.com ou les trois",\n"description": "Profitez de notre expertise technique sur tous les outils de présentations, et levez les barrières techniques entre toutes les parties prenantes à la conception de votre pitchdeck."\n    },{\n      "@type": "Service",\n      \t      "name": "La seule agence PowerPoint de créatifs et d’investisseurs dans la tech",\n"description": "Nous possédons des participations dans 15 startups de la tech, et sommes investisseurs (LPs) dans 3 des plus prestigieux fonds d’investissements parisiens. En plus de nos capacités créatives, nous avons des relations privilégiées avec la future audience de votre pitchdeck et connaissons en profondeur les process de levées de fonds."\n    }]\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 78,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Service",\n  "serviceType": "Presentation Design",\n  "name": "Financial reports",\n  "description": "Clear and impactful financial PowerPoint presentations. We work on highly strategic documents, offering a sober and modern design to companies, in line with their graphic codes. Many references in finance and investment. Funds, banks, investment operations: we have accompanied many companies and continue to follow them throughout their development. Transform your financial presentations and gain impact.",\n  "url": "https://www.slidor.fr/en/presentations-financieres",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba2edd39f578487f0b97e8_02-p-1600.jpeg",\n    "width": 1268,\n    "height": 713,\n    "caption": "Financial reports - Slidor"\n  },\n  "provider": {\n    "@type": "Organization",\n    "name": "Slidor",\n  \t    "image": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n      "width": 1536,\n      "height": 695,\n      "caption": "Slidor -  Presentation Design Agency"\n    },\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n      "width": 367,\n      "height": 117,\n      "caption": "Slidor -  Presentation Design Agency"\n  },\n    "telephone": "+33185091738"\n  },\n  "providerMobility": "static",\n  "areaServed": "worldwide",\n  "potentialAction": {\n      "@type": "UseAction",\n      "object": {\n        "@type": "Service",\n        "name": "Financial reports"\n      },\n      "target": "https://www.slidor.fr/en/presentations-financieres"\n  },\n  "hasOfferCatalog": {\n        "@type": "OfferCatalog",\n    \t    "name": "Financial reports",\n    \t    "itemListElement": [{\n      "@type": "Service",\n      \t      "name": "Complex slides made simple",\n"description": "We visually highlight the data to convey the important information, and we offer innovative compositions to make it easy to read. We ensure a triple use: to present orally to your high-level interlocutors, to print if necessary to leave a written support, and to send afterwards in PDF format."\n    },{\n      "@type": "Service",\n      \t      "name": "A firm commitment to confidentiality.",\n"description": "Whether it is annual reports, events such as investor days, corporate presentations for banks, insurance companies, private equity firms or asset management firms, we sign strict confidentiality clauses with our clients to ensure the security of their information."\n    },{\n      "@type": "Service",\n      \t      "name": "Project management designed to ensure the security of your data",\n"description": "We have adapted our organisation to ensure maximum protection of the elements transmitted: all our designers have a stable contract, our presentations are encrypted and access rights are strictly monitored. We are also 100% self-financed in order to ensure the confidentiality of the elements transmitted."\n    },{\n      "@type": "Service",\n      \t      "name": "Schedules respected thanks to our reactivity and our processes",\n"description": "As annual reports or investor days have to meet specific deadlines, the proposed production process is highly iterative to enable a maximum of corrective feedback on the design between now and the deadline. A strict review of the content of all the slides produced is also carried out before each delivery, to ensure the complete integrity of this strategic content. For events, we offer a managed solution to ensure impeccable reactivity in case of last-minute adjustments."\n    }]\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 80,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Service",\n  "serviceType": "PowerPoint",\n  "name": "Rapports financiers",\n  "description": "Des présentations PowerPoint financières claires et impactantes. Nous intervenons sur des documents hautement stratégiques en proposant un design sobre et moderne aux entreprises, aligné avec leurs codes graphiques. De nombreuses références dans la finance et l\'investissement. Fonds, banques, opérations d\'investissement : nous avons accompagné de nombreuses entreprises et continuons de les suivre tout au long de leur développement. Transformez vos présentations financières et gagnez en impact.",\n  "url": "https://www.slidor.fr/presentations-financieres",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba2edd39f578487f0b97e8_02-p-1600.jpeg",\n    "width": 1268,\n    "height": 713,\n    "caption": "Rapports financiers - Slidor"\n  },\n  "provider": {\n    "@type": "Organization",\n    "name": "Slidor",\n  \t    "image": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n      "width": 1536,\n      "height": 695,\n      "caption": "Slidor - Agence PowerPoint"\n    },\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n      "width": 367,\n      "height": 117,\n      "caption": "Slidor - Agence PowerPoint"\n  },\n    "telephone": "+33185091738"\n  },\n  "providerMobility": "static",\n  "areaServed": "worldwide",\n  "potentialAction": {\n      "@type": "UseAction",\n      "object": {\n        "@type": "Service",\n        "name": "Rapports financiers"\n      },\n      "target": "https://www.slidor.fr/presentations-financieres"\n  },\n  "hasOfferCatalog": {\n        "@type": "OfferCatalog",\n    \t    "name": "Rapports financiers",\n    \t    "itemListElement": [{\n      "@type": "Service",\n      \t      "name": "Des slides complexes rendues simples",\n"description": "Nous retraitons la donnée visuellement afin de véhiculer les informations importantes, et nous proposons des compositions innovantes pour rendre la lecture facile. Nous assurons un triple usage : présenter à l’oral à vos interlocuteurs de haut niveau, imprimer si nécessaire afin de laisser un support écrit, et envoyer par la suite sous format PDF."\n    },{\n      "@type": "Service",\n      \t      "name": "Un engagement ferme sur la confidentialité",\n"description": "Qu\'il s\'agisse de rapports annuels, d\'événements comme les investor days, de présentations corporate pour des banques, assurances, sociétés de private equity ou encore d\'asset management, nous signons  avec  nos clients des clauses de confidentialité très strictes afin d\'assurer la sécurité de leurs informations."\n    },{\n      "@type": "Service",\n      \t      "name": "Une gestion de projet pensée pour assurer la sécurité de vos données",\n"description": "Nous avons adapté notre organisation afin d\'assurer une protection maximale des éléments transmis : l\'ensemble de nos designers sont en contrat stable, nos présentations sont cryptées et les droits d\'accès sont strictement monitorés. Nous sommes également auto-financés à 100% afin d\'assurer la confidentialité des éléments transmis."\n    },{\n      "@type": "Service",\n      \t      "name": "Des plannings respectés grâce à notre réactivité et nos process",\n"description": "Les rapports annuels ou Investor days devant respecter des échéances spécifiques, le processus de production proposé est très itératif afin de permettre un maximum d\'allers-retours correctifs sur le design d\'ici à la date butoir. Une revue stricte du contenu de l\'ensemble des slides produites est également réalisée avant chaque envoi, afin d\'assurer une intégrité complète de ces contenus stratégiques. Pour les événements, nous proposons une solution en régie afin d\'assurer une réactivité irréprochable en cas d\'ajustements de dernières minutes."\n    }]\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 82,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Service",\n  "serviceType": "Presentation Design",\n  "name": "Urgent presentations",\n  "description": "PowerPoint presentations in a hurry with a high level of quality. We work with tight schedules and deliver quality presentations thanks to an organisation dedicated to short project organisation. More than 1000 customers, from the smallest to the largest. Give us your presentation due yesterday!",\n  "url": "https://www.slidor.fr/en/presentations-en-urgence",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba16e5c5d7583390302b53_slidor%20office%20urgence-p-1600.jpeg",\n    "width": 1536,\n    "height": 624,\n    "caption": "Urgent presentations - Slidor"\n  },\n  "provider": {\n    "@type": "Organization",\n    "name": "Slidor",\n  \t    "image": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n      "width": 1536,\n      "height": 695,\n      "caption": "Slidor -  Presentation Design Agency"\n    },\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n      "width": 367,\n      "height": 117,\n      "caption": "Slidor -  Presentation Design Agency"\n  },\n    "telephone": "+33185091738"\n  },\n  "providerMobility": "static",\n  "areaServed": "worldwide",\n  "potentialAction": {\n      "@type": "UseAction",\n      "object": {\n        "@type": "Service",\n        "name": "Urgent presentations"\n      },\n      "target": "https://www.slidor.fr/en/presentations-en-urgence"\n  },\n  "hasOfferCatalog": {\n        "@type": "OfferCatalog",\n\t    "name": "Urgent presentations",\n    \t    "itemListElement": [{\n      "@type": "Service",\n      \t      "name": "A visual and impactful rendering on short deadlines",\n"description": "We achieve exemplary results on tight schedules by having up to 8 designers work together on a single project. Our organisation and rigorous processes allow us to maintain high creative standards despite time constraints."\n    },{\n      "@type": "Service",\n      \t      "name": "Unparalleled experience and responsiveness to large volumes of slides",\n"description": "We are used to calls for tender, large documents (+500 slides) and rapid iterations. We offer the greatest reactivity on the market for this demanding exercise."\n    },{\n      "@type": "Service",\n      \t      "name": "An almost instantaneous start to the project",\n"description": "Our structure is unique. We are the only one in the world presentation design agency in the world to internalize 100% of its production on more than 20 designers in France. This allows us to start each new urgent project very quickly by calling on our creative staff who are available and used to working together."\n    }]\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 84,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Service",\n  "serviceType": "PowerPoint",\n  "name": "Présentations en urgence",\n  "description": "Des présentations PowerPoint en urgence avec un haut niveau de qualité. Nous intervenons sur des planning serrés et délivrons des présentations de qualité grâce à une organisation dédiée aux projets courts. Plus de 1000 clients, des plus petits aux plus grands. Confiez-nous votre présentation à rendre pour hier!",\n  "url": "https://www.slidor.fr/presentations-en-urgence",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61ba16e5c5d7583390302b53_slidor%20office%20urgence-p-1600.jpeg",\n    "width": 1536,\n    "height": 624,\n    "caption": "Présentations en urgence - Slidor"\n  },\n  "provider": {\n    "@type": "Organization",\n    "name": "Slidor",\n  \t    "image": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n      "width": 1536,\n      "height": 695,\n      "caption": "Slidor - Agence PowerPoint"\n    },\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n      "width": 367,\n      "height": 117,\n      "caption": "Slidor - Agence PowerPoint"\n  },\n    "telephone": "+33185091738"\n  },\n  "providerMobility": "static",\n  "areaServed": "worldwide",\n  "potentialAction": {\n      "@type": "UseAction",\n      "object": {\n        "@type": "Service",\n        "name": "Présentations en urgence"\n      },\n      "target": "https://www.slidor.fr/presentations-en-urgence"\n  },\n  "hasOfferCatalog": {\n        "@type": "OfferCatalog",\n    \t    "name": "Présentations en urgence",\n    \t    "itemListElement": [{\n      "@type": "Service",\n      \t      "name": "Un rendu visuel et impactant sur des échéances courtes",\n"description": "Nous arrivons à des résultats exemplaires sur des planings serrés en faisant travailler de concert jusqu\'à 8 designers sur un même projet. Notre organisation et nos process rigoureux nous permettent de garder une exigence créative élevée malgré les contraintes de temps."\n    },{\n      "@type": "Service",\n      \t      "name": "Une expérience et une réactivité inégalée sur les gros volumes de slides",\n"description": "Nous sommes habitués aux appels d\'offre, aux documents importants (+500 slides) et aux itérations rapides. Nous offrons la plus grande réactivité du marché sur cet exercice exigeant."\n    },{\n      "@type": "Service",\n      \t      "name": "Un début de projet quasi-instantané",\n"description": "Notre structure est unique. Nous sommes la seule agence PowerPoint au monde à internaliser à 100% de sa production sur plus de 20 designers en CDI, en France. Ceci nous permet de commencer chaque nouveau projet urgent très rapidement en faisant appel à nos créatifs disponibles et habitués à collaborer ensemble."\n    }]\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 86,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Service",\n  "serviceType": "Presentation Design",\n  "name": "Interactive presentations",\n  "description": "Interactive and non-linearpresentations. Interact with your audience according to their needs, navigate from one part to another like an app, and offer innovative experiences in PowerPoint. Stand out with interactive presentations!",\n  "url": "https://www.slidor.fr/en/presentations-interactives",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b8bf18f80272f6700d2015_01-p-1600.jpeg",\n    "width": 1268,\n    "height": 713,\n    "caption": "Interactive presentations - Slidor"\n  },\n  "provider": {\n    "@type": "Organization",\n    "name": "Slidor",\n  \t    "image": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n      "width": 1536,\n      "height": 695,\n      "caption": "Slidor -  Presentation Design Agency"\n    },\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n      "width": 367,\n      "height": 117,\n      "caption": "Slidor -  Presentation Design Agency"\n  },\n    "telephone": "+33185091738"\n  },\n  "providerMobility": "static",\n  "areaServed": "worldwide",\n  "potentialAction": {\n      "@type": "UseAction",\n      "object": {\n        "@type": "Service",\n        "name": "Interactive presentations"\n      },\n      "target": "https://www.slidor.fr/en/presentations-interactives"\n  },\n  "hasOfferCatalog": {\n        "@type": "OfferCatalog",\n    \t    "name": "Interactive presentations",\n    \t    "itemListElement": [{\n      "@type": "Service",\n      \t      "name": "The same experience as a web application on PowerPoint",\n"description": "We recreate user interfaces on PowerPoint to provide unique experiences while giving you control over the editing of your content."\n    },{\n      "@type": "Service",\n      \t      "name": "Use menus, sub-menus and adapt your structure to your interlocutors",\n"description": "Jump from one part to another, return to the summary, adapt your slides to the questions you are addressing in order to avoid the linearity of traditional meeting presentations."\n    },{\n      "@type": "Service",\n      \t      "name": "Create intuitive and responsive interfaces in PowerPoint",\n"description": "Present your product catalogues in an innovative way; Segment your presentation by sector of activity; Organise your slides according to the type of person you are talking to; Add a menu to your presentation; Create questions and answers."\n    },{\n      "@type": "Service",\n      \t      "name": "Offer variable paths to your sales presentations",\n"description": "Interactive presentations enable you to change the flow of your PowerPoint according to the person you are speaking to in order to provide relevant answers while maintaining a single file version."\n    },{\n      "@type": "Service",\n      \t      "name": "Endless possibilities on PowerPoint",\n"description": "Organise and visualise your entire presentation, implement quizzes or create decision trees based on your audience\'s choices. All with ease of editing."\n    },{\n      "@type": "Service",\n      \t      "name": "Present on a tablet and interact with your audience on your presentation",\n"description": "Use touch and give yourself the experience of a mobile application to present your ideas."\n    }]\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 88,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Service",\n  "serviceType": "PowerPoint",\n  "name": "Présentations interactives",\n  "description": "Des présentations interactives et non-linéaires. Interagissez avec votre audience en fonction de ses besoins, naviguez d’une partie à l’autre à l’instar d’une application et proposez des expériences innovantes sur PowerPoint. Démarquez-vous avec des présentations interactives!",\n  "url": "https://www.slidor.fr/presentations-interactives",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b8bf18f80272f6700d2015_01-p-1600.jpeg",\n    "width": 1268,\n    "height": 713,\n    "caption": "Présentations interactives - Slidor"\n  },\n  "provider": {\n    "@type": "Organization",\n    "name": "Slidor",\n  \t    "image": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n      "width": 1536,\n      "height": 695,\n      "caption": "Slidor - Agence PowerPoint"\n    },\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n      "width": 367,\n      "height": 117,\n      "caption": "Slidor - Agence PowerPoint"\n  },\n    "telephone": "+33185091738"\n  },\n  "providerMobility": "static",\n  "areaServed": "worldwide",\n  "potentialAction": {\n      "@type": "UseAction",\n      "object": {\n        "@type": "Service",\n        "name": "Présentations interactives"\n      },\n      "target": "https://www.slidor.fr/presentations-interactives"\n  },\n  "hasOfferCatalog": {\n        "@type": "OfferCatalog",\n    \t    "name": "Présentations interactives",\n    \t    "itemListElement": [{\n      "@type": "Service",\n      \t      "name": "La même expérience qu’une application Web sur PowerPoint",\n"description": "Nous recréons des interfaces utilisateurs sur PowerPoint afin d’offrir des expériences uniques tout en vous laissant la main sur l’édition de votre contenu."\n    },{\n      "@type": "Service",\n      \t      "name": "Utilisez des menus, des sous-menu et adaptez votre structure à vos interlocuteurs",\n"description": "Sautez d’une partie à l’autre, revenez au sommaire, adaptez vos slides aux questions que vous adressez afin d’éviter la linéarité des présentations traditionnelles en rendez-vous."\n    },{\n      "@type": "Service",\n      \t      "name": "Créez des interfaces intuitives et réactives sur PowerPoint",\n"description": "Présentez vos catalogues de produits de façon innovante; Segmentez votre présentation par secteur d’activité; Organisez vos slides en fonction de votre type d’interlocuteur; Ajoutez un menu à votre présentation; Créez des questions-réponses."\n    },{\n      "@type": "Service",\n      \t      "name": "Offrez des chemins variables à vos présentations commerciales",\n"description": "Les présentations interactives vous permettent de changer le déroulé de votre PowerPoint en fonction de votre interlocuteur afin d’apporter des éléments de réponses pertinents tout en maintenant une seule et même version de fichier."\n    },{\n      "@type": "Service",\n      \t      "name": "Des possibilités infinies sur PowerPoint",\n"description": "Organisez et visualisez votre présentation dans son ensemble, implémentez des quizz ou encore créez des arbres de décisions en fonction des choix de votre audience. Le tout avec une grande facilité d’édition."\n    },{\n      "@type": "Service",\n      \t      "name": "Présentez sur tablette et interagissez avec votre audience sur votre présentation",\n"description": "Utilisez le tactile et offrez vous  l’expérience d’une application mobile pour présenter vos idées."\n    }]\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 90,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="application/ld+json"\u003E\n{\n  "@context": "https://schema.org/", \n  "@type": "Service",\n  "serviceType": "PowerPoint",\n  "name": "Formation sur PowerPoint",\n  "description": "Une formation de design unique sur PowerPoint. Apprenez à créer des présentations visuelles et élevez le niveau de création de vos PowerPoint. Comprenez les bases du design de l\'information et maîtrisez parfaitement l\'outil. Des dizaines d’entreprises formées au design de présentations. Une formation notée 4.5/5 chez Criteo. Elevez votre créativité et votre niveau technique sur PowerPoint!",\n  "url": "https://www.slidor.fr/formation-powerpoint",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61bbc5371121060e92c96aec_02.jpg",\n    "width": 1268,\n    "height": 713,\n    "caption": "Formation sur PowerPoint - Slidor"\n  },\n  "provider": {\n    "@type": "Organization",\n    "name": "Slidor",\n  \t    "image": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/61b38adb403d442d6b94f1a1_SLIDOR-07-2021-HD-1%207-p-1600.webp",\n      "width": 1536,\n      "height": 695,\n      "caption": "Slidor - Agence PowerPoint"\n    },\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://assets-global.website-files.com/613f261bb8fac770ce93134d/613f261bb8fac772a2931360_slidor-logo-white.svg",\n      "width": 367,\n      "height": 117,\n      "caption": "Slidor - Agence PowerPoint"\n  },\n    "telephone": "+33185091738"\n  },\n  "providerMobility": "static",\n  "areaServed": "worldwide",\n  "potentialAction": {\n      "@type": "UseAction",\n      "object": {\n        "@type": "Service",\n        "name": "Formation sur PowerPoint"\n      },\n      "target": "https://www.slidor.fr/formation-powerpoint"\n  },\n  "hasOfferCatalog": {\n        "@type": "OfferCatalog",\n    \t    "name": "Formation sur PowerPoint",\n    \t    "itemListElement": [{\n      "@type": "Service",\n      \t      "name": "Changez votre façon de concevoir vos slides et gagnez en créativité",\n"description": "Découvrez le design de l’information en une formation théorique et pratique répartie sur une seule journée. Apprenez les grands principes graphiques, les tendances, la technique et les mêmes outils que ceux de notre agence pour créer des présentations visuelles facilement."\n    },{\n      "@type": "Service",\n      \t      "name": "Apprenez à créer des présentations visuelles, assimilez les bases du design",\n"description": "Notre formation est le fruit de nos 8 années d’expériences en création de présentations pour tout types de besoins et d’entreprises. Des bonnes pratiques applicables facilement et pour tous les niveaux, ne nécessitant aucune compétence créative ou technique. Introduction à la présentation; Design de l’information 15 règles simples; Pitchdecks et présentations commerciales; Maîtriser PowerPoint et ses nouvelles  fonctionnalités; Branding \u0026 Marketing; Exemples pratiques - avant, après."\n    },{\n      "@type": "Service",\n      \t      "name": "Mettez en pratique les acquis sur les présentations de votre entreprise",\n"description": "Nous personnalisons notre formation pour délivrer à vos collaborateurs des conseils sur les PowerPoint existants au sein de votre entreprise. Refonte du slidedeck de l\'entreprise; Introduction aux animations; Aide à la visualisation de données; Savoir utiliser votre template intelligemment; Concevoir des slides rapidement; Questions réponses."\n    },{\n      "@type": "Service",\n      \t      "name": "Dispensée par le co-fondateur et directeur créatif de Slidor",\n"description": "Jérôme Bestel"\n    },{\n      "@type": "Service",\n      \t      "name": "Une formation rythmée en fonction de vos connaissances",\n"description": "Nous adaptons notre contenu et la vitesse d\'apprentissage en fonction du niveau des personnes formées. Nous avons formé des experts de l\'outil comme des débutants avec toujours la même satisfaction."\n    },{\n      "@type": "Service",\n      \t      "name": "Dispensée en visio sur l’outil de votre choix ou en présentiel",\n"description": "Zoom, Google Meet, Microsoft Teams, nous nous adaptons à vos exigences techniques. Nous sommes équipés de matériel haut de gamme pour rendre l’expérience unique (microphone professionnel anti-bruit, vidéo 4K, etc.)."\n    },{\n      "@type": "Service",\n      \t      "name": "Un contenu personnalisé sur demande",\n"description": "Nous pouvons adapter notre formation à vos besoins : adoption d’un nouveau Template, nouvelle identité visuelle en entreprise à transmettre à vos collaborateurs, contraintes techniques, etc."\n    }]\n  }\n}\n\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 92,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "fs-cc-consent-update" },
        { function: "_eq", arg0: ["macro", 1], arg1: "fs-cc-consent-update" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.js" },
        { function: "_cn", arg0: ["macro", 2], arg1: "glide" },
        { function: "_cn", arg0: ["macro", 2], arg1: "selfone" },
        { function: "_cn", arg0: ["macro", 2], arg1: "peetch" },
        { function: "_cn", arg0: ["macro", 2], arg1: "/message-recu" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.formSubmit" },
        {
          function: "_re",
          arg0: ["macro", 4],
          arg1: "(^$|((^|,)9703428_127($|,)))",
        },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.init_consent" },
        { function: "_cn", arg0: ["macro", 6], arg1: "+33 1 85 09 17 38" },
        { function: "_eq", arg0: ["macro", 1], arg1: "gtm.click" },
        { function: "_cn", arg0: ["macro", 6], arg1: "hello@slidor.fr" },
        {
          function: "_eq",
          arg0: ["macro", 7],
          arg1: "/en/presentations-commerciales",
        },
        { function: "_eq", arg0: ["macro", 7], arg1: "/en/" },
        { function: "_eq", arg0: ["macro", 7], arg1: "/" },
        { function: "_eq", arg0: ["macro", 7], arg1: "/en/agence" },
        { function: "_eq", arg0: ["macro", 7], arg1: "/agence" },
        {
          function: "_eq",
          arg0: ["macro", 7],
          arg1: "/presentations-commerciales",
        },
        { function: "_eq", arg0: ["macro", 7], arg1: "/en/contact" },
        { function: "_eq", arg0: ["macro", 7], arg1: "/contact" },
        { function: "_cn", arg0: ["macro", 2], arg1: "/contact" },
        { function: "_eq", arg0: ["macro", 7], arg1: "/en/selfone" },
        { function: "_eq", arg0: ["macro", 7], arg1: "/selfone" },
        { function: "_eq", arg0: ["macro", 7], arg1: "/en/glide" },
        { function: "_eq", arg0: ["macro", 7], arg1: "/glide" },
        { function: "_eq", arg0: ["macro", 7], arg1: "/en/peetch" },
        { function: "_eq", arg0: ["macro", 7], arg1: "/peetch" },
        { function: "_eq", arg0: ["macro", 7], arg1: "/en/toolbar-powerpoint" },
        { function: "_eq", arg0: ["macro", 7], arg1: "/toolbar-powerpoint" },
        {
          function: "_eq",
          arg0: ["macro", 7],
          arg1: "/en/templates-powerpoint",
        },
        { function: "_eq", arg0: ["macro", 7], arg1: "/templates-powerpoint" },
        {
          function: "_eq",
          arg0: ["macro", 7],
          arg1: "/en/presentations-evenementielles",
        },
        {
          function: "_eq",
          arg0: ["macro", 7],
          arg1: "/presentations-evenementielles",
        },
        { function: "_eq", arg0: ["macro", 7], arg1: "/en/pitchdecks" },
        { function: "_eq", arg0: ["macro", 7], arg1: "/pitchdecks" },
        {
          function: "_eq",
          arg0: ["macro", 7],
          arg1: "/en/presentations-financieres",
        },
        {
          function: "_eq",
          arg0: ["macro", 7],
          arg1: "/presentations-financieres",
        },
        {
          function: "_eq",
          arg0: ["macro", 7],
          arg1: "/en/presentations-en-urgence",
        },
        {
          function: "_eq",
          arg0: ["macro", 7],
          arg1: "/presentations-en-urgence",
        },
        {
          function: "_eq",
          arg0: ["macro", 7],
          arg1: "/en/presentations-interactives",
        },
        {
          function: "_eq",
          arg0: ["macro", 7],
          arg1: "/presentations-interactives",
        },
        { function: "_eq", arg0: ["macro", 7], arg1: "/formation-powerpoint" },
      ],
      rules: [
        [
          ["if", 0, 1],
          ["add", 1, 2, 8, 9, 11, 12, 20],
        ],
        [
          ["if", 2],
          ["add", 3, 4, 6, 7, 13, 14, 17, 18, 19, 21],
        ],
        [
          ["if", 0, 1, 6],
          ["add", 5, 10],
        ],
        [
          ["if", 7, 8],
          ["add", 5],
        ],
        [
          ["if", 9],
          ["add", 0],
        ],
        [
          ["if", 10, 11],
          ["add", 15],
        ],
        [
          ["if", 11, 12],
          ["add", 16],
        ],
        [
          ["if", 2, 13],
          ["add", 22],
        ],
        [
          ["if", 2, 14],
          ["add", 23],
        ],
        [
          ["if", 2, 15],
          ["add", 24],
        ],
        [
          ["if", 2, 16],
          ["add", 25],
        ],
        [
          ["if", 2, 17],
          ["add", 26],
        ],
        [
          ["if", 2, 18],
          ["add", 27],
        ],
        [
          ["if", 2, 19],
          ["add", 28],
        ],
        [
          ["if", 2, 20],
          ["add", 29],
        ],
        [
          ["if", 2, 21],
          ["add", 30],
        ],
        [
          ["if", 2, 22],
          ["add", 31],
        ],
        [
          ["if", 2, 23],
          ["add", 32],
        ],
        [
          ["if", 2, 24],
          ["add", 33],
        ],
        [
          ["if", 2, 25],
          ["add", 34],
        ],
        [
          ["if", 2, 26],
          ["add", 35],
        ],
        [
          ["if", 2, 27],
          ["add", 36],
        ],
        [
          ["if", 2, 28],
          ["add", 37],
        ],
        [
          ["if", 2, 29],
          ["add", 38],
        ],
        [
          ["if", 2, 30],
          ["add", 39],
        ],
        [
          ["if", 2, 31],
          ["add", 40],
        ],
        [
          ["if", 2, 32],
          ["add", 41],
        ],
        [
          ["if", 2, 33],
          ["add", 42],
        ],
        [
          ["if", 2, 34],
          ["add", 43],
        ],
        [
          ["if", 2, 35],
          ["add", 44],
        ],
        [
          ["if", 2, 36],
          ["add", 45],
        ],
        [
          ["if", 2, 37],
          ["add", 46],
        ],
        [
          ["if", 2, 38],
          ["add", 47],
        ],
        [
          ["if", 2, 39],
          ["add", 48],
        ],
        [
          ["if", 2, 40],
          ["add", 49],
        ],
        [
          ["if", 2, 41],
          ["add", 50],
        ],
        [
          ["if", 2, 42],
          ["add", 51],
        ],
        [
          ["if", 2, 3, 4, 5],
          ["block", 4, 9, 20],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__cvt_9703428_128",
        [46, "a"],
        [
          52,
          "b",
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "createQueue"]],
            ["$0", "dataLayer"],
          ],
        ],
        [52, "c", ["require", "gtagSet"]],
        [52, "d", ["require", "logToConsole"]],
        [52, "e", ["require", "makeNumber"]],
        [52, "f", ["require", "makeTableMap"]],
        [52, "g", ["require", "setDefaultConsentState"]],
        [52, "h", ["require", "updateConsentState"]],
        [
          52,
          "i",
          [
            7,
            "AT",
            "BE",
            "BG",
            "HR",
            "CY",
            "CZ",
            "DK",
            "EE",
            "FI",
            "FR",
            "DE",
            "GR",
            "HU",
            "IE",
            "IT",
            "LV",
            "LT",
            "LU",
            "MT",
            "NL",
            "PL",
            "PT",
            "RO",
            "SK",
            "SI",
            "ES",
            "SE",
            "NO",
            "IS",
            "LI",
          ],
        ],
        [
          52,
          "j",
          [30, [17, [15, "a"], "regions"], [17, [15, "a"], "regionsEEA"]],
        ],
        [
          52,
          "k",
          [
            39,
            [20, [17, [15, "a"], "command"], "default"],
            [15, "g"],
            [15, "h"],
          ],
        ],
        [52, "l", [8]],
        [
          22,
          [21, [17, [15, "a"], "ad_storage"], "notset"],
          [46, [43, [15, "l"], "ad_storage", [17, [15, "a"], "ad_storage"]]],
        ],
        [
          22,
          [21, [17, [15, "a"], "analytics_storage"], "notset"],
          [
            46,
            [
              43,
              [15, "l"],
              "analytics_storage",
              [17, [15, "a"], "analytics_storage"],
            ],
          ],
        ],
        [
          22,
          [21, [17, [15, "a"], "ad_user_data"], "notset"],
          [
            46,
            [43, [15, "l"], "ad_user_data", [17, [15, "a"], "ad_user_data"]],
          ],
        ],
        [
          22,
          [21, [17, [15, "a"], "ad_personalization"], "notset"],
          [
            46,
            [
              43,
              [15, "l"],
              "ad_personalization",
              [17, [15, "a"], "ad_personalization"],
            ],
          ],
        ],
        [
          22,
          [21, [17, [15, "a"], "personalization_storage"], "notset"],
          [
            46,
            [
              43,
              [15, "l"],
              "personalization_storage",
              [17, [15, "a"], "personalization_storage"],
            ],
          ],
        ],
        [
          22,
          [21, [17, [15, "a"], "functionality_storage"], "notset"],
          [
            46,
            [
              43,
              [15, "l"],
              "functionality_storage",
              [17, [15, "a"], "functionality_storage"],
            ],
          ],
        ],
        [
          22,
          [21, [17, [15, "a"], "security_storage"], "notset"],
          [
            46,
            [
              43,
              [15, "l"],
              "security_storage",
              [17, [15, "a"], "security_storage"],
            ],
          ],
        ],
        [
          22,
          [
            1,
            [20, [17, [15, "a"], "command"], "default"],
            [18, ["e", [17, [15, "a"], "wait_for_update"]], 0],
          ],
          [
            46,
            [
              43,
              [15, "l"],
              "wait_for_update",
              ["e", [17, [15, "a"], "wait_for_update"]],
            ],
          ],
        ],
        [
          22,
          [
            1,
            [20, [17, [15, "a"], "command"], "default"],
            [21, [15, "j"], "all"],
          ],
          [
            46,
            [
              53,
              [41, "m"],
              [
                3,
                "m",
                [
                  2,
                  [2, [15, "j"], "split", [7, ","]],
                  "map",
                  [7, [51, "", [7, "n"], [36, [2, [15, "n"], "trim", [7]]]]],
                ],
              ],
              [
                22,
                [18, [2, [15, "m"], "indexOf", [7, "eea"]], [27, 1]],
                [
                  46,
                  [3, "m", [2, [15, "m"], "concat", [7, [15, "i"]]]],
                  [
                    3,
                    "m",
                    [
                      2,
                      [15, "m"],
                      "filter",
                      [
                        7,
                        [
                          51,
                          "",
                          [7, "n", "o"],
                          [
                            36,
                            [
                              1,
                              [
                                20,
                                [2, [15, "m"], "indexOf", [7, [15, "n"]]],
                                [15, "o"],
                              ],
                              [21, [15, "n"], "eea"],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [43, [15, "l"], "region", [15, "m"]],
            ],
          ],
        ],
        [
          "c",
          [
            8,
            "url_passthrough",
            [30, [17, [15, "a"], "url_passthrough"], false],
            "ads_data_redaction",
            [30, [17, [15, "a"], "ads_data_redaction"], false],
          ],
        ],
        ["k", [15, "l"]],
        [
          22,
          [17, [15, "a"], "sendDataLayer"],
          [
            46,
            [
              43,
              [15, "l"],
              "event",
              [0, "gtm_consent_", [17, [15, "a"], "command"]],
            ],
            ["b", [15, "l"]],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__awec",
        [46, "a"],
        [
          50,
          "e",
          [46, "q", "r", "s"],
          [
            22,
            [21, [16, [15, "r"], [15, "s"]], [44]],
            [
              46,
              [43, [15, "q"], [15, "s"], [16, [15, "r"], [15, "s"]]],
              [33, [15, "d"], [3, "d", [0, [15, "d"], 1]]],
            ],
          ],
        ],
        [
          50,
          "f",
          [46, "q"],
          [3, "d", 0],
          [52, "r", [8]],
          ["e", [15, "r"], [15, "q"], "first_name"],
          ["e", [15, "r"], [15, "q"], "last_name"],
          ["e", [15, "r"], [15, "q"], "street"],
          ["e", [15, "r"], [15, "q"], "sha256_first_name"],
          ["e", [15, "r"], [15, "q"], "sha256_last_name"],
          ["e", [15, "r"], [15, "q"], "sha256_street"],
          ["e", [15, "r"], [15, "q"], "city"],
          ["e", [15, "r"], [15, "q"], "region"],
          ["e", [15, "r"], [15, "q"], "country"],
          ["e", [15, "r"], [15, "q"], "postal_code"],
          [22, [20, [15, "d"], 0], [46, [36, [44]]], [46, [36, [15, "r"]]]],
        ],
        [52, "b", ["require", "getType"]],
        [41, "c"],
        [3, "c", [8]],
        [41, "d"],
        [3, "d", 0],
        [41, "g"],
        [3, "g", [16, [15, "a"], "mode"]],
        [
          38,
          [15, "g"],
          [46, "CODE", "AUTO"],
          [
            46,
            [
              5,
              [
                46,
                [52, "h", [7]],
                [52, "i", [30, [16, [15, "a"], "dataSource"], [8]]],
                ["e", [15, "c"], [15, "i"], "email"],
                ["e", [15, "c"], [15, "i"], "phone_number"],
                ["e", [15, "c"], [15, "i"], "sha256_email_address"],
                ["e", [15, "c"], [15, "i"], "sha256_phone_number"],
                [52, "j", [16, [15, "i"], "address"]],
                [
                  22,
                  [20, ["b", [15, "j"]], "array"],
                  [
                    46,
                    [
                      66,
                      "q",
                      [15, "j"],
                      [
                        46,
                        [
                          53,
                          [52, "r", ["f", [15, "q"]]],
                          [
                            22,
                            [21, [15, "r"], [44]],
                            [46, [2, [15, "h"], "push", [7, [15, "r"]]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [
                    46,
                    [
                      22,
                      [15, "j"],
                      [
                        46,
                        [
                          53,
                          [52, "q", ["f", [15, "j"]]],
                          [
                            22,
                            [21, [15, "q"], [44]],
                            [46, [2, [15, "h"], "push", [7, [15, "q"]]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [
                  22,
                  [18, [17, [15, "h"], "length"], 0],
                  [46, [43, [15, "c"], "address", [15, "h"]]],
                ],
                [4],
              ],
            ],
            [
              5,
              [
                46,
                [
                  52,
                  "k",
                  [
                    13,
                    [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"],
                  ],
                ],
                [52, "l", ["require", "internal.detectUserProvidedData"]],
                [41, "m"],
                [3, "m", [44]],
                [
                  22,
                  [
                    1,
                    [16, [15, "a"], "enableElementBlocking"],
                    [16, [15, "a"], "disabledElements"],
                  ],
                  [
                    46,
                    [
                      53,
                      [52, "q", [16, [15, "a"], "disabledElements"]],
                      [3, "m", [7]],
                      [
                        65,
                        "r",
                        [15, "q"],
                        [
                          46,
                          [
                            2,
                            [15, "m"],
                            "push",
                            [7, [16, [15, "r"], "column1"]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "n", ["l", [8, "excludeElementSelectors", [15, "m"]]]],
                [52, "o", [1, [15, "n"], [16, [15, "n"], "elements"]]],
                [
                  22,
                  [1, [15, "o"], [18, [17, [15, "o"], "length"], 0]],
                  [
                    46,
                    [
                      53,
                      [41, "q"],
                      [3, "q", 0],
                      [
                        63,
                        [7, "q"],
                        [23, [15, "q"], [17, [15, "o"], "length"]],
                        [33, [15, "q"], [3, "q", [0, [15, "q"], 1]]],
                        [
                          46,
                          [
                            53,
                            [52, "r", [16, [15, "o"], [15, "q"]]],
                            [
                              22,
                              [20, [16, [15, "r"], "type"], "email"],
                              [
                                46,
                                [
                                  43,
                                  [15, "c"],
                                  "email",
                                  [16, [15, "r"], "userData"],
                                ],
                                [4],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [4],
              ],
            ],
            [
              9,
              [
                46,
                [3, "g", "MANUAL"],
                ["e", [15, "c"], [15, "a"], "email"],
                ["e", [15, "c"], [15, "a"], "phone_number"],
                [52, "p", ["f", [15, "a"]]],
                [
                  22,
                  [21, [15, "p"], [44]],
                  [46, [43, [15, "c"], "address", [7, [15, "p"]]]],
                ],
              ],
            ],
          ],
        ],
        [43, [15, "c"], "_tag_mode", [15, "g"]],
        [36, [15, "c"]],
      ],
      [
        50,
        "__baut",
        [46, "a"],
        [52, "b", ["require", "injectScript"]],
        [52, "c", ["require", "callInWindow"]],
        [52, "d", ["require", "makeTableMap"]],
        [
          38,
          [17, [15, "a"], "eventType"],
          [46, "PAGE_LOAD", "VARIABLE_REVENUE", "CUSTOM"],
          [
            46,
            [5, [46, [43, [15, "a"], "eventType", "pageView"], [4]]],
            [5, [46, [43, [15, "a"], "eventType", "variableRevenue"], [4]]],
            [5, [46, [43, [15, "a"], "eventType", "custom"]]],
          ],
        ],
        [
          22,
          [17, [15, "a"], "eventCategory"],
          [
            46,
            [
              43,
              [15, "a"],
              "p_event_category",
              [17, [15, "a"], "eventCategory"],
            ],
          ],
        ],
        [
          22,
          [17, [15, "a"], "eventLabel"],
          [46, [43, [15, "a"], "p_event_label", [17, [15, "a"], "eventLabel"]]],
        ],
        [
          22,
          [17, [15, "a"], "eventValue"],
          [46, [43, [15, "a"], "p_event_value", [17, [15, "a"], "eventValue"]]],
        ],
        [
          22,
          [17, [15, "a"], "goalValue"],
          [
            46,
            [43, [15, "a"], "p_revenue_value", [17, [15, "a"], "goalValue"]],
          ],
        ],
        [
          52,
          "e",
          [
            51,
            "",
            [7],
            [
              52,
              "i",
              [
                39,
                [
                  30,
                  [20, [17, [15, "a"], "eventType"], "pageView"],
                  [28, [17, [15, "a"], "customParamTable"]],
                ],
                [8],
                [
                  "d",
                  [17, [15, "a"], "customParamTable"],
                  "customParamName",
                  "customParamValue",
                ],
              ],
            ],
            [
              52,
              "j",
              [
                8,
                "pageViewSpa",
                [7, "page_path", "page_title"],
                "variableRevenue",
                [7, "currency", "revenue_value"],
                "custom",
                [
                  7,
                  "event_category",
                  "event_label",
                  "event_value",
                  "currency",
                  "revenue_value",
                ],
                "ecommerce",
                [
                  7,
                  "ecomm_prodid",
                  "ecomm_pagetype",
                  "ecomm_totalvalue",
                  "ecomm_category",
                ],
                "hotel",
                [
                  7,
                  "currency",
                  "hct_base_price",
                  "hct_booking_xref",
                  "hct_checkin_date",
                  "hct_checkout_date",
                  "hct_length_of_stay",
                  "hct_partner_hotel_id",
                  "hct_total_price",
                  "hct_pagetype",
                ],
                "travel",
                [
                  7,
                  "travel_destid",
                  "travel_originid",
                  "travel_pagetype",
                  "travel_startdate",
                  "travel_enddate",
                  "travel_totalvalue",
                ],
                "enhancedConversion",
                [7, "em", "ph"],
              ],
            ],
            [
              65,
              "k",
              [30, [16, [15, "j"], [17, [15, "a"], "eventType"]], [7]],
              [
                46,
                [
                  43,
                  [15, "i"],
                  [15, "k"],
                  [
                    30,
                    [16, [15, "i"], [15, "k"]],
                    [16, [15, "a"], [0, "p_", [15, "k"]]],
                  ],
                ],
              ],
            ],
            [43, [15, "i"], "tpp", "1"],
            [36, [15, "i"]],
          ],
        ],
        [
          52,
          "f",
          [
            51,
            "",
            [7],
            [
              52,
              "i",
              [
                39,
                [28, [17, [15, "a"], "customConfigTable"]],
                [8],
                [
                  "d",
                  [17, [15, "a"], "customConfigTable"],
                  "customConfigName",
                  "customConfigValue",
                ],
              ],
            ],
            [
              54,
              "k",
              [15, "i"],
              [
                46,
                [
                  22,
                  [20, [16, [15, "i"], [15, "k"]], "true"],
                  [46, [43, [15, "i"], [15, "k"], true]],
                  [
                    46,
                    [
                      22,
                      [20, [16, [15, "i"], [15, "k"]], "false"],
                      [46, [43, [15, "i"], [15, "k"], false]],
                    ],
                  ],
                ],
              ],
            ],
            [
              52,
              "j",
              [
                7,
                "navTimingApi",
                "enableAutoSpaTracking",
                "storeConvTrackCookies",
                "removeQueryFromUrls",
                "disableAutoPageView",
              ],
            ],
            [
              65,
              "k",
              [15, "j"],
              [
                46,
                [
                  43,
                  [15, "i"],
                  [15, "k"],
                  [
                    30,
                    [16, [15, "i"], [15, "k"]],
                    [16, [15, "a"], [0, "c_", [15, "k"]]],
                  ],
                ],
              ],
            ],
            [
              22,
              [20, [17, [15, "a"], "c_enhancedConversion"], true],
              [
                46,
                [
                  43,
                  [15, "i"],
                  "pagePid",
                  [
                    8,
                    "em",
                    [17, [15, "a"], "p_em"],
                    "ph",
                    [17, [15, "a"], "p_ph"],
                  ],
                ],
              ],
            ],
            [43, [15, "i"], "ti", [17, [15, "a"], "tagId"]],
            [43, [15, "i"], "tm", "gtm002"],
            [36, [15, "i"]],
          ],
        ],
        [
          52,
          "g",
          [
            51,
            "",
            [7],
            [
              22,
              [20, [17, [15, "a"], "eventType"], "pageView"],
              [
                46,
                [
                  53,
                  [52, "i", ["f"]],
                  ["c", "UET_init", [17, [15, "a"], "uetqName"], [15, "i"]],
                  ["c", "UET_push", [17, [15, "a"], "uetqName"], "pageLoad"],
                ],
              ],
              [
                46,
                [
                  53,
                  [52, "i", ["e"]],
                  [
                    22,
                    [20, [17, [15, "a"], "eventType"], "pageViewSpa"],
                    [
                      46,
                      [
                        "c",
                        "UET_push",
                        [17, [15, "a"], "uetqName"],
                        "event",
                        "page_view",
                        [15, "i"],
                      ],
                    ],
                    [
                      46,
                      [
                        22,
                        [
                          20,
                          [17, [15, "a"], "eventType"],
                          "enhancedConversion",
                        ],
                        [
                          46,
                          [
                            "c",
                            "UET_push",
                            [17, [15, "a"], "uetqName"],
                            "set",
                            [8, "pid", [15, "i"]],
                          ],
                        ],
                        [
                          46,
                          [
                            53,
                            [
                              52,
                              "j",
                              [
                                30,
                                [
                                  30,
                                  [17, [15, "a"], "customEventAction"],
                                  [17, [15, "a"], "eventAction"],
                                ],
                                "",
                              ],
                            ],
                            [
                              "c",
                              "UET_push",
                              [17, [15, "a"], "uetqName"],
                              "event",
                              [15, "j"],
                              [15, "i"],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
            [2, [15, "a"], "gtmOnSuccess", [7]],
          ],
        ],
        [52, "h", "https://bat.bing.com/bat.js"],
        ["b", [15, "h"], [15, "g"], [17, [15, "a"], "gtmOnFailure"], [15, "h"]],
      ],
      [
        50,
        "__bzi",
        [46, "a"],
        [52, "b", ["require", "injectScript"]],
        [52, "c", ["require", "setInWindow"]],
        ["c", "_linkedin_data_partner_id", [17, [15, "a"], "id"]],
        [
          "b",
          "https://snap.licdn.com/li.lms-analytics/insight.min.js",
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
        ],
      ],
      [
        50,
        "__cl",
        [46, "a"],
        [52, "b", ["require", "internal.enableAutoEventOnClick"]],
        ["b"],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__e",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getEventData"]],
            ["$0", "event"],
          ],
        ],
      ],
      [
        50,
        "__fsl",
        [46, "a"],
        [52, "b", ["require", "internal.enableAutoEventOnFormSubmit"]],
        [
          52,
          "c",
          [
            8,
            "waitForTags",
            [17, [15, "a"], "waitForTags"],
            "checkValidation",
            [17, [15, "a"], "checkValidation"],
            "waitForTagsTimeout",
            [17, [15, "a"], "waitForTagsTimeout"],
          ],
        ],
        [52, "d", [30, [17, [15, "a"], "uniqueTriggerId"], "0"]],
        ["b", [15, "c"], [15, "d"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [50, "__paused", [46, "a"], [2, [15, "a"], "gtmOnFailure", [7]]],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_direct_google_requests",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __e: { 2: true, 4: true },
      __googtag: { 1: 10 },
    },
    blob: { 1: "59" },
    permissions: {
      __cvt_9703428_128: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [{ key: "dataLayer", read: true, write: true, execute: false }],
        },
        access_consent: {
          consentTypes: [
            { consentType: "ad_storage", read: true, write: true },
            { consentType: "analytics_storage", read: true, write: true },
            { consentType: "personalization_storage", read: true, write: true },
            { consentType: "functionality_storage", read: true, write: true },
            { consentType: "security_storage", read: true, write: true },
            { consentType: "ad_user_data", read: true, write: true },
            { consentType: "ad_personalization", read: true, write: true },
          ],
        },
        write_data_layer: {
          keyPatterns: ["url_passthrough", "ads_data_redaction"],
        },
      },
      __awec: {
        detect_user_provided_data: {
          limitDataSources: true,
          allowAutoDataSources: true,
          allowManualDataSources: false,
          allowCodeDataSources: false,
        },
      },
      __baut: {
        inject_script: { urls: ["https://bat.bing.com/bat.js"] },
        access_globals: {
          keys: [
            { key: "UET_push", read: false, write: false, execute: true },
            { key: "UET_init", read: false, write: false, execute: true },
          ],
        },
      },
      __bzi: {
        access_globals: {
          keys: [
            {
              key: "_linkedin_data_partner_id",
              read: true,
              write: true,
              execute: false,
            },
          ],
        },
        inject_script: {
          urls: ["https://snap.licdn.com/li.lms-analytics/insight.min.js"],
        },
      },
      __cl: { detect_click_events: {} },
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __fsl: { detect_form_submit_events: { allowWaitForTags: true } },
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
      __paused: {},
    },

    sandboxed_scripts: ["__cvt_9703428_128"],

    security_groups: {
      google: ["__awec", "__cl", "__e", "__googtag"],
      nonGoogleScripts: ["__baut", "__bzi"],
    },
  };

  var ba,
    ca = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    da =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ea = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    fa = ea(this),
    ia = function (a, b) {
      if (b)
        a: {
          for (var c = fa, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            k = c[g],
            m = b(k);
          m != k &&
            m != null &&
            da(c, g, { configurable: !0, writable: !0, value: m });
        }
    };
  ia("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.j = f;
      da(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.j;
    };
    var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  ia("Symbol.iterator", function (a) {
    if (a) return a;
    for (
      var b = Symbol("Symbol.iterator"),
        c =
          "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
            " "
          ),
        d = 0;
      d < c.length;
      d++
    ) {
      var e = fa[c[d]];
      typeof e === "function" &&
        typeof e.prototype[b] != "function" &&
        da(e.prototype, b, {
          configurable: !0,
          writable: !0,
          value: function () {
            return ja(ca(this));
          },
        });
    }
    return b;
  });
  var ja = function (a) {
      var b = { next: a };
      b[Symbol.iterator] = function () {
        return this;
      };
      return b;
    },
    ka = function (a) {
      return (a.raw = a);
    },
    na = function (a, b) {
      a.raw = b;
      return a;
    },
    oa = function (a) {
      var b =
        typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: ca(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    pa = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    qa = function (a) {
      return a instanceof Array ? a : pa(oa(a));
    },
    ra =
      typeof Object.assign == "function"
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ia("Object.assign", function (a) {
    return a || ra;
  });
  var sa =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ta;
  if (typeof Object.setPrototypeOf == "function") ta = Object.setPrototypeOf;
  else {
    var ua;
    a: {
      var va = { a: !0 },
        wa = {};
      try {
        wa.__proto__ = va;
        ua = wa.a;
        break a;
      } catch (a) {}
      ua = !1;
    }
    ta = ua
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var xa = ta,
    za = function (a, b) {
      a.prototype = sa(b.prototype);
      a.prototype.constructor = a;
      if (xa) xa(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.bo = b.prototype;
    },
    Aa = function () {
      this.K = !1;
      this.D = null;
      this.xb = void 0;
      this.j = 1;
      this.Ca = this.O = 0;
      this.H = null;
    },
    Ba = function (a) {
      if (a.K) throw new TypeError("Generator is already running");
      a.K = !0;
    };
  Aa.prototype.W = function (a) {
    this.xb = a;
  };
  var Ca = function (a, b) {
    a.H = { Sj: b, mm: !0 };
    a.j = a.O || a.Ca;
  };
  Aa.prototype.return = function (a) {
    this.H = { return: a };
    this.j = this.Ca;
  };
  var Da = function (a, b) {
      a.j = 4;
      return { value: b };
    },
    Ea = function (a) {
      a.O = 0;
      var b = a.H.Sj;
      a.H = null;
      return b;
    },
    Ga = function (a) {
      this.j = new Aa();
      this.D = a;
    },
    Ja = function (a, b) {
      Ba(a.j);
      var c = a.j.D;
      if (c)
        return Ha(
          a,
          "return" in c
            ? c["return"]
            : function (d) {
                return { value: d, done: !0 };
              },
          b,
          a.j.return
        );
      a.j.return(b);
      return Ia(a);
    },
    Ha = function (a, b, c, d) {
      try {
        var e = b.call(a.j.D, c);
        if (!(e instanceof Object))
          throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done) return (a.j.K = !1), e;
        var f = e.value;
      } catch (g) {
        return (a.j.D = null), Ca(a.j, g), Ia(a);
      }
      a.j.D = null;
      d.call(a.j, f);
      return Ia(a);
    },
    Ia = function (a) {
      for (; a.j.j; )
        try {
          var b = a.D(a.j);
          if (b) return (a.j.K = !1), { value: b.value, done: !1 };
        } catch (d) {
          (a.j.xb = void 0), Ca(a.j, d);
        }
      a.j.K = !1;
      if (a.j.H) {
        var c = a.j.H;
        a.j.H = null;
        if (c.mm) throw c.Sj;
        return { value: c.return, done: !0 };
      }
      return { value: void 0, done: !0 };
    },
    Ka = function (a) {
      this.next = function (b) {
        var c;
        Ba(a.j);
        a.j.D ? (c = Ha(a, a.j.D.next, b, a.j.W)) : (a.j.W(b), (c = Ia(a)));
        return c;
      };
      this.throw = function (b) {
        var c;
        Ba(a.j);
        a.j.D
          ? (c = Ha(a, a.j.D["throw"], b, a.j.W))
          : (Ca(a.j, b), (c = Ia(a)));
        return c;
      };
      this.return = function (b) {
        return Ja(a, b);
      };
      this[Symbol.iterator] = function () {
        return this;
      };
    },
    La = function (a) {
      function b(d) {
        return a.next(d);
      }
      function c(d) {
        return a.throw(d);
      }
      new Promise(function (d, e) {
        function f(g) {
          g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
        }
        f(a.next());
      });
    },
    Ma = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Oa = this || self,
    Pa = function (a) {
      return a;
    };
  var Qa = function (a, b) {
    this.type = a;
    this.data = b;
  };
  var Ra = function () {
    this.j = {};
    this.H = {};
  };
  ba = Ra.prototype;
  ba.get = function (a) {
    return this.j["dust." + a];
  };
  ba.set = function (a, b) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || (this.j[a] = b);
  };
  ba.Zh = function (a, b) {
    this.set(a, b);
    this.H["dust." + a] = !0;
  };
  ba.has = function (a) {
    return this.j.hasOwnProperty("dust." + a);
  };
  ba.Hf = function (a) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || delete this.j[a];
  };
  var Ta = function () {};
  Ta.prototype.reset = function () {};
  var Ua = function (a, b) {
    this.O = a;
    this.parent = b;
    this.j = this.D = void 0;
    this.K = !1;
    this.H = function (c, d, e) {
      return c.apply(d, e);
    };
    this.values = new Ra();
  };
  Ua.prototype.add = function (a, b) {
    Va(this, a, b, !1);
  };
  var Va = function (a, b, c, d) {
    a.K || (d ? a.values.Zh(b, c) : a.values.set(b, c));
  };
  Ua.prototype.set = function (a, b) {
    this.K ||
      (!this.values.has(a) && this.parent && this.parent.has(a)
        ? this.parent.set(a, b)
        : this.values.set(a, b));
  };
  Ua.prototype.get = function (a) {
    return this.values.has(a)
      ? this.values.get(a)
      : this.parent
      ? this.parent.get(a)
      : void 0;
  };
  Ua.prototype.has = function (a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
  };
  var Wa = function (a) {
    var b = new Ua(a.O, a);
    a.D && (b.D = a.D);
    b.H = a.H;
    b.j = a.j;
    return b;
  };
  Ua.prototype.sd = function () {
    return this.O;
  };
  Ua.prototype.Ma = function () {
    this.K = !0;
  };
  function Xa(a, b) {
    for (
      var c, d = 0;
      d < b.length && !((c = Ya(a, b[d])), c instanceof Qa);
      d++
    );
    return c;
  }
  function Ya(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || typeof c.invoke !== "function")
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.invoke.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.D;
      d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
      throw e;
    }
  }
  var Za = function () {
    this.D = new Ta();
    this.j = new Ua(this.D);
  };
  ba = Za.prototype;
  ba.sd = function () {
    return this.D;
  };
  ba.execute = function (a) {
    var b = Array.prototype.slice.call(arguments, 0);
    return this.Xh(b);
  };
  ba.Xh = function () {
    for (var a, b = 0; b < arguments.length; b++) a = Ya(this.j, arguments[b]);
    return a;
  };
  ba.Xk = function (a) {
    var b = Wa(this.j);
    b.j = a;
    for (var c, d = 1; d < arguments.length; d++) c = Ya(b, arguments[d]);
    return c;
  };
  ba.Ma = function () {
    this.j.Ma();
  };
  var $a = function () {
    Ra.call(this);
    this.D = !1;
  };
  za($a, Ra);
  var ab = function (a, b) {
    var c = [],
      d;
    for (d in a.j)
      if (a.j.hasOwnProperty(d))
        switch (((d = d.substr(5)), b)) {
          case 1:
            c.push(d);
            break;
          case 2:
            c.push(a.get(d));
            break;
          case 3:
            c.push([d, a.get(d)]);
        }
    return c;
  };
  $a.prototype.set = function (a, b) {
    this.D || Ra.prototype.set.call(this, a, b);
  };
  $a.prototype.Zh = function (a, b) {
    this.D || Ra.prototype.Zh.call(this, a, b);
  };
  $a.prototype.Hf = function (a) {
    this.D || Ra.prototype.Hf.call(this, a);
  };
  $a.prototype.Ma = function () {
    this.D = !0;
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var cb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    db = function (a) {
      if (a == null) return String(a);
      var b = cb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    eb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    fb = function (a) {
      if (!a || db(a) != "object" || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !eb(a, "constructor") &&
          !eb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return b === void 0 || eb(a, b);
    },
    h = function (a, b) {
      var c = b || (db(a) == "array" ? [] : {}),
        d;
      for (d in a)
        if (eb(a, d)) {
          var e = a[d];
          db(e) == "array"
            ? (db(c[d]) != "array" && (c[d] = []), (c[d] = h(e, c[d])))
            : fb(e)
            ? (fb(c[d]) || (c[d] = {}), (c[d] = h(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  function gb(a) {
    if (a == void 0 || Array.isArray(a) || fb(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  }
  function hb(a) {
    return (
      (typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0) ||
      (typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a))
    );
  }
  var ib = function (a) {
    this.j = [];
    this.H = !1;
    this.D = new $a();
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (hb(b) ? (this.j[Number(b)] = a[Number(b)]) : this.D.set(b, a[b]));
  };
  ba = ib.prototype;
  ba.toString = function (a) {
    if (a && a.indexOf(this) >= 0) return "";
    for (var b = [], c = 0; c < this.j.length; c++) {
      var d = this.j[c];
      d === null || d === void 0
        ? b.push("")
        : d instanceof ib
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  ba.set = function (a, b) {
    if (!this.H)
      if (a === "length") {
        if (!hb(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.j.length = Number(b);
      } else hb(a) ? (this.j[Number(a)] = b) : this.D.set(a, b);
  };
  ba.get = function (a) {
    return a === "length"
      ? this.length()
      : hb(a)
      ? this.j[Number(a)]
      : this.D.get(a);
  };
  ba.length = function () {
    return this.j.length;
  };
  ba.Qb = function () {
    for (var a = ab(this.D, 1), b = 0; b < this.j.length; b++) a.push(b + "");
    return new ib(a);
  };
  var jb = function (a, b) {
    hb(b) ? delete a.j[Number(b)] : a.D.Hf(b);
  };
  ba = ib.prototype;
  ba.pop = function () {
    return this.j.pop();
  };
  ba.push = function () {
    return this.j.push.apply(this.j, Array.prototype.slice.call(arguments));
  };
  ba.shift = function () {
    return this.j.shift();
  };
  ba.splice = function (a, b) {
    return new ib(this.j.splice.apply(this.j, arguments));
  };
  ba.unshift = function () {
    return this.j.unshift.apply(this.j, Array.prototype.slice.call(arguments));
  };
  ba.has = function (a) {
    return (hb(a) && this.j.hasOwnProperty(a)) || this.D.has(a);
  };
  ba.Ma = function () {
    this.H = !0;
    Object.freeze(this.j);
    this.D.Ma();
  };
  function kb(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }
  var lb = function () {
    $a.call(this);
  };
  za(lb, $a);
  lb.prototype.Qb = function () {
    return new ib(ab(this, 1));
  };
  var mb = function (a) {
    for (var b = ab(a, 3), c = new ib(), d = 0; d < b.length; d++) {
      var e = new ib(b[d]);
      c.push(e);
    }
    return c;
  };
  function nb() {
    for (var a = ob, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function pb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var ob, qb;
  function rb(a) {
    ob = ob || pb();
    qb = qb || nb();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (k >> 6),
        q = k & 63;
      e || ((q = 64), d || (p = 64));
      b.push(ob[m], ob[n], ob[p], ob[q]);
    }
    return b.join("");
  }
  function sb(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = qb[n];
        if (p != null) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    ob = ob || pb();
    qb = qb || nb();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (k === 64 && e === -1) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      g !== 64 &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        k !== 64 && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var tb = {};
  function ub(a, b) {
    tb[a] = tb[a] || [];
    tb[a][b] = !0;
  }
  function vb(a) {
    var b = tb[a];
    if (!b || b.length === 0) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8);
    d > 0 && c.push(String.fromCharCode(d));
    return rb(c.join("")).replace(/\.+$/, "");
  }
  function wb() {
    for (var a = [], b = tb.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c);
    return a.length > 0 ? a : void 0;
  }
  var xb = [],
    yb = {};
  function zb(a) {
    return xb[a] === void 0 ? !1 : xb[a];
  }
  function Ab() {}
  function Bb(a) {
    return typeof a === "function";
  }
  function l(a) {
    return typeof a === "string";
  }
  function Cb(a) {
    return typeof a === "number" && !isNaN(a);
  }
  function Db(a) {
    return Array.isArray(a) ? a : [a];
  }
  function Eb(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
  }
  function Fb(a, b) {
    if (!Cb(a) || !Cb(b) || a > b) (a = 0), (b = 2147483647);
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function Gb(a, b) {
    for (var c = new Hb(), d = 0; d < a.length; d++) c.set(a[d], !0);
    for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
    return !1;
  }
  function z(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function Ib(a) {
    return (
      !!a &&
      (Object.prototype.toString.call(a) === "[object Arguments]" ||
        Object.prototype.hasOwnProperty.call(a, "callee"))
    );
  }
  function Jb(a) {
    return Math.round(Number(a)) || 0;
  }
  function Kb(a) {
    return "false" === String(a).toLowerCase() ? !1 : !!a;
  }
  function Lb(a) {
    var b = [];
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]));
    return b;
  }
  function Mb(a) {
    return a ? a.replace(/^\s+|\s+$/g, "") : "";
  }
  function Nb() {
    return new Date(Date.now());
  }
  function Ob() {
    return Nb().getTime();
  }
  var Hb = function () {
    this.prefix = "gtm.";
    this.values = {};
  };
  Hb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Hb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  function Pb(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c;
  }
  function Qb(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c();
        } catch (d) {}
      }
    };
  }
  function Rb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function Sb(a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c;
  }
  function Tb(a, b) {
    return a.length >= b.length && a.substring(0, b.length) === b;
  }
  function Ub(a, b) {
    return (
      a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    );
  }
  function Vb(a, b) {
    var c = G;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (b.indexOf(d) >= 0) return;
    }
    return d;
  }
  function Wb(a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
      d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c;
  }
  var Xb = /^\w{1,9}$/;
  function Yb(a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    z(a, function (d, e) {
      Xb.test(d) && e && c.push(d);
    });
    return c.join(b);
  }
  function Zb(a, b) {
    function c() {
      e && ++d === b && (e(), (e = null), (c.done = !0));
    }
    var d = 0,
      e = a;
    c.done = !1;
    return c;
  }
  function $b(a) {
    if (!a) return a;
    var b = a;
    if (zb(3))
      try {
        b = decodeURIComponent(a);
      } catch (d) {}
    var c = b.split(",");
    return c.length === 2 && c[0] === c[1] ? c[0] : a;
  }
  var ac,
    bc = function () {
      if (ac === void 0) {
        var a = null,
          b = Oa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: Pa,
              createScript: Pa,
              createScriptURL: Pa,
            });
          } catch (c) {
            Oa.console && Oa.console.error(c.message);
          }
          ac = a;
        } else ac = a;
      }
      return ac;
    };
  var cc = function (a) {
    this.j = a;
  };
  cc.prototype.toString = function () {
    return this.j + "";
  };
  var dc = function (a) {
      return a instanceof cc && a.constructor === cc
        ? a.j
        : "type_error:TrustedResourceUrl";
    },
    ec = {},
    fc = function (a) {
      var b = a,
        c = bc(),
        d = c ? c.createScriptURL(b) : b;
      return new cc(d, ec);
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var gc = ka([""]),
    hc = na(["\x00"], ["\\0"]),
    ic = na(["\n"], ["\\n"]),
    jc = na(["\x00"], ["\\u0000"]);
  function kc(a) {
    return a.toString().indexOf("`") === -1;
  }
  kc(function (a) {
    return a(gc);
  }) ||
    kc(function (a) {
      return a(hc);
    }) ||
    kc(function (a) {
      return a(ic);
    }) ||
    kc(function (a) {
      return a(jc);
    });
  var lc = function (a) {
    this.j = a;
  };
  lc.prototype.toString = function () {
    return this.j;
  };
  var mc = new lc("about:invalid#zClosurez");
  var nc = function (a) {
    this.wm = a;
  };
  function oc(a) {
    return new nc(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var pc = [
    oc("data"),
    oc("http"),
    oc("https"),
    oc("mailto"),
    oc("ftp"),
    new nc(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function qc(a, b) {
    b = b === void 0 ? pc : b;
    if (a instanceof lc) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof nc && d.wm(a)) return new lc(a);
    }
  }
  function rc(a) {
    var b;
    b = b === void 0 ? pc : b;
    return qc(a, b) || mc;
  }
  var sc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function tc(a) {
    var b;
    if (a instanceof lc)
      if (a instanceof lc) b = a.j;
      else throw Error("");
    else b = sc.test(a) ? a : void 0;
    return b;
  }
  var vc = function () {
    this.j = uc[0].toLowerCase();
  };
  vc.prototype.toString = function () {
    return this.j;
  };
  var wc = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var xc = {},
    yc = function (a) {
      this.j = a;
    };
  yc.prototype.toString = function () {
    return this.j.toString();
  };
  function zc(a, b) {
    var c = [new vc()];
    if (c.length === 0) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof vc) g = f.j;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return e.indexOf(f) !== 0;
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function Ac(a, b) {
    var c = tc(b);
    c !== void 0 && (a.action = c);
  }
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function Bc(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a;
  }
  var G = window,
    H = document,
    Cc = navigator,
    Dc = function () {
      var a;
      try {
        a = Cc.serviceWorker;
      } catch (b) {
        return;
      }
      return a;
    },
    Ec = H.currentScript,
    Fc = Ec && Ec.src,
    Gc = function (a, b) {
      var c = G[a];
      G[a] = c === void 0 ? b : c;
      return G[a];
    };
  function Hc(a) {
    return (Cc.userAgent || "").indexOf(a) !== -1;
  }
  var Ic = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Jc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Kc(a, b, c) {
    b &&
      z(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Lc = function (a, b, c, d, e) {
      var f = H.createElement("script");
      Kc(f, d, Ic);
      f.type = "text/javascript";
      f.async = d && d.async === !1 ? !1 : !0;
      var g;
      g = fc(Bc(a));
      f.src = dc(g);
      var k,
        m,
        n,
        p =
          (n = (m = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector) == null
            ? void 0
            : n.call(m, "script[nonce]");
      (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", k);
      b && (f.onload = b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = H.getElementsByTagName("script")[0] || H.body || H.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Mc = function () {
      if (Fc) {
        var a = Fc.toLowerCase();
        if (a.indexOf("https://") === 0) return 2;
        if (a.indexOf("http://") === 0) return 3;
      }
      return 1;
    },
    Nc = function (a, b, c, d, e) {
      var f;
      f = f === void 0 ? !0 : f;
      var g = e,
        k = !1;
      g || ((g = H.createElement("iframe")), (k = !0));
      Kc(g, c, Jc);
      d &&
        z(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      a !== void 0 && (g.src = a);
      if (k) {
        var m = (H.body && H.body.lastChild) || H.body || H.head;
        m.parentNode.insertBefore(g, m);
      }
      b && (g.onload = b);
      return g;
    },
    Oc = function (a, b, c, d) {
      var e = new Image(1, 1);
      Kc(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
      return e;
    },
    Pc = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Qc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    I = function (a) {
      G.setTimeout(a, 0);
    },
    Rc = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Sc = function (a) {
      function b(e) {
        e && e != " " && (e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        e && e != " " && (e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        e && (e = e.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return e;
      }
      var c = b(a.innerText || a.textContent || "");
      if (zb(10)) {
        var d = b(a.textContent || "");
        ub("TAGGING", 26);
        d !== c && ub("TAGGING", 25);
      }
      return c;
    },
    Tc = function (a) {
      var b = H.createElement("div"),
        c = b,
        d,
        e = Bc("A<div>" + a + "</div>"),
        f = bc(),
        g = f ? f.createHTML(e) : e;
      d = new yc(g, xc);
      if (c.nodeType === 1) {
        var k = c.tagName;
        if (k === "SCRIPT" || k === "STYLE") throw Error("");
      }
      c.innerHTML =
        d instanceof yc && d.constructor === yc ? d.j : "type_error:SafeHtml";
      b = b.lastChild;
      for (var m = []; b.firstChild; ) m.push(b.removeChild(b.firstChild));
      return m;
    },
    Uc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Vc = function (a) {
      var b;
      try {
        b = Cc.sendBeacon && Cc.sendBeacon(a);
      } catch (c) {
        ub("TAGGING", 15);
      }
      b || Oc(a);
    },
    Wc = function (a, b) {
      try {
        return Cc.sendBeacon(a, b);
      } catch (c) {
        ub("TAGGING", 15);
      }
      return !1;
    },
    Xc = {
      cache: "no-store",
      credentials: "include",
      keepalive: !0,
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
    },
    Zc = function (a, b, c) {
      if (Yc()) {
        var d = Object.assign({}, Xc);
        b && (d.body = b);
        c &&
          (c.attributionReporting &&
            (d.attributionReporting = c.attributionReporting),
          c.browsingTopics && (d.browsingTopics = c.browsingTopics));
        try {
          var e = G.fetch(a, d);
          e && e.catch(Ab);
          return !0;
        } catch (f) {}
      }
      if (c && c.noFallback) return !1;
      if (b) return Wc(a, b);
      Vc(a);
      return !0;
    },
    Yc = function () {
      return typeof G.fetch === "function";
    },
    $c = function (a, b) {
      var c = a[b];
      c && typeof c.animVal === "string" && (c = c.animVal);
      return c;
    },
    ad = function () {
      var a = G.performance;
      if (a && Bb(a.now)) return a.now();
    },
    bd = function () {
      return G.performance || void 0;
    };
  function cd(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function dd(a, b) {
    return this.evaluate(a) === this.evaluate(b);
  }
  function ed(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function fd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    return String(a).indexOf(String(b)) > -1;
  }
  function gd(a, b) {
    var c = String(this.evaluate(a)),
      d = String(this.evaluate(b));
    return c.substring(0, d.length) === d;
  }
  function hd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    switch (a) {
      case "pageLocation":
        var c = G.location.href;
        b instanceof lb &&
          b.get("stripProtocol") &&
          (c = c.replace(/^https?:\/\//, ""));
        return c;
    }
  }
  var id = function (a, b) {
    $a.call(this);
    this.bk = a;
    this.uh = b;
  };
  za(id, $a);
  ba = id.prototype;
  ba.toString = function () {
    return this.bk;
  };
  ba.getName = function () {
    return this.bk;
  };
  ba.Qb = function () {
    return new ib(ab(this, 1));
  };
  ba.invoke = function (a) {
    return this.uh.apply(
      new jd(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  ba.ib = function (a) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (b) {}
  };
  var jd = function (a, b) {
    this.uh = a;
    this.F = b;
  };
  jd.prototype.evaluate = function (a) {
    var b = this.F;
    return Array.isArray(a) ? Ya(b, a) : a;
  };
  jd.prototype.getName = function () {
    return this.uh.getName();
  };
  jd.prototype.sd = function () {
    return this.F.sd();
  };
  var kd = function () {
    this.map = new Map();
  };
  kd.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  kd.prototype.get = function (a) {
    return this.map.get(a);
  };
  var ld = function () {
    this.keys = [];
    this.values = [];
  };
  ld.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  ld.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (b > -1) return this.values[b];
  };
  function md() {
    try {
      return Map ? new kd() : new ld();
    } catch (a) {
      return new ld();
    }
  }
  var nd = function (a) {
    if (a instanceof nd) return a;
    if (gb(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.value = a;
  };
  nd.prototype.getValue = function () {
    return this.value;
  };
  nd.prototype.toString = function () {
    return String(this.value);
  };
  var pd = function (a) {
    $a.call(this);
    this.promise = a;
    this.set("then", od(this));
    this.set("catch", od(this, !0));
    this.set("finally", od(this, !1, !0));
  };
  za(pd, lb);
  var od = function (a, b, c) {
    b = b === void 0 ? !1 : b;
    c = c === void 0 ? !1 : c;
    return new id("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof id || (d = void 0);
      e instanceof id || (e = void 0);
      var f = Wa(this.F),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
          };
        },
        k = a.promise.then(d && g(d), e && g(e));
      return new pd(k);
    });
  };
  function J(a, b, c) {
    var d = md(),
      e = function (g, k) {
        for (var m = ab(g, 1), n = 0; n < m.length; n++)
          k[m[n]] = f(g.get(m[n]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (g instanceof ib) {
          var m = [];
          d.set(g, m);
          for (var n = g.Qb(), p = 0; p < n.length(); p++)
            m[n.get(p)] = f(g.get(n.get(p)));
          return m;
        }
        if (g instanceof pd) return g.promise;
        if (g instanceof lb) {
          var q = {};
          d.set(g, q);
          e(g, q);
          return q;
        }
        if (g instanceof id) {
          var r = function () {
            for (
              var u = Array.prototype.slice.call(arguments, 0), v = 0;
              v < u.length;
              v++
            )
              u[v] = qd(u[v], b, c);
            var w = new Ua(b ? b.sd() : new Ta());
            b && (w.j = b.j);
            return f(g.invoke.apply(g, [w].concat(u)));
          };
          d.set(g, r);
          e(g, r);
          return r;
        }
        var t = !1;
        switch (c) {
          case 1:
            t = !0;
            break;
          case 2:
            t = !1;
            break;
          case 3:
            t = !1;
            break;
          default:
        }
        if (g instanceof nd && t) return g.getValue();
        switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return g;
          case "object":
            if (g === null) return null;
        }
      };
    return f(a);
  }
  function qd(a, b, c) {
    var d = md(),
      e = function (g, k) {
        for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (Array.isArray(g) || Ib(g)) {
          var m = new ib([]);
          d.set(g, m);
          for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
          return m;
        }
        if (fb(g)) {
          var p = new lb();
          d.set(g, p);
          e(g, p);
          return p;
        }
        if (typeof g === "function") {
          var q = new id("", function () {
            for (
              var x = Array.prototype.slice.call(arguments, 0), y = 0;
              y < x.length;
              y++
            )
              x[y] = J(this.evaluate(x[y]), b, c);
            return f((0, this.F.H)(g, g, x));
          });
          d.set(g, q);
          e(g, q);
          return q;
        }
        var v = typeof g;
        if (g === null || v === "string" || v === "number" || v === "boolean")
          return g;
        var w = !1;
        switch (c) {
          case 1:
            w = !0;
            break;
          case 2:
            w = !1;
            break;
          default:
        }
        if (g !== void 0 && w) return new nd(g);
      };
    return f(a);
  }
  function rd() {
    var a = !1;
    return a;
  }
  var sd = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof ib)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            b.push(e.get(f));
        else b.push(arguments[d]);
      return new ib(b);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new ib(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = c === void 0 ? 0 : Number(c);
      e < 0 && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
      for (var f = e; f >= 0; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new ib(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (c !== void 0) e = c;
      else {
        if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var k = f; k < d; k++)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (c !== void 0) e = c;
      else {
        if (d === 0)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var k = f; k >= 0; k--)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = kb(this), b = a.length - 1, c = 0; b >= 0; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : jb(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      b === void 0 && (b = 0);
      b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
      c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new ib(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = kb(this);
      b === void 0
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : jb(this, d);
      return this;
    },
    splice: function (a, b, c) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var td = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  za(td, Error);
  var wd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    xd = new Qa("break"),
    yd = new Qa("continue");
  function zd(a, b) {
    return this.evaluate(a) + this.evaluate(b);
  }
  function Ad(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function Bd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!(c instanceof ib))
      throw Error("Error: Non-List argument given to Apply instruction.");
    if (a === null || a === void 0) {
      var d = "TypeError: Can't read property " + b + " of " + a + ".";
      if (rd()) throw new td(d);
      throw Error(d);
    }
    var e = typeof a === "number";
    if (typeof a === "boolean" || e) {
      if (b === "toString") {
        if (e && c.length()) {
          var f = J(c.get(0));
          try {
            return a.toString(f);
          } catch (y) {}
        }
        return a.toString();
      }
      var g = "TypeError: " + a + "." + b + " is not a function.";
      if (rd()) throw new td(g);
      throw Error(g);
    }
    if (typeof a === "string") {
      if (wd.hasOwnProperty(b)) {
        var k = 2;
        k = 1;
        var m = J(c, void 0, k);
        return qd(a[b].apply(a, m), this.F);
      }
      var n = "TypeError: " + b + " is not a function";
      if (rd()) throw new td(n);
      throw Error(n);
    }
    if (a instanceof ib) {
      if (a.has(b)) {
        var p = a.get(b);
        if (p instanceof id) {
          var q = kb(c);
          q.unshift(this.F);
          return p.invoke.apply(p, q);
        }
        var r = "TypeError: " + b + " is not a function";
        if (rd()) throw new td(r);
        throw Error(r);
      }
      if (sd.supportedMethods.indexOf(b) >= 0) {
        var t = kb(c);
        t.unshift(this.F);
        return sd[b].apply(a, t);
      }
    }
    if (a instanceof id || a instanceof lb) {
      if (a.has(b)) {
        var u = a.get(b);
        if (u instanceof id) {
          var v = kb(c);
          v.unshift(this.F);
          return u.invoke.apply(u, v);
        }
        var w = "TypeError: " + b + " is not a function";
        if (rd()) throw new td(w);
        throw Error(w);
      }
      if (b === "toString") return a instanceof id ? a.getName() : a.toString();
      if (b === "hasOwnProperty") return a.has.apply(a, kb(c));
    }
    if (a instanceof nd && b === "toString") return a.toString();
    var x = "TypeError: Object has no '" + b + "' property.";
    if (rd()) throw new td(x);
    throw Error(x);
  }
  function Cd(a, b) {
    a = this.evaluate(a);
    if (typeof a !== "string")
      throw Error("Invalid key name given for assignment.");
    var c = this.F;
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  }
  function Dd() {
    var a = Wa(this.F),
      b = Xa(a, Array.prototype.slice.apply(arguments));
    if (b instanceof Qa) return b;
  }
  function Ed() {
    return xd;
  }
  function Fd(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof Qa) return d;
    }
  }
  function Gd() {
    for (var a = this.F, b = 0; b < arguments.length - 1; b += 2) {
      var c = arguments[b];
      if (typeof c === "string") {
        var d = this.evaluate(arguments[b + 1]);
        Va(a, c, d, !0);
      }
    }
  }
  function Hd() {
    return yd;
  }
  function Id(a, b) {
    return new Qa(a, this.evaluate(b));
  }
  function Jd(a, b) {
    var c = new ib();
    b = this.evaluate(b);
    for (var d = 0; d < b.length; d++) c.push(b[d]);
    var e = [51, a, c].concat(
      Array.prototype.splice.call(arguments, 2, arguments.length - 2)
    );
    this.F.add(a, this.evaluate(e));
  }
  function Kd(a, b) {
    return this.evaluate(a) / this.evaluate(b);
  }
  function Ld(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    var c = a instanceof nd,
      d = b instanceof nd;
    return c || d ? (c && d ? a.getValue() === b.getValue() : !1) : a == b;
  }
  function Md() {
    for (var a, b = 0; b < arguments.length; b++)
      a = this.evaluate(arguments[b]);
    return a;
  }
  function Nd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Xa(f, d);
      if (g instanceof Qa) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
    }
  }
  function Od(a, b, c) {
    if (typeof b === "string")
      return Nd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof lb || b instanceof ib || b instanceof id) {
      var d = b.Qb(),
        e = d.length();
      return Nd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  function Pd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Od(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Qd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Od(
      function (e) {
        var f = Wa(d);
        Va(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Rd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Od(
      function (e) {
        var f = Wa(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Sd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Td(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Ud(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Td(
      function (e) {
        var f = Wa(d);
        Va(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Vd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.F;
    return Td(
      function (e) {
        var f = Wa(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Td(a, b, c) {
    if (typeof b === "string")
      return Nd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof ib)
      return Nd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (rd()) throw new td("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  function Wd(a, b, c, d) {
    function e(p, q) {
      for (var r = 0; r < f.length(); r++) {
        var t = f.get(r);
        q.add(t, p.get(t));
      }
    }
    var f = this.evaluate(a);
    if (!(f instanceof ib))
      throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.F;
    d = this.evaluate(d);
    var k = Wa(g);
    for (e(g, k); Ya(k, b); ) {
      var m = Xa(k, d);
      if (m instanceof Qa) {
        if (m.type === "break") break;
        if (m.type === "return") return m;
      }
      var n = Wa(g);
      e(k, n);
      Ya(n, c);
      k = n;
    }
  }
  function Xd(a, b) {
    var c = this.F,
      d = this.evaluate(b);
    if (!(d instanceof ib))
      throw Error("Error: non-List value given for Fn argument names.");
    var e = Array.prototype.slice.call(arguments, 2);
    return new id(
      a,
      (function () {
        return function (f) {
          var g = Wa(c);
          g.j === void 0 && (g.j = this.F.j);
          for (
            var k = Array.prototype.slice.call(arguments, 0), m = 0;
            m < k.length;
            m++
          )
            if (((k[m] = this.evaluate(k[m])), k[m] instanceof Qa)) return k[m];
          for (var n = d.get("length"), p = 0; p < n; p++)
            p < k.length ? g.add(d.get(p), k[p]) : g.add(d.get(p), void 0);
          g.add("arguments", new ib(k));
          var q = Xa(g, e);
          if (q instanceof Qa) return q.type === "return" ? q.data : q;
        };
      })()
    );
  }
  function Yd(a) {
    a = this.evaluate(a);
    var b = this.F;
    if (Zd && !b.has(a)) throw new ReferenceError(a + " is not defined.");
    return b.get(a);
  }
  function $d(a, b) {
    var c;
    a = this.evaluate(a);
    b = this.evaluate(b);
    if (a === void 0 || a === null) {
      var d =
        "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
      if (rd()) throw new td(d);
      throw Error(d);
    }
    if (a instanceof lb || a instanceof ib || a instanceof id) c = a.get(b);
    else if (typeof a === "string")
      b === "length" ? (c = a.length) : hb(b) && (c = a[b]);
    else if (a instanceof nd) return;
    return c;
  }
  function ae(a, b) {
    return this.evaluate(a) > this.evaluate(b);
  }
  function be(a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  }
  function ce(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    a instanceof nd && (a = a.getValue());
    b instanceof nd && (b = b.getValue());
    return a === b;
  }
  function de(a, b) {
    return !ce.call(this, a, b);
  }
  function ee(a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = Xa(this.F, d);
    if (e instanceof Qa) return e;
  }
  var Zd = !1;
  function fe(a, b) {
    return this.evaluate(a) < this.evaluate(b);
  }
  function ge(a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  }
  function he() {
    for (var a = new ib(), b = 0; b < arguments.length; b++) {
      var c = this.evaluate(arguments[b]);
      a.push(c);
    }
    return a;
  }
  function ie() {
    for (var a = new lb(), b = 0; b < arguments.length - 1; b += 2) {
      var c = this.evaluate(arguments[b]) + "",
        d = this.evaluate(arguments[b + 1]);
      a.set(c, d);
    }
    return a;
  }
  function je(a, b) {
    return this.evaluate(a) % this.evaluate(b);
  }
  function ke(a, b) {
    return this.evaluate(a) * this.evaluate(b);
  }
  function le(a) {
    return -this.evaluate(a);
  }
  function me(a) {
    return !this.evaluate(a);
  }
  function ne(a, b) {
    return !Ld.call(this, a, b);
  }
  function oe() {
    return null;
  }
  function pe(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function qe(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  }
  function re(a) {
    return this.evaluate(a);
  }
  function se() {
    return Array.prototype.slice.apply(arguments);
  }
  function te(a) {
    return new Qa("return", this.evaluate(a));
  }
  function ue(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (a === null || a === void 0) {
      var d = "TypeError: Can't set property " + b + " of " + a + ".";
      if (rd()) throw new td(d);
      throw Error(d);
    }
    (a instanceof id || a instanceof ib || a instanceof lb) && a.set(b, c);
    return c;
  }
  function ve(a, b) {
    return this.evaluate(a) - this.evaluate(b);
  }
  function we(a, b, c) {
    a = this.evaluate(a);
    var d = this.evaluate(b),
      e = this.evaluate(c);
    if (!Array.isArray(d) || !Array.isArray(e))
      throw Error("Error: Malformed switch instruction.");
    for (var f, g = !1, k = 0; k < d.length; k++)
      if (g || a === this.evaluate(d[k]))
        if (((f = this.evaluate(e[k])), f instanceof Qa)) {
          var m = f.type;
          if (m === "break") return;
          if (m === "return" || m === "continue") return f;
        } else g = !0;
    if (
      e.length === d.length + 1 &&
      ((f = this.evaluate(e[e.length - 1])),
      f instanceof Qa && (f.type === "return" || f.type === "continue"))
    )
      return f;
  }
  function xe(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  }
  function ye(a) {
    a = this.evaluate(a);
    return a instanceof id ? "function" : typeof a;
  }
  function ze() {
    for (var a = this.F, b = 0; b < arguments.length; b++) {
      var c = arguments[b];
      typeof c !== "string" || a.add(c, void 0);
    }
  }
  function Ae(a, b, c, d) {
    var e = this.evaluate(d);
    if (this.evaluate(c)) {
      var f = Xa(this.F, e);
      if (f instanceof Qa) {
        if (f.type === "break") return;
        if (f.type === "return") return f;
      }
    }
    for (; this.evaluate(a); ) {
      var g = Xa(this.F, e);
      if (g instanceof Qa) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
      this.evaluate(b);
    }
  }
  function Be(a) {
    return ~Number(this.evaluate(a));
  }
  function Ce(a, b) {
    return Number(this.evaluate(a)) << Number(this.evaluate(b));
  }
  function De(a, b) {
    return Number(this.evaluate(a)) >> Number(this.evaluate(b));
  }
  function Ee(a, b) {
    return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
  }
  function Fe(a, b) {
    return Number(this.evaluate(a)) & Number(this.evaluate(b));
  }
  function Ge(a, b) {
    return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
  }
  function He(a, b) {
    return Number(this.evaluate(a)) | Number(this.evaluate(b));
  }
  function Ie() {}
  function Je(a, b, c, d, e) {
    var f = !0;
    try {
      var g = this.evaluate(c);
      if (g instanceof Qa) return g;
    } catch (r) {
      if (!(r instanceof td && a)) throw ((f = r instanceof td), r);
      var k = Wa(this.F),
        m = new nd(r);
      k.add(b, m);
      var n = this.evaluate(d),
        p = Xa(k, n);
      if (p instanceof Qa) return p;
    } finally {
      if (f && e !== void 0) {
        var q = this.evaluate(e);
        if (q instanceof Qa) return q;
      }
    }
  }
  var Le = function () {
    this.j = new Za();
    Ke(this);
  };
  Le.prototype.execute = function (a) {
    return this.j.Xh(a);
  };
  var Ke = function (a) {
    var b = function (c, d) {
      var e = new id(String(c), d);
      e.Ma();
      a.j.j.set(String(c), e);
    };
    b("map", ie);
    b("and", cd);
    b("contains", fd);
    b("equals", dd);
    b("or", ed);
    b("startsWith", gd);
    b("variable", hd);
  };
  var Pe = function () {
    this.D = !1;
    this.j = new Za();
    Me(this);
    this.D = !0;
  };
  Pe.prototype.execute = function (a) {
    return Qe(this.j.Xh(a));
  };
  var Re = function (a, b, c) {
    return Qe(a.j.Xk(b, c));
  };
  Pe.prototype.Ma = function () {
    this.j.Ma();
  };
  var Me = function (a) {
    var b = function (c, d) {
      var e = String(c),
        f = new id(e, d);
      f.Ma();
      a.j.j.set(e, f);
    };
    b(0, zd);
    b(1, Ad);
    b(2, Bd);
    b(3, Cd);
    b(56, Fe);
    b(57, Ce);
    b(58, Be);
    b(59, He);
    b(60, De);
    b(61, Ee);
    b(62, Ge);
    b(53, Dd);
    b(4, Ed);
    b(5, Fd);
    b(52, Gd);
    b(6, Hd);
    b(49, Id);
    b(7, he);
    b(8, ie);
    b(9, Fd);
    b(50, Jd);
    b(10, Kd);
    b(12, Ld);
    b(13, Md);
    b(51, Xd);
    b(47, Pd);
    b(54, Qd);
    b(55, Rd);
    b(63, Wd);
    b(64, Sd);
    b(65, Ud);
    b(66, Vd);
    b(15, Yd);
    b(16, $d);
    b(17, $d);
    b(18, ae);
    b(19, be);
    b(20, ce);
    b(21, de);
    b(22, ee);
    b(23, fe);
    b(24, ge);
    b(25, je);
    b(26, ke);
    b(27, le);
    b(28, me);
    b(29, ne);
    b(45, oe);
    b(30, pe);
    b(32, qe);
    b(33, qe);
    b(34, re);
    b(35, re);
    b(46, se);
    b(36, te);
    b(43, ue);
    b(37, ve);
    b(38, we);
    b(39, xe);
    b(67, Je);
    b(40, ye);
    b(44, Ie);
    b(41, ze);
    b(42, Ae);
  };
  Pe.prototype.sd = function () {
    return this.j.sd();
  };
  function Qe(a) {
    if (
      a instanceof Qa ||
      a instanceof id ||
      a instanceof ib ||
      a instanceof lb ||
      a instanceof nd ||
      a === null ||
      a === void 0 ||
      typeof a === "string" ||
      typeof a === "number" ||
      typeof a === "boolean"
    )
      return a;
  }
  var Se = function (a) {
    this.message = a;
  };
  function Te(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return b === void 0
      ? new Se(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function Ue(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var Ve = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function We(a, b) {
    for (var c = "", d = !0; a > 7; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = "" + Te(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = "" + Te(a | b) + c);
  }
  var Xe = (function () {
    function a(b) {
      return {
        toString: function () {
          return b;
        },
      };
    }
    return {
      Bk: a("consent"),
      ki: a("convert_case_to"),
      li: a("convert_false_to"),
      mi: a("convert_null_to"),
      ni: a("convert_true_to"),
      oi: a("convert_undefined_to"),
      wn: a("debug_mode_metadata"),
      oa: a("function"),
      Wg: a("instance_name"),
      al: a("live_only"),
      bl: a("malware_disabled"),
      fl: a("metadata"),
      kl: a("original_activity_id"),
      Gn: a("original_vendor_template_id"),
      En: a("once_on_load"),
      jl: a("once_per_event"),
      xj: a("once_per_load"),
      In: a("priority_override"),
      Jn: a("respected_consent_types"),
      Fj: a("setup_tags"),
      ve: a("tag_id"),
      Lj: a("teardown_tags"),
    };
  })();
  var tf;
  var uf = [],
    vf = [],
    wf = [],
    xf = [],
    yf = [],
    zf = {},
    Af,
    Bf;
  function Cf(a) {
    Bf = Bf || a;
  }
  function Df(a) {}
  var Ef,
    Ff = [],
    Gf = [];
  function Hf(a, b) {
    var c = {};
    c[Xe.oa] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c;
  }
  function If(a, b, c) {
    try {
      return Af(Jf(a, b, c));
    } catch (d) {
      JSON.stringify(a);
    }
    return 2;
  }
  function Kf(a) {
    var b = a[Xe.oa];
    if (!b) throw Error("Error: No function name given for function call.");
    return !!zf[b];
  }
  var Jf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Lf(a[e], b, c));
      return d;
    },
    Lf = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Lf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = uf[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var k = String(g[Xe.Wg]);
            try {
              var m = Jf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Mf(m, { event: b, index: f, type: 2, name: k });
              Ef && (d = Ef.Bl(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[Lf(a[n], b, c)] = Lf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = Lf(a[q], b, c);
              Bf && (p = p || Bf.qm(r));
              d.push(r);
            }
            return Bf && p ? Bf.El(d) : d.join("");
          case "escape":
            d = Lf(a[1], b, c);
            if (Bf && Array.isArray(a[1]) && a[1][0] === "macro" && Bf.sm(a))
              return Bf.Nm(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Ye[a[t]] && (d = Ye[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!xf[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return { Tj: a[2], index: u };
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[Xe.oa] = a[1];
            var w = If(v, b, c),
              x = !!a[4];
            return x || w !== 2 ? x !== (w === 1) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Mf = function (a, b) {
      var c = a[Xe.oa],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = zf[c],
        f =
          b &&
          b.type === 2 &&
          (d == null ? void 0 : d.reportMacroDiscrepancy) &&
          e &&
          Ff.indexOf(c) !== -1,
        g = {},
        k = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          Tb(m, "vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (k[m.substring(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (b.name == null) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (q == null) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = uf[q];
                  break;
                case 1:
                  r = xf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var t = r && r[Xe.Wg];
              n = t ? String(t) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var u, v, w;
      if (f && Gf.indexOf(c) === -1) {
        Gf.push(c);
        var x = Ob();
        u = e(g);
        var y = Ob() - x,
          B = Ob();
        v = tf(c, k, b);
        w = y - (Ob() - B);
      } else if ((e && (u = e(g)), !e || f)) v = tf(c, k, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        gb(u)
          ? (Array.isArray(u)
              ? Array.isArray(v)
              : fb(u)
              ? fb(v)
              : typeof u === "function"
              ? typeof v === "function"
              : u === v) || d.reportMacroDiscrepancy(d.id, c)
          : u !== v && d.reportMacroDiscrepancy(d.id, c),
        w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? u : v;
    };
  var Nf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.permissionId = a;
    this.parameters = b;
    this.name = "PermissionError";
  };
  za(Nf, Error);
  function Of(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Of(a[c], b[c]);
    }
  }
  var Pf = function (a, b) {
    var c;
    c = Error.call(
      this,
      "Wrapped error for Dust debugging. Original error message: " + a.message
    );
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Hm = a;
    this.j = [];
    this.D = b;
  };
  za(Pf, Error);
  function Qf() {
    return function (a, b) {
      a instanceof Pf || (a = new Pf(a, Rf));
      b && a instanceof Pf && a.j.push(b);
      throw a;
    };
  }
  function Rf(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; b > 0; b--) Cb(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  function Sf(a) {
    function b(r) {
      for (var t = 0; t < r.length; t++) d[r[t]] = !0;
    }
    for (var c = [], d = [], e = Tf(a), f = 0; f < vf.length; f++) {
      var g = vf[f],
        k = Uf(g, e);
      if (k) {
        for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
        b(g.block || []);
      } else k === null && b(g.block || []);
    }
    for (var p = [], q = 0; q < xf.length; q++) c[q] && !d[q] && (p[q] = !0);
    return p;
  }
  function Uf(a, b) {
    for (var c = a["if"] || [], d = 0; d < c.length; d++) {
      var e = b(c[d]);
      if (e === 0) return !1;
      if (e === 2) return null;
    }
    for (var f = a.unless || [], g = 0; g < f.length; g++) {
      var k = b(f[g]);
      if (k === 2) return null;
      if (k === 1) return !1;
    }
    return !0;
  }
  function Tf(a) {
    var b = [];
    return function (c) {
      b[c] === void 0 && (b[c] = If(wf[c], a));
      return b[c];
    };
  }
  var Vf = {
    Bl: function (a, b) {
      b[Xe.ki] &&
        typeof a === "string" &&
        (a = b[Xe.ki] === 1 ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Xe.mi) && a === null && (a = b[Xe.mi]);
      b.hasOwnProperty(Xe.oi) && a === void 0 && (a = b[Xe.oi]);
      b.hasOwnProperty(Xe.ni) && a === !0 && (a = b[Xe.ni]);
      b.hasOwnProperty(Xe.li) && a === !1 && (a = b[Xe.li]);
      return a;
    },
  };
  var Wf = function () {
      this.j = {};
    },
    Yf = function (a, b) {
      var c = Xf.D,
        d;
      (d = c.j)[a] != null || (d[a] = []);
      c.j[a].push(function () {
        return b.apply(null, qa(Ma.apply(0, arguments)));
      });
    };
  function Zf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (k) {
          g =
            typeof k === "string"
              ? g + (": " + k)
              : k instanceof Error
              ? g + (": " + k.message)
              : g + ".";
        }
        if (!f) throw new Nf(c, d, g);
      }
  }
  function $f(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.j[d],
          f = a.j.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Zf(e, b, d, g);
          Zf(f, b, d, g);
        }
      }
    };
  }
  var dg = function () {
      var a = data.permissions || {},
        b = ag.ctid,
        c = this;
      this.j = {};
      this.D = new Wf();
      var d = {},
        e = {},
        f = $f(this.D, b, function () {
          var g = arguments[0];
          return g && d[g]
            ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      z(a, function (g, k) {
        function m(p) {
          var q = Ma.apply(1, arguments);
          if (!n[p])
            throw bg(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(qa(q)));
        }
        var n = {};
        z(k, function (p, q) {
          var r = cg(p, q);
          n[p] = r.assert;
          d[p] || (d[p] = r.N);
          r.Oj && !e[p] && (e[p] = r.Oj);
        });
        c.j[g] = function (p, q) {
          var r = n[p];
          if (!r)
            throw bg(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var t = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, t);
          f.apply(void 0, t);
          var u = e[p];
          u && u.apply(null, [m].concat(qa(t.slice(1))));
        };
      });
    },
    eg = function (a) {
      return Xf.j[a] || function () {};
    };
  function cg(a, b) {
    var c = Hf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = bg;
    try {
      return Mf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Nf(e, {}, "Permission " + e + " is unknown.");
        },
        N: function () {
          throw new Nf(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function bg(a, b, c) {
    return new Nf(a, b, c);
  }
  var fg = !1;
  var gg = {};
  gg.tk = Kb("");
  gg.Hl = Kb("");
  var mg = {},
    ng =
      ((mg.uaa = !0),
      (mg.uab = !0),
      (mg.uafvl = !0),
      (mg.uamb = !0),
      (mg.uam = !0),
      (mg.uap = !0),
      (mg.uapv = !0),
      (mg.uaw = !0),
      mg);
  var vg = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!tg.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = f !== -1 && f === e.length - 2,
          k = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (d.length === 0) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!ug.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || k.length > d.length || (!g && d.length !== e.length)
            ? 0
            : g
            ? Tb(d, k) && (d === k || d.charAt(k.length) === ".")
            : d === k
        )
          return !0;
      }
      return !1;
    },
    ug = /^[a-z$_][\w$]*$/i,
    tg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
  var wg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function xg(a, b) {
    var c = String(a),
      d = String(b),
      e = c.length - d.length;
    return e >= 0 && c.indexOf(d, e) === e;
  }
  var yg = new Hb();
  function zg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + String(d),
        f = yg.get(e);
      f || ((f = new RegExp(b, d)), yg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function Ag(a, b) {
    return String(a).indexOf(String(b)) >= 0;
  }
  function Bg(a, b) {
    return String(a) === String(b);
  }
  function Cg(a, b) {
    return Number(a) >= Number(b);
  }
  function Dg(a, b) {
    return Number(a) <= Number(b);
  }
  function Eg(a, b) {
    return Number(a) > Number(b);
  }
  function Fg(a, b) {
    return Number(a) < Number(b);
  }
  function Gg(a, b) {
    return Tb(String(a), String(b));
  }
  var Hg = function (a, b) {
      return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
    },
    Ig = function (a, b) {
      var c = b.charAt(b.length - 1) === "*" || b === "/" || b === "/*";
      Hg(b, "/*") && (b = b.slice(0, -2));
      Hg(b, "?") && (b = b.slice(0, -1));
      var d = b.split("*");
      if (!c && d.length === 1) return a === d[0];
      for (var e = -1, f = 0; f < d.length; f++) {
        var g = d[f];
        if (g) {
          e = a.indexOf(g, e);
          if (e === -1 || (f === 0 && e !== 0)) return !1;
          e += g.length;
        }
      }
      if (c || e === a.length) return !0;
      var k = d[d.length - 1];
      return a.lastIndexOf(k) === a.length - k.length;
    },
    Jg = function (a) {
      return a.protocol === "https:" && (!a.port || a.port === "443");
    },
    Mg = function (a, b) {
      var c;
      if (!(c = !Jg(a))) {
        var d;
        a: {
          var e = a.hostname.split(".");
          if (e.length < 2) d = !1;
          else {
            for (var f = 0; f < e.length; f++)
              if (!Kg.exec(e[f])) {
                d = !1;
                break a;
              }
            d = !0;
          }
        }
        c = !d;
      }
      if (c) return !1;
      for (var g = 0; g < b.length; g++) {
        var k;
        var m = a,
          n = b[g];
        if (!Lg.exec(n)) throw Error("Invalid Wildcard");
        var p = n.slice(8),
          q = p.slice(0, p.indexOf("/")),
          r;
        var t = m.hostname,
          u = q;
        if (u.indexOf("*.") !== 0) r = t.toLowerCase() === u.toLowerCase();
        else {
          u = u.slice(2);
          var v = t.toLowerCase().indexOf(u.toLowerCase());
          r =
            v === -1
              ? !1
              : t.length === u.length
              ? !0
              : t.length !== u.length + v
              ? !1
              : t[v - 1] === ".";
        }
        if (r) {
          var w = p.slice(p.indexOf("/"));
          k = Ig(m.pathname + m.search, w) ? !0 : !1;
        } else k = !1;
        if (k) return !0;
      }
      return !1;
    },
    Kg = /^[a-z0-9-]+$/i,
    Lg = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i;
  var Ng =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Og = { Fn: "function", PixieMap: "Object", List: "Array" };
  function K(a, b, c) {
    for (var d = 0; d < b.length; d++) {
      var e = Ng.exec(b[d]);
      if (!e) throw Error("Internal Error in " + a);
      var f = e[1],
        g = e[2] === "!",
        k = e[3],
        m = c[d];
      if (m == null) {
        if (g)
          throw Error(
            "Error in " + a + ". Required argument " + f + " not supplied."
          );
      } else if (k !== "*") {
        var n = typeof m;
        m instanceof id
          ? (n = "Fn")
          : m instanceof ib
          ? (n = "List")
          : m instanceof lb
          ? (n = "PixieMap")
          : m instanceof nd && (n = "OpaqueValue");
        if (n !== k)
          throw Error(
            "Error in " +
              a +
              ". Argument " +
              f +
              " has type " +
              ((Og[n] || n) + ", which does not match required type ") +
              ((Og[k] || k) + ".")
          );
      }
    }
  }
  function Pg(a) {
    return "" + a;
  }
  function Qg(a, b) {
    var c = [];
    return c;
  }
  function Rg(a, b) {
    var c = new id(a, function () {
      for (
        var d = Array.prototype.slice.call(arguments, 0), e = 0;
        e < d.length;
        e++
      )
        d[e] = this.evaluate(d[e]);
      try {
        return b.apply(this, d);
      } catch (g) {
        if (rd()) throw new td(g.message);
        throw g;
      }
    });
    c.Ma();
    return c;
  }
  function Sg(a, b) {
    var c = new lb(),
      d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        Bb(e)
          ? c.set(d, Rg(a + "_" + d, e))
          : fb(e)
          ? c.set(d, Sg(a + "_" + d, e))
          : (Cb(e) || l(e) || typeof e === "boolean") && c.set(d, e);
      }
    c.Ma();
    return c;
  }
  function Tg(a, b) {
    K(this.getName(), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new lb();
    return (d = Sg("AssertApiSubject", c));
  }
  function Ug(a, b) {
    K(this.getName(), ["actual:?*", "message:?string"], arguments);
    if (a instanceof pd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new lb();
    return (d = Sg("AssertThatSubject", c));
  }
  function Vg(a) {
    return function () {
      for (var b = [], c = this.F, d = 0; d < arguments.length; ++d)
        b.push(J(arguments[d], c));
      return qd(a.apply(null, b));
    };
  }
  function Wg() {
    for (var a = Math, b = Xg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Vg(a[e].bind(a)));
    }
    return c;
  }
  function Yg(a) {
    var b;
    return b;
  }
  function Zg(a) {
    var b;
    return b;
  }
  function $g(a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  }
  function ah(a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  }
  function fh(a) {
    K(this.getName(), ["message:?string"], arguments);
  }
  function gh(a, b) {
    K(this.getName(), ["min:!number", "max:!number"], arguments);
    return Fb(a, b);
  }
  function hh() {
    return new Date().getTime();
  }
  function ih(a) {
    if (a === null) return "null";
    if (a instanceof ib) return "array";
    if (a instanceof id) return "function";
    if (a instanceof nd) {
      var b;
      a = (b = a) == null ? void 0 : b.getValue();
      var c;
      if (
        ((c = a) == null ? void 0 : c.constructor) === void 0 ||
        a.constructor.name === void 0
      ) {
        var d = String(a);
        return d.substring(8, d.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  }
  function jh(a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (fg || gg.tk) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return qd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(J(c));
      }),
    };
  }
  function kh(a) {
    return Jb(J(a, this.F));
  }
  function lh(a) {
    return Number(J(a, this.F));
  }
  function mh(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a.toString();
  }
  function nh(a, b, c) {
    var d = null,
      e = !1;
    K(
      this.getName(),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new lb();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof lb &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  }
  var Xg = "floor ceil round max min abs pow sqrt".split(" ");
  function oh() {
    var a = {};
    return {
      Rl: function (b) {
        return a.hasOwnProperty(b) ? a[b] : void 0;
      },
      qk: function (b, c) {
        a[b] = c;
      },
      reset: function () {
        a = {};
      },
    };
  }
  function ph(a, b) {
    return function () {
      var c = Array.prototype.slice.call(Ma.apply(0, arguments), 0);
      c.unshift(b);
      return id.prototype.invoke.apply(a, c);
    };
  }
  function qh(a, b) {
    K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
  }
  function rh(a, b) {
    K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
  }
  var sh = {};
  var th = function (a) {
    var b = new lb();
    if (a instanceof ib)
      for (var c = a.Qb(), d = 0; d < c.length(); d++) {
        var e = c.get(d);
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof id)
      for (var f = ab(a, 1), g = 0; g < f.length; g++) {
        var k = f[g];
        b.set(k, a.get(k));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  sh.keys = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof ib || a instanceof id || typeof a === "string") a = th(a);
    if (a instanceof lb) return a.Qb();
    return new ib();
  };
  sh.values = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof ib || a instanceof id || typeof a === "string") a = th(a);
    if (a instanceof lb) return new ib(ab(a, 2));
    return new ib();
  };
  sh.entries = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof ib || a instanceof id || typeof a === "string") a = th(a);
    if (a instanceof lb) return mb(a);
    return new ib();
  };
  sh.freeze = function (a) {
    (a instanceof lb || a instanceof ib || a instanceof id) && a.Ma();
    return a;
  };
  sh.delete = function (a, b) {
    if (a instanceof lb && !a.D) return a.Hf(b), !0;
    return !1;
  };
  function N(a, b) {
    var c = Ma.apply(2, arguments),
      d = a.F.j;
    if (!d) throw Error("Missing program state.");
    if (d.Tm) {
      try {
        d.Pj.apply(null, [b].concat(qa(c)));
      } catch (e) {
        throw (ub("TAGGING", 21), e);
      }
      return;
    }
    d.Pj.apply(null, [b].concat(qa(c)));
  }
  var uh = function () {
    this.j = {};
    this.D = {};
    this.H = !0;
  };
  uh.prototype.get = function (a, b) {
    var c = this.j.hasOwnProperty(a) ? this.j[a] : void 0;
    return c;
  };
  uh.prototype.add = function (a, b, c) {
    if (this.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add a function which already exists: " + a + "."
      );
    if (this.D.hasOwnProperty(a))
      throw Error(
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.j[a] = c ? void 0 : Bb(b) ? Rg(a, b) : Sg(a, b);
  };
  function vh(a, b) {
    var c = void 0;
    return c;
  }
  function wh() {
    var a = {};
    return a;
  }
  function xh(a) {
    return yh ? H.querySelectorAll(a) : null;
  }
  function zh(a, b) {
    if (!yh) return null;
    if (Element.prototype.closest)
      try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a;
    if (!H.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (d !== null && d.nodeType === 1);
    return null;
  }
  var Ah = !1;
  if (H.querySelectorAll)
    try {
      var Bh = H.querySelectorAll(":root");
      Bh && Bh.length == 1 && Bh[0] == H.documentElement && (Ah = !0);
    } catch (a) {}
  var yh = Ah;
  var Ch = /^[0-9A-Fa-f]{64}$/;
  function Dh(a) {
    try {
      return new TextEncoder().encode(a);
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        d < 128
          ? b.push(d)
          : d < 2048
          ? b.push(192 | (d >> 6), 128 | (d & 63))
          : d < 55296 || d >= 57344
          ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
          : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
            b.push(
              240 | (d >> 18),
              128 | ((d >> 12) & 63),
              128 | ((d >> 6) & 63),
              128 | (d & 63)
            ));
      }
      return new Uint8Array(b);
    }
  }
  function Eh(a) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    var b;
    if ((b = G.crypto) == null ? 0 : b.subtle) {
      if (Ch.test(a)) return Promise.resolve(a);
      try {
        var c = Dh(a);
        return G.crypto.subtle
          .digest("SHA-256", c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f);
              })
              .join("");
            return G.btoa(e)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          })
          .catch(function () {
            return "e2";
          });
      } catch (d) {
        return Promise.resolve("e2");
      }
    } else return Promise.resolve("e1");
  }
  function O(a) {
    ub("GTM", a);
  }
  var Ih = function (a) {
      var b = {},
        c = ["tv.1"],
        d = 0;
      for (var e = oa(a), f = e.next(); !f.done; f = e.next()) {
        var g = f.value;
        if (g.value !== "") {
          var k,
            m = void 0,
            n = g.name,
            p = g.value,
            q = Fh[n];
          if (q) {
            var r = (m = g.index) != null ? m : "",
              t = q + "__" + d;
            Gh.indexOf(n) === -1 || /^e\d+$/.test(p) || Hh.test(p) || Ch.test(p)
              ? (k = encodeURIComponent(encodeURIComponent(p)))
              : ((k = "${userData." + t + "|sha256}"), (b[t] = p), d++);
            c.push("" + q + r + "." + k);
          }
        }
      }
      var u = c.join("~");
      return { ai: { userData: b }, kn: u, sn: d };
    },
    Kh = function (a) {
      if (G.Promise)
        try {
          return new Promise(function (b) {
            Jh(a, function (c, d) {
              b({ dk: c, We: d });
            });
          });
        } catch (b) {}
    },
    Lh = function (a) {
      for (var b = ["tv.1"], c = 0, d = 0; d < a.length; ++d) {
        var e = a[d].name,
          f = a[d].value,
          g = a[d].index,
          k = Fh[e];
        k &&
          f &&
          (Gh.indexOf(e) === -1 ||
            /^e\d+$/.test(f) ||
            Hh.test(f) ||
            Ch.test(f)) &&
          (g !== void 0 && (k += g), b.push(k + "." + f), c++);
      }
      a.length === 1 && a[0].name === "error_code" && (c = 0);
      return { ek: encodeURIComponent(b.join("~")), We: c };
    },
    Jh = function (a, b) {
      Mh(a, function (c) {
        var d = Lh(c);
        b(d.ek, d.We);
      });
    },
    Uh = function (a) {
      function b(r, t, u, v) {
        var w = Nh(r);
        w !== "" &&
          (Ch.test(w)
            ? k.push({ name: t, value: w, index: v })
            : k.push({ name: t, value: u(w), index: v }));
      }
      function c(r, t) {
        var u = r;
        if (l(u) || Array.isArray(u)) {
          u = Db(r);
          for (var v = 0; v < u.length; ++v) {
            var w = Nh(u[v]),
              x = Ch.test(w);
            t && !x && O(89);
            !t && x && O(88);
          }
        }
      }
      function d(r, t) {
        var u = r[t];
        c(u, !1);
        var v = Oh[t];
        r[v] && (r[t] && O(90), (u = r[v]), c(u, !0));
        return u;
      }
      function e(r, t, u) {
        for (var v = Db(d(r, t)), w = 0; w < v.length; ++w) b(v[w], t, u);
      }
      function f(r, t, u, v) {
        var w = d(r, t);
        b(w, t, u, v);
      }
      function g(r) {
        return function (t) {
          O(64);
          return r(t);
        };
      }
      var k = [];
      if (G.location.protocol !== "https:")
        return k.push({ name: "error_code", value: "e3", index: void 0 }), k;
      e(a, "email", Ph);
      e(a, "phone_number", Qh);
      e(a, "first_name", g(Rh));
      e(a, "last_name", g(Rh));
      var m = a.home_address || {};
      e(m, "street", g(Sh));
      e(m, "city", g(Sh));
      e(m, "postal_code", g(Th));
      e(m, "region", g(Sh));
      e(m, "country", g(Th));
      for (var n = Db(a.address || {}), p = 0; p < n.length; p++) {
        var q = n[p];
        f(q, "first_name", Rh, p);
        f(q, "last_name", Rh, p);
        f(q, "street", Sh, p);
        f(q, "city", Sh, p);
        f(q, "postal_code", Th, p);
        f(q, "region", Sh, p);
        f(q, "country", Th, p);
      }
      return k;
    },
    Mh = function (a, b) {
      var c = Uh(a);
      Vh(c, b);
    },
    Nh = function (a) {
      return a == null ? "" : l(a) ? Mb(String(a)) : "e0";
    },
    Th = function (a) {
      return a.replace(Wh, "");
    },
    Rh = function (a) {
      return Sh(a.replace(/\s/g, ""));
    },
    Sh = function (a) {
      return Mb(a.replace(Xh, "").toLowerCase());
    },
    Qh = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      a.charAt(0) !== "+" && (a = "+" + a);
      return Yh.test(a) ? a : "e0";
    },
    Ph = function (a) {
      var b = a.toLowerCase().split("@");
      if (b.length === 2) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Zh.test(c)) return c;
      }
      return "e0";
    },
    Vh = function (a, b) {
      a.some(function (c) {
        c.value && Gh.indexOf(c.name);
      })
        ? b(a)
        : G.Promise
        ? Promise.all(
            a.map(function (c) {
              return c.value && Gh.indexOf(c.name) !== -1
                ? Eh(c.value).then(function (d) {
                    c.value = d;
                  })
                : Promise.resolve();
            })
          )
            .then(function () {
              b(a);
            })
            .catch(function () {
              b([]);
            })
        : b([]);
    },
    Xh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Zh = /^\S+@\S+\.\S+$/,
    Yh = /^\+\d{10,15}$/,
    Wh = /[.~]/g,
    Hh = /^[0-9A-Za-z_-]{43}$/,
    $h = {},
    Fh =
      (($h.email = "em"),
      ($h.phone_number = "pn"),
      ($h.first_name = "fn"),
      ($h.last_name = "ln"),
      ($h.street = "sa"),
      ($h.city = "ct"),
      ($h.region = "rg"),
      ($h.country = "co"),
      ($h.postal_code = "pc"),
      ($h.error_code = "ec"),
      $h),
    ai = {},
    Oh =
      ((ai.email = "sha256_email_address"),
      (ai.phone_number = "sha256_phone_number"),
      (ai.first_name = "sha256_first_name"),
      (ai.last_name = "sha256_last_name"),
      (ai.street = "sha256_street"),
      ai),
    Gh = Object.freeze([
      "email",
      "phone_number",
      "first_name",
      "last_name",
      "street",
    ]);
  var P = {
      g: {
        ya: "ad_personalization",
        R: "ad_storage",
        P: "ad_user_data",
        U: "analytics_storage",
        Fb: "region",
        Tb: "consent_updated",
        cf: "wait_for_update",
        si: "app_remove",
        ui: "app_store_refund",
        vi: "app_store_subscription_cancel",
        wi: "app_store_subscription_convert",
        xi: "app_store_subscription_renew",
        Ek: "consent_update",
        hg: "add_payment_info",
        ig: "add_shipping_info",
        oc: "add_to_cart",
        qc: "remove_from_cart",
        jg: "view_cart",
        Ub: "begin_checkout",
        rc: "select_item",
        kb: "view_item_list",
        Gb: "select_promotion",
        lb: "view_promotion",
        Ja: "purchase",
        sc: "refund",
        Oa: "view_item",
        kg: "add_to_wishlist",
        Fk: "exception",
        yi: "first_open",
        zi: "first_visit",
        ba: "gtag.config",
        Ua: "gtag.get",
        Ai: "in_app_purchase",
        Vb: "page_view",
        Gk: "screen_view",
        Bi: "session_start",
        Hk: "timing_complete",
        Ik: "track_social",
        Nc: "user_engagement",
        Jk: "user_id_update",
        nb: "gclgb",
        Va: "gclid",
        Ci: "gclgs",
        Di: "gclst",
        fa: "ads_data_redaction",
        Ei: "gad_source",
        Fi: "gad_source_src",
        Gd: "gclid_url",
        Gi: "gclsrc",
        lg: "gbraid",
        df: "wbraid",
        ka: "allow_ad_personalization_signals",
        ef: "allow_custom_scripts",
        Hd: "allow_direct_google_requests",
        ff: "allow_display_features",
        Id: "allow_enhanced_conversions",
        ob: "allow_google_signals",
        Ea: "allow_interest_groups",
        Kk: "app_id",
        Lk: "app_installer_id",
        Mk: "app_name",
        Nk: "app_version",
        Hb: "auid",
        Hi: "auto_detection_enabled",
        Wb: "aw_remarketing",
        hf: "aw_remarketing_only",
        Jd: "discount",
        Kd: "aw_feed_country",
        Ld: "aw_feed_language",
        da: "items",
        Md: "aw_merchant_id",
        mg: "aw_basket_type",
        Oc: "campaign_content",
        Pc: "campaign_id",
        Qc: "campaign_medium",
        Rc: "campaign_name",
        Sc: "campaign",
        Tc: "campaign_source",
        Uc: "campaign_term",
        pb: "client_id",
        Ii: "rnd",
        ng: "consent_update_type",
        Ji: "content_group",
        Ki: "content_type",
        Za: "conversion_cookie_prefix",
        Vc: "conversion_id",
        ra: "conversion_linker",
        Li: "conversion_linker_disabled",
        Xb: "conversion_api",
        jf: "cookie_deprecation",
        Wa: "cookie_domain",
        Pa: "cookie_expires",
        ab: "cookie_flags",
        uc: "cookie_name",
        Ib: "cookie_path",
        Qa: "cookie_prefix",
        vc: "cookie_update",
        wc: "country",
        za: "currency",
        Nd: "customer_lifetime_value",
        Wc: "custom_map",
        og: "gcldc",
        Od: "dclid",
        Mi: "debug_mode",
        la: "developer_id",
        Ni: "disable_merchant_reported_purchases",
        Xc: "dc_custom_params",
        Oi: "dc_natural_search",
        pg: "dynamic_event_settings",
        qg: "affiliation",
        Pd: "checkout_option",
        kf: "checkout_step",
        rg: "coupon",
        Yc: "item_list_name",
        lf: "list_name",
        Pi: "promotions",
        Zc: "shipping",
        nf: "tax",
        Qd: "engagement_time_msec",
        Rd: "enhanced_client_id",
        Sd: "enhanced_conversions",
        sg: "enhanced_conversions_automatic_settings",
        Td: "estimated_delivery_date",
        pf: "euid_logged_in_state",
        bd: "event_callback",
        Ok: "event_category",
        rb: "event_developer_id_string",
        Pk: "event_label",
        xc: "event",
        Ud: "event_settings",
        Vd: "event_timeout",
        Qk: "description",
        Rk: "fatal",
        Qi: "experiments",
        qf: "firebase_id",
        yc: "first_party_collection",
        Wd: "_x_20",
        sb: "_x_19",
        Ri: "fledge_drop_reason",
        ug: "fledge",
        vg: "flight_error_code",
        wg: "flight_error_message",
        Si: "fl_activity_category",
        Ti: "fl_activity_group",
        xg: "fl_advertiser_id",
        Ui: "fl_ar_dedupe",
        yg: "match_id",
        Vi: "fl_random_number",
        Wi: "tran",
        Xi: "u",
        Xd: "gac_gclid",
        zc: "gac_wbraid",
        zg: "gac_wbraid_multiple_conversions",
        Ag: "ga_restrict_domain",
        Bg: "ga_temp_client_id",
        Ac: "gdpr_applies",
        Cg: "geo_granularity",
        Jb: "value_callback",
        tb: "value_key",
        Bc: "_google_ng",
        Yb: "google_signals",
        Dg: "google_tld",
        Yd: "groups",
        Eg: "gsa_experiment_id",
        Yi: "gtm_up",
        Kb: "iframe_state",
        dd: "ignore_referrer",
        rf: "internal_traffic_results",
        Zb: "is_legacy_converted",
        Lb: "is_legacy_loaded",
        Zd: "is_passthrough",
        ed: "_lps",
        Ra: "language",
        ae: "legacy_developer_id_string",
        sa: "linker",
        Cc: "accept_incoming",
        vb: "decorate_forms",
        X: "domains",
        Mb: "url_position",
        Fg: "method",
        Sk: "name",
        fd: "new_customer",
        Gg: "non_interaction",
        Zi: "optimize_id",
        aj: "page_hostname",
        gd: "page_path",
        Fa: "page_referrer",
        cb: "page_title",
        Hg: "passengers",
        Ig: "phone_conversion_callback",
        bj: "phone_conversion_country_code",
        Jg: "phone_conversion_css_class",
        cj: "phone_conversion_ids",
        Kg: "phone_conversion_number",
        Lg: "phone_conversion_options",
        Mg: "_protected_audience_enabled",
        hd: "quantity",
        be: "redact_device_info",
        tf: "referral_exclusion_definition",
        ac: "restricted_data_processing",
        dj: "retoken",
        Tk: "sample_rate",
        uf: "screen_name",
        Nb: "screen_resolution",
        ej: "search_term",
        Ka: "send_page_view",
        bc: "send_to",
        jd: "server_container_url",
        kd: "session_duration",
        de: "session_engaged",
        vf: "session_engaged_time",
        wb: "session_id",
        ee: "session_number",
        wf: "_shared_user_id",
        ld: "delivery_postal_code",
        Uk: "temporary_client_id",
        xf: "topmost_url",
        fj: "tracking_id",
        yf: "traffic_type",
        Aa: "transaction_id",
        Ob: "transport_url",
        Ng: "trip_type",
        fc: "update",
        Xa: "url_passthrough",
        zf: "_user_agent_architecture",
        Af: "_user_agent_bitness",
        Bf: "_user_agent_full_version_list",
        Cf: "_user_agent_mobile",
        Df: "_user_agent_model",
        Ef: "_user_agent_platform",
        Ff: "_user_agent_platform_version",
        Gf: "_user_agent_wow64",
        Ga: "user_data",
        Og: "user_data_auto_latency",
        Pg: "user_data_auto_meta",
        Qg: "user_data_auto_multi",
        Rg: "user_data_auto_selectors",
        Sg: "user_data_auto_status",
        md: "user_data_mode",
        fe: "user_data_settings",
        Ba: "user_id",
        eb: "user_properties",
        gj: "_user_region",
        he: "us_privacy_string",
        na: "value",
        Tg: "wbraid_multiple_conversions",
        ke: "_fpm_parameters",
        pj: "_host_name",
        qj: "_in_page_command",
        rj: "_is_passthrough_cid",
        Pb: "non_personalized_ads",
        te: "_sst_parameters",
        qb: "conversion_label",
        wa: "page_location",
        ub: "global_developer_id_string",
        Dc: "tc_privacy_string",
      },
    },
    bi = {},
    ci = Object.freeze(
      ((bi[P.g.ka] = 1),
      (bi[P.g.ff] = 1),
      (bi[P.g.Id] = 1),
      (bi[P.g.ob] = 1),
      (bi[P.g.da] = 1),
      (bi[P.g.Wa] = 1),
      (bi[P.g.Pa] = 1),
      (bi[P.g.ab] = 1),
      (bi[P.g.uc] = 1),
      (bi[P.g.Ib] = 1),
      (bi[P.g.Qa] = 1),
      (bi[P.g.vc] = 1),
      (bi[P.g.Wc] = 1),
      (bi[P.g.la] = 1),
      (bi[P.g.pg] = 1),
      (bi[P.g.bd] = 1),
      (bi[P.g.Ud] = 1),
      (bi[P.g.Vd] = 1),
      (bi[P.g.yc] = 1),
      (bi[P.g.Ag] = 1),
      (bi[P.g.Yb] = 1),
      (bi[P.g.Dg] = 1),
      (bi[P.g.Yd] = 1),
      (bi[P.g.rf] = 1),
      (bi[P.g.Zb] = 1),
      (bi[P.g.Lb] = 1),
      (bi[P.g.sa] = 1),
      (bi[P.g.tf] = 1),
      (bi[P.g.ac] = 1),
      (bi[P.g.Ka] = 1),
      (bi[P.g.bc] = 1),
      (bi[P.g.jd] = 1),
      (bi[P.g.kd] = 1),
      (bi[P.g.vf] = 1),
      (bi[P.g.ld] = 1),
      (bi[P.g.Ob] = 1),
      (bi[P.g.fc] = 1),
      (bi[P.g.fe] = 1),
      (bi[P.g.eb] = 1),
      (bi[P.g.te] = 1),
      bi)
    );
  Object.freeze([
    P.g.wa,
    P.g.Fa,
    P.g.cb,
    P.g.Ra,
    P.g.uf,
    P.g.Ba,
    P.g.qf,
    P.g.Ji,
  ]);
  var di = {},
    ei = Object.freeze(
      ((di[P.g.si] = 1),
      (di[P.g.ui] = 1),
      (di[P.g.vi] = 1),
      (di[P.g.wi] = 1),
      (di[P.g.xi] = 1),
      (di[P.g.yi] = 1),
      (di[P.g.zi] = 1),
      (di[P.g.Ai] = 1),
      (di[P.g.Bi] = 1),
      (di[P.g.Nc] = 1),
      di)
    ),
    fi = {},
    gi = Object.freeze(
      ((fi[P.g.hg] = 1),
      (fi[P.g.ig] = 1),
      (fi[P.g.oc] = 1),
      (fi[P.g.qc] = 1),
      (fi[P.g.jg] = 1),
      (fi[P.g.Ub] = 1),
      (fi[P.g.rc] = 1),
      (fi[P.g.kb] = 1),
      (fi[P.g.Gb] = 1),
      (fi[P.g.lb] = 1),
      (fi[P.g.Ja] = 1),
      (fi[P.g.sc] = 1),
      (fi[P.g.Oa] = 1),
      (fi[P.g.kg] = 1),
      fi)
    ),
    hi = Object.freeze([
      P.g.ka,
      P.g.Hd,
      P.g.ob,
      P.g.vc,
      P.g.yc,
      P.g.dd,
      P.g.Ka,
      P.g.fc,
    ]),
    ii = Object.freeze([].concat(qa(hi))),
    ji = Object.freeze([P.g.Pa, P.g.Vd, P.g.kd, P.g.vf, P.g.Qd]),
    ki = Object.freeze([].concat(qa(ji))),
    li = {},
    mi =
      ((li[P.g.R] = "1"),
      (li[P.g.U] = "2"),
      (li[P.g.P] = "3"),
      (li[P.g.ya] = "4"),
      li),
    ni = {},
    oi = Object.freeze(
      ((ni[P.g.ka] = 1),
      (ni[P.g.Hd] = 1),
      (ni[P.g.Id] = 1),
      (ni[P.g.Ea] = 1),
      (ni[P.g.Wb] = 1),
      (ni[P.g.hf] = 1),
      (ni[P.g.Jd] = 1),
      (ni[P.g.Kd] = 1),
      (ni[P.g.Ld] = 1),
      (ni[P.g.da] = 1),
      (ni[P.g.Md] = 1),
      (ni[P.g.Za] = 1),
      (ni[P.g.ra] = 1),
      (ni[P.g.Wa] = 1),
      (ni[P.g.Pa] = 1),
      (ni[P.g.ab] = 1),
      (ni[P.g.Qa] = 1),
      (ni[P.g.za] = 1),
      (ni[P.g.Nd] = 1),
      (ni[P.g.la] = 1),
      (ni[P.g.Ni] = 1),
      (ni[P.g.Sd] = 1),
      (ni[P.g.Td] = 1),
      (ni[P.g.qf] = 1),
      (ni[P.g.yc] = 1),
      (ni[P.g.Zb] = 1),
      (ni[P.g.Lb] = 1),
      (ni[P.g.Ra] = 1),
      (ni[P.g.fd] = 1),
      (ni[P.g.wa] = 1),
      (ni[P.g.Fa] = 1),
      (ni[P.g.Ig] = 1),
      (ni[P.g.Jg] = 1),
      (ni[P.g.Kg] = 1),
      (ni[P.g.Lg] = 1),
      (ni[P.g.ac] = 1),
      (ni[P.g.Ka] = 1),
      (ni[P.g.bc] = 1),
      (ni[P.g.jd] = 1),
      (ni[P.g.ld] = 1),
      (ni[P.g.Aa] = 1),
      (ni[P.g.Ob] = 1),
      (ni[P.g.fc] = 1),
      (ni[P.g.Xa] = 1),
      (ni[P.g.Ga] = 1),
      (ni[P.g.Ba] = 1),
      (ni[P.g.na] = 1),
      ni)
    ),
    pi = {},
    qi = Object.freeze(
      ((pi.search = "s"),
      (pi.youtube = "y"),
      (pi.playstore = "p"),
      (pi.shopping = "h"),
      (pi.ads = "a"),
      (pi.maps = "m"),
      pi)
    );
  Object.freeze(P.g);
  function ri(a, b) {
    if (a === "") return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var si = [];
  function ti(a) {
    switch (a) {
      case 0:
        return 0;
      case 42:
        return 1;
      case 43:
        return 2;
      case 44:
        return 11;
      case 50:
        return 3;
      case 58:
        return 4;
      case 66:
        return 7;
      case 75:
        return 5;
      case 86:
        return 6;
      case 87:
        return 10;
      case 89:
        return 8;
      case 90:
        return 9;
    }
  }
  function Q(a) {
    si[a] = !0;
    var b = ti(a);
    b !== void 0 && (xb[b] = !0);
  }
  Q(30);
  Q(26);
  Q(27);
  Q(28);
  Q(29);
  Q(45);
  Q(70);
  Q(54);
  Q(67);
  Q(33);
  Q(15);
  Q(95);
  Q(14);
  Q(100);
  Q(94);
  Q(59);
  Q(76);
  Q(6);
  Q(46);
  Q(4);
  Q(73);
  Q(91);
  Q(65);
  Q(63);
  Q(64);
  Q(74);
  Q(104);
  Q(101);
  Q(75);
  Q(5);
  Q(66);
  Q(86);
  yb[1] = ri("1", 6e4);
  yb[3] = ri("10", 1);
  yb[2] = ri("", 50);
  Q(23);
  Q(11);
  Q(62);
  Q(92);

  Q(51);
  Q(22);
  Q(41);
  Q(77);
  Q(89);
  Q(87);
  Q(79);
  Q(48);
  Q(60);
  function T(a) {
    return !!si[a];
  }
  var ui = {},
    vi = (G.google_tag_manager = G.google_tag_manager || {});
  ui.Yg = "48e0";
  ui.se = Number("0") || 0;
  ui.jb = "dataLayer";
  ui.vn =
    "ChAI8LeGtgYQpuia973q/LgzEiQA7oWuOmf2vItZcDKRVvRyYl9NnNi+/kOcJJTpjrBUHSUVob8aArRd";
  var wi = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    xi = { __paused: 1, __tg: 1 },
    yi;
  for (yi in wi) wi.hasOwnProperty(yi) && (xi[yi] = 1);
  var zi = Kb(""),
    Ai = !1,
    Bi,
    Ci = !1;
  Bi = Ci;
  var Di,
    Ei = !1;
  Di = Ei;
  var Fi,
    Gi = !1;
  Fi = Gi;
  ui.Fd = "www.googletagmanager.com";
  var Hi = "" + ui.Fd + (Bi ? "/gtag/js" : "/gtm.js"),
    Ii = null,
    Ji = null,
    Ki = {},
    Li = {};
  function Mi() {
    var a = vi.sequence || 1;
    vi.sequence = a + 1;
    return a;
  }
  ui.Ck = "";
  var Ni = "";
  ui.Zg = Ni;
  var Oi = new (function () {
    this.j = "";
    this.H = !1;
    this.D = 0;
    this.Ca = this.O = this.W = this.K = "";
  })();
  function Pi() {
    var a = Oi.K.length;
    return Oi.K[a - 1] === "/" ? Oi.K.substring(0, a - 1) : Oi.K;
  }
  function Qi() {
    return Oi.H && Oi.D !== 1;
  }
  function Ri(a) {
    for (var b = {}, c = oa(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var Si = new Hb(),
    Ti = {},
    Ui = {},
    Xi = {
      name: ui.jb,
      set: function (a, b) {
        h(Wb(a, b), Ti);
        Vi();
      },
      get: function (a) {
        return Wi(a, 2);
      },
      reset: function () {
        Si = new Hb();
        Ti = {};
        Vi();
      },
    };
  function Wi(a, b) {
    return b != 2 ? Si.get(a) : Yi(a);
  }
  function Yi(a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = Ti, e = 0; e < c.length; e++) {
      if (d === null) return !1;
      if (d === void 0) break;
      d = d[c[e]];
      if (b.indexOf(d) !== -1) return;
    }
    return d;
  }
  function Zi(a, b) {
    Ui.hasOwnProperty(a) || (Si.set(a, b), h(Wb(a, b), Ti), Vi());
  }
  function $i() {
    for (
      var a = [
          "gtm.allowlist",
          "gtm.blocklist",
          "gtm.whitelist",
          "gtm.blacklist",
          "tagTypeBlacklist",
        ],
        b = 0;
      b < a.length;
      b++
    ) {
      var c = a[b],
        d = Wi(c, 1);
      if (Array.isArray(d) || fb(d)) d = h(d);
      Ui[c] = d;
    }
  }
  function Vi(a) {
    z(Ui, function (b, c) {
      Si.set(b, c);
      h(Wb(b), Ti);
      h(Wb(b, c), Ti);
      a && delete Ui[b];
    });
  }
  function aj(a, b) {
    var c,
      d = (b === void 0 ? 2 : b) !== 1 ? Yi(a) : Si.get(a);
    db(d) === "array" || db(d) === "object" ? (c = h(d)) : (c = d);
    return c;
  }
  var bj = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if (d === "js_variable") {
        e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
        for (var g = e.split(","), k = 0; k < g.length; k++) {
          var m = g[k].trim();
          if (m) {
            if (Tb(m, "dataLayer.")) f = Wi(m.substring(10));
            else {
              var n = m.split(".");
              f = G[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]];
            }
            if (f !== void 0) break;
          }
        }
      } else if (d === "css_selector" && yh)
        try {
          var q = xh(e);
          if (q && q.length > 0) {
            f = [];
            for (
              var r = 0;
              r < q.length &&
              r < (b === "email" || b === "phone_number" ? 5 : 1);
              r++
            )
              f.push(Sc(q[r]) || Mb(q[r].value));
            f = f.length === 1 ? f[0] : f;
          }
        } catch (t) {
          O(149);
        }
      return f ? ((a[b] = f), !0) : !1;
    },
    cj = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = bj(b, "email", a.email) || c;
        c = bj(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = bj(f, "first_name", d[e].first_name) || c;
          c = bj(f, "last_name", d[e].last_name) || c;
          c = bj(f, "street", d[e].street) || c;
          c = bj(f, "city", d[e].city) || c;
          c = bj(f, "region", d[e].region) || c;
          c = bj(f, "country", d[e].country) || c;
          c = bj(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    dj = function (a) {
      return fb(a) ? !!a.enable_code : !1;
    };
  var ej = /:[0-9]+$/,
    fj = /^\d+\.fls\.doubleclick\.net$/;
  function gj(a, b, c, d) {
    for (
      var e = [], f = oa(a.split("&")), g = f.next();
      !g.done;
      g = f.next()
    ) {
      var k = oa(g.value.split("=")),
        m = k.next().value,
        n = pa(k);
      if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
        var p = n.join("=");
        if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
        e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
      }
    }
    return c ? e : void 0;
  }
  function hj(a, b, c, d, e) {
    b && (b = String(b).toLowerCase());
    if (b === "protocol" || b === "port")
      a.protocol = ij(a.protocol) || ij(G.location.protocol);
    b === "port"
      ? (a.port = String(
          Number(a.hostname ? a.port : G.location.port) ||
            (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")
        ))
      : b === "host" &&
        (a.hostname = (a.hostname || G.location.hostname)
          .replace(ej, "")
          .toLowerCase());
    return jj(a, b, c, d, e);
  }
  function jj(a, b, c, d, e) {
    var f,
      g = ij(a.protocol);
    b && (b = String(b).toLowerCase());
    switch (b) {
      case "url_no_fragment":
        f = kj(a);
        break;
      case "protocol":
        f = g;
        break;
      case "host":
        f = a.hostname.replace(ej, "").toLowerCase();
        if (c) {
          var k = /^www\d*\./.exec(f);
          k && k[0] && (f = f.substring(k[0].length));
        }
        break;
      case "port":
        f = String(
          Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : "")
        );
        break;
      case "path":
        a.pathname || a.hostname || ub("TAGGING", 1);
        f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
        var m = f.split("/");
        (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
        f = m.join("/");
        break;
      case "query":
        f = a.search.replace("?", "");
        e && (f = gj(f, e, !1));
        break;
      case "extension":
        var n = a.pathname.split(".");
        f = n.length > 1 ? n[n.length - 1] : "";
        f = f.split("/")[0];
        break;
      case "fragment":
        f = a.hash.replace("#", "");
        break;
      default:
        f = a && a.href;
    }
    return f;
  }
  function ij(a) {
    return a ? a.replace(":", "").toLowerCase() : "";
  }
  function kj(a) {
    var b = "";
    if (a && a.href) {
      var c = a.href.indexOf("#");
      b = c < 0 ? a.href : a.href.substring(0, c);
    }
    return b;
  }
  var lj = {},
    mj = 0;
  function nj(a) {
    var b = lj[a];
    if (!b) {
      var c = H.createElement("a");
      a && (c.href = a);
      var d = c.pathname;
      d[0] !== "/" && (a || ub("TAGGING", 1), (d = "/" + d));
      var e = c.hostname.replace(ej, "");
      b = {
        href: c.href,
        protocol: c.protocol,
        host: c.host,
        hostname: e,
        pathname: d,
        search: c.search,
        hash: c.hash,
        port: c.port,
      };
      mj < 5 && ((lj[a] = b), mj++);
    }
    return b;
  }
  function oj(a) {
    function b(n) {
      var p = n.split("=")[0];
      return d.indexOf(p) < 0 ? n : p + "=0";
    }
    function c(n) {
      return n
        .split("&")
        .map(b)
        .filter(function (p) {
          return p !== void 0;
        })
        .join("&");
    }
    var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
        " "
      ),
      e = nj(a),
      f = a.split(/[?#]/)[0],
      g = e.search,
      k = e.hash;
    g[0] === "?" && (g = g.substring(1));
    k[0] === "#" && (k = k.substring(1));
    g = c(g);
    k = c(k);
    g !== "" && (g = "?" + g);
    k !== "" && (k = "#" + k);
    var m = "" + f + g + k;
    m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
    return m;
  }
  function pj(a) {
    var b = nj(G.location.href),
      c = hj(b, "host", !1);
    if (c && c.match(fj)) {
      var d = hj(b, "path");
      if (d) {
        var e = d.split(a + "=");
        if (e.length > 1) return e[1].split(";")[0].split("?")[0];
      }
    }
  }
  var qj = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function rj(a, b) {
    if (a) {
      var c = "" + a;
      c.indexOf("http://") !== 0 &&
        c.indexOf("https://") !== 0 &&
        (c = "https://" + c);
      c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
      return nj("" + c + b).href;
    }
  }
  function sj(a, b) {
    if (Qi() || Di) return rj(a, b);
  }
  function tj() {
    return !!ui.Zg && ui.Zg.split("@@").join("") !== "SGTM_TOKEN";
  }
  function uj(a) {
    for (var b = oa([P.g.jd, P.g.Ob]), c = b.next(); !c.done; c = b.next()) {
      var d = U(a, c.value);
      if (d) return d;
    }
  }
  function vj(a, b) {
    return Qi() ? "" + Pi() + (b ? qj[a] || "" : "") : a;
  }
  function wj(a) {
    var b = String(a[Xe.oa] || "").replace(/_/g, "");
    return Tb(b, "cvt") ? "cvt" : b;
  }
  var xj =
    G.location.search.indexOf("?gtm_latency=") >= 0 ||
    G.location.search.indexOf("&gtm_latency=") >= 0;
  var yj = { sampleRate: "0.005000", yk: "", tn: "0.007" },
    zj = Math.random(),
    Aj;
  if (!(Aj = xj)) {
    var Bj = yj.sampleRate;
    Aj = zj < Number(Bj);
  }
  var Cj = Aj,
    Dj =
      (Fc == null ? void 0 : Fc.includes("gtm_debug=d")) ||
      xj ||
      zj >= 1 - Number(yj.tn);
  var Ej = /gtag[.\/]js/,
    Fj = /gtm[.\/]js/,
    Gj = !1;
  function Hj(a) {
    if (Gj) return "1";
    var b = a.scriptSource;
    if (b) {
      if (Ej.test(b)) return "3";
      if (Fj.test(b)) return "2";
    }
    return "0";
  }
  function Ij(a, b) {
    var c = Jj();
    c.pending || (c.pending = []);
    Eb(c.pending, function (d) {
      return (
        d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
      );
    }) || c.pending.push({ target: a, onLoad: b });
  }
  var Kj = function () {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = [];
    this.injectedFirstPartyContainers = {};
    var a;
    var b = G.google_tags_first_party || [];
    if (Array.isArray(b)) {
      for (var c = {}, d = oa(b), e = d.next(); !e.done; e = d.next())
        c[e.value] = !0;
      a = Object.freeze(c);
    } else a = {};
    this.injectedFirstPartyContainers = a;
  };
  function Jj() {
    var a = Gc("google_tag_data", {}),
      b = a.tidr;
    b || ((b = new Kj()), (a.tidr = b));
    return b;
  }
  var Lj = {},
    Pj = !1,
    ag = {
      ctid: "GTM-K8ZRXJL",
      canonicalContainerId: "9703428",
      fk: "GTM-K8ZRXJL",
      gk: "GTM-K8ZRXJL",
    };
  Lj.oe = Kb("");
  function Qj() {
    var a = Rj();
    return Pj ? a.map(Sj) : a;
  }
  function Tj() {
    var a = Uj();
    return Pj ? a.map(Sj) : a;
  }
  function Vj() {
    return Wj(ag.ctid);
  }
  function Xj() {
    return Wj(ag.canonicalContainerId || "_" + ag.ctid);
  }
  function Rj() {
    return ag.fk ? ag.fk.split("|") : [ag.ctid];
  }
  function Uj() {
    return ag.gk ? ag.gk.split("|") : [];
  }
  function Yj() {
    var a = Zj(ak()),
      b = a && a.parent;
    if (b) return Zj(b);
  }
  function Zj(a) {
    var b = Jj();
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
  }
  function Wj(a) {
    return Pj ? Sj(a) : a;
  }
  function Sj(a) {
    return "siloed_" + a;
  }
  function bk(a) {
    return Pj ? ck(a) : a;
  }
  function ck(a) {
    a = String(a);
    return Tb(a, "siloed_") ? a.substring(7) : a;
  }
  function dk() {
    var a = !1;
    if (a) {
      var b = Jj();
      if (b.siloed) {
        for (
          var c = [], d = Rj().map(Sj), e = Uj().map(Sj), f = {}, g = 0;
          g < b.siloed.length;
          f = { Pf: void 0 }, g++
        )
          (f.Pf = b.siloed[g]),
            !Pj &&
            Eb(
              f.Pf.isDestination ? e : d,
              (function (k) {
                return function (m) {
                  return m === k.Pf.ctid;
                };
              })(f)
            )
              ? (Pj = !0)
              : c.push(f.Pf);
        b.siloed = c;
      }
    }
  }
  function ek() {
    var a = Jj();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = Qj(), f = Tj(), g = {}, k = 0;
        k < a.pending.length;
        g = { Ue: void 0 }, k++
      )
        (g.Ue = a.pending[k]),
          Eb(
            g.Ue.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.Ue.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.Ue.onLoad), (d = !0))
            : c.push(g.Ue);
      a.pending = c;
      if (b)
        try {
          b(Xj());
        } catch (m) {}
    }
  }
  function fk() {
    for (
      var a = ag.ctid,
        b = Qj(),
        c = Tj(),
        d = function (n, p) {
          var q = {
            canonicalContainerId: ag.canonicalContainerId,
            scriptContainerId: a,
            state: 2,
            containers: b.slice(),
            destinations: c.slice(),
          };
          Ec && (q.scriptElement = Ec);
          Fc && (q.scriptSource = Fc);
          if (Yj() === void 0) {
            var r;
            a: {
              if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                var t;
                b: {
                  if (q.scriptSource) {
                    for (
                      var u = Oi.H,
                        v = nj(q.scriptSource),
                        w = u ? v.pathname : "" + v.hostname + v.pathname,
                        x = H.scripts,
                        y = "",
                        B = 0;
                      B < x.length;
                      ++B
                    ) {
                      var A = x[B];
                      if (
                        !(
                          A.innerHTML.length === 0 ||
                          (!u &&
                            A.innerHTML.indexOf(
                              q.scriptContainerId || "SHOULD_NOT_BE_SET"
                            ) < 0) ||
                          A.innerHTML.indexOf(w) < 0
                        )
                      ) {
                        if (A.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                          t = String(B);
                          break b;
                        }
                        y = String(B);
                      }
                    }
                    if (y) {
                      t = y;
                      break b;
                    }
                  }
                  t = void 0;
                }
                var C = t;
                if (C) {
                  Gj = !0;
                  r = C;
                  break a;
                }
              }
              var E = [].slice.call(document.scripts);
              r = q.scriptElement ? String(E.indexOf(q.scriptElement)) : "-1";
            }
            q.htmlLoadOrder = r;
            q.loadScriptType = Hj(q);
          }
          var D = p ? e.destination : e.container,
            F = D[n];
          F ? (p && F.state === 0 && O(93), Object.assign(F, q)) : (D[n] = q);
        },
        e = Jj(),
        f = oa(b),
        g = f.next();
      !g.done;
      g = f.next()
    )
      d(g.value, !1);
    for (var k = oa(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
    e.canonical[Xj()] = {};
    ek();
  }
  function gk(a) {
    return !!Jj().container[a];
  }
  function hk(a) {
    var b = Jj().destination[a];
    return !!b && !!b.state;
  }
  function ak() {
    return { ctid: Vj(), isDestination: Lj.oe };
  }
  function ik(a) {
    var b = Jj();
    (b.siloed = b.siloed || []).push(a);
  }
  function jk() {
    var a = Jj().container,
      b;
    for (b in a) if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
    return !1;
  }
  function kk() {
    var a = {};
    z(Jj().destination, function (b, c) {
      c.state === 0 && (a[ck(b)] = c);
    });
    return a;
  }
  function lk(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      a.context.source === 1 &&
      a.parent.ctid.indexOf("GTM-") !== 0
    );
  }
  var mk = "/td?id=" + ag.ctid,
    nk = ["v", "t", "pid", "dl", "tdp"],
    ok = ["mcc"],
    pk = {},
    qk = {};
  function rk(a, b, c) {
    qk[a] = b;
    (c === void 0 || c) && sk(a);
  }
  function sk(a, b) {
    if (pk[a] === void 0 || (b === void 0 ? 0 : b)) pk[a] = !0;
  }
  function tk(a) {
    a = a === void 0 ? !1 : a;
    var b = Object.keys(pk)
      .filter(function (c) {
        return pk[c] === !0 && qk[c] !== void 0 && (a || !ok.includes(c));
      })
      .map(function (c) {
        var d = qk[c];
        typeof d === "function" && (d = d());
        return d ? "&" + c + "=" + d : "";
      })
      .join("");
    return "" + vj("https://www.googletagmanager.com") + mk + ("" + b + "&z=0");
  }
  function uk() {
    Object.keys(pk).forEach(function (a) {
      nk.indexOf(a) < 0 && (pk[a] = !1);
    });
  }
  function vk(a) {
    a = a === void 0 ? !1 : a;
    if (Dj && ag.ctid) {
      var b = tk(a);
      a ? Zc(b) : Oc(b);
      uk();
    }
  }
  function wk() {
    Object.keys(pk).filter(function (a) {
      return pk[a] && !nk.includes(a);
    }).length > 0 && vk(!0);
  }
  var xk = Fb();
  function yk() {
    xk = Fb();
  }
  function zk() {
    rk("v", "3");
    rk("t", "t");
    rk("pid", function () {
      return String(xk);
    });
    Pc(G, "pagehide", wk);
    G.setInterval(yk, 864e5);
  }
  var Ak = new (function (a, b) {
    this.j = a;
    this.defaultValue = b === void 0 ? !1 : b;
  })(1933);
  function Bk() {
    var a = Gc("google_tag_data", {});
    return (a.ics = a.ics || new Ck());
  }
  var Ck = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.j = [];
  };
  Ck.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    ub("TAGGING", 19);
    b == null ? ub("TAGGING", 18) : Dk(this, a, b === "granted", c, d, e, f, g);
  };
  Ck.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      Dk(this, a[d], void 0, void 0, "", "", b, c);
  };
  var Dk = function (a, b, c, d, e, f, g, k) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && l(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && g > 0 && n.update === void 0),
        t = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: c !== void 0 ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if (e !== "" || n.default !== !1) m[b] = t;
      r &&
        G.setTimeout(function () {
          m[b] === t &&
            t.quiet &&
            (ub("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, k),
            a.notifyListeners());
        }, g);
    }
  };
  ba = Ck.prototype;
  ba.clearTimeout = function (a, b, c) {
    var d = [a],
      e = c.delegatedConsentTypes,
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      k = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = oa(d), n = m.next(); !n.done; n = m.next())
        Ek(this, n.value);
    } else if (b !== void 0 && k !== b)
      for (var p = oa(d), q = p.next(); !q.done; q = p.next())
        Ek(this, q.value);
  };
  ba.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (b != null) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = b === "granted";
      this.clearTimeout(a, d, c);
    }
  };
  ba.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      k = g.declare_region,
      m = c && l(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: b === "granted",
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if (d !== "" || g.declare !== !1) f[a] = n;
    }
  };
  ba.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    d.implicit !== !1 && (d.implicit = b === "granted");
  };
  ba.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (e !== void 0) return e ? 1 : 2;
    if (zb(8) && b.usedContainerScopedDefaults) {
      var f = b.containerScopedDefaults[a];
      if (f === 3) return 1;
      if (f === 2) return 2;
    } else if (((e = d.default), e !== void 0)) return e ? 1 : 2;
    if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var g = b.delegatedConsentTypes[a],
        k = c[g] || {};
      e = k.update;
      if (e !== void 0) return e ? 1 : 2;
      if (zb(8) && b.usedContainerScopedDefaults) {
        var m = b.containerScopedDefaults[g];
        if (m === 3) return 1;
        if (m === 2) return 2;
      } else if (((e = k.default), e !== void 0)) return e ? 1 : 2;
    }
    e = d.declare;
    if (e !== void 0) return e ? 1 : 2;
    e = d.implicit;
    return e !== void 0 ? (e ? 3 : 4) : 0;
  };
  ba.addListener = function (a, b) {
    this.j.push({ consentTypes: a, Ml: b });
  };
  var Ek = function (a, b) {
    for (var c = 0; c < a.j.length; ++c) {
      var d = a.j[c];
      Array.isArray(d.consentTypes) &&
        d.consentTypes.indexOf(b) !== -1 &&
        (d.hk = !0);
    }
  };
  Ck.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.j.length; ++c) {
      var d = this.j[c];
      if (d.hk) {
        d.hk = !1;
        try {
          d.Ml({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var Fk = function (a) {
    Fk[" "](a);
    return a;
  };
  Fk[" "] = function () {};
  var Hk = function () {
    var a = Gk,
      b = "Bh";
    if (a.Bh && a.hasOwnProperty(b)) return a.Bh;
    var c = new a();
    return (a.Bh = c);
  };
  var Gk = function () {
    var a = {};
    this.j = function () {
      var b = Ak.j,
        c = Ak.defaultValue;
      return a[b] != null ? a[b] : c;
    };
    this.D = function () {
      a[Ak.j] = !0;
    };
  };
  var Ik = !1,
    Jk = !1,
    Kk = {},
    Lk = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
      selectedAllCorePlatformServices: !1,
      containerScopedDefaults:
        ((Kk.ad_storage = 1),
        (Kk.analytics_storage = 1),
        (Kk.ad_user_data = 1),
        (Kk.ad_personalization = 1),
        Kk),
      usedContainerScopedDefaults: !1,
    };
  function Mk(a) {
    var b = Bk();
    b.accessedAny = !0;
    return (l(a) ? [a] : a).every(function (c) {
      switch (b.getConsentState(c, Lk)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    });
  }
  function Nk(a) {
    var b = Bk();
    b.accessedAny = !0;
    return b.getConsentState(a, Lk);
  }
  function Ok(a) {
    for (var b = {}, c = oa(a), d = c.next(); !d.done; d = c.next()) {
      var e = d.value;
      b[e] = Lk.corePlatformServices[e] !== !1;
    }
    return b;
  }
  function Pk(a) {
    var b = Bk();
    b.accessedAny = !0;
    return !(b.entries[a] || {}).quiet;
  }
  function Qk() {
    if (!Hk().j()) return !1;
    var a = Bk();
    a.accessedAny = !0;
    if (a.active) return !0;
    if (!zb(8) || !Lk.usedContainerScopedDefaults) return !1;
    for (
      var b = oa(Object.keys(Lk.containerScopedDefaults)), c = b.next();
      !c.done;
      c = b.next()
    )
      if (Lk.containerScopedDefaults[c.value] !== 1) return !0;
    return !1;
  }
  function Rk(a, b) {
    Bk().addListener(a, b);
  }
  function Sk(a, b) {
    Bk().notifyListeners(a, b);
  }
  function Tk(a, b) {
    function c() {
      for (var e = 0; e < b.length; e++) if (!Pk(b[e])) return !0;
      return !1;
    }
    if (c()) {
      var d = !1;
      Rk(b, function (e) {
        d || c() || ((d = !0), a(e));
      });
    } else a({});
  }
  function Uk(a, b) {
    function c() {
      for (var k = [], m = 0; m < e.length; m++) {
        var n = e[m];
        Mk(n) && !f[n] && k.push(n);
      }
      return k;
    }
    function d(k) {
      for (var m = 0; m < k.length; m++) f[k[m]] = !0;
    }
    var e = l(b) ? [b] : b,
      f = {},
      g = c();
    g.length !== e.length &&
      (d(g),
      Rk(e, function (k) {
        function m(q) {
          q.length !== 0 && (d(q), (k.consentTypes = q), a(k));
        }
        var n = c();
        if (n.length !== 0) {
          var p = Object.keys(f).length;
          n.length + p >= e.length
            ? m(n)
            : G.setTimeout(function () {
                m(c());
              }, 500);
        }
      }));
  }
  var Vk = [
      "ad_storage",
      "analytics_storage",
      "ad_user_data",
      "ad_personalization",
    ],
    Wk = !1,
    Xk = !1;
  function Yk() {
    T(48) &&
      !Xk &&
      Wk &&
      (Vk.some(function (a) {
        return Lk.containerScopedDefaults[a] !== 1;
      }) ||
        Zk("mbc"));
    Xk = !0;
  }
  function Zk(a) {
    Dj && (rk(a, "1"), vk());
  }
  function $k(a) {
    ub("HEALTH", a);
  }
  var al;
  try {
    al = JSON.parse(
      sb(
        "eyIwIjoiR0IiLCIxIjoiIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUuY28udWsiLCI0IjoicmVnaW9uMSIsIjUiOmZhbHNlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
      )
    );
  } catch (a) {
    O(123), $k(2), (al = {});
  }
  function bl() {
    return al["0"] || "";
  }
  function cl() {
    return al["1"] || "";
  }
  function dl() {
    var a = !1;
    return a;
  }
  function el() {
    return al["6"] !== !1;
  }
  function fl() {
    var a = "";
    return a;
  }
  function gl() {
    var a = !1;
    a = !!al["5"];
    return a;
  }
  function hl() {
    var a = "";
    return a;
  }
  var il = [P.g.R, P.g.U, P.g.P, P.g.ya],
    jl,
    kl;
  function ll(a) {
    for (
      var b = a[P.g.Fb], c = Array.isArray(b) ? b : [b], d = { Ke: 0 };
      d.Ke < c.length;
      d = { Ke: d.Ke }, ++d.Ke
    )
      z(
        a,
        (function (e) {
          return function (f, g) {
            if (f !== P.g.Fb) {
              var k = c[e.Ke],
                m = bl(),
                n = cl();
              Jk = !0;
              Ik && ub("TAGGING", 20);
              Bk().declare(f, g, k, m, n);
            }
          };
        })(d)
      );
  }
  function ml(a) {
    Yk();
    !kl && jl && Zk("crc");
    kl = !0;
    var b = a[P.g.Fb];
    b && O(40);
    var c = a[P.g.cf];
    c && O(41);
    for (
      var d = Array.isArray(b) ? b : [b], e = { Le: 0 };
      e.Le < d.length;
      e = { Le: e.Le }, ++e.Le
    )
      z(
        a,
        (function (f) {
          return function (g, k) {
            if (g !== P.g.Fb && g !== P.g.cf) {
              var m = d[f.Le],
                n = Number(c),
                p = bl(),
                q = cl();
              n = n === void 0 ? 0 : n;
              Ik = !0;
              Jk && ub("TAGGING", 20);
              Bk().default(g, k, m, p, q, n, Lk);
            }
          };
        })(e)
      );
  }
  function nl(a) {
    if (T(90)) {
      zb(9) && (Lk.usedContainerScopedDefaults = !0);
      var b = a[P.g.Fb];
      if (b) {
        var c = Array.isArray(b) ? b : [b];
        if (!c.includes(cl()) && !c.includes(bl())) return;
      }
      z(a, function (d, e) {
        switch (d) {
          case "ad_storage":
          case "analytics_storage":
          case "ad_user_data":
          case "ad_personalization":
            break;
          default:
            return;
        }
        zb(9) && (Lk.usedContainerScopedDefaults = !0);
        Lk.containerScopedDefaults[d] = e === "granted" ? 3 : 2;
      });
    }
  }
  function ol(a, b) {
    Yk();
    jl = !0;
    z(a, function (c, d) {
      Ik = !0;
      Jk && ub("TAGGING", 20);
      Bk().update(c, d, Lk);
    });
    Sk(b.eventId, b.priorityId);
  }
  function pl(a) {
    a.hasOwnProperty("all") &&
      ((Lk.selectedAllCorePlatformServices = !0),
      z(qi, function (b) {
        Lk.corePlatformServices[b] = a.all === "granted";
        Lk.usedCorePlatformServices = !0;
      }));
    z(a, function (b, c) {
      b !== "all" &&
        ((Lk.corePlatformServices[b] = c === "granted"),
        (Lk.usedCorePlatformServices = !0));
    });
  }
  function W(a) {
    Array.isArray(a) || (a = [a]);
    return a.every(function (b) {
      return Mk(b);
    });
  }
  function ql(a, b) {
    Rk(a, b);
  }
  function rl(a, b) {
    Uk(a, b);
  }
  function sl(a, b) {
    Tk(a, b);
  }
  function tl() {
    var a = [P.g.R, P.g.ya, P.g.P];
    Bk().waitForUpdate(a, 500, Lk);
  }
  function ul(a) {
    for (var b = oa(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      Bk().clearTimeout(d, void 0, Lk);
    }
    Sk();
  }
  var vl = function () {
    var a, b, c, d;
    La(
      new Ka(
        new Ga(function (e) {
          if (e.j == 1) {
            if (vi.pscdl !== void 0) return e.return();
            a = function (f) {
              vi.pscdl = f;
            };
            b = function () {
              a("error");
            };
            e.O = 2;
            c = Cc;
            if (!("cookieDeprecationLabel" in c)) {
              a("noapi");
              e.j = 4;
              return;
            }
            a("pending");
            return Da(e, c.cookieDeprecationLabel.getValue().then(a).catch(b));
          }
          e.j != 2 ? ((e.j = 0), (e.O = 0)) : ((d = Ea(e)), b(d), (e.j = 0));
        })
      )
    );
  };
  function wl(a, b) {
    T(12) &&
      b &&
      z(b, function (c, d) {
        typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d));
      });
  }
  var xl = /[A-Z]+/,
    yl = /\s/;
  function zl(a, b) {
    if (l(a)) {
      a = Mb(a);
      var c = a.indexOf("-");
      if (!(c < 0)) {
        var d = a.substring(0, c);
        if (xl.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function (n) {
              var p = n.indexOf("/");
              return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)];
            };
            f = g(e);
            if (d === "DC" && f.length === 2) {
              var k = g(f[1]);
              k.length === 2 && ((f[1] = k[0]), f.push(k[1]));
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (yl.test(f[m]) && (d !== "AW" || m !== 1))) return;
          }
          return { id: a, prefix: d, ia: d + "-" + f[0], ma: f };
        }
      }
    }
  }
  function Al(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = zl(a[d], b);
      e && (c[e.id] = e);
    }
    Bl(c);
    var f = [];
    z(c, function (g, k) {
      f.push(k);
    });
    return f;
  }
  function Bl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        d.prefix === "AW" && d.ma[Cl[2]] && b.push(d.ia);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Dl = {},
    Cl =
      ((Dl[0] = 0),
      (Dl[1] = 0),
      (Dl[2] = 1),
      (Dl[3] = 0),
      (Dl[4] = 1),
      (Dl[5] = 2),
      (Dl[6] = 0),
      (Dl[7] = 0),
      (Dl[8] = 0),
      Dl);
  var El = Number("") || 500,
    Fl = {},
    Gl = {},
    Hl = { initialized: 11, complete: 12, interactive: 13 },
    Il = {},
    Jl = Object.freeze(((Il[P.g.Ka] = !0), Il)),
    Kl =
      H.location.search.indexOf("?gtm_diagnostics=") >= 0 ||
      H.location.search.indexOf("&gtm_diagnostics=") >= 0,
    Ll = void 0;
  function Ml(a, b) {
    if (b.length && Dj) {
      var c;
      (c = Fl)[a] != null || (c[a] = []);
      Gl[a] != null || (Gl[a] = []);
      var d = b.filter(function (e) {
        return !Gl[a].includes(e);
      });
      Fl[a].push.apply(Fl[a], qa(d));
      Gl[a].push.apply(Gl[a], qa(d));
      !Ll &&
        d.length > 0 &&
        (sk("tdc", !0),
        (Ll = G.setTimeout(function () {
          vk();
          Fl = {};
          Ll = void 0;
        }, El)));
    }
  }
  function Nl(a, b, c) {
    if (Dj && a === "config") {
      var d,
        e = (d = zl(b)) == null ? void 0 : d.ma;
      if (!(e && e.length > 1)) {
        var f,
          g = Gc("google_tag_data", {});
        g.td || (g.td = {});
        f = g.td;
        var k = h(c.K);
        h(c.j, k);
        var m = [],
          n;
        for (n in f)
          if (f.hasOwnProperty(n)) {
            var p = Ol(f[n], k);
            p.length && (Kl && console.log(p), m.push(n));
          }
        m.length && (Ml(b, m), ub("TAGGING", Hl[H.readyState] || 14));
        f[b] = k;
      }
    }
  }
  function Pl(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Ol(a, b, c, d) {
    c = c === void 0 ? {} : c;
    d = d === void 0 ? "" : d;
    if (a === b) return [];
    var e = function (r, t) {
        var u;
        db(t) === "object" ? (u = t[r]) : db(t) === "array" && (u = t[r]);
        return u === void 0 ? Jl[r] : u;
      },
      f = Pl(a, b),
      g;
    for (g in f)
      if (f.hasOwnProperty(g)) {
        var k = (d ? d + "." : "") + g,
          m = e(g, a),
          n = e(g, b),
          p = db(m) === "object" || db(m) === "array",
          q = db(n) === "object" || db(n) === "array";
        if (p && q) Ol(m, n, c, k);
        else if (p || q || m !== n) c[k] = !0;
      }
    return Object.keys(c);
  }
  function Ql() {
    rk(
      "tdc",
      function () {
        Ll && (G.clearTimeout(Ll), (Ll = void 0));
        var a = [],
          b;
        for (b in Fl) Fl.hasOwnProperty(b) && a.push(b + "*" + Fl[b].join("."));
        return a.length ? a.join("!") : void 0;
      },
      !1
    );
  }
  var Rl = function (a, b, c, d, e, f, g, k, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.j = c;
      this.O = d;
      this.H = e;
      this.K = f;
      this.D = g;
      this.eventMetadata = k;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    Sl = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.j);
          c.push(a.O);
          c.push(a.H);
          c.push(a.K);
          c.push(a.D);
          break;
        case 2:
          c.push(a.j);
          break;
        case 1:
          c.push(a.O);
          c.push(a.H);
          c.push(a.K);
          c.push(a.D);
          break;
        case 4:
          c.push(a.j), c.push(a.O), c.push(a.H), c.push(a.K);
      }
      return c;
    },
    U = function (a, b, c, d) {
      for (
        var e = oa(Sl(a, d === void 0 ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (g[b] !== void 0) return g[b];
      }
      return c;
    },
    Tl = function (a) {
      for (
        var b = {}, c = Sl(a, 4), d = oa(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = oa(f), k = g.next();
          !k.done;
          k = g.next()
        )
          b[k.value] = 1;
      return Object.keys(b);
    },
    Ul = function (a, b, c) {
      function d(n) {
        fb(n) &&
          z(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = Sl(a, c === void 0 ? 3 : c);
      g.reverse();
      for (var k = oa(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    Vl = function (a) {
      for (
        var b = [P.g.Sc, P.g.Oc, P.g.Pc, P.g.Qc, P.g.Rc, P.g.Tc, P.g.Uc],
          c = Sl(a, 3),
          d = oa(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, k = !1, m = oa(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          f[p] !== void 0 && ((g[p] = f[p]), (k = !0));
        }
        var q = k ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    Wl = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.D = {};
      this.O = {};
      this.j = {};
      this.H = {};
      this.W = {};
      this.K = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function () {};
      this.onFailure = function () {};
    },
    Xl = function (a, b) {
      a.D = b;
      return a;
    },
    Yl = function (a, b) {
      a.O = b;
      return a;
    },
    Zl = function (a, b) {
      a.j = b;
      return a;
    },
    $l = function (a, b) {
      a.H = b;
      return a;
    },
    am = function (a, b) {
      a.W = b;
      return a;
    },
    bm = function (a, b) {
      a.K = b;
      return a;
    },
    cm = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    dm = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    em = function (a, b) {
      a.onFailure = b;
      return a;
    },
    fm = function (a, b) {
      a.isGtmEvent = b;
      return a;
    },
    gm = function (a) {
      return new Rl(
        a.eventId,
        a.priorityId,
        a.D,
        a.O,
        a.j,
        a.H,
        a.K,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent
      );
    };
  var hm = { xk: Number("5"), co: Number("") },
    im = [];
  function jm(a) {
    im.push(a);
  }
  var km = "?id=" + ag.ctid,
    lm = void 0,
    mm = {},
    nm = void 0,
    om = new (function () {
      var a = 5;
      hm.xk > 0 && (a = hm.xk);
      this.D = a;
      this.j = 0;
      this.H = [];
    })(),
    pm = 1e3;
  function qm(a, b) {
    var c = lm;
    if (c === void 0)
      if (b) c = Mi();
      else return "";
    for (
      var d = [vj("https://www.googletagmanager.com"), "/a", km],
        e = oa(im),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value,
          k = g({ eventId: c, mc: !!a }),
          m = oa(k),
          n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = oa(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push("&" + q + "=" + r);
      }
    d.push("&z=0");
    return d.join("");
  }
  function rm() {
    nm && (G.clearTimeout(nm), (nm = void 0));
    if (lm !== void 0 && sm) {
      var a;
      (a = mm[lm]) || (a = om.j < om.D ? !1 : Ob() - om.H[om.j % om.D] < 1e3);
      if (a || pm-- <= 0) O(1), (mm[lm] = !0);
      else {
        var b = om.j++ % om.D;
        om.H[b] = Ob();
        var c = qm(!0);
        Oc(c);
        sm = !1;
      }
    }
  }
  var sm = !1;
  function tm(a) {
    mm[a] ||
      (a !== lm && (rm(), (lm = a)),
      (sm = !0),
      nm || (nm = G.setTimeout(rm, 500)),
      qm().length >= 2022 && rm());
  }
  var um = Fb();
  function vm() {
    um = Fb();
  }
  function wm() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", String(um)],
    ];
  }
  var xm = {};
  function ym(a, b, c) {
    Cj && a !== void 0 && ((xm[a] = xm[a] || []), xm[a].push(c + b), tm(a));
  }
  function zm(a) {
    var b = a.eventId,
      c = a.mc,
      d = [],
      e = xm[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete xm[b];
    return d;
  }
  function Am(a, b) {
    var c = zl(Wj(a), !0);
    c && Bm.register(c, b);
  }
  function Cm(a, b, c, d) {
    var e = zl(c, d.isGtmEvent);
    e &&
      (T(47) && T(47) && Ai && (d.deferrable = !0),
      Bm.push("event", [b, a], e, d));
  }
  function Dm(a, b, c, d) {
    var e = zl(c, d.isGtmEvent);
    e && Bm.push("get", [a, b], e, d);
  }
  function Em(a) {
    var b = zl(Wj(a), !0),
      c;
    b ? (c = Fm(Bm, b).j) : (c = {});
    return c;
  }
  function Gm(a, b) {
    var c = zl(Wj(a), !0);
    if (c) {
      var d = Bm,
        e = h(b, null);
      h(Fm(d, c).j, e);
      Fm(d, c).j = e;
    }
  }
  var Hm = function () {
      this.O = {};
      this.j = {};
      this.D = {};
      this.W = null;
      this.K = {};
      this.H = !1;
      this.status = 1;
    },
    Im = function (a, b, c, d) {
      this.D = Ob();
      this.j = b;
      this.args = c;
      this.messageContext = d;
      this.type = a;
    },
    Jm = function () {
      this.destinations = {};
      this.D = {};
      this.j = [];
    },
    Fm = function (a, b) {
      var c = b.ia;
      return (a.destinations[c] = a.destinations[c] || new Hm());
    },
    Km = function (a, b, c, d) {
      if (d.j) {
        var e = Fm(a, d.j),
          f = e.W;
        if (f) {
          var g = h(c, null),
            k = h(e.O[d.j.id], null),
            m = h(e.K, null),
            n = h(e.j, null),
            p = h(a.D, null),
            q = {};
          if (Cj)
            try {
              q = h(Ti);
            } catch (v) {
              O(72);
            }
          var r = d.j.prefix,
            t = function (v) {
              ym(d.messageContext.eventId, r, v);
            },
            u = gm(
              fm(
                em(
                  dm(
                    cm(
                      am(
                        $l(
                          bm(
                            Zl(
                              Yl(
                                Xl(
                                  new Wl(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                k
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            ym(d.messageContext.eventId, r, "1"),
              Nl(d.type, d.j.id, u),
              f(d.j.id, b, d.D, u);
          } catch (v) {
            ym(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  Jm.prototype.register = function (a, b, c) {
    var d = Fm(this, a);
    d.status !== 3 &&
      ((d.W = b), (d.status = 3), c && (h(d.j, c), (d.j = c)), this.flush());
  };
  Jm.prototype.push = function (a, b, c, d) {
    c !== void 0 &&
      (Fm(this, c).status === 1 &&
        ((Fm(this, c).status = 2), this.push("require", [{}], c, {})),
      Fm(this, c).H && (d.deferrable = !1));
    this.j.push(new Im(a, c, b, d));
    d.deferrable || this.flush();
  };
  Jm.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.j.length;
      e = { Ec: void 0, th: void 0 }
    ) {
      var f = this.j[0],
        g = f.j;
      if (f.messageContext.deferrable)
        !g || Fm(this, g).H
          ? ((f.messageContext.deferrable = !1), this.j.push(f))
          : c.push(f),
          this.j.shift();
      else {
        switch (f.type) {
          case "require":
            if (Fm(this, g).status !== 3 && !a) {
              this.j.push.apply(this.j, c);
              return;
            }
            break;
          case "set":
            z(f.args[0], function (r, t) {
              h(Wb(r, t), b.D);
            });
            break;
          case "config":
            var k = Fm(this, g);
            e.Ec = {};
            z(
              f.args[0],
              (function (r) {
                return function (t, u) {
                  h(Wb(t, u), r.Ec);
                };
              })(e)
            );
            var m = !!e.Ec[P.g.fc];
            delete e.Ec[P.g.fc];
            var n = g.ia === g.id;
            m || (n ? (k.K = {}) : (k.O[g.id] = {}));
            (k.H && m) || Km(this, P.g.ba, e.Ec, f);
            k.H = !0;
            n ? h(e.Ec, k.K) : (h(e.Ec, k.O[g.id]), O(70));
            d = !0;
            break;
          case "event":
            e.th = {};
            z(
              f.args[0],
              (function (r) {
                return function (t, u) {
                  h(Wb(t, u), r.th);
                };
              })(e)
            );
            Km(this, f.args[1], e.th, f);
            break;
          case "get":
            var p = {},
              q = ((p[P.g.tb] = f.args[0]), (p[P.g.Jb] = f.args[1]), p);
            Km(this, P.g.Ua, q, f);
        }
        this.j.shift();
        Lm(this, f);
      }
    }
    this.j.push.apply(this.j, c);
    d && this.flush();
  };
  var Lm = function (a, b) {
      if (b.type !== "require")
        if (b.j)
          for (var c = Fm(a, b.j).D[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.destinations)
            if (a.destinations.hasOwnProperty(e)) {
              var f = a.destinations[e];
              if (f && f.D)
                for (var g = f.D[b.type] || [], k = 0; k < g.length; k++)
                  g[k]();
            }
    },
    Bm = new Jm();
  var Mm = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Nm = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var Om = function (a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    },
    Pm = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    };
  var Qm, Rm;
  a: {
    for (var Sm = ["CLOSURE_FLAGS"], Tm = Oa, Um = 0; Um < Sm.length; Um++)
      if (((Tm = Tm[Sm[Um]]), Tm == null)) {
        Rm = null;
        break a;
      }
    Rm = Tm;
  }
  var Vm = Rm && Rm[610401301];
  Qm = Vm != null ? Vm : !1;
  function Wm() {
    var a = Oa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Xm,
    Ym = Oa.navigator;
  Xm = Ym ? Ym.userAgentData || null : null;
  function Zm(a) {
    return Qm
      ? Xm
        ? Xm.brands.some(function (b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1;
          })
        : !1
      : !1;
  }
  function $m(a) {
    return Wm().indexOf(a) != -1;
  }
  function an() {
    return Qm ? !!Xm && Xm.brands.length > 0 : !1;
  }
  function bn() {
    return an() ? !1 : $m("Opera");
  }
  function cn() {
    return $m("Firefox") || $m("FxiOS");
  }
  function dn() {
    return an()
      ? Zm("Chromium")
      : (($m("Chrome") || $m("CriOS")) && !(an() ? 0 : $m("Edge"))) ||
          $m("Silk");
  }
  function en() {
    return Qm ? !!Xm && !!Xm.platform : !1;
  }
  function fn() {
    return $m("iPhone") && !$m("iPod") && !$m("iPad");
  }
  function gn() {
    fn() || $m("iPad") || $m("iPod");
  }
  bn();
  an() || $m("Trident") || $m("MSIE");
  $m("Edge");
  !$m("Gecko") ||
    (Wm().toLowerCase().indexOf("webkit") != -1 && !$m("Edge")) ||
    $m("Trident") ||
    $m("MSIE") ||
    $m("Edge");
  Wm().toLowerCase().indexOf("webkit") != -1 && !$m("Edge") && $m("Mobile");
  en() || $m("Macintosh");
  en() || $m("Windows");
  (en() ? Xm.platform === "Linux" : $m("Linux")) || en() || $m("CrOS");
  en() || $m("Android");
  fn();
  $m("iPad");
  $m("iPod");
  gn();
  Wm().toLowerCase().indexOf("kaios");
  var hn = function (a, b, c, d) {
      for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (g == 38 || g == 63) {
          var k = a.charCodeAt(e + f);
          if (!k || k == 61 || k == 38 || k == 35) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    jn = /#|$/,
    kn = function (a, b) {
      var c = a.search(jn),
        d = hn(a, 0, b, c);
      if (d < 0) return null;
      var e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " ")
      );
    },
    ln = /[?&]($|#)/,
    mn = function (a, b, c) {
      for (
        var d, e = a.search(jn), f = 0, g, k = [];
        (g = hn(a, f, b, e)) >= 0;

      )
        k.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      k.push(a.slice(f));
      d = k.join("").replace(ln, "$1");
      var m,
        n = c != null ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        r < 0 && (r = d.length);
        var t = d.indexOf("?"),
          u;
        t < 0 || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var nn = function (a) {
      try {
        var b;
        if ((b = !!a && a.location.href != null))
          a: {
            try {
              Fk(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    on = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    pn = function (a) {
      if (G.top == G) return 0;
      if (a === void 0 ? 0 : a) {
        var b = G.location.ancestorOrigins;
        if (b) return b[b.length - 1] == G.location.origin ? 1 : 2;
      }
      return nn(G.top) ? 1 : 2;
    },
    qn = function (a) {
      a = a === void 0 ? document : a;
      return a.createElement("img");
    };
  function rn(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = qn(a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = wc(g, e);
          k >= 0 && Array.prototype.splice.call(g, k, 1);
        }
        Pm(e, "load", f);
        Pm(e, "error", f);
      };
      Om(e, "load", f);
      Om(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var tn = function (a) {
      var b;
      b = b === void 0 ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      on(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      sn(c, b);
    },
    sn = function (a, b) {
      var c = window,
        d;
      b = b === void 0 ? !1 : b;
      d = d === void 0 ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else rn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  var un = function () {
    this.O = this.O;
    this.D = this.D;
  };
  un.prototype.O = !1;
  un.prototype.dispose = function () {
    this.O || ((this.O = !0), this.Ca());
  };
  un.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  un.prototype.addOnDisposeCallback = function (a, b) {
    this.O
      ? b !== void 0
        ? a.call(b)
        : a()
      : (this.D || (this.D = []), b && (a = a.bind(b)), this.D.push(a));
  };
  un.prototype.Ca = function () {
    if (this.D) for (; this.D.length; ) this.D.shift()();
  };
  var vn = function (a) {
      a.addtlConsent !== void 0 &&
        typeof a.addtlConsent !== "string" &&
        (a.addtlConsent = void 0);
      a.gdprApplies !== void 0 &&
        typeof a.gdprApplies !== "boolean" &&
        (a.gdprApplies = void 0);
      return (a.tcString !== void 0 && typeof a.tcString !== "string") ||
        (a.listenerId !== void 0 && typeof a.listenerId !== "number")
        ? 2
        : a.cmpStatus && a.cmpStatus !== "error"
        ? 0
        : 3;
    },
    wn = function (a, b) {
      b = b === void 0 ? {} : b;
      un.call(this);
      this.H = a;
      this.j = null;
      this.W = {};
      this.If = 0;
      var c;
      this.me = (c = b.nn) != null ? c : 500;
      var d;
      this.xb = (d = b.Qn) != null ? d : !1;
      this.K = null;
    };
  za(wn, un);
  wn.prototype.Ca = function () {
    this.W = {};
    this.K && (Pm(this.H, "message", this.K), delete this.K);
    delete this.W;
    delete this.H;
    delete this.j;
    un.prototype.Ca.call(this);
  };
  var yn = function (a) {
    return typeof a.H.__tcfapi === "function" || xn(a) != null;
  };
  wn.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.xb },
      d = Nm(function () {
        return a(c);
      }),
      e = 0;
    this.me !== -1 &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.me));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = vn(c)),
          (c.internalBlockOnErrors = b.xb),
          (k && c.internalErrorState === 0) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      zn(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  wn.prototype.removeEventListener = function (a) {
    a && a.listenerId && zn(this, "removeEventListener", null, a.listenerId);
  };
  var Bn = function (a, b, c) {
      var d;
      d = d === void 0 ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (f !== void 0) {
            e = f[d === void 0 ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (g === 0) return !1;
      var k = c;
      c === 2
        ? ((k = 0), g === 2 && (k = 1))
        : c === 3 && ((k = 1), g === 1 && (k = 0));
      var m;
      if (k === 0)
        if (a.purpose && a.vendor) {
          var n = An(a.vendor.consents, d === void 0 ? "755" : d);
          m =
            n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH"
              ? !0
              : n && An(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          k === 1
            ? a.purpose && a.vendor
              ? An(a.purpose.legitimateInterests, b) &&
                An(a.vendor.legitimateInterests, d === void 0 ? "755" : d)
              : !0
            : !0;
      return m;
    },
    An = function (a, b) {
      return !(!a || !a[b]);
    },
    zn = function (a, b, c, d) {
      c || (c = function () {});
      if (typeof a.H.__tcfapi === "function") {
        var e = a.H.__tcfapi;
        e(b, 2, c, d);
      } else if (xn(a)) {
        Cn(a);
        var f = ++a.If;
        a.W[f] = c;
        if (a.j) {
          var g = {};
          a.j.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    xn = function (a) {
      if (a.j) return a.j;
      var b;
      a: {
        for (var c = a.H, d = 0; d < 50; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.j = b;
      return a.j;
    },
    Cn = function (a) {
      a.K ||
        ((a.K = function (b) {
          try {
            var c;
            c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.W[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Om(a.H, "message", a.K));
    },
    Dn = function (a) {
      if (a.gdprApplies === !1) return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = vn(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0
        ? a.internalBlockOnErrors
          ? (tn({ e: String(a.internalErrorState) }), !1)
          : !0
        : a.cmpStatus !== "loaded" ||
          (a.eventStatus !== "tcloaded" &&
            a.eventStatus !== "useractioncomplete")
        ? !1
        : !0;
    };
  var En = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function Fn() {
    var a = vi.tcf || {};
    return (vi.tcf = a);
  }
  var Gn = function () {
    return new wn(G, { nn: -1 });
  };
  function Hn() {
    var a = Fn(),
      b = Gn();
    yn(b) && !In() && !Jn() && O(124);
    if (!a.active && yn(b)) {
      In() &&
        ((a.active = !0),
        (a.kc = {}),
        (a.cmpId = 0),
        (a.tcfPolicyVersion = 0),
        (Bk().active = !0),
        (a.tcString = "tcunavailable"));
      tl();
      try {
        b.addEventListener(function (c) {
          if (c.internalErrorState !== 0)
            Kn(a), ul([P.g.R, P.g.ya, P.g.P]), (Bk().active = !0);
          else if (
            ((a.gdprApplies = c.gdprApplies),
            (a.cmpId = c.cmpId),
            (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
            Jn() && (a.active = !0),
            !Ln(c) || In() || Jn())
          ) {
            a.tcfPolicyVersion = c.tcfPolicyVersion;
            var d;
            if (c.gdprApplies === !1) {
              var e = {},
                f;
              for (f in En) En.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (Ln(c)) {
              var g = {},
                k;
              for (k in En)
                if (En.hasOwnProperty(k))
                  if (k === "1") {
                    var m,
                      n = c,
                      p = { Ql: !0 };
                    p = p === void 0 ? {} : p;
                    m = Dn(n)
                      ? n.gdprApplies === !1
                        ? !0
                        : n.tcString === "tcunavailable"
                        ? !p.Xj
                        : (p.Xj || n.gdprApplies !== void 0 || p.Ql) &&
                          (p.Xj ||
                            (typeof n.tcString === "string" &&
                              n.tcString.length))
                        ? Bn(n, "1", 0)
                        : !0
                      : !1;
                    g["1"] = m;
                  } else g[k] = Bn(c, k, En[k]);
              d = g;
            }
            if (d) {
              a.tcString = c.tcString || "tcempty";
              a.kc = d;
              var q = {},
                r = ((q[P.g.R] = a.kc["1"] ? "granted" : "denied"), q);
              a.gdprApplies !== !0
                ? (ul([P.g.R, P.g.ya, P.g.P]), (Bk().active = !0))
                : ((r[P.g.ya] = a.kc["3"] && a.kc["4"] ? "granted" : "denied"),
                  typeof a.tcfPolicyVersion === "number" &&
                  a.tcfPolicyVersion >= 4
                    ? (r[P.g.P] = a.kc["1"] && a.kc["7"] ? "granted" : "denied")
                    : ul([P.g.P]),
                  ol(
                    r,
                    { eventId: 0 },
                    {
                      gdprApplies: a ? a.gdprApplies : void 0,
                      tcString: Mn() || "",
                    }
                  ));
            }
          } else ul([P.g.R, P.g.ya, P.g.P]);
        });
      } catch (c) {
        Kn(a), ul([P.g.R, P.g.ya, P.g.P]), (Bk().active = !0);
      }
    }
  }
  function Kn(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function Ln(a) {
    return (
      a.eventStatus === "tcloaded" ||
      a.eventStatus === "useractioncomplete" ||
      a.eventStatus === "cmpuishown"
    );
  }
  function In() {
    return G.gtag_enable_tcf_support === !0;
  }
  function Jn() {
    return Fn().enableAdvertiserConsentMode === !0;
  }
  function Mn() {
    var a = Fn();
    if (a.active) return a.tcString;
  }
  function Nn() {
    var a = Fn();
    if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0";
  }
  function On(a) {
    if (!En.hasOwnProperty(String(a))) return !0;
    var b = Fn();
    return b.active && b.kc ? !!b.kc[String(a)] : !0;
  }
  var Pn = [P.g.R, P.g.U, P.g.P, P.g.ya],
    Qn = {},
    Rn = ((Qn[P.g.R] = 1), (Qn[P.g.U] = 2), Qn);
  function Sn(a) {
    if (a === void 0) return 0;
    switch (U(a, P.g.ka)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  function Tn(a) {
    if (cl() === "US-CO" && Cc.globalPrivacyControl === !0) return !1;
    var b = Sn(a);
    if (b === 3) return !1;
    switch (Nk(P.g.ya)) {
      case 1:
      case 3:
        return !0;
      case 2:
        return !1;
      case 4:
        return b === 2;
      case 0:
        return !0;
      default:
        return !1;
    }
  }
  function Un() {
    return Qk() || !Mk(P.g.R) || !Mk(P.g.U);
  }
  function Vn() {
    var a = {},
      b;
    for (b in Rn) Rn.hasOwnProperty(b) && (a[Rn[b]] = Nk(b));
    return "G1" + Ue(a[1] || 0) + Ue(a[2] || 0);
  }
  var Wn = {},
    Xn =
      ((Wn[P.g.R] = 0), (Wn[P.g.U] = 1), (Wn[P.g.P] = 2), (Wn[P.g.ya] = 3), Wn);
  function eo(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  function fo(a) {
    for (var b = "1", c = 0; c < Pn.length; c++) {
      var d = b,
        e,
        f = Pn[c],
        g = Lk.delegatedConsentTypes[f];
      e = g === void 0 ? 0 : Xn.hasOwnProperty(g) ? 12 | Xn[g] : 8;
      var k = Bk();
      k.accessedAny = !0;
      var m = k.entries[f] || {};
      e = (e << 2) | eo(m.implicit);
      b =
        d +
        ("" +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            e
          ] +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (eo(m.declare) << 4) | (eo(m.default) << 2) | eo(m.update)
          ]);
    }
    var n = b,
      p = (cl() === "US-CO" && Cc.globalPrivacyControl === !0 ? 1 : 0) << 3,
      q = (Qk() ? 1 : 0) << 2,
      r = Sn(a);
    b =
      n +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        p | q | r
      ];
    T(90) &&
      (b +=
        "" +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          (Lk.containerScopedDefaults.ad_storage << 4) |
            (Lk.containerScopedDefaults.analytics_storage << 2) |
            Lk.containerScopedDefaults.ad_user_data
        ] +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          ((zb(8) && Lk.usedContainerScopedDefaults ? 1 : 0) << 2) |
            Lk.containerScopedDefaults.ad_personalization
        ]);
    return b;
  }
  function go() {
    if (!Mk(P.g.P)) return "-";
    for (
      var a = Object.keys(qi), b = Ok(a), c = "", d = oa(a), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value;
      b[f] && (c += qi[f]);
    }
    (Lk.usedCorePlatformServices ? Lk.selectedAllCorePlatformServices : 1) &&
      (c += "o");
    return c || "-";
  }
  function ho() {
    return el() || ((In() || Jn()) && Nn() === "1") ? "1" : "0";
  }
  function io() {
    return (el() ? !0 : !(!In() && !Jn()) && Nn() === "1") || !Mk(P.g.P);
  }
  function jo() {
    var a = "0",
      b = "0",
      c;
    var d = Fn();
    c = d.active ? d.cmpId : void 0;
    typeof c === "number" &&
      c >= 0 &&
      c <= 4095 &&
      ((a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (c >> 6) & 63
      ]),
      (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        c & 63
      ]));
    var e = "0",
      f;
    var g = Fn();
    f = g.active ? g.tcfPolicyVersion : void 0;
    typeof f === "number" &&
      f >= 0 &&
      f <= 63 &&
      (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        f
      ]);
    var k = 0;
    el() && (k |= 1);
    Nn() === "1" && (k |= 2);
    In() && (k |= 4);
    var m;
    var n = Fn();
    m =
      n.enableAdvertiserConsentMode !== void 0
        ? n.enableAdvertiserConsentMode
          ? "1"
          : "0"
        : void 0;
    m === "1" && (k |= 8);
    Bk().waitPeriodTimedOut && (k |= 16);
    return (
      "1" +
      a +
      b +
      e +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k]
    );
  }
  function ko() {
    return cl() === "US-CO";
  }
  function lo() {
    var a = !1;
    return a;
  }
  var mo = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 };
  function no(a) {
    a = a === void 0 ? {} : a;
    var b = ag.ctid.split("-")[0].toUpperCase(),
      c = {};
    c.ctid = ag.ctid;
    c.Sm = ui.se;
    c.Wm = ui.Yg;
    c.xm = Lj.oe ? 2 : 1;
    c.gn = a.pk;
    c.ze = ag.canonicalContainerId;
    c.ze !== a.xa && (c.xa = a.xa);
    var d = Yj();
    c.Im = d ? d.canonicalContainerId : void 0;
    Bi ? ((c.Yf = mo[b]), c.Yf || (c.Yf = 0)) : (c.Yf = Fi ? 13 : 10);
    Oi.H
      ? ((c.Wf = 0), (c.xl = 2))
      : Di
      ? (c.Wf = 1)
      : lo()
      ? (c.Wf = 2)
      : (c.Wf = 3);
    var e = {};
    e[6] = Pj;
    Oi.D === 2 ? (e[7] = !0) : Oi.D === 1 && (e[2] = !0);
    c.Al = e;
    var f = a.Nf,
      g;
    var k = c.Yf,
      m = c.Wf;
    k === void 0
      ? (g = "")
      : (m || (m = 0), (g = "" + We(1, 1) + Te((k << 2) | m)));
    var n = c.xl,
      p = "4" + g + (n ? "" + We(2, 1) + Te(n) : ""),
      q,
      r = c.Wm;
    q = r && Ve.test(r) ? "" + We(3, 2) + r : "";
    var t,
      u = c.Sm;
    t = u ? "" + We(4, 1) + Te(u) : "";
    var v;
    var w = c.ctid;
    if (w && f) {
      var x = w.split("-"),
        y = x[0].toUpperCase();
      if (y !== "GTM" && y !== "OPT") v = "";
      else {
        var B = x[1];
        v = "" + We(5, 3) + Te(1 + B.length) + (c.xm || 0) + B;
      }
    } else v = "";
    var A = c.gn,
      C = c.ze,
      E = c.xa,
      D = c.ao,
      F =
        p +
        q +
        t +
        v +
        (A ? "" + We(6, 1) + Te(A) : "") +
        (C ? "" + We(7, 3) + Te(C.length) + C : "") +
        (E ? "" + We(8, 3) + Te(E.length) + E : "") +
        (D ? "" + We(9, 3) + Te(D.length) + D : ""),
      L;
    var M = c.Al;
    M = M === void 0 ? {} : M;
    for (
      var S = [], V = oa(Object.keys(M)), aa = V.next();
      !aa.done;
      aa = V.next()
    ) {
      var X = aa.value;
      S[Number(X)] = M[X];
    }
    if (S.length) {
      var R = We(10, 3),
        ma;
      if (S.length === 0) ma = Te(0);
      else {
        for (var la = [], ha = 0, ya = !1, Na = 0; Na < S.length; Na++) {
          ya = !0;
          var Fa = Na % 6;
          S[Na] && (ha |= 1 << Fa);
          Fa === 5 && (la.push(Te(ha)), (ha = 0), (ya = !1));
        }
        ya && la.push(Te(ha));
        ma = la.join("");
      }
      var Sa = ma;
      L = "" + R + Te(Sa.length) + Sa;
    } else L = "";
    var bb = c.Im;
    return F + L + (bb ? "" + We(11, 3) + Te(bb.length) + bb : "");
  }
  var oo = {
      Ej: "service_worker_endpoint",
      ah: "shared_user_id",
      bh: "shared_user_id_requested",
      ue: "shared_user_id_source",
    },
    po;
  function qo(a) {
    if (!po) {
      po = {};
      for (var b = oa(Object.keys(oo)), c = b.next(); !c.done; c = b.next())
        po[oo[c.value]] = !0;
    }
    return !!po[a];
  }
  function ro(a, b) {
    b = b === void 0 ? !1 : b;
    if (qo(a)) {
      var c,
        d,
        e =
          (d = (c = Gc("google_tag_data", {})).xcd) != null ? d : (c.xcd = {});
      if (e[a]) return e[a];
      if (b) {
        var f = void 0,
          g = 1,
          k = {},
          m = {
            set: function (n) {
              f = n;
              m.notify();
            },
            get: function () {
              return f;
            },
            subscribe: function (n) {
              k[String(g)] = n;
              return g++;
            },
            unsubscribe: function (n) {
              var p = String(n);
              return k.hasOwnProperty(p) ? (delete k[p], !0) : !1;
            },
            notify: function () {
              for (
                var n = oa(Object.keys(k)), p = n.next();
                !p.done;
                p = n.next()
              ) {
                var q = p.value;
                try {
                  k[q](a, f);
                } catch (r) {}
              }
            },
          };
        return (e[a] = m);
      }
    }
  }
  function so(a, b) {
    var c = ro(a, !0);
    c && c.set(b);
  }
  function to(a) {
    var b;
    return (b = ro(a)) == null ? void 0 : b.get();
  }
  function uo(a, b) {
    if (typeof b === "function") {
      var c;
      return (c = ro(a, !0)) == null ? void 0 : c.subscribe(b);
    }
  }
  function vo(a, b) {
    var c = ro(a);
    return c ? c.unsubscribe(b) : !1;
  }
  function wo(a) {
    return a.origin !== "null";
  }
  function xo(a, b, c, d) {
    var e;
    if (yo(d)) {
      for (
        var f = [], g = String(b || zo()).split(";"), k = 0;
        k < g.length;
        k++
      ) {
        var m = g[k].split("="),
          n = m[0].replace(/^\s*|\s*$/g, "");
        if (n && n === a) {
          var p = m
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          p && c && (p = decodeURIComponent(p));
          f.push(p);
        }
      }
      e = f;
    } else e = [];
    return e;
  }
  function Ao(a, b, c, d, e) {
    if (yo(e)) {
      var f = Bo(a, d, e);
      if (f.length === 1) return f[0].id;
      if (f.length !== 0) {
        f = Co(
          f,
          function (g) {
            return g.Gl;
          },
          b
        );
        if (f.length === 1) return f[0].id;
        f = Co(
          f,
          function (g) {
            return g.Km;
          },
          c
        );
        return f[0] ? f[0].id : void 0;
      }
    }
  }
  function Do(a, b, c, d) {
    var e = zo(),
      f = window;
    wo(f) && (f.document.cookie = a);
    var g = zo();
    return e !== g || (c !== void 0 && xo(b, g, !1, d).indexOf(c) >= 0);
  }
  function Eo(a, b, c, d) {
    function e(w, x, y) {
      if (y == null) return delete k[x], w;
      k[x] = y;
      return w + "; " + x + "=" + y;
    }
    function f(w, x) {
      if (x == null) return w;
      k[x] = !0;
      return w + "; " + x;
    }
    if (!yo(c.Db)) return 2;
    var g;
    b == null
      ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = Fo(b)),
        (g = a + "=" + b));
    var k = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date
      ? (m = c.expires.toUTCString())
      : c.expires != null && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.Bm);
    g = e(g, "samesite", c.Xm);
    c.Ym && (g = f(g, "secure"));
    var n = c.domain;
    if (n && n.toLowerCase() === "auto") {
      for (var p = Go(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
        var u = p[t] !== "none" ? p[t] : void 0,
          v = e(g, "domain", u);
        v = f(v, c.flags);
        try {
          d && d(a, k);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!Ho(u, c.path) && Do(v, a, b, c.Db)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, k);
    return Ho(n, c.path) ? 1 : Do(g, a, b, c.Db) ? 0 : 1;
  }
  function Io(a, b, c) {
    c.path == null && (c.path = "/");
    c.domain || (c.domain = "auto");
    return Eo(a, b, c);
  }
  function Co(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c
        ? d.push(k)
        : f === void 0 || m < f
        ? ((e = [k]), (f = m))
        : m === f && e.push(k);
    }
    return d.length > 0 ? d : e;
  }
  function Bo(a, b, c) {
    for (var d = [], e = xo(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || !k || b.indexOf(k) !== -1) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            Gl: Number(n[0]) || 1,
            Km: Number(n[1]) || 1,
          });
        }
      }
    }
    return d;
  }
  function Fo(a) {
    a && a.length > 1200 && (a = a.substring(0, 1200));
    return a;
  }
  var Jo = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Ko = /(^|\.)doubleclick\.net$/i;
  function Ho(a, b) {
    return (
      a !== void 0 &&
      (Ko.test(window.document.location.hostname) || (b === "/" && Jo.test(a)))
    );
  }
  function Lo(a) {
    if (!a) return 1;
    var b = a;
    zb(11) && a === "none" && (b = window.document.location.hostname);
    b = b.indexOf(".") === 0 ? b.substring(1) : b;
    return b.split(".").length;
  }
  function Mo(a) {
    if (!a || a === "/") return 1;
    a[0] !== "/" && (a = "/" + a);
    a[a.length - 1] !== "/" && (a += "/");
    return a.split("/").length - 1;
  }
  function No(a, b) {
    var c = "" + Lo(a),
      d = Mo(b);
    d > 1 && (c += "-" + d);
    return c;
  }
  var zo = function () {
      return wo(window) ? window.document.cookie : "";
    },
    yo = function (a) {
      return a && Hk().j()
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return Pk(b) && Mk(b);
          })
        : !0;
    },
    Go = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (b.length === 4) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Ko.test(e) || Jo.test(e) || a.push("none");
      return a;
    };
  function Oo(a) {
    var b = Math.round(Math.random() * 2147483647),
      c;
    if (a) {
      var d = 1,
        e,
        f,
        g;
      if (a)
        for (d = 0, f = a.length - 1; f >= 0; f--)
          (g = a.charCodeAt(f)),
            (d = ((d << 6) & 268435455) + g + (g << 14)),
            (e = d & 266338304),
            (d = e !== 0 ? d ^ (e >> 21) : d);
      c = String(b ^ (d & 2147483647));
    } else c = String(b);
    return c;
  }
  function Po(a) {
    return [Oo(a), Math.round(Ob() / 1e3)].join(".");
  }
  function Qo(a, b, c, d, e) {
    var f = Lo(b);
    return Ao(a, f, Mo(c), d, e);
  }
  function Ro(a, b, c, d) {
    return [b, No(c, d), a].join(".");
  }
  function So(a, b, c, d) {
    var e,
      f = Number(a.Cb != null ? a.Cb : void 0);
    f !== 0 && (e = new Date((b || Ob()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Db: d,
    };
  }
  var To;
  function Uo() {
    function a(g) {
      c(g.target || g.srcElement || {});
    }
    function b(g) {
      d(g.target || g.srcElement || {});
    }
    var c = Vo,
      d = Wo,
      e = Xo();
    if (!e.init) {
      Pc(H, "mousedown", a);
      Pc(H, "keyup", a);
      Pc(H, "submit", b);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        d(this);
        f.call(this);
      };
      e.init = !0;
    }
  }
  function Yo(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: c === 2,
      placement: c,
      forms: d,
      sameHost: e,
    };
    Xo().decorators.push(f);
  }
  function Zo(a, b, c) {
    for (var d = Xo().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g = d[f],
        k;
      if ((k = !c || g.forms))
        a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== H.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  k = !0;
                  break a;
                }
              } else if (n.indexOf(m[q]) >= 0 || (p && m[q].indexOf(n) >= 0)) {
                k = !0;
                break a;
              }
          k = !1;
        }
      if (k) {
        var r = g.placement;
        r === void 0 && (r = g.fragment ? 2 : 1);
        r === b && Rb(e, g.callback());
      }
    }
    return e;
  }
  function Xo() {
    var a = Gc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var $o = /(.*?)\*(.*?)\*(.*)/,
    ap = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    bp = /^(?:www\.|m\.|amp\.)+/,
    cp = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function dp(a) {
    var b = cp.exec(a);
    if (b) return { Oh: b[1], query: b[2], fragment: b[3] };
  }
  function ep(a, b) {
    var c = [
        Cc.userAgent,
        new Date().getTimezoneOffset(),
        Cc.userLanguage || Cc.language,
        Math.floor(Ob() / 60 / 1e3) - (b === void 0 ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = To)) {
      for (var e = Array(256), f = 0; f < 256; f++) {
        for (var g = f, k = 0; k < 8; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    To = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ To[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function fp() {
    return function (a) {
      var b = nj(G.location.href),
        c = b.search.replace("?", ""),
        d = gj(c, "_gl", !1, !0) || "";
      a.query = gp(d) || {};
      var e = hj(b, "fragment"),
        f;
      var g = -1;
      if (Tb(e, "_gl=")) g = 4;
      else {
        var k = e.indexOf("&_gl=");
        k > 0 && (g = k + 3 + 2);
      }
      if (g < 0) f = void 0;
      else {
        var m = e.indexOf("&", g);
        f = m < 0 ? e.substring(g) : e.substring(g, m);
      }
      a.fragment = gp(f || "") || {};
    };
  }
  function hp(a) {
    var b = fp(),
      c = Xo();
    c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
    var d = {},
      e = c.data;
    e && (Rb(d, e.query), a && Rb(d, e.fragment));
    return d;
  }
  var gp = function (a) {
    try {
      var b = ip(a, 3);
      if (b !== void 0) {
        for (
          var c = {}, d = b ? b.split("*") : [], e = 0;
          e + 1 < d.length;
          e += 2
        ) {
          var f = d[e],
            g = sb(d[e + 1]);
          c[f] = g;
        }
        ub("TAGGING", 6);
        return c;
      }
    } catch (k) {
      ub("TAGGING", 8);
    }
  };
  function ip(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; e < 3; ++e) {
          var f = $o.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && g[1] === "1") {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === ep(k, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return k;
        ub("TAGGING", 7);
      }
    }
  }
  function jp(a, b, c, d, e) {
    function f(p) {
      var q = p,
        r = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(q),
        t = q;
      if (r) {
        var u = r[2],
          v = r[4];
        t = r[1];
        v && (t = t + u + v);
      }
      p = t;
      var w = p.charAt(p.length - 1);
      p && w !== "&" && (p += "&");
      return p + n;
    }
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var g = dp(c);
    if (!g) return "";
    var k = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (m.substring(1).length !== 0 && e) || (m = "#" + f(m.substring(1)))
      : (k = "?" + f(k.substring(1)));
    return "" + g.Oh + k + m;
  }
  function kp(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var t in n)
          if (n.hasOwnProperty(t)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var u,
          v = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            x !== void 0 &&
              x === x &&
              x !== null &&
              x.toString() !== "[object Object]" &&
              (v.push(w), v.push(rb(String(x))));
          }
        var y = v.join("*");
        u = ["1", ep(y), y].join("*");
        d
          ? (zb(4) || zb(1) || !p) && lp("_gl", u, a, p, q)
          : mp("_gl", u, a, p, q);
      }
    }
    var d = (a.tagName || "").toUpperCase() === "FORM",
      e = Zo(b, 1, d),
      f = Zo(b, 2, d),
      g = Zo(b, 4, d),
      k = Zo(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    zb(1) && c(g, !0, !0);
    for (var m in k) k.hasOwnProperty(m) && np(m, k[m], a);
  }
  function np(a, b, c) {
    c.tagName.toLowerCase() === "a"
      ? mp(a, b, c)
      : c.tagName.toLowerCase() === "form" && lp(a, b, c);
  }
  function mp(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !zb(5) || d)) {
        var k = G.location.href,
          m = dp(c.href),
          n = dp(k);
        g = !(m && n && m.Oh === n.Oh && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = jp(a, b, c.href, d, e);
      sc.test(p) && (c.href = p);
    }
  }
  function lp(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if (f !== "get" || d) {
        if (f === "get" || f === "post") {
          var g = jp(a, b, c.action, d, e);
          sc.test(g) && (c.action = g);
        }
      } else {
        for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
          var p = k[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = H.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function Vo(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && d > 0; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        (f !== "http:" && f !== "https:") || kp(e, e.hostname);
      }
    } catch (g) {}
  }
  function Wo(a) {
    try {
      if (a.action) {
        var b = hj(nj(a.action), "host");
        kp(a, b);
      }
    } catch (c) {}
  }
  function op(a, b, c, d) {
    Uo();
    var e = c === "fragment" ? 2 : 1;
    d = !!d;
    Yo(a, b, e, d, !1);
    e === 2 && ub("TAGGING", 23);
    d && ub("TAGGING", 24);
  }
  function pp(a, b) {
    Uo();
    Yo(a, [jj(G.location, "host", !0)], b, !0, !0);
  }
  function qp() {
    var a = H.location.hostname,
      b = ap.exec(H.referrer);
    if (!b) return !1;
    var c = b[2],
      d = b[1],
      e = "";
    if (c) {
      var f = c.split("/"),
        g = f[1];
      e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
      if (d.indexOf("xn--") === 0) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-");
    }
    var k = a.replace(bp, ""),
      m = e.replace(bp, "");
    return k === m || Ub(k, "." + m);
  }
  function rp(a, b) {
    return a === !1 ? !1 : a || b || qp();
  }
  var sp = ["1"],
    tp = {},
    up = {};
  function vp(a, b) {
    b = b === void 0 ? !0 : b;
    var c = wp(a.prefix);
    if (!tp[c])
      if (xp(c, a.path, a.domain)) {
        var d = up[wp(a.prefix)];
        yp(a, d ? d.id : void 0, d ? d.Ih : void 0);
      } else {
        var e = pj("auiddc");
        if (e) ub("TAGGING", 17), (tp[c] = e);
        else if (b) {
          var f = wp(a.prefix),
            g = Po();
          zp(f, g, a);
          xp(c, a.path, a.domain);
        }
      }
  }
  function yp(a, b, c) {
    var d = wp(a.prefix),
      e = tp[d];
    if (e) {
      var f = e.split(".");
      if (f.length === 2) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(Ob() / 1e3)));
          zp(d, k, a, g * 1e3);
        }
      }
    }
  }
  function zp(a, b, c, d) {
    var e = Ro(b, "1", c.domain, c.path),
      f = So(c, d);
    f.Db = Ap();
    Io(a, e, f);
  }
  function xp(a, b, c) {
    var d = Qo(a, b, c, sp, Ap());
    if (!d) return !1;
    Bp(a, d);
    return !0;
  }
  function Bp(a, b) {
    var c = b.split(".");
    c.length === 5
      ? ((tp[a] = c.slice(0, 2).join(".")),
        (up[a] = { id: c.slice(2, 4).join("."), Ih: Number(c[4]) || 0 }))
      : c.length === 3
      ? (up[a] = { id: c.slice(0, 2).join("."), Ih: Number(c[2]) || 0 })
      : (tp[a] = b);
  }
  function wp(a) {
    return (a || "_gcl") + "_au";
  }
  function Cp(a) {
    function b() {
      Mk(c) && a();
    }
    var c = Ap();
    Tk(function () {
      b();
      Mk(c) || Uk(b, c);
    }, c);
  }
  function Dp(a) {
    var b = hp(!0),
      c = wp(a.prefix);
    Cp(function () {
      var d = b[c];
      if (d) {
        Bp(c, d);
        var e = Number(tp[c].split(".")[1]) * 1e3;
        if (e) {
          ub("TAGGING", 16);
          var f = So(a, e);
          f.Db = Ap();
          var g = Ro(d, "1", a.domain, a.path);
          Io(c, g, f);
        }
      }
    });
  }
  function Ep(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = Qo(a, e.path, e.domain, sp, Ap());
      k && (g[a] = k);
      return g;
    };
    Cp(function () {
      op(f, b, c, d);
    });
  }
  function Ap() {
    return ["ad_storage", "ad_user_data"];
  }
  function Fp(a) {
    for (
      var b = [],
        c = H.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          di: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  }
  function Gp(a, b) {
    var c = Fp(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !(f[0] !== "1" || (b && f.length < 3) || (!b && f.length !== 3)) &&
        Number(f[1])
      ) {
        d[c[e].di] || (d[c[e].di] = []);
        var g = { version: f[0], timestamp: Number(f[1]) * 1e3, aa: f[2] };
        b && f.length > 3 && (g.labels = f.slice(3));
        d[c[e].di].push(g);
      }
    }
    return d;
  }
  var Hp = {},
    Ip =
      ((Hp.k = { Na: /^[\w-]+$/ }),
      (Hp.b = { Na: /^[\w-]+$/, Vh: !0 }),
      (Hp.i = { Na: /^[1-9]\d*$/ }),
      Hp);
  var Jp = {},
    Mp =
      ((Jp[5] = { zk: { 2: Kp }, jh: ["k", "i", "b"] }),
      (Jp[4] = { zk: { 2: Kp, GCL: Lp }, jh: ["k", "i", "b"] }),
      Jp);
  function Np(a) {
    var b = Mp[5];
    if (b) {
      var c = a.split(".")[0];
      if (c) {
        var d = b.zk[c];
        if (d) return d(a, 5);
      }
    }
  }
  function Kp(a, b) {
    var c = a.split(".");
    if (c.length === 3) {
      var d = {},
        e = Mp[b];
      if (e) {
        for (
          var f = e.jh, g = oa(c[2].split("$")), k = g.next();
          !k.done;
          k = g.next()
        ) {
          var m = k.value,
            n = m[0];
          if (f.indexOf(n) !== -1)
            try {
              var p = decodeURIComponent(m.substring(1)),
                q = Ip[n];
              q && (q.Vh ? ((d[n] = d[n] || []), d[n].push(p)) : (d[n] = p));
            } catch (r) {}
        }
        return d;
      }
    }
  }
  function Op(a, b) {
    var c = Mp[5];
    if (c) {
      for (var d = [], e = oa(c.jh), f = e.next(); !f.done; f = e.next()) {
        var g = f.value,
          k = Ip[g];
        if (k) {
          var m = a[g];
          if (m !== void 0)
            if (k.Vh && Array.isArray(m))
              for (var n = oa(m), p = n.next(); !p.done; p = n.next())
                d.push(encodeURIComponent("" + g + p.value));
            else d.push(encodeURIComponent("" + g + m));
        }
      }
      return ["2", b || "1", d.join("$")].join(".");
    }
  }
  function Lp(a) {
    var b = a.split(".");
    b.shift();
    var c = b.shift(),
      d = b.shift(),
      e = {};
    return (e.k = d), (e.i = c), (e.b = b), e;
  }
  var Pp = new Map([
    [5, "ad_storage"],
    [4, ["ad_storage", "ad_user_data"]],
  ]);
  function Qp(a) {
    if (Mp[5]) {
      for (
        var b = [],
          c = xo(a, void 0, void 0, Pp.get(5)),
          d = oa(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = Np(e.value);
        f && (Rp(f), b.push(f));
      }
      return b;
    }
  }
  function Sp(a, b, c, d) {
    c = c || {};
    var e = No(c.domain, c.path),
      f = Op(b, e);
    if (f) {
      var g = So(c, d, void 0, Pp.get(5));
      Io(a, f, g);
    }
  }
  function Tp(a, b) {
    var c = b.Na;
    return typeof c === "function" ? c(a) : c.test(a);
  }
  function Rp(a) {
    for (
      var b = oa(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { Be: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.Be = Ip[e];
      d.Be
        ? d.Be.Vh
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (k) {
                      return Tp(k, g.Be);
                    };
                  })(d)
                )
              : void 0)
          : (typeof f === "string" && Tp(f, d.Be)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
  }
  var Up = /^\w+$/,
    Vp = /^[\w-]+$/,
    Wp = {},
    Xp =
      ((Wp.aw = "_aw"),
      (Wp.dc = "_dc"),
      (Wp.gf = "_gf"),
      (Wp.gp = "_gp"),
      (Wp.gs = "_gs"),
      (Wp.ha = "_ha"),
      (Wp.ag = "_ag"),
      (Wp.gb = "_gb"),
      Wp);
  function Yp() {
    return ["ad_storage", "ad_user_data"];
  }
  function Zp(a) {
    return !Hk().j() || Mk(a);
  }
  function $p(a, b) {
    function c() {
      var d = Zp(b);
      d && a();
      return d;
    }
    Tk(function () {
      c() || Uk(c, b);
    }, b);
  }
  function aq(a) {
    return bq(a).map(function (b) {
      return b.aa;
    });
  }
  function cq(a) {
    return dq(a)
      .filter(function (b) {
        return b.aa;
      })
      .map(function (b) {
        return b.aa;
      });
  }
  function dq(a) {
    var b = eq(a.prefix),
      c = fq("gb", b),
      d = fq("ag", b);
    if (!d || !c) return [];
    var e = function (k) {
        return function (m) {
          m.type = k;
          return m;
        };
      },
      f = bq(c).map(e("gb")),
      g = (zb(7) ? gq(d) : []).map(e("ag"));
    return f.concat(g).sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
  }
  function hq(a, b, c, d, e) {
    var f = Eb(a, function (g) {
      return g.aa === c;
    });
    f
      ? ((f.timestamp = Math.max(f.timestamp, d)),
        (f.labels = iq(f.labels || [], e || [])))
      : a.push({ version: b, aa: c, timestamp: d, labels: e });
  }
  function gq(a) {
    for (
      var b = Qp(a) || [], c = [], d = oa(b), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value,
        g = f,
        k = jq(f);
      k && hq(c, "2", g.k, k, g.b || []);
    }
    return c.sort(function (m, n) {
      return n.timestamp - m.timestamp;
    });
  }
  function bq(a) {
    for (
      var b = [], c = xo(a, H.cookie, void 0, Yp()), d = oa(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = kq(e.value);
      if (f != null) {
        var g = f;
        hq(b, g.version, g.aa, g.timestamp, g.labels);
      }
    }
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return lq(b);
  }
  function iq(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function eq(a) {
    return a && typeof a === "string" && a.match(Up) ? a : "_gcl";
  }
  function mq(a, b) {
    var c = zb(7),
      d = nj(a),
      e = hj(d, "query", !1, void 0, "gclid"),
      f = hj(d, "query", !1, void 0, "gclsrc"),
      g = hj(d, "query", !1, void 0, "wbraid");
    g = $b(g);
    var k;
    c && (k = hj(d, "query", !1, void 0, "gbraid"));
    var m = hj(d, "query", !1, void 0, "gad_source"),
      n = hj(d, "query", !1, void 0, "dclid");
    if (b && (!e || !f || !g || (c && !k))) {
      var p = d.hash.replace("#", "");
      e = e || gj(p, "gclid", !1);
      f = f || gj(p, "gclsrc", !1);
      g = g || gj(p, "wbraid", !1);
      c && (k = k || gj(p, "gbraid", !1));
      m = m || gj(p, "gad_source", !1);
    }
    return nq(e, f, n, g, k, m);
  }
  function oq() {
    return mq(G.location.href, !0);
  }
  function nq(a, b, c, d, e, f) {
    var g = {},
      k = function (m, n) {
        g[n] || (g[n] = []);
        g[n].push(m);
      };
    g.gclid = a;
    g.gclsrc = b;
    g.dclid = c;
    if (a !== void 0 && a.match(Vp))
      switch (b) {
        case void 0:
          k(a, "aw");
          break;
        case "aw.ds":
          k(a, "aw");
          k(a, "dc");
          break;
        case "ds":
          k(a, "dc");
          break;
        case "3p.ds":
          k(a, "dc");
          break;
        case "gf":
          k(a, "gf");
          break;
        case "ha":
          k(a, "ha");
      }
    c && k(c, "dc");
    d !== void 0 && Vp.test(d) && ((g.wbraid = d), k(d, "gb"));
    zb(7) && e !== void 0 && Vp.test(e) && ((g.gbraid = e), k(e, "ag"));
    f !== void 0 && Vp.test(f) && ((g.gad_source = f), k(f, "gs"));
    return g;
  }
  function pq(a) {
    var b = oq();
    if (zb(6)) {
      for (
        var c = !0, d = oa(Object.keys(b)), e = d.next();
        !e.done;
        e = d.next()
      )
        if (b[e.value] !== void 0) {
          c = !1;
          break;
        }
      c && (b = mq(G.document.referrer, !1));
    }
    qq(b, !1, a);
  }
  function qq(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = eq(c.prefix),
      g = d || Ob(),
      k = Math.round(g / 1e3),
      m = Yp(),
      n = !1,
      p = !1,
      q = function () {
        if (Zp(m)) {
          var r = So(c, g, !0);
          r.Db = m;
          for (
            var t = function (F, L) {
                var M = fq(F, f);
                M && (Io(M, L, r), F !== "gb" && (n = !0));
              },
              u = function (F) {
                var L = ["GCL", k, F];
                e.length > 0 && L.push(e.join("."));
                return L.join(".");
              },
              v = oa(["aw", "dc", "gf", "ha", "gp"]),
              w = v.next();
            !w.done;
            w = v.next()
          ) {
            var x = w.value;
            a[x] && t(x, u(a[x][0]));
          }
          if (!n && a.gb) {
            var y = a.gb[0],
              B = fq("gb", f);
            (!b &&
              bq(B).some(function (F) {
                return F.aa === y && F.labels && F.labels.length > 0;
              })) ||
              t("gb", u(y));
          }
        }
        if (!p && zb(7) && a.gbraid && Zp("ad_storage") && ((p = !0), !n)) {
          var A = a.gbraid,
            C = fq("ag", f);
          if (
            b ||
            !(zb(7) ? gq(C) : []).some(function (F) {
              return F.aa === A && F.labels && F.labels.length > 0;
            })
          ) {
            var E = {},
              D = ((E.k = A), (E.i = "" + k), (E.b = e), E);
            Sp(C, D, c, g);
          }
        }
        rq(a, f, g, c);
      };
    Tk(function () {
      q();
      Zp(m) || Uk(q, m);
    }, m);
  }
  function rq(a, b, c, d) {
    if (a.gad_source !== void 0 && Zp("ad_storage")) {
      var e = fq("gs", b);
      if (e) {
        var f = Math.round((Ob() - (ad() || 0)) / 1e3),
          g = {},
          k = ((g.k = a.gad_source), (g.i = "" + f), g);
        Sp(e, k, d, c);
      }
    }
  }
  function sq(a, b) {
    var c = hp(!0);
    $p(function () {
      for (var d = eq(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (Xp[f] !== void 0) {
          var g = fq(f, d),
            k = c[g];
          if (k) {
            var m = Math.min(tq(k), Ob()),
              n;
            b: {
              for (
                var p = m, q = xo(g, H.cookie, void 0, Yp()), r = 0;
                r < q.length;
                ++r
              )
                if (tq(q[r]) > p) {
                  n = !0;
                  break b;
                }
              n = !1;
            }
            if (!n) {
              var t = So(b, m, !0);
              t.Db = Yp();
              Io(g, k, t);
            }
          }
        }
      }
      qq(nq(c.gclid, c.gclsrc), !1, b);
    }, Yp());
  }
  function uq(a) {
    var b = [];
    zb(7) && b.push("ag");
    if (b.length !== 0) {
      var c = hp(!0),
        d = eq(a.prefix);
      $p(
        function () {
          for (var e = 0; e < b.length; ++e) {
            var f = fq(b[e], d);
            if (f) {
              var g = c[f];
              if (g) {
                var k = Np(g);
                if (k) {
                  var m = jq(k);
                  m || (m = Ob());
                  var n;
                  a: {
                    for (var p = m, q = Qp(f), r = 0; r < q.length; ++r)
                      if (jq(q[r]) > p) {
                        n = !0;
                        break a;
                      }
                    n = !1;
                  }
                  if (n) break;
                  k.i = "" + Math.round(m / 1e3);
                  Sp(f, k, a, m);
                }
              }
            }
          }
        },
        ["ad_storage"]
      );
    }
  }
  function fq(a, b) {
    var c = Xp[a];
    if (c !== void 0) return b + c;
  }
  function tq(a) {
    return vq(a.split(".")).length !== 0
      ? (Number(a.split(".")[1]) || 0) * 1e3
      : 0;
  }
  function jq(a) {
    return a ? (Number(a.i) || 0) * 1e3 : 0;
  }
  function kq(a) {
    var b = vq(a.split("."));
    return b.length === 0
      ? null
      : {
          version: b[0],
          aa: b[2],
          timestamp: (Number(b[1]) || 0) * 1e3,
          labels: b.slice(3),
        };
  }
  function vq(a) {
    return a.length < 3 ||
      (a[0] !== "GCL" && a[0] !== "1") ||
      !/^\d+$/.test(a[1]) ||
      !Vp.test(a[2])
      ? []
      : a;
  }
  function wq(a, b, c, d, e) {
    if (Array.isArray(b) && wo(G)) {
      var f = eq(e),
        g = function () {
          for (var k = {}, m = 0; m < a.length; ++m) {
            var n = fq(a[m], f);
            if (n) {
              var p = xo(n, H.cookie, void 0, Yp());
              p.length && (k[n] = p.sort()[p.length - 1]);
            }
          }
          return k;
        };
      $p(function () {
        op(g, b, c, d);
      }, Yp());
    }
  }
  function xq(a, b, c, d) {
    if (Array.isArray(a) && wo(G)) {
      var e = [];
      zb(7) && e.push("ag");
      if (e.length !== 0) {
        var f = eq(d),
          g = function () {
            for (var k = {}, m = 0; m < e.length; ++m) {
              var n = fq(e[m], f);
              if (!n) return {};
              var p = Qp(n);
              if (p.length) {
                var q = p.sort(function (r, t) {
                  return jq(t) - jq(r);
                })[0];
                k[n] = Op(q);
              }
            }
            return k;
          };
        $p(
          function () {
            op(g, a, b, c);
          },
          ["ad_storage"]
        );
      }
    }
  }
  function lq(a) {
    return a.filter(function (b) {
      return Vp.test(b.aa);
    });
  }
  function yq(a, b) {
    if (wo(G)) {
      for (var c = eq(b.prefix), d = {}, e = 0; e < a.length; e++)
        Xp[a[e]] && (d[a[e]] = Xp[a[e]]);
      $p(function () {
        z(d, function (f, g) {
          var k = xo(c + g, H.cookie, void 0, Yp());
          k.sort(function (t, u) {
            return tq(u) - tq(t);
          });
          if (k.length) {
            var m = k[0],
              n = tq(m),
              p = vq(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
              q = {},
              r;
            r = vq(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
            q[f] = [r];
            qq(q, !0, b, n, p);
          }
        });
      }, Yp());
    }
  }
  function zq(a) {
    var b = [],
      c = [];
    zb(7) && (b.push("ag"), c.push("gbraid"));
    b.length !== 0 &&
      $p(
        function () {
          for (var d = eq(a.prefix), e = 0; e < b.length; ++e) {
            var f = fq(b[e], d);
            if (!f) break;
            var g = Qp(f);
            if (g.length) {
              var k = g.sort(function (q, r) {
                  return jq(r) - jq(q);
                })[0],
                m = jq(k),
                n = k.b,
                p = {};
              p[c[e]] = k.k;
              qq(p, !0, a, m, n);
            }
          }
        },
        ["ad_storage"]
      );
  }
  function Aq(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  function Bq(a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (Qk()) {
      var c = oq();
      if (Aq(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.wbraid);
        zb(7) && b(d, "gbraid", c.gbraid);
        pp(function () {
          return d;
        }, 3);
        pp(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  }
  function Cq(a) {
    if (!zb(1)) return null;
    var b = hp(!0).gad_source;
    if (b != null) return (G.location.hash = ""), b;
    if (zb(2)) {
      var c = nj(G.location.href);
      b = hj(c, "query", !1, void 0, "gad_source");
      if (b != null) return b;
      var d = oq();
      if (Aq(d, a)) return "0";
    }
    return null;
  }
  function Dq(a) {
    var b = Cq(a);
    b != null &&
      pp(function () {
        var c = {};
        return (c.gad_source = b), c;
      }, 4);
  }
  function Eq(a, b, c) {
    var d = [];
    if (b.length === 0) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        k = g.type ? g.type : "gcl";
      (g.labels || []).indexOf(c) === -1
        ? (a.push(0), e[k] || d.push(g))
        : a.push(1);
      e[k] = !0;
    }
    return d;
  }
  function Fq(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!Zp(Yp())) return e;
    var f = bq(a),
      g = Eq(e, f, b);
    if (g.length && !d)
      for (var k = oa(g), m = k.next(); !m.done; m = k.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1e3), n.aa]
            .concat(n.labels || [], [b])
            .join("."),
          r = So(c, p, !0);
        r.Db = Yp();
        Io(a, q, r);
      }
    return e;
  }
  function Gq(a, b) {
    var c = [];
    b = b || {};
    var d = dq(b),
      e = Eq(c, d, a);
    if (e.length)
      for (var f = oa(e), g = f.next(); !g.done; g = f.next()) {
        var k = g.value,
          m = eq(b.prefix),
          n = fq(k.type, m);
        if (!n) break;
        var p = k,
          q = p.version,
          r = p.aa,
          t = p.labels,
          u = p.timestamp,
          v = Math.round(u / 1e3);
        if (k.type === "ag") {
          var w = {},
            x = ((w.k = r), (w.i = "" + v), (w.b = (t || []).concat([a])), w);
          Sp(n, x, b, u);
        } else if (k.type === "gb") {
          var y = [q, v, r].concat(t || [], [a]).join("."),
            B = So(b, u, !0);
          B.Db = Yp();
          Io(n, y, B);
        }
      }
    return c;
  }
  function Hq(a, b) {
    var c = eq(b),
      d = fq(a, c);
    if (!d) return 0;
    var e;
    e = a === "ag" ? (zb(7) ? gq(d) : []) : bq(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Iq(a) {
    for (var b = 0, c = oa(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++)
        b = Math.max(b, Number(e[f].timestamp));
    return b;
  }
  function Jq(a, b) {
    var c = Math.max(Hq("aw", a), Iq(Zp(Yp()) ? Gp() : {})),
      d = Math.max(Hq("gb", a), Iq(Zp(Yp()) ? Gp("_gac_gb", !0) : {}));
    zb(7) && b && (d = Math.max(d, Hq("ag", a)));
    return d > c;
  }
  var Kq = function (a, b, c) {
      var d = (vi.joined_auid = vi.joined_auid || {}),
        e = (c ? a || "_gcl" : "") + "." + b;
      if (d[e]) return !0;
      d[e] = !0;
      return !1;
    },
    Lq = function () {
      var a = nj(G.location.href),
        b = void 0,
        c = void 0,
        d = hj(a, "query", !1, void 0, "gad_source"),
        e = a.hash.replace("#", ""),
        f = gj(e, "gad_source", !1);
      d && f
        ? ((b = d), (c = 1))
        : d
        ? ((b = d), (c = 2))
        : f && ((b = f), (c = 3));
      return { rd: b, Uj: c };
    },
    Mq = function () {
      var a = nj(G.location.href),
        b = hj(a, "query", !1, void 0, "gad_source");
      if (b === void 0) {
        var c = a.hash.replace("#", "");
        b = gj(c, "gad_source", !1);
      }
      return b;
    },
    Nq = function () {
      var a = nj(G.location.href).search.replace("?", "");
      return gj(a, "gad", !1, !0) === "1";
    },
    Oq = function () {
      var a = pn(!1) === 1 ? G.top.location.href : G.location.href;
      return (a = a.replace(/[\?#].*$/, ""));
    },
    Pq = function (a) {
      var b = [];
      z(a, function (c, d) {
        d = lq(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].aa);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    Rq = function (a, b, c) {
      if (a === "aw" || a === "dc" || a === "gb") {
        var d = pj("gcl" + a);
        if (d) return d.split(".");
      }
      var e = eq(b);
      if (e === "_gcl") {
        var f = !W(Qq()) && c,
          g;
        g = oq()[a] || [];
        if (g.length > 0) return f ? ["0"] : g;
      }
      var k = fq(a, e);
      return k ? aq(k) : [];
    },
    Sq = function (a) {
      var b = Qq();
      sl(function () {
        a();
        W(b) || Uk(a, b);
      }, b);
    },
    Qq = function () {
      return [P.g.R, P.g.P];
    },
    Tq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Uq = /^www.googleadservices.com$/,
    Vq = function (a, b) {
      return Rq("aw", a, b);
    },
    Wq = function (a, b) {
      return Rq("dc", a, b);
    },
    Xq = function (a, b, c, d, e) {
      var f = oq(),
        g = [],
        k = c && Tn(c),
        m = f.gclid,
        n = f.dclid,
        p = f.gclsrc || "aw",
        q = Nq(),
        r,
        t;
      if (T(64)) {
        var u = Lq();
        r = u.rd;
        t = u.Uj;
      } else r = Mq();
      !m ||
        (p !== "aw.ds" && p !== "aw" && p !== "ds" && p !== "3p.ds") ||
        g.push({ aa: m, Ie: p });
      n && g.push({ aa: n, Ie: "ds" });
      g.length === 2 && O(147);
      g.length === 0 && f.wbraid && g.push({ aa: f.wbraid, Ie: "gb" });
      g.length === 0 && p === "aw.ds" && g.push({ aa: "", Ie: "aw.ds" });
      Sq(function () {
        var v = W(Qq());
        if (v) {
          vp(a);
          var w = [],
            x = v ? tp[wp(a.prefix)] : void 0;
          x && w.push("auid=" + x);
          if (W(P.g.P)) {
            e && w.push("userId=" + e);
            var y = to(oo.ah);
            if (y === void 0) so(oo.bh, !0);
            else {
              var B = to(oo.ue);
              w.push("ga_uid=" + B + "." + y);
            }
          }
          var A = H.referrer ? hj(nj(H.referrer), "host") : "",
            C = v || !d ? g : [];
          C.length === 0 &&
            (Tq.test(A) || Uq.test(A)) &&
            C.push({ aa: "", Ie: "" });
          if (C.length !== 0 || q || r !== void 0) {
            A && w.push("ref=" + encodeURIComponent(A));
            var E = Oq();
            w.push("url=" + encodeURIComponent(E));
            w.push("tft=" + Ob());
            var D = ad();
            D !== void 0 && w.push("tfd=" + Math.round(D));
            var F = pn(!0);
            w.push("frm=" + F);
            q && w.push("gad=1");
            r !== void 0 && w.push("gad_source=" + encodeURIComponent(r));
            t !== void 0 &&
              w.push("gad_source_src=" + encodeURIComponent(t.toString()));
            if (!c) {
              var L = {};
              c = gm(Xl(new Wl(0), ((L[P.g.ka] = Bm.D[P.g.ka]), L)));
            } else if (!T(77)) {
              var M = {};
              c = gm(Xl(new Wl(0), ((M[P.g.ka] = k), M)));
            }
            w.push("gtm=" + no({ xa: b }));
            Un() && w.push("gcs=" + Vn());
            w.push("gcd=" + fo(c));
            io() && w.push("dma_cps=" + go());
            w.push("dma=" + ho());
            Tn(c) ? w.push("npa=0") : w.push("npa=1");
            ko() && w.push("_ng=1");
            yn(Gn()) && w.push("tcfd=" + jo());
            var S = Nn();
            S && w.push("gdpr=" + S);
            var V = Mn();
            V && w.push("gdpr_consent=" + V);
            T(17) && w.push("apve=" + (T(18) ? 1 : 0));
            Oi.j && w.push("tag_exp=" + Oi.j);
            if (C.length > 0)
              for (var aa = 0; aa < C.length; aa++) {
                var X = C[aa],
                  R = X.aa,
                  ma = X.Ie;
                if (!Kq(a.prefix, ma + "." + R, x !== void 0)) {
                  var la =
                    "https://adservice.google.com/pagead/regclk?" + w.join("&");
                  R !== ""
                    ? (la =
                        ma === "gb"
                          ? la + "&wbraid=" + R
                          : la + "&gclid=" + R + "&gclsrc=" + ma)
                    : ma === "aw.ds" && (la += "&gclsrc=aw.ds");
                  Vc(la);
                }
              }
            else if (
              (q || r !== void 0) &&
              !Kq(a.prefix, "gad", x !== void 0)
            ) {
              var ha =
                "https://adservice.google.com/pagead/regclk?" + w.join("&");
              Vc(ha);
            }
          }
        }
      });
    };
  function Yq() {
    vi.dedupe_gclid || (vi.dedupe_gclid = Po());
    return vi.dedupe_gclid;
  }
  var Zq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    $q = /^www.googleadservices.com$/;
  function ar(a) {
    a || (a = br());
    return a.rn
      ? !1
      : a.bm || a.dm || a.gm || a.fm || a.zh || a.rd || a.Pl || a.Tl
      ? !0
      : !1;
  }
  function br() {
    var a = {},
      b = hp(!0);
    a.rn = !!b._up;
    var c = oq();
    a.bm = c.aw !== void 0;
    a.dm = c.dc !== void 0;
    a.gm = c.wbraid !== void 0;
    a.fm = c.gbraid !== void 0;
    var d = nj(G.location.href),
      e = hj(d, "query", !1, void 0, "gad");
    a.zh = e !== void 0;
    if (!a.zh) {
      var f = d.hash.replace("#", ""),
        g = gj(f, "gad", !1);
      a.zh = g !== void 0;
    }
    a.rd = hj(d, "query", !1, void 0, "gad_source");
    if (a.rd === void 0) {
      var k = d.hash.replace("#", ""),
        m = gj(k, "gad_source", !1);
      a.rd = m;
    }
    var n = H.referrer ? hj(nj(H.referrer), "host") : "";
    a.Tl = Zq.test(n);
    a.Pl = $q.test(n);
    return a;
  }
  var cr = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    dr = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    er = /^\d+\.fls\.doubleclick\.net$/,
    fr = /;gac=([^;?]+)/,
    gr = /;gacgb=([^;?]+)/;
  function hr(a, b) {
    if (er.test(H.location.host)) {
      var c = H.location.href.match(b);
      return c && c.length === 2 && c[1].match(cr)
        ? decodeURIComponent(c[1])
        : "";
    }
    for (
      var d = [], e = oa(Object.keys(a)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++)
        k.push(m[n].aa);
      d.push(g + ":" + k.join(","));
    }
    return d.length > 0 ? d.join(";") : "";
  }
  function ir(a, b, c) {
    for (
      var d = Zp(Yp()) ? Gp("_gac_gb", !0) : {},
        e = [],
        f = !1,
        g = oa(Object.keys(d)),
        k = g.next();
      !k.done;
      k = g.next()
    ) {
      var m = k.value,
        n = Fq("_gac_gb_" + m, a, b, c);
      f =
        f ||
        (n.length !== 0 &&
          n.some(function (p) {
            return p === 1;
          }));
      e.push(m + ":" + n.join(","));
    }
    return { Ol: f ? e.join(";") : "", Nl: hr(d, gr) };
  }
  function jr(a) {
    var b = H.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
    return b && b.length === 2 && b[1].match(dr) ? b[1] : void 0;
  }
  function kr(a) {
    var b = { vh: void 0, wh: void 0 },
      c,
      d;
    er.test(H.location.host) && ((c = jr("gclgs")), (d = jr("gclst")));
    if (c && d) (b.vh = c), (b.wh = d);
    else {
      var e = Ob(),
        f = gq((a || "_gcl") + "_gs"),
        g = f.map(function (m) {
          return m.aa;
        }),
        k = f.map(function (m) {
          return e - m.timestamp;
        });
      g.length > 0 &&
        k.length > 0 &&
        ((b.vh = g.join(".")), (b.wh = k.join(".")));
    }
    return b;
  }
  function lr(a, b, c) {
    if (er.test(H.location.host)) {
      var d = jr(c);
      if (d) return [{ aa: d }];
    } else {
      if (b === "gclid") return bq((a || "_gcl") + "_aw");
      if (b === "wbraid") return bq((a || "_gcl") + "_gb");
      if (b === "braids") return dq({ prefix: a });
    }
    return [];
  }
  function mr(a) {
    return lr(a, "gclid", "gclaw")
      .map(function (b) {
        return b.aa;
      })
      .join(".");
  }
  function nr(a) {
    return lr(a, "wbraid", "gclgb")
      .map(function (b) {
        return b.aa;
      })
      .join(".");
  }
  function or(a) {
    return lr(a, "braids", "gclgb")
      .map(function (b) {
        return b.aa;
      })
      .join(".");
  }
  function pr(a, b) {
    return er.test(H.location.host) ? !(jr("gclaw") || jr("gac")) : Jq(a, b);
  }
  function qr(a, b, c) {
    var d;
    d = c ? Gq(a, b) : Fq(((b && b.prefix) || "_gcl") + "_gb", a, b);
    return d.length === 0 ||
      d.every(function (e) {
        return e === 0;
      })
      ? ""
      : d.join(".");
  }
  function rr() {
    var a = G.__uspapi;
    if (Bb(a)) {
      var b = "";
      try {
        a("getUSPData", 1, function (c, d) {
          if (d && c) {
            var e = c.uspString;
            e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e);
          }
        });
      } catch (c) {}
      return b;
    }
  }
  var vr = function (a) {
      if (a.eventName === P.g.ba && a.metadata.hit_type === "page_view")
        if (T(18)) {
          a.metadata.redact_click_ids =
            U(a.m, P.g.fa) != null &&
            U(a.m, P.g.fa) !== !1 &&
            !W([P.g.R, P.g.P]);
          var b = sr(a),
            c = U(a.m, P.g.ra) !== !1;
          c || (a.o[P.g.Li] = "1");
          var d = eq(b.prefix),
            e = a.metadata.is_server_side_destination;
          if (!a.metadata.consent_updated && !a.metadata.user_id_updated) {
            var f = U(a.m, P.g.Xa),
              g = U(a.m, P.g.sa) || {};
            tr({ pd: c, xd: g, Dd: f, jc: b });
            var k;
            if ((k = !e)) {
              var m;
              var n = (vi.ads_pageview = vi.ads_pageview || {});
              m = n[d] ? !1 : (n[d] = !0);
              k = !m;
            }
            if (k) {
              a.isAborted = !0;
              return;
            }
          }
          if (e) a.isAborted = !0;
          else {
            a.o[P.g.xc] = P.g.Vb;
            if (a.metadata.consent_updated)
              (a.o[P.g.xc] = P.g.Ek), (a.o[P.g.Tb] = "1");
            else if (a.metadata.user_id_updated) a.o[P.g.xc] = P.g.Jk;
            else {
              var p = oq();
              a.o[P.g.Gd] = p.gclid;
              a.o[P.g.Od] = p.dclid;
              a.o[P.g.Gi] = p.gclsrc;
              a.o[P.g.Gd] ||
                a.o[P.g.Od] ||
                ((a.o[P.g.df] = p.wbraid), (a.o[P.g.lg] = p.gbraid));
              a.o[P.g.Fa] = H.referrer ? hj(nj(H.referrer), "host") : "";
              a.o[P.g.wa] = Oq();
              T(21) && (a.o[P.g.cb] = ur());
              var q;
              if (T(64)) {
                var r = Lq();
                q = r.rd;
                a.o[P.g.Fi] = r.Uj;
              } else q = Mq();
              a.o[P.g.Ei] = q;
              a.o[P.g.Kb] = pn(!0);
              var t = br();
              ar(t) && (a.o[P.g.ed] = "1");
              a.o[P.g.Ii] = Yq();
              hp(!1)._up === "1" && (a.o[P.g.Yi] = "1");
            }
            Wk = !0;
            var u = W([P.g.R, P.g.P]);
            c && u && (vp(b), (a.o[P.g.Hb] = tp[wp(b.prefix)]));
            a.o[P.g.nb] = void 0;
            a.o[P.g.Va] = void 0;
            var v = T(66);
            if (!a.o[P.g.Gd] && !a.o[P.g.Od] && pr(d, v)) {
              var w = v ? cq(b) : aq(d + "_gb");
              w.length > 0 && (a.o[P.g.nb] = w.join("."));
            } else if (!a.o[P.g.df] && u) {
              var x = aq(d + "_aw");
              x.length > 0 && (a.o[P.g.Va] = x.join("."));
            }
            a.m.isGtmEvent && (a.m.j[P.g.ka] = Bm.D[P.g.ka]);
            Tn(a.m) ? (a.o[P.g.Pb] = !1) : (a.o[P.g.Pb] = !0);
            a.metadata.add_tag_timing = !0;
            var y = rr();
            y !== void 0 && (a.o[P.g.he] = y || "error");
            var B = Nn();
            B && (a.o[P.g.Ac] = B);
            var A = Mn();
            A && (a.o[P.g.Dc] = A);
            a.metadata.speculative = !1;
          }
        } else a.isAborted = !0;
    },
    sr = function (a) {
      var b = {
        prefix: U(a.m, P.g.Za) || U(a.m, P.g.Qa),
        domain: U(a.m, P.g.Wa),
        Cb: U(a.m, P.g.Pa),
        flags: U(a.m, P.g.ab),
      };
      a.m.isGtmEvent && (b.path = U(a.m, P.g.Ib));
      return b;
    },
    wr = function (a, b) {
      var c, d, e, f, g, k, m, n;
      c = a.pd;
      d = a.xd;
      e = a.Dd;
      f = a.xa;
      g = a.m;
      k = a.yd;
      m = a.Sn;
      n = a.vk;
      tr({ pd: c, xd: d, Dd: e, jc: b });
      c &&
        m !== !0 &&
        (n != null ? (n = String(n)) : (n = void 0), Xq(b, f, g, k, n));
    },
    tr = function (a) {
      var b, c, d, e;
      b = a.pd;
      c = a.xd;
      d = a.Dd;
      e = a.jc;
      b &&
        (rp(c[P.g.Cc], !!c[P.g.X]) && (sq(xr, e), uq(e), Dp(e)),
        pq(e),
        yq(xr, e),
        zq(e));
      c[P.g.X] &&
        (wq(xr, c[P.g.X], c[P.g.Mb], !!c[P.g.vb], e.prefix),
        xq(c[P.g.X], c[P.g.Mb], !!c[P.g.vb], e.prefix),
        Ep(wp(e.prefix), c[P.g.X], c[P.g.Mb], !!c[P.g.vb], e),
        Ep("FPAU", c[P.g.X], c[P.g.Mb], !!c[P.g.vb], e));
      d && Bq(yr);
      Dq(yr);
    },
    zr = function (a, b, c, d) {
      var e, f, g;
      e = a.wk;
      f = a.callback;
      g = a.Zj;
      if (typeof f === "function")
        if (e === P.g.Va && g === void 0) {
          var k = d(b.prefix, c);
          k.length === 0 ? f(void 0) : k.length === 1 ? f(k[0]) : f(k);
        } else e === P.g.Hb ? (O(65), vp(b, !1), f(tp[wp(b.prefix)])) : f(g);
    },
    xr = ["aw", "dc", "gb"],
    yr = ["aw", "dc", "gb", "ag"];
  function Ar(a) {
    var b = U(a.m, P.g.Lb),
      c = U(a.m, P.g.Zb);
    b && !c
      ? (a.eventName !== P.g.ba && a.eventName !== P.g.Nc && O(131),
        (a.isAborted = !0))
      : !b && c && (O(132), (a.isAborted = !0));
  }
  function Br(a) {
    var b = W(P.g.R) ? vi.pscdl : "denied";
    b != null && (a.o[P.g.jf] = b);
  }
  function Cr(a) {
    var b = pn(!0);
    a.o[P.g.Kb] = b;
  }
  function Dr(a) {
    ko() && (a.o[P.g.Bc] = 1);
  }
  function ur() {
    var a = H.title;
    if (a === void 0 || a === "") return "";
    var b = function (d) {
      try {
        return decodeURIComponent(d), !0;
      } catch (e) {
        return !1;
      }
    };
    a = encodeURIComponent(a);
    for (var c = 256; c > 0 && !b(a.substring(0, c)); ) c--;
    return decodeURIComponent(a.substring(0, c));
  }
  function Er(a) {
    if (T(12)) {
      var b = U(a.m, P.g.Pa);
      a.o[P.g.ke] || (a.o[P.g.ke] = {});
      a.o[P.g.ke].ce = b;
    }
  }
  var Fr = function (a) {
      if (a)
        switch (a._tag_mode) {
          case "CODE":
            return "c";
          case "AUTO":
            return "a";
          case "MANUAL":
            return "m";
          default:
            return "c";
        }
    },
    Gr = function (a) {
      var b = a && a[P.g.sg];
      return b && b[P.g.Hi];
    },
    Hr = function (a) {
      if (a && a.length) {
        for (var b = [], c = 0; c < a.length; ++c) {
          var d = a[c];
          d && d.estimated_delivery_date
            ? b.push("" + d.estimated_delivery_date)
            : b.push("");
        }
        return b.join(",");
      }
    };
  var Ir = function (a, b) {
      var c = a && !W([P.g.R, P.g.P]);
      return b && c ? "0" : b;
    },
    Kr = function (a) {
      sl(
        function () {
          function b(w) {
            var x = W([P.g.R, P.g.P]),
              y = k && x,
              B = g.prefix || "_gcl",
              A;
            vi.reported_gclid || (vi.reported_gclid = {});
            A = vi.reported_gclid;
            var C =
              (y ? B : "") +
              "." +
              (W(P.g.R) ? 1 : 0) +
              "." +
              (W(P.g.P) ? 1 : 0);
            if (!A[C]) {
              A[C] = !0;
              var E = {},
                D = function (aa, X) {
                  if (X || typeof X === "number") E[aa] = X.toString();
                },
                F = "https://www.google.com";
              Un() && (D("gcs", Vn()), w && D("gcu", 1));
              D("gcd", fo(f));
              Oi.j && D("tag_exp", Oi.j);
              if (Qk()) {
                D("rnd", Yq());
                if ((!n || (p && p !== "aw.ds")) && x) {
                  var L = aq(B + "_aw");
                  D("gclaw", L.join("."));
                }
                D("url", String(G.location).split(/[?#]/)[0]);
                D("dclid", Ir(d, q));
                x || (F = "https://pagead2.googlesyndication.com");
              }
              io() && D("dma_cps", go());
              D("dma", ho());
              D("npa", Tn(f) ? 0 : 1);
              ko() && D("_ng", 1);
              yn(Gn()) && D("tcfd", jo());
              D("gdpr_consent", Mn() || "");
              D("gdpr", Nn() || "");
              hp(!1)._up === "1" && D("gtm_up", 1);
              D("gclid", Ir(d, n));
              D("gclsrc", p);
              if (
                !(
                  E.hasOwnProperty("gclid") ||
                  E.hasOwnProperty("dclid") ||
                  E.hasOwnProperty("gclaw")
                ) &&
                (D("gbraid", Ir(d, r)),
                !E.hasOwnProperty("gbraid") && Qk() && x)
              ) {
                var M = aq(B + "_gb");
                M.length > 0 && D("gclgb", M.join("."));
              }
              D("gtm", no({ xa: f.eventMetadata.source_canonical_id, Nf: !e }));
              k &&
                W(P.g.R) &&
                (vp(g || {}), y && D("auid", tp[wp(g.prefix)] || ""));
              Jr || (a.Rj && D("did", a.Rj));
              a.xh && D("gdid", a.xh);
              a.rh && D("edid", a.rh);
              a.Ah !== void 0 && D("frm", a.Ah);
              T(17) && D("apve", T(18) ? 1 : 0);
              var S = Object.keys(E).map(function (aa) {
                  return aa + "=" + encodeURIComponent(E[aa]);
                }),
                V = F + "/pagead/landing?" + S.join("&");
              Vc(V);
            }
          }
          var c = !!a.kh,
            d = !!a.yd,
            e = a.targetId,
            f = a.m,
            g = a.jc === void 0 ? {} : a.jc,
            k = a.Tf === void 0 ? !0 : a.Tf,
            m = oq(),
            n = m.gclid || "",
            p = m.gclsrc,
            q = m.dclid || "",
            r = m.wbraid || "",
            t = !c && ((!n || (p && p !== "aw.ds") ? !1 : !0) || r),
            u = Qk();
          if (t || u)
            if (u) {
              var v = [P.g.R, P.g.P, P.g.ya];
              b();
              (function () {
                W(v) ||
                  rl(function (w) {
                    return b(!0, w.consentEventId, w.consentPriorityId);
                  }, v);
              })();
            } else b();
        },
        [P.g.R, P.g.P, P.g.ya]
      );
    },
    Jr = !1;
  function Lr(a, b, c, d) {
    var e = Mc(),
      f;
    if (e === 1)
      a: {
        var g = Hi;
        g = g.toLowerCase();
        for (
          var k = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = H.getElementsByTagName("script"),
            q = 0;
          q < p.length && q < 100;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (r.indexOf(m) === 0) {
              f = 3;
              break a;
            }
            n === 1 && r.indexOf(k) === 0 && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (f === 2 || d || "http:" != G.location.protocol ? a : b) + c;
  }
  var Mr = function (a, b) {
      T(5) &&
        ((a.dma = ho()),
        io() && (a.dmaCps = go()),
        Tn(b) ? (a.npa = "0") : (a.npa = "1"));
    },
    Or = function (a, b, c) {
      if (G[a.functionName]) return b.Nh && I(b.Nh), G[a.functionName];
      var d = Nr();
      G[a.functionName] = d;
      if (a.Mf)
        for (var e = 0; e < a.Mf.length; e++) G[a.Mf[e]] = G[a.Mf[e]] || Nr();
      a.Sf && G[a.Sf] === void 0 && (G[a.Sf] = c);
      Lc(Lr("https://", "http://", a.Yh), b.Nh, b.Gm);
      return d;
    },
    Nr = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    Pr = {
      functionName: "_googWcmImpl",
      Sf: "_googWcmAk",
      Yh: "www.gstatic.com/wcm/loader.js",
    },
    Qr = {
      functionName: "_gaPhoneImpl",
      Sf: "ga_wpid",
      Yh: "www.gstatic.com/gaphone/loader.js",
    },
    Rr = { Ak: "9", nl: "5" },
    Sr = {
      functionName: "_googCallTrackingImpl",
      Mf: [Qr.functionName, Pr.functionName],
      Yh:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (Rr.Ak || Rr.nl) +
        ".js",
    },
    Tr = {},
    Ur = function (a, b, c, d, e) {
      O(22);
      if (c) {
        e = e || {};
        var f = Or(Pr, e, a),
          g = { ak: a, cl: b };
        e.Rb === void 0 && (g.autoreplace = c);
        Mr(g, d);
        f(2, e.Rb, g, c, 0, Nb(), e.options);
      }
    },
    Vr = function (a, b, c, d, e) {
      O(21);
      if (b && c) {
        e = e || {};
        for (
          var f = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Nb(),
            },
            g = 0;
          g < a.length;
          g++
        ) {
          var k = a[g];
          Tr[k.id] ||
            (k && k.prefix === "AW" && !f.adData && k.ma.length >= 2
              ? ((f.adData = { ak: k.ma[Cl[1]], cl: k.ma[Cl[2]] }),
                Mr(f.adData, d),
                (Tr[k.id] = !0))
              : k &&
                k.prefix === "UA" &&
                !f.gaData &&
                ((f.gaData = { gaWpid: k.ia }), (Tr[k.id] = !0)));
        }
        (f.gaData || f.adData) && Or(Sr, e)(e.Rb, f, e.options);
      }
    },
    Wr = function () {
      var a = !1;
      return a;
    },
    Xr = function (a, b) {
      if (a)
        if (lo()) {
        } else if ((a = l(a) ? zl(bk(a)) : zl(bk(a.id)))) {
          var c = void 0,
            d = !1,
            e = U(b, P.g.cj);
          if (e && Array.isArray(e)) {
            c = [];
            for (var f = 0; f < e.length; f++) {
              var g = zl(e[f]);
              g &&
                (c.push(g),
                (a.id === g.id || (a.id === a.ia && a.ia === g.ia)) &&
                  (d = !0));
            }
          }
          if (!c || d) {
            var k = U(b, P.g.Kg),
              m;
            if (k) {
              Array.isArray(k) ? (m = k) : (m = [k]);
              var n = U(b, P.g.Ig),
                p = U(b, P.g.Jg),
                q = U(b, P.g.Lg),
                r = U(b, P.g.bj),
                t = n || p,
                u = 1;
              a.prefix !== "UA" || c || (u = 5);
              for (var v = 0; v < m.length; v++)
                if (v < u)
                  if (c) Vr(c, m[v], r, b, { Rb: t, options: q });
                  else if (a.prefix === "AW" && a.ma[Cl[2]])
                    Wr()
                      ? Vr([a], m[v], r || "US", b, { Rb: t, options: q })
                      : Ur(a.ma[Cl[1]], a.ma[Cl[2]], m[v], b, {
                          Rb: t,
                          options: q,
                        });
                  else if (a.prefix === "UA")
                    if (Wr()) Vr([a], m[v], r || "US", b, { Rb: t });
                    else {
                      var w = a.ia,
                        x = m[v],
                        y = { Rb: t };
                      O(23);
                      if (x) {
                        y = y || {};
                        var B = Or(Qr, y, w),
                          A = {};
                        y.Rb !== void 0 ? (A.receiver = y.Rb) : (A.replace = x);
                        A.ga_wpid = w;
                        A.destination = x;
                        B(2, Nb(), A);
                      }
                    }
            }
          }
        }
    };
  function Yr(a) {
    return {
      getDestinationId: function () {
        return a.target.ia;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.o[b];
      },
      setHitData: function (b, c) {
        a.o[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        a.o[b] === void 0 && (a.o[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return U(a.m, b);
      },
      Vj: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.o);
      },
    };
  }
  var $r = function (a) {
      var b = Zr[a.target.ia];
      if (!a.isAborted && b)
        for (var c = Yr(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.isAborted = !0;
          }
          if (a.isAborted) break;
        }
    },
    as = function (a, b) {
      var c = Zr[a];
      c || (c = Zr[a] = []);
      c.push(b);
    },
    Zr = {};
  var cs = function (a) {
      if (W(bs)) {
        a = a || {};
        vp(a, !1);
        var b = up[wp(eq(a.prefix))];
        if (b && !(Ob() - b.Ih * 1e3 > 18e5)) {
          var c = b.id,
            d = c.split(".");
          if (d.length === 2 && !(Ob() - (Number(d[1]) || 0) * 1e3 > 864e5))
            return c;
        }
      }
    },
    bs = P.g.R;
  var ds = function () {
    var a = (Cc && Cc.userAgent) || "";
    if (
      a.indexOf("Safari") < 0 ||
      /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)
    )
      return !1;
    var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
    if (b === "") return !1;
    for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
      if (c[e] === void 0) return !0;
      if (d[e] !== c[e]) return Number(d[e]) > Number(c[e]);
    }
    return d.length >= c.length;
  };
  var es,
    fs = !1;
  function gs() {
    fs = !0;
    es = es || {};
  }
  function hs(a) {
    fs || gs();
    return es[a];
  }
  function is() {
    var a = G.screen;
    return { width: a ? a.width : 0, height: a ? a.height : 0 };
  }
  function js(a) {
    if (H.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top === b.bottom || b.left === b.right || !G.getComputedStyle)
      return !0;
    var c = G.getComputedStyle(a, null);
    if (c.visibility === "hidden") return !0;
    for (var d = a, e = c; d; ) {
      if (e.display === "none") return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        k >= 0 &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)),
          (f = String(Math.min(Number(g), Number(f)))));
      }
      if (f !== void 0 && Number(f) <= 0) return !0;
      (d = d.parentElement) && (e = G.getComputedStyle(d, null));
    }
    return !1;
  }
  var ts = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.Z.length + ":" + ss.test(a.Z)
      );
    },
    Hs = function (a) {
      a = a || { vd: !0, wd: !0, Zf: void 0 };
      a.zb = a.zb || { email: !0, phone: !1, address: !1 };
      var b = us(a),
        c = vs[b];
      if (c && Ob() - c.timestamp < 200) return c.result;
      var d = ws(),
        e = d.status,
        f = [],
        g,
        k,
        m = [];
      if (!T(25)) {
        if (a.zb && a.zb.email) {
          var n = xs(d.elements);
          f = ys(n, a && a.De);
          g = zs(f);
          n.length > 10 && (e = "3");
        }
        !a.Zf && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(As(f[p], !!a.vd, !!a.wd));
        m = m.slice(0, 10);
      } else if (a.zb) {
      }
      g && (k = As(g, !!a.vd, !!a.wd));
      var C = { elements: m, Rh: k, status: e };
      vs[b] = { timestamp: Ob(), result: C };
      return C;
    },
    Gs = function (a, b, c) {
      var d = a.element,
        e = { Z: a.Z, type: a.qa, tagName: d.tagName };
      b && (e.querySelector = Is(d));
      c && (e.isVisible = !js(d));
      return e;
    },
    As = function (a, b, c) {
      return Gs({ element: a.element, Z: a.Z, qa: Fs.nc }, b, c);
    },
    us = function (a) {
      var b = !(a == null || !a.vd) + "." + !(a == null || !a.wd);
      a && a.De && a.De.length && (b += "." + a.De.join("."));
      a &&
        a.zb &&
        (b += "." + a.zb.email + "." + a.zb.phone + "." + a.zb.address);
      return b;
    },
    zs = function (a) {
      if (a.length !== 0) {
        var b;
        b = Js(a, function (c) {
          return !Ks.test(c.Z);
        });
        b = Js(b, function (c) {
          return c.element.tagName.toUpperCase() === "INPUT";
        });
        b = Js(b, function (c) {
          return !js(c.element);
        });
        return b[0];
      }
    },
    ys = function (a, b) {
      if (!b || b.length === 0) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && zh(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    Js = function (a, b) {
      if (a.length <= 1) return a;
      var c = a.filter(b);
      return c.length === 0 ? a : c;
    },
    Is = function (a) {
      var b;
      if (a === H.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = Is(a.parentElement) + ">:nth-child(" + e.toString() + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    xs = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        d.tagName.toUpperCase() === "INPUT" && d.value && (e = d.value);
        if (e) {
          var f = e.match(Ls);
          if (f) {
            var g = f[0],
              k;
            if (G.location) {
              var m = jj(G.location, "host", !0);
              k = g.toLowerCase().indexOf(m) >= 0;
            } else k = !1;
            k || b.push({ element: d, Z: g });
          }
        }
      }
      return b;
    },
    ws = function () {
      var a = [],
        b = H.body;
      if (!b) return { elements: a, status: "4" };
      for (
        var c = b.querySelectorAll("*"), d = 0;
        d < c.length && d < 1e4;
        d++
      ) {
        var e = c[d];
        if (
          !(Ms.indexOf(e.tagName.toUpperCase()) >= 0) &&
          e.children instanceof HTMLCollection
        ) {
          for (var f = !1, g = 0; g < e.childElementCount && g < 1e4; g++)
            if (!(Ns.indexOf(e.children[g].tagName.toUpperCase()) >= 0)) {
              f = !0;
              break;
            }
          (!f || (T(25) && Os.indexOf(e.tagName) !== -1)) && a.push(e);
        }
      }
      return { elements: a, status: c.length > 1e4 ? "2" : "1" };
    },
    Ps = !1;
  var Ls = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    ss = /@(gmail|googlemail)\./i,
    Ks = /support|noreply/i,
    Ms = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    Ns = ["BR"],
    Fs = { nc: "1", qe: "2", je: "3", ne: "4", fg: "5", Xg: "6", Jf: "7" },
    vs = {},
    Os = ["INPUT", "SELECT"];
  var jt = Number("") || 5,
    kt = Number("") || 50,
    lt = Fb();
  var nt = function (a, b) {
      a &&
        (mt("sid", a.targetId, b),
        mt("cc", a.clientCount, b),
        mt("tl", a.totalLifeMs, b),
        mt("hc", a.heartbeatCount, b),
        mt("cl", a.clientLifeMs, b));
    },
    mt = function (a, b, c) {
      b != null && c.push(a + "=" + b);
    },
    ot = function () {
      var a = H.referrer;
      if (a) {
        var b;
        return hj(nj(a), "host") ===
          ((b = G.location) == null ? void 0 : b.host)
          ? 1
          : 2;
      }
      return 0;
    },
    pt = function (a) {
      this.O = a;
      this.H = 0;
    };
  pt.prototype.D = function (a, b, c, d) {
    var e = ot(),
      f,
      g = [];
    f =
      G === G.top && e !== 0 && b
        ? (b == null ? void 0 : b.clientCount) > 1
          ? e === 2
            ? 1
            : 2
          : e === 2
          ? 0
          : 3
        : 4;
    a && mt("si", a.Uf, g);
    mt("m", 0, g);
    mt("iss", f, g);
    mt("if", c, g);
    nt(b, g);
    d && mt("fm", encodeURIComponent(d.substring(0, kt)), g);
    this.K(g);
  };
  pt.prototype.j = function (a, b, c, d, e) {
    var f = [];
    mt("m", 1, f);
    mt("s", a, f);
    mt("po", ot(), f);
    b && (mt("st", b.state, f), mt("si", b.Uf, f), mt("sm", b.cg, f));
    nt(c, f);
    mt("c", d, f);
    e && mt("fm", encodeURIComponent(e.substring(0, kt)), f);
    this.K(f);
  };
  pt.prototype.K = function (a) {
    a = a === void 0 ? [] : a;
    !Cj ||
      this.H >= jt ||
      (mt("pid", lt, a),
      mt("bc", ++this.H, a),
      a.unshift("ctid=" + ag.ctid + "&t=s"),
      this.O("https://www.googletagmanager.com/a?" + a.join("&")));
  };
  var qt = {
    pl: Number("") || 500,
    Wk: Number("") || 5e3,
    uj: Number("20") || 10,
    Dk: Number("") || 5e3,
  };
  function rt(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var st = function (a, b) {
    var c;
    var d = function (e, f, g) {
      g = g === void 0 ? {} : g;
      this.rl = e;
      this.j = f;
      this.H = g;
      this.W = this.Ca = this.heartbeatCount = this.ql = 0;
      this.vj = !1;
      this.D = {};
      this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()));
      this.state = 0;
      this.Uf = rt(this.j);
      this.cg = rt(this.j);
      this.O = 10;
    };
    d.prototype.init = function () {
      this.K(1);
      this.xb();
    };
    d.prototype.getState = function () {
      return {
        state: this.state,
        Uf: Math.round(rt(this.j) - this.Uf),
        cg: Math.round(rt(this.j) - this.cg),
      };
    };
    d.prototype.K = function (e) {
      this.state !== e && ((this.state = e), (this.cg = rt(this.j)));
    };
    d.prototype.yj = function () {
      return String(this.ql++);
    };
    d.prototype.xb = function () {
      var e = this;
      this.heartbeatCount++;
      this.me(
        {
          type: 0,
          clientId: this.id,
          requestId: this.yj(),
          maxDelay: this.wj(),
        },
        function (f) {
          if (f.type === 0) {
            var g;
            if (((g = f.failure) == null ? void 0 : g.failureType) != null)
              if (
                (f.stats && (e.stats = f.stats), e.W++, f.isDead || e.W > qt.uj)
              ) {
                var k = f.isDead && f.failure.failureType;
                e.O = k || 10;
                e.K(4);
                e.ol();
                var m, n;
                (n = (m = e.H).Em) == null ||
                  n.call(m, { failureType: k, data: f.failure.data });
              } else e.K(3), e.Aj();
            else {
              if (e.heartbeatCount > f.stats.heartbeatCount + qt.uj) {
                e.heartbeatCount = f.stats.heartbeatCount;
                var p, q;
                (q = (p = e.H).onFailure) == null ||
                  q.call(p, { failureType: 13 });
              }
              e.stats = f.stats;
              var r = e.state;
              e.K(2);
              if (r !== 2)
                if (e.vj) {
                  var t, u;
                  (u = (t = e.H).Xn) == null || u.call(t);
                } else {
                  e.vj = !0;
                  var v, w;
                  (w = (v = e.H).Fm) == null || w.call(v);
                }
              e.W = 0;
              e.sl();
              e.Aj();
            }
          }
        }
      );
    };
    d.prototype.wj = function () {
      return this.state === 2 ? qt.Wk : qt.pl;
    };
    d.prototype.Aj = function () {
      var e = this;
      this.j.setTimeout(function () {
        e.xb();
      }, Math.max(0, this.wj() - (rt(this.j) - this.Ca)));
    };
    d.prototype.wl = function (e, f, g) {
      var k = this;
      this.me(
        { type: 1, clientId: this.id, requestId: this.yj(), command: e },
        function (m) {
          if (m.type === 1)
            if (m.result) f(m.result);
            else {
              var n,
                p,
                q,
                r = {
                  failureType:
                    (q = (n = m.failure) == null ? void 0 : n.failureType) !=
                    null
                      ? q
                      : 12,
                  data: (p = m.failure) == null ? void 0 : p.data,
                },
                t,
                u;
              (u = (t = k.H).onFailure) == null || u.call(t, r);
              g(r);
            }
        }
      );
    };
    d.prototype.me = function (e, f) {
      var g = this;
      if (this.state === 4) (e.failure = { failureType: this.O }), f(e);
      else {
        var k = this.state !== 2 && e.type !== 0,
          m = e.requestId,
          n,
          p = this.j.setTimeout(
            function () {
              var r = g.D[m];
              r && g.tj(r, 7);
            },
            (n = e.maxDelay) != null ? n : qt.Dk
          ),
          q = { request: e, nk: f, jk: k, Am: p };
        this.D[m] = q;
        k || this.Gj(q);
      }
    };
    d.prototype.Gj = function (e) {
      this.Ca = rt(this.j);
      e.jk = !1;
      this.rl(e.request);
    };
    d.prototype.sl = function () {
      for (
        var e = oa(Object.keys(this.D)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = this.D[f.value];
        g.jk && this.Gj(g);
      }
    };
    d.prototype.ol = function () {
      for (var e = oa(Object.keys(this.D)), f = e.next(); !f.done; f = e.next())
        this.tj(this.D[f.value], this.O);
    };
    d.prototype.tj = function (e, f) {
      this.If(e);
      var g = e.request;
      g.failure = { failureType: f };
      e.nk(g);
    };
    d.prototype.If = function (e) {
      delete this.D[e.request.requestId];
      this.j.clearTimeout(e.Am);
    };
    d.prototype.Zl = function (e) {
      this.Ca = rt(this.j);
      var f = this.D[e.requestId];
      if (f) this.If(f), f.nk(e);
      else {
        var g, k;
        (k = (g = this.H).onFailure) == null || k.call(g, { failureType: 14 });
      }
    };
    c = new d(a, G, b);
    return c;
  };
  var tt = "https://" + ui.Fd + "/gtm/static/",
    ut;
  var vt = function () {
      ut ||
        (ut = new pt(function (a) {
          return void Oc(a);
        }));
      return ut;
    },
    wt = function (a) {
      if (!a) {
        var b = Oi.Ca;
        a = b ? b : tt;
      }
      var c;
      try {
        c = new URL(a);
      } catch (d) {
        return null;
      }
      return c.protocol !== "https:" ? null : c;
    },
    xt = function (a) {
      var b = to(oo.Ej);
      return b && b[a];
    },
    zt = function (a, b, c) {
      var d = this;
      this.D = vt();
      this.O = this.K = !1;
      this.W = null;
      this.initTime = c;
      this.j = 15;
      this.H = this.Dl(a);
      G.setTimeout(function () {
        d.sj();
      }, 1e3);
      I(function () {
        d.jm(a, b);
      });
    };
  ba = zt.prototype;
  ba.delegate = function (a, b, c) {
    this.getState() !== 2
      ? (this.D.j(this.j, void 0, void 0, a.commandType),
        c({ failureType: this.j }))
      : this.H.wl(a, b, c);
  };
  ba.getState = function () {
    return this.H.getState().state;
  };
  ba.jm = function (a, b) {
    var c = G.location.origin,
      d = this,
      e = Nc();
    try {
      var f = e.contentDocument.createElement("iframe"),
        g = a.pathname,
        k = g[g.length - 1] === "/" ? a.toString() : a.toString() + "/",
        m = b ? "&1p=1" : "",
        n;
      T(84) && (n = { sandbox: "allow-same-origin allow-scripts" });
      Nc(
        k + "sw_iframe.html?origin=" + encodeURIComponent(c) + m,
        void 0,
        n,
        void 0,
        f
      );
      var p = function () {
        e.contentDocument.body.appendChild(f);
        f.addEventListener("load", function () {
          d.W = f.contentWindow;
          e.contentWindow.addEventListener("message", function (q) {
            q.origin === a.origin && d.H.Zl(q.data);
          });
          d.sj();
        });
      };
      e.contentDocument.readyState === "complete"
        ? p()
        : e.contentWindow.addEventListener("load", function () {
            p();
          });
    } catch (q) {
      e.parentElement.removeChild(e),
        (this.j = 11),
        this.D.D(void 0, void 0, this.j, q.toString());
    }
  };
  ba.Dl = function (a) {
    var b = this,
      c = st(
        function (d) {
          var e;
          (e = b.W) == null || e.postMessage(d, a.origin);
        },
        {
          Fm: function () {
            b.K = !0;
            b.D.D(c.getState(), c.stats);
          },
          Em: function (d) {
            b.K
              ? ((b.j = (d == null ? void 0 : d.failureType) || 10),
                b.D.j(
                  b.j,
                  c.getState(),
                  c.stats,
                  void 0,
                  d == null ? void 0 : d.data
                ))
              : ((b.j = (d == null ? void 0 : d.failureType) || 4),
                b.D.D(c.getState(), c.stats, b.j, d == null ? void 0 : d.data));
          },
          onFailure: function (d) {
            b.j = d.failureType;
            b.D.j(b.j, c.getState(), c.stats, d.command, d.data);
          },
        }
      );
    return c;
  };
  ba.sj = function () {
    this.O || this.H.init();
    this.O = !0;
  };
  function At(a, b) {
    var c = G.location.origin;
    if (!c) return;
    Qi() && (a = "" + c + Pi() + "/_");
    var d = wt(a);
    if (d === null || xt(d.origin)) return;
    if (!Dc()) {
      vt().D(void 0, void 0, 6);
      return;
    }
    var e = new zt(d, !!a, b || Math.round(Ob())),
      f;
    a: {
      var g = oo.Ej,
        k = {},
        m = ro(g);
      if (!m) {
        m = ro(g, !0);
        if (!m) {
          f = void 0;
          break a;
        }
        m.set(k);
      }
      f = m.get();
    }
    f[d.origin] = e;
  }
  var Bt = function (a, b, c, d) {
    var e;
    if ((e = xt(a)) == null || !e.delegate) {
      var f = Dc() ? 16 : 6;
      vt().j(f, void 0, void 0, b.commandType);
      d({ failureType: f });
      return;
    }
    xt(a).delegate(b, c, d);
  };
  function Ct(a, b, c, d) {
    var e = wt();
    if (e === null) {
      d(Dc() ? 16 : 6);
      return;
    }
    var f,
      g = (f = xt(e.origin)) == null ? void 0 : f.initTime,
      k = Math.round(Ob());
    Bt(
      e.origin,
      {
        commandType: 0,
        params: {
          url: a,
          method: 0,
          templates: b,
          body: "",
          processResponse: !1,
          sinceInit: g ? k - g : void 0,
        },
      },
      function () {
        c();
      },
      function (m) {
        d(m.failureType);
      }
    );
  }
  function Dt(a, b, c, d) {
    var e = wt(a);
    if (e === null) {
      d("_is_sw=f" + (Dc() ? 16 : 6) + "te");
      return;
    }
    var f = b ? 1 : 0,
      g = Math.round(Ob()),
      k,
      m = (k = xt(e.origin)) == null ? void 0 : k.initTime,
      n = m ? g - m : void 0;
    Bt(
      e.origin,
      {
        commandType: 0,
        params: {
          url: a,
          method: f,
          templates: c,
          body: b || "",
          processResponse: !0,
          sinceInit: n,
          attributionReporting: !0,
        },
      },
      function () {},
      function (p) {
        var q = "_is_sw=f" + p.failureType,
          r,
          t = (r = xt(e.origin)) == null ? void 0 : r.getState();
        t !== void 0 && (q += "s" + t);
        d(n ? q + ("t" + n) : q + "te");
      }
    );
  }
  var Et = void 0;
  function Ft(a) {
    var b = [];
    return b;
  }
  var Gt = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e < 128
        ? (b[c++] = e)
        : (e < 2048
            ? (b[c++] = (e >> 6) | 192)
            : ((e & 64512) == 55296 &&
              d + 1 < a.length &&
              (a.charCodeAt(d + 1) & 64512) == 56320
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  cn();
  fn() || $m("iPod");
  $m("iPad");
  !$m("Android") || dn() || cn() || bn() || $m("Silk");
  dn();
  !$m("Safari") ||
    dn() ||
    (an() ? 0 : $m("Coast")) ||
    bn() ||
    (an() ? 0 : $m("Edge")) ||
    (an() ? Zm("Microsoft Edge") : $m("Edg/")) ||
    (an() ? Zm("Opera") : $m("OPR")) ||
    cn() ||
    $m("Silk") ||
    $m("Android") ||
    gn();
  var Ht = {},
    It = null,
    Jt = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        e > 255 && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      f === void 0 && (f = 0);
      if (!It) {
        It = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            k = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          m < 5;
          m++
        ) {
          var n = g.concat(k[m].split(""));
          Ht[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            It[q] === void 0 && (It[q] = p);
          }
        }
      }
      for (
        var r = Ht[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          B = b[v + 2],
          A = r[x >> 2],
          C = r[((x & 3) << 4) | (y >> 4)],
          E = r[((y & 15) << 2) | (B >> 6)],
          D = r[B & 63];
        t[w++] = "" + A + C + E + D;
      }
      var F = 0,
        L = u;
      switch (b.length - v) {
        case 2:
          (F = b[v + 1]), (L = r[(F & 15) << 2] || u);
        case 1:
          var M = b[v];
          t[w] = "" + r[M >> 2] + r[((M & 3) << 4) | (F >> 4)] + L + u;
      }
      return t.join("");
    };
  var Kt =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Lt(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function Mt() {
    var a = G.google_tag_data,
      b;
    if (a != null && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function Nt() {
    var a, b;
    return (b = (a = G.google_tag_data) == null ? void 0 : a.uach_promise) !=
      null
      ? b
      : null;
  }
  function Ot(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
        ? void 0
        : c.getHighEntropyValues) === "function"
    );
  }
  function Pt() {
    var a = G;
    if (!Ot(a)) return null;
    var b = Lt(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(Kt)
      .then(function (d) {
        b.uach != null || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var Qt,
    Rt = function () {
      if (Ot(G) && ((Qt = Ob()), !Nt())) {
        var a = Pt();
        a &&
          (a.then(function () {
            O(95);
          }),
          a.catch(function () {
            O(96);
          }));
      }
    },
    Tt = function (a) {
      var b = St.qn,
        c = function (g, k) {
          try {
            a(g, k);
          } catch (m) {}
        },
        d = Mt();
      if (d) c(d);
      else {
        var e = Nt();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = G.setTimeout(function () {
            c.Oe || ((c.Oe = !0), O(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.Oe || ((c.Oe = !0), O(104), G.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.Oe || ((c.Oe = !0), O(105), G.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    Ut = function (a, b) {
      a &&
        ((b.o[P.g.zf] = a.architecture),
        (b.o[P.g.Af] = a.bitness),
        a.fullVersionList &&
          (b.o[P.g.Bf] = a.fullVersionList
            .map(function (c) {
              return (
                encodeURIComponent(c.brand || "") +
                ";" +
                encodeURIComponent(c.version || "")
              );
            })
            .join("|")),
        (b.o[P.g.Cf] = a.mobile ? "1" : "0"),
        (b.o[P.g.Df] = a.model),
        (b.o[P.g.Ef] = a.platform),
        (b.o[P.g.Ff] = a.platformVersion),
        (b.o[P.g.Gf] = a.wow64 ? "1" : "0"));
    };
  function Vt(a) {
    var b;
    b = b === void 0 ? document : b;
    var c;
    return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a));
  }
  function Wt() {
    return Vt("join-ad-interest-group") && Bb(Cc.joinAdInterestGroup);
  }
  function Xt(a, b) {
    var c = yb[3] === void 0 ? 1 : yb[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (c === 1) {
        var f = H.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(H.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = H.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var k = g,
      m =
        ((k == null ? void 0 : k.length) || 0) >=
        (yb[2] === void 0 ? 50 : yb[2]),
      n;
    if ((n = e.length >= 1)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p !== void 0 && Ob() - p < (yb[1] === void 0 ? 6e4 : yb[1])
        ? (ub("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (c === 1)
        if (e.length >= 1) Yt(e[0]);
        else {
          if (m) {
            ub("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? Yt(e[0]) : m && Yt(k[0]);
      Nc(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: Ob() }
      );
    }
  }
  function Yt(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function Zt() {
    return "https://td.doubleclick.net";
  }
  var $t = function () {
      return [P.g.R, P.g.P];
    },
    au = function (a) {
      if (a != null) {
        var b = String(a).substring(0, 512),
          c = b.indexOf("#");
        return c == -1 ? b : b.substring(0, c);
      }
      return "";
    },
    bu = function () {
      return (
        Cc.userAgent.toLowerCase().indexOf("firefox") !== -1 ||
        Hc("Edg/") ||
        Hc("EdgA/") ||
        Hc("EdgiOS/")
      );
    },
    cu = function (a) {
      a.metadata.speculative_in_message || (a.metadata.speculative = !1);
    },
    du = function (a, b) {
      Array.isArray(b) || (b = [b]);
      return b.indexOf(a.metadata.hit_type) >= 0;
    },
    eu = function (a) {
      var b = a.target.ma[Cl[1]];
      if (b) {
        a.o[P.g.Vc] = b;
        var c = a.target.ma[Cl[2]];
        c && (a.o[P.g.qb] = c);
      } else a.isAborted = !0;
    },
    fu = function (a) {
      if (
        du(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.o[P.g.qb],
          c = U(a.m, P.g.hf) === !0;
        c && (a.metadata.remarketing_only = !0);
        switch (a.metadata.hit_type) {
          case "conversion":
            !c && b && cu(a);
            bu() && (a.metadata.is_gcp_conversion = !0);
            (bu() ? 0 : T(103)) &&
              (a.metadata.is_fallback_aw_conversion_ping_allowed = !0);
            break;
          case "user_data_lead":
          case "user_data_web":
            !c && b && (a.isAborted = !0);
            break;
          case "remarketing":
            (!c && b) || cu(a);
        }
        du(a, ["conversion", "remarketing"]) &&
          (a.o[P.g.pj] = a.metadata.is_gcp_conversion
            ? "www.google.com"
            : "www.googleadservices.com");
      }
    },
    gu = function (a) {
      du(a, ["conversion", "remarketing"]);
    },
    hu = function (a) {
      if (!a.metadata.consent_updated && du(a, ["conversion", "remarketing"])) {
        var b = pn(!1);
        a.o[P.g.Kb] = b;
        var c = U(a.m, P.g.wa);
        c || (c = b === 1 ? G.top.location.href : G.location.href);
        a.o[P.g.wa] = au(c);
        a.copyToHitData(P.g.Fa, H.referrer);
        a.o[P.g.cb] = ur();
        a.copyToHitData(P.g.Ra);
        var d = is();
        a.o[P.g.Nb] = d.width + "x" + d.height;
        for (var e, f = G, g = f; f && f != f.parent; )
          (f = f.parent), nn(f) && (g = f);
        e = g;
        var k;
        var m = e.location.href;
        if (e === e.top) k = { url: m, vm: !0 };
        else {
          var n = !1,
            p = e.document;
          p && p.referrer && ((m = p.referrer), e.parent === e.top && (n = !0));
          var q = e.location.ancestorOrigins;
          if (q) {
            var r = q[q.length - 1];
            r && m.indexOf(r) === -1 && ((n = !1), (m = r));
          }
          k = { url: m, vm: n };
        }
        var t = k;
        t.url && c !== t.url && (a.o[P.g.xf] = au(t.url));
      }
    },
    iu = function (a) {
      du(a, ["conversion", "remarketing"]) &&
        (a.copyToHitData(P.g.Aa),
        a.copyToHitData(P.g.na),
        a.copyToHitData(P.g.za));
    },
    ju = function (a) {
      var b = ["conversion", "remarketing"];
      b.push("page_view", "user_data_lead", "user_data_web");
      if (du(a, b) && W(P.g.P)) {
        a.copyToHitData(P.g.Ba);
        var c = to(oo.ah);
        if (c === void 0) so(oo.bh, !0);
        else {
          var d = to(oo.ue);
          a.o[P.g.wf] = d + "." + c;
        }
      }
    },
    ku = function (a) {
      if (!Ot(G)) O(87);
      else if (Qt !== void 0) {
        O(85);
        var b = Mt();
        b ? Ut(b, a) : O(86);
      }
    },
    lu = function (a) {
      du(a, ["conversion"]) &&
        W(P.g.P) &&
        (G._gtmpcm === !0 || ds()
          ? (a.o[P.g.Xb] = "2")
          : T(30) && Vt("attribution-reporting") && (a.o[P.g.Xb] = "1"));
    },
    mu = function (a) {
      if (du(a, ["conversion", "remarketing"]) && T(26)) {
        var b = function (c) {
          return T(28) ? (ub("fdr", c), !0) : !1;
        };
        if (W(P.g.R) || b(0))
          if (W(P.g.P) || b(1))
            if (U(a.m, P.g.Ea) !== !1 || b(2))
              if (Tn(a.m) || b(3))
                if (U(a.m, P.g.Wb) !== !1 || b(4))
                  if (
                    (T(29)
                      ? a.eventName === P.g.ba
                        ? U(a.m, P.g.Ka)
                        : void 0
                      : U(a.m, P.g.Ka)) !== !1 ||
                    b(5)
                  )
                    if (Wt() || b(6))
                      T(28) && wb()
                        ? ((a.o[P.g.Ri] = vb("fdr")), delete tb.fdr)
                        : ((a.o[P.g.ug] = "1"),
                          (a.metadata.send_fledge_experiment = !0));
      }
    },
    nu = function (a) {
      a.metadata.conversion_linker_enabled = U(a.m, P.g.ra) !== !1;
      a.metadata.cookie_options = sr(a);
      a.metadata.redact_ads_data =
        U(a.m, P.g.fa) != null && U(a.m, P.g.fa) !== !1;
      a.metadata.allow_ad_personalization = Tn(a.m);
    },
    ou = function (a) {
      if (et(a, "ccd_add_1p_data", !1) && W($t())) {
        var b = a.m.D[P.g.fe];
        if (dj(b)) {
          var c = U(a.m, P.g.Ga);
          c === null
            ? (a.metadata.user_data_from_code = null)
            : (b.enable_code && fb(c) && (a.metadata.user_data_from_code = c),
              fb(b.selectors) &&
                (a.metadata.user_data_from_manual = cj(b.selectors)));
        }
      }
    },
    pu = function (a) {
      var b =
          !a.metadata.send_user_data_hit &&
          du(a, ["conversion", "user_data_web"]),
        c = !et(a, "ccd_add_1p_data", !1) && du(a, "user_data_lead");
      if ((b || c) && W(P.g.R)) {
        var d = a.metadata.hit_type === "conversion",
          e = a.m,
          f = void 0,
          g = U(e, P.g.Ga);
        if (d) {
          var k = (U(e, P.g.Sd) || {})[String(a.o[P.g.qb])];
          if (U(e, P.g.Id) === !0 || k) {
            var m;
            var n;
            if (k)
              b: {
                switch (k.enhanced_conversions_mode) {
                  case "manual":
                    if (g && fb(g)) {
                      n = g;
                      break b;
                    }
                    var p = k.enhanced_conversions_manual_var;
                    n = p !== void 0 ? p : G.enhanced_conversion_data;
                    break b;
                  case "automatic":
                    n = cj(k[P.g.sg]);
                    break b;
                }
                n = void 0;
              }
            else n = G.enhanced_conversion_data;
            var q = n,
              r = (k || {}).enhanced_conversions_mode,
              t;
            if (q) {
              if (r === "manual")
                switch (q._tag_mode) {
                  case "CODE":
                    t = "c";
                    break;
                  case "AUTO":
                    t = "a";
                    break;
                  case "MANUAL":
                    t = "m";
                    break;
                  default:
                    t = "c";
                }
              else t = r === "automatic" ? (Gr(k) ? "a" : "m") : "c";
              m = { Z: q, uk: t };
            } else m = { Z: q, uk: void 0 };
            var u = m,
              v = u.uk;
            f = u.Z;
            a.o[P.g.md] = v;
          }
        } else if (a.m.isGtmEvent) {
          cu(a);
          a.metadata.user_data = g;
          a.o[P.g.md] = Fr(g);
          return;
        }
        a.metadata.user_data = f;
      }
    },
    qu = function (a) {
      du(a, ["conversion", "remarketing"]) &&
        (a.m.isGtmEvent
          ? a.metadata.hit_type !== "conversion" &&
            a.eventName &&
            (a.o[P.g.xc] = a.eventName)
          : (a.o[P.g.xc] = a.eventName),
        z(a.m.j, function (b, c) {
          oi[b.split(".")[0]] || (a.o[b] = c);
        }));
    },
    ru = function (a) {
      if (
        a.eventName === P.g.ba &&
        !a.metadata.consent_updated &&
        ((a.metadata.is_config_command = !0),
        du(a, "conversion") && (a.metadata.speculative = !0),
        !du(a, "remarketing") ||
          (U(a.m, P.g.Wb) !== !1 && U(a.m, P.g.Ka) !== !1) ||
          (a.metadata.speculative = !0),
        du(a, "landing_page"))
      ) {
        var b = U(a.m, P.g.sa) || {},
          c = U(a.m, P.g.Xa),
          d = a.metadata.conversion_linker_enabled,
          e = a.metadata.redact_ads_data,
          f = {
            pd: d,
            xd: b,
            Dd: c,
            xa: a.metadata.source_canonical_id,
            m: a.m,
            yd: e,
            vk: U(a.m, P.g.Ba),
          },
          g = a.metadata.cookie_options;
        wr(f, g);
        Xr(a.target, a.m);
        Kr({
          kh: !1,
          yd: e,
          targetId: a.target.id,
          m: a.m,
          jc: d ? g : void 0,
          Tf: d,
          Rj: a.o[P.g.ae],
          xh: a.o[P.g.ub],
          rh: a.o[P.g.rb],
          Ah: a.o[P.g.Kb],
        });
        a.isAborted = !0;
      }
    },
    su = function (a) {
      if (
        !et(a, "hasPreAutoPiiCcdRule", !1) &&
        du(a, "conversion") &&
        W(P.g.R)
      ) {
        var b = (U(a.m, P.g.Sd) || {})[String(a.o[P.g.qb])],
          c = a.o[P.g.Vc],
          d;
        if (!(d = Gr(b)))
          if (gl())
            if (Ps) d = !0;
            else {
              var e = hs("AW-" + c);
              d = !!e && !!e.preAutoPii;
            }
          else d = !1;
        if (d) {
          var f = Ob(),
            g = Hs({ vd: !0, wd: !0, Zf: !0 });
          if (g.elements.length !== 0) {
            for (var k = [], m = 0; m < g.elements.length; ++m) {
              var n = g.elements[m];
              k.push(n.querySelector + "*" + ts(n) + "*" + n.type);
            }
            a.o[P.g.Qg] = k.join("~");
            var p = g.Rh;
            p && ((a.o[P.g.Rg] = p.querySelector), (a.o[P.g.Pg] = ts(p)));
            a.o[P.g.Og] = String(Ob() - f);
            a.o[P.g.Sg] = g.status;
          }
        }
      }
    },
    tu = function (a) {
      if (a.eventName === P.g.Ua && !a.m.isGtmEvent) {
        if (!a.metadata.consent_updated && du(a, "conversion")) {
          var b = U(a.m, P.g.Jb);
          if (typeof b !== "function") return;
          var c = String(U(a.m, P.g.tb)),
            d = a.o[c],
            e = U(a.m, c);
          c === P.g.Va || c === P.g.Hb
            ? zr(
                { wk: c, callback: b, Zj: e },
                a.metadata.cookie_options,
                a.metadata.redact_ads_data,
                Vq
              )
            : b(d || e);
        }
        a.isAborted = !0;
      }
    },
    uu = function (a) {
      if (du(a, "conversion") && W(P.g.R) && (a.o[P.g.nb] || a.o[P.g.zc])) {
        var b = a.o[P.g.qb],
          c = h(a.metadata.cookie_options),
          d = eq(c.prefix);
        c.prefix = d === "_gcl" ? "" : d;
        if (a.o[P.g.nb]) {
          var e = qr(b, c, T(66) && !a.metadata.gbraid_cookie_marked);
          a.metadata.gbraid_cookie_marked = !0;
          e && (a.o[P.g.Tg] = e);
        }
        if (a.o[P.g.zc]) {
          var f = ir(b, c).Ol;
          f && (a.o[P.g.zg] = f);
        }
      }
    },
    vu = function (a) {
      var b = T(7),
        c = a.m,
        d,
        e,
        f;
      if (!b) {
        var g = Ul(c, P.g.la);
        d = Yb(fb(g) ? g : {});
      }
      var k = Ul(c, P.g.la, 1),
        m = Ul(c, P.g.la, 2);
      e = Yb(fb(k) ? k : {}, ".");
      f = Yb(fb(m) ? m : {}, ".");
      b || (a.o[P.g.ae] = d);
      a.o[P.g.ub] = e;
      a.o[P.g.rb] = f;
    },
    wu = function (a) {
      if (du(a, ["conversion", "remarketing"])) {
        var b = a.metadata.hit_type === "conversion";
        (b && a.eventName !== P.g.Ja) ||
          (a.copyToHitData(P.g.da),
          b &&
            (a.copyToHitData(P.g.Md),
            a.copyToHitData(P.g.Kd),
            a.copyToHitData(P.g.Ld),
            a.copyToHitData(P.g.Jd),
            (a.o[P.g.mg] = a.eventName)));
      }
    },
    xu = function (a) {
      if (
        du(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.m;
        if (du(a, ["conversion", "remarketing"])) {
          var c = U(b, P.g.ac);
          if (c === !0 || c === !1) a.o[P.g.ac] = c;
        }
        Tn(b)
          ? (a.o[P.g.Pb] = !1)
          : ((a.o[P.g.Pb] = !0), du(a, "remarketing") && (a.isAborted = !0));
      }
    },
    yu = function (a) {
      du(a, "conversion") &&
        (a.copyToHitData(P.g.fd),
        a.copyToHitData(P.g.Nd),
        a.copyToHitData(P.g.ld),
        a.copyToHitData(P.g.Td),
        a.copyToHitData(P.g.wc),
        a.copyToHitData(P.g.Zc));
    },
    zu = function (a) {
      $r(a);
    },
    Au = function (a) {
      if (du(a, ["conversion", "remarketing"]) && G.__gsaExp && G.__gsaExp.id) {
        var b = G.__gsaExp.id;
        if (Bb(b))
          try {
            var c = Number(b());
            isNaN(c) || (a.o[P.g.Eg] = c);
          } catch (d) {}
      }
    },
    Bu = function (a) {
      if (du(a, ["conversion", "remarketing"])) {
        var b = rr();
        b !== void 0 && (a.o[P.g.he] = b || "error");
        var c = Nn();
        c && (a.o[P.g.Ac] = c);
        var d = Mn();
        d && (a.o[P.g.Dc] = d);
      }
    },
    Cu = function (a) {
      du(a, ["conversion"]) && hp(!1)._up === "1" && (a.o[P.g.Zd] = !0);
    },
    Du = function (a) {
      du(a, ["conversion"]) &&
        (a.metadata.redact_click_ids =
          !!a.metadata.redact_ads_data && !W($t()));
    },
    Eu = function (a) {
      if (
        du(a, ["conversion", "user_data_lead", "user_data_web"]) &&
        W(P.g.R) &&
        a.metadata.conversion_linker_enabled
      ) {
        var b = a.metadata.cookie_options,
          c = eq(b.prefix);
        c === "_gcl" && (c = "");
        var d = kr(c);
        a.o[P.g.Ci] = d.vh;
        a.o[P.g.Di] = d.wh;
        var e = T(66);
        if (pr(c, e)) {
          var f = e ? or(c) : nr(c);
          f && (a.o[P.g.nb] = f);
          if (!c) {
            var g = a.o[P.g.qb];
            b = h(b);
            b.prefix = c;
            var k = ir(g, b, !0).Nl;
            k && (a.o[P.g.zc] = k);
          }
        } else {
          var m = mr(c);
          m && (a.o[P.g.Va] = m);
          if (!c) {
            var n = hr(Zp(Yp()) ? Gp() : {}, fr);
            n && (a.o[P.g.Xd] = n);
          }
        }
      }
    },
    Fu = function (a) {
      if (
        du(a, [
          "conversion",
          "remarketing",
          "user_data_lead",
          "user_data_web",
        ]) &&
        a.metadata.conversion_linker_enabled &&
        W(P.g.R)
      ) {
        var b = !T(3);
        if (a.metadata.hit_type !== "remarketing" || b) {
          var c = a.metadata.cookie_options;
          vp(c, a.metadata.hit_type === "conversion" && a.eventName !== P.g.Ua);
          W(P.g.P) && (a.o[P.g.Hb] = tp[wp(c.prefix)]);
        }
      }
    },
    Gu = function (a) {
      Qi() || Di || uj(a.m) || (T(82) && At(void 0, Math.round(Ob())));
    },
    Hu = function () {},
    Iu = function (a) {
      if (du(a, ["conversion"])) {
        var b = cs(a.metadata.cookie_options);
        if (b && !a.o[P.g.Aa]) {
          var c = Po(a.o[P.g.qb]);
          a.o[P.g.Aa] = c;
        }
        b && ((a.o[P.g.wb] = b), (a.metadata.send_ccm_parallel_ping = !0));
      }
    },
    Ju = function (a) {
      var b = W($t());
      switch (a.metadata.hit_type) {
        case "user_data_lead":
        case "user_data_web":
          a.isAborted = !b || !!a.metadata.consent_updated;
          break;
        case "remarketing":
          a.isAborted = !b;
          break;
        case "conversion":
          a.metadata.consent_updated && (a.o[P.g.Tb] = !0);
      }
    },
    Ku = function (a) {
      du(a, ["conversion"]) &&
        a.m.eventMetadata.is_external_event &&
        (a.o[P.g.qj] = !0);
    },
    Lu = function (a) {
      if (!a.metadata.consent_updated && T(24) && du(a, ["conversion"])) {
        var b = br();
        ar(b) && ((a.o[P.g.ed] = "1"), (a.metadata.add_tag_timing = !0));
      }
    },
    Mu = function (a) {
      var b;
      if (a.eventName !== "gtag.config" && a.metadata.send_user_data_hit)
        switch (a.metadata.hit_type) {
          case "user_data_web":
            b = 97;
            cu(a);
            break;
          case "user_data_lead":
            b = 98;
            cu(a);
            break;
          case "conversion":
            b = 99;
        }
      !a.metadata.speculative && b && O(b);
      a.metadata.speculative === !0 && (a.isAborted = !0);
    },
    Nu = function (a) {
      T(18) &&
      a.eventName === P.g.ba &&
      du(a, "page_view") &&
      !a.metadata.consent_updated &&
      !a.m.isGtmEvent
        ? Xr(a.target, a.m)
        : du(a, "call_conversion") && (Xr(a.target, a.m), (a.isAborted = !0));
    };
  var Pu = function (a, b) {
      var c = {},
        d = function (f, g) {
          var k;
          k = g === !0 ? "1" : g === !1 ? "0" : encodeURIComponent(String(g));
          c[f] = k;
        };
      z(a.o, function (f, g) {
        var k = Ou[f];
        k &&
          g !== void 0 &&
          g !== "" &&
          (!a.metadata.redact_click_ids ||
            (f !== P.g.Gd && f !== P.g.Od && f !== P.g.df && f !== P.g.lg) ||
            (g = "0"),
          d(k, g));
      });
      d("gtm", no({ xa: a.metadata.source_canonical_id }));
      Un() && d("gcs", Vn());
      d("gcd", fo(a.m));
      io() && d("dma_cps", go());
      d("dma", ho());
      yn(Gn()) && d("tcfd", jo());
      Oi.j && d("tag_exp", Oi.j);
      if (a.metadata.add_tag_timing) {
        d("tft", Ob());
        var e = ad();
        e !== void 0 && d("tfd", Math.round(e));
      }
      T(17) && d("apve", T(18) ? "1" : "0");
      T(19) && d("apvf", Yc() ? (T(20) ? "f" : "sb") : "nf");
      b(c);
    },
    Qu = function (a) {
      Pu(a, function (b) {
        if (a.metadata.hit_type === "page_view") {
          var c = [];
          z(b, function (e, f) {
            c.push(e + "=" + f);
          });
          var d =
            vj(
              W([P.g.R, P.g.P])
                ? "https://www.google.com"
                : "https://pagead2.googlesyndication.com",
              !0
            ) +
            "/ccm/collect?" +
            c.join("&");
          T(19) && T(20) && Yc() ? Zc(d, void 0, { noFallback: !0 }) : Vc(d);
          if (Bb(a.m.onSuccess)) a.m.onSuccess();
        }
      });
    },
    Ru = {},
    Ou =
      ((Ru[P.g.Tb] = "gcu"),
      (Ru[P.g.nb] = "gclgb"),
      (Ru[P.g.Va] = "gclaw"),
      (Ru[P.g.Ei] = "gad_source"),
      (Ru[P.g.Fi] = "gad_source_src"),
      (Ru[P.g.Gd] = "gclid"),
      (Ru[P.g.Gi] = "gclsrc"),
      (Ru[P.g.lg] = "gbraid"),
      (Ru[P.g.df] = "wbraid"),
      (Ru[P.g.Hb] = "auid"),
      (Ru[P.g.Ii] = "rnd"),
      (Ru[P.g.Li] = "ncl"),
      (Ru[P.g.og] = "gcldc"),
      (Ru[P.g.Od] = "dclid"),
      (Ru[P.g.rb] = "edid"),
      (Ru[P.g.xc] = "en"),
      (Ru[P.g.Ac] = "gdpr"),
      (Ru[P.g.ub] = "gdid"),
      (Ru[P.g.Bc] = "_ng"),
      (Ru[P.g.Yi] = "gtm_up"),
      (Ru[P.g.Kb] = "frm"),
      (Ru[P.g.ed] = "lps"),
      (Ru[P.g.ae] = "did"),
      (Ru[P.g.wa] = "dl"),
      (Ru[P.g.Fa] = "dr"),
      (Ru[P.g.cb] = "dt"),
      (Ru[P.g.wf] = "ga_uid"),
      (Ru[P.g.Dc] = "gdpr_consent"),
      (Ru[P.g.Ba] = "uid"),
      (Ru[P.g.he] = "us_privacy"),
      (Ru[P.g.Pb] = "npa"),
      Ru);
  var Su = {
    M: {
      fi: "ads_conversion_hit",
      Ed: "container_execute_start",
      ii: "container_setup_end",
      dg: "container_setup_start",
      gi: "container_blocking_end",
      hi: "container_execute_end",
      ji: "container_yield_end",
      eg: "container_yield_start",
      jj: "event_execute_end",
      ij: "event_evaluation_end",
      Ug: "event_evaluation_start",
      kj: "event_setup_end",
      ie: "event_setup_start",
      mj: "ga4_conversion_hit",
      pe: "page_load",
      Hn: "pageview",
      hc: "snippet_load",
      Hj: "tag_callback_error",
      Ij: "tag_callback_failure",
      Jj: "tag_callback_success",
      Kj: "tag_execute_end",
      nd: "tag_execute_start",
    },
  };
  function Tu() {
    function a(c, d) {
      var e = vb(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var Uu = !1;
  function Cv(a, b) {}
  function Dv(a, b) {}
  function Ev(a, b) {}
  function Fv(a, b) {}
  function Gv() {
    var a = {};
    return a;
  }
  function uv(a) {
    a = a === void 0 ? !0 : a;
    var b = {};
    return b;
  }
  function Hv() {}
  function Iv(a, b) {}
  function Jv(a, b, c) {}
  function Kv() {}
  function Lv(a, b) {
    var c = G,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  }
  var Mv = function (a, b, c, d) {
    var e = kn(a, "fmt");
    if (b) {
      var f = kn(a, "random"),
        g = kn(a, "label") || "";
      if (!f) return !1;
      var k = Jt(
        decodeURIComponent(g.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(f.replace(/\+/g, " "))
      );
      if (!Lv(k, b)) return !1;
    }
    e && e != 4 && (a = mn(a, "rfmt", e));
    var m = mn(a, "fmt", 4);
    Lc(
      m,
      function () {
        G.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((G.google_noFurtherRedirects = null), b());
      },
      c,
      d,
      H.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var Nv = function (a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c],
          e = void 0;
        if (d.hasOwnProperty("google_business_vertical")) {
          e = d.google_business_vertical;
          var f = {};
          b[e] = b[e] || ((f.google_business_vertical = e), f);
        } else (e = ""), b.hasOwnProperty(e) || (b[e] = {});
        var g = b[e],
          k;
        for (k in d)
          k !== "google_business_vertical" &&
            (k in g || (g[k] = []), g[k].push(d[k]));
      }
      return Object.keys(b).map(function (m) {
        return b[m];
      });
    },
    Pv = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d) {
          var e = {};
          b.push(
            ((e.id = Ov(d)),
            (e.origin = d.origin),
            (e.destination = d.destination),
            (e.start_date = d.start_date),
            (e.end_date = d.end_date),
            (e.location_id = d.location_id),
            (e.google_business_vertical = d.google_business_vertical),
            e)
          );
        }
      }
      return b;
    },
    Qv = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d &&
          b.push({
            item_id: Ov(d),
            quantity: d.quantity,
            value: d.price,
            start_date: d.start_date,
            end_date: d.end_date,
          });
      }
      return b;
    },
    Ov = function (a) {
      a.item_id != null &&
        (a.id != null ? (O(138), a.id !== a.item_id && O(148)) : O(153));
      var b = a.id;
      T(16) &&
        (a.item_id != null ? (b = a.item_id) : b == null && (b = a.item_name));
      return b;
    },
    Sv = function (a) {
      if (!a) return "";
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = [];
        d &&
          (e.push(Rv(d.value)),
          e.push(Rv(d.quantity)),
          e.push(Rv(d.item_id)),
          e.push(Rv(d.start_date)),
          e.push(Rv(d.end_date)),
          b.push("(" + e.join("*") + ")"));
      }
      return b.length > 0 ? b.join("") : "";
    },
    Rv = function (a) {
      return typeof a !== "number" && typeof a !== "string" ? "" : a.toString();
    },
    Uv = function (a, b) {
      var c = Tv(b);
      return "" + a + (a && c ? ";" : "") + c;
    },
    Tv = function (a) {
      if (!a || typeof a !== "object" || typeof a.join === "function")
        return "";
      var b = [];
      z(a, function (c, d) {
        var e, f;
        if (Array.isArray(d)) {
          for (var g = [], k = 0; k < d.length; ++k) {
            var m = Vv(d[k]);
            m != void 0 && g.push(m);
          }
          f = g.length !== 0 ? g.join(",") : void 0;
        } else f = Vv(d);
        e = f;
        var n = Vv(c);
        n && e != void 0 && b.push(n + "=" + e);
      });
      return b.join(";");
    },
    Vv = function (a) {
      var b = typeof a;
      if (a != null && b !== "object" && b !== "function")
        return String(a)
          .replace(/,/g, "\\,")
          .replace(/;/g, "\\;")
          .replace(/=/g, "\\=");
    },
    Wv = function (a, b) {
      var c = [],
        d = function (f, g) {
          var k = ng[f] === !0;
          g == null ||
            (!k && g === "") ||
            (g === !0 && (g = 1),
            g === !1 && (g = 0),
            c.push(f + "=" + encodeURIComponent(g)));
        },
        e = a.metadata.hit_type;
      (e !== "conversion" && e !== "remarketing") ||
        d("random", a.metadata.event_start_timestamp_ms);
      z(b, d);
      return c.join("&");
    },
    Xv = function (a, b) {
      var c = a.metadata.hit_type,
        d = a.o[P.g.Vc],
        e = W([P.g.R, P.g.P]),
        f = [],
        g,
        k = a.m.onSuccess,
        m,
        n = lo() ? 2 : 3,
        p = 0,
        q = function (y) {
          f.push(y);
          y.Da && p++;
        };
      switch (c) {
        case "conversion":
          m = "/pagead/conversion";
          var r = "",
            t = void 0;
          e
            ? a.metadata.is_gcp_conversion
              ? ((g = "https://www.google.com"),
                (m = "/pagead/1p-conversion"),
                (t = 8))
              : ((g = "https://www.googleadservices.com"), (t = 5))
            : ((g = "https://pagead2.googlesyndication.com"), (t = 6));
          a.metadata.is_gcp_conversion &&
            (r = "&gcp=1&sscte=1&ct_cookie_present=1");
          var u = {
            La: "" + vj(g, !0) + m + "/" + d + "/?" + Wv(a, b) + r,
            format: n,
            Da: !0,
            endpoint: t,
          };
          W(P.g.P) && (u.attributes = { attributionsrc: "" });
          a.metadata.is_fallback_aw_conversion_ping_allowed &&
            ((u.Fe =
              "" +
              vj("https://www.google.com", !0) +
              "/pagead/1p-conversion/" +
              d +
              "/?" +
              Wv(a, b) +
              "&gcp=1&sscte=1&ct_cookie_present=1"),
            (u.Ee = 8));
          q(u);
          a.metadata.send_ccm_parallel_ping &&
            ((t = a.metadata.is_gcp_conversion ? 23 : 22),
            q({
              La: "" + vj(g, !0) + "/ccm/conversion/" + d + "/?" + Wv(a, b) + r,
              format: 2,
              Da: !0,
              endpoint: t,
            }));
          a.metadata.is_gcp_conversion &&
            e &&
            ((r = "&gcp=1&ct_cookie_present=1"),
            q({
              La:
                "" +
                vj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Wv(a, b) +
                r,
              format: n,
              Da: !0,
              endpoint: 9,
            }));
          break;
        case "remarketing":
          var v = b.data || "",
            w = Nv(Pv(a.o[P.g.da]));
          if (w.length) {
            for (var x = 0; x < w.length; x++)
              (b.data = Uv(v, w[x])),
                q({
                  La:
                    "" +
                    vj("https://googleads.g.doubleclick.net") +
                    "/pagead/viewthroughconversion/" +
                    d +
                    "/?" +
                    Wv(a, b),
                  format: n,
                  Da: !0,
                  endpoint: 9,
                }),
                a.metadata.send_fledge_experiment &&
                  q({
                    La: "" + Zt() + "/td/rul/" + d + "?" + Wv(a, b),
                    format: 4,
                    Da: !1,
                    endpoint: 44,
                  }),
                (a.metadata.event_start_timestamp_ms += 1);
            a.metadata.send_fledge_experiment = !1;
          } else
            q({
              La:
                "" +
                vj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Wv(a, b),
              format: n,
              Da: !0,
              endpoint: 9,
            });
          break;
        case "user_data_lead":
          q({
            La:
              "" +
              vj("https://google.com") +
              "/pagead/form-data/" +
              d +
              "?" +
              Wv(a, b),
            format: 1,
            Da: !0,
            endpoint: 11,
          });
          break;
        case "user_data_web":
          q({
            La:
              "" +
              vj("https://google.com") +
              "/ccm/form-data/" +
              d +
              "?" +
              Wv(a, b),
            format: 1,
            Da: !0,
            endpoint: 21,
          });
      }
      f.length > 1 && Bb(a.m.onSuccess) && (k = Zb(a.m.onSuccess, p));
      lo() ||
        (c !== "conversion" && c !== "remarketing") ||
        !a.metadata.send_fledge_experiment ||
        (T(27) && c === "conversion" && (b.ct_cookie_present = 0),
        q({
          La: "" + Zt() + "/td/rul/" + d + "?" + Wv(a, b),
          format: 4,
          Da: !1,
          endpoint: 44,
        }));
      return { onSuccess: k, hm: f };
    },
    Yv = function (a, b, c, d, e, f, g, k) {
      Dv(c.m.eventId, c.eventName);
      var m = function () {
        f && f();
      };
      switch (b) {
        case 1:
          Vc(a);
          f && f();
          break;
        case 2:
          Oc(a, m, g, k);
          break;
        case 3:
          var n = !1;
          try {
            n = Mv(a, m, g, k);
          } catch (r) {
            n = !1;
          }
          n || Yv(a, 2, c, d, e, m, g, k);
          break;
        case 4:
          var p = "AW-" + c.o[P.g.Vc],
            q = c.o[P.g.qb];
          q && (p = p + "/" + q);
          Xt(a, p);
      }
    },
    Zv = function (a) {
      switch (a) {
        case "conversion":
          return T(51);
        case "user_data_lead":
          return T(52);
        case "user_data_web":
          return T(53);
      }
      return !1;
    },
    $v = {},
    aw =
      (($v[P.g.Tb] = "gcu"),
      ($v[P.g.nb] = "gclgb"),
      ($v[P.g.Va] = "gclaw"),
      ($v[P.g.Ci] = "gclgs"),
      ($v[P.g.Di] = "gclst"),
      ($v[P.g.Hb] = "auid"),
      ($v[P.g.Jd] = "dscnt"),
      ($v[P.g.Kd] = "fcntr"),
      ($v[P.g.Ld] = "flng"),
      ($v[P.g.Md] = "mid"),
      ($v[P.g.mg] = "bttype"),
      ($v[P.g.qb] = "label"),
      ($v[P.g.Xb] = "capi"),
      ($v[P.g.jf] = "pscdl"),
      ($v[P.g.za] = "currency_code"),
      ($v[P.g.Nd] = "vdltv"),
      ($v[P.g.Mi] = "_dbg"),
      ($v[P.g.Td] = "oedeld"),
      ($v[P.g.rb] = "edid"),
      ($v[P.g.Ri] = "fdr"),
      ($v[P.g.ug] = "fledge"),
      ($v[P.g.Xd] = "gac"),
      ($v[P.g.zc] = "gacgb"),
      ($v[P.g.zg] = "gacmcov"),
      ($v[P.g.Ac] = "gdpr"),
      ($v[P.g.ub] = "gdid"),
      ($v[P.g.Bc] = "_ng"),
      ($v[P.g.Eg] = "gsaexp"),
      ($v[P.g.Kb] = "frm"),
      ($v[P.g.Zd] = "gtm_up"),
      ($v[P.g.ed] = "lps"),
      ($v[P.g.ae] = "did"),
      ($v[P.g.fd] = void 0),
      ($v[P.g.cb] = "tiba"),
      ($v[P.g.ac] = "rdp"),
      ($v[P.g.wb] = "ecsid"),
      ($v[P.g.wf] = "ga_uid"),
      ($v[P.g.ld] = "delopc"),
      ($v[P.g.Dc] = "gdpr_consent"),
      ($v[P.g.Aa] = "oid"),
      ($v[P.g.zf] = "uaa"),
      ($v[P.g.Af] = "uab"),
      ($v[P.g.Bf] = "uafvl"),
      ($v[P.g.Cf] = "uamb"),
      ($v[P.g.Df] = "uam"),
      ($v[P.g.Ef] = "uap"),
      ($v[P.g.Ff] = "uapv"),
      ($v[P.g.Gf] = "uaw"),
      ($v[P.g.Og] = "ec_lat"),
      ($v[P.g.Pg] = "ec_meta"),
      ($v[P.g.Qg] = "ec_m"),
      ($v[P.g.Rg] = "ec_sel"),
      ($v[P.g.Sg] = "ec_s"),
      ($v[P.g.md] = "ec_mode"),
      ($v[P.g.Ba] = "userId"),
      ($v[P.g.he] = "us_privacy"),
      ($v[P.g.na] = "value"),
      ($v[P.g.Tg] = "mcov"),
      ($v[P.g.pj] = "hn"),
      ($v[P.g.qj] = "gtm_ee"),
      ($v[P.g.Pb] = "npa"),
      ($v[P.g.Vc] = null),
      ($v[P.g.Nb] = null),
      ($v[P.g.Ra] = null),
      ($v[P.g.da] = null),
      ($v[P.g.wa] = null),
      ($v[P.g.Fa] = null),
      ($v[P.g.xf] = null),
      ($v[P.g.ke] = null),
      $v),
    cw = function (a) {
      a.metadata.hit_type === "page_view"
        ? Qu(a)
        : bw(a, function (b, c) {
            for (
              var d = Xv(a, b), e = d.onSuccess, f = d.hm, g = {}, k = 0;
              k < f.length;
              g = {
                Fe: void 0,
                Qf: void 0,
                Ee: void 0,
                Da: void 0,
                Of: void 0,
                La: void 0,
                qh: void 0,
              },
                k++
            ) {
              var m = f[k];
              g.La = m.La;
              g.Qf = m.format;
              g.Da = m.Da;
              g.Of = m.attributes;
              g.qh = m.endpoint;
              g.Fe = m.Fe;
              g.Ee = m.Ee;
              var n = void 0;
              if ((n = c) != null && n.fn) {
                var p = (function (v) {
                    return function (w) {
                      Vh(c.Dm, function (x) {
                        var y = Lh(x),
                          B = v.La;
                        if (w) {
                          var A = no({
                            xa: a.metadata.source_canonical_id,
                            pk: w,
                          });
                          B = B.replace(b.gtm, A);
                        }
                        Yv(
                          B + "&em=" + encodeURIComponent(y.ek),
                          v.Qf,
                          a,
                          b,
                          v.qh,
                          v.Da ? e : void 0,
                          void 0,
                          v.Of
                        );
                      });
                    };
                  })(g),
                  q = c,
                  r = q.ai,
                  t = "" + g.La + q.ln.join("");
                Ct(t, r, g.Da && e ? e : function () {}, p);
              } else {
                var u = void 0;
                g.Fe &&
                  g.Ee &&
                  (u = (function (v) {
                    return function () {
                      Yv(
                        v.Fe,
                        v.Qf,
                        a,
                        b,
                        v.Ee,
                        v.Da ? e : void 0,
                        void 0,
                        v.Of
                      );
                    };
                  })(g));
                Yv(g.La, g.Qf, a, b, g.qh, g.Da ? e : void 0, u, g.Of);
              }
            }
          });
    },
    bw = function (a, b) {
      var c = a.metadata.hit_type,
        d = {},
        e = {},
        f,
        g = [],
        k = a.metadata.event_start_timestamp_ms;
      if (c === "conversion" || c === "remarketing")
        (d.cv = "11"),
          (d.fst = k),
          (d.fmt = 3),
          (d.bg = "ffffff"),
          (d.guid = "ON"),
          (d.async = "1");
      var m = Cq(["aw", "dc"]);
      m != null && (d.gad_source = m);
      d.gtm = no({ xa: a.metadata.source_canonical_id });
      c !== "remarketing" && Un() && (d.gcs = Vn());
      d.gcd = fo(a.m);
      io() && (d.dma_cps = go());
      d.dma = ho();
      yn(Gn()) && (d.tcfd = jo());
      Oi.j && (d.tag_exp = Oi.j);
      if (a.o[P.g.Nb]) {
        var n = a.o[P.g.Nb].split("x");
        n.length === 2 && ((d.u_w = n[0]), (d.u_h = n[1]));
      }
      if (a.o[P.g.Ra]) {
        var p = a.o[P.g.Ra];
        p.length === 2
          ? (d.hl = p)
          : p.length === 5 &&
            ((d.hl = p.substring(0, 2)), (d.gl = p.substring(3, 5)));
      }
      var q = a.metadata.redact_click_ids,
        r = function (F, L) {
          var M = a.o[L];
          M && (d[F] = q ? oj(M) : M);
        };
      r("url", P.g.wa);
      r("ref", P.g.Fa);
      r("top", P.g.xf);
      z(a.o, function (F, L) {
        if (aw.hasOwnProperty(F)) {
          var M = aw[F];
          M && (d[M] = L);
        } else e[F] = L;
      });
      wl(d, a.o[P.g.ke]);
      var t = a.o[P.g.fd];
      t != void 0 && t !== "" && (d.vdnc = String(t));
      var u = a.o[P.g.Zc];
      u !== void 0 && (d.shf = u);
      var v = a.o[P.g.wc];
      v !== void 0 && (d.delc = v);
      if (T(24) && a.metadata.add_tag_timing) {
        d.tft = Ob();
        var w = ad();
        w !== void 0 && (d.tfd = Math.round(w));
      }
      d.data = Tv(e);
      var x = a.o[P.g.da];
      x && c === "conversion" && ((d.iedeld = Hr(x)), (d.item = Sv(Qv(x))));
      if (
        (c === "conversion" ||
          c === "user_data_lead" ||
          c === "user_data_web") &&
        a.metadata.user_data
      )
        if (!W(P.g.P) || (T(15) && !W(P.g.R))) d.ec_mode = void 0;
        else {
          var y = function () {
            if (c === "user_data_web") {
              var F;
              var L = a.metadata.cookie_options;
              L = L || {};
              var M;
              if (W(bs)) {
                (M = cs(L)) || (M = Po());
                var S = L,
                  V = wp(S.prefix);
                yp(S, M);
                delete tp[V];
                delete up[V];
                xp(V, S.path, S.domain);
                F = cs(L);
              } else F = void 0;
              d.ecsid = F;
            }
          };
          if (c !== "conversion" && T(82)) {
            d.gtm = no({ xa: a.metadata.source_canonical_id, pk: 3 });
            var B = Uh(a.metadata.user_data),
              A = Ih(B),
              C = A.sn;
            f = { fn: !0, ai: A.ai, ln: ["&em=" + A.kn], Dm: B };
            C > 0 && y();
          } else {
            var E = Kh(a.metadata.user_data);
            if (E) {
              var D = E.then(function (F) {
                d.em = F.dk;
                F.We > 0 && y();
                T(71) &&
                  Zv(c) &&
                  ((d._is_ee = 0),
                  (d._es = 13),
                  (F.We !== 0 && d.em) || (d._es = 12));
                return F;
              });
              g.push(D);
            }
          }
        }
      if (g.length)
        try {
          Promise.all(g).then(function () {
            b(d);
          });
          return;
        } catch (F) {}
      b(d, f);
    };
  function dw(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b];
    }
  }
  function ew(a, b, c) {
    c = c === void 0 ? !1 : c;
    fw().addRestriction(0, a, b, c);
  }
  function gw(a, b, c) {
    c = c === void 0 ? !1 : c;
    fw().addRestriction(1, a, b, c);
  }
  function hw() {
    var a = Xj();
    return fw().getRestrictions(1, a);
  }
  var iw = function () {
      this.j = {};
      this.D = {};
    },
    jw = function (a, b) {
      var c = a.j[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.j[b] = c));
      return c;
    };
  iw.prototype.addRestriction = function (a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (!d || !this.D[b]) {
      var e = jw(this, b);
      a === 0
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : a === 1 &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  iw.prototype.getRestrictions = function (a, b) {
    var c = jw(this, b);
    if (a === 0) {
      var d, e;
      return [].concat(
        qa(
          (c == null
            ? void 0
            : (d = c._entity) == null
            ? void 0
            : d.internal) || []
        ),
        qa(
          (c == null
            ? void 0
            : (e = c._entity) == null
            ? void 0
            : e.external) || []
        )
      );
    }
    if (a === 1) {
      var f, g;
      return [].concat(
        qa(
          (c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) ||
            []
        ),
        qa(
          (c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  iw.prototype.getExternalRestrictions = function (a, b) {
    var c = jw(this, b),
      d,
      e;
    return a === 0
      ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) ||
          []
      : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) ||
          [];
  };
  iw.prototype.removeExternalRestrictions = function (a) {
    var b = jw(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.D[a] = !0;
  };
  function fw() {
    var a = vi.r;
    a || ((a = new iw()), (vi.r = a));
    return a;
  }
  var kw = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    lw = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    mw = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    nw =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  function ow() {
    var a = Wi("gtm.allowlist") || Wi("gtm.whitelist");
    a && O(9);
    Bi && (a = ["google", "gtagfl", "lcl", "zone"]);
    kw.test(G.location && G.location.hostname) &&
      (Bi
        ? O(116)
        : (O(117),
          pw &&
            ((a = []),
            window.console &&
              window.console.log &&
              window.console.log("GTM blocked. See go/13687728."))));
    var b = a && Sb(Lb(a), lw),
      c = Wi("gtm.blocklist") || Wi("gtm.blacklist");
    c || ((c = Wi("tagTypeBlacklist")) && O(3));
    c ? O(8) : (c = []);
    kw.test(G.location && G.location.hostname) &&
      ((c = Lb(c)),
      c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    Lb(c).indexOf("google") >= 0 && O(2);
    var d = c && Sb(Lb(c), mw),
      e = {};
    return function (f) {
      var g = f && f[Xe.oa];
      if (!g || typeof g !== "string") return !0;
      g = g.replace(/^_*/, "");
      if (e[g] !== void 0) return e[g];
      var k = Li[g] || [],
        m = !0;
      if (a) {
        var n;
        if ((n = m))
          a: {
            if (b.indexOf(g) < 0)
              if (k && k.length > 0)
                for (var p = 0; p < k.length; p++) {
                  if (b.indexOf(k[p]) < 0) {
                    O(11);
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (c) {
        var r = d.indexOf(g) >= 0;
        if (r) q = r;
        else {
          var t = Gb(d, k || []);
          t && O(10);
          q = t;
        }
      }
      var u = !m || q;
      u ||
        !(k.indexOf("sandboxedScripts") >= 0) ||
        (b && b.indexOf("sandboxedScripts") !== -1) ||
        (u = Gb(d, nw));
      return (e[g] = u);
    };
  }
  var pw = !1;
  pw = !0;
  function qw() {
    Pj &&
      ew(Xj(), function (a) {
        var b = Hf(a.entityId),
          c;
        if (Kf(b)) {
          var d = b[Xe.oa];
          if (!d)
            throw Error("Error: No function name given for function call.");
          var e = zf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!dw(b[Xe.oa], 4);
        return c;
      });
  }
  function rw(a, b, c, d, e) {
    if (!sw()) {
      var f = d.siloed ? Sj(a) : a;
      if (!gk(f)) {
        var g = tw(a),
          k = Tb(a, "GTM-"),
          m = tj(),
          n = c ? "/gtag/js" : "/gtm.js",
          p = sj(b, n + g);
        if (!p) {
          var q = ui.Fd + n;
          m && Fc && k
            ? ((q = Fc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]),
              (p = Lr("https://", "http://", q + g)))
            : (p = Qi() ? Pi() + n + g : Lr("https://", "http://", q + g));
        }
        d.siloed && ik({ ctid: f, isDestination: !1 });
        var r = ak();
        Jj().container[f] = { state: 1, context: d, parent: r };
        Ij({ ctid: f, isDestination: !1 }, e);
        Lc(p);
      }
    }
  }
  function uw(a, b, c, d) {
    if (!sw()) {
      var e = c.siloed ? Sj(a) : a;
      if (!hk(e))
        if (!c.siloed && jk())
          (Jj().destination[e] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: ak(),
          }),
            Ij({ ctid: e, isDestination: !0 }, d),
            O(91);
        else {
          var f = "/gtag/destination" + tw(a, !0),
            g = sj(b, f);
          g || (g = Qi() ? Pi() + f : Lr("https://", "http://", ui.Fd + f));
          c.siloed && ik({ ctid: e, isDestination: !0 });
          Jj().destination[e] = { state: 1, context: c, parent: ak() };
          Ij({ ctid: e, isDestination: !0 }, d);
          Lc(g);
        }
    }
  }
  function tw(a, b) {
    b = b === void 0 ? !1 : b;
    var c = "?id=" + encodeURIComponent(a) + "&l=" + ui.jb;
    if (!Tb(a, "GTM-") || b) c += "&cx=c";
    T(68) && (c += "&gtm=" + no());
    tj() && (c += "&sign=" + ui.Zg);
    var d = Oi.D;
    d === 1 ? (c += "&fps=fc") : d === 2 && (c += "&fps=fe");
    return c;
  }
  function sw() {
    if (lo()) {
      return !0;
    }
    return !1;
  }
  var vw = [];
  function ww() {
    var a = ag.ctid;
    if (a) {
      var b = Lj.oe ? 1 : 0,
        c,
        d = Zj(ak());
      c = d && d.context;
      return (
        a +
        ";" +
        ag.canonicalContainerId +
        ";" +
        (c && c.fromContainerExecution ? 1 : 0) +
        ";" +
        ((c && c.source) || 0) +
        ";" +
        b
      );
    }
  }
  function xw() {
    var a = nj(G.location.href);
    return a.hostname + a.pathname;
  }
  function yw() {
    var a = xw();
    a && rk("dl", encodeURIComponent(a));
    if (T(85)) {
      var b = ww();
      b && rk("tdp", b);
    } else
      rk("tdp", function () {
        return vw.length > 0 ? vw.join(".") : void 0;
      });
    var c = pn(!0);
    c !== void 0 && rk("frm", String(c));
  }
  var zw = !1,
    Aw = 0,
    Bw = [];
  function Cw(a) {
    if (!zw) {
      var b = H.createEventObject,
        c = H.readyState === "complete",
        d = H.readyState === "interactive";
      if (!a || a.type !== "readystatechange" || c || (!b && d)) {
        zw = !0;
        for (var e = 0; e < Bw.length; e++) I(Bw[e]);
      }
      Bw.push = function () {
        for (var f = Ma.apply(0, arguments), g = 0; g < f.length; g++) I(f[g]);
        return 0;
      };
    }
  }
  function Dw() {
    if (!zw && Aw < 140) {
      Aw++;
      try {
        var a, b;
        (b = (a = H.documentElement).doScroll) == null || b.call(a, "left");
        Cw();
      } catch (c) {
        G.setTimeout(Dw, 50);
      }
    }
  }
  function Ew(a) {
    zw ? a() : Bw.push(a);
  }
  function Gw(a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Vj(),
    };
  }
  var Iw = function (a, b) {
      this.j = !1;
      this.K = [];
      this.eventData = { tags: [] };
      this.O = !1;
      this.D = this.H = 0;
      Hw(this, a, b);
    },
    Jw = function (a, b, c, d) {
      if (xi.hasOwnProperty(b) || b === "__zone") return -1;
      var e = {};
      fb(d) && (e = h(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1;
    },
    Kw = function (a, b, c, d) {
      var e = a.eventData.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Lw = function (a) {
      if (!a.j) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]();
        a.j = !0;
        a.K.length = 0;
      }
    },
    Hw = function (a, b, c) {
      b !== void 0 && a.we(b);
      c &&
        G.setTimeout(function () {
          Lw(a);
        }, Number(c));
    };
  Iw.prototype.we = function (a) {
    var b = this,
      c = Qb(function () {
        I(function () {
          a(Vj(), b.eventData);
        });
      });
    this.j ? c() : this.K.push(c);
  };
  var Mw = function (a) {
      a.H++;
      return Qb(function () {
        a.D++;
        a.O && a.D >= a.H && Lw(a);
      });
    },
    Nw = function (a) {
      a.O = !0;
      a.D >= a.H && Lw(a);
    };
  var Ow = {},
    Qw = function () {
      return G[Pw()];
    };
  function Pw() {
    return G.GoogleAnalyticsObject || "ga";
  }
  var Tw = function () {
      var a = Vj();
    },
    Uw = function (a, b) {
      return function () {
        var c = Qw(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              k = f.get("hitCallback"),
              m = g.indexOf("&tid=" + b) < 0;
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", k, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var Zw = ["es", "1"],
    $w = {},
    ax = {};
  function bx(a, b) {
    if (Cj) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      $w[a] = [
        ["e", c],
        ["eid", a],
      ];
      tm(a);
    }
  }
  function cx(a) {
    var b = a.eventId,
      c = a.mc;
    if (!$w[b]) return [];
    var d = [];
    ax[b] || d.push(Zw);
    d.push.apply(d, qa($w[b]));
    c && (ax[b] = !0);
    return d;
  }
  var dx = {},
    ex = {},
    fx = {};
  function gx(a, b, c, d) {
    Cj &&
      T(76) &&
      ((d === void 0 ? 0 : d)
        ? ((fx[b] = fx[b] || 0), ++fx[b])
        : c !== void 0
        ? ((ex[a] = ex[a] || {}), (ex[a][b] = Math.round(c)))
        : ((dx[a] = dx[a] || {}), (dx[a][b] = (dx[a][b] || 0) + 1)));
  }
  function hx(a) {
    var b = a.eventId,
      c = a.mc,
      d = dx[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete dx[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function ix(a) {
    var b = a.eventId,
      c = a.mc,
      d = ex[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete ex[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function jx() {
    for (
      var a = [], b = oa(Object.keys(fx)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + fx[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var kx = {},
    lx = {};
  function mx(a, b, c) {
    if (Cj && b) {
      var d = wj(b);
      kx[a] = kx[a] || [];
      kx[a].push(c + d);
      var e = (Kf(b) ? "1" : "2") + d;
      lx[a] = lx[a] || [];
      lx[a].push(e);
      tm(a);
    }
  }
  function nx(a) {
    var b = a.eventId,
      c = a.mc,
      d = [],
      e = kx[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = lx[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete kx[b], delete lx[b]);
    return d;
  }
  function ox(a, b, c, d) {
    var e = xf[a],
      f = px(a, b, c, d);
    if (!f) return null;
    var g = Lf(e[Xe.Fj], c, []);
    if (g && g.length) {
      var k = g[0];
      f = ox(
        k.index,
        {
          onSuccess: f,
          onFailure: k.Tj === 1 ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function px(a, b, c, d) {
    function e() {
      function w() {
        $k(3);
        var D = Ob() - E;
        mx(c.id, f, "7");
        Kw(c.ic, A, "exception", D);
        T(69) && Jv(c, f, Su.M.Hj);
        C || ((C = !0), k());
      }
      if (f[Xe.bl]) k();
      else {
        var x = Jf(f, c, []),
          y = x[Xe.Bk];
        if (y != null)
          for (var B = 0; B < y.length; B++)
            if (!W(y[B])) {
              k();
              return;
            }
        var A = Jw(c.ic, String(f[Xe.oa]), Number(f[Xe.ve]), x[Xe.fl]),
          C = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!C) {
            C = !0;
            var D = Ob() - E;
            mx(c.id, xf[a], "5");
            Kw(c.ic, A, "success", D);
            T(69) && Jv(c, f, Su.M.Jj);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!C) {
            C = !0;
            var D = Ob() - E;
            mx(c.id, xf[a], "6");
            Kw(c.ic, A, "failure", D);
            T(69) && Jv(c, f, Su.M.Ij);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        mx(c.id, f, "1");
        T(69) && Iv(c, f);
        var E = Ob();
        try {
          Mf(x, { event: c, index: a, type: 1 });
        } catch (D) {
          w(D);
        }
        T(69) && Jv(c, f, Su.M.Kj);
      }
    }
    var f = xf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = Lf(f[Xe.Lj], c, []);
    if (n && n.length) {
      var p = n[0],
        q = ox(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      k = p.Tj === 2 ? m : q;
    }
    if (f[Xe.xj] || f[Xe.jl]) {
      var r = f[Xe.xj] ? yf : c.hn,
        t = g,
        u = k;
      if (!r[a]) {
        var v = qx(a, r, Qb(e));
        g = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function qx(a, b, c) {
    var d = [],
      e = [];
    b[a] = rx(d, e, c);
    return {
      onSuccess: function () {
        b[a] = sx;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = tx;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function rx(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function sx(a) {
    a();
  }
  function tx(a, b) {
    b();
  }
  var wx = function (a, b) {
    for (var c = [], d = 0; d < xf.length; d++)
      if (a[d]) {
        var e = xf[d];
        var f = Mw(b.ic);
        try {
          var g = ox(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = e[Xe.oa];
            if (!k)
              throw Error("Error: No function name given for function call.");
            var m = zf[k];
            c.push({
              sk: d,
              ik: (m ? m.priorityOverride || 0 : 0) || dw(e[Xe.oa], 1) || 0,
              execute: g,
            });
          } else ux(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(vx);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return c.length > 0;
  };
  function vx(a, b) {
    var c,
      d = b.ik,
      e = a.ik;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (c !== 0) f = c;
    else {
      var g = a.sk,
        k = b.sk;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function ux(a, b) {
    if (Cj) {
      var c = function (d) {
        var e = b.isBlocked(xf[d]) ? "3" : "4",
          f = Lf(xf[d][Xe.Fj], b, []);
        f && f.length && c(f[0].index);
        mx(b.id, xf[d], e);
        var g = Lf(xf[d][Xe.Lj], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var zx = !1,
    xx;
  var Fx = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (T(69)) {
    }
    if (d === "gtm.js") {
      if (zx) return !1;
      zx = !0;
    }
    var e = !1,
      f = hw(),
      g = h(a);
    if (
      !f.every(function (t) {
        return t({ originalEventData: g });
      })
    ) {
      if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
        return !1;
      e = !0;
    }
    bx(b, d);
    var k = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Bx(g, e),
        hn: [],
        logMacroError: function () {
          O(6);
          $k(0);
        },
        cachedModelValues: Cx(),
        ic: new Iw(function () {
          if (T(69)) {
          }
          k && k.apply(k, [].slice.call(arguments, 0));
        }, m),
        originalEventData: g,
      };
    T(76) && Cj && (n.reportMacroDiscrepancy = gx);
    T(69) && Ev(n.id, n.name);
    var p = Sf(n);
    T(69) && Fv(n.id, n.name);
    e && (p = Dx(p));
    if (T(69)) {
    }
    var q = wx(p, n),
      r = !1;
    Nw(n.ic);
    (d !== "gtm.js" && d !== "gtm.sync") || Tw();
    return Ex(p, q) || r;
  };
  function Cx() {
    var a = {};
    a.event = aj("event", 1);
    a.ecommerce = aj("ecommerce", 1);
    a.gtm = aj("gtm");
    a.eventModel = aj("eventModel");
    return a;
  }
  function Bx(a, b) {
    var c = ow();
    return function (d) {
      if (c(d)) return !0;
      var e = d && d[Xe.oa];
      if (!e || typeof e != "string") return !0;
      e = e.replace(/^_*/, "");
      var f,
        g = Xj();
      f = fw().getRestrictions(0, g);
      var k = a;
      b && ((k = h(a)), (k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (
        var m = Li[e] || [], n = oa(f), p = n.next();
        !p.done;
        p = n.next()
      ) {
        var q = p.value;
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: k }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function Dx(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(xf[c][Xe.oa]);
        if (wi[d] || xf[c][Xe.kl] !== void 0 || dw(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Ex(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && xf[c] && !xi[String(xf[c][Xe.oa])]) return !0;
    return !1;
  }
  var Lx = 0;
  function Mx(a, b) {
    return arguments.length === 1 ? Nx("set", a) : Nx("set", a, b);
  }
  function Ox(a, b) {
    return arguments.length === 1 ? Nx("config", a) : Nx("config", a, b);
  }
  function Px(a, b, c) {
    c = c || {};
    c[P.g.bc] = a;
    return Nx("event", b, c);
  }
  function Nx() {
    return arguments;
  }
  var Qx = function () {
    this.messages = [];
    this.j = [];
  };
  Qx.prototype.enqueue = function (a, b, c) {
    var d = this.messages.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.messages.push(f);
    for (var g = 0; g < this.j.length; g++)
      try {
        this.j[g](f);
      } catch (k) {}
  };
  Qx.prototype.listen = function (a) {
    this.j.push(a);
  };
  Qx.prototype.get = function () {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Qx.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.messages = c;
    return b;
  };
  function Rx(a, b, c) {
    c.eventMetadata = c.eventMetadata || {};
    c.eventMetadata.source_canonical_id = ag.canonicalContainerId;
    Sx().enqueue(a, b, c);
  }
  function Tx() {
    var a = Ux;
    Sx().listen(a);
  }
  function Sx() {
    var a = vi.mb;
    a || ((a = new Qx()), (vi.mb = a));
    return a;
  }
  var Xf;
  var Vx = {},
    Wx = {};
  function Xx(a, b) {
    for (
      var c = [], d = [], e = {}, f = 0;
      f < a.length;
      e = { Qh: void 0, yh: void 0 }, f++
    ) {
      var g = a[f];
      if (g.indexOf("-") >= 0) {
        if (((e.Qh = zl(g, b)), e.Qh)) {
          var k = Tj();
          Eb(
            k,
            (function (r) {
              return function (t) {
                return r.Qh.ia === t;
              };
            })(e)
          )
            ? c.push(g)
            : d.push(g);
        }
      } else {
        var m = Vx[g] || [];
        e.yh = {};
        m.forEach(
          (function (r) {
            return function (t) {
              r.yh[t] = !0;
            };
          })(e)
        );
        for (var n = Qj(), p = 0; p < n.length; p++)
          if (e.yh[n[p]]) {
            c = c.concat(Tj());
            break;
          }
        var q = Wx[g] || [];
        q.length && (c = c.concat(q));
      }
    }
    return { zm: c, Cm: d };
  }
  function Yx(a) {
    z(Vx, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  function Zx(a) {
    z(Wx, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  var $x = "HA GF G UA AW DC MC".split(" "),
    ay = !1,
    by = !1,
    cy = !1,
    dy = !1;
  function ey(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Mi() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var fy = void 0,
    gy = void 0;
  function hy(a, b, c) {
    var d = h(a, null);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return b[f] !== void 0;
    }) && O(136);
    var e = h(b, null);
    h(c, e);
    Rx(Ox(Qj()[0], e), a.eventId, d);
  }
  function iy(a) {
    for (var b = oa([P.g.jd, P.g.Ob]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || Bm.D[d];
      if (e) return e;
    }
  }
  var jy = [
      P.g.jd,
      P.g.Ob,
      P.g.yc,
      P.g.pb,
      P.g.wb,
      P.g.Ba,
      P.g.sa,
      P.g.Qa,
      P.g.Wa,
      P.g.Ib,
    ],
    ky = {
      config: function (a, b) {
        var c = ey(a, b);
        if (!(a.length < 2) && l(a[1])) {
          var d = {};
          if (a.length > 2) {
            if ((a[2] !== void 0 && !fb(a[2])) || a.length > 3) return;
            d = a[2];
          }
          var e = zl(a[1], b.isGtmEvent);
          if (e) {
            var f, g, k;
            a: {
              if (!Lj.oe) {
                var m = Zj(ak());
                if (lk(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  k = { Jm: Zj(n), ym: p };
                  break a;
                }
              }
              k = void 0;
            }
            var q = k;
            q && ((f = q.Jm), (g = q.ym));
            bx(c.eventId, "gtag.config");
            var r = e.ia,
              t = e.id !== r;
            if (t ? Tj().indexOf(r) === -1 : Qj().indexOf(r) === -1) {
              if (!b.inheritParentConfig && !d[P.g.Lb]) {
                var u = iy(d);
                if (t)
                  uw(r, u, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                  var v = d;
                  fy ? hy(b, v, fy) : gy || (gy = h(v, null));
                } else
                  rw(r, u, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (O(128), g && O(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                gy
                  ? (hy(b, gy, x), (w = !1))
                  : ((!x[P.g.fc] && zi && fy) || (fy = h(x, null)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              var y = d;
              if (!cy && ((cy = !0), by))
                for (var B = oa(jy), A = B.next(); !A.done; A = B.next())
                  if (y.hasOwnProperty(A.value)) {
                    Zk("erc");
                    break;
                  }
              Dj && !Pj && (Lx === 1 && (pk.mcc = !1), (Lx = 2));
              Wk = !0;
              if (zi && !t && !d[P.g.fc]) {
                var C = dy;
                dy = !0;
                if (C) return;
              }
              ay || O(43);
              if (!b.noTargetGroup)
                if (t) {
                  Zx(e.id);
                  var E = e.id,
                    D = d[P.g.Yd] || "default";
                  D = String(D).split(",");
                  for (var F = 0; F < D.length; F++) {
                    var L = Wx[D[F]] || [];
                    Wx[D[F]] = L;
                    L.indexOf(E) < 0 && L.push(E);
                  }
                } else {
                  Yx(e.id);
                  var M = e.id,
                    S = d[P.g.Yd] || "default";
                  S = S.toString().split(",");
                  for (var V = 0; V < S.length; V++) {
                    var aa = Vx[S[V]] || [];
                    Vx[S[V]] = aa;
                    aa.indexOf(M) < 0 && aa.push(M);
                  }
                }
              delete d[P.g.Yd];
              var X = b.eventMetadata || {};
              X.hasOwnProperty("is_external_event") ||
                (X.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = X;
              delete d[P.g.bd];
              for (var R = t ? [e.id] : Tj(), ma = 0; ma < R.length; ma++) {
                var la = d,
                  ha = R[ma],
                  ya = h(b, null),
                  Na = zl(ha, ya.isGtmEvent);
                Na && Bm.push("config", [la], Na, ya);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (a.length === 3) {
          O(39);
          var c = ey(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[P.g.P] && O(139), e[P.g.ya] && O(140));
          d === "default"
            ? ml(e)
            : d === "update"
            ? ol(e, c)
            : d === "declare" && b.fromContainerExecution && ll(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(a.length < 2) && l(c)) {
          var d = void 0;
          if (a.length > 2) {
            if ((!fb(a[2]) && a[2] !== void 0) || a.length > 3) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = h(e, null)),
            e[P.g.bd] && (g.eventCallback = e[P.g.bd]),
            e[P.g.Vd] && (g.eventTimeout = e[P.g.Vd]));
          var k = ey(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if (c === "optimize.callback")
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[P.g.bc];
          r === void 0 &&
            ((r = Wi(P.g.bc, 2)), r === void 0 && (r = "default"));
          if (l(r) || Array.isArray(r)) {
            var t;
            t = b.isGtmEvent
              ? l(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var u = Xx(t, b.isGtmEvent),
              v = u.zm,
              w = u.Cm;
            if (w.length)
              for (var x = iy(q), y = 0; y < w.length; y++) {
                var B = zl(w[y], b.isGtmEvent);
                B &&
                  uw(B.ia, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = Al(v, b.isGtmEvent);
          } else p = void 0;
          var A = p;
          if (A) {
            var C;
            !A.length ||
              ((C = b.eventMetadata) == null ? 0 : C.em_event) ||
              (by = !0);
            bx(m, c);
            for (var E = [], D = 0; D < A.length; D++) {
              var F = A[D],
                L = h(b, null);
              if ($x.indexOf(bk(F.prefix)) !== -1) {
                var M = h(d, null),
                  S = L.eventMetadata || {};
                S.hasOwnProperty("is_external_event") ||
                  (S.is_external_event = !L.fromContainerExecution);
                L.eventMetadata = S;
                delete M[P.g.bd];
                Cm(c, M, F.id, L);
                Dj && !Pj && Lx === 0 && (rk("mcc", "1"), (Lx = 1));
                Wk = !0;
              }
              E.push(F.id);
            }
            g.eventModel = g.eventModel || {};
            A.length > 0
              ? (g.eventModel[P.g.bc] = E.join())
              : delete g.eventModel[P.g.bc];
            ay || O(43);
            b.noGtmEvent === void 0 &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[P.g.Zb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        O(53);
        if (a.length === 4 && l(a[1]) && l(a[2]) && Bb(a[3])) {
          var c = zl(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            ay || O(43);
            var f = iy();
            if (
              !Eb(Tj(), function (k) {
                return c.ia === k;
              })
            )
              uw(c.ia, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if ($x.indexOf(bk(c.prefix)) !== -1) {
              Wk = !0;
              ey(a, b);
              var g = {};
              h(((g[P.g.tb] = d), (g[P.g.Jb] = e), g), null);
              Dm(
                d,
                function (k) {
                  I(function () {
                    e(k);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (a.length === 2 && a[1].getTime) {
          ay = !0;
          var c = ey(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (a.length === 3 && l(a[1]) && Bb(a[2])) {
          if ((Yf(a[1], a[2]), O(74), a[1] === "all")) {
            O(75);
            var b = !1;
            try {
              b = a[2](Vj(), "unknown", {});
            } catch (c) {}
            b || O(76);
          }
        } else O(73);
      },
      set: function (a, b) {
        var c = void 0;
        a.length === 2 && fb(a[1])
          ? (c = h(a[1], null))
          : a.length === 3 &&
            l(a[1]) &&
            ((c = {}),
            fb(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = h(a[2], null))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = ey(a, b),
            e = d.eventId,
            f = d.priorityId;
          h(c, null);
          var g = h(c, null);
          Bm.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    ly = { policy: !0 };
  var ny = function (a) {
    if (my(a)) return a;
    this.value = a;
  };
  ny.prototype.getUntrustedMessageValue = function () {
    return this.value;
  };
  var my = function (a) {
    return !a || db(a) !== "object" || fb(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  ny.prototype.getUntrustedMessageValue = ny.prototype.getUntrustedMessageValue;
  var oy = !1,
    py = [];
  function qy() {
    if (!oy) {
      oy = !0;
      for (var a = 0; a < py.length; a++) I(py[a]);
    }
  }
  function ry(a) {
    oy ? I(a) : py.push(a);
  }
  var sy = 0,
    ty = {},
    uy = [],
    vy = [],
    wy = !1,
    xy = !1;
  function yy(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var zy = function (a) {
      return G[ui.jb].push(a);
    },
    Ay = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return zy(a);
    },
    By = function (a, b) {
      if (!Cb(b) || b < 0) b = 0;
      var c = vi[ui.jb],
        d = 0,
        e = !1,
        f = void 0;
      f = G.setTimeout(function () {
        e || ((e = !0), a());
        f = void 0;
      }, b);
      return function () {
        var g = c ? c.subscribers : 1;
        ++d === g &&
          (f && (G.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
      };
    };
  function Cy(a, b) {
    var c = a._clear || b.overwriteModelFields;
    z(a, function (e, f) {
      e !== "_clear" && (c && Zi(e), Zi(e, f));
    });
    Ii || (Ii = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    typeof d !== "number" &&
      ((d = Mi()), (a["gtm.uniqueEventId"] = d), Zi("gtm.uniqueEventId", d));
    return Fx(a);
  }
  function Dy(a) {
    if (a == null || typeof a !== "object") return !1;
    if (a.event) return !0;
    if (Ib(a)) {
      var b = a[0];
      if (b === "config" || b === "event" || b === "js" || b === "get")
        return !0;
    }
    return !1;
  }
  function Ey() {
    var a;
    if (vy.length) a = vy.shift();
    else if (uy.length) a = uy.shift();
    else return;
    var b;
    var c = a;
    if (wy || !Dy(c.message)) b = c;
    else {
      wy = !0;
      var d = c.message["gtm.uniqueEventId"];
      typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = Mi());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        k = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      uy.unshift(k, c);
      if (Dj) {
        if (!T(85)) {
          var m = ww();
          m && vw.push(m);
        }
        vk();
      }
      b = f;
    }
    return b;
  }
  function Fy() {
    for (var a = !1, b; !xy && (b = Ey()); ) {
      xy = !0;
      delete Ti.eventModel;
      Vi();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (d == null) xy = !1;
      else {
        e.fromContainerExecution && $i();
        try {
          if (Bb(d))
            try {
              d.call(Xi);
            } catch (v) {}
          else if (Array.isArray(d)) {
            var f = d;
            if (l(f[0])) {
              var g = f[0].split("."),
                k = g.pop(),
                m = f.slice(1),
                n = Wi(g.join("."), 2);
              if (n != null)
                try {
                  n[k].apply(n, m);
                } catch (v) {}
            }
          } else {
            var p = void 0;
            if (Ib(d))
              a: {
                if (d.length && l(d[0])) {
                  var q = ky[d[0]];
                  if (q && (!e.fromContainerExecution || !ly[d[0]])) {
                    p = q(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
            else p = d;
            p && (a = Cy(p, e) || a);
          }
        } finally {
          e.fromContainerExecution && Vi(!0);
          var r = d["gtm.uniqueEventId"];
          if (typeof r === "number") {
            for (var t = ty[String(r)] || [], u = 0; u < t.length; u++)
              vy.push(Gy(t[u]));
            t.length && vy.sort(yy);
            delete ty[String(r)];
            r > sy && (sy = r);
          }
          xy = !1;
        }
      }
    }
    return !a;
  }
  function Hy() {
    if (T(69)) {
      var a = Iy();
    }
    var b = Fy();
    if (T(69)) {
    }
    try {
      var c = Vj(),
        d = G[ui.jb].hide;
      if (d && d[c] !== void 0 && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && d[f] === !0) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function Ux(a) {
    if (sy < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      ty[b] = ty[b] || [];
      ty[b].push(a);
    } else
      vy.push(Gy(a)),
        vy.sort(yy),
        I(function () {
          xy || Fy();
        });
  }
  function Gy(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Jy = function () {
      function a(f) {
        var g = {};
        if (my(f)) {
          var k = f;
          f = my(k) ? k.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = Gc(ui.jb, []),
        c = (vi[ui.jb] = vi[ui.jb] || {});
      c.pruned === !0 && O(83);
      ty = Sx().get();
      Tx();
      Ew(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      ry(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (vi.SANDBOXED_JS_SEMAPHORE > 0) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new ny(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var k = f.map(function (q) {
          return a(q);
        });
        uy.push.apply(uy, k);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (O(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = typeof m !== "boolean" || m;
        return Fy() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      uy.push.apply(uy, e);
      if (Iy()) {
        if (T(69)) {
        }
        I(Hy);
      }
    },
    Iy = function () {
      var a = !0;
      return a;
    };
  function Ky(a) {
    if (a == null || a.length === 0) return !1;
    var b = Number(a),
      c = Ob();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Ly(a) {
    return a && a.indexOf("pending:") === 0 ? Ky(a.substr(8)) : !1;
  }
  var fz = function () {};
  var gz = function () {};
  gz.prototype.toString = function () {
    return "undefined";
  };
  var hz = new gz();
  var jz = function () {
      (vi.rm = vi.rm || {})[Xj()] = function (a) {
        if (iz.hasOwnProperty(a)) return iz[a];
      };
    },
    mz = function (a, b, c) {
      if (a instanceof kz) {
        var d = a,
          e = d.resolve,
          f = b,
          g = String(Mi());
        lz[g] = [f, c];
        a = e.call(d, g);
        b = Ab;
      }
      return { Wj: a, onSuccess: b };
    },
    nz = function (a) {
      var b = a ? 0 : 1;
      return function (c) {
        O(a ? 134 : 135);
        var d = lz[c];
        if (d && typeof d[b] === "function") d[b]();
        lz[c] = void 0;
      };
    },
    kz = function (a) {
      this.valueOf = this.toString;
      this.resolve = function (b) {
        for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d] === hz ? b : a[d]);
        return c.join("");
      };
    };
  kz.prototype.toString = function () {
    return this.resolve("undefined");
  };
  var iz = {},
    lz = {};
  function oz(a, b) {
    function c(g) {
      var k = nj(g),
        m = hj(k, "protocol"),
        n = hj(k, "host", !0),
        p = hj(k, "port"),
        q = hj(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        m === void 0 ||
        (m === "http" && p === "80") ||
        (m === "https" && p === "443")
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function pz(a) {
    return qz(a) ? 1 : 0;
  }
  function qz(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = h(a, {});
        h({ arg1: c[d], any_of: void 0 }, e);
        if (pz(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return Ag(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < wg.length; g++) {
                var k = wg[g];
                if (b[k] != null) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return xg(b, c);
      case "_eq":
        return Bg(b, c);
      case "_ge":
        return Cg(b, c);
      case "_gt":
        return Eg(b, c);
      case "_lc":
        return String(b).split(",").indexOf(String(c)) >= 0;
      case "_le":
        return Dg(b, c);
      case "_lt":
        return Fg(b, c);
      case "_re":
        return zg(b, c, a.ignore_case);
      case "_sw":
        return Gg(b, c);
      case "_um":
        return oz(b, c);
    }
    return !1;
  }
  function rz() {
    var a;
    a = a === void 0 ? "" : a;
    var b, c;
    return (
      (b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a;
  }
  function sz() {
    var a = [
      ["cv", T(92) ? rz() : "59"],
      ["rv", ui.Yg],
      [
        "tc",
        xf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    ui.se && a.push(["x", ui.se]);
    Oi.j && a.push(["tag_exp", Oi.j]);
    return a;
  }
  var tz = {},
    uz = {};
  function vz() {
    var a = 0;
    return function (b) {
      switch (b) {
        case 1:
          a |= 1;
          break;
        case 2:
          a |= 2;
          break;
        case 3:
          a |= 4;
      }
      return a;
    };
  }
  function wz(a, b, c, d) {
    if (Cj) {
      var e = String(c) + b;
      tz[a] = tz[a] || [];
      tz[a].push(e);
      uz[a] = uz[a] || [];
      uz[a].push(d + b);
    }
  }
  function xz(a) {
    var b = a.eventId,
      c = a.mc,
      d = [],
      e = tz[b] || [];
    e.length && d.push(["hf", e.join(".")]);
    var f = uz[b] || [];
    f.length && d.push(["ht", f.join(".")]);
    c && (delete tz[b], delete uz[b]);
    return d;
  }
  function yz() {
    return !1;
  }
  function zz() {
    var a = {};
    return function (b, c, d) {};
  }
  function Az() {
    var a = Bz;
    return function (b, c, d) {
      var e = d && d.event;
      Cz(c);
      var f = Tb(b, "__cvt_") ? void 0 : 1,
        g = new lb();
      z(c, function (r, t) {
        var u = qd(t, void 0, f);
        u === void 0 && t !== void 0 && O(44);
        g.set(r, u);
      });
      a.j.j.D = Qf();
      var k = {
        Pj: eg(b),
        eventId: e == null ? void 0 : e.id,
        priorityId: e !== void 0 ? e.priorityId : void 0,
        we:
          e !== void 0
            ? function (r) {
                e.ic.we(r);
              }
            : void 0,
        fb: function () {
          return b;
        },
        log: function () {},
        Ll: {
          index: d == null ? void 0 : d.index,
          type: d == null ? void 0 : d.type,
          name: d == null ? void 0 : d.name,
        },
        Tm: !!dw(b, 3),
        originalEventData: e == null ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (k.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (yz()) {
        var m = zz(),
          n,
          p;
        k.Ta = {
          bi: [],
          xe: {},
          Ab: function (r, t, u) {
            t === 1 && (n = r);
            t === 7 && (p = u);
            m(r, t, u);
          },
          Xf: oh(),
        };
        k.log = function (r) {
          var t = Ma.apply(1, arguments);
          n && m(n, 4, { level: r, source: p, message: t });
        };
      }
      var q = Re(a, k, [b, g]);
      a.j.j.D = void 0;
      q instanceof Qa && q.type === "return" && (q = q.data);
      return J(q, void 0, f);
    };
  }
  function Cz(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Bb(b) &&
      (a.gtmOnSuccess = function () {
        I(b);
      });
    Bb(c) &&
      (a.gtmOnFailure = function () {
        I(c);
      });
  }
  function Dz(a, b) {
    var c = this;
  }
  Dz.T = "addConsentListener";
  var Ez = !1;
  function Fz(a) {
    for (var b = 0; b < a.length; ++b)
      if (Ez)
        try {
          a[b]();
        } catch (c) {
          O(77);
        }
      else a[b]();
  }
  function Gz(a, b, c) {
    var d = this,
      e;
    return e;
  }
  Gz.J = "internal.addDataLayerEventListener";
  function Hz(a, b, c) {}
  Hz.T = "addDocumentEventListener";
  function Iz(a, b, c, d) {}
  Iz.T = "addElementEventListener";
  function Jz(a) {
    return a.F.j;
  }
  function Kz(a) {}
  Kz.T = "addEventCallback";
  var Lz = function (a) {
      return typeof a === "string" ? a : String(Mi());
    },
    Oz = function (a, b) {
      Mz(a, "init", !1) || (Nz(a, "init", !0), b());
    },
    Mz = function (a, b, c) {
      var d = Pz(a);
      return Pb(d, b, c);
    },
    Qz = function (a, b, c, d) {
      var e = Pz(a),
        f = Pb(e, b, d);
      e[b] = c(f);
    },
    Nz = function (a, b, c) {
      Pz(a)[b] = c;
    },
    Pz = function (a) {
      vi.hasOwnProperty("autoEventsSettings") || (vi.autoEventsSettings = {});
      var b = vi.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Rz = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": $c(a, "className"),
        "gtm.elementId": a["for"] || Rc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || $c(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        $c(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    };
  var Tz = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var g = a.elements[e];
        if (Sz(g)) {
          if (g.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    },
    Uz = function (a) {
      if (a.form) {
        var b;
        return ((b = a.form) == null ? 0 : b.tagName)
          ? a.form
          : H.getElementById(a.form);
      }
      return Uc(a, ["form"], 100);
    },
    Sz = function (a) {
      var b = a.tagName.toLowerCase();
      return Vz.indexOf(b) < 0 ||
        (b === "input" && Wz.indexOf(a.type.toLowerCase()) >= 0)
        ? !1
        : !0;
    },
    Vz = ["input", "select", "textarea"],
    Wz = ["button", "hidden", "image", "reset", "submit"];
  function $z(a) {}
  $z.J = "internal.addFormAbandonmentListener";
  function aA(a, b, c, d) {}
  aA.J = "internal.addFormData";
  var bA = {},
    cA = [],
    dA = {},
    eA = 0,
    fA = 0;
  function mA(a, b) {}
  mA.J = "internal.addFormInteractionListener";
  function tA(a, b) {}
  tA.J = "internal.addFormSubmitListener";
  function yA(a) {}
  yA.J = "internal.addGaSendListener";
  function zA(a) {
    if (!a) return {};
    var b = a.Ll;
    return Gw(b.type, b.index, b.name);
  }
  function AA(a) {
    return a ? { originatingEntity: zA(a) } : {};
  }
  var CA = function (a, b, c) {
      BA().updateZone(a, b, c);
    },
    EA = function (a, b, c, d, e, f) {
      var g = BA();
      c = c && Sb(c, DA);
      for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, Vj(), k)) {
          var p = n,
            q = a,
            r = d,
            t = e,
            u = f;
          if (Tb(p, "GTM-"))
            rw(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var v = Nx("js", Nb());
            rw(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: t, inheritParentConfig: u };
            T(97) || Rx(v, q, w);
            Rx(Ox(p, r), q, w);
          }
        }
      }
      return k;
    },
    BA = function () {
      var a = vi.zones;
      a || (a = vi.zones = new FA());
      return a;
    },
    GA = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    DA = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    FA = function () {
      this.j = {};
      this.D = {};
      this.H = 0;
    };
  ba = FA.prototype;
  ba.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.Ph], b)) return !1;
    for (var e = 0; e < c.bf.length; e++) if (this.D[c.bf[e]].ud(b)) return !0;
    return !1;
  };
  ba.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.bf.length; f++) {
      var g = this.D[c.bf[f]];
      g.ud(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var k = this.getIsAllowedFn([c.Ph], b);
    return function (m, n) {
      n = n || [];
      if (!k(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].km(m, n)) return !0;
      return !1;
    };
  };
  ba.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.j[a[b]];
  };
  ba.createZone = function (a, b) {
    var c = String(++this.H);
    this.D[c] = new HA(a, b);
    return c;
  };
  ba.updateZone = function (a, b, c) {
    var d = this.D[a];
    d && d.H(b, c);
  };
  ba.registerChild = function (a, b, c) {
    var d = this.j[a];
    if ((!d && vi[a]) || (!d && gk(a)) || (d && d.Ph !== b)) return !1;
    if (d) return d.bf.push(c), !1;
    this.j[a] = { Ph: b, bf: [c] };
    return !0;
  };
  var HA = function (a, b) {
    this.D = null;
    this.j = [{ eventId: a, ud: !0 }];
    if (b) {
      this.D = {};
      for (var c = 0; c < b.length; c++) this.D[b[c]] = !0;
    }
  };
  HA.prototype.H = function (a, b) {
    var c = this.j[this.j.length - 1];
    a <= c.eventId || (c.ud !== b && this.j.push({ eventId: a, ud: b }));
  };
  HA.prototype.ud = function (a) {
    for (var b = this.j.length - 1; b >= 0; b--)
      if (this.j[b].eventId <= a) return this.j[b].ud;
    return !1;
  };
  HA.prototype.km = function (a, b) {
    b = b || [];
    if (!this.D || GA[a] || this.D[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.D[b[c]]) return !0;
    return !1;
  };
  function IA(a) {
    var b = vi.zones;
    return b
      ? b.getIsAllowedFn(Qj(), a)
      : function () {
          return !0;
        };
  }
  function JA() {
    gw(Xj(), function (a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = vi.zones;
      return c ? c.isActive(Qj(), b) : !0;
    });
    ew(Xj(), function (a) {
      var b, c;
      b = a.entityId;
      c = a.securityGroups;
      return IA(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
    });
  }
  var KA = function (a, b) {
    this.tagId = a;
    this.ze = b;
  };
  function LA(a, b) {
    var c = this,
      d;
    var e = function (u) {
      ew(
        u,
        function (v) {
          for (
            var w = fw().getExternalRestrictions(0, Xj()),
              x = oa(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var B = y.value;
            if (!B(v)) return !1;
          }
          return !0;
        },
        !0
      );
      gw(
        u,
        function (v) {
          for (
            var w = fw().getExternalRestrictions(1, Xj()),
              x = oa(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var B = y.value;
            if (!B(v)) return !1;
          }
          return !0;
        },
        !0
      );
      k && k(new KA(a, u));
    };
    K(this.getName(), ["tagId:!string", "options:?PixieMap"], arguments);
    var f = J(b, this.F, 1) || {},
      g = f.firstPartyUrl,
      k = f.onLoad,
      m = f.loadByDestination === !0,
      n = f.isGtmEvent === !0,
      p = f.siloed === !0;
    Fz([
      function () {
        return N(c, "load_google_tags", a, g);
      },
    ]);
    if (m) {
      if (hk(a)) return;
    } else if (gk(a)) return;
    var q = 6,
      r = Jz(this);
    n && (q = 7);
    r.fb() === "__zone" && (q = 1);
    var t = { source: q, fromContainerExecution: !0, siloed: p };
    m ? uw(a, g, t, e) : rw(a, g, !Tb(a, "GTM-"), t, e);
    k &&
      r.fb() === "__zone" &&
      EA(Number.MIN_SAFE_INTEGER, [a], null, {}, zA(Jz(this)));
    d = p ? Sj(a) : a;
    return d;
  }
  LA.J = "internal.loadGoogleTag";
  function MA(a) {
    return new id("", function (b) {
      var c = this.evaluate(b);
      if (c instanceof id)
        return new id("", function () {
          var d = Ma.apply(0, arguments),
            e = this,
            f = h(Jz(this), null);
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return e.evaluate(m);
            }),
            k = Wa(this.F);
          k.j = f;
          return c.ib.apply(c, [k].concat(qa(g)));
        });
    });
  }
  function NA(a, b, c) {
    var d = this;
  }
  NA.J = "internal.addGoogleTagRestriction";
  var OA = {},
    PA = [];
  function WA(a, b) {}
  WA.J = "internal.addHistoryChangeListener";
  function XA(a, b, c) {}
  XA.T = "addWindowEventListener";
  function YA(a, b) {
    return !0;
  }
  YA.T = "aliasInWindow";
  function ZA(a, b, c) {}
  ZA.J = "internal.appendRemoteConfigParameter";
  function $A(a) {
    var b;
    K(this.getName(), ["path:!string"], [a]);
    N(this, "access_globals", "execute", a);
    for (
      var c = a.split("."), d = G, e = d[c[0]], f = 1;
      e && f < c.length;
      f++
    )
      if (((d = e), (e = e[c[f]]), d === G || d === H)) return;
    if (db(e) !== "function") return;
    for (var g = [], k = 1; k < arguments.length; k++)
      g.push(J(arguments[k], this.F, 2));
    var m = (0, this.F.H)(e, d, g);
    b = qd(m, this.F, 2);
    b === void 0 && m !== void 0 && O(45);
    return b;
  }
  $A.T = "callInWindow";
  function aB(a) {}
  aB.T = "callLater";
  function bB(a) {}
  bB.J = "callOnDomReady";
  function cB(a) {}
  cB.J = "callOnWindowLoad";
  function dB(a, b) {
    var c;
    return c;
  }
  dB.J = "internal.computeGtmParameter";
  function eB(a) {
    var b;
    return b;
  }
  eB.J = "internal.copyFromCrossContainerData";
  function fB(a, b) {
    var c;
    var d = qd(c, this.F, Tb(Jz(this).fb(), "__cvt_") ? 2 : 1);
    d === void 0 && c !== void 0 && O(45);
    return d;
  }
  fB.T = "copyFromDataLayer";
  function gB(a) {
    var b = void 0;
    return b;
  }
  gB.J = "internal.copyFromDataLayerCache";
  function hB(a) {
    var b;
    return b;
  }
  hB.T = "copyFromWindow";
  function iB(a) {
    var b = void 0;
    return qd(b, this.F, 1);
  }
  iB.J = "internal.copyKeyFromWindow";
  var jB = function (a, b, c) {
    this.eventName = b;
    this.m = c;
    this.o = {};
    this.isAborted = !1;
    this.target = a;
    this.metadata = h(c.eventMetadata || {}, {});
  };
  jB.prototype.copyToHitData = function (a, b, c) {
    var d = U(this.m, a);
    d === void 0 && (d = b);
    if (d !== void 0 && c !== void 0 && l(d) && T(63))
      try {
        d = c(d);
      } catch (e) {}
    d !== void 0 && (this.o[a] = d);
  };
  var et = function (a, b, c) {
    var d = hs(a.target.ia);
    return d && d[b] !== void 0 ? d[b] : c;
  };
  function kB(a, b) {
    var c;
    return c;
  }
  kB.J = "internal.copyPreHit";
  function lB(a, b) {
    var c = null;
    K(this.getName(), ["functionPath:!string", "arrayPath:!string"], arguments);
    N(this, "access_globals", "readwrite", a);
    N(this, "access_globals", "readwrite", b);
    var d = [G, H],
      e = a.split("."),
      f = Vb(e, d),
      g = e[e.length - 1];
    if (f === void 0) throw Error("Path " + a + " does not exist.");
    var k = f[g];
    if (k && !Bb(k)) return null;
    if (k) return qd(k, this.F, 2);
    var m;
    k = function () {
      if (!Bb(m.push))
        throw Error("Object at " + b + " in window is not an array.");
      m.push.call(m, arguments);
    };
    f[g] = k;
    var n = b.split("."),
      p = Vb(n, d),
      q = n[n.length - 1];
    if (p === void 0) throw Error("Path " + n + " does not exist.");
    m = p[q];
    m === void 0 && ((m = []), (p[q] = m));
    c = function () {
      k.apply(k, Array.prototype.slice.call(arguments, 0));
    };
    return qd(c, this.F, 2);
  }
  lB.T = "createArgumentsQueue";
  function mB(a) {
    return qd(
      function (c) {
        var d = Qw();
        if (typeof c === "function")
          d(function () {
            c(function (f, g, k) {
              var m = Qw(),
                n = m && m.getByName && m.getByName(f);
              return Mm(G.gaplugins.Linker, n).decorate(g, k);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c);
        } else if (c === "isLoaded") return !!d.loaded;
      },
      this.F,
      1
    );
  }
  mB.J = "internal.createGaCommandQueue";
  function nB(a) {
    K(this.getName(), ["path:!string"], arguments);
    N(this, "access_globals", "readwrite", a);
    var b = a.split("."),
      c = Vb(b, [G, H]),
      d = b[b.length - 1];
    if (!c) throw Error("Path " + a + " does not exist.");
    var e = c[d];
    e === void 0 && ((e = []), (c[d] = e));
    return qd(
      function () {
        if (!Bb(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.F,
      Tb(Jz(this).fb(), "__cvt_") ? 2 : 1
    );
  }
  nB.T = "createQueue";
  function oB(a, b) {
    var c = null;
    return c;
  }
  oB.J = "internal.createRegex";
  function pB() {
    var a = {};
    return a;
  }
  function qB(a) {}
  qB.J = "internal.declareConsentState";
  function rB(a) {
    var b = "";
    return b;
  }
  rB.J = "internal.decodeUrlHtmlEntities";
  function sB(a, b, c) {
    var d;
    return d;
  }
  sB.J = "internal.decorateUrlWithGaCookies";
  function tB() {}
  tB.J = "internal.deferCustomEvents";
  function uB(a) {
    var b;
    N(this, "detect_user_provided_data", "auto");
    var c = J(a) || {},
      d = Hs({
        vd: !!c.includeSelector,
        wd: !!c.includeVisibility,
        De: c.excludeElementSelectors,
        zb: c.fieldFilters,
        Zf: !!c.selectMultipleElements,
      });
    b = new lb();
    var e = new ib();
    b.set("elements", e);
    for (var f = d.elements, g = 0; g < f.length; g++) e.push(vB(f[g]));
    d.Rh !== void 0 && b.set("preferredEmailElement", vB(d.Rh));
    b.set("status", d.status);
    return b;
  }
  var vB = function (a) {
    var b = new lb();
    b.set("userData", a.Z);
    b.set("tagName", a.tagName);
    a.querySelector !== void 0 && b.set("querySelector", a.querySelector);
    a.isVisible !== void 0 && b.set("isVisible", a.isVisible);
    if (T(25)) {
    } else
      switch (a.type) {
        case Fs.nc:
          b.set("type", "email");
      }
    return b;
  };
  uB.J = "internal.detectUserProvidedData";
  var wB = function (a) {
      var b = Uc(a, ["button", "input"], 50);
      if (!b) return null;
      var c = String(b.tagName).toLowerCase();
      if (c === "button") return b;
      if (c === "input") {
        var d = Rc(b, "type");
        if (
          d === "button" ||
          d === "submit" ||
          d === "image" ||
          d === "file" ||
          d === "reset"
        )
          return b;
      }
      return null;
    },
    xB = function (a, b, c) {
      var d = c.target;
      if (d) {
        var e = Mz(a, "individualElementIds", []);
        if (e.length > 0) {
          var f = Rz(d, b, e);
          zy(f);
        }
        var g = !1,
          k = Mz(a, "commonButtonIds", []);
        if (k.length > 0) {
          var m = wB(d);
          if (m) {
            var n = Rz(m, b, k);
            zy(n);
            g = !0;
          }
        }
        var p = Mz(a, "selectorToTriggerIds", {}),
          q;
        for (q in p)
          if (p.hasOwnProperty(q)) {
            var r = g
              ? p[q].filter(function (v) {
                  return k.indexOf(v) === -1;
                })
              : p[q];
            if (r.length !== 0) {
              var t = zh(d, q);
              if (t) {
                var u = Rz(t, b, r);
                zy(u);
              }
            }
          }
      }
    };
  function yB(a, b) {
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    var c = a ? J(a) : {},
      d = Kb(c.matchCommonButtons),
      e = !!c.cssSelector;
    b = Lz(b);
    N(this, "detect_click_events", c.matchCommonButtons, c.cssSelector);
    var f = c.useV2EventName ? "gtm.click-v2" : "gtm.click",
      g = c.useV2EventName ? "ecl" : "cl",
      k = function (n) {
        n.push(b);
        return n;
      };
    if (e || d) {
      if ((d && Qz(g, "commonButtonIds", k, []), e)) {
        var m = Mb(String(c.cssSelector));
        Qz(
          g,
          "selectorToTriggerIds",
          function (n) {
            n.hasOwnProperty(m) || (n[m] = []);
            k(n[m]);
            return n;
          },
          {}
        );
      }
    } else Qz(g, "individualElementIds", k, []);
    Oz(g, function () {
      Pc(
        H,
        "click",
        function (n) {
          xB(g, f, n);
        },
        !0
      );
    });
    return b;
  }
  yB.J = "internal.enableAutoEventOnClick";
  function GB(a, b) {
    return b;
  }
  GB.J = "internal.enableAutoEventOnElementVisibility";
  function HB() {}
  HB.J = "internal.enableAutoEventOnError";
  var IB = {},
    JB = [],
    KB = {},
    LB = 0,
    MB = 0;
  function SB(a, b) {
    var c = this;
    return b;
  }
  SB.J = "internal.enableAutoEventOnFormInteraction";
  var TB = function (a, b, c, d, e) {
      var f = Mz("fsl", c ? "nv.mwt" : "mwt", 0),
        g;
      g = c ? Mz("fsl", "nv.ids", []) : Mz("fsl", "ids", []);
      if (!g.length) return !0;
      var k = Rz(a, "gtm.formSubmit", g),
        m = a.action;
      m && m.tagName && (m = a.cloneNode(!1).action);
      O(121);
      if (m === "https://www.facebook.com/tr/") return O(122), !0;
      k["gtm.elementUrl"] = m;
      k["gtm.formCanceled"] = c;
      a.getAttribute("name") != null &&
        (k["gtm.interactedFormName"] = a.getAttribute("name"));
      e &&
        ((k["gtm.formSubmitElement"] = e),
        (k["gtm.formSubmitElementText"] = e.value));
      if (d && f) {
        if (!Ay(k, By(b, f), f)) return !1;
      } else Ay(k, function () {}, f || 2e3);
      return !0;
    },
    UB = function () {
      var a = [],
        b = function (c) {
          return Eb(a, function (d) {
            return d.form === c;
          });
        };
      return {
        store: function (c, d) {
          var e = b(c);
          e ? (e.button = d) : a.push({ form: c, button: d });
        },
        get: function (c) {
          var d = b(c);
          if (d) return d.button;
        },
      };
    },
    VB = function (a) {
      var b = a.target;
      return b && b !== "_self" && b !== "_parent" && b !== "_top" ? !1 : !0;
    },
    WB = function () {
      var a = UB(),
        b = HTMLFormElement.prototype.submit;
      Pc(
        H,
        "click",
        function (c) {
          var d = c.target;
          if (d) {
            var e = Uc(d, ["button", "input"], 100);
            if (
              e &&
              (e.type === "submit" || e.type === "image") &&
              e.name &&
              Rc(e, "value")
            ) {
              var f = Uz(e);
              f && a.store(f, e);
            }
          }
        },
        !1
      );
      Pc(
        H,
        "submit",
        function (c) {
          var d = c.target;
          if (!d) return c.returnValue;
          var e = c.defaultPrevented || c.returnValue === !1,
            f = VB(d) && !e,
            g = a.get(d),
            k = !0;
          if (
            TB(
              d,
              function () {
                if (k) {
                  var m = null,
                    n = {};
                  g &&
                    ((m = H.createElement("input")),
                    (m.type = "hidden"),
                    (m.name = g.name),
                    (m.value = g.value),
                    d.appendChild(m),
                    g.hasAttribute("formaction") &&
                      ((n.action = d.getAttribute("action")),
                      Ac(d, rc(g.getAttribute("formaction")))),
                    g.hasAttribute("formenctype") &&
                      ((n.enctype = d.getAttribute("enctype")),
                      d.setAttribute("enctype", g.getAttribute("formenctype"))),
                    g.hasAttribute("formmethod") &&
                      ((n.method = d.getAttribute("method")),
                      d.setAttribute("method", g.getAttribute("formmethod"))),
                    g.hasAttribute("formvalidate") &&
                      ((n.validate = d.getAttribute("validate")),
                      d.setAttribute(
                        "validate",
                        g.getAttribute("formvalidate")
                      )),
                    g.hasAttribute("formtarget") &&
                      ((n.target = d.getAttribute("target")),
                      d.setAttribute("target", g.getAttribute("formtarget"))));
                  b.call(d);
                  m &&
                    (d.removeChild(m),
                    n.hasOwnProperty("action") && Ac(d, n.action),
                    n.hasOwnProperty("enctype") &&
                      d.setAttribute("enctype", n.enctype),
                    n.hasOwnProperty("method") &&
                      d.setAttribute("method", n.method),
                    n.hasOwnProperty("validate") &&
                      d.setAttribute("validate", n.validate),
                    n.hasOwnProperty("target") &&
                      d.setAttribute("target", n.target));
                }
              },
              e,
              f,
              g
            )
          )
            k = !1;
          else
            return (
              e ||
                (c.preventDefault && c.preventDefault(), (c.returnValue = !1)),
              !1
            );
          return c.returnValue;
        },
        !1
      );
      HTMLFormElement.prototype.submit = function () {
        var c = this,
          d = !0;
        TB(
          c,
          function () {
            d && b.call(c);
          },
          !1,
          VB(c)
        ) && (b.call(c), (d = !1));
      };
    };
  function XB(a, b) {
    var c = this;
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    var d = a && a.get("waitForTags");
    Fz([
      function () {
        N(c, "detect_form_submit_events", { waitForTags: !!d });
      },
    ]);
    var e = a && a.get("checkValidation");
    b = Lz(b);
    if (d) {
      var f = Number(a.get("waitForTagsTimeout"));
      (f > 0 && isFinite(f)) || (f = 2e3);
      var g = function (m) {
        return Math.max(f, m);
      };
      Qz("fsl", "mwt", g, 0);
      e || Qz("fsl", "nv.mwt", g, 0);
    }
    var k = function (m) {
      m.push(b);
      return m;
    };
    Qz("fsl", "ids", k, []);
    e || Qz("fsl", "nv.ids", k, []);
    Mz("fsl", "init", !1) || (WB(), Nz("fsl", "init", !0));
    return b;
  }
  XB.J = "internal.enableAutoEventOnFormSubmit";
  function bC() {
    var a = this;
  }
  bC.J = "internal.enableAutoEventOnGaSend";
  var cC = {},
    dC = [];
  function kC(a, b) {
    var c = this;
    return b;
  }
  kC.J = "internal.enableAutoEventOnHistoryChange";
  var lC = ["http://", "https://", "javascript:", "file://"];
  function pC(a, b) {
    var c = this;
    return b;
  }
  pC.J = "internal.enableAutoEventOnLinkClick";
  var qC, rC;
  function CC(a, b) {
    var c = this;
    return b;
  }
  CC.J = "internal.enableAutoEventOnScroll";
  function DC(a) {
    return function () {
      if (a.Jh && a.Lh >= a.Jh) a.Vf && G.clearInterval(a.Vf);
      else {
        a.Lh++;
        var b = Ob();
        zy({
          event: a.eventName,
          "gtm.timerId": a.Vf,
          "gtm.timerEventNumber": a.Lh,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.Jh,
          "gtm.timerStartTime": a.rk,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.rk,
          "gtm.triggers": a.pn,
        });
      }
    };
  }
  function EC(a, b) {
    return b;
  }
  EC.J = "internal.enableAutoEventOnTimer";
  var uc = ka(["data-gtm-yt-inspected-"]),
    GC = ["www.youtube.com", "www.youtube-nocookie.com"],
    HC,
    IC = !1;
  function SC(a, b) {
    var c = this;
    return b;
  }
  SC.J = "internal.enableAutoEventOnYouTubeActivity";
  function TC(a, b) {
    K(
      this.getName(),
      ["booleanExpression:!string", "context:?PixieMap"],
      arguments
    );
    var c = b ? J(b) : {},
      d = a,
      e = !1;
    return e;
  }
  TC.J = "internal.evaluateBooleanExpression";
  var UC;
  function VC(a) {
    var b = !1;
    return b;
  }
  VC.J = "internal.evaluateMatchingRules";
  var WC = function (a) {
      switch (a) {
        case "page_view":
          return [Er, Dr, vr, Nu, ju, vu, Gu, Hu, zu];
        case "call_conversion":
          return [Dr, Nu];
        case "conversion":
          return [
            Ar,
            Dr,
            nu,
            eu,
            qu,
            fu,
            gu,
            hu,
            iu,
            ju,
            vu,
            wu,
            yu,
            Au,
            Ku,
            Lu,
            xu,
            Gu,
            Hu,
            ru,
            Bu,
            Cu,
            Eu,
            ou,
            su,
            Iu,
            Er,
            Br,
            tu,
            Fu,
            ku,
            zu,
            pu,
            Mu,
            uu,
            Du,
            mu,
            lu,
            Ju,
          ];
        case "landing_page":
          return [
            Ar,
            Dr,
            nu,
            eu,
            vu,
            Cr,
            Gu,
            Hu,
            ru,
            ou,
            Br,
            Er,
            tu,
            ku,
            zu,
            pu,
            Mu,
            Ju,
          ];
        case "remarketing":
          return [
            Ar,
            Dr,
            nu,
            eu,
            qu,
            fu,
            gu,
            hu,
            iu,
            ju,
            vu,
            wu,
            Au,
            xu,
            Gu,
            Hu,
            ru,
            Bu,
            ou,
            Br,
            Er,
            tu,
            Fu,
            ku,
            zu,
            pu,
            Mu,
            mu,
            Ju,
          ];
        case "user_data_lead":
          return [
            Ar,
            Dr,
            nu,
            eu,
            fu,
            ju,
            vu,
            xu,
            Gu,
            Hu,
            Cr,
            ru,
            Eu,
            ou,
            Br,
            Er,
            tu,
            Fu,
            ku,
            zu,
            pu,
            Mu,
            Ju,
          ];
        case "user_data_web":
          return [
            Ar,
            Dr,
            nu,
            eu,
            fu,
            ju,
            vu,
            xu,
            Gu,
            Hu,
            Cr,
            ru,
            Eu,
            ou,
            Br,
            Er,
            tu,
            Fu,
            ku,
            zu,
            pu,
            Mu,
            Ju,
          ];
        default:
          return [
            Ar,
            Dr,
            nu,
            eu,
            qu,
            fu,
            gu,
            hu,
            iu,
            ju,
            vu,
            wu,
            yu,
            Au,
            Ku,
            Lu,
            xu,
            Gu,
            Hu,
            ru,
            Bu,
            Cu,
            Eu,
            ou,
            su,
            Iu,
            Br,
            Er,
            tu,
            Fu,
            ku,
            zu,
            pu,
            Mu,
            uu,
            Du,
            mu,
            lu,
            Ju,
          ];
      }
    },
    XC = function (a) {
      for (
        var b = WC(a.metadata.hit_type), c = 0;
        c < b.length && (b[c](a), !a.isAborted);
        c++
      );
    },
    YC = function (a, b, c, d) {
      var e = new jB(b, c, d);
      e.metadata.hit_type = a;
      e.metadata.speculative = !0;
      e.metadata.event_start_timestamp_ms = Ob();
      e.metadata.speculative_in_message = d.eventMetadata.speculative;
      return e;
    },
    ZC = function (a, b, c, d) {
      function e(t, u) {
        for (var v = oa(k), w = v.next(); !w.done; w = v.next()) {
          var x = w.value;
          x.isAborted = !1;
          x.metadata.speculative = !0;
          x.metadata.consent_updated = !0;
          x.metadata.event_start_timestamp_ms = Ob();
          x.metadata.consent_event_id = t;
          x.metadata.consent_priority_id = u;
        }
      }
      function f(t) {
        for (var u = {}, v = 0; v < k.length; u = { Sa: void 0 }, v++)
          if (((u.Sa = k[v]), !t || t(u.Sa.metadata.hit_type)))
            if (
              !u.Sa.metadata.consent_updated ||
              u.Sa.metadata.hit_type === "page_view" ||
              W(q)
            )
              XC(k[v]),
                u.Sa.metadata.speculative ||
                  u.Sa.isAborted ||
                  (cw(u.Sa),
                  u.Sa.metadata.hit_type === "page_view" &&
                    T(22) &&
                    u.Sa.o[P.g.wf] === void 0 &&
                    r === void 0 &&
                    (r = uo(
                      oo.ue,
                      (function (w) {
                        return function () {
                          W(P.g.P) &&
                            ((w.Sa.metadata.user_id_updated = !0),
                            (w.Sa.metadata.consent_updated = !1),
                            (w.Sa.o[P.g.Tb] = void 0),
                            f(function (x) {
                              return x === "page_view";
                            }),
                            (w.Sa.metadata.user_id_updated = !1),
                            vo(oo.ue, r),
                            (r = void 0));
                        };
                      })(u)
                    )));
      }
      var g =
        d.isGtmEvent && a === ""
          ? { id: "", prefix: "", ia: "", ma: [] }
          : zl(a, d.isGtmEvent);
      if (g) {
        var k = [];
        if (d.eventMetadata.hit_type_override) {
          var m = d.eventMetadata.hit_type_override;
          Array.isArray(m) || (m = [m]);
          for (var n = 0; n < m.length; n++) {
            var p = YC(m[n], g, b, d);
            p.metadata.speculative = !1;
            k.push(p);
          }
        } else
          b === P.g.ba &&
            (T(18)
              ? k.push(YC("page_view", g, b, d))
              : k.push(YC("landing_page", g, b, d))),
            k.push(YC("conversion", g, b, d)),
            k.push(YC("user_data_lead", g, b, d)),
            k.push(YC("user_data_web", g, b, d)),
            k.push(YC("remarketing", g, b, d));
        var q = [P.g.R, P.g.P],
          r = void 0;
        sl(function () {
          f();
          T(23) &&
            (W([P.g.ya]) ||
              rl(
                function (t) {
                  e(t.consentEventId, t.consentPriorityId);
                  f(function (u) {
                    return u === "remarketing";
                  });
                },
                [P.g.ya]
              ));
          W(q) ||
            rl(function (t) {
              e(t.consentEventId, t.consentPriorityId);
              f();
            }, q);
        }, q);
      }
    };
  function CD() {
    return On(7) && On(9) && On(10);
  }
  function xE(a, b, c, d) {}
  xE.J = "internal.executeEventProcessor";
  function yE(a) {
    var b;
    return qd(b, this.F, 1);
  }
  yE.J = "internal.executeJavascriptString";
  function zE(a) {
    var b;
    return b;
  }
  var AE = null;
  function BE() {
    var a = new lb();
    return a;
  }
  BE.T = "getContainerVersion";
  function CE(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  CE.T = "getCookieValues";
  function DE() {
    return bl();
  }
  DE.J = "internal.getCountryCode";
  function EE() {
    var a = [];
    return qd(a);
  }
  EE.J = "internal.getDestinationIds";
  function FE(a, b) {
    var c = null;
    return c;
  }
  FE.J = "internal.getElementAttribute";
  function GE(a) {
    var b = null;
    return b;
  }
  GE.J = "internal.getElementById";
  function HE(a) {
    var b = "";
    return b;
  }
  HE.J = "internal.getElementInnerText";
  function IE(a, b) {
    var c = null;
    return c;
  }
  IE.J = "internal.getElementProperty";
  function JE(a) {
    var b;
    return b;
  }
  JE.J = "internal.getElementValue";
  function KE(a) {
    var b = 0;
    return b;
  }
  KE.J = "internal.getElementVisibilityRatio";
  function LE(a) {
    var b = null;
    return b;
  }
  LE.J = "internal.getElementsByCssSelector";
  function ME(a) {
    var b;
    K(this.getName(), ["keyPath:!string"], arguments);
    N(this, "read_event_data", a);
    var c;
    a: {
      var d = a,
        e = Jz(this).originalEventData;
      if (e) {
        for (
          var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0;
          q < p.length;
          q++
        ) {
          for (var r = p[q].split("\\."), t = 0; t < r.length; t++) {
            for (var u = r[t].split("."), v = 0; v < u.length; v++)
              n.push(u[v]), v !== u.length - 1 && n.push(m);
            t !== r.length - 1 && n.push(k);
          }
          q !== p.length - 1 && n.push(g);
        }
        for (
          var w = [], x = "", y = oa(n), B = y.next();
          !B.done;
          B = y.next()
        ) {
          var A = B.value;
          A === m
            ? (w.push(x), (x = ""))
            : (x = A === g ? x + "\\" : A === k ? x + "." : x + A);
        }
        x && w.push(x);
        for (var C = oa(w), E = C.next(); !E.done; E = C.next()) {
          if (f == null) {
            c = void 0;
            break a;
          }
          f = f[E.value];
        }
        c = f;
      } else c = void 0;
    }
    b = qd(c, this.F, 1);
    return b;
  }
  ME.J = "internal.getEventData";
  var NE = {};
  NE.enableAWFledge = T(26);
  NE.enableAdsConversionValidation = T(14);
  NE.enableAutoPiiOnPhoneAndAddress = T(25);
  NE.enableCachedEcommerceData = T(32);
  NE.enableCcdPreAutoPiiDetection = T(33);
  NE.enableCloudRecommentationsErrorLogging = T(34);
  NE.enableCloudRecommentationsSchemaIngestion = T(35);
  NE.enableCloudRetailInjectPurchaseMetadata = T(37);
  NE.enableCloudRetailLogging = T(36);
  NE.enableCloudRetailPageCategories = T(38);
  NE.enableConsentDisclosureActivity = T(39);
  NE.enableConversionMarkerPageViewRename = T(41);
  NE.enableDCFledge = T(45);
  NE.enableDecodeUri = T(63);
  NE.enableDeferAllEnhancedMeasurement = T(46);
  NE.enableDmaBlockDisclosure = T(49);
  NE.enableEuidAutoMode = T(54);
  NE.enableFormSkipValidation = T(59);
  NE.enableUrlDecodeEventUsage = T(91);
  NE.enableZoneConfigInChildContainers = T(93);
  NE.useEnableAutoEventOnFormApis = T(102);
  NE.autoPiiEligible = gl();
  function OE() {
    return qd(NE);
  }
  OE.J = "internal.getFlags";
  function PE() {
    return new nd(hz);
  }
  PE.J = "internal.getHtmlId";
  function QE(a, b) {
    var c;
    return c;
  }
  QE.J = "internal.getProductSettingsParameter";
  function RE(a, b) {
    var c;
    return c;
  }
  RE.T = "getQueryParameters";
  function SE(a, b) {
    var c;
    return c;
  }
  SE.T = "getReferrerQueryParameters";
  function TE(a) {
    var b = "";
    return b;
  }
  TE.T = "getReferrerUrl";
  function UE() {
    return cl();
  }
  UE.J = "internal.getRegionCode";
  function VE(a, b) {
    var c;
    return c;
  }
  VE.J = "internal.getRemoteConfigParameter";
  function WE(a) {
    var b = "";
    return b;
  }
  WE.T = "getUrl";
  function XE() {
    N(this, "get_user_agent");
    return Cc.userAgent;
  }
  XE.J = "internal.getUserAgent";
  function eF() {
    return (G.gaGlobal = G.gaGlobal || {});
  }
  function fF() {
    var a = eF();
    a.hid = a.hid || Fb();
    return a.hid;
  }
  function gF(a, b) {
    var c = eF();
    if (c.vid === void 0 || (b && !c.from_cookie))
      (c.vid = a), (c.from_cookie = b);
  }
  function CF(a) {
    var b = T(60) && Qi();
    if (ht(a) || b) a.o[P.g.gj] = cl() || bl();
  }
  var SF = function (a) {
      this.D = a;
      this.H = "";
      this.j = this.D;
    },
    TF = function (a, b) {
      a.j = b;
      return a;
    },
    UF = function (a, b) {
      a.K = b;
      return a;
    },
    WF = function (a, b) {
      b = a.H + b;
      for (var c = b.indexOf("\n\n"); c !== -1; ) {
        var d = a,
          e;
        a: {
          var f = oa(b.substring(0, c).split("\n")),
            g = f.next().value,
            k = f.next().value;
          if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0)
            try {
              e = JSON.parse(k.substring(k.indexOf(":") + 1));
              break a;
            } catch (x) {}
          e = void 0;
        }
        var m = d,
          n = e;
        if (n) {
          VF(n.send_pixel, n.options, m.D);
          VF(n.send_beacon, void 0, m.j);
          var p = n.create_iframe,
            q = n.options,
            r = m.K;
          if (p && r) {
            var t = p || [];
            if (Array.isArray(t))
              for (
                var u = fb(q) ? q : {}, v = oa(t), w = v.next();
                !w.done;
                w = v.next()
              )
                r(w.value, u);
          }
        }
        b = b.substring(c + 2);
        c = b.indexOf("\n\n");
      }
      a.H = b;
    };
  function XF(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  function VF(a, b, c) {
    if (a) {
      var d = a || [];
      if (Array.isArray(d))
        for (
          var e = fb(b) ? b : {}, f = oa(d), g = f.next();
          !g.done;
          g = f.next()
        )
          c(g.value, e);
    }
  }
  var IG = window,
    JG = document,
    KG = function (a) {
      var b = IG._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        JG.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && IG["ga-disable-" + a] === !0)
      )
        return !0;
      try {
        var c = IG.external;
        if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0;
      } catch (p) {}
      for (
        var d = [], e = String(JG.cookie).split(";"), f = 0;
        f < e.length;
        f++
      ) {
        var g = e[f].split("="),
          k = g[0].replace(/^\s*|\s*$/g, "");
        if (k && k == "AMP_TOKEN") {
          var m = g
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          m && (m = decodeURIComponent(m));
          d.push(m);
        }
      }
      for (var n = 0; n < d.length; n++) if (d[n] == "$OPT_OUT") return !0;
      return JG.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function VG(a) {
    z(a, function (c) {
      c.charAt(0) === "_" && delete a[c];
    });
    var b = a[P.g.eb] || {};
    z(b, function (c) {
      c.charAt(0) === "_" && delete b[c];
    });
  }
  var yH = function (a, b) {};
  function xH(a, b) {
    var c = function () {};
    return c;
  }
  function zH(a, b, c) {}
  var AH = xH;
  var BH = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]));
  };
  function CH(a, b, c) {
    var d = this;
    K(
      this.getName(),
      ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"],
      arguments
    );
    var e = b ? J(b) : {};
    Fz([
      function () {
        return N(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? J(c) : {},
      g = Jz(this);
    f.originatingEntity = zA(g);
    Rx(Ox(a, e), g.eventId, f);
  }
  CH.J = "internal.gtagConfig";
  function DH() {
    var a = {};
    return a;
  }
  var EH = function (a, b) {
    function c(f, g) {
      for (var k in f)
        if (f.hasOwnProperty(k)) {
          var m = g ? g + "." + k : k;
          fb(f[k]) && e.indexOf(f[k]) === -1
            ? (e.push(f[k]), c(f[k], m))
            : d.push(m);
        }
      e.pop();
    }
    var d = [],
      e = [a];
    c(a, b);
    return d;
  };
  function FH(a, b) {
    K(this.getName(), ["keyOrObject:!*", "value:?*"], arguments);
    var c = null,
      d = J(a);
    if (fb(d)) {
      for (var e = EH(d, ""), f = 0; f < e.length; f++)
        N(this, "write_data_layer", e[f]);
      c = Mx(d);
    } else if (typeof d === "string") {
      var g = J(b);
      if (fb(g))
        for (var k = EH(g, d), m = 0; m < k.length; m++)
          N(this, "write_data_layer", k[m]);
      else N(this, "write_data_layer", d);
      c = Mx(d, g);
    }
    if (c) {
      var n = Jz(this);
      Rx(c, n.eventId, AA(n));
      return qd(c);
    }
  }
  FH.T = "gtagSet";
  function GH(a, b) {}
  GH.T = "injectHiddenIframe";
  var HH = vz();
  function IH(a, b, c, d, e) {}
  IH.J = "internal.injectHtml";
  var MH = {};
  var NH = function (a, b, c, d, e, f) {
    f
      ? e[f]
        ? (e[f][0].push(c), e[f][1].push(d))
        : ((e[f] = [[c], [d]]),
          Lc(
            a,
            function () {
              for (var g = e[f][0], k = 0; k < g.length; k++) I(g[k]);
              g.push = function (m) {
                I(m);
                return 0;
              };
            },
            function () {
              for (var g = e[f][1], k = 0; k < g.length; k++) I(g[k]);
              e[f] = null;
            },
            b
          ))
      : Lc(a, c, d, b);
  };
  function OH(a, b, c, d) {
    if (!lo()) {
      K(
        this.getName(),
        ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"],
        arguments
      );
      N(this, "inject_script", a);
      var e = this.F;
      NH(
        a,
        void 0,
        function () {
          b && b.ib(e);
        },
        function () {
          c && c.ib(e);
        },
        MH,
        d
      );
    }
  }
  var PH = { dl: 1, id: 1 },
    QH = {};
  function RH(a, b, c, d) {}
  OH.T = "injectScript";
  RH.J = "internal.injectScript";
  function SH(a) {
    var b = !0;
    return b;
  }
  SH.T = "isConsentGranted";
  function TH() {
    return el();
  }
  TH.J = "internal.isDmaRegion";
  function UH(a) {
    var b = !1;
    return b;
  }
  UH.J = "internal.isEntityInfrastructure";
  function VH() {
    var a = jh(function (b) {
      Jz(this).log("error", b);
    });
    a.T = "JSON";
    return a;
  }
  function WH(a) {
    var b = void 0;
    return qd(b);
  }
  WH.J = "internal.legacyParseUrl";
  function XH() {
    return !1;
  }
  var YH = {
    getItem: function (a) {
      var b = null;
      return b;
    },
    setItem: function (a, b) {
      return !1;
    },
    removeItem: function (a) {},
  };
  function ZH() {
    try {
      N(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = J(a[b], this.F);
    console.log.apply(console, a);
  }
  ZH.T = "logToConsole";
  function $H(a, b) {}
  $H.J = "internal.mergeRemoteConfig";
  function aI(a, b, c) {
    c = c === void 0 ? !0 : c;
    var d = [];
    return qd(d);
  }
  aI.J = "internal.parseCookieValuesFromString";
  function bI(a) {
    var b = void 0;
    return b;
  }
  bI.T = "parseUrl";
  function cI(a) {}
  cI.J = "internal.processAsNewEvent";
  function dI(a, b, c) {
    var d;
    return d;
  }
  dI.J = "internal.pushToDataLayer";
  function eI(a) {
    var b = !1;
    return b;
  }
  eI.T = "queryPermission";
  function fI() {
    var a = "";
    return a;
  }
  fI.T = "readCharacterSet";
  function gI() {
    return ui.jb;
  }
  gI.J = "internal.readDataLayerName";
  function hI() {
    var a = "";
    return a;
  }
  hI.T = "readTitle";
  function iI(a, b) {
    var c = this;
  }
  iI.J = "internal.registerCcdCallback";
  function jI(a) {
    return !0;
  }
  jI.J = "internal.registerDestination";
  var kI = ["config", "event", "get", "set"];
  function lI(a, b, c) {}
  lI.J = "internal.registerGtagCommandListener";
  function mI(a, b) {
    var c = !1;
    return c;
  }
  mI.J = "internal.removeDataLayerEventListener";
  function nI(a, b) {}
  nI.J = "internal.removeFormData";
  function oI() {}
  oI.T = "resetDataLayer";
  function pI(a, b, c, d) {}
  pI.J = "internal.sendGtagEvent";
  function qI(a, b, c) {}
  qI.T = "sendPixel";
  function rI(a, b) {}
  rI.J = "internal.setAnchorHref";
  function sI(a) {}
  sI.J = "internal.setContainerConsentDefaults";
  function tI(a, b, c, d) {
    var e = this;
    d = d === void 0 ? !0 : d;
    var f = !1;
    return f;
  }
  tI.T = "setCookie";
  function uI(a) {}
  uI.J = "internal.setCorePlatformServices";
  function vI(a, b) {}
  vI.J = "internal.setDataLayerValue";
  function wI(a) {
    K(this.getName(), ["consentSettings:!PixieMap"], arguments);
    for (var b = a.Qb(), c = b.length(), d = 0; d < c; d++) {
      var e = b.get(d);
      e !== P.g.Fb && e !== P.g.cf && N(this, "access_consent", e, "write");
    }
    var f = Jz(this),
      g = f.eventId,
      k = AA(f),
      m = Nx("consent", "default", J(a));
    Rx(m, g, k);
  }
  wI.T = "setDefaultConsentState";
  function xI(a, b) {}
  xI.J = "internal.setDelegatedConsentType";
  function yI(a, b) {}
  yI.J = "internal.setFormAction";
  function zI(a, b, c) {}
  zI.J = "internal.setInCrossContainerData";
  function AI(a, b, c) {
    K(
      this.getName(),
      ["path:!string", "value:?*", "overrideExisting:?boolean"],
      arguments
    );
    N(this, "access_globals", "readwrite", a);
    var d = a.split("."),
      e = Vb(d, [G, H]),
      f = d.pop();
    if (e && (e[f] === void 0 || c)) return (e[f] = J(b, this.F, 2)), !0;
    return !1;
  }
  AI.T = "setInWindow";
  function BI(a, b, c) {}
  BI.J = "internal.setProductSettingsParameter";
  function CI(a, b, c) {}
  CI.J = "internal.setRemoteConfigParameter";
  function DI(a, b, c, d) {
    var e = this;
  }
  DI.T = "sha256";
  function EI(a, b, c) {}
  EI.J = "internal.sortRemoteConfigParameters";
  function FI(a, b) {
    var c = void 0;
    return c;
  }
  FI.J = "internal.subscribeToCrossContainerData";
  var GI = {},
    HI = {};
  GI.getItem = function (a) {
    var b = null;
    return b;
  };
  GI.setItem = function (a, b) {};
  GI.removeItem = function (a) {};
  GI.clear = function () {};
  GI.T = "templateStorage";
  function II(a, b) {
    var c = !1;
    return c;
  }
  II.J = "internal.testRegex";
  function JI(a) {
    var b;
    return b;
  }
  function KI(a) {
    var b;
    return b;
  }
  KI.J = "internal.unsiloId";
  function LI(a, b) {
    var c;
    return c;
  }
  LI.J = "internal.unsubscribeFromCrossContainerData";
  function MI(a) {
    K(this.getName(), ["consentSettings:!PixieMap"], arguments);
    var b = J(a),
      c;
    for (c in b) b.hasOwnProperty(c) && N(this, "access_consent", c, "write");
    var d = Jz(this);
    Rx(Nx("consent", "update", b), d.eventId, AA(d));
  }
  MI.T = "updateConsentState";
  var NI;
  function OI(a, b, c) {
    NI = NI || new uh();
    NI.add(a, b, c);
  }
  function PI(a, b) {
    var c = (NI = NI || new uh());
    if (c.D.hasOwnProperty(a))
      throw Error(
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add a private function with an existing API name: " +
          a +
          "."
      );
    c.D[a] = Bb(b) ? Rg(a, b) : Sg(a, b);
  }
  function QI() {
    return function (a) {
      var b;
      var c = NI;
      if (c.j.hasOwnProperty(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.D.hasOwnProperty(a))) {
          var e = !1,
            f = this.F.j;
          if (f) {
            var g = f.fb();
            if (g) {
              g.indexOf("__cvt_") !== 0 && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.D.hasOwnProperty(a) ? c.D[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  var RI = function () {
    var a = function (c) {
        return PI(c.J, c);
      },
      b = function (c) {
        return OI(c.T, c);
      };
    b(Dz);
    b(Kz);
    b(YA);
    b($A);
    b(aB);
    b(fB);
    b(hB);
    b(lB);
    b(nB);
    b(BE);
    b(CE);
    b(RE);
    b(SE);
    b(TE);
    b(WE);
    b(FH);
    b(GH);
    b(OH);
    b(SH);
    b(ZH);
    b(bI);
    b(eI);
    b(fI);
    b(hI);
    b(qI);
    b(tI);
    b(wI);
    b(AI);
    b(DI);
    b(GI);
    b(MI);
    b(VH());
    OI("Math", Wg());
    OI("Object", sh);
    OI("TestHelper", wh());
    OI("assertApi", Tg);
    OI("assertThat", Ug);
    OI("decodeUri", Yg);
    OI("decodeUriComponent", Zg);
    OI("encodeUri", $g);
    OI("encodeUriComponent", ah);
    OI("fail", fh);
    OI("generateRandom", gh);
    OI("getTimestamp", hh);
    OI("getTimestampMillis", hh);
    OI("getType", ih);
    OI("makeInteger", kh);
    OI("makeNumber", lh);
    OI("makeString", mh);
    OI("makeTableMap", nh);
    OI("mock", qh);
    OI("fromBase64", zE, !("atob" in G));
    OI("localStorage", YH, !XH());
    OI("toBase64", JI, !("btoa" in G));
    a(Gz);
    a(aA);
    a(mA);
    a(tA);
    a(yA);
    a(NA);
    a(WA);
    a(ZA);
    a(bB);
    a(cB);
    a(dB);
    a(eB);
    a(gB);
    a(iB);
    a(kB);
    a(mB);
    a(oB);
    a(qB);
    a(rB);
    a(sB);
    a(tB);
    a(uB);
    a(yB);
    a(GB);
    a(HB);
    a(SB);
    a(XB);
    a(bC);
    a(kC);
    a(pC);
    a(CC);
    a(EC);
    a(SC);
    a(TC);
    a(VC);
    a(xE);
    a(yE);
    a(DE);
    a(EE);
    a(FE);
    a(GE);
    a(HE);
    a(IE);
    a(JE);
    a(KE);
    a(LE);
    a(ME);
    a(OE);
    a(PE);
    a(QE);
    a(UE);
    a(VE);
    a(CH);
    a(IH);
    a(RH);
    a(TH);
    a(UH);
    a(WH);
    a(LA);
    a($H);
    a(aI);
    a(cI);
    a(dI);
    a(gI);
    a(iI);
    a(jI);
    a(lI);
    a(mI);
    a(nI);
    a(pI);
    a(rI);
    a(sI);
    a(uI);
    a(vI);
    a(xI);
    a(yI);
    a(zI);
    a(BI);
    a(CI);
    a(EI);
    a(FI);
    a(II);
    a(KI);
    a(LI);
    PI("internal.CrossContainerSchema", pB());
    PI("internal.GtagSchema", DH());
    OI("mockObject", rh);
    return QI();
  };
  var Bz;
  function SI() {
    Bz.j.j.H = function (a, b, c) {
      vi.SANDBOXED_JS_SEMAPHORE = vi.SANDBOXED_JS_SEMAPHORE || 0;
      vi.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        vi.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function TI(a) {
    a &&
      z(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          Li[e] = Li[e] || [];
          Li[e].push(b);
        }
      });
  }
  var UI = encodeURI,
    Y = encodeURIComponent,
    VI = Array.isArray,
    WI = function (a, b, c) {
      Oc(a, b, c);
    },
    XI = function (a, b) {
      if (!a) return !1;
      var c = hj(nj(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          f > 0 && e.charAt(0) != "." && (f--, (e = "." + e));
          if (f >= 0 && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    YI = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var gJ = G.clearTimeout,
    hJ = G.setTimeout,
    iJ = function (a, b, c) {
      if (lo()) {
        b && I(b);
      } else return Lc(a, b, c);
    },
    jJ = function () {
      return G.location.href;
    },
    kJ = function (a, b) {
      return Wi(a, b || 2);
    },
    lJ = function (a, b) {
      G[a] = b;
    },
    mJ = function (a, b, c) {
      b && (G[a] === void 0 || (c && !G[a])) && (G[a] = b);
      return G[a];
    },
    nJ = function (a, b) {
      if (lo()) {
        b && I(b);
      } else Nc(a, b);
    };

  var oJ = {};
  var Z = { securityGroups: {} };
  (Z.securityGroups.f = ["google"]),
    (Z.__f = function (a) {
      var b = kJ("gtm.referrer", 1) || H.referrer;
      return b
        ? a.vtp_component && a.vtp_component != "URL"
          ? hj(
              nj(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey
            )
          : kj(nj(String(b)))
        : String(b);
    }),
    (Z.__f.C = "f"),
    (Z.__f.isVendorTemplate = !0),
    (Z.__f.priorityOverride = 0),
    (Z.__f.isInfrastructure = !0),
    (Z.__f.runInSiloedMode = !1);

  (Z.securityGroups.k = ["google"]),
    (Z.__k = function (a) {
      var b = a.vtp_name,
        c = kJ("gtm.cookie", 1),
        d = !!a.vtp_decodeCookie;
      return xo(b, c, d === void 0 ? !0 : !!d)[0];
    }),
    (Z.__k.C = "k"),
    (Z.__k.isVendorTemplate = !0),
    (Z.__k.priorityOverride = 0),
    (Z.__k.isInfrastructure = !0),
    (Z.__k.runInSiloedMode = !1);
  (Z.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Z.__access_globals = b;
        Z.__access_globals.C = "access_globals";
        Z.__access_globals.isVendorTemplate = !0;
        Z.__access_globals.priorityOverride = 0;
        Z.__access_globals.isInfrastructure = !1;
        Z.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            k = 0;
          k < c.length;
          k++
        ) {
          var m = c[k],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!l(r)) throw d(p, {}, "Key must be a string.");
            if (q === "read") {
              if (e.indexOf(r) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(r) > -1) return;
            } else if (q === "readwrite") {
              if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return;
            } else if (q === "execute") {
              if (g.indexOf(r) > -1) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.C = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !0;
        Z.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : kJ("gtm.url", 1)) || jJ();
        var d = b[a("vtp_component")];
        if (!d || d == "URL") return kj(nj(String(c)));
        var e = nj(String(c)),
          f;
        if (d === "QUERY")
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(k)
                ? k
                : String(k).replace(/\s+/g, "").split(",")
              : [String(k)];
            for (var p = 0; p < n.length; p++) {
              var q = hj(e, "QUERY", void 0, void 0, n[p]);
              if (q != void 0 && (!m || q !== "")) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = hj(
            e,
            d,
            d == "HOST" ? b[a("vtp_stripWww")] : void 0,
            d == "PATH" ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Z.securityGroups.v = ["google"]),
    (Z.__v = function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = kJ(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
      return c !== void 0 ? c : a.vtp_defaultValue;
    }),
    (Z.__v.C = "v"),
    (Z.__v.isVendorTemplate = !0),
    (Z.__v.priorityOverride = 0),
    (Z.__v.isInfrastructure = !0),
    (Z.__v.runInSiloedMode = !1);

  (Z.securityGroups.read_event_data = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Z.__read_event_data = b;
        Z.__read_event_data.C = "read_event_data";
        Z.__read_event_data.isVendorTemplate = !0;
        Z.__read_event_data.priorityOverride = 0;
        Z.__read_event_data.isInfrastructure = !1;
        Z.__read_event_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (g != null && !l(g))
              throw e(f, { key: g }, "Key must be a string.");
            if (c !== "any") {
              try {
                if (c === "specific" && g != null && vg(g, d)) return;
              } catch (k) {
                throw e(f, { key: g }, "Invalid key filter.");
              }
              throw e(f, { key: g }, "Prohibited read from event data.");
            }
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.gclidw = ["google"]),
    (function () {
      var a = ["aw", "dc", "gf", "ha", "gb"];
      (function (b) {
        Z.__gclidw = b;
        Z.__gclidw.C = "gclidw";
        Z.__gclidw.isVendorTemplate = !0;
        Z.__gclidw.priorityOverride = 100;
        Z.__gclidw.isInfrastructure = !1;
        Z.__gclidw.runInSiloedMode = !1;
      })(function (b) {
        var c, d, e, f;
        b.vtp_enableCookieOverrides &&
          ((e = b.vtp_cookiePrefix),
          (c = b.vtp_path),
          (d = b.vtp_domain),
          (f = b.vtp_cookieFlags));
        var g = kJ(P.g.fa);
        g = g != void 0 && g !== !1;
        if (T(18)) {
          var k = {},
            m =
              ((k[P.g.Qa] = e),
              (k[P.g.Ib] = c),
              (k[P.g.Wa] = d),
              (k[P.g.ab] = f),
              (k[P.g.fa] = g),
              k);
          b.vtp_enableUrlPassthrough && (m[P.g.Xa] = !0);
          if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
            var n = {};
            m[P.g.sa] =
              ((n[P.g.Cc] = b.vtp_acceptIncoming),
              (n[P.g.X] = b.vtp_linkerDomains
                .toString()
                .replace(/\s+/g, "")
                .split(",")),
              (n[P.g.Mb] = b.vtp_urlPosition),
              (n[P.g.vb] = b.vtp_formDecoration),
              n);
          }
          var p = gm(
            fm(
              em(
                dm(
                  Xl(new Wl(b.vtp_gtmEventId, b.vtp_gtmPriorityId), m),
                  b.vtp_gtmOnSuccess
                ),
                b.vtp_gtmOnFailure
              ),
              !0
            )
          );
          p.eventMetadata.hit_type_override = "page_view";
          ZC("", P.g.ba, Date.now(), p);
        } else {
          I(b.vtp_gtmOnSuccess);
          var q = { prefix: e, path: c, domain: d, flags: f };
          if (!b.vtp_enableCrossDomain || b.vtp_acceptIncoming !== !1)
            if (b.vtp_enableCrossDomain || qp()) sq(a, q), Dp(q);
          pq(q);
          yq(["aw", "dc"], q);
          Xq(q, void 0, void 0, g);
          if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
            var r = b.vtp_linkerDomains
              .toString()
              .replace(/\s+/g, "")
              .split(",");
            wq(a, r, b.vtp_urlPosition, !!b.vtp_formDecoration, q.prefix);
            Ep(wp(q.prefix), r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
            Ep("FPAU", r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
          }
          !Qi() && !Di && T(82) && At(void 0, Math.round(Ob()));
          Kr({
            m: gm(new Wl(b.vtp_gtmEventId, b.vtp_gtmPriorityId)),
            kh: !1,
            yd: g,
            jc: q,
            Tf: !0,
          });
          Wk = !0;
          b.vtp_enableUrlPassthrough && Bq(["aw", "dc", "gb"]);
          Dq(["aw", "dc", "gb"]);
        }
      });
    })();
  (Z.securityGroups.aev = ["google"]),
    (function () {
      function a(r, t, u, v, w) {
        w || (w = "element");
        var x = t + "." + u,
          y;
        if (n.hasOwnProperty(x)) y = n[x];
        else {
          var B = r[w];
          if (B && ((y = v(B)), (n[x] = y), p.push(x), p.length > 35)) {
            var A = p.shift();
            delete n[A];
          }
        }
        return y;
      }
      function b(r, t, u) {
        var v = r[q[t]];
        return v !== void 0 ? v : u;
      }
      function c(r, t) {
        if (!r) return !1;
        var u = d(jJ());
        Array.isArray(t) ||
          (t = String(t || "")
            .replace(/\s+/g, "")
            .split(","));
        for (var v = [u], w = 0; w < t.length; w++) {
          var x = t[w];
          if (x.hasOwnProperty("is_regex"))
            if (x.is_regex)
              try {
                x = new RegExp(x.domain);
              } catch (A) {
                continue;
              }
            else x = x.domain;
          var y = d(r);
          if (x instanceof RegExp) {
            if (x.test(y)) return !1;
          } else {
            var B = x;
            if (B.length != 0) {
              if (y.indexOf(B) >= 0) return !1;
              v.push(d(B));
            }
          }
        }
        return !XI(r, v);
      }
      function d(r) {
        m.test(r) || (r = "http://" + r);
        return hj(nj(r), "HOST", !0);
      }
      function e(r, t, u, v) {
        switch (r) {
          case "SUBMIT_TEXT":
            return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
          case "LENGTH":
            var w = a(t, u, "FORM." + r, g);
            return w === void 0 ? v : w;
          case "INTERACTED_FIELD_ID":
            return k(t, "id", v);
          case "INTERACTED_FIELD_NAME":
            return k(t, "name", v);
          case "INTERACTED_FIELD_TYPE":
            return k(t, "type", v);
          case "INTERACTED_FIELD_POSITION":
            var x = t.interactedFormFieldPosition;
            return x === void 0 ? v : x;
          case "INTERACT_SEQUENCE_NUMBER":
            var y = t.interactSequenceNumber;
            return y === void 0 ? v : y;
          default:
            return v;
        }
      }
      function f(r) {
        switch (r.tagName.toLowerCase()) {
          case "input":
            return Rc(r, "value");
          case "button":
            return Sc(r);
          default:
            return null;
        }
      }
      function g(r) {
        if (r.tagName.toLowerCase() === "form" && r.elements) {
          for (var t = 0, u = 0; u < r.elements.length; u++)
            Sz(r.elements[u]) && t++;
          return t;
        }
      }
      function k(r, t, u) {
        var v = r.interactedFormField;
        return (v && Rc(v, t)) || u;
      }
      var m = /^https?:\/\//i,
        n = {},
        p = [],
        q = {
          ATTRIBUTE: "elementAttribute",
          CLASSES: "elementClasses",
          ELEMENT: "element",
          ID: "elementId",
          HISTORY_CHANGE_SOURCE: "historyChangeSource",
          HISTORY_NEW_STATE: "newHistoryState",
          HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
          HISTORY_OLD_STATE: "oldHistoryState",
          HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
          TARGET: "elementTarget",
        };
      (function (r) {
        Z.__aev = r;
        Z.__aev.C = "aev";
        Z.__aev.isVendorTemplate = !0;
        Z.__aev.priorityOverride = 0;
        Z.__aev.isInfrastructure = !0;
        Z.__aev.runInSiloedMode = !1;
      })(function (r) {
        var t = r.vtp_gtmEventId,
          u = r.vtp_defaultValue,
          v = r.vtp_varType,
          w = r.vtp_gtmCachedValues.gtm;
        switch (v) {
          case "TAG_NAME":
            var x = w.element;
            return (x && x.tagName) || u;
          case "TEXT":
            return a(w, t, v, Sc) || u;
          case "URL":
            var y;
            a: {
              var B = String(w.elementUrl || u || ""),
                A = nj(B),
                C = String(r.vtp_component || "URL");
              switch (C) {
                case "URL":
                  y = B;
                  break a;
                case "IS_OUTBOUND":
                  y = c(B, r.vtp_affiliatedDomains);
                  break a;
                default:
                  y = hj(
                    A,
                    C,
                    r.vtp_stripWww,
                    r.vtp_defaultPages,
                    r.vtp_queryKey
                  );
              }
            }
            return y;
          case "ATTRIBUTE":
            var E;
            if (r.vtp_attribute === void 0) E = b(w, v, u);
            else {
              var D = w.element;
              E = (D && Rc(D, r.vtp_attribute)) || u || "";
            }
            return E;
          case "MD":
            var F = r.vtp_mdValue,
              L = a(w, t, "MD", bJ);
            return F && L ? ZI(L, F) || u : L || u;
          case "FORM":
            return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
          default:
            return b(w, v, u);
        }
      });
    })();

  (Z.securityGroups.gaawe = ["google"]),
    (function () {
      function a(f, g, k) {
        for (var m = 0; m < g.length; m++)
          f.hasOwnProperty(g[m]) && (f[g[m]] = k(f[g[m]]));
      }
      function b(f, g, k) {
        var m = {},
          n = function (u, v) {
            m[u] = m[u] || v;
          },
          p = function (u, v, w) {
            w = w === void 0 ? !1 : w;
            c.push(6);
            if (u) {
              m.items = m.items || [];
              for (var x = {}, y = 0; y < u.length; x = { Te: void 0 }, y++)
                (x.Te = {}),
                  z(
                    u[y],
                    (function (A) {
                      return function (C, E) {
                        w && C === "id"
                          ? (A.Te.promotion_id = E)
                          : w && C === "name"
                          ? (A.Te.promotion_name = E)
                          : (A.Te[C] = E);
                      };
                    })(x)
                  ),
                  m.items.push(x.Te);
            }
            if (v)
              for (var B in v) d.hasOwnProperty(B) ? n(d[B], v[B]) : n(B, v[B]);
          },
          q;
        f.vtp_getEcommerceDataFrom === "dataLayer"
          ? (q = f.vtp_gtmCachedValues.eventModel) ||
            (q = f.vtp_gtmCachedValues.ecommerce)
          : ((q = f.vtp_ecommerceMacroData),
            fb(q) && q.ecommerce && !q.items && (q = q.ecommerce));
        if (fb(q)) {
          var r = !1,
            t;
          for (t in q)
            q.hasOwnProperty(t) &&
              (r || (c.push(5), (r = !0)),
              t === "currencyCode"
                ? n("currency", q.currencyCode)
                : t === "impressions" && g === P.g.kb
                ? p(q.impressions, null)
                : t === "promoClick" && g === P.g.Gb
                ? p(q.promoClick.promotions, q.promoClick.actionField, !0)
                : t === "promoView" && g === P.g.lb
                ? p(q.promoView.promotions, q.promoView.actionField, !0)
                : e.hasOwnProperty(t)
                ? g === e[t] && p(q[t].products, q[t].actionField)
                : (m[t] = q[t]));
          h(m, k);
        }
      }
      var c = [],
        d = { id: "transaction_id", revenue: "value", list: "item_list_name" },
        e = {
          click: "select_item",
          detail: "view_item",
          add: "add_to_cart",
          remove: "remove_from_cart",
          checkout: "begin_checkout",
          checkout_option: "checkout_option",
          purchase: "purchase",
          refund: "refund",
        };
      (function (f) {
        Z.__gaawe = f;
        Z.__gaawe.C = "gaawe";
        Z.__gaawe.isVendorTemplate = !0;
        Z.__gaawe.priorityOverride = 0;
        Z.__gaawe.isInfrastructure = !1;
        Z.__gaawe.runInSiloedMode = !1;
      })(function (f) {
        var g;
        g = f.vtp_migratedToV2
          ? String(f.vtp_measurementIdOverride)
          : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
        if (l(g) && g.indexOf("G-") === 0) {
          var k = String(f.vtp_eventName),
            m = {};
          c = [];
          f.vtp_sendEcommerceData &&
            (gi.hasOwnProperty(k) || k === "checkout_option") &&
            b(f, k, m);
          var n = f.vtp_eventSettingsVariable;
          if (n) for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
          if (f.vtp_eventSettingsTable) {
            var q = YI(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
              r;
            for (r in q) m[r] = q[r];
          }
          var t = YI(f.vtp_eventParameters, "name", "value"),
            u;
          for (u in t) t.hasOwnProperty(u) && (m[u] = t[u]);
          var v = f.vtp_userDataVariable;
          v && (m[P.g.Ga] = v);
          if (m.hasOwnProperty(P.g.eb) || f.vtp_userProperties) {
            var w = m[P.g.eb] || {};
            h(YI(f.vtp_userProperties, "name", "value"), w);
            m[P.g.eb] = w;
          }
          var x = {
            originatingEntity: Gw(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName),
          };
          if (c.length > 0) {
            var y = {};
            x.eventMetadata = ((y.event_usage = c), y);
          }
          a(m, hi, function (A) {
            return Kb(A);
          });
          a(m, ji, function (A) {
            return Number(A);
          });
          var B = f.vtp_gtmEventId;
          x.noGtmEvent = !0;
          Rx(Px(g, k, m), B, x);
          I(f.vtp_gtmOnSuccess);
        } else I(f.vtp_gtmOnFailure);
      });
    })();

  (Z.securityGroups.detect_form_submit_events = ["google"]),
    (function () {
      function a(b, c) {
        return { options: c };
      }
      (function (b) {
        Z.__detect_form_submit_events = b;
        Z.__detect_form_submit_events.C = "detect_form_submit_events";
        Z.__detect_form_submit_events.isVendorTemplate = !0;
        Z.__detect_form_submit_events.priorityOverride = 0;
        Z.__detect_form_submit_events.isInfrastructure = !1;
        Z.__detect_form_submit_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowWaitForTags,
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!c && f && f.waitForTags)
              throw d(e, {}, "Prohibited option waitForTags.");
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Z.__load_google_tags = b;
        Z.__load_google_tags.C = "load_google_tags";
        Z.__load_google_tags.isVendorTemplate = !0;
        Z.__load_google_tags.priorityOverride = 0;
        Z.__load_google_tags.isInfrastructure = !1;
        Z.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          k = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!l(q)) throw k(m, {}, "Tag ID must be a string.");
              if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1))
                throw k(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (q !== void 0) {
                if (!l(q)) throw k(m, {}, "First party URL must be a string.");
                if (d) {
                  if (e === "any") return;
                  if (e === "specific")
                    try {
                      if (Mg(nj(q), f)) return;
                    } catch (r) {
                      throw k(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw k(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.detect_user_provided_data = ["google"]),
    (function () {
      function a(b, c) {
        return { dataSource: c };
      }
      (function (b) {
        Z.__detect_user_provided_data = b;
        Z.__detect_user_provided_data.C = "detect_user_provided_data";
        Z.__detect_user_provided_data.isVendorTemplate = !0;
        Z.__detect_user_provided_data.priorityOverride = 0;
        Z.__detect_user_provided_data.isInfrastructure = !1;
        Z.__detect_user_provided_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_createPermissionError;
        return {
          assert: function (d, e) {
            if (e !== "auto" && e !== "manual" && e !== "code")
              throw c(d, {}, "Unknown user provided data source.");
            if (b.vtp_limitDataSources)
              if (e !== "auto" || b.vtp_allowAutoDataSources) {
                if (e === "manual" && !b.vtp_allowManualDataSources)
                  throw c(
                    d,
                    {},
                    "Detection of user provided data via manually specified CSS selectors is not allowed."
                  );
                if (e === "code" && !b.vtp_allowCodeDataSources)
                  throw c(
                    d,
                    {},
                    "Detection of user provided data from an in-page variable is not allowed."
                  );
              } else
                throw c(
                  d,
                  {},
                  "Automatic detection of user provided data is not allowed."
                );
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.access_consent = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { consentType: c, read: !1, write: !1 };
        switch (d) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + d);
        }
        return e;
      }
      (function (b) {
        Z.__access_consent = b;
        Z.__access_consent.C = "access_consent";
        Z.__access_consent.isVendorTemplate = !0;
        Z.__access_consent.priorityOverride = 0;
        Z.__access_consent.isInfrastructure = !1;
        Z.__access_consent.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_consentTypes || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = 0;
          g < c.length;
          g++
        ) {
          var k = c[g],
            m = k.consentType;
          k.read && e.push(m);
          k.write && f.push(m);
        }
        return {
          assert: function (n, p, q) {
            if (!l(p)) throw d(n, {}, "Consent type must be a string.");
            if (q === "read") {
              if (e.indexOf(p) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(p) > -1) return;
            } else
              throw d(
                n,
                {},
                "Access type must be either 'read', or 'write', was " + q
              );
            throw d(n, {}, "Prohibited " + q + " on consent type: " + p + ".");
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.inject_script = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        Z.__inject_script = b;
        Z.__inject_script.C = "inject_script";
        Z.__inject_script.isVendorTemplate = !0;
        Z.__inject_script.priorityOverride = 0;
        Z.__inject_script.isInfrastructure = !1;
        Z.__inject_script.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urls || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!l(f)) throw d(e, {}, "Script URL must be a string.");
            try {
              if (Mg(nj(f), c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid script URL filter.");
            }
            throw d(e, {}, "Prohibited script URL: " + f);
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.gas = ["google"]),
    (Z.__gas = function (a) {
      var b = h(a),
        c = b;
      c[Xe.oa] = null;
      c[Xe.Wg] = null;
      var d = (b = c);
      d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
      var e = d.vtp_cookieDomain;
      e !== void 0 &&
        (d.vtp_fieldsToSet.push({ fieldName: "cookieDomain", value: e }),
        delete d.vtp_cookieDomain);
      return b;
    }),
    (Z.__gas.C = "gas"),
    (Z.__gas.isVendorTemplate = !0),
    (Z.__gas.priorityOverride = 0),
    (Z.__gas.isInfrastructure = !1),
    (Z.__gas.runInSiloedMode = !1);

  (Z.securityGroups.awct = ["google"]),
    (function () {
      function a(b, c, d) {
        return function (e, f, g) {
          c[e] = d === "DATA_LAYER" ? kJ(g) : b[f];
        };
      }
      (function (b) {
        Z.__awct = b;
        Z.__awct.C = "awct";
        Z.__awct.isVendorTemplate = !0;
        Z.__awct.priorityOverride = 0;
        Z.__awct.isInfrastructure = !1;
        Z.__awct.runInSiloedMode = !1;
      })(function (b) {
        var c =
            !b.hasOwnProperty("vtp_enableConversionLinker") ||
            !!b.vtp_enableConversionLinker,
          d =
            !!b.vtp_enableEnhancedConversions ||
            !!b.vtp_enableEnhancedConversion,
          e = YI(b.vtp_customVariables, "varName", "value") || {},
          f = {},
          g =
            ((f[P.g.na] = b.vtp_conversionValue || 0),
            (f[P.g.za] = b.vtp_currencyCode),
            (f[P.g.Aa] = b.vtp_orderId),
            (f[P.g.Za] = b.vtp_conversionCookiePrefix),
            (f[P.g.ra] = c),
            (f[P.g.Id] = d),
            (f[P.g.fa] = kJ(P.g.fa)),
            (f[P.g.la] = kJ("developer_id")),
            f);
        (g[P.g.Ea] = kJ(P.g.Ea)),
          (g[P.g.ka] = kJ(P.g.ka)),
          (g[P.g.Wb] = kJ(P.g.Wb)),
          (g[P.g.Ka] = kJ(P.g.Ka));
        b.vtp_rdp && (g[P.g.ac] = !0);
        if (b.vtp_enableCustomParams)
          for (var k in e) oi.hasOwnProperty(k) || (g[k] = e[k]);
        if (b.vtp_enableProductReporting) {
          var m = a(b, g, b.vtp_productReportingDataSource);
          m(P.g.Md, "vtp_awMerchantId", "aw_merchant_id");
          m(P.g.Kd, "vtp_awFeedCountry", "aw_feed_country");
          m(P.g.Ld, "vtp_awFeedLanguage", "aw_feed_language");
          m(P.g.Jd, "vtp_discount", "discount");
          m(P.g.da, "vtp_items", "items");
        }
        b.vtp_enableShippingData &&
          ((g[P.g.ld] = b.vtp_deliveryPostalCode),
          (g[P.g.Td] = b.vtp_estimatedDeliveryDate),
          (g[P.g.wc] = b.vtp_deliveryCountry),
          (g[P.g.Zc] = b.vtp_shippingFee));
        b.vtp_transportUrl && (g[P.g.Ob] = b.vtp_transportUrl);
        if (b.vtp_enableNewCustomerReporting) {
          var n = a(b, g, b.vtp_newCustomerReportingDataSource);
          n(P.g.fd, "vtp_awNewCustomer", "new_customer");
          n(P.g.Nd, "vtp_awCustomerLTV", "customer_lifetime_value");
        }
        var p;
        a: {
          if (b.vtp_enableEnhancedConversion) {
            var q =
              b.vtp_cssProvidedEnhancedConversionValue ||
              b.vtp_enhancedConversionObject;
            if (q) {
              p = {
                enhanced_conversions_mode: "manual",
                enhanced_conversions_manual_var: q,
              };
              break a;
            }
          }
          p = void 0;
        }
        var r = p;
        if (r) {
          var t = {};
          g[P.g.Sd] = ((t[b.vtp_conversionLabel] = r), t);
        }
        var u = "AW-" + b.vtp_conversionId,
          v = u + "/" + b.vtp_conversionLabel;
        uw(u, b.vtp_transportUrl, {
          source: 7,
          fromContainerExecution: !0,
          siloed: !0,
        });
        var w = {},
          x = {
            eventMetadata: ((w.hit_type_override = "conversion"), w),
            noGtmEvent: !0,
            isGtmEvent: !0,
            onSuccess: b.vtp_gtmOnSuccess,
            onFailure: b.vtp_gtmOnFailure,
          };
        Rx(Px(Sj(v), P.g.Ja, g), b.vtp_gtmEventId, x);
      });
    })();

  (Z.securityGroups.write_data_layer = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Z.__write_data_layer = b;
        Z.__write_data_layer.C = "write_data_layer";
        Z.__write_data_layer.isVendorTemplate = !0;
        Z.__write_data_layer.priorityOverride = 0;
        Z.__write_data_layer.isInfrastructure = !1;
        Z.__write_data_layer.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_keyPatterns || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!l(f)) throw d(e, {}, "Keys must be strings.");
            try {
              if (vg(f, c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid key filter.");
            }
            throw d(
              e,
              {},
              "Prohibited write to data layer variable: " + f + "."
            );
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.detect_click_events = ["google"]),
    (function () {
      function a(b, c, d) {
        return { matchCommonButtons: c, cssSelector: d };
      }
      (function (b) {
        Z.__detect_click_events = b;
        Z.__detect_click_events.C = "detect_click_events";
        Z.__detect_click_events.isVendorTemplate = !0;
        Z.__detect_click_events.priorityOverride = 0;
        Z.__detect_click_events.isInfrastructure = !1;
        Z.__detect_click_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_createPermissionError;
        return {
          assert: function (d, e, f) {
            if (e !== void 0 && typeof e !== "boolean")
              throw c(d, {}, "matchCommonButtons must be a boolean.");
            if (f !== void 0 && typeof f !== "string")
              throw c(d, {}, "cssSelector must be a string.");
          },
          N: a,
        };
      });
    })();
  (Z.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__logging = b;
        Z.__logging.C = "logging";
        Z.__logging.isVendorTemplate = !0;
        Z.__logging.priorityOverride = 0;
        Z.__logging.isInfrastructure = !1;
        Z.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = c !== "all" && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Z.__configure_google_tags = b;
        Z.__configure_google_tags.C = "configure_google_tags";
        Z.__configure_google_tags.isVendorTemplate = !0;
        Z.__configure_google_tags.priorityOverride = 0;
        Z.__configure_google_tags.isInfrastructure = !1;
        Z.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!l(g)) throw e(f, {}, "Tag ID must be a string.");
            if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          N: a,
        };
      });
    })();

  (Z.securityGroups.html = ["customScripts"]),
    (function () {
      function a(d, e, f, g) {
        return function () {
          try {
            if (e.length > 0) {
              var k = e.shift(),
                m = a(d, e, f, g);
              if (
                String(k.nodeName).toUpperCase() == "SCRIPT" &&
                k.type == "text/gtmscript"
              ) {
                var n = H.createElement("script");
                n.async = !1;
                n.type = "text/javascript";
                n.id = k.id;
                n.text = k.text || k.textContent || k.innerHTML || "";
                k.charset && (n.charset = k.charset);
                var p = k.getAttribute("data-gtmsrc");
                p && ((n.src = p), m && (n.onload = m));
                d.insertBefore(n, null);
                p || m();
              } else if (
                k.innerHTML &&
                k.innerHTML.toLowerCase().indexOf("<script") >= 0
              ) {
                for (var q = []; k.firstChild; )
                  q.push(k.removeChild(k.firstChild));
                d.insertBefore(k, null);
                a(k, q, m, g)();
              } else d.insertBefore(k, null), m();
            } else f();
          } catch (r) {
            I(g);
          }
        };
      }
      function b(d) {
        var e = vz();
        d.vtp_useIframe && e(3);
        d.vtp_supportDocumentWrite && (e(1), e(2));
        wz(d.vtp_gtmEventId, d.vtp_gtmTagId, e(void 0), "j");
        if (H.body) {
          var f = d.vtp_gtmOnFailure,
            g = mz(d.vtp_html, d.vtp_gtmOnSuccess, f),
            k = g.Wj,
            m = g.onSuccess;
          if (d.vtp_useIframe) {
          } else if (d.vtp_supportDocumentWrite) c(k, m, f);
          else {
            var n = m;
            a(H.body, Tc(k), n, f)();
          }
        } else
          hJ(function () {
            b(d);
          }, 200);
      }
      Z.__html = b;
      Z.__html.C = "html";
      Z.__html.isVendorTemplate = !0;
      Z.__html.priorityOverride = 0;
      Z.__html.isInfrastructure = !1;
      Z.__html.runInSiloedMode = !1;
    })();

  var pJ = {};
  (pJ.onHtmlSuccess = nz(!0)), (pJ.onHtmlFailure = nz(!1));
  pJ.dataLayer = Xi;
  pJ.callback = function (a) {
    Ki.hasOwnProperty(a) && Bb(Ki[a]) && Ki[a]();
    delete Ki[a];
  };
  pJ.bootstrap = 0;
  pJ._spx = !1;
  function qJ() {
    vi[Vj()] = vi[Vj()] || pJ;
    fk();
    jk() ||
      z(kk(), function (d, e) {
        uw(d, e.transportUrl, e.context);
        O(92);
      });
    Rb(Li, Z.securityGroups);
    var a = Zj(ak()),
      b,
      c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
    (c !== 2 && c !== 4 && c !== 3) || O(142);
    jz(),
      Cf({
        qm: function (d) {
          return d === hz;
        },
        El: function (d) {
          return new kz(d);
        },
        sm: function (d) {
          for (var e = !1, f = !1, g = 2; g < d.length; g++)
            (e = e || d[g] === 8), (f = f || d[g] === 16);
          return e && f;
        },
        Nm: function (d) {
          var e;
          if (d === hz) e = d;
          else {
            var f = Mi();
            iz[f] = d;
            e = 'google_tag_manager["rm"]["' + Xj() + '"](' + f + ")";
          }
          return e;
        },
      });
    Ef = Vf;
  }
  var rJ = !1;
  (function (a) {
    function b() {
      n = H.documentElement.getAttribute("data-tag-assistant-present");
      Ky(n) && (m = k.lj);
    }
    function c() {
      m && Fc ? g(m) : a();
    }
    if (!G["__TAGGY_INSTALLED"]) {
      var d = !1;
      if (H.referrer) {
        var e = nj(H.referrer);
        d = jj(e, "host") === "cct.google";
      }
      if (!d) {
        var f = xo("googTaggyReferrer");
        d = !(!f.length || !f[0].length);
      }
      d &&
        ((G["__TAGGY_INSTALLED"] = !0),
        Lc("https://cct.google/taggy/agent.js"));
    }
    var g = function (u) {
        var v = "GTM",
          w = "GTM";
        Bi && ((v = "OGT"), (w = "GTAG"));
        var x = G["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (G["google.tagmanager.debugui2.queue"] = x),
          Lc(
            "https://" +
              ui.Fd +
              "/debug/bootstrap?id=" +
              ag.ctid +
              "&src=" +
              w +
              "&cond=" +
              u +
              "&gtm=" +
              no()
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: Fc,
            containerProduct: v,
            debug: !1,
            id: ag.ctid,
            targetRef: { ctid: ag.ctid, isDestination: Lj.oe },
            aliases: Rj(),
            destinations: Uj(),
          },
        };
        y.data.resume = function () {
          a();
        };
        ui.Ck && (y.data.initialPublish = !0);
        x.push(y);
      },
      k = { Vk: 1, nj: 2, Cj: 3, ri: 4, lj: 5 };
    k[k.Vk] = "GTM_DEBUG_LEGACY_PARAM";
    k[k.nj] = "GTM_DEBUG_PARAM";
    k[k.Cj] = "REFERRER";
    k[k.ri] = "COOKIE";
    k[k.lj] = "EXTENSION_PARAM";
    var m = void 0,
      n = void 0,
      p = hj(G.location, "query", !1, void 0, "gtm_debug");
    Ky(p) && (m = k.nj);
    if (!m && H.referrer) {
      var q = nj(H.referrer);
      jj(q, "host") === "tagassistant.google.com" && (m = k.Cj);
    }
    if (!m) {
      var r = xo("__TAG_ASSISTANT");
      r.length && r[0].length && (m = k.ri);
    }
    m || b();
    if (!m && Ly(n)) {
      var t = !1;
      Pc(
        H,
        "TADebugSignal",
        function () {
          t || ((t = !0), b(), c());
        },
        !1
      );
      G.setTimeout(function () {
        t || ((t = !0), b(), c());
      }, 200);
    } else c();
  })(function () {
    try {
      var a;
      if (!(a = !T(55))) {
        var b;
        if (!(b = rJ)) {
          var c;
          a: {
            for (
              var d = Jj().injectedFirstPartyContainers,
                e = oa(Qj()),
                f = e.next();
              !f.done;
              f = e.next()
            )
              if (d[f.value]) {
                c = !0;
                break a;
              }
            c = !1;
          }
          b = !c;
        }
        a = b;
      }
      if (a) {
        dk();
        if (T(69)) {
        }
        Hk().D();
        Hn();
        vl();
        var g = Xj();
        if (Jj().canonical[g]) {
          var k = vi.zones;
          k && k.unregisterChild(Qj());
          fw().removeExternalRestrictions(Xj());
        } else {
          Rt();
          a: {
          }
          Oi.j = "0";
          Oi.K = "";
          Oi.W = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
          Oi.O = "ad_storage|analytics_storage|ad_user_data";
          Oi.Ca = "";
          qw();
          for (
            var m = data.resource || {}, n = m.macros || [], p = 0;
            p < n.length;
            p++
          )
            uf.push(n[p]);
          for (var q = m.tags || [], r = 0; r < q.length; r++) xf.push(q[r]);
          for (var t = m.predicates || [], u = 0; u < t.length; u++)
            wf.push(t[u]);
          for (var v = m.rules || [], w = 0; w < v.length; w++) {
            for (var x = v[w], y = {}, B = 0; B < x.length; B++) {
              var A = x[B][0];
              y[A] = Array.prototype.slice.call(x[B], 1);
              (A !== "if" && A !== "unless") || Df(y[A]);
            }
            vf.push(y);
          }
          zf = Z;
          Af = pz;
          Xf = new dg();
          var C = data.sandboxed_scripts,
            E = data.security_groups;
          a: {
            var D = data.runtime || [],
              F = data.runtime_lines;
            Bz = new Pe();
            SI();
            tf = Az();
            var L = Bz,
              M = RI(),
              S = new id("require", M);
            S.Ma();
            L.j.j.set("require", S);
            for (var V = [], aa = 0; aa < D.length; aa++) {
              var X = D[aa];
              if (!Array.isArray(X) || X.length < 3) {
                if (X.length === 0) continue;
                break a;
              }
              F && F[aa] && F[aa].length && Of(X, F[aa]);
              try {
                Bz.execute(X), T(76) && Cj && X[0] === 50 && V.push(X[1]);
              } catch (Yn) {}
            }
            T(76) && (Ff = V);
          }
          if (C && C.length)
            for (var R = ["sandboxedScripts"], ma = 0; ma < C.length; ma++) {
              var la = C[ma].replace(/^_*/, "");
              Li[la] = R;
            }
          TI(E);
          qJ();
          if (!Fi)
            for (
              var ha = el() ? Ri(Oi.O) : Ri(Oi.W), ya = 0;
              ya < il.length;
              ya++
            ) {
              var Na = il[ya],
                Fa = Na,
                Sa = ha[Na] ? "granted" : "denied";
              Bk().implicit(Fa, Sa);
            }
          Jy();
          zw = !1;
          Aw = 0;
          if (
            (H.readyState === "interactive" && !H.createEventObject) ||
            H.readyState === "complete"
          )
            Cw();
          else {
            Pc(H, "DOMContentLoaded", Cw);
            Pc(H, "readystatechange", Cw);
            if (H.createEventObject && H.documentElement.doScroll) {
              var bb = !0;
              try {
                bb = !G.frameElement;
              } catch (Yn) {}
              bb && Dw();
            }
            Pc(G, "load", Cw);
          }
          oy = !1;
          H.readyState === "complete" ? qy() : Pc(G, "load", qy);
          Cj &&
            (jm(wm),
            G.setInterval(vm, 864e5),
            jm(sz),
            jm(cx),
            jm(Tu),
            jm(zm),
            jm(xz),
            jm(nx),
            jm(Ft),
            T(76) && (jm(hx), jm(ix), jm(jx)));
          if (Dj) {
            zk();
            Ql();
            yw();
            var ud;
            var vd = Zj(ak());
            if (vd) {
              for (; vd.parent; ) {
                var Gx = Zj(vd.parent);
                if (!Gx) break;
                vd = Gx;
              }
              ud = vd;
            } else ud = void 0;
            var Oe = ud;
            if (!Oe) O(144);
            else if (Oe.canonicalContainerId) {
              var Zn;
              a: {
                if (Oe.scriptSource) {
                  var Mj;
                  try {
                    var Hx;
                    Mj =
                      (Hx = bd()) == null
                        ? void 0
                        : Hx.getEntriesByType("resource");
                  } catch (Yn) {}
                  if (Mj) {
                    for (var $n = {}, Nj = 0; Nj < Mj.length; ++Nj) {
                      var Ix = Mj[Nj],
                        ao = Ix.initiatorType;
                      if (ao === "script" && Ix.name === Oe.scriptSource) {
                        Zn = { Um: Nj, Vm: $n };
                        break a;
                      }
                      $n[ao] = 1 + ($n[ao] || 0);
                    }
                    O(146);
                  } else O(145);
                }
                Zn = void 0;
              }
              var bo = Zn;
              bo &&
                (rk("rtg", String(Oe.canonicalContainerId)),
                rk("rlo", String(bo.Um)),
                rk("slo", String(bo.Vm.script || "0")),
                rk("hlo", Oe.htmlLoadOrder || "-1"),
                rk("lst", String(Oe.loadScriptType || "0")));
            }
            var co;
            var Oj = Yj();
            if (Oj) {
              var Jx;
              co =
                Oj.canonicalContainerId ||
                "_" +
                  (Oj.scriptContainerId ||
                    ((Jx = Oj.destinations) == null ? void 0 : Jx[0]));
            } else co = void 0;
            var Kx = co;
            Kx && rk("pcid", Kx);
            T(31) &&
              (rk("bt", String(Oi.H ? 2 : Di ? 1 : 0)),
              rk("ct", String(Oi.H ? 0 : Di ? 1 : lo() ? 2 : 3)));
          }
          fz();
          $k(1);
          JA();
          Ji = Ob();
          pJ.bootstrap = Ji;
          if (T(69)) {
          }
        }
      }
    } catch (Yn) {
      if (($k(4), Cj)) {
        var sJ = qm(!0, !0);
        Oc(sJ);
      }
    }
  });
})();
