# Sistema de Gerenciamento de tarefas para empresa Silver

## Desenvolvimento

Para trabalhar no projeto o desenvolvedor deverá seguir os seguintes passos:

1. Clonar o repositório: 
  ```bash
    git clone https://github.com/CasePrinter/todo-manager-app.git
  ```
2. Criar uma nova branch local a partir da branch _main_:
  
  ```bash
    # As branches serão renoemadas conforme conformfe o trabalho a ser realizado: Feat, Fix, Build, HotFix.
      git checkout feat/adicionar-funcionalidade-get-usuarios
  ```
3. Realiazar o trabalho criar uma _Pull Request_ para a branch _main_ marcando os revisores necessários.
4. Após aprovada a _Pull Request_ pode realizar o _merge_ na branch _homologacao_
5. Ao realizar o merge na branch _homologacao_ executará o workflow do GitHub actions, assim realizando o deploy e disponibilizandoo projeto em:
 - Homologacão: [link](https://react-app-1009725684335.us-central1.run.app/)
 

# Executando o projeto local
- Configurar a base url da api do backend em [LINK](https://github.com/CasePrinter/todo-manager-app/blob/homologacao/src/services/api.js#L4)
- Para rodar o projeto pode executar o comando:
```bash
    npm run start
  ```
