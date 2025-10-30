---
sidebar_position: 4
---

# API

## Erste Schritte

1. Melde dich unter https://ads.brave.com an

2. Erstelle einen API-Schlüssel
   1. Profil -> API-Schlüssel erstellen
   2. Notiere dir den erzeugten API-Schlüssel, da du diesen später nicht mehr abrufen kannst

## Endpunkte

### Kampagnendetails

Ruft alle von dir durchgeführten Kampagnen sowie die zugehörigen Anzeigengruppen und Anzeigen ab, die mit ihnen verknüpft sind, nach ID.

```
GET https://ads-serve.brave.com/v1/api/campaigns
```

#### Optionale Parameter

- `from` (Datum in UTC) - Kampagnen abrufen, die am oder nach dem angegebenen Datum geendet haben. Format: `YYYY-MM-DDTHH:MM:SS`

### Kampagnen-Reportings

Ruft Reporting-Details zu einer spezifischen Kampagne ab, die du durchgeführt hast, wobei die ID aus dem Endpunkt Kampagnendetails abgerufen werden kann.

#### Gemeinsame Reporting-Felder

```
Day/Hour,Advertiser Name,Campaign Name,Campaign ID,Creative Set ID,Creative Set Name,Creative Instance ID,Creative Title,Creative Body,Creative URL,View Counts,Click Counts,Dismissed Counts,Landed Counts,Conversion Counts,OS,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)
```

**Hinweis**: `v1` Gibt eine zusätzliche `Segment`-Spalte zwischen `OS` und `Spend` zurück

#### Geteilte optionale Parameter

- `from` (Datum in UTC) - Daten abrufen, die am oder nach dem angegebenen Datum liegen. Standardmäßig auf Kampagnenstartdatum gesetzt, wenn nicht angegeben. Format: `YYYY-MM-DD`
- `to` (Datum in UTC) - Daten bis zum angegebenen Datum abrufen. Standardmäßig auf Kampagnenenddatum gesetzt, wenn nicht angegeben. Format: `YYYY-MM-DD`
- `country` - Füge dem Reporting eine Länderspalte hinzu. Standardmäßig auf false gesetzt. Format: `true`

#### v1-Reporting

Gibt alle oben angegebenen Felder sowie eine zusätzliche `Segment`-Spalte zwischen `OS` und `Spend` zurück <br />
z. B.: `...Conversion Counts,OS,Segment,Spend,View-through Conversion Counts...`

```
GET https://ads-serve.brave.com/v1/report/campaign/csv/:campaignId
```

#### v2-Reporting

Gibt alle oben angegebenen Felder zurück

```
GET https://ads-serve.brave.com/v2/report/campaign/csv/:campaignId
```

#### v3 reporting

```
GET https://ads-serve.brave.com/v3/report/campaign/csv/:campaignId
```

The v3 reporting endpoint provides greater flexibility and consistency. It is made available in parallel with the existing reporting endpoints, which remain supported.

When retrieving a report, it is possible to specify:

- **filters** to limit the set of data included in the report (e.g. a date range)
- **dimensions** which generate a separate row in the report for each unique combination of values
- **metrics** for each row, return these set of values

Depending on the campaign format, a default set of dimensions and metrics are returned if not explicitly specified.

##### Filters

- `from` (ISO 8601 format) - Fetch data on or after specified timestamp.
- `to` (ISO 8601 format) - Fetch data up to specified date.

##### Dimensions

Dimensions are specified in the `dimensions` parameter, either by:

1. separating with `+` e.g. `dimensions=campaign_id+country`
2. separating with a space e.g. (after url encoding) `dimensions=campaign_id%20country`
3. separating with a comma e.g. `dimensions=campaign_id,country`
4. providing multiple query parameters e.g. `dimensions=campaign_id&dimensions=country`

If no dimension parameter is supplied, those labelled as `default` in the table below are returned. If any parameters are supplied, only those requested are returned - the defaults are ignored so that a consistent set of fields is returned in the output.

| name                                 | description                                                                | push     | ntt           | search        |
| ------------------------------------ | -------------------------------------------------------------------------- | -------- | ------------- | ------------- |
| ad_id           | Unique identifier of the ad - historically called creative instance id     | optional | optional      | optional      |
| adset_id        | Unique identifier of the adset - historically called creative set id       | default  | default       | default       |
| adset_name      | Adset name                                                                 | optional | optional      | optional      |
| advertiser_id   | Advertiser id                                                              | optional | optional      | optional      |
| advertiser_name | Advertiser name                                                            | optional | optional      | optional      |
| campaign_id     | Unique campaign identifier                                                 | default  | default       | default       |
| campaign_name   | Campaign name                                                              | optional | optional      | optional      |
| country                              | User country                                                               | optional | optional      | optional      |
| creative_body   | Body text of the creative                                                  | optional | not supported | not supported |
| creative_title  | Title text of the creative                                                 | optional | not supported | not supported |
| day                                  | Day the event occurred - in UTC, running from UTC midnight to UTC midnight | default  | not supported | default       |
| hour                                 | Hour the event occurred - in UTC                                           | optional | not supported | optional      |
| os                                   | User operating system                                                      | optional | optional      | optional      |
| target_url      | Target url (landing page) of the creative               | default  | default       | default       |

Notes:

1. Either `day` or `hour` can be provided, but not both. Requesting `hour` returns data with hourly granularity, the hour field in the file is the full ISO 8601 timestamp of the start of the hour the data relates to.  Hourly granularity can only be requested for a filtered time period of 31 days or less. `day` returns per day data, the day field in the file is the full ISO 8601 timestamp of the start of the UTC day the data relates to. If neither `hour` or `day` is supplied, data for the entire duration of the campaign is returned, or for the time period specified with `from` and `to` if set.

##### Metrics

Metrics are specified in the `metrics` parameter, either by:

1. separating with `+` e.g. `metrics=clicks+impressions`
2. separating with a space e.g. (after url encoding) `metrics=clicks%20impressions`
3. separating with a comma e.g. `metrics=clicks,impressions`
4. providing multiple query parameters e.g. `metrics=clicks&metrics=impressions`

If no metric parameter is supplied, those labelled as `default` in the table below are returned. If any parameters are supplied, only those requested are returned - the defaults are ignored so that a consistent set of fields is returned in the output.

| name                                                                | description                                                                                        | push     | ntt           | search        |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------- | ------------- | ------------- |
| billable_spend_usd        | Amount in USD that will be billed                                                                  | default  | not supported | default       |
| click_through_conversions | When Brave browser conversion tracking is enabled, the number of conversions after clicking the ad | optional | not supported | optional      |
| clicks                                                              | Number of clicks recorded                                                                          | default  | default       | default       |
| impressions                                                         | Number of ad impressions recorded                                                                  | default  | default       | default       |
| site_visits                                    | Number of successful lands on the target page                                                      | optional | not supported | not supported |
| view_through_conversions  | When Brave browser conversion tracking is enabled, the number of conversions after viewing the ad  | optional | not supported | not supported |

Notes:

1. NTT campaigns are billed at fixed price, so spend per dimension combination is unavailable.

##### Return

The report returned is in CSV format, with one column for every dimension and metric requested. Dimensions are included first, then metrics.

The first row includes column names, matching the names in the tables above.

## Beispielantworten

### Kampagnen-Antwort

```json
{
  "id": "f9f88715-db91-421b-9d1d-983742ef14c5", // Werbetreibenden-ID
  "name": "Mein Werbetreibender Name",
  "state": "active",
  "campaigns": [
    {
      "id": "a3de655d-ae1b-41a5-b6f9-741a40010d00", // Kampagnen-ID
      "name": "Mein Kampagnenname",
      "format": "push_notification",
      "startAt": "2022-08-09T14:49:11.714Z",
      "endAt": "2024-03-22T05:42:49.691Z",
      "adSets": [
        {
          "id": "e161f081-f249-4216-b9ad-64e2ba4c1b65", // Anzeigengruppe-ID
          "name": "Meine erste Anzeigengruppe",
          "ads": [
            {
              "id": "c93d9444-2c59-4cec-9a61-de3e1e3f7552" // Anzeigen-ID
            }
          ]
        }
      ]
    }
  ]
}
```

### v1-Reporting-Antwort

```
Tag/Stunde,Werbetreibender ID,Kampagnen-ID,Kreativset-ID,Kreativ-Instanz-ID,Kreativtitel,Kreativkörper,Kreative URL,Impressionsanzahl,Klickanzahl,Abgelehnte Anzahl,Seitenbesuchsanzahl,Konvertierungsanzahl,OS,Ausgaben,Conversion-Anzahl nach Ansicht,Click-through Conversion-Anzahl,Attributionsfenster (Tage)
2024-01-31T20:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Beispiel Kreativ 1,Hier klicken,https://example.com,1,0,1,0,0,macos,0.00800000,0,0,30
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Beispiel Kreativ 2,Test kreativ,https://example.com,1,0,0,0,0,windows,0.00800000,0,0,30
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Beispiel Kreativ 1,Hier klicken,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs19520db1,cri9086c13f,Beispiel Kreativ 3,Test kreativ 3,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Beispiel Kreativ 2,Test kreativ,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30
```

### v2-Reporting-Antwort

```
Tag/Stunde,Werbetreibender ID,Kampagnen-ID,Kreativset-ID,Kreativ-Instanz-ID,Kreativtitel,Kreativkörper,Kreative URL,Impressionsanzahl,Klickanzahl,Abgelehnte Anzahl,Seitenbesuchsanzahl,Konvertierungsanzahl,OS,Segment,Ausgaben,Conversion-Anzahl nach Ansicht,Click-through Conversion-Anzahl,Attributionsfenster (Tage)
2024-01-31T20:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Beispiel Kreativ 1,Hier klicken,https://example.com,1,0,1,0,0,macos,Kunst & Unterhaltung,0.00800000,0,0,30
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Beispiel Kreativ 2,Test kreativ,https://example.com,1,0,0,0,0,windows,Essen & Wein,0.00800000,0,0,30
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Beispiel Kreativ 1,Hier klicken,https://example.com,1,0,0,0,0,android,Architektur,0.00800000,0,0,30
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs19520db1,cri9086c13f,Beispiel Kreativ 3,Test kreativ 3,https://example.com,1,0,0,0,0,android,Krypto,0.00800000,0,0,30
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Beispiel Kreativ 2,Test kreativ,https://example.com,1,0,0,0,0,android,Spiele,0.00800000,0,0,30
```

### v3 Examples

This example use an invented, invalid campaign id of `29f0057a-9eb4-48a6-b5fe-b58adbe32811`. Replace this with the campaign id you want to get metrics for.

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
