"use strict";(self.webpackChunkbrave_ads_docs=self.webpackChunkbrave_ads_docs||[]).push([[0],{4373:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>t});var s=n(5893),r=n(1151);const i={sidebar_position:4},o="API",c={id:"campaign-performance/API",title:"API",description:"Comenzar",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/campaign-performance/API.md",sourceDirName:"campaign-performance",slug:"/campaign-performance/API",permalink:"/es/campaign-performance/API",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Indicadores de estado",permalink:"/es/campaign-performance/status"},next:{title:"Facturaci\xf3n",permalink:"/es/account-management/billing"}},d={},t=[{value:"Comenzar",id:"comenzar",level:2},{value:"Puntos finales",id:"puntos-finales",level:2},{value:"Detalles de campa\xf1a",id:"detalles-de-campa\xf1a",level:3},{value:"Par\xe1metros opcionales",id:"par\xe1metros-opcionales",level:5},{value:"Informes de campa\xf1a",id:"informes-de-campa\xf1a",level:3},{value:"Campos comunes de informes",id:"campos-comunes-de-informes",level:4},{value:"Par\xe1metros opcionales compartidos",id:"par\xe1metros-opcionales-compartidos",level:4},{value:"Informes v1",id:"informes-v1",level:4},{value:"Informes v2",id:"informes-v2",level:4},{value:"Ejemplos de respuesta",id:"ejemplos-de-respuesta",level:2},{value:"Respuesta de campa\xf1a",id:"respuesta-de-campa\xf1a",level:3},{value:"Respuesta de informes v1",id:"respuesta-de-informes-v1",level:3},{value:"Respuesta de informes v2",id:"respuesta-de-informes-v2",level:3}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"api",children:"API"}),"\n",(0,s.jsx)(a.h2,{id:"comenzar",children:"Comenzar"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Inicie sesi\xf3n en ",(0,s.jsx)(a.a,{href:"https://ads.brave.com",children:"https://ads.brave.com"})]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Genere una clave API"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsx)(a.li,{children:"Perfil -> Generar clave API"}),"\n",(0,s.jsx)(a.li,{children:"Registre la clave API generada, ya que no podr\xe1 recuperarla nuevamente"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"puntos-finales",children:"Puntos finales"}),"\n",(0,s.jsx)(a.h3,{id:"detalles-de-campa\xf1a",children:"Detalles de campa\xf1a"}),"\n",(0,s.jsx)(a.p,{children:"Este recupera todas las campa\xf1as que ha ejecutado, as\xed como los conjuntos de anuncios y los anuncios asociados a ellas por ID."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"OBTENER https://ads-serve.brave.com/v1/api/campaigns\n"})}),"\n",(0,s.jsx)(a.h5,{id:"par\xe1metros-opcionales",children:"Par\xe1metros opcionales"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"desde"})," (fecha en UTC): Obtener las campa\xf1as que finalizaron en la fecha especificada o despu\xe9s. Formato: ",(0,s.jsx)(a.code,{children:"AAAA-MM-DDTHH:MM:SS"})]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"informes-de-campa\xf1a",children:"Informes de campa\xf1a"}),"\n",(0,s.jsx)(a.p,{children:"Este recupera los detalles de los informes sobre una campa\xf1a espec\xedfica que haya ejecutado, donde el ID se puede recuperar desde el punto final de detalles de la campa\xf1a."}),"\n",(0,s.jsx)(a.h4,{id:"campos-comunes-de-informes",children:"Campos comunes de informes"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"D\xeda/Hora,Nombre del Anunciante,Nombre de la Campa\xf1a,ID de la Campa\xf1a,ID del Conjunto Creativo,Nombre del Conjunto Creativo,ID de la Instancia Creativa,T\xedtulo del Creativo,Cuerpo del Creativo,URL del Creativo,Conteo de Visitas,Conteo de Clics,Conteo de Rechazos,Conteo de Llegadas,Conteo de Conversiones,SO,Gasto,Conteo de Conversiones por Visualizaci\xf3n,Conteo de Conversiones por Clic,Ventana de Atribuci\xf3n (d\xedas)\n"})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Nota"}),": ",(0,s.jsx)(a.code,{children:"v1"})," Devuelve una columna ",(0,s.jsx)(a.code,{children:"Segmento"})," adicional entre ",(0,s.jsx)(a.code,{children:"SO"})," y ",(0,s.jsx)(a.code,{children:"Gasto"})]}),"\n",(0,s.jsx)(a.h4,{id:"par\xe1metros-opcionales-compartidos",children:"Par\xe1metros opcionales compartidos"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"desde"})," (fecha en UTC) - Obtener datos en la fecha especificada o despu\xe9s. Usar por defecto la fecha de inicio de la campa\xf1a si no se especifica.Formato: ",(0,s.jsx)(a.code,{children:"AAAA-MM-DD"})]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"hasta"})," (fecha en UTC) - Obtener datos hasta la fecha especificada. Usar por defecto la fecha de finalizaci\xf3n de la campa\xf1a si no se especifica.Formato: ",(0,s.jsx)(a.code,{children:"AAAA-MM-DD"})]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"pa\xeds"})," - Agregar columna de pa\xeds al informe. Por defecto es falso. Formato ",(0,s.jsx)(a.code,{children:"verdadero"})]}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"informes-v1",children:"Informes v1"}),"\n",(0,s.jsxs)(a.p,{children:["Este devuelve todos los campos especificados anteriormente, as\xed como una columna ",(0,s.jsx)(a.code,{children:"Segmento"})," adicional entre ",(0,s.jsx)(a.code,{children:"SO"})," y ",(0,s.jsx)(a.code,{children:"Gasto"})," ",(0,s.jsx)("br",{}),"\nes decir: ",(0,s.jsx)(a.code,{children:"...Conteo de Conversiones,SO,Segmento,Gasto,Conteo de Conversiones por Visualizaci\xf3n..."})]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"OBTENER https://ads-serve.brave.com/v1/report/campaign/csv/:campaignId\n"})}),"\n",(0,s.jsx)(a.h4,{id:"informes-v2",children:"Informes v2"}),"\n",(0,s.jsx)(a.p,{children:"Este devuelve todos los campos especificados anteriormente"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"OBTENER https://ads-serve.brave.com/v2/report/campaign/csv/:campaignId\n"})}),"\n",(0,s.jsx)(a.h1,{id:"hacer-solicitudes",children:"Hacer solicitudes"}),"\n",(0,s.jsx)(a.p,{children:"Pasar la clave API en el encabezado"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"curl --solicitar OBTENER \\\n  --url https://ads-serve.brave.com/v1/api/campaigns \\\n  --encabezado 'X-Brave-Api-Key: <API_KEY>' \\\n"})}),"\n",(0,s.jsx)(a.h2,{id:"ejemplos-de-respuesta",children:"Ejemplos de respuesta"}),"\n",(0,s.jsx)(a.h3,{id:"respuesta-de-campa\xf1a",children:"Respuesta de campa\xf1a"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-json",children:'{\n  "id": "f9f88715-db91-421b-9d1d-983742ef14c5", // Advertiser ID\n  "name": "My Advertiser Name",\n  "state": "active",\n  "campaigns": [\n    {\n      "id": "a3de655d-ae1b-41a5-b6f9-741a40010d00", // Campaign ID\n      "name": "My Campaign Name",\n      "format": "push_notification",\n      "startAt": "2022-08-09T14:49:11.714Z",\n      "endAt": "2024-03-22T05:42:49.691Z",\n      "adSets": [\n        {\n          "id": "e161f081-f249-4216-b9ad-64e2ba4c1b65", // Ad Set ID\n          "name": "My First Ad Set",\n          "ads": [\n            {\n              "id": "c93d9444-2c59-4cec-9a61-de3e1e3f7552" // Ad ID\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(a.h3,{id:"respuesta-de-informes-v1",children:"Respuesta de informes v1"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"Day/Hour,Advertiser ID,Campaign ID,Creative Set ID,Creative Instance ID,Creative Title,Creative Body,Creative URL,Impression Counts,Click Counts,Dismissed Counts,Site Visit Counts,Conversion Counts,OS,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)\n2024-01-31T20:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,1,0,0,macos,0.00800000,0,0,30 \n2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,windows,0.00800000,0,0,30\n2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30\n2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs19520db1,cri9086c13f,Sample Creative 3,Test creative 3,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30 \n2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30\n"})}),"\n",(0,s.jsx)(a.h3,{id:"respuesta-de-informes-v2",children:"Respuesta de informes v2"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"Day/Hour,Advertiser ID,Campaign ID,Creative Set ID,Creative Instance ID,Creative Title,Creative Body,Creative URL,Impression Counts,Click Counts,Dismissed Counts,Site Visit Counts,Conversion Counts,OS,Segment,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)\n2024-01-31T20:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,1,0,0,macos,arts & entertainment,0.00800000,0,0,30 \n2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,windows,food & wine,0.00800000,0,0,30\n2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,0,0,0,android,architecture,0.00800000,0,0,30\n2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs19520db1,cri9086c13f,Sample Creative 3,Test creative 3,https://example.com,1,0,0,0,0,android,crypto,0.00800000,0,0,30 \n2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,android,gaming,0.00800000,0,0,30\n"})})]})}function p(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>c,a:()=>o});var s=n(7294);const r={},i=s.createContext(r);function o(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);