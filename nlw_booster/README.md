# TYPESCRIPT || NLW

> files of project made y ROCKETSEAT

| funcção          | descrição                            |
| ---------------- | ------------------------------------ |
| `typescript -D`  | O bin do TYPESCRIPT                  |
| `ts-node -D`     | lib que vai converter o ts em js     |
| `npx tsc --init` | cria o arquivo de configuração do TS |
| `ts-node-dev`    | ouve as alterações e reflete         |

`npx knex migration:latest --knexfile knextfile.ts migrate:latest`

- Seeds
  dados de tabela por padrão

- multer
  usado para uplouds de imagens

| função         | descrição                                             |
| -------------- | ----------------------------------------------------- |
| `diskStorage`  | Trata os arquivos                                     |
| `:destination` | : Onde que vão parar os arquivos que forem carregados |
| `:filename`    | : função qye determina o nome do arquivo              |
| `::req`        | os dados enviados pelo user na requisiçao             |
| `::file`       | Objeto contendo informações sobre o arquivo           |

- React
  função são recriadas do zero sempre que o estado/any mudar

| função        | descrição                                                     |
| ------------- | ------------------------------------------------------------- |
| `useCallback` | memoriza uma função para alterar somente se uma variáel mudar |
