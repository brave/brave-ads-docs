---
sidebar_position: 4
---

# API

## Comenzar

1. Inicie sesión en https://ads.brave.com

2. Genere una clave API
   1. Perfil -> Generar clave API
   2. Registre la clave API generada, ya que no podrá recuperarla nuevamente

## Puntos finales

### Detalles de campaña

Este recupera todas las campañas que ha ejecutado, así como los conjuntos de anuncios y los anuncios asociados a ellas por ID.

```
OBTENER https://ads-serve.brave.com/v1/api/campaigns
```

##### Parámetros opcionales

- `desde` (fecha en UTC): Obtener las campañas que finalizaron en la fecha especificada o después. Formato: `AAAA-MM-DDTHH:MM:SS`

### Informes de campaña

Este recupera los detalles de los informes sobre una campaña específica que haya ejecutado, donde el ID se puede recuperar desde el punto final de detalles de la campaña.

#### Campos comunes de informes

```
Día/Hora,Nombre del Anunciante,Nombre de la Campaña,ID de la Campaña,ID del Conjunto Creativo,Nombre del Conjunto Creativo,ID de la Instancia Creativa,Título del Creativo,Cuerpo del Creativo,URL del Creativo,Conteo de Visitas,Conteo de Clics,Conteo de Rechazos,Conteo de Llegadas,Conteo de Conversiones,SO,Gasto,Conteo de Conversiones por Visualización,Conteo de Conversiones por Clic,Ventana de Atribución (días)
```

**Nota**: `v1` Devuelve una columna `Segmento` adicional entre `SO` y `Gasto`

#### Parámetros opcionales compartidos

- `desde` (fecha en UTC) - Obtener datos en la fecha especificada o después. Usar por defecto la fecha de inicio de la campaña si no se especifica.Formato: `AAAA-MM-DD` Formato: `AAAA-MM-DD` Formato: `AAAA-MM-DD` Comenzar
- `hasta` (fecha en UTC) - Obtener datos hasta la fecha especificada. Usar por defecto la fecha de finalización de la campaña si no se especifica.Formato: `AAAA-MM-DD` Comenzar Comenzar Comenzar
- `país` - Agregar columna de país al informe. Por defecto es falso. Formato `verdadero`

#### Informes v1

Este devuelve todos los campos especificados anteriormente, así como una columna `Segmento` adicional entre `SO` y `Gasto` <br />
es decir: `...Conteo de Conversiones,SO,Segmento,Gasto,Conteo de Conversiones por Visualización...`

```
OBTENER https://ads-serve.brave.com/v1/report/campaign/csv/:campaignId
```

#### Informes v2

Este devuelve todos los campos especificados anteriormente

```
OBTENER https://ads-serve.brave.com/v2/report/campaign/csv/:campaignId
```

# Hacer solicitudes

Pasar la clave API en el encabezado

```
curl --solicitar OBTENER \
  --url https://ads-serve.brave.com/v1/api/campaigns \
  --encabezado 'X-Brave-Api-Key: <API_KEY>' \
```

## Ejemplos de respuesta

### Respuesta de campaña

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

### Respuesta de informes v1

```
Day/Hour,Advertiser ID,Campaign ID,Creative Set ID,Creative Instance ID,Creative Title,Creative Body,Creative URL,Impression Counts,Click Counts,Dismissed Counts,Site Visit Counts,Conversion Counts,OS,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)
2024-01-31T20:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,1,0,0,macos,0.00800000,0,0,30 
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,windows,0.00800000,0,0,30
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs19520db1,cri9086c13f,Sample Creative 3,Test creative 3,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30 
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30
```

### Respuesta de informes v2

```
Day/Hour,Advertiser ID,Campaign ID,Creative Set ID,Creative Instance ID,Creative Title,Creative Body,Creative URL,Impression Counts,Click Counts,Dismissed Counts,Site Visit Counts,Conversion Counts,OS,Segment,Spend,View-through Conversion Counts,Click-through Conversion Counts,Attribution Window (days)
2024-01-31T20:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,1,0,0,macos,arts & entertainment,0.00800000,0,0,30 
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,windows,food & wine,0.00800000,0,0,30
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Sample Creative 1,Click here,https://example.com,1,0,0,0,0,android,architecture,0.00800000,0,0,30
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs19520db1,cri9086c13f,Sample Creative 3,Test creative 3,https://example.com,1,0,0,0,0,android,crypto,0.00800000,0,0,30 
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Sample Creative 2,Test creative,https://example.com,1,0,0,0,0,android,gaming,0.00800000,0,0,30
```