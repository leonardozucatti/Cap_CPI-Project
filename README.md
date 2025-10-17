# cap_teste_leo

Projeto de exemplo usando SAP Cloud Application Programming Model (CAP).

Este repositório contém um serviço simples que gerencia uma entidade `Person` e expõe duas ações:

- `importData(payload: PersonList)` — importa uma lista de pessoas para a base.
- `getNameById(id: Integer)` — retorna o nome da pessoa para um ID informado.

## Estrutura do projeto

- `db/schema.cds` — definição da entidade `my.Person`.
- `srv/calc-service.cds` — definição do serviço `PersonService`.
- `srv/calc-service.js` — implementação das ações do serviço.
- `package.json` — dependências e scripts do projeto.

## Requisitos

- Node.js (recomendado 16+)
- npm ou yarn

Dependências já listadas em `package.json`:

- `@sap/cds` (runtime CAP)
- `express`
- `@cap-js/sqlite` (devDependency para testes locais com SQLite)

## Instalação

1. Clone o repositório:

```powershell
git clone <URL-DO-REPO>
cd cap_teste_leo
```

2. Instale dependências:

```powershell
npm install
```

## Executando o projeto

O projeto fornece um script `start` no `package.json` que executa o servidor CAP:

```powershell
npm start
```

Por padrão o CAP expõe os serviços em `http://localhost:4004` (verifique a saída no terminal).

## Endpoints / Ações

O serviço definido é `PersonService` (namespace do projeto `my`). Abaixo os dois handlers expostos como ações/funções:

- POST /personService/importData — ação `importData` (conteúdo no body conforme exemplo abaixo).
- POST /personService/getNameById — função `getNameById` (envie { "id": <n> } no body ou como chamada OData/JSON-RPC dependendo do cliente).

Observação: os caminhos exatos dependem do namespace e da forma como o CDS publica o serviço; ao iniciar o servidor, verifique a URL de serviço no log (normalmente algo como `/person/` ou `/PersonService/`).

### Exemplo de payload para `importData`

```json
{
  "payload": {
    "data": [
      { "id": 1, "name": "Alice" },
      { "id": 2, "name": "Bob" }
    ]
  }
}
```

### Exemplo de chamada para `getNameById`

```json
{
  "id": 1
}
```

Ou via curl/HTTP (exemplo genérico):

```powershell
# importar dados
curl -X POST http://localhost:4004/PersonService/importData -H "Content-Type: application/json" -d @payload.json

# obter nome
curl -X POST http://localhost:4004/PersonService/getNameById -H "Content-Type: application/json" -d '{"id":1}'
```

## Estrutura da entidade

Definição em `db/schema.cds`:

- `my.Person`
  - `id` (Integer, chave)
  - `name` (String)

## Testes locais

Para testes rápidos sem um banco externo, você pode instalar o adaptador SQLite (já está como devDependency) e iniciar o CDS que criará a base local automaticamente.

## Contribuição

Pull requests são bem-vindos. Abra issues para bugs ou sugestões de melhoria.

## Licença

Por favor adicione uma licença ao repositório (por exemplo MIT) se desejar torná-lo público.

---

Se quiser, eu posso também:

- Adicionar scripts de npm para testes e debug.
- Incluir um exemplo de `launch.json` para Visual Studio Code.
- Criar um `Dockerfile` para empacotar a aplicação.

Diga qual opção prefere e eu crio os artefatos.
# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.
