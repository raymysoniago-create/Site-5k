# Site-5k
Vender sites

## Dr. Igor Andrade · Estética Avançada · prévia de site

Pasta `dr-igor-andrade/`. Prévia de site one-page para apresentar ao Dr. Igor Andrade
(Feira de Santana, BA). **Não é o site oficial** até ele aprovar.

```
dr-igor-andrade/
  index.html   página inteira, com CSS e JS embutidos
  img/         fotos recortadas (WebP), imagem de prévia do WhatsApp (og-image.jpg) e ícones
```

- Para publicar na Vercel, importe o repositório e defina **Root Directory = `dr-igor-andrade`**
  (Framework Preset: Other, sem comando de build). No Netlify Drop, envie só essa pasta.
- Endereço previsto nas tags de prévia: `https://dr-igor-andrade.vercel.app/`. Se o endereço final
  for outro, troque esse texto em `index.html` (comentário `PUBLICAÇÃO` no topo e no bloco JSON-LD).
- Fontes Cormorant Garamond e Jost carregadas do Google Fonts.
- A tag `<meta name="robots" content="noindex, nofollow">` impede o Google de indexar a prévia.
  Apague essa linha quando o site virar oficial.

### O que precisa ser confirmado com o Dr. Igor (marcado como [EDITAR] na página)

| Item | Situação na prévia |
| --- | --- |
| Formação, registro profissional e tempo de atuação | Não informados. Marcados com [EDITAR] na seção Sobre. |
| Rua, número e complemento | Só o bairro (Ponto Central) foi informado. |
| Horário de atendimento | Não informado. |
| Link do Google Maps | O botão "Ver no mapa" faz uma busca pelo nome. Trocar pelo link exato do perfil, se ele quiser. |
| Nomes dos procedimentos nos antes e depois | "Lábios: preenchimento labial" e "Perfil: harmonização facial" deduzidos das artes. Confirmar. |
| Uso das fotos de antes e depois | Confirmar a autorização das pacientes e as regras de publicidade do conselho profissional dele. |

### Sobre as imagens

- As faixas pretas dos prints foram recortadas. As fotos de antes e depois foram **apenas recortadas**
  das artes do Instagram, sem retoque de pele, contorno ou cor.
- O card da lipo enzimática usa a parte da foto da arte original (mão na cintura). O texto da arte
  virou texto do card.
- As artes de estética íntima não foram usadas, como pedido: o card é só texto, com um desenho discreto.
- O logo dos prints era pequeno demais para ficar nítido, então o monograma "IA" foi recriado em vetor
  dourado e o nome em Cormorant Garamond. Trocar pelo arquivo original do logo se ele enviar.
- Pedir as fotos originais em alta resolução melhora muito a nitidez em celulares.

### Como editar

- **WhatsApp**: buscar e substituir `5575992308567` em `index.html`.
- **Mensagens prontas**: estão no próprio link de cada botão (`?text=...`, já codificado).
- **Cores e fontes**: variáveis no início do `<style>` (`:root`).

---

## Lumi Divine Esthetic · prévia de landing page

Prévia conceitual de site para apresentar à equipe da Lumi Divine Esthetic.
**Não é o site oficial da clínica** e não deve ser publicado como tal sem aprovação.

- HTML, CSS e JavaScript puros. Sem build, sem dependências.
- Funciona em qualquer hospedagem estática (HostGator, Netlify, GitHub Pages etc.).
- Imagens, fontes e ícones ficam na própria pasta, sem serviços externos.

### Como abrir

Dar dois cliques no `index.html` já funciona. Para simular um servidor de verdade:

```bash
python3 -m http.server 8080
# depois abra http://localhost:8080
```

### Estrutura

```
index.html              página única, com as seções comentadas
assets/css/style.css    tokens de cor e tipografia no topo, depois cada seção
assets/js/main.js       menu, filtros, entradas suaves e mensagens do WhatsApp
assets/img/             imagens otimizadas (WebP) e imagem de compartilhamento
assets/fonts/           Bodoni Moda, Cinzel e Jost (SIL Open Font License)
```

### Como editar

- **Número do WhatsApp**: está no `href` dos links (`https://wa.me/5511939256333`).
  Para trocar, use buscar e substituir em `index.html` por `5511939256333`.
- **Mensagens prontas do WhatsApp**: em `assets/js/main.js` (`MSG_AGENDAR` e `msgAssunto`).
  Cada card usa o atributo `data-wa-assunto` para dizer o nome do tratamento.
- **Tratamentos**: cada card é um bloco `<li class="card">` comentado em `index.html`.
  Copie, edite ou apague o bloco inteiro. `data-categoria` aceita `rosto`, `corpo` ou `cabelo`.
- **Cores e fontes**: variáveis no início de `assets/css/style.css` (`:root`).

### Modo prévia

A classe `is-preview` no `<body>` mostra a faixa "Prévia conceitual" e as etiquetas
tracejadas "A confirmar". Para a versão oficial:

1. Remover a classe `is-preview` do `<body>` e o bloco `<div class="preview-bar">`.
2. Remover `<meta name="robots" content="noindex, nofollow">`.
3. Trocar `og:url` e `og:image` pelos endereços completos do domínio (comentário `DEPLOY STEP`).

### O que precisa ser confirmado com a clínica antes de publicar

As informações vieram dos materiais de divulgação enviados (panfletos e posts do Facebook).
Nada foi inventado, mas tudo precisa de confirmação:

| Item | Situação na prévia |
| --- | --- |
| WhatsApp principal | Usado (11) 93925-6333, que aparece como WhatsApp em 3 materiais. Outros materiais citam (11) 98812-5536 e um cita (11) 98812-5366. |
| Endereço | Rua Barão de Mauá, 450, Sala 509, Hotel Mercure, Centro, Guarulhos/SP. Confirmar CEP. |
| Horário de atendimento | Não informado nos materiais. Campo marcado "a confirmar". |
| Instagram | @lumidivine.esthetic (citado no post do Setembro Amarelo). Confirmar link. |
| Facebook | Página "LUMI Divine Esthetic". Falta o link completo. |
| Lista de tratamentos e textos | Baseada nos panfletos. Confirmar quais procedimentos seguem disponíveis. |
| Oferta do ultrassom (R$ 140 no Pix) | Valor de panfleto. Confirmar validade. |
| Clube Lumi Divine (R$ 349,90/mês) | Valor e grupos da divulgação de 31/08. Confirmar condições atuais. |
| Texto "Sobre" | Provisório, escrito a partir das frases da própria clínica. |
| Foto do espaço | Não havia foto do ambiente. A seção "Sobre" usa a foto do panfleto do ultrassom. |
| Imagens de antes e depois | Recortadas dos panfletos, sem retoque. Confirmar autorização de uso de imagem e as regras de publicidade do conselho profissional de cada procedimento. Pedir os arquivos originais em alta resolução. |

### Sobre as imagens

- As fotos de antes e depois foram **apenas recortadas** dos panfletos, sem ajuste de pele,
  contorno ou cor, porque documentam resultados.
- As fotos ilustrativas (retrato do topo, braço com ultrassom e peitoral) foram recortadas
  e ampliadas com Real-ESRGAN para ficarem nítidas. No retrato do topo, o botão de navegação
  do Facebook que aparecia sobre o rosto foi removido digitalmente.
- O logotipo do cabeçalho é provisório: nome em texto e um lótus em linha inspirado na marca.
  Trocar pelo arquivo original do logo quando a clínica enviar.
