import express from "express";
import http from "http";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import createError from "http-errors";
import dbConnect from "db";

dotenv.config();
let app = express();
dbConnect();

const port = process.env.PORT || "4000";

app.server = http.createServer(app);

app.server.listen(port);
app.server.on("error", onError);
app.server.on("listening", onListening);

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // querystring 사용

app.use((req, res, next) => {
  next(create);
});

//
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = app.server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("express listening on " + port);
}