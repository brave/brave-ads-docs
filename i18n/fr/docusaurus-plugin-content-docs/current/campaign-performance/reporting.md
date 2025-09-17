---
sidebar_position: 2
---

# Rapports

Brave Ads est conçu dès le départ pour soutenir les normes les plus élevées en matière de confidentialité. Par défaut, le navigateur Brave bloque le suivi par des tiers, y compris Google Analytics, Adobe Analytics et d'autres fournisseurs de rapports et de mesures tiers. Bien que Brave Ads respecte (et ne collecte pas) les données des utilisateurs, il fournit également aux annonceurs des rapports utiles et détaillés sur les performances des campagnes dans un tableau de bord simple et facile à lire. Il permet également aux spécialistes du marketing de voir les performances des campagnes en utilisant leurs propres systèmes de rapports.

## Mon rapport est-il bloqué par le navigateur Brave ?

La première étape consiste à comprendre ce qui est bloqué par le navigateur Brave. Pour ce faire, ouvrez Brave sur votre bureau et accédez à votre site professionnel ou à la page de destination de votre campagne, puis suivez ces étapes :

1. Cliquez sur l'icône du lion Brave située à droite de la barre d'adresse.
2. Développez le menu « Contrôle avancé ».
3. Cliquez sur le nombre violet situé à côté de « Bloquer les traqueurs et les Ads » pour afficher ce qui est actuellement bloqué.

Les scripts bloqués désactiveront la plupart, sinon la totalité, des fonctions pour le suivi par des tiers. Voici un tableau utile avec des exemples de différents scénarios de suivi et leur compatibilité avec Brave Ads :

| Scénarios d'exemple                                                  | Point de terminaison d'exemple pour www.example.com | Compatible avec Brave Ads |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------- |
| Analyses personnalisées de site (première partie) | analytics.example.com                               | OUI                       |
| Google Analytics 4 (première partie)              | analytics.example.com                               | OUI                       |
| Adobe Analytics (première partie)                 | analytics.example.com                               | OUI                       |
| Google Analytics 4 (hébergé par Google)           | google.com                                                          | NON                       |
| Adobe Analytics (hébergé par Adobe)               | adobe.com                                                           | NON                       |

## Rapports de Brave Ads Manager

Que votre campagne soit achetée via un service géré ou en libre-service, tous les annonceurs auront accès au tableau de bord des rapports Brave Ads pour rendre compte des performances des campagnes. Campaign dashboards update hourly with the option to export reporting for Notification ad campaigns on demand.

### Métriques de rapports disponibles dans Brave Ads Manager

| Métrique                                | Description                                                                                                                                                                                                                                                                                                                                   | Notification | Annonces dans les nouveaux onglets | Search |   |   |   |   |   |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------- | ------ | - | - | - | - | - |
| Impressions                             | Counted when an ad is displayed on screen for a minimum of one second.                                                                                                                                                                                                                                                        | X            | X                                  | X      |   |   |   |   |   |
| Cliques                                 | Counted when a user clicks on the ad. N'inclut pas les clics pour rejeter.                                                                                                                                                                                                                                    | X            | X                                  | X      |   |   |   |   |   |
| CTR                                     | Le taux de clics est un pourcentage exprimant le rapport entre les clics et les impressions.                                                                                                                                                                                                                                  | X            | X                                  | X      |   |   |   |   |   |
| Taux de rejet                           | Counted when a user clicks the “close” or “x” button to make an ad go away.                                                                                                                                                                                                                                                   | X            |                                    |        |   |   |   |   |   |
| Visites du site                         | Counted when the user clicks an ad and spends at least 5 seconds on the advertiser's website, with the website open in an active browser tab. The 5 seconds must be spent on the site after arriving by clicking the ad link, and the tab must remain open and active the entire time for the visit to count. | X            |                                    |        |   |   |   |   |   |
| Upvotes & downvotes | Counted when a user either upvotes or downvotes an ad in their ad history.                                                                                                                                                                                                                                                    | X            |                                    |        |   |   |   |   |   |
| Conversions                             | Sum total of all conversions, including anonymous conversions without a specified click or view attribution. Counted when a user reaches a designated conversion landing page.                                                                                                                                | X            |                                    |        |   |   |   |   |   |
| Click-through conversions               | Counted when a user reaches a designated conversion landing page following an impression and click of the ad.                                                                                                                                                                                                                 | X            |                                    |        |   |   |   |   |   |
| Conversions post-vue                    | Counted when a user reaches a designated conversion landing page following an ad impression.                                                                                                                                                                                                                                  | X            |                                    |        |   |   |   |   |   |

## Rapport de conversion dans Brave Ads Manager

Le rapport de conversion dans Brave Ads Manager permet aux annonceurs de définir un événement de conversion sur leurs campagnes publicitaires avec Brave en utilisant une URL qui indique quand un utilisateur atteint un certain stade du parcours client

**Points clés**

- Les conversions sont comptabilisées lorsqu'un utilisateur de Brave qui a interagi avec votre publicité visite une page spécifique de votre site web.

- La mesure est possible parce que Brave fonctionne à la fois comme navigateur et serveur publicitaire

- Le processus se déroule entièrement au niveau du navigateur, éliminant le besoin de cookies, de tags ou de scripts de suivi sur votre site web

### Limitations

- Les URLs des pages de conversion **doivent** respecter ces conditions pour être approuvées :
  - Se trouver sur le même eTLD+1 que le domaine de l'email utilisé
    - Par exemple, si mon adresse email est `admin@exemple.com`, je peux définir l'URL de conversion comme une page sur `https://exemple.com` ou un sous-domaine de ce site, tel que `https://boutique.exemple.com`.
- Brave peut ne pas être en mesure de comptabiliser la conversion si un utilisateur quitte le navigateur Brave (par exemple, lors de la visite d'applications tierces comme des App Store). Dans de tels cas, les annonceurs devraient utiliser des méthodes de rapport indépendantes supplémentaires fournies par des tiers.

### Choisir une URL de conversion efficace

Utiliser une URL de conversion fournit une mesure plus précise de l'efficacité d'une publicité que de simplement suivre les visites de la page d'accueil

**Points clés :**

- Utilisez un modèle d’URL qui évite les faux positifs.
  - N’utilisez pas l’URL de base de votre site web comme URL de conversion.
    - Les clics et les visites sur le site sont déjà comptabilisés par défaut pour toutes les campagnes Brave Ads.
- Choisissez une URL qui représente une action plus approfondie sur votre site web, telle que :
  - Page de confirmation d’inscription
  - Page de bienvenue à l’abonnement e-mail
  - Page de confirmation d’achat
    - Par exemple, pour une campagne publicitaire pour « https://shoestore.com », une URL de conversion efficace serait : « https://shoestore.com/check-out/thank-you\\\\\\\\\\\\\\\\\\\\\* »
- En règle générale, toutes les URL de conversion doivent se terminer par des variables génériques pour prendre en compte tout paramètre de requête supplémentaire qui pourrait risquer de perturber le processus de comptabilisation des conversions.
  - Une astérisque (\*) peut être utilisée comme variable générique dans votre URL de conversion, ce qui indiquera à Brave Ads de traiter cette position dans l’URL comme n’importe quelle valeur possible. Cela peut être utilisé dans une variété de situations où les URL de sites de conversion suivent des chemins similaires mais incluent des valeurs différentes, telles que les répertoires de produits ou les identifiants de commande uniques.
    - Par exemple, sur la base de l'exemple ci-dessus, « https://shoestore.com/check-out/thank-you\\\\\\\\\\\\\\\\\\\\\* » capturera efficacement toute URL identique jusqu'à la variable générique, telle que « https://shoestore.com/check-out/thank-you/orderID=63551 »

### Utilisation avancée des variables génériques dans les URL de conversion

Les valeurs génériques peuvent être placées n'importe où dans le sous-chemin de l'URL, y compris entre les sections de chemin. Voici quelques exemples utilisant un magasin de chaussures hypothétique, « https://shoestore.com », qui catégorise ses chaussures disponibles par catégorie, type et couleur sur son site web. Leurs pages sont donc toutes structurées en utilisant le format suivant : « https://shoestore.com/category/type/color/ »

- Exemple 1 : Cette URL de conversion comptabilisera les visites sur les pages du répertoire « running-shoes » classées comme « mens » : `https://shoestore.com/running-shoes/*/mens*`
  - Dans ce cas, la première astérisque représente n’importe quel type, tandis que la seconde est la variable générique recommandée pour toutes les URL de conversion.
- Exemple 2 : Cette URL de conversion comptabilisera les visites sur les pages de toutes les chaussures correspondant à « childrens » : `https://shoestore.com/*/childrens/*`
  - Dans ce cas, la première astérisque représente les sous-chemins de n'importe quelle catégorie de chaussures. La deuxième astérisque agit à la fois comme la couleur des chaussures et remplit également le rôle de la variable générique recommandée.

### Contrôles avancés pour l’attribution

Lors de la configuration d’une URL de conversion dans Brave, il vous sera demandé de choisir une fenêtre d’observation, également appelée fenêtre de rétrospective. Elle détermine combien de temps après une vue (ou un clic) d’une publicité une conversion doit être attribuée à la campagne publicitaire. Cela peut être réglé sur 1, 7 ou 30 jours, où 1 jour capturera le moins de conversions et 30 jours capturera le plus.

Les conversions dans Brave Ads Manager sont représentées via trois métriques pour vous fournir une compréhension plus claire de l’impact des publicités :

- **Conversions** : La somme des conversions post-vue et post-clic.
- **Conversions post-clic** (Click-through) : comptabilisées lorsque l'utilisateur convertit après avoir cliqué sur la publicité.
- **Conversions post-vue** (View-through) : comptabilisées lorsque l'utilisateur voit une publicité mais ne la clique pas et revient plus tard sur le site web.

## Rapport indépendant (première partie)

En plus des rapports proposés via le tableau de bord Brave, vous pouvez utiliser une combinaison des méthodes suivantes pour vérifier de manière précise et indépendante les résultats de votre campagne Brave Ads :

### Paramètres de suivi des clics/URL de page de destination unique

Une page de destination unique est une excellente option pour compter le trafic via les journaux de serveur de votre site ou le tableau de bord d'analyse de première partie. En créant une URL de page de destination dédiée (comme domaine.com/brave) pour la campagne et en veillant à ce qu'elle ne soit utilisée que pour des campagnes Brave Ads, le trafic vers et depuis cette page peut être attribué à des campagnes payantes avec Brave.

### Code de référence/promo

Un code de référence ou promotionnel (par exemple brave15) peut être utilisé au moment du paiement pour signaler les conversions attribuées à votre campagne. Nous recommandons que le code de référence ou promotionnel soit automatiquement rempli pour que les utilisateurs ne l'oublient pas. En utilisant les rapports de votre plateforme, vous pouvez ensuite voir le nombre de conversions qui ont utilisé le code promotionnel ou de référence.

### Query string parameters and first-party cookies (i.e. UTMs)

Les paramètres de suivi des URL de clic sont autorisés, mais seulement lorsqu'ils sont utilisés de manière à ce que votre serveur web ou application web puisse les détecter. L'utilisation de rapports tiers tels que Google Analytics ne montrera pas de données précises. Veuillez noter qu'uniquement les URLs directes sont autorisées pour le lien de clic ; aucun redirection n'est permise.

##### URL de suivi des clics (paramètres UTM)

- Exemple : `https://example.com/product?utm_source=brave&utm_medium=push_notification&utm_campaign=test`
- Page de destination :`https://example.com/product`
- Paramètres de chaîne de requête (UTM) : `utm_source=brave&utm_medium=push_notification&utm_campaign=test`

##### URL de suivi des clics (paramètres de chaîne de requête)

- Example: `https://example.com/product?ref=brave&type=push_notification&campaign=test`
- Page de destination : `https://example.com/product`
- Paramètres de chaîne de requête : `ref=brave&type=push_notification&campaign=test`

Analyser les valeurs et définir les cookies de première partie en fonction des paramètres de la chaîne de requête de l'URL de suivi des clics. Toute cette chaîne de requête peut être définie comme la valeur ou analysée en paires clé-valeur individuelles.
When the same user lands from a different channel, your same code snippet can append or overwrite the cookie values with the new parameter values depending on your preference.
Lorsque l'utilisateur complète l'action attendue et qu'une requête réseau est envoyée à vos serveurs, les cookies doivent être ajoutés aux en-têtes des requêtes ; vous pourrez alors voir qu'un utilisateur provient d'une campagne Brave Ads.

## Verifiable Ad Conversions (VAC)

Les Conversions Publicitaires Vérifiables (VAC) sont une fonction optionnelle du Rapport de Conversion Brave Ads. VAC provides Brave advertisers with the ability to determine their return on ad spend by privately reporting encrypted Conversion IDs. Les annonceurs peuvent ensuite vérifier la liste des identifiants de conversion chiffrés pour confirmer que l'utilisateur converti peut être attribué à une campagne Brave Ads.

Lorsqu'un utilisateur éligible arrive sur la page de conversion, un processus est déclenché qui permet à l'annonceur de comptabiliser l'événement de transaction spécifique, tout en maintenant la confidentialité et l'anonymat de l'utilisateur. Même Brave ne peut lire ni apprendre quoi que ce soit de cet événement (à l'exception du décompte anonyme des événements de conversion signalés). Cela permet d'assurer la confidentialité de bout en bout et permet aux utilisateurs de se sentir mieux à propos de leur événement de conversion, sachant que personne ne peut rien apprendre de la conversion.

Les annonceurs qui choisissent d'utiliser VAC généreront une paire de clés publique-privée dans les paramètres du compte de l'interface Brave Ads. Brave conservera la clé publique, signera l'ID de conversion avec elle et rapportera l'ID de conversion chiffré. Seul l'annonceur aura la clé privée, et seul l'annonceur pourra déchiffrer l'ID de conversion chiffré.

Il est crucial que l'annonceur ne perde pas sa clé privée pour les conversions d'annonces vérifiables.

### Détails de l'ID d'événement de conversion

Le rapport de conversion d'annonces vérifiables se fait par un ID de conversion. Pour votre site, cela peut être un numéro de commande, un ID de transaction ou quelque chose de similaire.

### Exigences :

- La valeur de l'ID de conversion doit être unique pour chaque conversion. Les valeurs en double d'ID d'événement de conversion entraîneront des divergences comptables.
- L'ID de conversion doit être compris entre 1 et 30 caractères, ne contenir que des caractères alphanumériques (ainsi que des tirets) et correspondre à cette expression régulière : « [-a-zA-Z0-9]{1,30} ».
- Les valeurs des événements de plus de 30 caractères échoueront, empêchant l'événement d'être correctement pris en compte. Vous pouvez vérifier si votre identifiant est valide en utilisant un site comme « https://regex101.com/ ».
- Les ID de conversion ne doivent pas inclure d'identifiants d'utilisateur ou d'informations personnelles identifiables. Par exemple, les ID de conversion tels que `<user id>-<random id>`, `<random id>-<email address>` ne sont pas autorisés.

Brave utilise TweetNacl pour chiffrer l'ID de conversion.

Les enveloppes de conversion chiffrées auront l'apparence suivante :

```json
{
 "alg": "crypto_box_curve25519xsalsa20poly1305",
 "ciphertext": "BTX6xKZ4vITaWa11EMcly7gyQ3rN8JoAYvoHeIiYuSS9Lsc4GUQBN54+otIGOsxk",
 "epk": "3N1RKgiOvOXCGjO6txtEwR0DzpEp9U+PkbpwxAkAGwg=",
 "nonce": "N4EH/upCXxyRPLmYLvYCyuaKQASlA6Qo"
}
```

### Options de mise en œuvre

Brave propose deux options de mise en œuvre pour les conversions vérifiables en utilisant un modèle d'URL ou de modèle d'élément DOM.

#### Modèle d'URL

Un annonceur dispose d'un ID de conversion qui est présent en tant que paramètre de chaîne de requête dans le modèle d'URL de la page de conversion. L'annonceur doit fournir à Brave la clé de chaîne de requête qui identifie l'ID de conversion.

Lorsqu'un utilisateur éligible arrive sur l'URL de la page de conversion, Brave :

- Enregistre un événement de conversion
- Analyse l'URL pour la clé de chaîne de requête qui identifie l'ID de conversion
- Chiffre et enregistre l'ID de conversion

Prenons, par exemple, l'URL de la page de conversion suivante : https://example.com/checkout?order=ABC-12345-xyz. Brave recherchera la clé de chaîne de requête order et chiffrera la valeur `ABC-12345-xyz`.

#### Modèle d'élément DOM

Un annonceur dispose d'un ID de conversion qui est présent dans le modèle d'objet de document (DOM) de l'URL de la page de conversion.

L'annonceur doit fournir à Brave l'élément DOM qui identifie de manière unique l'ID de conversion sur la page. Lorsqu'un utilisateur éligible arrive sur l'URL de la page de conversion, Brave :

- Enregistre un événement de conversion
- Analyse le DOM à la recherche du modèle regex qui identifie l'ID de conversion
- Chiffre et enregistre l'ID de conversion

Prenons, par exemple, l'élément DOM suivant : `<div class='order-id-value'>Votre ID de commande : ABC-12345-xyz</div>`. Brave recherchera ce modèle `Votre ID de commande :.*`, définira un groupe de capture `([-a-zA-Z0-9]*)` et chiffrera la valeur `ABC-12345-xyz`.

## Études de notoriété de la marque

Les études de notoriété de la marque Brave consistent en des sondages de recherche avant et après réalisés via Brave afin d'aider les annonceurs à mieux mesurer l'impact de leurs campagnes publicitaires au-delà des indicateurs médiatiques tels que les impressions ou les clics. Les études mesurent généralement la notoriété ou la considération de la marque, mais elles peuvent également mesurer la compréhension du produit ou d'autres effets basés sur les dépenses publicitaires avec Brave.

Avant le lancement de la campagne, les annonceurs fournissent à Brave une série de questions structurées sous forme de sondage et distribuées via Brave Ads à un profil de ciblage correspondant à la campagne publicitaire. Après la campagne, le même ensemble de questions (et des questions supplémentaires qui mesurent la mémorisation de la publicité) seront posées.

Les résultats des enquêtes avant et après la campagne sont comparés pour évaluer l'impact de la publicité. Voici quelques exemples de questions qui peuvent être posées lors d'une étude :

- **Notoriété de la marque** : Avez-vous déjà entendu parler de « nom de l'annonceur » ?
- **Rappel publicitaire** : Avez-vous vu une publicité pour « nom de l'annonceur » au cours de la semaine dernière ?
- **Considération de produit** : Quelle est la probabilité que vous achetiez « nom du produit » dans les prochains mois ?

Les études peuvent être réalisées indépendamment des dépenses à un coût fixe, mais elles peuvent également être incluses en tant que bonus pour chaque campagne dont les dépenses dépassent un seuil spécifié. Contactez notre équipe commerciale pour en savoir plus.
