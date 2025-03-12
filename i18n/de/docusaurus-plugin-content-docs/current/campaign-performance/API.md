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

##### Optionale Parameter

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

# Anfragen stellen

API-Schlüssel im Header übergeben

```
curl --request GET \
  --url https://ads-serve.brave.com/v1/api/campaigns \
  --header 'X-Brave-Api-Key: <API_KEY>' \
```

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