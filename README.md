# projeto22-autoral-back-end
Este é o repositório para a aplicação de Prontuário Eletrônico e Registro de Histórico de Pacientes, chamado inicialmente de HealthOn. Esta aplicação tem como objetivo fornecer uma plataforma para o registro e gerenciamento de prontuários eletrônicos de pacientes, bem como o acompanhamento de histórico de consultas, observações importantes e detalhes relevantes. A aplicação foi desenvolvida com a possibilidade de evolução, permitindo a adição de novas funcionalidades no futuro.
* Repositório front-end: https://github.com/gavuolo/projeto22-autoral-front-end
* Deploy front-end:  

---
<h4>📂 Documentação da API</h4>
<li>https://www.notion.so/Projeto-Autoral-HealthOn-46ca573a8a664f348724913bccb8d408?pvs=4</li>

---

<h2>Funcionalidades</h2>
<li> Registro de funcionários e profissionais de saúde: Permite o cadastro e gerenciamento de informações sobre funcionários e profissionais de saúde relacionados ao local de atendimento, incluindo nome, função, especialidade e dados de contato;</li>
<li> Adição de prontuário: Permite a criação e atualização de prontuários eletrônicos para pacientes registrados. Isso inclui informações médicas detalhadas, diagnósticos, prescrições e quaisquer outras notas relevantes;</li>
<li> Registro de histórico de consultas: Possibilita o registro detalhado do histórico de consultas de cada paciente. Isso inclui informações sobre consultas anteriores, tratamentos realizados, medicações prescritas e resultados de exames;</li>
<li> Acompanhamento e observações importantes: Oferece a capacidade de monitorar o acompanhamento do paciente ao longo do tempo, adicionando observações importantes sobre o progresso do tratamento, reações a medicamentos, mudanças no estado de saúde, entre outros;</li>

<h2>Futuras funcionalidades (Roadmap)</h2>
Planejo evoluir essa aplicação adicionando as seguintes funcionalidades no futuro:
<li> Sistema de agendamento de consultas: Permitirá que os pacientes agendem consultas com os profissionais de saúde disponíveis, seja diretamente pelo paciente ou por meio da recepção;</li>
<li> Histórico de exames: Adição da funcionalidade para registrar e acompanhar os resultados de exames realizados pelos pacientes;</li>
<li> Outras funcionalidades adicionais: Estou aberta a sugestões e feedback dos usuários para melhorar continuamente o sistema, adicionando funcionalidades que sejam úteis e relevantes para o contexto de prontuário eletrônico e registro de histórico de pacientes.</li>



---
<h2>Instalação</h2>

1. Clonar o Projeto
```bash
git clone git@github.com:gavuolo/projeto22-autoral-back-end.git
```

2. Intalar dependências
```bash
npm install
```

3. Criar DB dev
```bash
npm run dev:migrate
```

4. Criar DB test
```bash
npm run test:migrate
```

3. Rodar o projeto
```bash
npm run dev
```
