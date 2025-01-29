/**
 * Arquivo: src/app.ts
 * Descrição: Este arquivo é responsável por configurar e inicializar a aplicação Express,
 * incluindo configurações de middleware, carregamento de variáveis de ambiente e definição de rotas.
 *
 * Funcionalidades implementadas:
 * - Configuração do Express com JSON middleware
 * - Carregamento das variáveis de ambiente usando dotenv
 * - Definição de rotas de usuários
 * - Logging de requisições usando Morgan
 */

import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import routes from "./routes";
import userRoutes from "./routes/users";

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();

// Middleware para log das requisições HTTP
app.use(morgan("dev"));

// Middleware para interpretação de JSON nas requisições
app.use(express.json());

// Definição de rotas de usuários
app.use("/api/users", userRoutes);
app.use("/", routes);

export default app;
