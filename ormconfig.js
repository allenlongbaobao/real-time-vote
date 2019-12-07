var isProduction = process.env.NODE_ENV === "production"
var ext = isProduction ? ".js" : ".ts"
var dir = isProduction ? "dist/src" : "src"
var path = require("path")

var host        = (process.env.MYSQL_HOST)             || "localhost"
var port        = parseInt(process.env.MYSQL_PORT, 10) || 3306
var username    = (process.env.MYSQL_USERNAME)         || "test"
var password    = (process.env.MYSQL_PASSWORD)         || "test"
var database    = (process.env.MYSQL_DATABASE)         || "vote"
// var synchronize = process.env.NO_SYNCHRONIZE ? false : true

module.exports = {
  type: "mysql",
  host: host,
  port: port,
  username: username,
  password: password,
  database: database,
  synchronize: true,
  loggin: false,
  charset: "utf8mb4",
  entities: [
    path.resolve(__dirname, dir, "entity/**/*" + ext),
  ]
}
