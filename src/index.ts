import { app } from "./app";
import { getTurmasAtivas } from "./endpoints/getTurmasAtivas";
import { postCriarTurma } from "./endpoints/postCriarTurma";
import { putEditarTurma } from "./endpoints/putEditarTurmas";
import { postCriarEstudante } from './endpoints/postCriarEstudante'
import { getEstudantesPeloNome } from './endpoints/getEstudantesPeloNome'
import { putMudarEstudanteDeTurma } from "./endpoints/putMudarEstudanteDeTurma";
import { postCriarDocente } from "./endpoints/postCriarDocente";
import { getDocentes } from "./endpoints/getDocentes";
import { putMudarDocenteDeTurma } from "./endpoints/putMudarDocenteDeTurma";

app.get("/turmas", getTurmasAtivas)
app.post("/turmas", postCriarTurma)
app.put("/turmas/:id", putEditarTurma)

app.get("/estudantes", getEstudantesPeloNome)
app.post("/estudantes", postCriarEstudante)
app.put("/estudantes/:estudanteId", putMudarEstudanteDeTurma)

app.get("/docentes", getDocentes)
app.post("/docentes", postCriarDocente)
app.put("/docente/:docenteId", putMudarDocenteDeTurma)