---
sidebar_position: 4
---

# API

## Getting Started

1. Log on to https://ads.brave.com

2. Generate an API KEY
   1. Profile -> Generate API Key
   2. Record generated API key, as you will not be able to retrieve it again

## Endpoints

### Campaign Details

Retrieves all campaigns you have ran, as well as the ad sets and ads associated with them by ID.

```
GET https://ads-serve.brave.com/v1/api/campaigns
```

##### Optional Parameters

- `from` (date in UTC) - Fetch campaigns that ended on or after specified date. Format: `YYYY-MM-DDTHH:MM:SS`

### Campaign Reporting

Retrieves reporting details about a specific campaign you have ran, where the ID can be retrieved from the campaign details endpoint.

#### Common Reporting fields

```
Day/Hour,Advertiser Name,Campaign Name,Campaign ID,Creative Set ID,Creative Set Name,Creative Instance ID,Creative Title,Creative Body,Creative URL,View Counts,Click Counts,Dismissed Counts,Landed Counts,Conversion Counts,OS,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)
```

**Note**: `v1` Returns an additional `Segment` column between `OS` and `Spend`

#### Shared Optional Parameters

- `from` (date in UTC) - Fetch data on or after specified date. Defaults to campaign start date if not specified. Format: `YYYY-MM-DD`
- `to` (date in UTC) - Fetch data up to specified date. Defaults to campaign end date if not specified. Format: `YYYY-MM-DD`
- `country` - Add country column to report. Defaults to false. Format `true`

#### v1 Reporting

Returns all fields specified above, as well as an additional `Segment` column between `OS` and `Spend` <br />
i.e: `...Conversion Counts,OS,Segment,Spend,View-through Conversion Counts...`

```
GET https://ads-serve.brave.com/v1/report/campaign/csv/:campaignId
```

#### v2 Reporting

Returns all fields specified above

```
GET https://ads-serve.brave.com/v2/report/campaign/csv/:campaignId
```

# Making Requests

Pass API key in header

```
curl --request GET \
  --url https://ads-serve.brave.com/v1/api/campaigns \
  --header 'X-Brave-Api-Key: <API_KEY>' \
```

## Response Examples

### Campaign Response

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

### v1 Reporting Response

```
Day/Hour,Advertiser ID,Campaign ID,Creative Set ID,Creative Instance ID,Creative Title,Creative Body,Creative URL,Impression Counts,Click Counts,Dismissed Counts,Site Visit Counts,Conversion Counts,OS,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)
2024-01-31T20:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,1,0,0,macos,0.00800000,0,0,30 
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,windows,0.00800000,0,0,30
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs19520db1,cri9086c13f,Sample Creative 3,Test creative 3,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30 
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30
```

### v2 Reporting Response

```
Day/Hour,Advertiser ID,Campaign ID,Creative Set ID,Creative Instance ID,Creative Title,Creative Body,Creative URL,Impression Counts,Click Counts,Dismissed Counts,Site Visit Counts,Conversion Counts,OS,Segment,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)
2024-01-31T20:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,1,0,0,macos,arts & entertainment,0.00800000,0,0,30 
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,windows,food & wine,0.00800000,0,0,30
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,0,0,0,android,architecture,0.00800000,0,0,30
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs19520db1,cri9086c13f,Sample Creative 3,Test creative 3,https://example.com,1,0,0,0,0,android,crypto,0.00800000,0,0,30 
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,android,gaming,0.00800000,0,0,30
```
