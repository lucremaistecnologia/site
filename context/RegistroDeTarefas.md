# Registro de Tarefas do Projeto Lucre+

Este documento serve como um registro centralizado para acompanhar o progresso do desenvolvimento do projeto Lucre+. Ele foi criado para ajudar a organizar as tarefas, documentar decisões importantes, registrar insights e manter um histórico claro das atividades realizadas.

Manter este arquivo atualizado é crucial para a colaboração da equipe e para garantir que todos estejam cientes do status do projeto, dos desafios superados e dos próximos passos.

---

## 📝 Tarefas

*   [x] Criar as linhas de conexão entre o logo da Lucre+ e os blocos de integração no IntegrationsSection.astro. (Data: 12/07/2025)
*   [x] Troque "Conheça mais sobre as nossas integrações." por um botão primary com o texto "Conheça mais integrações" o botão deve levar para a página "como funciona" na section integrações (Data: 12/07/2025)
*   [x] Inserir o logo da Lucre+ no componente de Integrações. (Data: 12/07/2025)
*   [x] Vamos criar um componente para a section Integrações. Deixei uma imagem "Integrações.png" como exemplo do layout e com o texto, cada empresa citada deverá possuir o seu respectivo logo dentro do quadradinho branco. (Data: 12/07/2025)
*   [x] Insira o componente criado na section integrações no index (Data: 12/07/2025)
*   [x] services-section, service-block: preciso de um efeito sombreado quando o hover for aplicado para melhorar a legibilidade do texto,  um after com degrade escuro seria suficiente (Data: 12/07/2025)
*   [x] Exemplo de Tarefa Concluída 1: Configuração inicial do ambiente de desenvolvimento. (Data: 10/07/2025)
*   [x] Exemplo de Tarefa Concluída 2: Criação da estrutura básica do projeto. (Data: 11/07/2025)
*   [x] Ajuste de padding da .hero-section: altere o padding usando cqw para que quando eu diminuir a largura da janela do navegador, o padding lateral diminua até chegar no minimo de '3em' e quando eu aumentar a largura do navegador ele aumente até os 9cqw (Data: 07/11/2025)
*   [x] Com base nesse site https://www.philschmid.de/context-engineering decida como implementar melhor e otimizar nossa engenharia de contexto? 
*   [x] criar um componente para a section de meios de pagamento da página pagamentos e taxas. (Data: 13/07/2025)
    *   [x] inserir o componente criado na section de meios de pagamento da página pagamentos e taxas. (Data: 13/07/2025) 
*   [x] Checar se as fontes estão corretamente importadas: Inter (todos os wght) e Montserrat (todos os tamanhos) (Data: 13/07/2025)
*   [x] Criar uma opção no .feature-block para feature-icon--big (Data: 13/07/2025)
    *   [x] deixar os feature-blocks do componente "MeiosDePagamento" com a opção feature-icon--big (Data: 13/07/2025)
*   [x] INTEGRATIONSsECTIONcOMPLETE.ASTRO - CHEQUE O MOTIVO DE ALGUMAS CLASSES DO CSS NÃO ESTAREM FUNCIONANDO CORRETAMENTE, EXEMPLO: 'logo-block' E 'logo-image' ESTÃO DEFINIDAS NO ARQUIVO MAS O NAVEGADOR NÃO CARREGA (Data: 19/07/2025)
*   [x] IntegrationsSectionComplete.astro - O FUNCIONAMENTO DO HOVER ESTÁ ERRADO, QUANDO O MOUSE SAI DO ITEM DA LISTA, ELA VOLTA PARA A 'áREAS DE MEMBROS' AO INVES DE FICAR NO ULTIMO ITEM QUE EU SELECIONEI (Data: 19/07/2025)
*   [x] Cheque o Swiper, ele só carrega quando recarrego a página, acredito que é a forma que o astrojs lida com script
*   [x] Insira um ícone do whatsapp fixo no canto inferior direito da página que leve a uma conversa com o numero 12982823850 é um numero brasileiro (Data: 20/07/2025)
*   [x] ADICIONEI MAIS ALGUNS LOGOS DE INTEGRAÇÕES NA PASTA LOGOS, INCLUA NO 'IntegrationsSectionComplete.astro' (Data: 21/07/2025)

*   Header:
    *   [x] deixe o link color: var(--color-button-primary-end);quado eu estiver na página indicada pelo link

*   index.astro:
    *   [x] na 'HeroSection' preciso que o botão 'Lucre mais agora' leve para o mesmo local que o 'whatsapp-icon' (uma conversa no whatsapp), o botão 'saiba mais sobre nós' deve levar para ȧpagina /comofunciona
    *   [x] todos os botões 'primary' da página devem levar para a conversa de whatsapp
    *   [x] o botão 'conheça mais integrações deve levar para a página '/comofunciona#integrations-section-complete'

*   comofunciona.astro:
    *   [x] insira o link 'https://api.whatsapp.com/send?phone=12982823850' no botão 'Lucre mais agora' do 'block-4'

*   Footer:
    *   [x] remova recursos;
    *   [x] cheque se cada link está enviando para a página correta e remova 'contato';
    *   [x] remova o a::after dos links (apenas do footer);
    *   [x] Serviços:
        *   [x]  'Integrações estratégicas' que leva para a section 'integrations-section' na página '/comofunciona';
        *   [x]  'formas de pagamento' que leva para a section a página 'pagamentos e taxas';
        *   [x]  'Soluções' que leva para a section a página 'pagamentos e taxas' na section 'highlight-section' ;

*   Versão mobile do site @media (max-width: 960px):
    *   [x] Tudo abaixo de 960px deverá ser mobile;
    *   [x] .hero-buttons {gap: 3cqw;} button {font-size: max(1rem, 1cqw); border: 0.41cqw solid hsl(0, 0%, 100%, 0.1); border-radius: 2cqw; padding: 3cqw; width: -webkit-fill-available; } --space-xxl: max(2em, 7cqw);
    *   [x] crie um script no componente SwiperComponent.astro para que ele só adicione a class 'swiper' na primeira div quando estiver em mobile (960px) (Data: 18/07/2025)
    *   [x] IntegrationsSectionComplete.astro - quero que o highlight-image-container se transforme em um 'modal' na versão mobile, quando o usuário clicar em um ítem da lista o 'modal'com os logos deve aparecer
    *   [x] edite a versão mobile do footer (max-width: 960px) deixe os links em 'Links uteis' e 'Serviços' menores, coloque as redes sociais centralizadas na página (mantendo uma ao lado da outra)
    *   [x] Agora deixe 'links uteis' e serviços um do lado do outro (no mobile)
    *   [x] Consegue colocar as redes sociais abiaxo de tudo (apénas no mobile)?
    *   [x] Corrija o erro que impede o menu mobile aparecer (Data: 20/07/2025)
    *   [x] Mantenha o logo lucre+ no menu mobile e insira os logos das redes sociais (mesma usadas no footer) abaixo dos link. (Data: 20/07/2025)
    *   [x] Esconder o mobile-logo na versão desktop, mantendo-o na versão mobile. (Referência: mobile-social-icons)

*    Correção de erros:
     *   [x] o link do botão no standard-call-to-action-section não está funcionando
     *   [x] trocar o git para https://github.com/lucremaistecnologia/site.git o usuário desse projeto especifico é: lucremaistecnologia@gmail.com, senha: essaEHasenhaPedro!@&$

---

## 💡 Observações e Insights

Este espaço é dedicado a registrar quaisquer observações importantes, desafios encontrados, soluções aplicadas, decisões de design, ou insights que surgiram durante o desenvolvimento. É um local valioso para documentar o "porquê" de certas escolhas e para compartilhar conhecimento.

*   **Observação:** A integração com a API externa Z apresentou um problema de autenticação. A solução foi ajustar o cabeçalho da requisição para incluir o token de acesso correto.
*   **Insight:** Descobrimos que a biblioteca W oferece uma funcionalidade que pode simplificar drasticamente a implementação da feature K, reduzindo o tempo de desenvolvimento em 30%.

---

## ➡️ Próximos Passos

Esta seção resume as próximas ações planejadas e as prioridades imediatas. Ajuda a manter o foco e a direcionar os esforços da equipe.

*   Definir as especificações detalhadas para a funcionalidade de pagamentos.
*   Iniciar a implementação da interface de usuário para o módulo de relatórios.
*   Realizar uma reunião de alinhamento para discutir os requisitos da próxima sprint.

---

## 📚 Sugestões para Manter o Arquivo Organizado e Útil

Para garantir que este registro de tarefas permaneça uma ferramenta eficaz, siga estas sugestões:

*   **Atualize Regularmente:** Mantenha o arquivo atualizado à medida que as tarefas são iniciadas, concluídas ou novas observações surgem.
*   **Seja Específico:** Descreva as tarefas e observações de forma clara e detalhada.
*   **Use Checkboxes:** Utilize `[ ]` para tarefas pendentes e `[x]` para tarefas concluídas na seção "Tarefas Pendentes" antes de movê-las para "Tarefas Concluídas".
*   **Adicione Datas:** Sempre inclua a data de conclusão para as tarefas finalizadas.
*   **Revise Periodicamente:** Faça revisões regulares para garantir que o conteúdo esteja relevante e preciso.
*   **Colabore:** Encoraje todos os membros da equipe a contribuir e consultar este documento.