const http = require("http");

// Configuração da porta - Azure define a porta através da variável de ambiente PORT
const port = process.env.PORT || 3000;

// Criar o servidor HTTP
const server = http.createServer((req, res) => {
  // Configurar headers de resposta
  // res.writeHead(200, {
  //   "Content-Type": "text/html; charset=utf-8",
  //   "Access-Control-Allow-Origin": "*",
  // });

  // Roteamento simples
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    // Página principal - Olá Mundo
    const html = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Olá Mundo - Azure</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                color: white;
            }
            .container {
                text-align: center;
                background: rgba(255, 255, 255, 0.1);
                padding: 2rem;
                border-radius: 20px;
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
                border: 1px solid rgba(255, 255, 255, 0.18);
            }
            h1 {
                font-size: 3rem;
                margin-bottom: 1rem;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            }
            p {
                font-size: 1.2rem;
                margin-bottom: 2rem;
            }
            .azure-logo {
                font-size: 4rem;
                margin-bottom: 1rem;
            }
            .nav-links {
                margin-top: 2rem;
            }
            .nav-links a {
                color: white;
                text-decoration: none;
                margin: 0 1rem;
                padding: 0.5rem 1rem;
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 5px;
                transition: all 0.3s ease;
            }
            .nav-links a:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: translateY(-2px);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="azure-logo">☁️</div>
            <h1>Olá Mundo!</h1>
            <p>Aplicação Node.js rodando no Microsoft Azure</p>
            <p><strong>Servidor ativo na porta:</strong> ${port}</p>
            <p><strong>Data/Hora:</strong> ${new Date().toLocaleString(
              "pt-BR"
            )}</p>
            <div class="nav-links">
                <a href="/api">API Info</a>
                <a href="/status">Status</a>
                <a href="/sobre">Sobre</a>
            </div>
        </div>
    </body>
    </html>
    `;
    res.end(html);
  } else if (url === "/api" && method === "GET") {
    // Endpoint da API com informações JSON
    const apiResponse = {
      message: "Olá Mundo API!",
      timestamp: new Date().toISOString(),
      server: "Node.js",
      platform: "Microsoft Azure",
      port: port,
      version: "1.0.0",
      endpoints: [
        { path: "/", method: "GET", description: "Página principal" },
        { path: "/api", method: "GET", description: "Informações da API" },
        { path: "/status", method: "GET", description: "Status do servidor" },
        {
          path: "/sobre",
          method: "GET",
          description: "Informações sobre a aplicação",
        },
      ],
    };

    // res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(apiResponse, null, 2));
  } else if (url === "/status" && method === "GET") {
    // Endpoint de status do servidor
    const uptime = process.uptime();
    const statusResponse = {
      status: "online",
      uptime: `${Math.floor(uptime / 60)} minutos e ${Math.floor(
        uptime % 60
      )} segundos`,
      memory: process.memoryUsage(),
      timestamp: new Date().toISOString(),
      nodeVersion: process.version,
      platform: process.platform,
    };

    // res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(statusResponse, null, 2));
  } else if (url === "/sobre" && method === "GET") {
    // Página sobre a aplicação
    const html = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sobre - Olá Mundo Azure</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                margin: 0;
                padding: 2rem;
                color: white;
            }
            .container {
                max-width: 800px;
                margin: 0 auto;
                background: rgba(255, 255, 255, 0.1);
                padding: 2rem;
                border-radius: 20px;
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
                border: 1px solid rgba(255, 255, 255, 0.18);
            }
            h1 { text-align: center; margin-bottom: 2rem; }
            .back-link {
                display: inline-block;
                color: white;
                text-decoration: none;
                padding: 0.5rem 1rem;
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 5px;
                margin-bottom: 2rem;
                transition: all 0.3s ease;
            }
            .back-link:hover {
                background: rgba(255, 255, 255, 0.2);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <a href="/" class="back-link">← Voltar</a>
            <h1>Sobre esta Aplicação</h1>
            <h3>Tecnologias Utilizadas:</h3>
            <ul>
                <li><strong>Node.js</strong> - Runtime JavaScript</li>
                <li><strong>HTTP Module</strong> - Servidor web nativo do Node.js</li>
                <li><strong>Microsoft Azure</strong> - Plataforma de nuvem</li>
            </ul>
            
            <h3>Recursos:</h3>
            <ul>
                <li>Roteamento simples com múltiplas páginas</li>
                <li>API JSON com informações do servidor</li>
                <li>Status do sistema em tempo real</li>
                <li>Interface responsiva e moderna</li>
                <li>Pronto para deploy no Azure</li>
            </ul>
            
            <h3>Configuração para Azure:</h3>
            <ul>
                <li>Utiliza variável de ambiente PORT</li>
                <li>Headers CORS configurados</li>
                <li>Engines do Node.js especificadas no package.json</li>
                <li>Script de start para produção</li>
            </ul>
        </div>
    </body>
    </html>
    `;
    res.end(html);
  } else {
    // Página 404 - Não encontrado
    const html = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404 - Página não encontrada</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                color: white;
                text-align: center;
            }
            .container {
                background: rgba(255, 255, 255, 0.1);
                padding: 2rem;
                border-radius: 20px;
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
                border: 1px solid rgba(255, 255, 255, 0.18);
            }
            .back-link {
                color: white;
                text-decoration: none;
                padding: 0.5rem 1rem;
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 5px;
                margin-top: 1rem;
                display: inline-block;
                transition: all 0.3s ease;
            }
            .back-link:hover {
                background: rgba(255, 255, 255, 0.2);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <p>A rota <strong>${url}</strong> não existe.</p>
            <a href="/" class="back-link">← Voltar para Home</a>
        </div>
    </body>
    </html>
    `;
    //res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    //res.end(html);
  }
});

// Iniciar o servidor
server.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
  console.log(`🌐 Acesse: http://localhost:${port}`);
  console.log(`☁️  Pronto para deploy no Microsoft Azure!`);
});

// Manipulador de erro do servidor
server.on("error", (err) => {
  console.error("❌ Erro no servidor:", err);
});

// Manipulador de encerramento gracioso
process.on("SIGTERM", () => {
  console.log("🛑 Recebido SIGTERM, encerrando servidor...");
  server.close(() => {
    console.log("✅ Servidor encerrado com sucesso");
    process.exit(0);
  });
});
