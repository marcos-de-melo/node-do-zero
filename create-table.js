import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS videos;`.then(() => {
//     console.log("Tabela deletada com sucesso");
// }).catch((err) => {
//     console.error("Não foi possível deletar a tabela");
//     console.error(err);
// })

sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
);
`.then(() => {
    console.log("Tabela criada com sucesso");
}).catch((err) => {
    console.error("Não foi possível criar a tabela");
    console.error(err);
})