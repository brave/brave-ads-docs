---
sidebar_position: 2
---

# Relatórios

Anúncios Brave foi construído desde o início para suportar os mais altos padrões de privacidade. Por padrão, o navegador Brave bloqueia rastreamento de terceiros, incluindo Google Analytics, Adobe Analytics e outros fornecedores de relatórios e medição de terceiros. Embora os Anúncios Brave respeite (e não colete) os dados do usuário, também oferece aos anunciantes relatórios detalhados e úteis sobre o desempenho das campanhas em um dashboard simples e fácil de ler. Também permite aos profissionais de marketing ver o desempenho das campanhas usando seus próprios sistemas de relatórios.

## O meu relatório está sendo bloqueado pelo navegador Brave?

O primeiro passo é entender o que está sendo bloqueado pelo navegador Brave. Para isso, abra o Brave no seu desktop e navegue até o seu site comercial ou página de destino da campanha e siga estas etapas:

1. Clique no ícone do leão do Brave no lado direito da barra de endereços.
2. Expanda o menu "Controle Avançado".
3. Clique no número roxo localizado ao lado de "Bloquear Rastreadores e Anúncios" para exibir o que está sendo bloqueado no momento.

Scripts bloqueados desativarão a maioria, senão todas, as funções de rastreamento de terceiros. Aqui está uma tabela útil com exemplos de diferentes cenários de rastreamento e sua compatibilidade com os Anúncios Brave:

| Cenários de exemplo                                           | Exemplo de endpoint para www.exemplo.com | Compatível com os Anúncios Brave |
| ------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------- |
| Análise de Site Personalizada (próprio)    | analise.exemplo.com                      | SIM                              |
| Google Analytics 4 (próprio)               | analise.exemplo.com                      | SIM                              |
| Adobe Analytics (próprio)                  | analise.exemplo.com                      | SIM                              |
| Google Analytics 4 (hospedado pelo Google) | google.com                                               | NÃO                              |
| Adobe Analytics (hospedado pela Adobe)     | adobe.com                                                | NÃO                              |

## Relatórios do Gerenciador de Anúncios Brave

Independentemente de sua campanha ser adquirida via Serviço Gerenciado ou Autoatendimento, todos os anunciantes terão acesso ao dashboard de relatórios dos Anúncios Brave para acompanhar o desempenho das campanhas. Os dashboards de campanhas são atualizados a cada hora, com a opção de exportar relatórios para campanhas de anúncios de Notificação e Feed de Notícias sob demanda.

### Métricas de relatórios disponíveis no Gerenciador de Anúncios Brave

| Métrica                     | Descrição                                                                                                                                                                                                                                                                                                                                                                    | Anúncios de Pesquisa | Anúncios de Nova Guia | Anúncios do feed de notícias | Anúncios de notificação |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | --------------------- | ---------------------------- | ----------------------- |
| Visualizações               | Contabilizado quando um anúncio é exibido na tela por pelo menos um segundo.                                                                                                                                                                                                                                                                                 | X                    | X                     | X                            | X                       |
| Cliques                     | Contabilizado quando um usuário clica no anúncio. Não inclui cliques para dispensar.                                                                                                                                                                                                                                                         | X                    | X                     | X                            | X                       |
| Rejeitado                   | Contabilizado quando um usuário clica no botão "fechar" ou "x" para remover um anúncio.                                                                                                                                                                                                                                                                      |                      |                       | X                            | X                       |
| Visitas ao Site             | Contabilizado quando o usuário clica em um anúncio e passa pelo menos 5 segundos no site do anunciante, com o site aberto em uma guia ativa do navegador. Os 5 segundos devem ser gastos no site após chegar clicando no link do anúncio, e a guia deve permanecer aberta e ativa durante todo o tempo para que a visita seja contabilizada. |                      |                       | X                            | X                       |
| Votos positivos e negativos | Contabilizado quando um usuário vota positiva ou negativamente em um anúncio no histórico de anúncios.                                                                                                                                                                                                                                                       |                      |                       |                              | X                       |
| Conversões                  | Soma de todas as conversões, incluindo conversões anônimas sem atribuição de clique ou visualização especificada. Contabilizado quando um usuário alcança uma página de destino de conversão designada.                                                                                                                                      |                      |                       | X                            | X                       |
| Conversões por Cliques      | Contabilizado quando um usuário chega a uma página de conversão designada após uma visualização e clique no anúncio.                                                                                                                                                                                                                                         |                      |                       | X                            | X                       |
| Conversões por Visualização | Contabilizado quando um usuário chega a uma página de conversão designada após uma visualização de anúncio.                                                                                                                                                                                                                                                  |                      |                       | X                            | X                       |
| CTR                         | A taxa de cliques é uma porcentagem que expressa os cliques em relação às visualizações.                                                                                                                                                                                                                                                                     | X                    | X                     | X                            | X                       |
| SVR                         | A taxa de visitas ao site é uma porcentagem que expressa as visitas ao site em relação às visualizações.                                                                                                                                                                                                                                                     |                      | X                     | X                            | X                       |
| CPA                         | O custo por ação encontrado dividindo o custo total da campanha pelo número de conversões.                                                                                                                                                                                                                                                                   |                      |                       | X                            | X                       |
| Taxa de dispensa            | Uma porcentagem que expressa os anúncios rejeitados em relação às visualizações.                                                                                                                                                                                                                                                                             |                      |                       |                              | X                       |
| Gasto                       | Orçamento gasto pela plataforma.                                                                                                                                                                                                                                                                                                                             | X                    | X                     | X                            | X                       |

## Relatórios de Conversão no Gerenciador de Anúncios Brave

O relatório de conversão no Gerenciador de Anúncios Brave permite que os anunciantes definam um evento de conversão em suas campanhas de anúncios no Brave usando uma URL que indica quando um usuário atinge um determinado estágio da jornada do cliente. 

**Pontos principais**

- As conversões são contabilizadas quando um usuário do Brave que interagiu com seu anúncio visita uma página específica em seu site.

- A medição é possível porque o Brave funciona tanto como navegador quanto como servidor de anúncios. 

- O processo ocorre inteiramente no navegador, eliminando a necessidade de cookies, tags ou scripts de rastreamento em seu site. 

### Limitações

- As URLs das páginas de conversão **precisam** seguir estas condições para serem aprovadas:
 - Estar no mesmo eTLD+1 que o domínio do e-mail utilizado
  - Por exemplo, se meu endereço de e-mail for `admin@exemplo.com`, posso definir a URL de conversão como uma página em `https://exemplo.com` ou um subdomínio desse site, como `https://loja.exemplo.com`.
- O Brave pode não conseguir contabilizar a conversão se um usuário sair do navegador Brave (por exemplo, ao visitar aplicativos de terceiros, como lojas de aplicativos). Nesses casos, os anunciantes devem usar métodos de relatório independentes adicionais fornecidos por terceiros.

### Escolhendo uma URL de conversão eficaz

Usar uma URL de conversão fornece uma medida mais precisa da eficácia do anúncio do que simplesmente rastrear visitas à página inicial. 

**Pontos principais:**

- Use um padrão de URL que evite falsos positivos.
 - Não use a URL base do seu site como URL de conversão. 
  - Cliques e visitas ao site já são contabilizados por padrão em todas as campanhas dos Anúncios Brave.
- Escolha uma URL que represente uma ação mais profunda em seu site, como:
 - Página de conclusão de cadastro
 - Página de boas-vindas à assinatura de e-mail
 - Página de confirmação de compra
  - Por exemplo, em uma campanha de anúncios para `https://lojadesapatos.com`, uma URL de conversão eficaz seria: `https://lojadesapatos.com/finalizar-compra/obrigado*`
- Como regra geral, todas as URLs de conversão devem terminar em variáveis coringas para contabilizar quaisquer parâmetros de consulta adicionais que possam interromper o processo de contagem de conversões.
 - Um asterisco (\*) pode ser usado como uma variável coringa em sua URL de conversão que informará aos Anúncios Brave para tratar essa posição na URL como qualquer valor possível. Isso pode ser usado em uma variedade de situações em que as URLs dos sites de conversão seguem caminhos semelhantes, mas incluem valores diferentes, como diretórios de produtos ou IDs de pedidos únicos.
  - Por exemplo, com base no exemplo acima, `https://lojadesapatos.com/finalizar-compra/obrigado*` englobaria efetivamente qualquer URL que seja igual até a variável coringa, como `https://lojadesapatos.com/finalizar-compra/obrigado/orderID=63551`

### Uso avançado de variáveis coringas em URLs de conversão

Valores coringas podem ser colocados em qualquer lugar do subcaminho da URL, incluindo entre seções do caminho. Aqui estão alguns exemplos usando uma loja de sapatos hipotética, `https://lojadesapatos.com`, que categoriza seus sapatos disponíveis por categoria, tipo e cor em todo o site. Suas páginas são estruturadas usando o seguinte formato: `https://lojadesapatos.com/categoria/tipo/cor/`

- Exemplo 1: Esta URL de conversão contará visitas a páginas no diretório "tenis-de-corrida" categorizadas como "masculino": `https://lojadesapatos.com/tenis-de-corrida/*/masculino*`
 - Neste caso, o primeiro asterisco representa qualquer tipo, enquanto o segundo é o coringa final recomendado em todas as URLs de conversão.
- Exemplo 2: Esta URL de conversão contará visitas a páginas de qualquer calçado que seja "infantil": `https://lojadesapatos.com/*/infantil/*`
 - Nesse caso, o primeiro asterisco representa os subcaminhos para qualquer categoria de calçados. O segundo asterisco atua tanto como a cor do calçado quanto cumpre o papel do coringa final recomendado.

### Controles avançados para atribuição

Ao configurar uma URL de conversão no Brave, você será solicitado a escolher uma janela de observação, também conhecida como janela de retrospectiva, que determina por quanto tempo após a visualização (ou clique) de um anúncio uma conversão deve ser atribuída à campanha publicitária. Isso pode ser configurado para 1, 7 ou 30 dias, onde 1 dia capturará o menor número de conversões e 30 dias capturará o maior número.

As conversões no Gerenciador de Anúncios Brave são representadas por três métricas para fornecer uma compreensão mais clara do impacto do anúncio:

- **Conversões:** A soma das conversões pós-visualização e pós-clique.
- **Conversões pós-clique** (Por cliques): contabilizadas quando o usuário converte após clicar no anúncio.
- Conversões pós-visualização (Por visualização): contabilizadas quando o usuário vê um anúncio, mas não clica nele e depois retorna ao site.

## Relatórios independentes (próprios)

Além dos relatórios oferecidos via dashboard do Brave, você pode usar uma combinação dos seguintes métodos para verificar com precisão e de forma independente os resultados da sua campanha dos Anúncios Brave:

### URL de página de destino única/parâmetros de rastreamento de cliques

Uma página de destino única é uma ótima opção para contar o tráfego através dos registros do servidor do seu site ou do dashboard de análise próprio. Ao criar uma URL de página de destino dedicada (como dominio.com/brave) para a campanha e garantir que seja usada apenas para campanhas dos Anúncios Brave, o tráfego de e para essa página pode ser atribuído a campanhas pagas com Brave.

### Código de indicação/promoção

Um código de indicação (do inglês, _referral code_) ou promoção (por exemplo, brave15) pode ser usado no momento da finalização da compra para relatar conversões atribuídas à sua campanha. Recomendamos que o código de indicação ou promoção seja preenchido automaticamente para que os usuários não esqueçam. Usando os relatórios da sua plataforma, você pode então visualizar o número de conversões que usaram o código de promoção ou indicação.

### Parâmetros de string de consulta e cookies de primeira parte (Por exemplo, UTMs) UTMs) UTMs) UTMs)

Parâmetros de rastreamento de URL de clique são permitidos, mas apenas quando usados de forma que seu servidor web ou aplicação web possam detectar. Usar relatórios de terceiros, como o Google Analytics, não mostrará dados precisos. Por favor, note que apenas URLs diretas são permitidas para o link de clique—sem redirecionamentos.

##### URL de Clique (parâmetros UTM)

- Exemplo: `https://example.com/product?utm_source=brave&utm_medium=push_notification&utm_campaign=test`
- Página de destino: `https://exemplo.com/produto`
- Parâmetros de string de consulta (UTM): `utm_source=brave&utm_medium=push_notification&utm_campaign=test`

##### URL de Clique (parâmetros de string de consulta)

- Exemplo: `https://exemplo.com/produto?ref=brave&type=push_notification&campaign=test`
- Página de destino: `https://exemplo.com/produto`
- Parâmetros de string de consulta: `ref=brave&type=push_notification&campaign=test`

Parse valores e defina cookies de primeira parte com base nos parâmetros de string de consulta da URL de clique. Essa string de consulta inteira pode ser definida como valor ou analisada em pares chave-valor individuais.
Quando o mesmo usuário chega de um canal diferente, seu mesmo trecho de código pode anexar ou sobrescrever os valores dos cookies com os novos valores de parâmetros, dependendo da sua preferência.
Quando o usuário completa a ação esperada e uma solicitação de rede é feita de volta aos seus servidores, os cookies devem ser anexados aos cabeçalhos da solicitação, permitindo que você identifique que o usuário veio de uma campanha dos Anúncios Brave.

## Conversões de Anúncios Verificáveis (VAC)

Conversões de Anúncios Verificáveis (VAC) é um conjunto de recursos opcional do Relatório de Conversões dos Anúncios Brave. O VAC permite que os anunciantes do Brave determinem seu retorno sobre o investimento publicitário, relatando de forma privada IDs de Conversão criptografados. Os anunciantes podem então auditar a lista de IDs de Conversão criptografados para verificar se o usuário convertido pode ser atribuído a uma campanha dos Anúncios Brave.

Quando um usuário elegível chega à Página de Conversão, um processo é iniciado que permite ao anunciante contabilizar o evento de transação específica, mantendo a privacidade e anonimato do usuário. Nem mesmo o Brave pode ler ou aprender algo sobre esse evento (além do número de eventos de conversão relatados anonimamente). Isso garante a privacidade de ponta a ponta e proporciona aos usuários uma maior confiança em seus Eventos de Conversão, sabendo que ninguém pode obter informações a partir da conversão.

Os anunciantes que optam por usar o VAC gerarão um par de chaves pública-privada nas Configurações da Conta da interface dos Anúncios Brave. O Brave manterá a chave pública, assinará o ID de Conversão com ela e reportará o ID de Conversão criptografado. Apenas o Anunciante terá a chave privada, e apenas o anunciante será capaz de descriptografar o ID de Conversão criptografado.

É essencial que o anunciante não perca sua chave privada para as Conversões de Anúncios Verificáveis.

### Detalhes do ID do evento de conversão

O Relatório de Conversões de Anúncios Verificáveis é feito através de um ID de Conversão. Para o seu site, isso pode ser um número de pedido, um ID de transação ou algo semelhante.

### Requisitos:

- O valor do ID de Conversão deve ser único para cada conversão. Valores duplicados de ID de Evento de Conversão resultarão em discrepâncias contábeis.
- O ID de Conversão deve ter entre 1 a 30 caracteres, conter apenas caracteres alfanuméricos (incluindo traços) e corresponder a esta expressão regular: `[-a-zA-Z0-9]{1,30}`.
- Valores de eventos com mais de 30 caracteres falharão, impedindo que o evento seja contabilizado com precisão. Você pode verificar se seu identificador é válido usando um site como `https://regex101.com/`.
- IDs de Conversão não devem incluir identificadores de usuário ou informações de identificação pessoal. Por exemplo, IDs de Conversão como os seguintes não são permitidos: `<user id>-<random id>`, `<random id>-<email address>`.

O Brave usa o TweetNacl para criptografar o ID de Conversão.

Envelopes de Conversão Criptografados terão a seguinte aparência:

```json
{
 "alg": "crypto_box_curve25519xsalsa20poly1305",
 "ciphertext": "BTX6xKZ4vITaWa11EMcly7gyQ3rN8JoAYvoHeIiYuSS9Lsc4GUQBN54+otIGOsxk",
 "epk": "3N1RKgiOvOXCGjO6txtEwR0DzpEp9U+PkbpwxAkAGwg=",
 "nonce": "N4EH/upCXxyRPLmYLvYCyuaKQASlA6Qo"
}
```

### Opções de Implementação

O Brave oferece duas opções de implementação para Conversões Verificáveis usando um padrão de URL ou padrão de elemento DOM.

#### Padrão de URL

Um anunciante possui um ID de Conversão que está presente como um parâmetro de string de consulta no padrão de URL da Página de Conversão. O anunciante deve fornecer ao Brave a chave da string de consulta que identifica o ID de Conversão.

Quando um usuário elegível acessa a URL da Página de Conversão, o Brave irá:

- Registrar um evento de conversão
- Parsear a URL para a chave da string de consulta que identifica o ID de Conversão
- Criptografar e registrar o ID de Conversão

Por exemplo, considere a seguinte URL da Página de Conversão: https://exemplo.com/finalizar?order=ABC-12345-xyz. O Brave procurará a chave da string de consulta "order" e criptografará o valor `ABC-12345-xyz`.

#### Padrão de Elemento DOM

Um anunciante possui um ID de Conversão que está presente no Modelo de Objeto de Documentos (DOM) da URL da Página de Conversão.

O anunciante deve fornecer ao Brave o elemento DOM que identifica exclusivamente o ID de Conversão na página. Quando um usuário elegível acessa a URL da Página de Conversão, o Brave irá:

- Registrar um evento de conversão
- Parsear o DOM em busca do padrão regex que identifica o ID de Conversão
- Criptografar e registrar o ID de Conversão

Por exemplo, considere o seguinte elemento DOM: `<div class='order-id-value'>Seu ID do Pedido: ABC-12345-xyz</div>`. O Brave buscará por este padrão `Seu ID do Pedido:.*`, definirá um grupo de captura `([-a-zA-Z0-9]*)` e criptografará o valor `ABC-12345-xyz`.

## Estudos de impacto de marca

Os estudos de impacto de marca do Brave consistem em pesquisas pré e pós-campanha conduzidas via Brave para ajudar os anunciantes a medir melhor o impacto de suas campanhas publicitárias além de métricas de mídia como visualizações ou cliques. Os estudos geralmente medem o reconhecimento ou consideração da marca, mas também podem medir o crescimento na compreensão do produto ou outros efeitos com base nos gastos com mídia paga no Brave.

Antes do lançamento da campanha, os anunciantes fornecem ao Brave uma série de perguntas estruturadas em uma pesquisa e distribuídas através dos Anúncios Brave para um perfil de direcionamento que corresponde à campanha publicitária. Após a campanha, as mesmas perguntas (e perguntas adicionais que avaliam a lembrança dos anúncios) serão feitas.

Os resultados da pesquisa pré e pós-campanha são comparados para avaliar o impacto da publicidade. Aqui estão alguns exemplos de perguntas que podem ser aplicadas durante um estudo:

- **Reconhecimento de marca**: Você já ouviu falar de “nome do anunciante” antes?
- **Lembrança de anúncio**: Você viu um anúncio de “nome do anunciante” na semana passada?
- **Consideração de produto**: Quão provável é que você compre “nome do produto” nos próximos meses?

Os estudos podem ser realizados independentemente do gasto por um custo fixo, mas também podem ser incluídos como um bônus com base em cada campanha para gastos acima de um limite especificado. Entre em contato com nossa equipe de vendas para saber mais.
