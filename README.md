# Olá Mundo - Node.js para Microsoft Azure

Uma aplicação simples "Olá Mundo" em Node.js, pronta para ser executada no Microsoft Azure.

## 🚀 Recursos

- **Servidor HTTP nativo** usando o módulo `http` do Node.js
- **Múltiplas rotas** com interface web moderna
- **API JSON** com informações do servidor
- **Status do sistema** em tempo real
- **Configuração otimizada** para Azure
- **Interface responsiva** com design moderno

## 📋 Pré-requisitos

- Node.js 18.0.0 ou superior
- npm (incluído com Node.js)

## 🛠️ Instalação e Execução Local

1. **Clone ou baixe o projeto**
2. **Instale as dependências:**

   ```cmd
   npm install
   ```

3. **Execute a aplicação:**

   ```cmd
   npm start
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

## 🌐 Rotas Disponíveis

- `/` - Página principal com interface moderna
- `/api` - Endpoint JSON com informações da API
- `/status` - Status do servidor e informações do sistema
- `/sobre` - Informações sobre a aplicação
- Qualquer rota inexistente retorna página 404 personalizada

## ☁️ Deploy no Microsoft Azure

### Opção 1: Azure App Service

1. **Crie um App Service no Azure Portal**
2. **Configure as seguintes opções:**
   - Runtime: Node.js 18 LTS
   - Sistema Operacional: Linux ou Windows
3. **Deploy via VS Code:**

   - Instale a extensão "Azure App Service"
   - Faça login na sua conta Azure
   - Clique com botão direito no projeto → "Deploy to Web App"

4. **Deploy via Azure CLI:**

   ```bash
   # Login no Azure
   az login

   # Criar resource group (se não existir)
   az group create --name meu-resource-group --location "East US"

   # Criar App Service Plan
   az appservice plan create --name meu-app-plan --resource-group meu-resource-group --sku FREE

   # Criar Web App
   az webapp create --resource-group meu-resource-group --plan meu-app-plan --name minha-app-ola-mundo --runtime "NODE|18-lts"

   # Deploy do código
   az webapp deployment source config-zip --resource-group meu-resource-group --name minha-app-ola-mundo --src deploy.zip
   ```

### Opção 2: Container no Azure Container Instances

1. **Crie um Dockerfile:**

   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install --production
   COPY . .
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build e push da imagem:**
   ```bash
   docker build -t ola-mundo-azure .
   docker tag ola-mundo-azure meu-registry.azurecr.io/ola-mundo-azure
   docker push meu-registry.azurecr.io/ola-mundo-azure
   ```

## 🔧 Configurações do Azure

A aplicação está configurada para funcionar automaticamente no Azure:

- **Porta dinâmica:** Usa `process.env.PORT` fornecida pelo Azure
- **Headers CORS:** Configurados para permitir acesso externo
- **Engines:** Especifica versão mínima do Node.js no `package.json`
- **Scripts:** Comando de start configurado para produção
- **Tratamento de erro:** Manipuladores para encerramento gracioso

## 📁 Estrutura do Projeto

```
Projeto02082025_1/
├── app.js          # Aplicação principal
├── package.json    # Configurações e dependências
└── README.md       # Documentação
```

## 🎨 Interface

A aplicação possui uma interface moderna com:

- Design responsivo
- Gradientes e efeitos visuais
- Navegação entre páginas
- Informações em tempo real
- Tema com cores do Azure

## 📞 Suporte

Para dúvidas ou problemas:

1. Verifique os logs no Azure Portal
2. Confirme se todas as dependências estão instaladas
3. Verifique se a porta está configurada corretamente

## 📝 Licença

MIT License - Livre para uso e modificação.

---

**Desenvolvido para Microsoft Azure** ☁️
