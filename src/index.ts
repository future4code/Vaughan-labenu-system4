import { get } from "./endpoints/get";
import { app } from "./app";

app.get("/", get)


