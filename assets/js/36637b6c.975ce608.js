"use strict";(self.webpackChunkbrave_ads_docs=self.webpackChunkbrave_ads_docs||[]).push([[115],{4615:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"campaign-performance/reporting","title":"Reporting","description":"Brave Ads is built from the ground up to support the highest privacy standards. By default, the Brave browser blocks third-party tracking including Google Analytics, Adobe Analytics, and other third-party reporting and measurement vendors. While Brave Ads respects (and does not collect) user data, it also gives advertisers useful, granular reporting on campaign performance data in a simple, easy-to-read dashboard. It also enables marketers to see campaign performance using their own reporting systems.","source":"@site/docs/campaign-performance/reporting.md","sourceDirName":"campaign-performance","slug":"/campaign-performance/reporting","permalink":"/campaign-performance/reporting","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Ad targeting","permalink":"/campaign-performance/targeting"},"next":{"title":"Status indicators","permalink":"/campaign-performance/status"}}');var i=r(4848),t=r(8453);const a={sidebar_position:2},o="Reporting",d={},l=[{value:"Is my reporting blocked by Brave Browser?",id:"is-my-reporting-blocked-by-brave-browser",level:2},{value:"Brave Ads Manager reporting",id:"brave-ads-manager-reporting",level:2},{value:"Available reporting metrics in Brave Ads Manager",id:"available-reporting-metrics-in-brave-ads-manager",level:3},{value:"Conversion reporting in Brave Ads Manager",id:"conversion-reporting-in-brave-ads-manager",level:2},{value:"Limitations",id:"limitations",level:3},{value:"Choosing an effective conversion URL",id:"choosing-an-effective-conversion-url",level:3},{value:"Advanced use of wildcard variables in conversion URLs",id:"advanced-use-of-wildcard-variables-in-conversion-urls",level:3},{value:"Advanced controls for attribution",id:"advanced-controls-for-attribution",level:3},{value:"Independent reporting (first-party)",id:"independent-reporting-first-party",level:2},{value:"Unique landing page URL/click tracking parameters",id:"unique-landing-page-urlclick-tracking-parameters",level:3},{value:"Referral/promo code",id:"referralpromo-code",level:3},{value:"Query string parameters and first-party cookies (i.e. UTMs)",id:"query-string-parameters-and-first-party-cookies-ie-utms",level:3},{value:"Clickthrough URL (UTM parameters)",id:"clickthrough-url-utm-parameters",level:5},{value:"Clickthrough URL (query string parameters)",id:"clickthrough-url-query-string-parameters",level:5},{value:"Verifiable Ad Conversions (VAC)",id:"verifiable-ad-conversions-vac",level:2},{value:"Conversion event ID details",id:"conversion-event-id-details",level:3},{value:"Requirements:",id:"requirements",level:3},{value:"Implementation options",id:"implementation-options",level:3},{value:"URL Pattern",id:"url-pattern",level:4},{value:"DOM Element Pattern",id:"dom-element-pattern",level:4},{value:"Brand lift studies",id:"brand-lift-studies",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"reporting",children:"Reporting"})}),"\n",(0,i.jsx)(n.p,{children:"Brave Ads is built from the ground up to support the highest privacy standards. By default, the Brave browser blocks third-party tracking including Google Analytics, Adobe Analytics, and other third-party reporting and measurement vendors. While Brave Ads respects (and does not collect) user data, it also gives advertisers useful, granular reporting on campaign performance data in a simple, easy-to-read dashboard. It also enables marketers to see campaign performance using their own reporting systems."}),"\n",(0,i.jsx)(n.h2,{id:"is-my-reporting-blocked-by-brave-browser",children:"Is my reporting blocked by Brave Browser?"}),"\n",(0,i.jsx)(n.p,{children:"The first step is to understand what is being blocked by the Brave browser. To do so, open Brave on your desktop and navigate to your business site or campaign landing page and follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Click on the Brave lion icon on the right side of the address bar."}),"\n",(0,i.jsx)(n.li,{children:"Expand the \u201cAdvanced Control\u201d menu."}),"\n",(0,i.jsx)(n.li,{children:"Click the purple number located next to \u201cBlock Trackers and Ads\u2019\u2019 to display what is currently being blocked."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Blocked scripts will disable most, if not all, functions for third-party tracking. Here's a helpful table with examples of different tracking scenarios and their compatibility with Brave Ads:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Sample scenarios"}),(0,i.jsxs)(n.th,{children:["Sample endpoint for ",(0,i.jsx)(n.a,{href:"http://www.example.com",children:"www.example.com"})]}),(0,i.jsx)(n.th,{children:"Compatible with  Brave Ads"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Custom Website Analytics (first-party)"}),(0,i.jsx)(n.td,{children:"analytics.example.com"}),(0,i.jsx)(n.td,{children:"YES"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Google Analytics 4 (first-party)"}),(0,i.jsx)(n.td,{children:"analytics.example.com"}),(0,i.jsx)(n.td,{children:"YES"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Adobe Analytics (first-party)"}),(0,i.jsx)(n.td,{children:"analytics.example.com"}),(0,i.jsx)(n.td,{children:"YES"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Google Analytics 4 (hosted by Google)"}),(0,i.jsx)(n.td,{children:"google.com"}),(0,i.jsx)(n.td,{children:"NO"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Adobe Analytics (hosted by Adobe)"}),(0,i.jsx)(n.td,{children:"adobe.com"}),(0,i.jsx)(n.td,{children:"NO"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"brave-ads-manager-reporting",children:"Brave Ads Manager reporting"}),"\n",(0,i.jsx)(n.p,{children:"Whether your campaign is purchased via Managed Service or Self-Service, all advertisers will have access to the Brave Ads reporting dashboard to report on the performance of campaigns. Campaign dashboards update hourly with the option to export reporting for Notification and Newsfeed ad campaigns on demand."}),"\n",(0,i.jsx)(n.h3,{id:"available-reporting-metrics-in-brave-ads-manager",children:"Available reporting metrics in Brave Ads Manager"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Metric"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Search ads"}),(0,i.jsx)(n.th,{children:"New Tab Takeover"}),(0,i.jsx)(n.th,{children:"Newsfeed ads"}),(0,i.jsx)(n.th,{children:"Notification ads"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Impressions"}),(0,i.jsx)(n.td,{children:"Counted when an ad is displayed on screen for a minimum of one second."}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Clicks"}),(0,i.jsx)(n.td,{children:"Counted when a user clicks on the ad. Does not include clicks to dismiss."}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Dismissed"}),(0,i.jsx)(n.td,{children:"Counted when a user clicks the \u201cclose\u201d or \u201cx\u201d button to make an ad go away."}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Site visits"}),(0,i.jsx)(n.td,{children:"Counted when the user clicks an ad and spends at least 5 seconds on the advertiser's website, with the website open in an active browser tab. The 5 seconds must be spent on the site after arriving by clicking the ad link, and the tab must remain open and active the entire time for the visit to count."}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Upvotes & downvotes"}),(0,i.jsx)(n.td,{children:"Counted when a user either upvotes or downvotes an ad in their ad history."}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"X"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Conversions"}),(0,i.jsx)(n.td,{children:"Sum total of all conversions, including anonymous conversions without a specified click or view attribution. Counted when a user reaches a designated conversion landing page."}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Click-through conversions"}),(0,i.jsx)(n.td,{children:"Counted when a user reaches a designated conversion landing page following an impression and click of the ad."}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"View-through conversions"}),(0,i.jsx)(n.td,{children:"Counted when a user reaches a designated conversion landing page following an ad impression."}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CTR"}),(0,i.jsx)(n.td,{children:"The click-through rate is a percentage expressing clicks relative to impressions."}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SVR"}),(0,i.jsx)(n.td,{children:"The site-visit rate is a percentage expressing site-visits relative to impressions."}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CPA"}),(0,i.jsx)(n.td,{children:"The cost-per-action found by dividing the total cost of the campaign by the number of conversions."}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Dismissal rate"}),(0,i.jsx)(n.td,{children:"A percentage expressing dismissed ads relative to impressions."}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"X"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Spend"}),(0,i.jsx)(n.td,{children:"Budget that has been spent by the platform."}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"}),(0,i.jsx)(n.td,{children:"X"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"conversion-reporting-in-brave-ads-manager",children:"Conversion reporting in Brave Ads Manager"}),"\n",(0,i.jsx)(n.p,{children:"Conversion reporting in Brave Ads Manager allows advertisers to define a conversion event on their ad campaigns with Brave by using a URL that indicates when a user reaches a certain stage of the customer journey.\xa0"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key points"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Conversions are counted when a Brave user who interacted with your ad visits a specific page on your website."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Measurement is possible because Brave functions as both the browser and ad-server.\xa0"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The process occurs entirely at the browser level, eliminating the need for cookies, tags, or tracking scripts on your website.\xa0"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Conversion page URLs ",(0,i.jsx)(n.strong,{children:"must"})," follow these conditions in order to be approved:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Be on the same eTLD+1 as the email domain used","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For example, if my email address is ",(0,i.jsx)(n.code,{children:"admin@example.com"}),", I can set the conversion URL as a page on ",(0,i.jsx)(n.code,{children:"https://example.com"})," or a sub-domain of that website, such as ",(0,i.jsx)(n.code,{children:"https://shop.example.com"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Brave may not be able to count the conversion if a user exits the Brave browser (e.g., when visiting third-party apps like app stores). In such cases, advertisers should use additional independent reporting methods provided by the third-parties."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"choosing-an-effective-conversion-url",children:"Choosing an effective conversion URL"}),"\n",(0,i.jsx)(n.p,{children:"Using a conversion URL provides a more accurate measure of ad effectiveness than simply tracking visits to the homepage.\xa0"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Key Points:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use a URL pattern that avoids false positives.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Don't use your base website URL as the conversion URL.\xa0","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Clicks and site visits are already counted by default for all Brave Ads campaigns."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Choose a URL that represents a deeper action on your website, such as:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sign-up completion page"}),"\n",(0,i.jsx)(n.li,{children:"Email subscription welcome page"}),"\n",(0,i.jsxs)(n.li,{children:["Purchase confirmation page","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For example, on an ad campaign for ",(0,i.jsx)(n.code,{children:"https://shoestore.com"}),", an effective conversion URL would be: ",(0,i.jsx)(n.code,{children:"https://shoestore.com/check-out/thank-you*"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["As a rule of thumb, all conversion URLs should end in wildcard variables to account for any additional query parameters that might risk disrupting the conversion counting process.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["An asterisk (*) can be used as the wildcard variable in your conversion URL that will tell Brave Ads to treat that position in the URL as any possible value. This can be used in a variety of situations where conversion website URLs follow similar paths but include different values, such as product directories or unique order IDs.\xa0","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For example, building on the above example, ",(0,i.jsx)(n.code,{children:"https://shoestore.com/check-out/thank-you*"})," would effectively capture any URL that is the same leading up to the wildcard variable, such as ",(0,i.jsx)(n.code,{children:"https://shoestore.com/check-out/thank-you/orderID=63551"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"advanced-use-of-wildcard-variables-in-conversion-urls",children:"Advanced use of wildcard variables in conversion URLs"}),"\n",(0,i.jsxs)(n.p,{children:["Wildcard values can be placed anywhere in the sub-path of the URL, including in-between path sections. Here are some examples using a hypothetical shoe store, ",(0,i.jsx)(n.code,{children:"https://shoestore.com"}),", that categorizes their available shoes by category, type, and color across their website. Their pages are thus all structured using the following format: ",(0,i.jsx)(n.code,{children:"https://shoestore.com/category/type/color/"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Example 1: This conversion URL will count visits to pages in the \u201crunning-shoes\u201d directory categorized as \u201cmens\u201d: ",(0,i.jsx)(n.code,{children:"https://shoestore.com/running-shoes/*/mens*"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In this case, the first asterisk represents any type, while the second is the trailing wildcard recommended on all conversion URLs."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Example 2: This conversion URL will count visits to pages for any shoes that are \u201cchildrens\u201d: ",(0,i.jsx)(n.code,{children:"https://shoestore.com/*/childrens/*"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In this case, the first asterisk represents the subpaths for any shoe category. The second asterisk acts both as the shoe color, and also fulfills the role of the recommended trailing wildcard."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"advanced-controls-for-attribution",children:"Advanced controls for attribution"}),"\n",(0,i.jsx)(n.p,{children:"When setting up a conversion URL in Brave, you\u2019ll be asked to pick an observation window, also known as a look-back window, which determines how long after an ad view (or click) should a conversion be attributed to the ad campaign. This can be set for 1, 7, or 30 days, where 1-day will capture the fewest conversions and 30-day will capture the most."}),"\n",(0,i.jsx)(n.p,{children:"Conversions in Brave Ads Manager are represented via three metrics to provide you with a clearer understanding of ad impact:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Conversions"}),": The sum of post-view and post-click conversions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Post-click conversions"})," (Click-through): counted when the user converts after clicking the ad."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Post-view conversions"})," (View-through): counted when the user sees an ad but does not click it and later returns to the website."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"independent-reporting-first-party",children:"Independent reporting (first-party)"}),"\n",(0,i.jsx)(n.p,{children:"In addition to reporting offered via the Brave dashboard, you can use a combination of the following methods to accurately and independently verify the results of your Brave Ads campaign:"}),"\n",(0,i.jsx)(n.h3,{id:"unique-landing-page-urlclick-tracking-parameters",children:"Unique landing page URL/click tracking parameters"}),"\n",(0,i.jsx)(n.p,{children:"A unique landing page is a great option to count traffic through your site\u2019s server logs or first-party analytics dashboard. By creating a dedicated landing page URL (like domain.com/brave) for the campaign and ensuring it\u2019s used only for Brave Ads campaigns, traffic to and from this page can be attributed to paid campaigns with Brave."}),"\n",(0,i.jsx)(n.h3,{id:"referralpromo-code",children:"Referral/promo code"}),"\n",(0,i.jsx)(n.p,{children:"A referral or promo code (e.g. brave15) can be used at the time of checkout to report on conversions attributed to your campaign. We recommend the referral or promo code is automatically populated so users don\u2019t forget. Using your platform\u2019s reporting, you can then view the number of conversions that have used the promo or referral code."}),"\n",(0,i.jsx)(n.h3,{id:"query-string-parameters-and-first-party-cookies-ie-utms",children:"Query string parameters and first-party cookies (i.e. UTMs)"}),"\n",(0,i.jsx)(n.p,{children:"Click URL tracking parameters are allowed, but only when used in a way that your web server or web application can detect. Using third-party reporting such as Google Analytics will not show accurate data. Please note, only direct URLs are allowed for the click link\u2014no redirects."}),"\n",(0,i.jsx)(n.h5,{id:"clickthrough-url-utm-parameters",children:"Clickthrough URL (UTM parameters)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:"https://example.com/product?utm_source=brave&utm_medium=push_notification&utm_campaign=test"})]}),"\n",(0,i.jsxs)(n.li,{children:["Landing page:",(0,i.jsx)(n.code,{children:"https://example.com/product"})]}),"\n",(0,i.jsxs)(n.li,{children:["Query string parameters (UTM): ",(0,i.jsx)(n.code,{children:"utm_source=brave&utm_medium=push_notification&utm_campaign=test"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"clickthrough-url-query-string-parameters",children:"Clickthrough URL (query string parameters)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:"https://example.com/product?ref=brave&type=push_notification&campaign=test"})]}),"\n",(0,i.jsxs)(n.li,{children:["Landing page: ",(0,i.jsx)(n.code,{children:"https://example.com/product"})]}),"\n",(0,i.jsxs)(n.li,{children:["Query string parameters: ",(0,i.jsx)(n.code,{children:"ref=brave&type=push_notification&campaign=test"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Parse values and set first-party cookies based on the query string parameters from the clickthrough URL. This entire query string can be set as the value or parsed into individual key value pairs.\nWhen the same user lands from a different channel, your same code snippet can append or overwrite the cookie values with the new parameter values depending on your preference.\nWhen the user completes the expected action and a network request is made back to your servers, the cookies should be attached to the request headers and you can see that a user has come from a Brave Ads campaign."}),"\n",(0,i.jsx)(n.h2,{id:"verifiable-ad-conversions-vac",children:"Verifiable Ad Conversions (VAC)"}),"\n",(0,i.jsx)(n.p,{children:"Verifiable Ad Conversions (VAC) is an optional feature-set of Brave Ads Conversion Reporting. VAC provides Brave advertisers with the ability to determine their return on ad spend by privately reporting encrypted Conversion IDs. Advertisers can then audit the list of encrypted Conversion IDs to verify that the converted user can be attributed to a Brave Ads campaign."}),"\n",(0,i.jsx)(n.p,{children:"When an eligible user lands on the Conversion Page, a process is invoked that enables the advertiser to account for the specific transaction event, while maintaining user privacy and anonymity. Not even Brave can read or learn anything about that event (aside from the anonymously reported conversion event count). This enables privacy from end-to-end and allows users to feel better about their Conversion Event, knowing that no one can learn anything from the conversion."}),"\n",(0,i.jsx)(n.p,{children:"Advertisers who choose to use VAC will generate a public-private key pair in the Account Settings of the Brave Ads interface. Brave will retain the public key, sign the Conversion ID with it, and report the encrypted Conversion ID. Only the Advertiser will have the private key, and only the advertiser will be able to decrypt the encrypted Conversion ID."}),"\n",(0,i.jsx)(n.p,{children:"It\u2019s crucial that the advertiser does not lose their private key for Verifiable Ad Conversions."}),"\n",(0,i.jsx)(n.h3,{id:"conversion-event-id-details",children:"Conversion event ID details"}),"\n",(0,i.jsx)(n.p,{children:"Verifiable Ad Conversion Reporting is done by a Conversion ID. For your site, this may be an order number, a transaction ID, or something similar."}),"\n",(0,i.jsx)(n.h3,{id:"requirements",children:"Requirements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Conversion ID value must be unique for each conversion. Duplicate Conversion Event ID values will result in accounting discrepancies."}),"\n",(0,i.jsxs)(n.li,{children:["The Conversion ID must be between 1\u201330 characters long, contain only alphanumeric characters (as well as dashes), and match this regular expression: ",(0,i.jsx)(n.code,{children:" [-a-zA-Z0-9]{1,30}"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Event values longer than 30 characters will fail, preventing the event from being accurately accounted for. You may check if your identifier is valid by using a site like ",(0,i.jsx)(n.code,{children:"https://regex101.com/"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Conversion IDs must not include user identifiers or personally identifying information. For example, Conversion IDs like the following are not permitted: ",(0,i.jsx)(n.code,{children:"<user id>-<random id>"}),", ",(0,i.jsx)(n.code,{children:"<random id>-<email address>"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Brave uses TweetNacl to encrypt the Conversion ID."}),"\n",(0,i.jsx)(n.p,{children:"Encrypted Conversion Envelopes will look like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n "alg": "crypto_box_curve25519xsalsa20poly1305",\n "ciphertext": "BTX6xKZ4vITaWa11EMcly7gyQ3rN8JoAYvoHeIiYuSS9Lsc4GUQBN54+otIGOsxk",\n "epk": "3N1RKgiOvOXCGjO6txtEwR0DzpEp9U+PkbpwxAkAGwg=",\n "nonce": "N4EH/upCXxyRPLmYLvYCyuaKQASlA6Qo"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"implementation-options",children:"Implementation options"}),"\n",(0,i.jsx)(n.p,{children:"Brave provides two implementation options for Verifiable Conversions using a URL pattern or DOM element pattern."}),"\n",(0,i.jsx)(n.h4,{id:"url-pattern",children:"URL Pattern"}),"\n",(0,i.jsx)(n.p,{children:"An advertiser has a Conversion ID that is present as a query string parameter in the Conversion Page URL pattern. The advertiser must provide Brave with the query string key that identifies the Conversion ID."}),"\n",(0,i.jsx)(n.p,{children:"When an eligible user lands on the Conversion Page URL, Brave will:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Record a conversion event"}),"\n",(0,i.jsx)(n.li,{children:"Parse the URL for the query string key that identifies the Conversion ID"}),"\n",(0,i.jsx)(n.li,{children:"Encrypt and record the Conversion ID"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Take, for example, the following Conversion Page URL: ",(0,i.jsx)(n.a,{href:"https://example.com/checkout?order=ABC-12345-xyz",children:"https://example.com/checkout?order=ABC-12345-xyz"}),". Brave will look for the query string key order and encrypt the value ",(0,i.jsx)(n.code,{children:"ABC-12345-xyz"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"dom-element-pattern",children:"DOM Element Pattern"}),"\n",(0,i.jsx)(n.p,{children:"An advertiser has a Conversion ID that is present in the Document Object Model (DOM) of the Conversion Page URL."}),"\n",(0,i.jsx)(n.p,{children:"The advertiser must provide Brave with the DOM element that uniquely identifies the Conversion ID on the page. When an eligible user lands on the Conversion Page URL, Brave will:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Record a conversion event"}),"\n",(0,i.jsx)(n.li,{children:"Parse the DOM for the regex pattern that identifies the Conversion ID"}),"\n",(0,i.jsx)(n.li,{children:"Encrypt and record the Conversion ID"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Take, for example, the following DOM element: ",(0,i.jsx)(n.code,{children:"<div class='order-id-value'>Your Order ID: ABC-12345-xyz</div>"}),". Brave will look for this pattern ",(0,i.jsx)(n.code,{children:"Your Order ID:.*"}),", set a capture group ",(0,i.jsx)(n.code,{children:"([-a-zA-Z0-9]*)"})," and encrypt the value ",(0,i.jsx)(n.code,{children:"ABC-12345-xyz"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"brand-lift-studies",children:"Brand lift studies"}),"\n",(0,i.jsx)(n.p,{children:"Brave brand lift studies consist of pre-post research polls conducted via Brave to help advertisers better measure the impact of their ad campaigns beyond media metrics like impressions or clicks. Studies typically measure brand awareness or consideration, but can also measure growth in product understanding or other effects based on paid media spend with Brave."}),"\n",(0,i.jsx)(n.p,{children:"Prior to campaign launch, advertisers provide Brave with a series of questions structured into a survey and distributed via Brave Ads to a targeting profile that matches the ad campaign. After the campaign, the same set of questions (and additional questions that measure ad recall) will be fielded."}),"\n",(0,i.jsx)(n.p,{children:"The pre- and post-campaign survey results are compared to gauge the impact of the advertising. Here are some examples of questions that may be fielded during a study:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Brand awareness"}),": Have you heard of \u201cadvertiser name\u201d before?"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Ad recall"}),": Have you seen an ad for \u201cadvertiser name\u201d in the past week?"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Product consideration"}),": How likely are you to shop for \u201cproduct name\u201d in the next several months?"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Studies can run independent of spend for a fixed cost, but may also be included as a bonus on a per-campaign basis for spends above a specified threshold. Get in touch with our sales team to learn more."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var s=r(6540);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);