---
sidebar_position: 4
---

# API

## Commencer

1. Connectez-vous sur https://ads.brave.com

2. Générez une clé d'API
  1. Profil -> Générer une clé d'API
  2. Enregistrez la clé d'API générée, car vous ne pourrez pas la récupérer de nouveau

## Points de terminaison

### Détails de la campagne

Retrieves all campaigns you have ran. For all campaign formats except search, the ad sets and ads associated with them by ID are included.

```
GET https://ads-serve.brave.com/v1/api/campaigns
```

##### Paramètres optionnels

- `from` (date en UTC) - Récupérer les campagnes terminées à la date spécifiée ou après celle-ci. Format : `YYYY-MM-DDTHH:MM:SS`

### Rapports de campagnes

Récupère les détails des rapports d'une campagne spécifique que vous avez exécutée, l'ID pouvant être récupéré à partir du point de terminaison des détails de la campagne.

#### Champs de rapport communs

```
Jour/Heure,Nom de l'annonceur,Nom de la campagne,ID de la campagne,ID de l'ensemble créatif,Nom de l'ensemble créatif,ID de l'instance créative,Titre créatif,Corps créatif,URL créative,Nombre de vues,Nombre de clics,Nombre de rejets,Nombre d'atterrissages,Nombre de conversions,OS,Dépense,Nombre de conversions par vue,Nombre de conversions par click-through,Fenêtre d'attribution (jours)
```

**Remarque** : `v1` renvoie une colonne supplémentaire `Segment` entre `OS` et `Dépense`

#### Paramètres optionnels partagés

- `from` (date en UTC) - Récupérer les données à la date spécifiée ou après celle-ci. Par défaut, il s'agit de la date de début de la campagne si non spécifiée. Format : `YYYY-MM-DD`
- `to` (date en UTC) - Récupérer les données jusqu'à la date spécifiée. Par défaut, il s'agit de la date de fin de la campagne si non spécifiée. Format : `YYYY-MM-DD`
- `country` - Ajouter une colonne de pays au rapport. Par défaut, il est à false. Format `true`

#### Rapports v1

Renvoie tous les champs spécifiés ci-dessus, ainsi qu'une colonne supplémentaire `Segment` entre `OS` et `Dépense` <br />
c'est-à-dire : `...Nombre de conversions,OS,Segment,Dépense,Nombre de conversions par vue...`

```
GET https://ads-serve.brave.com/v1/report/campaign/csv/:campaignId
```

#### Rapports v2

Renvoie tous les champs spécifiés ci-dessus

```
GET https://ads-serve.brave.com/v2/report/campaign/csv/:campaignId
```

# Faire des demandes

Passez la clé d'API dans l'en-tête

```
curl --request GET \
  --url https://ads-serve.brave.com/v1/api/campaigns \
  --header 'X-Brave-Api-Key: <API_KEY>' \
```

## Exemples de réponse

### Réponse de campagne

```json
{
  "id": "f9f88715-db91-421b-9d1d-983742ef14c5", // ID de l'annonceur
  "name": "Mon nom d'annonceur",
  "state": "active",
  "campaigns": [
    {
      "id": "a3de655d-ae1b-41a5-b6f9-741a40010d00", // ID de la campagne
      "name": "Mon nom de campagne",
      "format": "push_notification",
      "startAt": "2022-08-09T14:49:11.714Z",
      "endAt": "2024-03-22T05:42:49.691Z",
      "adSets": [
        {
          "id": "e161f081-f249-4216-b9ad-64e2ba4c1b65", // ID de l'ensemble d'annonces
          "name": "Mon premier ensemble d'annonces",
          "ads": [
            {
              "id": "c93d9444-2c59-4cec-9a61-de3e1e3f7552" // ID de l'annonce
            }
          ]
        }
      ]
    }
  ]
}
```

### Réponse de rapport v1

```
Jour/Heure,ID de l'annonceur,ID de la campagne,ID de l'ensemble de créations,ID de l'instance créative,Titre de la création,Corps de la création,URL de la création,Nombre d'impressions,Nombre de clics,Nombre de rejets,Nombre de visites sur le site,Nombre de conversions,OS,Dépenses,Nombre de conversions par vue,Nombre de conversions par click-through,Fenêtre d'attribution (jours)
2024-01-31T20:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Exemple de Création 1,Cliquez ici,https://example.com,1,0,1,0,0,macos,0.00800000,0,0,30
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Exemple de Création 2,Test de création,https://example.com,1,0,0,0,0,windows,0.00800000,0,0,30
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Exemple de Création 1,Cliquez ici,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs19520db1,cri9086c13f,Exemple de Création 3,Test de création 3,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Exemple de Création 2,Test de création,https://example.com,1,0,0,0,0,android,0.00800000,0,0,30
```

### Réponse de rapport v2

```
Jour/Heure,ID de l'annonceur,ID de la campagne,ID de l'ensemble de créations,ID de l'instance créative,Titre de la création,Corps de la création,URL de la création,Nombre d'impressions,Nombre de clics,Nombre de rejets,Nombre de visites sur le site,Nombre de conversions,OS,Segment,Dépenses,Nombre de conversions par vue,Nombre de conversions par clic,Fenêtre d'attribution (jours)
2024-01-31T20:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Exemple de Création 1,Cliquez ici,https://example.com,1,0,1,0,0,macos,arts & entertainment,0.00800000,0,0,30 
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Exemple de Création 2,Test de création,https://example.com,1,0,0,0,0,windows,food & wine,0.00800000,0,0,30
2024-01-31T22:00:00,ad5017b3,cmp932f4b3,crs819594b,cri7549f0ca,Exemple de Création 1,Cliquez ici,https://example.com,1,0,0,0,0,android,architecture,0.00800000,0,0,30
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs19520db1,cri9086c13f,Exemple de Création 3,Test de création 3,https://example.com,1,0,0,0,0,android,crypto,0.00800000,0,0,30 
2024-01-31T23:00:00,ad5017b3,cmp932f4b3,crs819594b,cri4151a72d,Exemple de Création 2,Test de création,https://example.com,1,0,0,0,0,android,gaming,0.00800000,0,0,30
```
