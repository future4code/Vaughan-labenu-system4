import { getTurmasAtivas } from "./endpoints/getTurmasAtivas";
import { app } from "./app";
import { postCriarTurma } from "./endpoints/postCriarTurma";
import { putEditarTurma } from "./endpoints/putEditarTurmas";

app.get("/turmas", getTurmasAtivas)
app.post("/turmas", postCriarTurma)
app.put("/turmas/:id", putEditarTurma)
