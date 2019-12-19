import { Valka } from "@aotools/valka"
import path from "path"
import { connect as connectDatabase } from "./src/database"
import socketIo from "socket.io"
import { setData, storeData } from "./src/constraints"

interface IVote {
  items: number[]
}

const start = async () => {
  await connectDatabase()
  await initValka()
}

const initValka = async () => {
  const port = parseInt(process.env.PORT as string, 10) || 8889
  const http = await Valka({
    port,
    baseDir: path.resolve(__dirname, "src"),
    enableAuth: true,
    jwtCookie: "token",
    jwtHeader: "jwt-token",
    jwtSecret: "default",
  })
  const io = socketIo(http)
  io.on("connect", (socket: any) => {
    socket.on("vote", (data: IVote) => {
      console.log("data", data)
      handleVote(data, io)
    })
  })
}

const handleVote = (data: IVote, io: any): void => {
  data.items.forEach((id: number) => {
    const updatedData = setData(id)
    console.log("向display传输数据", updatedData)
    io.emit("flush", updatedData)
  })
}
start()
