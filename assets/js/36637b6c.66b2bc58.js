"use strict";(self.webpackChunkbrave_ads_docs=self.webpackChunkbrave_ads_docs||[]).push([[869],{3172:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=n(5893),i=n(1151);const s={sidebar_position:2},a="Reporting",o={id:"campaign-performance/reporting",title:"Reporting",description:"Brave Ads is built from the ground up to support the highest privacy standards. By default, the Brave browser blocks third-party tracking including Google Analytics, Adobe Analytics, and other third-party reporting and measurement vendors. While Brave Ads respects (and does not collect) user data, it also gives advertisers useful, granular reporting on campaign performance data in a simple, easy-to-read dashboard. It also enables marketers to see campaign performance using their own reporting systems.",source:"@site/docs/campaign-performance/reporting.md",sourceDirName:"campaign-performance",slug:"/campaign-performance/reporting",permalink:"/campaign-performance/reporting",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Ad targeting",permalink:"/campaign-performance/targeting"},next:{title:"Status indicators",permalink:"/campaign-performance/status"}},d={},l=[{value:"Is my reporting blocked?",id:"is-my-reporting-blocked",level:2},{value:"Brave Ads Manager reporting",id:"brave-ads-manager-reporting",level:2},{value:"Available reporting metrics in Brave Ads Manager",id:"available-reporting-metrics-in-brave-ads-manager",level:3},{value:"Conversion reporting in Brave Ads Manager",id:"conversion-reporting-in-brave-ads-manager",level:3},{value:"Independent reporting (first-party)",id:"independent-reporting-first-party",level:2},{value:"Unique landing page URL/click tracking parameters",id:"unique-landing-page-urlclick-tracking-parameters",level:3},{value:"Referral/promo code",id:"referralpromo-code",level:3},{value:"Query string parameters and first-party cookies (i.e. UTMs)",id:"query-string-parameters-and-first-party-cookies-ie-utms",level:3},{value:"Clickthrough URL (UTM parameters)",id:"clickthrough-url-utm-parameters",level:5},{value:"Clickthrough URL (query string parameters)",id:"clickthrough-url-query-string-parameters",level:5},{value:"Verifiable Ad Conversions (VAC)",id:"verifiable-ad-conversions-vac",level:2},{value:"Conversion event ID details",id:"conversion-event-id-details",level:3},{value:"Requirements:",id:"requirements",level:3},{value:"Implementation options",id:"implementation-options",level:3},{value:"URL Pattern",id:"url-pattern",level:4},{value:"DOM Element Pattern",id:"dom-element-pattern",level:4},{value:"Brand lift studies",id:"brand-lift-studies",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"reporting",children:"Reporting"}),"\n",(0,t.jsx)(r.p,{children:"Brave Ads is built from the ground up to support the highest privacy standards. By default, the Brave browser blocks third-party tracking including Google Analytics, Adobe Analytics, and other third-party reporting and measurement vendors. While Brave Ads respects (and does not collect) user data, it also gives advertisers useful, granular reporting on campaign performance data in a simple, easy-to-read dashboard. It also enables marketers to see campaign performance using their own reporting systems."}),"\n",(0,t.jsx)(r.h2,{id:"is-my-reporting-blocked",children:"Is my reporting blocked?"}),"\n",(0,t.jsx)(r.p,{children:"The first step is to understand what is being blocked by the Brave browser. To do so, open Brave on your desktop and navigate to your business site or campaign landing page and follow these steps:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Click on the Brave lion icon on the right side of the address bar."}),"\n",(0,t.jsx)(r.li,{children:"Expand the \u201cAdvanced Control\u201d menu."}),"\n",(0,t.jsx)(r.li,{children:"Click the purple number located next to \u201cBlock Trackers and Ads\u2019\u2019 to display what is currently being blocked."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Blocked scripts will disable most, if not all, functions for third-party tracking."}),"\n",(0,t.jsx)(r.h2,{id:"brave-ads-manager-reporting",children:"Brave Ads Manager reporting"}),"\n",(0,t.jsx)(r.p,{children:"Whether your campaign is purchased via Managed Service or Self-Service, all advertisers will have access to the Brave Ads reporting dashboard to report on the performance of campaigns. Campaign dashboards update hourly with the option to export reporting for Notification and Newsfeed ad campaigns on demand."}),"\n",(0,t.jsx)(r.h3,{id:"available-reporting-metrics-in-brave-ads-manager",children:"Available reporting metrics in Brave Ads Manager"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Metric"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Search ads"}),(0,t.jsx)(r.th,{children:"New tab takeover"}),(0,t.jsx)(r.th,{children:"Newsfeed ads"}),(0,t.jsx)(r.th,{children:"Notification ads"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Impressions"}),(0,t.jsx)(r.td,{children:"Counted when an ad is displayed on screen for a minimum of one second."}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Clicks"}),(0,t.jsx)(r.td,{children:"Counted when a user clicks on the ad. Does not include clicks to dismiss."}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Dismissed"}),(0,t.jsx)(r.td,{children:"Counted when a user clicks the \u201cclose\u201d or \u201cx\u201d button to make an ad go away."}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Site visits"}),(0,t.jsx)(r.td,{children:"Counted when the user clicks an ad and spends at least 5 seconds on the advertiser's website, with the website open in an active browser tab. The 5 seconds must be spent on the site after arriving by clicking the ad link, and the tab must remain open and active the entire time for the visit to count."}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Upvotes & downvotes"}),(0,t.jsx)(r.td,{children:"Counted when a user either upvotes or downvotes an ad in their ad history."}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"X"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Conversions"}),(0,t.jsx)(r.td,{children:"Sum total of all conversions, including anonymous conversions without a specified click or view attribution. Counted when a user reaches a designated conversion landing page."}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Click-through conversions"}),(0,t.jsx)(r.td,{children:"Counted when a user reaches a designated conversion landing page following an impression and click of the ad."}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"View-through conversions"}),(0,t.jsx)(r.td,{children:"Counted when a user reaches a designated conversion landing page following an ad impression."}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CTR"}),(0,t.jsx)(r.td,{children:"The click-through rate is a percentage expressing clicks relative to impressions."}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SVR"}),(0,t.jsx)(r.td,{children:"The site-visit rate is a percentage expressing site-visits relative to impressions."}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CPA"}),(0,t.jsx)(r.td,{children:"The cost-per-action found by dividing the total cost of the campaign by the number of conversions."}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Dismissal rate"}),(0,t.jsx)(r.td,{children:"A percentage expressing dismissed ads relative to impressions."}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"X"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Spend"}),(0,t.jsx)(r.td,{children:"Budget used to buy ads."}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"}),(0,t.jsx)(r.td,{children:"X"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"conversion-reporting-in-brave-ads-manager",children:"Conversion reporting in Brave Ads Manager"}),"\n",(0,t.jsx)(r.p,{children:"We strongly recommend including conversion reporting for your Brave campaign. Because Brave ads are delivered via the browser, we are able to report on conversions (signups, orders, etc.) attributed to the campaign using a URL. To include conversion reporting in the Brave Dashboard, please provide a conversion confirmation page URL so Brave can map the event back to the campaign."}),"\n",(0,t.jsxs)(r.p,{children:["The conversion page URL can have a \u201cwildcard\u201d in the URL path or query-strings to ignore any strings that may be variable. For example, ",(0,t.jsx)(r.a,{href:"https://example.com/checkout?order=12345/thankyou",children:"https://example.com/checkout?order=12345/thankyou"})," can be expressed for all checkouts as: ",(0,t.jsx)(r.a,{href:"https://example.com/checkout?order=*/thankyou",children:"https://example.com/checkout?order=*/thankyou"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"independent-reporting-first-party",children:"Independent reporting (first-party)"}),"\n",(0,t.jsx)(r.p,{children:"In addition to reporting offered via the Brave dashboard, you can use a combination of the following methods to accurately and independently verify the results of your Brave Ads campaign:"}),"\n",(0,t.jsx)(r.h3,{id:"unique-landing-page-urlclick-tracking-parameters",children:"Unique landing page URL/click tracking parameters"}),"\n",(0,t.jsx)(r.p,{children:"A unique landing page is a great option to count traffic through your site\u2019s server logs or first-party analytics dashboard. By creating a dedicated landing page URL (like domain.com/brave) for the campaign and ensuring it\u2019s used only for Brave Ads campaigns, traffic to and from this page can be attributed to paid campaigns with Brave."}),"\n",(0,t.jsx)(r.h3,{id:"referralpromo-code",children:"Referral/promo code"}),"\n",(0,t.jsx)(r.p,{children:"A referral or promo code (e.g. brave15) can be used at the time of checkout to report on conversions attributed to your campaign. We recommend the referral or promo code is automatically populated so users don\u2019t forget. Using your platform\u2019s reporting, you can then view the number of conversions that have used the promo or referral code."}),"\n",(0,t.jsx)(r.h3,{id:"query-string-parameters-and-first-party-cookies-ie-utms",children:"Query string parameters and first-party cookies (i.e. UTMs)"}),"\n",(0,t.jsx)(r.p,{children:"Click URL tracking parameters are allowed, but only when used in a way that your web server or web application can detect. Using third-party reporting such as Google Analytics will not show accurate data. Please note, only direct URLs are allowed for the click link\u2014no redirects."}),"\n",(0,t.jsx)(r.h5,{id:"clickthrough-url-utm-parameters",children:"Clickthrough URL (UTM parameters)"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Example: ",(0,t.jsx)(r.code,{children:"https://example.com/product?utm_source=brave&utm_medium=push_notification&utm_campaign=test"})]}),"\n",(0,t.jsxs)(r.li,{children:["Landing page:",(0,t.jsx)(r.code,{children:"https://example.com/product"})]}),"\n",(0,t.jsxs)(r.li,{children:["Query string parameters (UTM): ",(0,t.jsx)(r.code,{children:"utm_source=brave&utm_medium=push_notification&utm_campaign=test"})]}),"\n"]}),"\n",(0,t.jsx)(r.h5,{id:"clickthrough-url-query-string-parameters",children:"Clickthrough URL (query string parameters)"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Example: ",(0,t.jsx)(r.code,{children:"https://example.com/product?ref=brave&type=push_notification&campaign=test"})]}),"\n",(0,t.jsxs)(r.li,{children:["Landing page: ",(0,t.jsx)(r.code,{children:"https://example.com/product"})]}),"\n",(0,t.jsxs)(r.li,{children:["Query string parameters: ",(0,t.jsx)(r.code,{children:"ref=brave&type=push_notification&campaign=test"})]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Parse values and set first-party cookies based on the query string parameters from the clickthrough URL. This entire query string can be set as the value or parsed into individual key value pairs.\nWhen the same user lands from a different channel, your same code snippet can append or overwrite the cookie values with the new parameter values depending on your preference.\nWhen the user completes the expected action and a network request is made back to your servers, the cookies should be attached to the request headers and you can see that a user has come from a Brave Ads campaign."}),"\n",(0,t.jsx)(r.h2,{id:"verifiable-ad-conversions-vac",children:"Verifiable Ad Conversions (VAC)"}),"\n",(0,t.jsx)(r.p,{children:"Verifiable Ad Conversions (VAC) is an optional feature-set of Brave Ads Conversion Reporting. VAC provides Brave advertisers with the ability to determine their return on ad spend by privately reporting encrypted Conversion IDs. Advertisers can then audit the list of encrypted Conversion IDs to verify that the converted user can be attributed to a Brave Ads campaign."}),"\n",(0,t.jsx)(r.p,{children:"When an eligible user lands on the Conversion Page, a process is invoked that enables the advertiser to account for the specific transaction event, while maintaining user privacy and anonymity. Not even Brave can read or learn anything about that event (aside from the anonymously reported conversion event count). This enables privacy from end-to-end and allows users to feel better about their Conversion Event, knowing that no one can learn anything from the conversion."}),"\n",(0,t.jsx)(r.p,{children:"Advertisers who choose to use VAC will generate a public-private key pair in the Account Settings of the Brave Ads interface. Brave will retain the public key, sign the Conversion ID with it, and report the encrypted Conversion ID. Only the Advertiser will have the private key, and only the advertiser will be able to decrypt the encrypted Conversion ID."}),"\n",(0,t.jsx)(r.p,{children:"It\u2019s crucial that the advertiser does not lose their private key for Verifiable Ad Conversions."}),"\n",(0,t.jsx)(r.h3,{id:"conversion-event-id-details",children:"Conversion event ID details"}),"\n",(0,t.jsx)(r.p,{children:"Verifiable Ad Conversion Reporting is done by a Conversion ID. For your site, this may be an order number, a transaction ID, or something similar."}),"\n",(0,t.jsx)(r.h3,{id:"requirements",children:"Requirements:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"The Conversion ID value must be unique for each conversion. Duplicate Conversion Event ID values will result in accounting discrepancies."}),"\n",(0,t.jsxs)(r.li,{children:["The Conversion ID must be between 1\u201330 characters long, contain only alphanumeric characters (as well as dashes), and match this regular expression: ",(0,t.jsx)(r.code,{children:" [-a-zA-Z0-9]{1,30}."})]}),"\n",(0,t.jsxs)(r.li,{children:["Event values longer than 30 characters will fail, preventing the event from being accurately accounted for. You may check if your identifier is valid by using a site like ",(0,t.jsx)(r.a,{href:"https://regex101.com/",children:"https://regex101.com/"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Conversion IDs must not include user identifiers or personally identifying information. For example, Conversion IDs like the following are not permitted: ",(0,t.jsx)(r.code,{children:"<user id>-<random id>"}),", ",(0,t.jsx)(r.code,{children:"<random id>-<email address>"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Brave uses TweetNacl to encrypt the Conversion ID."}),"\n",(0,t.jsx)(r.p,{children:"Encrypted Conversion Envelopes will look like:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n "alg": "crypto_box_curve25519xsalsa20poly1305",\n "ciphertext": "BTX6xKZ4vITaWa11EMcly7gyQ3rN8JoAYvoHeIiYuSS9Lsc4GUQBN54+otIGOsxk",\n "epk": "3N1RKgiOvOXCGjO6txtEwR0DzpEp9U+PkbpwxAkAGwg=",\n "nonce": "N4EH/upCXxyRPLmYLvYCyuaKQASlA6Qo"\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"implementation-options",children:"Implementation options"}),"\n",(0,t.jsx)(r.p,{children:"Brave provides two implementation options for Verifiable Conversions using a URL pattern or DOM element pattern."}),"\n",(0,t.jsx)(r.h4,{id:"url-pattern",children:"URL Pattern"}),"\n",(0,t.jsx)(r.p,{children:"An advertiser has a Conversion ID that is present as a query string parameter in the Conversion Page URL pattern. The advertiser must provide Brave with the query string key that identifies the Conversion ID."}),"\n",(0,t.jsx)(r.p,{children:"When an eligible user lands on the Conversion Page URL, Brave will:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Record a conversion event"}),"\n",(0,t.jsx)(r.li,{children:"Parse the URL for the query string key that identifies the Conversion ID"}),"\n",(0,t.jsx)(r.li,{children:"Encrypt and record the Conversion ID"}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Take, for example, the following Conversion Page URL: ",(0,t.jsx)(r.a,{href:"https://example.com/checkout?order=ABC-12345-xyz",children:"https://example.com/checkout?order=ABC-12345-xyz"}),". Brave will look for the query string key order and encrypt the value ",(0,t.jsx)(r.code,{children:"ABC-12345-xyz"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"dom-element-pattern",children:"DOM Element Pattern"}),"\n",(0,t.jsx)(r.p,{children:"An advertiser has a Conversion ID that is present in the Document Object Model (DOM) of the Conversion Page URL."}),"\n",(0,t.jsx)(r.p,{children:"The advertiser must provide Brave with the DOM element that uniquely identifies the Conversion ID on the page. When an eligible user lands on the Conversion Page URL, Brave will:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Record a conversion event"}),"\n",(0,t.jsx)(r.li,{children:"Parse the DOM for the regex pattern that identifies the Conversion ID"}),"\n",(0,t.jsx)(r.li,{children:"Encrypt and record the Conversion ID"}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Take, for example, the following DOM element: ",(0,t.jsx)(r.code,{children:"<div class='order-id-value'>Your Order ID: ABC-12345-xyz</div>"}),". Brave will look for this pattern ",(0,t.jsx)(r.code,{children:"Your Order ID:.*"}),", set a capture group ",(0,t.jsx)(r.code,{children:"([-a-zA-Z0-9]*)"})," and encrypt the value ",(0,t.jsx)(r.code,{children:"ABC-12345-xyz"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"brand-lift-studies",children:"Brand lift studies"}),"\n",(0,t.jsx)(r.p,{children:"Brave brand lift studies consist of pre-post research polls conducted via Brave to help advertisers better measure the impact of their ad campaigns beyond media metrics like impressions or clicks. Studies typically measure brand awareness or consideration, but can also measure growth in product understanding or other effects based on paid media spend with Brave."}),"\n",(0,t.jsx)(r.p,{children:"Prior to campaign launch, advertisers provide Brave with a series of questions structured into a survey and distributed via Brave Ads to a targeting profile that matches the ad campaign. After the campaign, the same set of questions (and additional questions that measure ad recall) will be fielded."}),"\n",(0,t.jsx)(r.p,{children:"The pre- and post-campaign survey results are compared to gauge the impact of the advertising. Here are some examples of questions that may be fielded during a study:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Brand awareness"}),": Have you heard of \u201cadvertiser name\u201d before?"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Ad recall"}),": Have you seen an ad for \u201cadvertiser name\u201d in the past week?"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Product consideration"}),": How likely are you to shop for \u201cproduct name\u201d in the next several months?"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Studies can run independent of spend for a fixed cost, but may also be included as a bonus on a per-campaign basis for spends above a specified threshold. Get in touch with our sales team to learn more."})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>a});var t=n(7294);const i={},s=t.createContext(i);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);