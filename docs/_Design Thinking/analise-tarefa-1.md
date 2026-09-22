# Análise de Tarefa I - 14/09/2026

A análise hierárquica de tarefas (AHT) é uma técnica utilizada para decompor e entender as atividades que um usuário realiza ao interagir com uma aplicação ou sistema. Sua principal função é detalhar, de forma estruturada, as metas, tarefas e ações envolvidas no uso do produto, permitindo identificar pontos críticos, oportunidades de melhoria e necessidades específicas das personas.

## 1. Objetivo da Análise de Tarefas

Compreender o fluxo de trabalho dos usuários, desde as metas gerais até as ações mais específicas. Identificar possíveis dificuldades, redundâncias ou etapas desnecessárias no processo. Apoiar o design de interfaces mais intuitivas e eficientes, alinhadas às necessidades reais dos usuários. Facilitar a comunicação entre equipes de desenvolvimento, design e stakeholders, tornando claro o que precisa ser atendido pela aplicação.

## 2. Público-Alvo (Personas)

**Nome da Persona:** Administrador (Admin)
**Descrição:** Responsável pela gestão completa do sistema acadêmico — cadastros institucionais, alocação de recursos e configuração de turmas.
**Necessidades:** Cadastrar e importar dados em massa (professores, alunos, turmas) de forma rápida e sem erros; visualizar e ajustar alocações manualmente quando o sistema automático falhar.
**Objetivos:** Manter a base de dados da instituição (campus, salas, cursos, matérias, professores, alunos, turmas) sempre atualizada e consistente, garantindo que salas e horários não tenham conflitos.

**Nome da Persona:** Professor
**Descrição:** Docente vinculado a uma ou mais matérias, com disponibilidade de horário cadastrada no sistema.
**Necessidades:** Ter sua disponibilidade respeitada na alocação de aulas; acessar informações sobre suas turmas, salas e horários.
**Objetivos:** Ser alocado em salas e horários compatíveis com sua disponibilidade, sem conflito com outros professores.

**Nome da Persona:** Aluno
**Descrição:** Estudante matriculado em um curso, vinculado a um campus e turno.
**Necessidades:** Escolher matérias, acompanhar seu desempenho (acertos em provas e pontuação) e ser alocado em turma/sala corretamente.
**Objetivos:** Visualizar seu progresso acadêmico e escolher matérias/curso de forma simples, permanecendo sempre na mesma sala e turno do seu campus.

## 3. Metas da Aplicação

**Meta 1:** Centralizar o cadastro de todas as entidades acadêmicas (admins, campus, salas, cursos, matérias, professores, alunos e turmas) em um único sistema administrado pelo admin.

**Meta 2:** Automatizar a alocação de professores em salas e a distribuição de alunos em turmas, respeitando regras de conflito de horário, capacidade e vínculo de campus/turno, com possibilidade de ajuste manual.

**Meta 3:** Permitir que o aluno acompanhe seu desempenho acadêmico (acertos, pontos) e escolha matérias/curso de forma autônoma.

## 4. Tarefas Principais

| Tarefa | Descrição | Persona Responsável |
|---|---|---|
| Cadastrar admin | Registrar novo administrador com CPF, e-mail e senha | Admin |
| Cadastrar campus | Registrar unidade/campus por cidade | Admin |
| Cadastrar sala | Registrar sala com recursos disponíveis e capacidade | Admin |
| Cadastrar curso | Registrar curso com nome e fluxograma/ementa | Admin |
| Cadastrar matéria | Registrar matéria com nome e carga horária | Admin |
| Cadastrar/importar professor | Registrar ou importar professor com CPF, e-mail profissional, senha e disponibilidade de horário | Admin |
| Cadastrar/importar aluno | Registrar ou importar aluno com matrícula, e-mail, senha e vínculo ao curso | Admin |
| Cadastrar/importar turma | Registrar ou importar turma, vinculando ID da turma e matéria | Admin |
| Alocar professor em sala | Distribuir professores nas salas respeitando disponibilidade e evitando conflitos | Admin |
| Distribuir aluno em sala | Alocar alunos em turmas priorizando campus e turno da matrícula, com ajuste manual disponível | Admin |
| Escolher matéria | Selecionar matéria para cursar, visualizando desempenho e pontuação | Aluno |

## 5. Ações Detalhadas

**Tarefa: Cadastrar/importar aluno**

Ação 1: Admin acessa o módulo de cadastro de alunos e escolhe entre cadastro individual ou importação em lote.
Ação 2: Admin preenche ou importa matrícula, e-mail e define senha do aluno.
Ação 3: Admin vincula o aluno ao curso correspondente.
Ação 4: Sistema valida os dados (matrícula e e-mail únicos) e confirma o cadastro.

**Tarefa: Alocar professor em sala**

Ação 1: Admin seleciona a sala e o horário desejado.
Ação 2: Sistema verifica se já existe outro professor alocado na mesma sala/horário.
Ação 3: Sistema verifica se o professor selecionado está disponível naquele turno e horário do dia.
Ação 4: Sistema confirma a alocação ou apresenta erro de conflito, permitindo ajuste manual pelo admin.

**Tarefa: Distribuir aluno em sala**

Ação 1: Sistema verifica o campus e turno em que o aluno está matriculado.
Ação 2: Sistema prioriza a alocação do aluno em turma do mesmo campus e turno.
Ação 3: Sistema verifica se o aluno já está alocado em outra sala, impedindo duplicidade.
Ação 4: Admin pode realizar ajuste manual da alocação, se necessário.

**Tarefa: Escolher matéria (Aluno)**

Ação 1: Aluno acessa a lista de matérias disponíveis para o seu curso.
Ação 2: Sistema exibe a relação de acertos em provas anteriores.
Ação 3: Sistema exibe a pontuação acumulada do aluno.
Ação 4: Aluno escolhe o curso/matéria para aplicar a pontuação e confirma a seleção.
