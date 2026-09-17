# AACANS — site institucional

Site institucional da Associação de Apoio às Pessoas com Câncer de Sertãozinho-SP. A aplicação comunica a fase de estruturação da associação com transparência e sem publicar dados oficiais ainda não confirmados.

## Stack

Next.js com App Router, TypeScript, CSS responsivo e Lucide React. O projeto usa Server Components por padrão e gera saída estática para GitHub Pages.

## Executar

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Estrutura

`app/` contém páginas, metadados, sitemap, robots, manifest e 404; `components/` contém navegação, rodapé, acessibilidade, formulários e cards. A logo oficial está em `public/brand/logo-aacans.jpg` e o original deve ser preservado.

## Formulários e evolução

Os formulários mostram um estado transparente e não fingem envio enquanto `CONTACT_FORM_ENDPOINT` não estiver configurado. A integração deve ser feita por endpoint server-side com validação, rate limiting e Turnstile. Uma futura camada de dados pode conectar o front-end ao Supabase sem reescrever a apresentação.

## Deploy

Produção: [https://bugijo.github.io/aacans-site/](https://bugijo.github.io/aacans-site/). Cada push em `main` executa `.github/workflows/deploy-pages.yml`. O GitHub Pages hospeda arquivos estáticos: headers de resposta definidos em `next.config.ts` não podem ser aplicados pelo Pages, então não há backend, server actions ou secrets no deploy atual. Para usar domínio próprio futuramente, configure o domínio nas Pages, ajuste `metadataBase`, sitemap e `basePath`/`assetPrefix` conforme a hospedagem. Não há pagamento ou doação ativa nesta versão.

Para integrar Supabase futuramente, adicione uma camada server-side/API fora do export estático, variáveis reais em ambiente seguro e validação/rate limiting. Para publicar notícias, eventos ou documentos, adicione conteúdo tipado e revise os textos oficialmente antes de gerar novo deploy. Imagens futuras devem ser reais ou claramente identificadas, com `alt` adequado.

## Informações oficiais ainda pendentes

Para manutenção interna: endereço, telefone, WhatsApp, e-mail, redes sociais, CNPJ, documentos e dados para doações. Esses itens não são exibidos como dados públicos no site.
