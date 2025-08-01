---
sidebar_position: 1
---

# Ad targeting
Brave has pioneered a new breed of privacy-respecting targeting that is matched directly on the user’s device (aka “client-side”), without any personal data phoning home to Brave’s servers.  To achieve targeting at scale in a privacy-respecting capacity, Brave Ads uses on-device machine learning to anonymously match users to relevant ads. The system is built by leading privacy engineers with a range of cryptographic technologies that ensure that no personally-identifiable data ever leaves the user’s device. Contrary to other major ad tech providers who suck up as much personal data as they can, Brave only ever sees anonymous data.

Each of Brave’s ad units has a unique approach to achieve varying levels of ad relevance with the end user:

| **Targeting**              | **Description**                                                                                                                                                   |**New Tab Takeover**| **Notification** | **Search** | 
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|----------------------|------------------|----------------------|
| **Keyword**               | Based on relevant keywords entered in Brave Search.                                                                                                                                |                     |                  | X                |
| **Country**      | Location determined by IP address. Only top level country and state level information is inferred.        | X                      | X                | X                    |
| **State**      | Location determined by IP address. Only top level country and state level information is inferred. Available only in the USA.           |                   |X                | X                     |
| **Time of day**            | Delivery based on local time inferred by the IP address.                                                                                                          |                      | X                |                     |
| **Contextual**    | IAB standard contextual category segments based on page content and domains visited by the user.                                                                           |                      |X                  |                     |
| **Custom segments** | Bespoke segments built with keywords and domains that the advertiser wishes to target. Minimum spend required, and only available with managed service campaigns. |                        |X                  |                     |

## Contextual category list

- Architecture
- Arts & Entertainment
- Automotive
- Business
- Careers
- Cell Phones
- Crypto
- Education
- Fashion
- Folklore
- Food & Drink
- Gaming
- Health & Fitness
- History
- Hobbies & Interests
- Home
- Law
- Military
- Personal Finance
- Pets
- Real Estate
- Science
- Sports
- Technology & Computing
- Travel
- Weather
- Untargeted (all segments)
