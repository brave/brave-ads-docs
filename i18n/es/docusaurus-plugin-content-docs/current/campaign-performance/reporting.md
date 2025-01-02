---
sidebar_position: 2
---

# Informes

Los Anuncios de Brave están diseñados desde cero para respaldar los más altos estándares de privacidad. De forma predeterminada, el navegador Brave bloquea el seguimiento de terceros, incluidos Google Analytics, Adobe Analytics y otros proveedores de informes y mediciones de terceros. Si bien los Anuncios de Brave respetan (y no recopilan) los datos de los usuarios, también brindan a los anunciantes informes útiles y detallados sobre los datos de rendimiento de la campaña en un panel simple y fácil de leer. También permiten a los profesionales del marketing ver el rendimiento de las campañas utilizando sus propios sistemas de informes.

## ¿Mis informes están bloqueados por Brave Browser?

El primer paso es comprender qué está bloqueando el navegador Brave. Para ello, abra Brave en su escritorio, vaya al sitio web de su empresa o a la página de aterrizaje de su campaña y siga estos pasos:

1. Haga clic en el icono del león de Brave en el lado derecho de la barra de direcciones.
2. Expanda el menú "Control avanzado".
3. Haga clic en el número morado ubicado junto a "Bloquear rastreadores y anuncios" para mostrar lo que se está bloqueando actualmente.

Los scripts bloqueados deshabilitarán la mayoría, si no todas, las funciones de seguimiento de terceros. A continuación, se muestra una tabla útil con ejemplos de diferentes escenarios de seguimiento y su compatibilidad con los Anuncios de Brave:

| Escenarios de ejemplo                                                | Muestra de punto final para www.ejemplo.com | Compatible con Anuncios de Brave |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------- |
| Análisis de sitios web personalizados (de origen) | analisis.ejemplo.com                        | SÍ                               |
| Google Analytics 4 (de origen)                    | analisis.ejemplo.com                        | SÍ                               |
| Adobe Analytics (de origen)                       | analisis.ejemplo.com                        | SÍ                               |
| Google Analytics 4 (alojado por Google)           | google.com                                                  | NO                               |
| Adobe Analytics (alojado por Adobe)               | adobe.com                                                   | NO                               |

## Informes del Administrador de Anuncios de Brave

Tanto si su campaña se compra a través del servicio gestionado como de autoservicio, todos los anunciantes tendrán acceso al panel de informes de Anuncios de Brave para informar sobre el rendimiento de las campañas. Los paneles de control de campaña se actualizan cada hora con la opción de exportar informes para las campañas publicitarias de notificación y noticias bajo demanda.

### Métricas de informes disponibles en el Administrador de Anuncios de Brave

| Métrica                        | Descripción                                                                                                                                                                                                                                                                                                                                                                                             | Anuncios de búsqueda        | Anuncios de nueva pestaña | Anuncios de noticias | Anuncios de notificación |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------- | -------------------- | ------------------------ |
| Impresiones                    | Se cuenta cuando un anuncio se muestra en la pantalla durante un mínimo de un segundo.                                                                                                                                                                                                                                                                                                  | X                           | X                         | X                    | X                        |
| Clics                          | Se cuenta cuando un usuario hace clic en el anuncio. No incluye los clics para rechazar.                                                                                                                                                                                                                                                                                | X                           | X                         | X                    | X                        |
| Ignorado                       | Se cuenta cuando un usuario hace clic en el botón "cerrar" o "x" para hacer que un anuncio desaparezca.                                                                                                                                                                                                                                                                                 |                             |                           | X                    | X                        |
| Visitas al sitio               | Se cuenta cuando el usuario hace clic en un anuncio y pasa al menos 5 segundos en el sitio web del anunciante, con el sitio web abierto en una pestaña activa del navegador. Los 5 segundos deben pasarse en el sitio después de llegar haciendo clic en el enlace del anuncio, y la pestaña debe permanecer abierta y activa todo el tiempo para que la visita cuente. |                             |                           | X                    | X                        |
| Votos a favor y en contra      | Se cuenta cuando un usuario vota a favor o en contra de un anuncio en su historial de anuncios.                                                                                                                                                                                                                                                                                         |                             |                           |                      | X                        |
| Conversiones                   | Suma total de todas las conversiones, incluidas las conversiones anónimas sin una atribución de clic o vista especificada. Se cuenta cuando un usuario llega a una página de destino de conversión designada.                                                                                                                                                           |                             |                           | X                    | X                        |
| Conversiones por clic          | Se cuenta cuando un usuario llega a una página de destino de conversión designada después de una impresión y un clic en el anuncio.                                                                                                                                                                                                                                                     |                             |                           | X                    | X                        |
| Conversiones por visualización | Se cuenta cuando un usuario llega a una página de destino de conversión designada después de una impresión de anuncio.                                                                                                                                                                                                                                                                  |                             |                           | X                    | X                        |
| CTR                            | La tasa de clics es un porcentaje que expresa los clics en relación con las impresiones.                                                                                                                                                                                                                                                                                                | X (beta) | X                         | X                    | X                        |
| SVR                            | La tasa de visitas al sitio es un porcentaje que expresa las visitas al sitio en relación con las impresiones.                                                                                                                                                                                                                                                                          |                             | X                         | X                    | X                        |
| CPA                            | El costo por acción que se obtiene dividiendo el costo total de la campaña por el número de conversiones.                                                                                                                                                                                                                                                                               |                             |                           | X                    | X                        |
| Tasa de rechazo                | Porcentaje que expresa los anuncios rechazados en relación con las impresiones.                                                                                                                                                                                                                                                                                                         |                             |                           |                      | X                        |
| Gasto                          | Presupuesto que se ha gastado por la plataforma.                                                                                                                                                                                                                                                                                                                                        | X                           | X                         | X                    | X                        |

## Informes de conversiones en el Administrador de Anuncios de Brave

Los informes de conversiones del Administrador de Anuncios de Brave permiten a los anunciantes definir un evento de conversión en sus campañas publicitarias con Brave mediante una URL que indica cuándo un usuario llega a una determinada etapa del recorrido del cliente.

**Puntos clave**

- Las conversiones se cuentan cuando un usuario de Brave que interactuó con su anuncio visita una página específica de su sitio web.

- La medición es posible porque Brave funciona como navegador y servidor de anuncios.

- El proceso ocurre completamente a nivel del navegador, lo que elimina la necesidad de cookies, etiquetas o scripts de seguimiento en su sitio web.

### Limitaciones

- Las URL de las páginas de conversión **deben** seguir estas condiciones para ser aprobadas:
  - Estar en el mismo eTLD+1 que el dominio de correo electrónico utilizado.
    - Por ejemplo, si mi dirección de correo electrónico es `admin@example.com`, puedo establecer la URL de conversión como una página en `https://example.com` o un subdominio de ese sitio web, como `https://shop.example.com`.
- Es posible que Brave no pueda contabilizar la conversión si un usuario sale del navegador Brave (por ejemplo, cuando visita aplicaciones de terceros, como tiendas de aplicaciones). En tales casos, los anunciantes deben utilizar métodos de informes independientes adicionales proporcionados por los terceros.

### Elegir una URL de conversión efectiva

El uso de una URL de conversión proporciona una medida más precisa de la eficacia de los anuncios que el simple seguimiento de las visitas a la página principal.

**Puntos clave:**

- Utilice un patrón de URL que evite falsos positivos.
  - No utilice la URL base de su sitio web como URL de conversión.
    - Los clics y las visitas al sitio ya se cuentan de forma predeterminada para todas las campañas de Anuncios de Brave.
- Elija una URL que represente una acción más profunda en su sitio web, como:
  - Página de finalización de registro
  - Página de bienvenida de suscripción por correo electrónico
  - Página de confirmación de compra
    - Por ejemplo, en una campaña publicitaria para `https://shoestore.com`, una URL de conversión efectiva sería: `https://shoestore.com/check-out/thank-you*`
- Como regla general, todas las URL de conversión deben terminar en variables comodín para tener en cuenta cualquier parámetro de consulta adicional que pueda interrumpir el proceso de recuento de conversiones.
  - Se puede usar un asterisco (\*) como variable comodín en la URL de conversión que le indicará a los Anuncios de Brave que trate esa posición en la URL como cualquier valor posible. Esto se puede utilizar en una variedad de situaciones en las que las URL del sitio web de conversión siguen rutas similares pero incluyen valores diferentes, como directorios de productos o ID de pedido únicos.
    - Por ejemplo, basándose en el ejemplo anterior, `https://shoestore.com/check-out/thank-you*` capturaría efectivamente cualquier URL que sea la misma que lleve hasta la variable comodín, como `https://shoestore.com/check-out/thank-you/orderID=63551`

### Uso avanzado de variables comodín en las URL de conversión

Los valores comodín se pueden colocar en cualquier lugar de la subruta de la URL, incluidas las secciones intermedias de la ruta. Estos son algunos ejemplos que utilizan una hipotética tienda de zapatos, `https://shoestore.com`, que clasifica sus zapatos disponibles por categoría, tipo y color a través de su sitio web. Por lo tanto, todas sus páginas están estructuradas con el siguiente formato: `https://shoestore.com/category/type/color/`

- Ejemplo 1: Esta URL de conversión contará las visitas a las páginas del directorio "running-shoes" categorizadas como "mens": `https://shoestore.com/running-shoes/*/mens*`
  - En este caso, el primer asterisco representa cualquier tipo, mientras que el segundo es el comodín final recomendado en todas las URL de conversión.
- Ejemplo 2: Esta URL de conversión contará las visitas a las páginas de cualquier calzado que sean "childrens": `https://shoestore.com/*/childrens/*`
  - En este caso, el primer asterisco representa los subcaminos de cualquier categoría de calzado. El segundo asterisco actúa a la vez como color del zapato, y también cumple la función de comodín final recomendado.

### Controles avanzados para la atribución

Al configurar una URL de conversión en Brave, se le pedirá que elija una ventana de observación, también conocida como ventana retrospectiva, que determina cuánto tiempo después de una vista (o clic) de un anuncio se debe atribuir una conversión a la campaña publicitaria. Esto se puede establecer para 1, 7 o 30 días, donde 1 día capturará la menor cantidad de conversiones y 30 días capturará la mayoría.

Las conversiones en el Administrador de los Anuncios de Brave se representan a través de tres métricas para brindarle una comprensión más clara del impacto de los anuncios:

- **Conversiones**: La suma de las conversiones posteriores a la visualización y al clic.
- **Conversiones posteriores al clic** (por clic): se cuentan cuando el usuario convierte después de hacer clic en el anuncio.
- **Conversiones posteriores a la visualización** (por visualización): se cuentan cuando el usuario ve un anuncio pero no hace clic en él y más tarde vuelve al sitio web.

## Informes independientes (de origen)

Además de los informes ofrecidos a través del panel de control de Brave, puede utilizar una combinación de los siguientes métodos para verificar de forma precisa e independiente los resultados de su campaña de Anuncios de Brave:

### Parámetros únicos de seguimiento de clics/URL de la página de destino

Una página de destino única es una gran opción para contar el tráfico a través de los registros del servidor de su sitio o del panel de análisis de primeros (origen). Al crear una URL de página de destino dedicada (como domain.com/brave) para la campaña y asegurarse de que solo se use para las campañas de Anuncios de Brave, el tráfico hacia y desde esta página se puede atribuir a las campañas pagadas con Brave.

### Código de referencia/promoción

Se puede utilizar un código promocional o de referencia (por ejemplo, brave15) en el momento del pago para informar sobre las conversiones atribuidas a su campaña. Recomendamos que el código de referencia o promocional se rellene automáticamente para que los usuarios no lo olviden. Utilizando los informes de su plataforma, usted podrá ver el número de conversiones que han utilizado el código promocional o de referencia.

### Parámetros de cadena de consulta y cookies de origen (es decir, UTMs) UTMs) UTMs) UTMs)

Los parámetros de seguimiento de URL de clics están permitidos, pero solo cuando se utilizan de una manera que el servidor web o la aplicación web puedan detectar. El uso de informes de terceros, como Google Analytics, no mostrará datos precisos. Tenga en cuenta que solo se permiten URL directas para el enlace de clic, sin redireccionamientos.

##### URL de clic (parámetros UTM)

- Ejemplo: `https://example.com/product?utm_source=brave&utm_medium=push_notification&utm_campaign=test`
- Página de destino:`https://example.com/product`
- Parámetros de cadena de consulta (UTM): `utm_source=brave&utm_medium=push_notification&utm_campaign=test`

##### URL de clic (parámetros de cadena de consulta)

- Ejemplo: `https://example.com/product?ref=brave&type=push_notification&campaign=test`
- Página de destino: `https://example.com/product`
- Parámetros de cadena de consulta: `ref=brave&type=push_notification&campaign=test`

Analice los valores y establezca cookies de origen en función de los parámetros de la cadena de consulta de la URL de clic. Esta cadena de consulta completa se puede establecer como el valor o analizarse en pares de clave-valor individuales.
Cuando el mismo usuario llega desde un canal diferente, el mismo fragmento de código puede agregar o sobrescribir los valores de las cookies con los nuevos valores de los parámetros, según sus preferencias.
Cuando el usuario completa la acción esperada y se realiza una solicitud de red a sus servidores, las cookies deben adjuntarse a los encabezados de solicitud y puede ver que un usuario proviene de una campaña de Anuncios de Brave.

## Conversiones de anuncios verificables (VAC)

Las conversiones de anuncios verificables (VAC) son un conjunto de funciones opcionales de los informes de conversiones de los Anuncios de Brave. VAC ofrece a los anunciantes de Brave la capacidad de determinar el retorno de la inversión publicitaria mediante informes privados de identificadores de conversión cifrados. Los anunciantes pueden entonces auditar la lista de identificadores de conversión cifrados para verificar que el usuario convertido puede ser atribuido a una campaña de Anuncios de Brave.

Cuando un usuario elegible llega a la página de conversión, se invoca un proceso que permite al anunciante contabilizar el evento de transacción específico, mientras mantiene la privacidad y el anonimato del usuario. Ni siquiera Brave puede leer o aprender nada sobre ese evento (aparte del recuento de eventos de conversión reportado de forma anónima). Esto permite la privacidad de principio a fin y permite a los usuarios sentirse mejor con su evento de conversión, sabiendo que nadie puede aprender nada de la conversión.

Los anunciantes que decidan utilizar VAC generarán un par de claves públicas y privadas en la configuración de la cuenta de la interfaz de Anuncios de Brave. Brave conservará la clave pública, firmará el ID de conversión con ella e informará sobre el ID de conversión cifrado. Solo el anunciante tendrá la clave privada y solo el anunciante podrá descifrar el ID de conversión cifrado.

Es crucial que el anunciante no pierda su clave privada para las conversiones de anuncios verificables.

### Detalles del ID del evento de conversión

Los informes de conversión de anuncios verificables se realizan mediante un ID de conversión. Para su sitio, esto puede ser un número de pedido, un ID de transacción o algo similar.

### Requisitos:

- El valor del ID de conversión debe ser único para cada conversión. Los valores duplicados del ID del evento de conversión darán lugar a discrepancias contables.
- El ID de conversión debe tener entre 1 y 30 caracteres, contener sólo caracteres alfanuméricos (además de guiones) y coincidir con esta expresión regular: ` [-a-zA-Z0-9]{1,30}`.
- Se producirá un error en los valores de evento de más de 30 caracteres, lo que impedirá que el evento se contabilice con precisión. Puede comprobar si su identificador es válido usando un sitio como `https://regex101.com/`.
- Los ID de conversión no deben incluir identificadores de usuario ni información de identificación personal. Por ejemplo, no se permiten ID de conversión como los siguientes: `<user id>-<random id>`, `<random id>-<email address>`.

Brave utiliza TweetNacl para cifrar el ID de conversión.

Los sobres de conversión cifrados se verán así:

```json
{
 "alg": "crypto_box_curve25519xsalsa20poly1305",
 "ciphertext": "BTX6xKZ4vITaWa11EMcly7gyQ3rN8JoAYvoHeIiYuSS9Lsc4GUQBN54+otIGOsxk",
 "epk": "3N1RKgiOvOXCGjO6txtEwR0DzpEp9U+PkbpwxAkAGwg=",
 "nonce": "N4EH/upCXxyRPLmYLvYCyuaKQASlA6Qo"
}
```

### Opciones de implementación

Brave proporciona dos opciones de implementación para las conversiones verificables utilizando un patrón de URL o un patrón de elemento DOM.

#### Patrón de URL

Un anunciante tiene un ID de conversión que está presente como un parámetro de cadena de consulta en el patrón de URL de la página de conversión. El anunciante debe proporcionar a Brave la clave de cadena de consulta que identifica el ID de conversión.

Cuando un usuario elegible llegue a la URL de la página de conversión, Brave hará lo siguiente:

- Registrará un evento de conversión
- Analizará la URL de la clave de cadena de consulta que identifica el ID de conversión
- Cifrará y registrará el ID de conversión

Tome, por ejemplo, la siguiente URL de página de conversión: https://example.com/checkout?order=ABC-12345-xyz. Brave buscará el orden de la clave de la cadena de consulta y cifrará el valor `ABC-12345-xyz`.

#### Patrón de elemento DOM

Un anunciante tiene un ID de conversión que está presente en el Modelo de Objetos de Documento (DOM) de la URL de la página de conversión.

El anunciante debe proporcionar a Brave el elemento DOM que identifica de forma única el ID de conversión en la página. Cuando un usuario elegible llegue a la URL de la página de conversión, Brave hará lo siguiente:

- Registrará un evento de conversión
- Analizará el DOM en busca del patrón de expresiones regulares que identifica el ID de conversión
- Cifrará y registrará el ID de conversión

Tome, por ejemplo, el siguiente elemento DOM: `<div class='order-id-value'>Su ID de pedido: ABC-12345-xyz</div>`. Brave buscará este patrón `Su ID de pedido:.*`, establecerá un grupo de captura `([-a-zA-Z0-9]*)` y cifrará el valor `ABC-12345-xyz`.

## Estudios de elevación de marca

Los estudios de elevación de marca de Brave consisten en encuestas de investigación previas y posteriores realizadas a través de Brave para ayudar a los anunciantes a medir mejor el impacto de sus campañas publicitarias más allá de las métricas de medios, como las impresiones o los clics. Los estudios suelen medir el conocimiento o la consideración de la marca, pero también pueden medir el crecimiento en la comprensión del producto u otros efectos basados en el gasto en medios pagados con Brave.

Antes del lanzamiento de la campaña, los anunciantes proporcionan a Brave una serie de preguntas estructuradas en una encuesta y distribuidas a través de Anuncios de Brave a un perfil de segmentación que coincida con la campaña publicitaria. Después de la campaña, se responderá el mismo conjunto de preguntas (y preguntas adicionales que miden el recuerdo del anuncio).

Los resultados de la encuesta previa y posterior a la campaña se comparan para medir el impacto de la publicidad. Estos son algunos ejemplos de preguntas que se pueden responder durante un estudio:

- **Conocimiento de marca**: ¿Ha oído hablar de "nombre del anunciante" antes?
- **Recuerdo del anuncio**: ¿Ha visto un anuncio de "nombre del anunciante" en la última semana?
- **Consideración del producto**: ¿Qué probabilidad hay de que compre el "nombre del producto" en los próximos meses?

Los estudios pueden ejecutarse independientemente del gasto por un costo fijo, pero también se pueden incluir como una bonificación por campaña para los gastos por encima de un umbral específico. Póngase en contacto con nuestro equipo de ventas para obtener más información.
