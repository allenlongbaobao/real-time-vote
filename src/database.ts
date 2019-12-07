import "reflect-metadata"
import { createConnection } from "typeorm"

export async function connect() {
  return await createConnection().then(async (connection) => {
  })
}
