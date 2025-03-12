"use strict";(self.webpackChunkbrave_ads_docs=self.webpackChunkbrave_ads_docs||[]).push([[9],{6680:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"campaign-performance/API","title":"API","description":"Para come\xe7ar","source":"@site/i18n/pt/docusaurus-plugin-content-docs/current/campaign-performance/API.md","sourceDirName":"campaign-performance","slug":"/campaign-performance/API","permalink":"/pt/campaign-performance/API","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Indicadores de status","permalink":"/pt/campaign-performance/status"},"next":{"title":"Cobran\xe7a","permalink":"/pt/account-management/billing"}}');var s=n(4848),i=n(8453);const o={sidebar_position:4},t="API",d={},c=[{value:"Para come\xe7ar",id:"para-come\xe7ar",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Detalhes da Campanha",id:"detalhes-da-campanha",level:3},{value:"Par\xe2metros opcionais",id:"par\xe2metros-opcionais",level:5},{value:"Relat\xf3rios de Campanha",id:"relat\xf3rios-de-campanha",level:3},{value:"Campos comuns de Relat\xf3rio",id:"campos-comuns-de-relat\xf3rio",level:4},{value:"Par\xe2metros opcionais compartilhados",id:"par\xe2metros-opcionais-compartilhados",level:4},{value:"Relat\xf3rios v1",id:"relat\xf3rios-v1",level:4},{value:"Relat\xf3rios v2",id:"relat\xf3rios-v2",level:4},{value:"Exemplos de Resposta",id:"exemplos-de-resposta",level:2},{value:"Resposta da Campanha",id:"resposta-da-campanha",level:3},{value:"Resposta do Relat\xf3rio v1",id:"resposta-do-relat\xf3rio-v1",level:3},{value:"Resposta do Relat\xf3rio v2",id:"resposta-do-relat\xf3rio-v2",level:3}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"api",children:"API"})}),"\n",(0,s.jsx)(a.h2,{id:"para-come\xe7ar",children:"Para come\xe7ar"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Acesse ",(0,s.jsx)(a.a,{href:"https://ads.brave.com",children:"https://ads.brave.com"})]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Gere uma chave de API"}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Perfil \u2192 Gerar Chave de API"}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Anote a chave de API gerada, pois voc\xea n\xe3o poder\xe1 recuper\xe1-la novamente"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,s.jsx)(a.h3,{id:"detalhes-da-campanha",children:"Detalhes da Campanha"}),"\n",(0,s.jsx)(a.p,{children:"Recupera todas as campanhas que voc\xea executou, bem como os conjuntos de an\xfancios e an\xfancios associados a elas por ID."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"GET https://ads-serve.brave.com/v1/api/campaigns\n"})}),"\n",(0,s.jsx)(a.h5,{id:"par\xe2metros-opcionais",children:"Par\xe2metros opcionais"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"from"})," (data em UTC) - Recupera campanhas que terminaram na data especificada ou depois dela. Formato: AAAA-MM-DDTHH:MM",":SS"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"relat\xf3rios-de-campanha",children:"Relat\xf3rios de Campanha"}),"\n",(0,s.jsx)(a.p,{children:"Recupera detalhes de relat\xf3rios sobre uma campanha espec\xedfica que voc\xea executou, onde o ID pode ser obtido a partir do endpoint de detalhes da campanha."}),"\n",(0,s.jsx)(a.h4,{id:"campos-comuns-de-relat\xf3rio",children:"Campos comuns de Relat\xf3rio"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"Day/Hour,Advertiser Name,Campaign Name,Campaign ID,Creative Set ID,Creative Set Name,Creative Instance ID,Creative Title,Creative Body,Creative URL,View Counts,Click Counts,Dismissed Counts,Landed Counts,Conversion Counts,OS,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)\n"})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Nota"}),": ",(0,s.jsx)(a.code,{children:"v1"})," retorna uma coluna adicional de ",(0,s.jsx)(a.code,{children:"Segment"})," entre ",(0,s.jsx)(a.code,{children:"OS"})," e ",(0,s.jsx)(a.code,{children:"Spend"})]}),"\n",(0,s.jsx)(a.h4,{id:"par\xe2metros-opcionais-compartilhados",children:"Par\xe2metros opcionais compartilhados"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"from"})," (data em UTC) - Recupera dados a partir da data especificada. O padr\xe3o \xe9 a data de in\xedcio da campanha se n\xe3o especificado. Formato: ",(0,s.jsx)(a.code,{children:"AAAA-MM-DD"})]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"to"})," (data em UTC) - Recupera dados at\xe9 a data especificada. O padr\xe3o \xe9 a data de t\xe9rmino da campanha se n\xe3o especificado. Formato: ",(0,s.jsx)(a.code,{children:"AAAA-MM-DD"})]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"country"}),' - Adicionar coluna de pa\xeds ao relat\xf3rio. O valor padr\xe3o \xe9 "false". Formato ',(0,s.jsx)(a.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"relat\xf3rios-v1",children:"Relat\xf3rios v1"}),"\n",(0,s.jsxs)(a.p,{children:["Retorna todos os campos especificados acima, al\xe9m de uma coluna adicional ",(0,s.jsx)(a.code,{children:"Segment"})," entre ",(0,s.jsx)(a.code,{children:"OS"})," e ",(0,s.jsx)(a.code,{children:"Spend"})," ",(0,s.jsx)("br",{}),"\nexemplo: ",(0,s.jsx)(a.code,{children:"...Conversion Counts,OS,Segment,Spend,View-through Conversion Counts..."})]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"GET https://ads-serve.brave.com/v1/report/campaign/csv/:campaignId\n"})}),"\n",(0,s.jsx)(a.h4,{id:"relat\xf3rios-v2",children:"Relat\xf3rios v2"}),"\n",(0,s.jsx)(a.p,{children:"Retorna todos os campos especificados acima"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"GET https://ads-serve.brave.com/v2/report/campaign/csv/:campaignId\n"})}),"\n",(0,s.jsx)(a.h1,{id:"fazendo-requisi\xe7\xf5es",children:"Fazendo Requisi\xe7\xf5es"}),"\n",(0,s.jsx)(a.p,{children:"Passar a chave da API no cabe\xe7alho"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"curl --request GET\n--url https://ads-serve.brave.com/v1/api/campaigns\n--header 'X-Brave-Api-Key: <API_KEY>' \\\n"})}),"\n",(0,s.jsx)(a.h2,{id:"exemplos-de-resposta",children:"Exemplos de Resposta"}),"\n",(0,s.jsx)(a.h3,{id:"resposta-da-campanha",children:"Resposta da Campanha"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-json",children:'{\n  "id": "f9f88715-db91-421b-9d1d-983742ef14c5", // Advertiser ID\n  "name": "My Advertiser Name",\n  "state": "active",\n  "campaigns": [\n    {\n      "id": "a3de655d-ae1b-41a5-b6f9-741a40010d00", // Campaign ID\n      "name": "My Campaign Name",\n      "format": "push_notification",\n      "startAt": "2022-08-09T14:49:11.714Z",\n      "endAt": "2024-03-22T05:42:49.691Z",\n      "adSets": [\n        {\n          "id": "e161f081-f249-4216-b9ad-64e2ba4c1b65", // Ad Set ID\n          "name": "My First Ad Set",\n          "ads": [\n            {\n              "id": "c93d9444-2c59-4cec-9a61-de3e1e3f7552" // Ad ID\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(a.h3,{id:"resposta-do-relat\xf3rio-v1",children:"Resposta do Relat\xf3rio v1"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"Day/Hour,Advertiser ID,Campaign ID,Creative Set ID,Creative Instance ID,Creative Title,Creative Body,Creative URL,Impression Counts,Click Counts,Dismissed Counts,Site Visit Counts,Conversion Counts,OS,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)\n2024-01-31T20:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,1,0,0,macos,0.00800000,0,0,30 \n2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,windows,0.00800000,0,0,30\n2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30\n2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs19520db1,cri9086c13f,Sample Creative 3,Test creative 3,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30 \n2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30\n"})}),"\n",(0,s.jsx)(a.h3,{id:"resposta-do-relat\xf3rio-v2",children:"Resposta do Relat\xf3rio v2"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"Day/Hour,Advertiser ID,Campaign ID,Creative Set ID,Creative Instance ID,Creative Title,Creative Body,Creative URL,Impression Counts,Click Counts,Dismissed Counts,Site Visit Counts,Conversion Counts,OS,Segment,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)\n2024-01-31T20:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,1,0,0,macos,arts & entertainment,0.00800000,0,0,30 \n2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,windows,food & wine,0.00800000,0,0,30\n2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,0,0,0,android,architecture,0.00800000,0,0,30\n2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs19520db1,cri9086c13f,Sample Creative 3,Test creative 3,https://example.com,1,0,0,0,0,android,crypto,0.00800000,0,0,30 \n2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,android,gaming,0.00800000,0,0,30\n"})})]})}function p(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>t});var r=n(6540);const s={},i=r.createContext(s);function o(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);