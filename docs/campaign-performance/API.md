---
sidebar_position: 4
---

# API

## Getting Started

1. Log on to https://ads.brave.com

2. Generate an API KEY
   1. Profile -> Generate API Key
   1. Record generated API key, as you will not be able to retrieve it again

## Endpoint: Campaign Details

Retrieves all campaigns you have ran, as well as the ad sets and ads associated with them by ID.

```
GET https://ads-serve.brave.com/v1/api/campaigns
```

### Optional Parameters

- `from` (date in UTC) - Fetch campaigns that ended on or after specified date. Format: `YYYY-MM-DDTHH:MM:SS`

### Example Response

```json
{
  "id": "f9f88715-db91-421b-9d1d-983742ef14c5", // Advertiser ID
  "name": "My Advertiser Name",
  "state": "active",
  "campaigns": [
    {
      "id": "a3de655d-ae1b-41a5-b6f9-741a40010d00", // Campaign ID
      "name": "My Campaign Name",
      "format": "push_notification",
      "startAt": "2022-08-09T14:49:11.714Z",
      "endAt": "2024-03-22T05:42:49.691Z",
      "adSets": [
        {
          "id": "e161f081-f249-4216-b9ad-64e2ba4c1b65", // Ad Set ID
          "name": "My First Ad Set",
          "ads": [
            {
              "id": "c93d9444-2c59-4cec-9a61-de3e1e3f7552" // Ad ID
            }
          ]
        }
      ]
    }
  ]
}
```

## Endpoint: Campaign Reporting (v3)

Retrieves reporting details about a specific campaign you have ran, where the ID can be retrieved from the campaign details endpoint.

For backwards compatibility, older v1 and v2 versions of the reporting endpoints are still supported,
but no longer recommended. Contact your Account Manager for support on these older versions if needed.

```
GET https://ads-serve.brave.com/v3/report/campaign/csv/:campaignId
```

When retrieving a report, it is possible to specify:

- **filters** to limit the set of data included in the report (e.g. a date range)
- **dimensions** which generate a separate row in the report for each unique combination of values
- **metrics** for each row, return these set of values

Depending on the campaign format, a default set of dimensions and metrics are returned if not explicitly specified.

### Filters

- `from` (ISO 8601 format, e.g. `2026-03-01`) - Fetch data on or after specified timestamp.
- `to` (ISO 8601 format) - Fetch data up to specified date.

### Dimensions

Dimensions are specified in the `dimensions` parameter, either by:

1. separating with `+` e.g. `dimensions=campaign_id+country`
2. separating with a space e.g. (after url encoding) `dimensions=campaign_id%20country`
3. separating with a comma e.g. `dimensions=campaign_id,country`
4. providing multiple query parameters e.g. `dimensions=campaign_id&dimensions=country`

If no dimension parameter is supplied, those labelled as `default` in the table below are returned. If any parameters are supplied, only those requested are returned - the defaults are ignored so that a consistent set of fields is returned in the output.

| name            | description                                                                                 | push          | ntt           | search        |
| --------------- | ------------------------------------------------------------------------------------------- | ------------- | ------------- | ------------- |
| ad_id           | Unique identifier of the ad                                                                 | optional      | optional      | optional      |
| adset_id        | Unique identifier of the adset                                                              | default       | default       | default       |
| adset_name      | Adset name                                                                                  | optional      | optional      | optional      |
| advertiser_id   | Advertiser id                                                                               | optional      | optional      | optional      |
| branded         | `true` if search terms included brand keywords, otherwise `false` or `unknown` (see note 2) | not supported | not supported | optional      |
| advertiser_name | Advertiser name                                                                             | optional      | optional      | optional      |
| campaign_id     | Unique campaign identifier                                                                  | default       | default       | default       |
| campaign_name   | Campaign name                                                                               | optional      | optional      | optional      |
| country         | User country                                                                                | optional      | optional      | optional      |
| creative_body   | Body text of the creative                                                                   | optional      | not supported | not supported |
| creative_title  | Title text of the creative                                                                  | optional      | not supported | not supported |
| day             | Day the event occurred - in UTC, running from UTC midnight to UTC midnight                  | default       | not supported | default       |
| hour            | Hour the event occurred - in UTC                                                            | optional      | not supported | optional      |
| os              | User operating system                                                                       | optional      | optional      | optional      |
| target_url      | Target url (landing page) of the creative                                                   | default       | default       | default       |

Notes:

1. Either `day` or `hour` can be provided, but not both. Requesting `hour` returns data with hourly granularity, the hour field in the file is the full ISO 8601 timestamp of the start of the hour the data relates to. Hourly granularity can only be requested for a filtered time period of 31 days or less. `day` returns per day data, the day field in the file is the full ISO 8601 timestamp of the start of the UTC day the data relates to. If neither `hour` or `day` is supplied, data for the entire duration of the campaign is returned, or for the time period specified with `from` and `to` if set.
2. `branded` may be `unknown` if a) branded keywords are not configured for this campaign or b) the metrics requested do not have branded state associated with them (e.g. the browser-tracked
   `click_through_conversions`)

### Metrics

Metrics are specified in the `metrics` parameter, either by:

1. separating with `+` e.g. `metrics=clicks+impressions`
2. separating with a space e.g. (after url encoding) `metrics=clicks%20impressions`
3. separating with a comma e.g. `metrics=clicks,impressions`
4. providing multiple query parameters e.g. `metrics=clicks&metrics=impressions`

If no metric parameter is supplied, those labelled as `default` in the table below are returned. If any parameters are supplied, only those requested are returned - the defaults are ignored so that a consistent set of fields is returned in the output.

| name                      | description                                                                                        | push     | ntt           | search        |
| ------------------------- | -------------------------------------------------------------------------------------------------- | -------- | ------------- | ------------- |
| billable_spend_usd        | Amount in USD that will be billed                                                                  | default  | not supported | default       |
| click_through_conversions | When Brave browser conversion tracking is enabled, the number of conversions after clicking the ad | optional | not supported | optional      |
| clicks                    | Number of clicks recorded                                                                          | default  | default       | default       |
| impressions               | Number of ad impressions recorded                                                                  | default  | default       | default       |
| site_visits               | Number of successful lands on the target page                                                      | optional | not supported | not supported |
| view_through_conversions  | When Brave browser conversion tracking is enabled, the number of conversions after viewing the ad  | optional | not supported | not supported |

Notes:

1. NTT campaigns are billed at fixed price, so spend per dimension combination is unavailable.

### Return

The report returned is in CSV format, with one column for every dimension and metric requested. Dimensions are included first, then metrics.

The first row includes column names, matching the names in the tables above.

### Examples

These examples use an invented, invalid campaign id of `29f0057a-9eb4-48a6-b5fe-b58adbe32811`. Replace this with the campaign id you want to get metrics for.

In all cases, the `X-Brave-Api-Key: <API_KEY>` header must be set to authorise the request.

`GET https://ads-serve.brave.com/v3/report/campaign/csv/29f0057a-9eb4-48a6-b5fe-b58adbe32811`

Returns data for this campaign for all time, with the default set of dimensions and metrics applicable to the campaign format.

`GET https://ads-serve.brave.com/v3/report/campaign/csv/29f0057a-9eb4-48a6-b5fe-b58adbe32811?from=2025-10-01&to=2025-10-07`

Returns data for this campaign for the week specified, with the default set of dimensions and metrics applicable to the campaign format.

`GET https://ads-serve.brave.com/v3/report/campaign/csv/29f0057a-9eb4-48a6-b5fe-b58adbe32811?dimensions=campaign_id`

Returns a single row (as there is only one campaign id, by definition) including overall metrics for all time.

`GET https://ads-serve.brave.com/v3/report/campaign/csv/29f0057a-9eb4-48a6-b5fe-b58adbe32811?dimensions=campaign_id,day`

Returns one row for every day with the default set of metrics for the campaign format.

`GET https://ads-serve.brave.com/v3/report/campaign/csv/29f0057a-9eb4-48a6-b5fe-b58adbe32811?dimensions=day&metrics=impressions,clicks,billable_spend_usd`

Returns one row for every day with impressions, clicks and billable_spend_usd on that day.
