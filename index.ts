import { Valka } from "@aotools/valka"
import path from "path"
import { connect as connectDatabase } from "./src/database"

const start = async () => {
  await connectDatabase()
  await initValka()
  console.log("连接完成")
}

const initValka = async () => {
  const port = parseInt(process.env.PORT as string, 10) || 8889
  await Valka({
    port,
    baseDir: path.resolve(__dirname, "src"),
    enableAuth: true,
    jwtCookie: "token",
    jwtHeader: "jwt-token",
    jwtSecret: "default",
  })
}
start()
