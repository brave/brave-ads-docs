---
sidebar_position: 1
---

# Audience targeting in a privacy-first environment
Brave has pioneered a new breed of privacy-respecting targeting that is matched directly on the user’s device (aka “client-side”), without any personal data phoning home to Brave’s servers.  To achieve targeting at scale in a privacy-respecting capacity, Brave Ads uses on-device machine learning to anonymously match users to relevant ads. The system is built by leading privacy engineers with a range of cryptographic technologies that ensure that no personally-identifiable data ever leaves the user’s device. Contrary to other major ad tech providers who suck up as much personal data as they can, Brave only ever sees anonymous data.

Each of Brave’s ad units has a unique approach to achieve varying levels of ad relevance with the end user:

| **Targeting**              | **Description**                                                                                                                                                   | **Search keyword ads** | **New tab takeover** | **Newsfeed ads** | **Notification ads** |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|----------------------|------------------|----------------------|
| **Keywords**               | Keywords entered into Brave Search.                                                                                                                               | X                      |                      |                  |                      |
| **Country and state**      | Location determined by IP address. Only top level country and state level information is inferred (State level targeting is available only in the USA).           | X                      | X                    | X                | X                    |
| **Time of day**            | Delivery based on local time inferred by the IP address.                                                                                                          |                        |                      | X                | X                    |
| **Contextual segments**    | IAB standard contextual segments based on page content and domains visited by the user.                                                                           |                        |                      |                  | X                    |
| **Custom intent segments** | Bespoke segments built with keywords and domains that the advertiser wishes to target. Minimum spend required, and only available with managed service campaigns. |                        |                      |                  | X                    |
