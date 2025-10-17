# cap_teste_leo

Projeto de exemplo usando SAP CAP

Este repositório contém um serviço que gerencia uma entidade `Person` e expõe duas ações:

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
