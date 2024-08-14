"use strict";(self.webpackChunkbrave_ads_docs=self.webpackChunkbrave_ads_docs||[]).push([[549],{9400:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var a=i(5893),r=i(1151);const t={sidebar_position:4},s="API",o={id:"campaign-performance/API",title:"API",description:"Getting Started",source:"@site/docs/campaign-performance/API.md",sourceDirName:"campaign-performance",slug:"/campaign-performance/API",permalink:"/campaign-performance/API",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Status indicators",permalink:"/campaign-performance/status"},next:{title:"Billing",permalink:"/account-management/billing"}},d={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Campaign Details",id:"campaign-details",level:3},{value:"Optional Parameters",id:"optional-parameters",level:5},{value:"Campaign Reporting",id:"campaign-reporting",level:3},{value:"Common Reporting fields",id:"common-reporting-fields",level:4},{value:"Shared Optional Parameters",id:"shared-optional-parameters",level:4},{value:"v1 Reporting",id:"v1-reporting",level:4},{value:"v2 Reporting",id:"v2-reporting",level:4},{value:"Response Examples",id:"response-examples",level:2},{value:"Campaign Response",id:"campaign-response",level:3},{value:"v1 Reporting Response",id:"v1-reporting-response",level:3},{value:"v2 Reporting Response",id:"v2-reporting-response",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"api",children:"API"})}),"\n",(0,a.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Log on to ",(0,a.jsx)(n.a,{href:"https://ads.brave.com",children:"https://ads.brave.com"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Generate an API KEY"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Profile -> Generate API Key"}),"\n",(0,a.jsx)(n.li,{children:"Record generated API key, as you will not be able to retrieve it again"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,a.jsx)(n.h3,{id:"campaign-details",children:"Campaign Details"}),"\n",(0,a.jsx)(n.p,{children:"Retrieves all campaigns you have ran, as well as the ad sets and ads associated with them by ID."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GET https://ads-serve.brave.com/v1/api/campaigns\n"})}),"\n",(0,a.jsx)(n.h5,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"from"})," (date in UTC) - Fetch campaigns that ended on or after specified date. Format: ",(0,a.jsx)(n.code,{children:"YYYY-MM-DDTHH:MM:SS"})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"campaign-reporting",children:"Campaign Reporting"}),"\n",(0,a.jsx)(n.p,{children:"Retrieves reporting details about a specific campaign you have ran, where the ID can be retrieved from the campaign details endpoint."}),"\n",(0,a.jsx)(n.h4,{id:"common-reporting-fields",children:"Common Reporting fields"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Day/Hour,Advertiser Name,Campaign Name,Campaign ID,Creative Set ID,Creative Set Name,Creative Instance ID,Creative Title,Creative Body,Creative URL,View Counts,Click Counts,Dismissed Counts,Landed Counts,Conversion Counts,OS,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note"}),": ",(0,a.jsx)(n.code,{children:"v1"})," Returns an additional ",(0,a.jsx)(n.code,{children:"Segment"})," column between ",(0,a.jsx)(n.code,{children:"OS"})," and ",(0,a.jsx)(n.code,{children:"Spend"})]}),"\n",(0,a.jsx)(n.h4,{id:"shared-optional-parameters",children:"Shared Optional Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"from"})," (date in UTC) - Fetch data on or after specified date. Defaults to campaign start date if not specified. Format: ",(0,a.jsx)(n.code,{children:"YYYY-MM-DD"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"to"})," (date in UTC) - Fetch data up to specified date. Defaults to campaign end date if not specified. Format: ",(0,a.jsx)(n.code,{children:"YYYY-MM-DD"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"country"})," - Add country column to report. Defaults to false. Format ",(0,a.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"v1-reporting",children:"v1 Reporting"}),"\n",(0,a.jsxs)(n.p,{children:["Returns all fields specified above, as well as an additional ",(0,a.jsx)(n.code,{children:"Segment"})," column between ",(0,a.jsx)(n.code,{children:"OS"})," and ",(0,a.jsx)(n.code,{children:"Spend"})," ",(0,a.jsx)("br",{}),"\ni.e: ",(0,a.jsx)(n.code,{children:"...Conversion Counts,OS,Segment,Spend,View-through Conversion Counts..."})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GET https://ads-serve.brave.com/v1/report/campaign/csv/:campaignId\n"})}),"\n",(0,a.jsx)(n.h4,{id:"v2-reporting",children:"v2 Reporting"}),"\n",(0,a.jsx)(n.p,{children:"Returns all fields specified above"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GET https://ads-serve.brave.com/v2/report/campaign/csv/:campaignId\n"})}),"\n",(0,a.jsx)(n.h1,{id:"making-requests",children:"Making Requests"}),"\n",(0,a.jsx)(n.p,{children:"Pass API key in header"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"curl --request GET \\\n  --url https://ads-serve.brave.com/v1/api/campaigns \\\n  --header 'X-Brave-Api-Key: <API_KEY>' \\\n"})}),"\n",(0,a.jsx)(n.h2,{id:"response-examples",children:"Response Examples"}),"\n",(0,a.jsx)(n.h3,{id:"campaign-response",children:"Campaign Response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "id": "f9f88715-db91-421b-9d1d-983742ef14c5", // Advertiser ID\n  "name": "My Advertiser Name",\n  "state": "active",\n  "campaigns": [\n    {\n      "id": "a3de655d-ae1b-41a5-b6f9-741a40010d00", // Campaign ID\n      "name": "My Campaign Name",\n      "format": "push_notification",\n      "startAt": "2022-08-09T14:49:11.714Z",\n      "endAt": "2024-03-22T05:42:49.691Z",\n      "adSets": [\n        {\n          "id": "e161f081-f249-4216-b9ad-64e2ba4c1b65", // Ad Set ID\n          "name": "My First Ad Set",\n          "ads": [\n            {\n              "id": "c93d9444-2c59-4cec-9a61-de3e1e3f7552" // Ad ID\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"v1-reporting-response",children:"v1 Reporting Response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Day/Hour,Advertiser ID,Campaign ID,Creative Set ID,Creative Instance ID,Creative Title,Creative Body,Creative URL,Impression Counts,Click Counts,Dismissed Counts,Site Visit Counts,Conversion Counts,OS,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)\n2024-01-31T20:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,1,0,0,macos,0.00800000,0,0,30 \n2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,windows,0.00800000,0,0,30\n2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30\n2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs19520db1,cri9086c13f,Sample Creative 3,Test creative 3,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30 \n2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30\n"})}),"\n",(0,a.jsx)(n.h3,{id:"v2-reporting-response",children:"v2 Reporting Response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Day/Hour,Advertiser ID,Campaign ID,Creative Set ID,Creative Instance ID,Creative Title,Creative Body,Creative URL,Impression Counts,Click Counts,Dismissed Counts,Site Visit Counts,Conversion Counts,OS,Segment,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)\n2024-01-31T20:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,1,0,0,macos,arts & entertainment,0.00800000,0,0,30 \n2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,windows,food & wine,0.00800000,0,0,30\n2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,0,0,0,android,architecture,0.00800000,0,0,30\n2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs19520db1,cri9086c13f,Sample Creative 3,Test creative 3,https://example.com,1,0,0,0,0,android,crypto,0.00800000,0,0,30 \n2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,android,gaming,0.00800000,0,0,30\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var a=i(7294);const r={},t=a.createContext(r);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);