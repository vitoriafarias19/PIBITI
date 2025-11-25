const express = require("express");
const path = require("path");
const app = express();

// Configurar EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Arquivos estáticos
app.use(express.static(path.join(__dirname, "src/public")));
const db = require('./src/config/db');

// Rotas
const homeRoutes = require("./src/routes/homeRoutes");
app.use("/", homeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
