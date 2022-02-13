import express from "express" 
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const __public = path.join(__dirname, "public")

const app = express()

app.use(express.static(__public))

app.listen(3000)
console.log("Listening on port http://localhost:" + 3000)