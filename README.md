# AACANS — site institucional

Site institucional da Associação de Apoio às Pessoas com Câncer de Sertãozinho-SP. A aplicação comunica a fase de estruturação da associação com transparência e sem publicar dados oficiais ainda não confirmados.

## Stack

Next.js com App Router, TypeScript, CSS responsivo, Lucide React e React Hook Form/Zod preparados para a próxima etapa. O projeto usa Server Components por padrão e está pronto para Vercel.

## Executar

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Estrutura

`app/` contém páginas, metadados, sitemap e robots; `components/` contém navegação, rodapé, acessibilidade, formulários e cards. A logo oficial pode substituir o componente `Logo` preservando proporções.

## Formulários e evolução

Os formulários mostram um estado transparente e não fingem envio enquanto `CONTACT_FORM_ENDPOINT` não estiver configurado. A integração deve ser feita por endpoint server-side com validação, rate limiting e Turnstile. Uma futura camada de dados pode conectar o front-end ao Supabase sem reescrever a apresentação.

## Deploy

Importe o repositório na Vercel, mantenha o comando de build padrão e configure apenas variáveis de ambiente reais. Não há pagamento ou doação ativa nesta versão.

## Informações oficiais ainda pendentes

Para manutenção interna: endereço, telefone, WhatsApp, e-mail, redes sociais, CNPJ, documentos e dados para doações. Esses itens não são exibidos como dados públicos no site.
