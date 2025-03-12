---
sidebar_position: 4
---

# API

## Para começar

1. Acesse https://ads.brave.com

2. Gere uma chave de API
  1. Perfil → Gerar Chave de API
  2. Anote a chave de API gerada, pois você não poderá recuperá-la novamente

## Endpoints

### Detalhes da Campanha

Recupera todas as campanhas que você executou, bem como os conjuntos de anúncios e anúncios associados a elas por ID.

```
GET https://ads-serve.brave.com/v1/api/campaigns
```

##### Parâmetros opcionais

- `from` (data em UTC) - Recupera campanhas que terminaram na data especificada ou depois dela. Formato: AAAA-MM-DDTHH:MM:SS

### Relatórios de Campanha

Recupera detalhes de relatórios sobre uma campanha específica que você executou, onde o ID pode ser obtido a partir do endpoint de detalhes da campanha.

#### Campos comuns de Relatório

```
Day/Hour,Advertiser Name,Campaign Name,Campaign ID,Creative Set ID,Creative Set Name,Creative Instance ID,Creative Title,Creative Body,Creative URL,View Counts,Click Counts,Dismissed Counts,Landed Counts,Conversion Counts,OS,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)
```

**Nota**: `v1` retorna uma coluna adicional de `Segment` entre `OS` e `Spend`

#### Parâmetros opcionais compartilhados

- `from` (data em UTC) - Recupera dados a partir da data especificada. O padrão é a data de início da campanha se não especificado. Formato: `AAAA-MM-DD`
- `to` (data em UTC) - Recupera dados até a data especificada. O padrão é a data de término da campanha se não especificado. Formato: `AAAA-MM-DD`
- `country` - Adicionar coluna de país ao relatório. O valor padrão é "false". Formato `true`

#### Relatórios v1

Retorna todos os campos especificados acima, além de uma coluna adicional `Segment` entre `OS` e `Spend` <br />
exemplo: `...Conversion Counts,OS,Segment,Spend,View-through Conversion Counts...`

```
GET https://ads-serve.brave.com/v1/report/campaign/csv/:campaignId
```

#### Relatórios v2

Retorna todos os campos especificados acima

```
GET https://ads-serve.brave.com/v2/report/campaign/csv/:campaignId
```

# Fazendo Requisições

Passar a chave da API no cabeçalho

```
curl --request GET
--url https://ads-serve.brave.com/v1/api/campaigns
--header 'X-Brave-Api-Key: <API_KEY>' \
```

## Exemplos de Resposta

### Resposta da Campanha

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

### Resposta do Relatório v1

```
Day/Hour,Advertiser ID,Campaign ID,Creative Set ID,Creative Instance ID,Creative Title,Creative Body,Creative URL,Impression Counts,Click Counts,Dismissed Counts,Site Visit Counts,Conversion Counts,OS,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)
2024-01-31T20:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,1,0,0,macos,0.00800000,0,0,30 
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,windows,0.00800000,0,0,30
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs19520db1,cri9086c13f,Sample Creative 3,Test creative 3,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30 
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30
```

### Resposta do Relatório v2

```
Day/Hour,Advertiser ID,Campaign ID,Creative Set ID,Creative Instance ID,Creative Title,Creative Body,Creative URL,Impression Counts,Click Counts,Dismissed Counts,Site Visit Counts,Conversion Counts,OS,Segment,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)
2024-01-31T20:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,1,0,0,macos,arts & entertainment,0.00800000,0,0,30 
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,windows,food & wine,0.00800000,0,0,30
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,0,0,0,android,architecture,0.00800000,0,0,30
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs19520db1,cri9086c13f,Sample Creative 3,Test creative 3,https://example.com,1,0,0,0,0,android,crypto,0.00800000,0,0,30 
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,android,gaming,0.00800000,0,0,30
```