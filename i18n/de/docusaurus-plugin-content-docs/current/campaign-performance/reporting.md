---
sidebar_position: 2
---

# Reporting

Brave Ads is built from the ground up to support the highest privacy standards. By default, the Brave browser blocks third-party tracking including Google Analytics, Adobe Analytics, and other third-party reporting and measurement vendors. While Brave Ads respects (and does not collect) user data, it also gives advertisers useful, granular reporting on campaign performance data in a simple, easy-to-read dashboard. It also enables marketers to see campaign performance using their own reporting systems.

## Is my reporting blocked by Brave Browser?

The first step is to understand what is being blocked by the Brave browser. To do so, open Brave on your desktop and navigate to your business site or campaign landing page and follow these steps:

1. Click on the Brave lion icon on the right side of the address bar.
2. Expand the “Advanced Control” menu.
3. Click the purple number located next to “Block Trackers and Ads’’ to display what is currently being blocked.

Blocked scripts will disable most, if not all, functions for third-party tracking. Here's a helpful table with examples of different tracking scenarios and their compatibility with Brave Ads:

| Sample scenarios                                          | Sample endpoint for www.example.com | Compatible with  Brave Ads |
| --------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------- |
| Custom Website Analytics (first-party) | analytics.example.com               | YES                        |
| Google Analytics 4 (first-party)       | analytics.example.com               | YES                        |
| Adobe Analytics (first-party)          | analytics.example.com               | YES                        |
| Google Analytics 4 (hosted by Google)  | google.com                                          | NO                         |
| Adobe Analytics (hosted by Adobe)      | adobe.com                                           | NO                         |

## Brave Ads Manager reporting

Whether your campaign is purchased via Managed Service or Self-Service, all advertisers will have access to the Brave Ads reporting dashboard to report on the performance of campaigns. Campaign dashboards update hourly with the option to export reporting for Notification and Newsfeed ad campaigns on demand.

### Available reporting metrics in Brave Ads Manager

| Metric                                  | Description                                                                                                                                                                                                                                                                                                                                   | Search ads | New Tab Takeover | Newsfeed ads | Notification ads |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------- | ------------ | ---------------- |
| Impressions                             | Counted when an ad is displayed on screen for a minimum of one second.                                                                                                                                                                                                                                                        | X          | X                | X            | X                |
| Clicks                                  | Counted when a user clicks on the ad. Does not include clicks to dismiss.                                                                                                                                                                                                                                     | X          | X                | X            | X                |
| Dismissed                               | Counted when a user clicks the “close” or “x” button to make an ad go away.                                                                                                                                                                                                                                                   |            |                  | X            | X                |
| Site visits                             | Counted when the user clicks an ad and spends at least 5 seconds on the advertiser's website, with the website open in an active browser tab. The 5 seconds must be spent on the site after arriving by clicking the ad link, and the tab must remain open and active the entire time for the visit to count. |            |                  | X            | X                |
| Upvotes & downvotes | Counted when a user either upvotes or downvotes an ad in their ad history.                                                                                                                                                                                                                                                    |            |                  |              | X                |
| Conversions                             | Sum total of all conversions, including anonymous conversions without a specified click or view attribution. Counted when a user reaches a designated conversion landing page.                                                                                                                                |            |                  | X            | X                |
| Click-through conversions               | Counted when a user reaches a designated conversion landing page following an impression and click of the ad.                                                                                                                                                                                                                 |            |                  | X            | X                |
| View-through conversions                | Counted when a user reaches a designated conversion landing page following an ad impression.                                                                                                                                                                                                                                  |            |                  | X            | X                |
| CTR                                     | The click-through rate is a percentage expressing clicks relative to impressions.                                                                                                                                                                                                                                             | X          | X                | X            | X                |
| SVR                                     | The site-visit rate is a percentage expressing site-visits relative to impressions.                                                                                                                                                                                                                                           |            | X                | X            | X                |
| CPA                                     | The cost-per-action found by dividing the total cost of the campaign by the number of conversions.                                                                                                                                                                                                                            |            |                  | X            | X                |
| Dismissal rate                          | A percentage expressing dismissed ads relative to impressions.                                                                                                                                                                                                                                                                |            |                  |              | X                |
| Spend                                   | Budget that has been spent by the platform.                                                                                                                                                                                                                                                                                   | X          | X                | X            | X                |

## Conversion reporting in Brave Ads Manager

Conversion reporting in Brave Ads Manager allows advertisers to define a conversion event on their ad campaigns with Brave by using a URL that indicates when a user reaches a certain stage of the customer journey. 

**Key points**

- Conversions are counted when a Brave user who interacted with your ad visits a specific page on your website.

- Measurement is possible because Brave functions as both the browser and ad-server. 

- The process occurs entirely at the browser level, eliminating the need for cookies, tags, or tracking scripts on your website. 

### Limitations

- Conversion page URLs **must** follow these conditions in order to be approved:
  - Be on the same eTLD+1 as the email domain used
    - For example, if my email address is `admin@example.com`, I can set the conversion URL as a page on `https://example.com` or a sub-domain of that website, such as `https://shop.example.com`.
- Brave may not be able to count the conversion if a user exits the Brave browser (e.g., when visiting third-party apps like app stores). In such cases, advertisers should use additional independent reporting methods provided by the third-parties.

### Choosing an effective conversion URL

Using a conversion URL provides a more accurate measure of ad effectiveness than simply tracking visits to the homepage. 

**Key Points:**

- Use a URL pattern that avoids false positives.
  - Don't use your base website URL as the conversion URL. 
    - Clicks and site visits are already counted by default for all Brave Ads campaigns.
- Choose a URL that represents a deeper action on your website, such as:
  - Sign-up completion page
  - Email subscription welcome page
  - Purchase confirmation page
    - For example, on an ad campaign for `https://shoestore.com`, an effective conversion URL would be: `https://shoestore.com/check-out/thank-you*`
- As a rule of thumb, all conversion URLs should end in wildcard variables to account for any additional query parameters that might risk disrupting the conversion counting process.
  - An asterisk (\*) can be used as the wildcard variable in your conversion URL that will tell Brave Ads to treat that position in the URL as any possible value. This can be used in a variety of situations where conversion website URLs follow similar paths but include different values, such as product directories or unique order IDs.
    - For example, building on the above example, `https://shoestore.com/check-out/thank-you*` would effectively capture any URL that is the same leading up to the wildcard variable, such as `https://shoestore.com/check-out/thank-you/orderID=63551`

### Advanced use of wildcard variables in conversion URLs

Wildcard values can be placed anywhere in the sub-path of the URL, including in-between path sections. Here are some examples using a hypothetical shoe store, `https://shoestore.com`, that categorizes their available shoes by category, type, and color across their website. Their pages are thus all structured using the following format: `https://shoestore.com/category/type/color/`

- Example 1: This conversion URL will count visits to pages in the “running-shoes” directory categorized as “mens”: `https://shoestore.com/running-shoes/*/mens*`
  - In this case, the first asterisk represents any type, while the second is the trailing wildcard recommended on all conversion URLs.
- Example 2: This conversion URL will count visits to pages for any shoes that are “childrens”: `https://shoestore.com/*/childrens/*`
  - In this case, the first asterisk represents the subpaths for any shoe category. The second asterisk acts both as the shoe color, and also fulfills the role of the recommended trailing wildcard.

### Advanced controls for attribution

When setting up a conversion URL in Brave, you’ll be asked to pick an observation window, also known as a look-back window, which determines how long after an ad view (or click) should a conversion be attributed to the ad campaign. This can be set for 1, 7, or 30 days, where 1-day will capture the fewest conversions and 30-day will capture the most.

Conversions in Brave Ads Manager are represented via three metrics to provide you with a clearer understanding of ad impact:

- **Conversions**: The sum of post-view and post-click conversions.
- **Post-click conversions** (Click-through): counted when the user converts after clicking the ad.
- **Post-view conversions** (View-through): counted when the user sees an ad but does not click it and later returns to the website.

## Independent reporting (first-party)

In addition to reporting offered via the Brave dashboard, you can use a combination of the following methods to accurately and independently verify the results of your Brave Ads campaign:

### Unique landing page URL/click tracking parameters

A unique landing page is a great option to count traffic through your site’s server logs or first-party analytics dashboard. By creating a dedicated landing page URL (like domain.com/brave) for the campaign and ensuring it’s used only for Brave Ads campaigns, traffic to and from this page can be attributed to paid campaigns with Brave.

### Referral/promo code

A referral or promo code (e.g. brave15) can be used at the time of checkout to report on conversions attributed to your campaign. We recommend the referral or promo code is automatically populated so users don’t forget. Using your platform’s reporting, you can then view the number of conversions that have used the promo or referral code.

### Query string parameters and first-party cookies (i.e. UTMs)

Click URL tracking parameters are allowed, but only when used in a way that your web server or web application can detect. Using third-party reporting such as Google Analytics will not show accurate data. Please note, only direct URLs are allowed for the click link—no redirects.

##### Clickthrough URL (UTM parameters)

- Example: `https://example.com/product?utm_source=brave&utm_medium=push_notification&utm_campaign=test`
- Landing page:`https://example.com/product`
- Query string parameters (UTM): `utm_source=brave&utm_medium=push_notification&utm_campaign=test`

##### Clickthrough URL (query string parameters)

- Example: `https://example.com/product?ref=brave&type=push_notification&campaign=test`
- Landing page: `https://example.com/product`
- Query string parameters: `ref=brave&type=push_notification&campaign=test`

Parse values and set first-party cookies based on the query string parameters from the clickthrough URL. This entire query string can be set as the value or parsed into individual key value pairs.
When the same user lands from a different channel, your same code snippet can append or overwrite the cookie values with the new parameter values depending on your preference.
When the user completes the expected action and a network request is made back to your servers, the cookies should be attached to the request headers and you can see that a user has come from a Brave Ads campaign.

## Verifiable Ad Conversions (VAC)

Verifiable Ad Conversions (VAC) is an optional feature-set of Brave Ads Conversion Reporting. VAC provides Brave advertisers with the ability to determine their return on ad spend by privately reporting encrypted Conversion IDs. Advertisers can then audit the list of encrypted Conversion IDs to verify that the converted user can be attributed to a Brave Ads campaign.

When an eligible user lands on the Conversion Page, a process is invoked that enables the advertiser to account for the specific transaction event, while maintaining user privacy and anonymity. Not even Brave can read or learn anything about that event (aside from the anonymously reported conversion event count). This enables privacy from end-to-end and allows users to feel better about their Conversion Event, knowing that no one can learn anything from the conversion.

Advertisers who choose to use VAC will generate a public-private key pair in the Account Settings of the Brave Ads interface. Brave will retain the public key, sign the Conversion ID with it, and report the encrypted Conversion ID. Only the Advertiser will have the private key, and only the advertiser will be able to decrypt the encrypted Conversion ID.

It’s crucial that the advertiser does not lose their private key for Verifiable Ad Conversions.

### Conversion event ID details

Verifiable Ad Conversion Reporting is done by a Conversion ID. For your site, this may be an order number, a transaction ID, or something similar.

### Requirements:

- The Conversion ID value must be unique for each conversion. Duplicate Conversion Event ID values will result in accounting discrepancies.
- The Conversion ID must be between 1–30 characters long, contain only alphanumeric characters (as well as dashes), and match this regular expression: ` [-a-zA-Z0-9]{1,30}`.
- Event values longer than 30 characters will fail, preventing the event from being accurately accounted for. You may check if your identifier is valid by using a site like `https://regex101.com/`.
- Conversion IDs must not include user identifiers or personally identifying information. For example, Conversion IDs like the following are not permitted: `<user id>-<random id>`, `<random id>-<email address>`.

Brave uses TweetNacl to encrypt the Conversion ID.

Encrypted Conversion Envelopes will look like:

```json
{
 "alg": "crypto_box_curve25519xsalsa20poly1305",
 "ciphertext": "BTX6xKZ4vITaWa11EMcly7gyQ3rN8JoAYvoHeIiYuSS9Lsc4GUQBN54+otIGOsxk",
 "epk": "3N1RKgiOvOXCGjO6txtEwR0DzpEp9U+PkbpwxAkAGwg=",
 "nonce": "N4EH/upCXxyRPLmYLvYCyuaKQASlA6Qo"
}
```

### Implementation options

Brave provides two implementation options for Verifiable Conversions using a URL pattern or DOM element pattern.

#### URL Pattern

An advertiser has a Conversion ID that is present as a query string parameter in the Conversion Page URL pattern. The advertiser must provide Brave with the query string key that identifies the Conversion ID.

When an eligible user lands on the Conversion Page URL, Brave will:

- Record a conversion event
- Parse the URL for the query string key that identifies the Conversion ID
- Encrypt and record the Conversion ID

Take, for example, the following Conversion Page URL: https://example.com/checkout?order=ABC-12345-xyz. Brave will look for the query string key order and encrypt the value `ABC-12345-xyz`.

#### DOM Element Pattern

An advertiser has a Conversion ID that is present in the Document Object Model (DOM) of the Conversion Page URL.

The advertiser must provide Brave with the DOM element that uniquely identifies the Conversion ID on the page. When an eligible user lands on the Conversion Page URL, Brave will:

- Record a conversion event
- Parse the DOM for the regex pattern that identifies the Conversion ID
- Encrypt and record the Conversion ID

Take, for example, the following DOM element: `<div class='order-id-value'>Your Order ID: ABC-12345-xyz</div>`. Brave will look for this pattern `Your Order ID:.*`, set a capture group `([-a-zA-Z0-9]*)` and encrypt the value `ABC-12345-xyz`.

## Brand lift studies

Brave brand lift studies consist of pre-post research polls conducted via Brave to help advertisers better measure the impact of their ad campaigns beyond media metrics like impressions or clicks. Studies typically measure brand awareness or consideration, but can also measure growth in product understanding or other effects based on paid media spend with Brave.

Prior to campaign launch, advertisers provide Brave with a series of questions structured into a survey and distributed via Brave Ads to a targeting profile that matches the ad campaign. After the campaign, the same set of questions (and additional questions that measure ad recall) will be fielded.

The pre- and post-campaign survey results are compared to gauge the impact of the advertising. Here are some examples of questions that may be fielded during a study:

- **Brand awareness**: Have you heard of “advertiser name” before?
- **Ad recall**: Have you seen an ad for “advertiser name” in the past week?
- **Product consideration**: How likely are you to shop for “product name” in the next several months?

Studies can run independent of spend for a fixed cost, but may also be included as a bonus on a per-campaign basis for spends above a specified threshold. Get in touch with our sales team to learn more.
