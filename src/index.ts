import { app } from "./app";
import { getTurmasAtivas } from "./endpoints/getTurmasAtivas";
import { postCriarTurma } from "./endpoints/postCriarTurma";
import { putEditarTurma } from "./endpoints/putEditarTurmas";
import { postCriarEstudante } from './endpoints/postCriarEstudante'
import { getEstudantesPeloNome } from './endpoints/getEstudantesPeloNome'
import { putMudarEstudanteDeTurma } from "./endpoints/putMudarEstudanteDeTurma";
import { getTodosMesmaTurma } from "./endpoints/getTodosMesmaTurma";
import { getEspecialistaPOO } from "./endpoints/getEspecialistaPOO";

app.get("/turmas", getTurmasAtivas)
app.post("/turmas", postCriarTurma)
app.put("/turmas/:id", putEditarTurma)

app.get("/estudantes", getEstudantesPeloNome)
app.post("/estudantes", postCriarEstudante)
app.put("/estudantes/:estudanteId", putMudarEstudanteDeTurma)
app.get("/todos",getTodosMesmaTurma)
app.get("/docentes", getEspecialistaPOO)